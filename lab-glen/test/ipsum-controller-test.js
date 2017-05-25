'use strict';

require('angular');
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

  it('initial state should be correct', () => {
    expect(this.ipsumCtrl.selected).toEqual('hacker');
    expect(this.ipsumCtrl.content).toEqual('');
  });

  it('handleSubmit should gen ipsum', () => {
    expect(this.ipsumCtrl.content).toEqual('');
    this.ipsumCtrl.handleSubmit();
    expect(this.ipsumCtrl.content.length).toBeGreaterThan(0);
  });

  it('choices array should have three different properties', () => {
    expect(this.ipsumCtrl.choices[0]).toEqual('hacker');
    expect(this.ipsumCtrl.choices[1]).toEqual('bob');
    expect(this.ipsumCtrl.choices[2]).toEqual('simpsons');
  });

});
