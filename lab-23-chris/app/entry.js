'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {

// initialize the state before it is rendered or compiled
  this.$onInit = () => {

    $log.debug('CowsayController()');

    this.title = 'Welcome to Cowsay';
    this.history = [];

    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[40];
    });

    this.update = function(input) {
      $log.debug('cowsayCtrl.update()');
      return cowsay.say({text: input || 'moo', f: this.current, W: 60});
    };

    this.speak = function(input) {
      $log.debug('cowsayCtrl.speak()');
      this.text = input;
      this.spoken = this.update(input);
      this.history.push(this.spoken);
    };

    this.undo = function() {
      $log.debug('cowsayCtrl.undo()');
      this.history.pop();
      this.spoken = this.history[this.history.length - 1] || '';
    };

    this.logger = function(input) {
      $log.debug('cowsayCtrl.logger()');
      $log.log(input);
      return input;
    };
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log) {
  $log.debug('#NavigationController');

  this.routes = [
    {
      name: 'home',
      url: '/home',
    },
    {
      name: 'about',
      url: '/about',
    },
    {
      name: 'contact',
      url: '/contact-us',
    },
  ];
}
