'use strict'

require('angular')
require('angular-mocks')

describe('testing the CowsayController', function(){
  beforeEach(() => {
    angular.mock.module('cowsayApp')
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope
      this.cowsayCtrl = new $controller('CowsayController')
      this.cowsayCtrl.$onInit()
    })
  })
  afterEach(() => this.$rootScope.$apply())

  it('should pass', () => expect(true).toEqual(true))

  it('have inital state should be correct', () => {
    console.log(this.cowsayCtrl.update('rawr'));
    expect(this.cowsayCtrl.history).toEqual([])
    expect(this.cowsayCtrl.update('rawr').length).toBeGreaterThan(1)
  })

  it('should handleSubmit should generate cow', () => {
    // expect(this.cowsayCtrl.content).toEqual('')
    this.cowsayCtrl.speak('rawr')
    expect(this.cowsayCtrl.history.length).toBeGreaterThan(0)
  })
})
