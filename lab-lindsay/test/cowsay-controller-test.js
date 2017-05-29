'use strict';

const angular = require('angular');
require('angular-mocks');
const cowsay = require('cowsay-browser');

describe('testing cowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  describe('checking initial properties set by CowsayController', () => {

    it('should pass this is a test', () => {
      expect(true).toEqual(true);
    });
    it('should contain a string for the title and the title should say welcome to Cowville', () => {
      expect(this.cowsayCtrl.title).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.title).toEqual('Welcome to Cowville');
    });
    it('should have the string moo for the initial text when the page loads', () => {
      expect(this.cowsayCtrl.text).toEqual(jasmine.any(String));
      expect(this.cowsayCtrl.text).toEqual('moooo');
    });
  });
  describe('check functionality of methods of CowsayController', () => {
    it('checking functionality for update method', () => {
      let update = this.cowsayCtrl.update('testing');
      expect(update).toEqual(jasmine.any(String));
    });
    it('checking functionality for speak method', () => {
      this.cowsayCtrl.speak('testing');
      expect(this.cowsayCtrl.spoken).toContain('testing');
      expect(this.cowsayCtrl.spoken).toEqual(jasmine.any(String));
    });
    it('checking functionality for history', () => {
      this.cowsayCtrl.speak('testingtesting');
      expect(this.cowsayCtrl.history[0]).toContain('testingtesting');
      expect(this.cowsayCtrl.history[0]).toEqual(jasmine.any(String));
    });
  });
