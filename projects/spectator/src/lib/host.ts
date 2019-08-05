/**
 * @license
 * Copyright Netanel Basal. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NetanelBasal/spectator/blob/master/LICENSE
 */

import { DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

import { _getChild, _getChildren, _setInput, Spectator } from './internals';
import * as customMatchers from './matchers';
import { DOMSelector } from './dom-selectors';
import { HostComponent, initialModule, SpectatorOptions } from './config';
import { Token } from './token';
import { isType } from './is-type';

export class SpectatorWithHost<C, H = HostComponent> extends Spectator<C> {
  hostComponent: H;
  /** We need a different property when there is an host because it's different type */
  hostFixture: ComponentFixture<H>;
  hostElement: HTMLElement;
  hostDebugElement: DebugElement;

  private _debugElement: DebugElement;
  get debugElement() {
    return this._debugElement || this.hostDebugElement;
  }
  set debugElement(value) {
    this._debugElement = value;
  }

  /**
   * Run detect changes on the host component
   */
  detectChanges() {
    this.hostFixture.detectChanges();
  }

  queryHost<T extends Element>(selector: string | DOMSelector): T;
  queryHost<T>(directive: Type<T>): T;
  queryHost<T>(directiveOrSelector: Type<any> | string, options: { read: Token<T> }): T;
  queryHost<T>(directiveOrSelector: Type<T> | DOMSelector | string, options: { read } = { read: undefined }): T {
    return _getChild<T>(this.hostDebugElement)(directiveOrSelector, options);
  }

  queryHostAll<T extends Element>(selector: string | DOMSelector): T[];
  queryHostAll<T>(directive: Type<T>): T[];
  queryHostAll<T>(directiveOrSelector: Type<any> | string, options: { read: Token<T> }): T[];
  queryHostAll<T>(directiveOrSelector: Type<T> | DOMSelector | string, options: { read } = { read: undefined }): T[] {
    return _getChildren<T>(this.hostDebugElement)(directiveOrSelector, options);
  }

  setHostInput<K extends keyof H>(input: Partial<H>);
  setHostInput<K extends keyof H>(input: K, inputValue: H[K]);
  setHostInput<K extends keyof H>(input: Partial<H> | K, inputValue?: H[K]) {
    _setInput(input, inputValue, this.hostComponent);
    this.hostFixture.detectChanges();
  }

  getDirectiveInstance<T>(directive: Type<T>, all?: false): T;
  getDirectiveInstance<T>(directive: Type<T>, all?: true): T[];
  getDirectiveInstance<T>(directive: Type<T>, all = false): T | T[] {
    if (all) {
      return this.hostFixture.debugElement.queryAll(By.directive(directive)).map(d => d.injector.get(directive));
    }

    return this.hostFixture.debugElement.query(By.directive(directive)).injector.get(directive);
  }
}

export function createHostComponentFactory<C, H = HostComponent>(typeOrOptions: SpectatorOptions<C, H> | Type<C>): (template: string, detectChanges?: boolean, complexInputs?: Partial<C>) => SpectatorWithHost<C, H> {
  const { component, moduleMetadata, host } = initialModule<C, H>(typeOrOptions, true);

  const dc = isType(typeOrOptions) || typeOrOptions.detectChanges === undefined ? true : typeOrOptions.detectChanges;

  beforeEach(() => {
    jasmine.addMatchers(customMatchers as any);
    TestBed.configureTestingModule(moduleMetadata);
  });

  return (template: string, detectChanges = true, initialInputs?: Partial<C>) => {
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: moduleMetadata.entryComponents
      }
    });

    TestBed.overrideComponent(host, { set: { template: template } });

    if (moduleMetadata.componentProviders) {
      TestBed.overrideComponent(component, {
        set: {
          providers: [moduleMetadata.componentProviders]
        }
      });
    }

    const spectatorWithHost = new SpectatorWithHost<C, H>();
    spectatorWithHost.hostFixture = TestBed.createComponent(host);
    //  The host component instance
    spectatorWithHost.hostComponent = spectatorWithHost.hostFixture.componentInstance;
    spectatorWithHost.hostDebugElement = spectatorWithHost.hostFixture.debugElement;
    spectatorWithHost.hostElement = spectatorWithHost.hostFixture.nativeElement;
    // The tested component debug element
    spectatorWithHost.debugElement = spectatorWithHost.hostFixture.debugElement.query(By.directive(component));
    // The tested component instance, rendered inside the host
    if (spectatorWithHost.debugElement) {
      spectatorWithHost.component = spectatorWithHost.debugElement.componentInstance;
      spectatorWithHost.element = spectatorWithHost.debugElement.nativeElement;
    }

    if (initialInputs) {
      Object.keys(initialInputs).forEach(key => {
        spectatorWithHost.component[key] = initialInputs[key];
      });
    }

    if (dc && detectChanges) {
      spectatorWithHost.hostFixture.detectChanges();
    }

    return spectatorWithHost;
  };
}
