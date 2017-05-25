'use strict';

const angular = require('angular');
require('angular-mocks');

const cowsay = require('cowsay-browser');

describe('cowsay interface', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  it('have 46 "cow" options', () => {
    expect(this.cowsayCtrl.cowfiles.length).toEqual(46);
  });

  it('should have default options', () => {
    expect(this.cowsayCtrl.animal).toEqual('vader-koala');
  });

  it('should add an item to spoken on speak', () => {
    this.cowsayCtrl.speak('Moo');
    expect(this.cowsayCtrl.spoken).toEqual(cowsay.say({text: 'Moo', f: this.cowsayCtrl.animal}));
  });

  it('should add an item to the history on speak', () => {
    this.cowsayCtrl.speak('moo?');
    expect(this.cowsayCtrl.history[0]).toEqual(cowsay.say({text: 'moo?', f: this.cowsayCtrl.animal}));
  });

  it('should remove an item from the history on undo', () => {
    this.cowsayCtrl.speak('moo?');
    this.cowsayCtrl.undo();
    expect(this.cowsayCtrl.history[0]).toEqual(undefined);
  });

});
