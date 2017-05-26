'use strict';

require('angular');
require('angular-mocks');

describe('testing CowSayController', function () {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  })
  it('inital state should be correct', () => {

  })
  it('handleSubmit should gen ipsum', () => {

  })
});
