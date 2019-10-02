# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.3.3"></a>
## [4.3.3](https://github.com/ngneat/spectator/compare/v4.3.2...v4.3.3) (2019-10-02)



<a name="4.3.2"></a>
## [4.3.2](https://github.com/ngneat/spectator/compare/v4.3.1...v4.3.2) (2019-09-24)


### Bug Fixes

* **mock:** fix typings error on TS 3.5 ([26fc6ba](https://github.com/ngneat/spectator/commit/26fc6ba))



<a name="4.3.1"></a>
## [4.3.1](https://github.com/ngneat/spectator/compare/v4.3.0...v4.3.1) (2019-09-24)


### Bug Fixes

* **mock:** make SpyObject properties writable by default ([3d0931f](https://github.com/ngneat/spectator/commit/3d0931f))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/ngneat/spectator/compare/v4.2.3...v4.3.0) (2019-09-20)


### Features

* **routing:** add option to disable stubs and use RouterTestingModule ([#188](https://github.com/ngneat/spectator/issues/188)) ([2fb7390](https://github.com/ngneat/spectator/commit/2fb7390))



<a name="4.2.3"></a>
## [4.2.3](https://github.com/ngneat/spectator/compare/v4.2.2...v4.2.3) (2019-09-17)


### Bug Fixes

* **spectator:** fix incorrect method typing ([#187](https://github.com/ngneat/spectator/issues/187)) ([a405438](https://github.com/ngneat/spectator/commit/a405438))



<a name="4.2.2"></a>
## [4.2.2](https://github.com/ngneat/spectator/compare/v4.2.1...v4.2.2) (2019-09-10)


### Bug Fixes

* 🐛 refactor entry components for ivy ([06d2c11](https://github.com/ngneat/spectator/commit/06d2c11))



<a name="4.2.1"></a>
## [4.2.1](https://github.com/ngneat/spectator/compare/v4.2.0...v4.2.1) (2019-09-09)


### Bug Fixes

* **spectator:** fix incorrect element typing ([#185](https://github.com/ngneat/spectator/issues/185)) ([9c1dae4](https://github.com/ngneat/spectator/commit/9c1dae4))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/ngneat/spectator/compare/v4.0.2...v4.2.0) (2019-09-05)


### Bug Fixes

* support structural directive in host/directive ([#178](https://github.com/ngneat/spectator/issues/178)) ([216f1c8](https://github.com/ngneat/spectator/commit/216f1c8))


### Features

* 🎸 mouse ([0303844](https://github.com/ngneat/spectator/commit/0303844))
* **overrides:** improve type inference for host props overrides ([#178](https://github.com/ngneat/spectator/issues/178)) ([216f1c8](https://github.com/ngneat/spectator/commit/216f1c8))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/ngneat/spectator/compare/v4.0.2...v4.1.0) (2019-09-04)


### Features

* 🎸 mouse ([0303844](https://github.com/ngneat/spectator/commit/0303844))



<a name="4.0.2"></a>
## [4.0.2](https://github.com/ngneat/spectator/compare/v4.0.1...v4.0.2) (2019-09-03)


### Bug Fixes

* **http:** rename data service option to service ([#172](https://github.com/ngneat/spectator/issues/172)) ([7fdc41c](https://github.com/ngneat/spectator/commit/7fdc41c))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/ngneat/spectator/compare/v4.0.0...v4.0.1) (2019-09-01)


### Bug Fixes

* **mocks:** readd deprecated mocks ([a358f13](https://github.com/ngneat/spectator/commit/a358f13))
* **vscode-snippets:** change snippet language ([#169](https://github.com/ngneat/spectator/issues/169)) ([08cac5f](https://github.com/ngneat/spectator/commit/08cac5f))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/ngneat/spectator/compare/v3.12.0...v4.0.0) (2019-08-26)


### Bug Fixes

* expose event helpers ([994bd7e](https://github.com/ngneat/spectator/commit/994bd7e))
* **directive:** fix missing directive instance ([6e58ce1](https://github.com/ngneat/spectator/commit/6e58ce1))
* fix query regression and unit testing improvements ([75f5512](https://github.com/ngneat/spectator/commit/75f5512))
* fix typing for queryAll ([954f31b](https://github.com/ngneat/spectator/commit/954f31b))
* **host:** make host fixture visible again ([9d98f25](https://github.com/ngneat/spectator/commit/9d98f25))
* **http:** backwards support for destructuring SpectatorHttp ([d9bd304](https://github.com/ngneat/spectator/commit/d9bd304))
* **lib:** export global injections ([897d1c8](https://github.com/ngneat/spectator/commit/897d1c8))
* **lib:** remove ng add schematic in favour of npm/yarn install ([372f848](https://github.com/ngneat/spectator/commit/372f848))
* **mock:** allow assigning read-only properties ([1542c24](https://github.com/ngneat/spectator/commit/1542c24))
* **schematics:** update schematics for v4 API changes ([4175b30](https://github.com/ngneat/spectator/commit/4175b30))
* **spectator:** fix for querying directives ([cdd3fd7](https://github.com/ngneat/spectator/commit/cdd3fd7))
* **tests:** support entry components ([51b5481](https://github.com/ngneat/spectator/commit/51b5481))


### Code Refactoring

* change NPM scope from [@netbasal](https://github.com/netbasal) to [@ngneat](https://github.com/ngneat) ([#160](https://github.com/ngneat/spectator/issues/160)) ([9c19f98](https://github.com/ngneat/spectator/commit/9c19f98))
* **http:** rename dataService to service ([abda34d](https://github.com/ngneat/spectator/commit/abda34d))


### Features

* **lib:** v4 changes ([50a599f](https://github.com/ngneat/spectator/commit/50a599f))
* **lib:** v4 changes ([aaeb7f9](https://github.com/ngneat/spectator/commit/aaeb7f9))
* add factory for SpectatorForDirective ([#157](https://github.com/ngneat/spectator/issues/157)) ([4d075da](https://github.com/ngneat/spectator/commit/4d075da))
* **service:** call OnDestroy lifecycle on service after each test ([899d79f](https://github.com/ngneat/spectator/commit/899d79f))
* add migration CLI script ([238cff5](https://github.com/ngneat/spectator/commit/238cff5))
* add routing support ([#151](https://github.com/ngneat/spectator/issues/151)) ([aacfb25](https://github.com/ngneat/spectator/commit/aacfb25))
* add support for overrides ([f45824c](https://github.com/ngneat/spectator/commit/f45824c))
* deprecate createService in favour of createServiceFactory ([3a70424](https://github.com/ngneat/spectator/commit/3a70424))
* support for Angular 8 and Jasmine 3 ([#152](https://github.com/ngneat/spectator/issues/152)) ([f84e73e](https://github.com/ngneat/spectator/commit/f84e73e))
* support for mocking component providers ([6c9fa9e](https://github.com/ngneat/spectator/commit/6c9fa9e))


### BREAKING CHANGES

For the full list of breaking changes in 4.0.0, please see [MIGRATION.md](https://github.com/ngneat/spectator/blob/master/MIGRATION.md).



<a name="3.12.0"></a>
# [3.12.0](https://github.com/ngneat/spectator/compare/v3.11.1...v3.12.0) (2019-08-15)


### Bug Fixes

* **mock:** fix regression caused by mocked properties ([#154](https://github.com/ngneat/spectator/issues/154)) ([0bfc287](https://github.com/ngneat/spectator/commit/0bfc287))


### Features

* **spectator:** use spectator element as default selector ([#155](https://github.com/ngneat/spectator/issues/155)) ([6b05f76](https://github.com/ngneat/spectator/commit/6b05f76))



<a name="3.11.1"></a>
## [3.11.1](https://github.com/ngneat/spectator/compare/v3.11.0...v3.11.1) (2019-08-08)


### Bug Fixes

* fix query regression and unit testing improvements ([#148](https://github.com/ngneat/spectator/issues/148)) ([3503bee](https://github.com/ngneat/spectator/commit/3503bee)), closes [#146](https://github.com/ngneat/spectator/issues/146)



<a name="3.11.0"></a>
# [3.11.0](https://github.com/ngneat/spectator/compare/v3.10.0...v3.11.0) (2019-08-06)


### Features

* **spectator:** additional query capabilities ([#143](https://github.com/ngneat/spectator/issues/143)) ([1dccdb2](https://github.com/ngneat/spectator/commit/1dccdb2)), closes [#142](https://github.com/ngneat/spectator/issues/142)



<a name="3.10.0"></a>
# [3.10.0](https://github.com/ngneat/spectator/compare/v3.9.2...v3.10.0) (2019-08-04)


### Bug Fixes

* **matchers:** element is hidden if it is falsy ([#127](https://github.com/ngneat/spectator/issues/127)) ([05ba520](https://github.com/ngneat/spectator/commit/05ba520))
* **matchers:** pass input to `isHidden` through jQuery (fixes [#122](https://github.com/ngneat/spectator/issues/122)) ([38b64f0](https://github.com/ngneat/spectator/commit/38b64f0))
* enforce usage of jest type definitions ([453928c](https://github.com/ngneat/spectator/commit/453928c))
* **spectator:** improve type inference even more ([877013b](https://github.com/ngneat/spectator/commit/877013b))
* **spectator:** improve type inference for Spectator ([1c3f23a](https://github.com/ngneat/spectator/commit/1c3f23a))
* remove circular dependency ([d499778](https://github.com/ngneat/spectator/commit/d499778))
* update jest due test execution error ([3fc7326](https://github.com/ngneat/spectator/commit/3fc7326))


### Features

* **mock:** writable properties for SpyObjects ([977059a](https://github.com/ngneat/spectator/commit/977059a))



<a name="3.9.2"></a>
## [3.9.2](https://github.com/ngneat/spectator/compare/v3.9.1...v3.9.2) (2019-06-21)


### Bug Fixes

* **http:** add missing methods ([b608473](https://github.com/ngneat/spectator/commit/b608473))
* **matchers:** visibility matchers work with Jest ([fd7c947](https://github.com/ngneat/spectator/commit/fd7c947))



<a name="3.9.1"></a>
## [3.9.1](https://github.com/ngneat/spectator/compare/v3.9.0...v3.9.1) (2019-05-22)


### Bug Fixes

* **global-injections:** allow override injections ([e1eaa5d](https://github.com/ngneat/spectator/commit/e1eaa5d))


### Features

* **lib:** add define global injections function ([5456230](https://github.com/ngneat/spectator/commit/5456230))



<a name="3.9.0"></a>
# [3.9.0](https://github.com/ngneat/spectator/compare/v3.8.2...v3.9.0) (2019-05-15)


### Bug Fixes

* **lib:** update jquery ([6097376](https://github.com/ngneat/spectator/commit/6097376))



<a name="3.8.2"></a>
## [3.8.2](https://github.com/ngneat/spectator/compare/v3.8.1...v3.8.2) (2019-05-15)


### Bug Fixes

* jQuery version bump ([9595b78](https://github.com/ngneat/spectator/commit/9595b78))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/ngneat/spectator/compare/v3.7.1...v3.8.0) (2019-05-13)


### Bug Fixes

* **event-objects:** add missing code ([9edad7d](https://github.com/ngneat/spectator/commit/9edad7d))


### Features

* **service:** allow passing entrycomponents ([361188f](https://github.com/ngneat/spectator/commit/361188f))



<a name="3.7.1"></a>
## [3.7.1](https://github.com/ngneat/spectator/compare/v3.7.0...v3.7.1) (2019-05-07)


### Bug Fixes

* **mouse-events:** should bubble and add button option ([cbeea0d](https://github.com/ngneat/spectator/commit/cbeea0d)), closes [#105](https://github.com/ngneat/spectator/issues/105)
* **type-in-element:** should bubble by default ([496a91f](https://github.com/ngneat/spectator/commit/496a91f)), closes [#104](https://github.com/ngneat/spectator/issues/104)



<a name="3.6.1"></a>
## [3.6.1](https://github.com/ngneat/spectator/compare/3.6.0...3.6.1) (2019-03-31)


### Bug Fixes

* **config:** map schemas option to initial module config ([897c850](https://github.com/ngneat/spectator/commit/897c850))
* **jest:** fix for incorrect typing of SpyObject for Jest ([1cc0a36](https://github.com/ngneat/spectator/commit/1cc0a36))
* **lib:** avoid mockProvider to modify its inputs ([32bac7d](https://github.com/ngneat/spectator/commit/32bac7d))
* **lib:** create failing test for mockProvider leaking ([eed379a](https://github.com/ngneat/spectator/commit/eed379a))


### Features

* **jest:** imporove spy types ([f23de82](https://github.com/ngneat/spectator/commit/f23de82))
* **lib:** add failing test for method mocking ([36fec41](https://github.com/ngneat/spectator/commit/36fec41))
* **lib:** create test which fails when query doesn't find an element ([d3b3833](https://github.com/ngneat/spectator/commit/d3b3833))
* **lib:** handle not found elemenet by.directive ([2d32510](https://github.com/ngneat/spectator/commit/2d32510))
* **lib:** mockProvider allows mocking methods using 2nd argument ([fd2547c](https://github.com/ngneat/spectator/commit/fd2547c))
* **spectator:** mark toHaveAttribute second parameter as optional ([fc07596](https://github.com/ngneat/spectator/commit/fc07596))



<a name="3.5.0"></a>
# [3.5.0](https://github.com/ngneat/spectator/compare/3.1.0...3.5.0) (2019-03-10)


### Bug Fixes

* **jest:** expose dom selectors ([9c32bbc](https://github.com/ngneat/spectator/commit/9c32bbc)), closes [#62](https://github.com/ngneat/spectator/issues/62)
* **jest:** fix type collisions between jasmine/jest ([e7b6a44](https://github.com/ngneat/spectator/commit/e7b6a44))
* **lib:** revert pr ([8c00cde](https://github.com/ngneat/spectator/commit/8c00cde))


### Features

* **config:** add declareComponent option ([ccbf8ea](https://github.com/ngneat/spectator/commit/ccbf8ea))
* **internal:** use host debug element when debug element is missing ([882950b](https://github.com/ngneat/spectator/commit/882950b))
* **internal:** use host debug element when debug element is missing ([820c380](https://github.com/ngneat/spectator/commit/820c380))
* **lib:** add ng-add support ([064d452](https://github.com/ngneat/spectator/commit/064d452))
* **schematics:** create ng add schematics ([6d74f4f](https://github.com/ngneat/spectator/commit/6d74f4f)), closes [#53](https://github.com/ngneat/spectator/issues/53)
* avoid spec has no expectations when using expectOne ([8b74d46](https://github.com/ngneat/spectator/commit/8b74d46))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/ngneat/spectator/compare/3.0.0...3.1.0) (2018-12-17)


### Bug Fixes

* **host:** componentProviders should act on the component ([ef84b16](https://github.com/ngneat/spectator/commit/ef84b16))
* **host:** componentProviders should not be overwritten always ([793e6e0](https://github.com/ngneat/spectator/commit/793e6e0))
* **jest:** add missing export ([a1a210b](https://github.com/ngneat/spectator/commit/a1a210b))
* **jest:** fix build ([7f058b3](https://github.com/ngneat/spectator/commit/7f058b3))
* **jest:** fixes after review comments ([2b7d2a5](https://github.com/ngneat/spectator/commit/2b7d2a5))
* **service:** loosen SpectatorService.get interface typing ([6ab678b](https://github.com/ngneat/spectator/commit/6ab678b))
* **service:** loosen type restrictions on SpectatorService.get ([b1adb37](https://github.com/ngneat/spectator/commit/b1adb37))
* **service:** merge options imports into module imports when creating a service TestBed ([70c9c1f](https://github.com/ngneat/spectator/commit/70c9c1f))
* **types:** add types to matchers definitions ([9de13d1](https://github.com/ngneat/spectator/commit/9de13d1))


### Features

* **lib:** disable change detection on a test level ([1df9d7f](https://github.com/ngneat/spectator/commit/1df9d7f))
* **mock:** allow to pass template with properties for mocks ([c2a3548](https://github.com/ngneat/spectator/commit/c2a3548))
* **mock:** create failing tests for mocks with properties ([f2a3fee](https://github.com/ngneat/spectator/commit/f2a3fee))
* **mock:** support for Jest mocking ([45f0677](https://github.com/ngneat/spectator/commit/45f0677))



<a name="1.13.1"></a>
## [1.13.1](https://github.com/ngneat/spectator/compare/2.0.2...v1.13.1) (2018-07-13)



<a name="1.13.0"></a>
# [1.13.0](https://github.com/ngneat/spectator/compare/v1.12.1...v1.13.0) (2018-07-06)


### Features

* **mock-component:** add identifier option for easier query ([cd32554](https://github.com/ngneat/spectator/commit/cd32554)), closes [#34](https://github.com/ngneat/spectator/issues/34)



<a name="1.12.1"></a>
## [1.12.1](https://github.com/ngneat/spectator/compare/v1.12.0...v1.12.1) (2018-07-05)


### Bug Fixes

* **query:** correct return type for queryAll ([a5c86d5](https://github.com/ngneat/spectator/commit/a5c86d5))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/ngneat/spectator/compare/v1.11.1...v1.12.0) (2018-06-27)


### Features

* **query:** add dom-testing-library query tools ([82a42e2](https://github.com/ngneat/spectator/commit/82a42e2))



<a name="1.11.1"></a>
## [1.11.1](https://github.com/ngneat/spectator/compare/v1.8.1...v1.11.1) (2018-06-26)


### Bug Fixes

* **host:** don't override component inputs ([814e0b0](https://github.com/ngneat/spectator/commit/814e0b0))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/ngneat/spectator/compare/v1.11.0...v1.8.1) (2018-06-26)


### Bug Fixes

* **dev:** add missing jQuery dependency ([11e4234](https://github.com/ngneat/spectator/commit/11e4234))
* **dev:** remove node_modules ([e42443d](https://github.com/ngneat/spectator/commit/e42443d))
* **host:** don't override input changes ([054a3c2](https://github.com/ngneat/spectator/commit/054a3c2)), closes [#31](https://github.com/ngneat/spectator/issues/31)


### Features

* **mock-component:** content projection for default MockComponent ([7c3ba52](https://github.com/ngneat/spectator/commit/7c3ba52))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/ngneat/spectator/compare/v1.10.0...v1.11.0) (2018-06-20)


### Features

* **directive:** add MockDirective helper function ([842f0a7](https://github.com/ngneat/spectator/commit/842f0a7))



<a name="1.10.0"></a>
# [1.10.0](https://github.com/ngneat/spectator/compare/v1.9.1...v1.10.0) (2018-06-16)


### Features

* **changelog:** update ([30ed3da](https://github.com/ngneat/spectator/commit/30ed3da))
* **matchers:** add `toHaveProperty` and `toHaveAttribute` matchers ([303ae6d](https://github.com/ngneat/spectator/commit/303ae6d)), closes [#21](https://github.com/ngneat/spectator/issues/21)



<a name="1.9.1"></a>
## [1.9.1](https://github.com/ngneat/spectator/compare/v1.9.0...v1.9.1) (2018-06-01)


### Bug Fixes

* **query:** query now can accept a generic to define the return value ([acd3b4a](https://github.com/ngneat/spectator/commit/acd3b4a))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/ngneat/spectator/compare/v1.8.0...v1.9.0) (2018-05-28)


### Features

* **directive:** add getDirectiveInstance to host ([9b2ffc6](https://github.com/ngneat/spectator/commit/9b2ffc6))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/ngneat/spectator/compare/v1.7.3...v1.8.0) (2018-05-27)


### Features

* **providers:** add component providers option ([832c770](https://github.com/ngneat/spectator/commit/832c770))



<a name="1.7.3"></a>
## [1.7.3](https://github.com/ngneat/spectator/compare/v1.7.2...v1.7.3) (2018-05-24)


### Bug Fixes

* **types:** add spyobject type to get method ([87b5c5b](https://github.com/ngneat/spectator/commit/87b5c5b))



<a name="1.7.2"></a>
## [1.7.2](https://github.com/ngneat/spectator/compare/v1.7.1...v1.7.2) (2018-05-22)


### Bug Fixes

* **readme:** update ([0390bc0](https://github.com/ngneat/spectator/commit/0390bc0))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/ngneat/spectator/compare/v1.7.0...v1.7.1) (2018-05-22)


### Bug Fixes

* **host:** add change detection component on init ([d22e53d](https://github.com/ngneat/spectator/commit/d22e53d))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/ngneat/spectator/compare/1.6.1...v1.7.0) (2018-05-22)


### Features

* **mocks:** add mock component function ([ce20d26](https://github.com/ngneat/spectator/commit/ce20d26))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/ngneat/spectator/compare/v1.5.5...1.6.1) (2018-05-21)


### Features

* **spectator:** entry component and query selector ([8397295](https://github.com/ngneat/spectator/commit/8397295))



<a name="1.5.5"></a>
## [1.5.5](https://github.com/ngneat/spectator/compare/v1.5.4...v1.5.5) (2018-05-21)


### Bug Fixes

* **internal:** revert to angular selector ([81f5308](https://github.com/ngneat/spectator/commit/81f5308))


### Features

* **upgrade:** upgrade to latest versions of angular and rxjs ([8fff888](https://github.com/ngneat/spectator/commit/8fff888))


### BREAKING CHANGES

* **upgrade:** the library depends on latest version of angular and rxjs



<a name="1.5.4"></a>
## [1.5.4](https://github.com/ngneat/spectator/compare/v1.5.3...v1.5.4) (2018-05-18)


### Bug Fixes

* **query:** prefer native js over angular api ([e0fe656](https://github.com/ngneat/spectator/commit/e0fe656))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/ngneat/spectator/compare/v1.5.2...v1.5.3) (2018-05-15)


### Bug Fixes

* **host:** remove default object value ([cadb8c3](https://github.com/ngneat/spectator/commit/cadb8c3))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/ngneat/spectator/compare/v1.6.0...v1.5.2) (2018-05-14)


### Bug Fixes

* **detectchanges:** run detect changes on the component instead host ([77c77a1](https://github.com/ngneat/spectator/commit/77c77a1))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/ngneat/spectator/compare/v1.5.0...v1.6.0) (2018-05-14)


### Bug Fixes

* **setinput:** run component detect changes instead host ([0bb73d4](https://github.com/ngneat/spectator/commit/0bb73d4))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/ngneat/spectator/compare/v1.4.4...v1.5.0) (2018-05-13)


### Features

* **host:** add setHostInput method ([749dfb8](https://github.com/ngneat/spectator/commit/749dfb8))



<a name="1.4.4"></a>
## [1.4.4](https://github.com/ngneat/spectator/compare/v1.4.3...v1.4.4) (2018-04-30)


### Bug Fixes

* **changelog:** update ([798824a](https://github.com/ngneat/spectator/commit/798824a))
* **host:** add support for structural directives ([341afe2](https://github.com/ngneat/spectator/commit/341afe2))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/ngneat/spectator/compare/v1.4.2...v1.4.3) (2018-04-23)


### Bug Fixes

* **build:** downgrade to es5 ([0eee88c](https://github.com/ngneat/spectator/commit/0eee88c))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/ngneat/spectator/compare/v1.4.1...v1.4.2) (2018-04-22)


### Bug Fixes

* **docs:** update changelog ([8f75440](https://github.com/ngneat/spectator/commit/8f75440))
* **mock:** change arrow function ([9d6e28d](https://github.com/ngneat/spectator/commit/9d6e28d))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/ngneat/spectator/compare/v1.4.0...v1.4.1) (2018-04-17)


### Bug Fixes

* **http:** remove const enum ([cf90619](https://github.com/ngneat/spectator/commit/cf90619))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/ngneat/spectator/compare/v1.3.4...v1.4.0) (2018-04-17)


### Features

* **http:** expose get method for getting the service ([400c082](https://github.com/ngneat/spectator/commit/400c082))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/ngneat/spectator/compare/v1.3.3...v1.3.4) (2018-04-14)


### Bug Fixes

* **events:** add document and window types ([25130cd](https://github.com/ngneat/spectator/commit/25130cd))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/ngneat/spectator/compare/v1.3.2...v1.3.3) (2018-04-13)


### Bug Fixes

* **build:** revert files ([f281ac2](https://github.com/ngneat/spectator/commit/f281ac2))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/ngneat/spectator/compare/v1.3.1...v1.3.2) (2018-04-13)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/ngneat/spectator/compare/v1.3.0...v1.3.1) (2018-04-13)


### Bug Fixes

* **build:** dont publish src ([4d14b48](https://github.com/ngneat/spectator/commit/4d14b48))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/ngneat/spectator/compare/v1.2.3...v1.3.0) (2018-04-13)


### Features

* **query:** add free style jquery support ([25ddf9d](https://github.com/ngneat/spectator/commit/25ddf9d))
* **query:** add query last alias ([7887d6c](https://github.com/ngneat/spectator/commit/7887d6c))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/ngneat/spectator/compare/v1.2.2...v1.2.3) (2018-04-13)


### Bug Fixes

* **query:** support elementref ([3ab3647](https://github.com/ngneat/spectator/commit/3ab3647))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/ngneat/spectator/compare/v1.2.1...v1.2.2) (2018-04-13)


### Bug Fixes

* **query:** fix internal generic ([2b2406c](https://github.com/ngneat/spectator/commit/2b2406c))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ngneat/spectator/compare/v1.2.0...v1.2.1) (2018-04-13)


### Bug Fixes

* **query:** query now returns the right generic ([2e69a09](https://github.com/ngneat/spectator/commit/2e69a09))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ngneat/spectator/compare/v1.1.1...v1.2.0) (2018-04-11)


### Features

* **components:** add support to pass mocks providers ([0c58d06](https://github.com/ngneat/spectator/commit/0c58d06))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/ngneat/spectator/compare/v1.1.0...v1.1.1) (2018-04-10)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ngneat/spectator/compare/v1.0.1...v1.1.0) (2018-04-10)


### Features

* **events:** add new helpers method ([7665d08](https://github.com/ngneat/spectator/commit/7665d08))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ngneat/spectator/compare/v1.0.0...v1.0.1) (2018-04-10)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/ngneat/spectator/compare/v0.5.2...v1.0.0) (2018-04-07)


### Features

* **query:** query and queryall now supports more options ([a309f3c](https://github.com/ngneat/spectator/commit/a309f3c))


### BREAKING CHANGES

* **query:** 1. ByDirective no longer exists - use query/all



<a name="0.5.2"></a>
## [0.5.2](https://github.com/ngneat/spectator/compare/v0.5.1...v0.5.2) (2018-04-05)


### Bug Fixes

* **host:** remove unused import ([e0e7f28](https://github.com/ngneat/spectator/commit/e0e7f28))



<a name="0.5.1"></a>
## [0.5.1](https://github.com/ngneat/spectator/compare/v0.5.0...v0.5.1) (2018-04-05)


### Bug Fixes

* **entrycomponents:** fix undefined bug ([fe921c9](https://github.com/ngneat/spectator/commit/fe921c9))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ngneat/spectator/compare/v0.4.2...v0.5.0) (2018-04-05)


### Features

* **components:** add support for entry components ([8ba6870](https://github.com/ngneat/spectator/commit/8ba6870)), closes [#6](https://github.com/ngneat/spectator/issues/6)



<a name="0.4.2"></a>
## [0.4.2](https://github.com/ngneat/spectator/compare/v0.4.1...v0.4.2) (2018-04-05)


### Bug Fixes

* **host:** fix generic type ([ebf923b](https://github.com/ngneat/spectator/commit/ebf923b))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/ngneat/spectator/compare/v0.4.0...v0.4.1) (2018-04-04)


### Bug Fixes

* **spectator:** fix queryall return type ([8456943](https://github.com/ngneat/spectator/commit/8456943))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ngneat/spectator/compare/v0.3.0...v0.4.0) (2018-04-04)


### Features

* **spectator:** support for getting the debug element ([5838954](https://github.com/ngneat/spectator/commit/5838954))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ngneat/spectator/compare/v0.2.2...v0.3.0) (2018-04-04)


### Features

* **host:** add the option to pass complex inputs ([45de5e1](https://github.com/ngneat/spectator/commit/45de5e1)), closes [#5](https://github.com/ngneat/spectator/issues/5)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/ngneat/spectator/compare/v0.2.1...v0.2.2) (2018-04-04)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/ngneat/spectator/compare/v0.2.0...v0.2.1) (2018-04-04)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ngneat/spectator/compare/v0.1.5...v0.2.0) (2018-04-03)


### Features

* **internals.js:** additional parameters for event emitting functions ([2f562fb](https://github.com/ngneat/spectator/commit/2f562fb))
* **query:** add the option to query by directive ([9d54c42](https://github.com/ngneat/spectator/commit/9d54c42))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/ngneat/spectator/compare/v0.1.4...v0.1.5) (2018-04-02)


### Bug Fixes

* **click:** add an option to pass native element and debug element ([fafe43d](https://github.com/ngneat/spectator/commit/fafe43d))



<a name="0.1.4"></a>
## [0.1.4](https://github.com/ngneat/spectator/compare/v0.1.3...v0.1.4) (2018-04-02)


### Bug Fixes

* **host:** fix initial module undefined when using host ([5c09555](https://github.com/ngneat/spectator/commit/5c09555))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/ngneat/spectator/compare/v0.1.0...v0.1.3) (2018-04-01)


### Bug Fixes

* **host:** mark host as optional ([834b12f](https://github.com/ngneat/spectator/commit/834b12f))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/ngneat/spectator/compare/dccdbbe...v0.1.0) (2018-04-01)


### Bug Fixes

* dummy commit ([ec4b6bd](https://github.com/ngneat/spectator/commit/ec4b6bd))


### Features

* **lib:** initial commit ([5043600](https://github.com/ngneat/spectator/commit/5043600))
* **lib:** initial commit ([6f1ba2d](https://github.com/ngneat/spectator/commit/6f1ba2d))
* **services:** Testing services with and without a mock ([dccdbbe](https://github.com/ngneat/spectator/commit/dccdbbe))
