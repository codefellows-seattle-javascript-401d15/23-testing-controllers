'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing cowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('cowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  })

  it('initial state should be correct', () => {
    expect(this.cowsayCtrl.say).toEqual('moo');
    console.log('cowsayCtrl', cowsayCtrl);
    expect(this.cowsayCtrl.title).toEqual('Welcome to Cowville');
  })

  it('handleSubmit should cow speak', () => {
    expect(this.cowsayCtrl.content).toEqual('');
    this.cowsayCtrl.handleSubmit();
    expect(this.cowsayCtrl.content.length).toBeGreaterThan(0);
  })
});
