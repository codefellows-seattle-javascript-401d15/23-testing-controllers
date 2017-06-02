'use strict';

require('./scss/base.scss');
require('./scss/reset.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  this.$onInit = () => {
    $log.debug('#CowsayController');
    
    this.title = 'I\'m a small cow.';
    this.history = [];
    
    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[0];
    });
    
    this.update = function(input) {
      $log.debug('#update');
      
      return cowsay.say({text: input || 'moo', f: this.current});
    };
    
    this.speak = function(input) {
      $log.debug('#speak');
      
      this.spoken = this.update(input);
      this.history.push(this.spoken);
    };
    
    this.undo = function() {
      $log.debug('#undo');
      
      this.history.pop();
      this.spoken = this.history[this.history.length-1] || '';
    };
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log) {
  this.$onInit = () => {

    $log.debug('#NavigationController');
    
    this.routes = [
      {
        name: 'Home',
        url: '/home',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Contact Us',
        url: '/contact-us',
      },
    ];
  };
}