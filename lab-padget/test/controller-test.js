'use strict';

// TODO: Write a test that checks for default properties set by your controller(s).
// TODO: Write a series of tests that check your controller methods for expected functionality.

const angular = require('angular');
require('angular-mocks');

describe('testing CowsayController', function(){
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

  it('inital drop down state should be correct', () => {
    expect(this.cowsayCtrl.current).toEqual('turtle');
  });

  it('handleSubmit should show new art', () => {
    expect(this.cowsayCtrl.spoken).toEqual('');
    this.cowsayCtrl.handleSubmit();
    // expect(this.cowsayCtrl.spoken.length).toBeGreaterThan(0);
  });
});
