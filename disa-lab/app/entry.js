'use strict'

require('./scss/reset.scss')
require('./scss/main.scss')

const angular = require('angular')
const cowsay = require('cowsay-browser')
const cowsayApp = angular.module('cowsayApp', [])

cowsayApp.controller('CowsayController', ['$log', CowsayController])

function CowsayController($log) {
  $log.debug('#CowsayController')

  $log.log('Whooee, would you look at that!', this)

  this.title = 'Come a little closer!'
  this.history = []

  cowsay.list((err, cows) => {//I think this line is the problem, but I dont' know what is wrong.
    this.cowfiles = cows
    this.current = this.cowfiles[0]
  })

  this.update = function(input) {
    $log.debug('#update')
    return cowsay.say({text: input || 'Ah ah ah ah!', f: this.current})
  }

  this.speak = function(input) {
    $log.debug('#speak')
    this.spoken = this.update(input)
    this.history.push(this.spoken)
  }

  this.undo = function() {
    $log.debug('#undo')
    let temp = this.history.pop()
    this.spoken = temp || ''
  }
}

cowsayApp.controller('NavigationController', ['$log', NavigationController])

function NavigationController($log) {
  $log.debug('#NavigationController')

  this.routes = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'about',
      url: '/about'
    },
    {
      name: 'contact',
      url: '/contact-us'
    }
  ]
}
