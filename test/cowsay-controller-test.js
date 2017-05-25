'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing cowsay controller', function(){
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });
  it('should have an initial state', () => {
    expect(this.cowsayCtrl.current).toEqual('daemon');
  });
  it('should have a title', () => {
    expect(this.cowsayCtrl.title).toEqual('Welcome to Hell');
  });
  it('should add an object to history when speak is pressed', () => {
    expect(this.cowsayCtrl.history).toBe.undefined;
  });
  it('should push an object to an array when speak is pressed', () => {
    this.cowsayCtrl.speak('hubba hubba');
    expect(this.cowsayCtrl.history[0]).not.toBe.empty;
  });
  it('There should be an array of objects in the cowfiles', () => {
    expect(this.cowfiles).toBe.array;
  });
});
