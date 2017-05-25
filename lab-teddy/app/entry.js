'use strict';


require('./scss/reset.scss');
require('./scss/base.scss');
const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('#CowsayController');

  this.$onInit = () => {
    this.title = 'Welcome to Cowville';
    this.history = [];

    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[0];
    });

    this.update = function(input){
      $log.debug('#update');
      return cowsay.say({text: input || 'moooo', f: this.current});
    };

    this.undo = function(){
      $log.debug('#undo');
      let temp = this.history.pop();
      this.spoken = temp || '';
    };
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log){
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
