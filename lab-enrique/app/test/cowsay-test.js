'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', done => {
    expect(true).toEqual(true);
    done();
  });

  it('should speak when given input', done => {
    this.cowsayCtrl.speak('undefined');

    expect(this.cowsayCtrl.text).toEqual(undefined);
    done();
  });

  it('should return an Object', done => {
    expect(typeof(this.cowsayCtrl)).toEqual('object');
    done();
  });

  it('should have initial state of beavis.zen', done => {
    expect(this.cowsayCtrl.current).toEqual('beavis.zen');
    done();
  });

});
