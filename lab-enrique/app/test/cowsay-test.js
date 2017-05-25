'use strict';

require('angular');
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
  })

  it('inital state should be correct', () => {
    expect(this.cowsayCtrl.selected).toEqual('hacker');
    expect(this.cowsayCtrl.content).toEqual('');
  })

  it('handleSubmit should gen ipsum', () => {
    expect(this.cowsayCtrl.say).toEqual('');
    this.cowsayCtrl.handleSubmit();
    expect(this.cowsayCtrl.content.length).toBeGreaterThan(0);
  })



});
