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
    console.log('//  ::::>>>>>>>>>> TEST <<<<<<<<<<:::: //');

    expect(true).toEqual(true);
    done();
  });

  it('should return an Object', done => {
    console.log(typeof(this.cowsayCtrl));

    expect(typeof(this.cowsayCtrl)).toEqual('object');
    done();
  });

  it('should have initial title of "Welcome to Cowsay"', done => {
    console.log(this.cowsayCtrl.title);

    expect(this.cowsayCtrl.title).toEqual('Welcome to Cowsay');
    done();
  });

  it('text should have initial state of undefined', done => {
    console.log('cowsayCtrl current cow ', this.cowsayCtrl.current);

    expect(this.cowsayCtrl.text).toEqual(undefined);
    done();
  });

  it('should have initial state of turkey', done => {
    console.log('cowsayCtrl current cow ', this.cowsayCtrl.current);

    expect(this.cowsayCtrl.current).toEqual('turkey');
    done();
  });

  it('should speak the input given', done => {
    this.cowsayCtrl.speak('moooo');
    console.log('the cow says ', this.cowsayCtrl.text);

    expect(this.cowsayCtrl.text).toEqual('moooo');
    done();
  });
});
