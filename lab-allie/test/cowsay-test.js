'use strict';

const angular = require('angular');
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
  
  // it('should be true', () => {
  //   console.log('boooooops');
  //   expect(true).toEqual(false);
  // });
  
  it('should have an initial state', () => {
    expect(this.cowsayCtrl.title).toEqual('I\'m a small cow.');
  });
  
});