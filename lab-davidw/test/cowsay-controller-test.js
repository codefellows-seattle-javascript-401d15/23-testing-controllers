'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing CowsayController ', function() {

  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should exist', () => {
    expect(this.cowsayCtrl).toBeDefined();
    expect(this.cowsayCtrl.$onInit).toEqual(jasmine.any(Function));
    expect(this.cowsayCtrl.update).toEqual(jasmine.any(Function));
    expect(this.cowsayCtrl.speak).toEqual(jasmine.any(Function));
    expect(this.cowsayCtrl.undo).toEqual(jasmine.any(Function));
  });

  describe('current ', () => {
    it('should have the correct initial state', () => {
      expect(this.cowsayCtrl.current).toBeDefined();
      expect(this.cowsayCtrl.current).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.current).toBe('beavis.zen');
    });
  });

  describe('title ', () => {
    it('should have a title of Welcome to Meowville', () => {
      expect(this.cowsayCtrl.title).toBeDefined();
      expect(this.cowsayCtrl.title).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.title).toEqual('Welcome to Meowville');
    });
  });

  describe('history ', () => {
    it('should start as an empty array', () => {
      expect(this.cowsayCtrl.history).toBeDefined();
      expect(this.cowsayCtrl.history).toEqual(jasmine.any(Array));
      expect(this.cowsayCtrl.history[0]).toEqual(undefined);
    });
  });

  describe('cowfiles ', () => {
    it('should start as a populated array', () => {
      expect(this.cowsayCtrl.cowfiles).toBeDefined();
      expect(this.cowsayCtrl.cowfiles).toEqual(jasmine.any(Array));
      expect(this.cowsayCtrl.cowfiles.length).toBeDefined();
      expect(this.cowsayCtrl.cowfiles.length).toBe(46);
    });
  });

  describe('update ', () => {

  });
});
// { $onInit: Function, title: 'Welcome to Meowville', history: [  ], cowfiles: [ 'beavis.zen', 'bud-frogs', 'bunny', 'cheese', 'chick', 'chicken-and-egg', 'cower', 'daemon', 'default', 'doge', 'dragon-and-cow', 'dragon', 'elephant-in-snake', 'elephant', 'eyes', 'flaming-sheep', 'ghostbusters', 'hellokitty', 'kiss', 'kitty', 'koala', 'kosh', 'luke-koala', 'mech-and-cow', 'meow', 'milk', 'moofasa', 'moose', 'mutilated', 'ren', 'rooster', 'satanic', 'sheep', 'skeleton', 'small', 'squirrel', 'stegosaurus', 'stimpy', 'supermilker', 'surgery', 'turkey', 'turtle', 'tux', 'vader-koala', 'vader', 'www' ], current: 'beavis.zen', update: Function, speak: Function, undo: Function }
