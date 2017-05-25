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

  it('should exist', () => {
    expect(this.cowsayCtrl).toBeDefined();
  });

  it('should have the correct initial state of f: "meow"', () => {
    expect(this.cowsayCtrl.current).toBeDefined();
    expect(this.cowsayCtrl.current).toBe('string');
    expect(this.cowsayCtrl.current).toEqual('meow');
  });

  it('should have a title of Welcome to Meowville', () => {
    expect(this.cowsayCtrl.title).toBeDefined();
    expect(this.cowsayCtrl.title).toBe('string');
    expect(this.cowsayCtrl.title).toEqual('Welcome to Meowville');
  });
});
