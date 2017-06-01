'use strict';

require('angular');
require('angular-mocks');

describe('testing the CowsayController', function(){
  beforeEach(()=>{
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) =>{
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });
  afterEach(()=> this.$rootScope.$apply());

  it('Should be equal to true', () => {
    expect(true).toEqual(true);
  });

  it('Have the title equal to "THERE IS NO COW LEVEL MAAAN"', () => {
    console.log(this);
    console.log(this.title);
    expect(this.title).toEqual('THERE IS NO COW LEVEL MAAAN');
  });
});
