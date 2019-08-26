import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/core';

import { SpyObject } from './mock';
import { Token } from './token';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  JSONP = 'JSONP',
  OPTIONS = 'OPTIONS'
}

export class SpectatorHTTP<T> {
  httpClient: HttpClient;
  controller: HttpTestingController;
  dataService: T;
  get: <S>(service: Token<S> | Token<any>) => S;
  expectOne: (url: string, method: HTTPMethod) => TestRequest;
}

export function createHTTPFactory<T>(dataService: Type<T>, providers = []): () => SpectatorHTTP<T> {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [dataService, ...providers]
    });
  }));

  afterEach(() => {
    TestBed.get(HttpTestingController).verify();
  });

  return () => {
    const http = new SpectatorHTTP<T>();
    http.controller = TestBed.get(HttpTestingController);
    http.dataService = TestBed.get(dataService);
    http.httpClient = TestBed.get(HttpClient);
    http.get = function<R extends T, T = any>(provider: Token<T>): R & SpyObject<R> {
      return TestBed.get(provider);
    };

    http.expectOne = (url: string, method: HTTPMethod) => {
      expect(true).toBe(true); // workaround to avoid `Spec has no expectations` https://github.com/NetanelBasal/spectator/issues/75
      const req = http.controller.expectOne({
        url,
        method
      });
      // assert that there are no outstanding requests.
      http.controller.verify();

      return req;
    };

    return http;
  };
}
