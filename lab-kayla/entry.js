'use strict'

require('./scss/reset.scss')
require('./scss/base.scss')

const angular = require('angular')
const cowsay = require('cowsay-browser')

const cowsayApp = angular.module('cowsayApp', [])

cowsayApp.controller('CowsayController', ['$log','$scope', CowsayController])

function CowsayController($log, $scope) {
  $log.debug('#CowsayController')

  this.currentCow = ''
  this.title = 'Welcome to Happy Helpers'
  this.history = []

  cowsay.list((err, cows) => {
    this.cowfiles = cows
    this.current = this.cowfiles[0]
  })

  this.update = function(input) {
    $log.debug('#update')
    return cowsay.say({text: input || 'well hello there', f: this.current})
  }

  this.speak = function(input) {
    $log.debug('#speak')
    this.spoken = this.update(input)
    this.currentCow = this.spoken
    this.history.push(this.spoken)
  }

  this.undo = function() {
    $log.debug('#undo')
    this.history.pop()
    this.currentCow = this.history[this.history.length - 1]
  }
}

cowsayApp.controller('NavigationController', ['$log', NavigationController])

function NavigationController($log) {
  $log.debug()

  this.routes = [
    {
      name:'home',
      url:'/home'
    },
    {
      name:'about',
      url:'/about'
    },
    {
      name:'contact',
      url:'/contact'
    }
  ]
}
