'use strict';

require('angular');
require('angular-mocks');
require('../app/entry.js');

describe('testing cowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should have the correct starting state', () => {
    expect(this.cowsayCtrl.update()).toEqual('moooo');
    expect(this.cowsayCtrl.history[0]).toEqual(null);
  });



});
