'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing IpsumController', function() {
  beforeEach(() => {
    angular.mock.module('ipsumApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.ipsumCtrl = new $controller('IpsumController');
      this.ipsumCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have an initialState', () => {
    expect(this.ipsumCtrl.selected).toEqual('hacker');
    expect(this.ipsumCtrl.content).toEqual('');
  });

  it('handleSubmit should generate ipsum', () => {
    expect(this.ipsumCtrl.content).toEqual('');
    this.ipsumCtrl.handleSubmit();
    expect(this.ipsumCtrl.content.length).toBeGreaterThan(0);
  });
});
