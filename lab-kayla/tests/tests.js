'use strict'

require('angular')
require('angular-mocks')

describe('testing CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp')
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope
      this.cowsayCtrl = new $controller('CowsayController')
      this.cowsayCtrl.$onInit()
    })
  })
  afterEach(() => this.$rootScope.$apply())

  it('should pass', () => {
    expect(true).toEqual(true)
  })

  it('should have an initial animal of elephant', () => {
    expect(this.cowsayCtrl.current).toEqual('elephant')
  })
})
