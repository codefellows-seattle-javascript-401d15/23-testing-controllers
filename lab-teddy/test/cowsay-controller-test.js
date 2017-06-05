'use strict';

const angular = require('angular');
const expect = require('chai').expect;
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
    expect(this.cowsayCtrl.current).to.equal(this.cowsayCtrl.cowfiles[0]);
    expect(this.cowsayCtrl.cowfiles[0]).to.equal('beavis.zen');
  });
  it('should return true', () => {
    expect(true).to.equal(true);
  });
  it('should')
});
