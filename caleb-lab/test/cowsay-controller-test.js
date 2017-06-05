'use strict'

const angular = require('angular')
require('angular-mocks')
const cowsayBrowser = require('cowsay-browser')

describe('testing CowsayController', function(){
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
    console.log('logging something out here');
    expect(true).toEqual(true)
  })

  it('should have a default statement of "Moo", default welcome, and empty history array', () => {
    console.log(this.cowsayCtrl.current);
    console.log(this.cowsayCtrl.title);
    console.log(this.cowsayCtrl.history);
    console.log(typeof this.cowsayCtrl.speak);
    expect(this.cowsayCtrl.current).toEqual('beavis.zen')
    expect(this.cowsayCtrl.title).toEqual('Welcome to Camelot')
    expect(this.cowsayCtrl.history).toEqual([])
    expect(typeof this.cowsayCtrl.speak).toEqual('function')
  })

  it('should "speak" following', () => {
    this.cowsayCtrl.text = 'Welcome to Camelot'
    console.log('this is the full string: ', this.cowsayCtrl.update(this.cowsayCtrl.text));
    console.log('this is this.cowsayCtrl.text: ', this.cowsayCtrl.text);
    console.log(this.cowsayCtrl.speak);
    expect(this.cowsayCtrl.update(this.cowsayCtrl.text)).toEqual(cowsayBrowser.say({text: 'Welcome to Camelot', f: 'beavis.zen'}))
  })

  // it('should have the previous spoken thing', () => {
  //   console.log(this.cowsayCtrl.title);
  //   expect(this.cowsayCtrl.title).toEqual('Welcome to Camelot')
  // })
})
