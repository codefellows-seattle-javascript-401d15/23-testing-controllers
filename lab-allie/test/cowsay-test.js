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
  
  it('should have an initial state', () => {
    expect(this.cowsayCtrl.title).toEqual('I\'m a small cow.');
    expect(this.cowsayCtrl.title).toEqual(jasmine.any(String));
    expect(this.cowsayCtrl.history).toEqual([]);
    expect(this.cowsayCtrl.history).toEqual(jasmine.any(Array));
    expect(this.cowsayCtrl.current).toEqual('beavis.zen');
    expect(this.cowsayCtrl.current).toEqual(jasmine.any(String));
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
  
  it('should test the update function', () => {
    let update = this.cowsayCtrl.update('Hi');
    expect(update).toContain('Hi');
  });
  
  it('should test the undo function', () => {
    this.cowsayCtrl.speak('first message');
    expect(this.cowsayCtrl.spoken).toContain('first message');
    expect(this.cowsayCtrl.history.length).toEqual(1);
    
    this.cowsayCtrl.speak('second message');
    expect(this.cowsayCtrl.spoken).toContain('second message');
    expect(this.cowsayCtrl.history.length).toEqual(2);
    
    this.cowsayCtrl.undo();
    expect(this.cowsayCtrl.spoken).toContain('first message');
    expect(this.cowsayCtrl.history.length).toEqual(1);
  });
  
  
  
});