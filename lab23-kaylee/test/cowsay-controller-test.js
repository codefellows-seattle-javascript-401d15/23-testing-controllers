'use strict';

require('angular');
require('angular-mocks');

describe('testing CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should have an initial state', () => {
    expect(this.cowsayCtrl.title).toEqual('Welcome to Cowville');
    expect(this.cowsayCtrl.history.length).toEqual(0);
  })

  it('should ')
});
