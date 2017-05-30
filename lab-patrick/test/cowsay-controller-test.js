'use strict';

const angular = require('angular');
require('angular-mocks');

describe('testing CowsayController', function(){
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller)=>{
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });
  afterEach(()=> this.$rootScope.$apply());

  it('should pass', () => {
    expect(true).toEqual(true);
  });

  it('should have an inital state of beavis.zen', () =>{
    expect(this.cowsayCtrl.current).toEqual('beavis.zen');
    console.log('HERES SOME THINGS', this.cowsayCtrl);
  });
  it('should have a correct title', () =>{
    console.log(this.cowsayCtrl.title);
    expect(this.cowsayCtrl.title).toEqual('Make things say stuff');
  });
  it('should have a correct number of cow options', ()=>{
    expect(this.cowsayCtrl.cowfiles.length).toEqual(46);
  });
});
