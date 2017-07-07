'use strict';

require('angular');
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
    expect(this.cowsayCtrl.title).toEqual('Welcome to Cowville');
    expect(this.cowsayCtrl.history).toEqual([]);
    expect(this.cowsayCtrl.history.length).toEqual(0);
    expect(this.cowsayCtrl.current).toEqual('beavis.zen');
  })

  it('speak function', () => {
    this.cowsayCtrl.speak('I\'m not really a cow!');
    expect(this.cowsayCtrl.spoken).toContain('I\'m not really a cow!');
    expect(this.cowsayCtrl.history[0]).toContain('I\'m not really a cow!');
    expect(this.cowsayCtrl.history.length).toEqual(1);
  })

  it('update function', () => {
    let updated = this.cowsayCtrl.update('Just kidding, I\'m actually a cow.');
    expect(updated).toContain('Just kidding, I\'m actually a cow.');
    // expect(this.cowsayCtrl.spoken).toEqual(updated);
  })

  it('undo function', () => {
    this.cowsayCtrl.speak('hello');
    expect(this.cowsayCtrl.history[0]).toContain('hello');
    expect(this.cowsayCtrl.history.length).toEqual(1);
    expect(this.cowsayCtrl.spoken).toContain('hello');

    this.cowsayCtrl.speak('goodbye');
    expect(this.cowsayCtrl.history[1]).toContain('goodbye');
    expect(this.cowsayCtrl.history.length).toEqual(2);
    expect(this.cowsayCtrl.spoken).toContain('goodbye');

    this.cowsayCtrl.undo();
    expect(this.cowsayCtrl.history[1]).toBeUndefined();
    expect(this.cowsayCtrl.history.length).toEqual(1);
    expect(this.cowsayCtrl.spoken).toContain('hello');
  });
});

//Why does this.current get set to cows[0] ('beavis.zen') when cowsayCtrl.$onInit is called, and not 'elephant' as specified in ng-init directive in index.html?

//Why do we have to assign value of this.cowsayCtrl.update('someOtherAnimal') to a variable, and then use that variable in the expect statements? Does it have something to do with the fact that cowsayCtrl.update() simply *returns* cowsay.say as opposed to storing the value of cowsay.say in a temp variable? (Also, is cowsayCtrl.update() considered a pure function?)

//Why can't I test against this.cowsayCtrl.spoken in the updateFunction tests? (Value of this.cowsayCtrl.spoken is 'undefined' when trying to run tests).
