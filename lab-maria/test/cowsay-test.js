'use strict';

const angular = require('angular');
const chai = require('chai');
const expect = chai.expect;

require('angular-mocks');


describe('testing CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  afterEach(() => this.$rootScope.$apply());

  it('should pass', function() {
    expect(true).to.equal(true);
  });

  it('should be beavis by default', done => {
    expect(this.cowsayCtrl.current).to.equal('beavis.zen');
    done();
  });
  it('should say FIRE by default', done => {
    expect(this.cowsayCtrl.update()).to.include('ffffFFFIIIRE');
    done();
  });
  it('should update the face', done => {
    this.cowsayCtrl.current = 'dragon';
    expect(this.cowsayCtrl.update()).to.include('@_^_@'); //that's the dragons nose
    done();
  });
  it('should update the text', done => {
    let input = 'fack';
    expect(this.cowsayCtrl.update(input)).to.include('fack');
    done();
  });
  it('should add dragon to history', done => {
    this.cowsayCtrl.current = 'dragon';
    this.cowsayCtrl.speak('fack');
    expect(this.cowsayCtrl.history).to.be.an('array');
    expect(this.cowsayCtrl.history[0]).to.include('fack');
    done();
  });
  it('should undo', done => {
    this.cowsayCtrl.current = 'dragon';
    this.cowsayCtrl.speak('fack');

    this.cowsayCtrl.current = 'cow';
    this.cowsayCtrl.speak('moo');
    expect(this.cowsayCtrl.history.length).to.equal(2);
    this.cowsayCtrl.undo();
    expect(this.cowsayCtrl.history.length).to.equal(1);
    expect(this.cowsayCtrl.spoken).to.include('moo');
    this.cowsayCtrl.undo();
    expect(this.cowsayCtrl.history.length).to.equal(0);
    expect(this.cowsayCtrl.spoken).to.include('fack');
    done();
  });
});
