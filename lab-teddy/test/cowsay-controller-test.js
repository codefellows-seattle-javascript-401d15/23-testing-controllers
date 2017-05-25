'use strict';

const angular = require('angular');
const expect = require('mocha').expect;
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

  it('should be current', () => {
    expect(this.current).toEqual(this.cowfiles[0]);
  });
});
