'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing CowSayController', function () {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should have an initial state', () => {
      expect(this.cowsayCtrl.selected).toEqual('yeehaa');
      expect(this.cowsayCtrl.content).toEqual('');
    });

    it('should populate the list of images', () => {
      expect(this.cowsayCtrl.cowfiles).toEqual(jasmine.any(Array));
      expect(this.cowsayCtrl.cowfiles.length).toEqual(46);
    });

    it('should test the speak function', () => {
      this.cowsayCtrl.speak('hello!');
      expect(this.cowsayCtrl.spoken).toContain('hello!');
      expect(this.cowsayCtrl.spoken).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.history[0]).toContain('hello!');
      expect(this.cowsayCtrl.history).toEqual(jasmine.any(Array));
    });

});
