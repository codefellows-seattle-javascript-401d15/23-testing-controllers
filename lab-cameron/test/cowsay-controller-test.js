'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('ipsumApp');
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

  it('should have an initialState', () => {
    expect(this.cowsayCtrl.selected).toEqual('hacker');
    expect(this.cowsayCtrl.text).toEqual('');
  });

  it('handleSubmit should generate ipsum into the text-field', () => {
    expect(this.cowsayCtrl.text).toEqual('');
    this.cowsayCtrl.handleSubmit();
    expect(this.cowsayCtrl.text.length).toBeGreaterThan(0);
  });
});
