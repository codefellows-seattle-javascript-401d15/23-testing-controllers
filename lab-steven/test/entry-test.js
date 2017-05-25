'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing CowsayController', function(){
  beforeEach(() =>  {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;//wat?
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('has proper initial values', () => {
    expect(this.cowsayCtrl.title).toEqual('Welcome to cowville');
    expect(this.cowsayCtrl.current).toEqual('beavis.zen');
    expect(this.cowsayCtrl.history).toEqual([]);
    expect(this.cowsayCtrl.cowfiles.length).toBe(46);
  });

  it('has update method that works properly', () => {
    let result = this.cowsayCtrl.update('test text');
    expect(result).toContain('test text');
  });
  it('has speak method that works properly', () => {
    this.cowsayCtrl.speak('test speak text');
    expect(this.cowsayCtrl.spoken).toContain('test speak text');
    expect(this.cowsayCtrl.history[0]).toContain('test speak text');
  });
  it('undo', () => {
    this.cowsayCtrl.speak('undo test1');
    this.cowsayCtrl.speak('undo test2');
    expect(this.cowsayCtrl.history.length).toEqual(2);
    this.cowsayCtrl.undo();
    expect(this.cowsayCtrl.spoken).toContain('undo test1');
    expect(this.cowsayCtrl.history.length).toEqual(1);
  });

});
