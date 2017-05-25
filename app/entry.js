'use strict';

// require('./scss/reset.scss');
// require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);


cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('#CowsayController');

  this.$onInit = () => {

    this.title = 'Welcome to Hell';
    this.history = [];
    this.current = '';

    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[7];
      console.log('the cowfiles', this.cowfiles);
    });

    this.update = function(input) {
      $log.debug('#update');
      return cowsay.say({text: input || 'Welcome to Hell', f: this.current});
    };

    this.speak = function(input) {
      $log.debug('#speak');
      this.spoken = this.update(input);
      this.history.push(this.spoken);
      console.log(this.history);
    };

    this.undo = function() {
      $log.debug('#undo');
      let popeye = this.history.pop();
      this.spoken = popeye;
      return popeye.length-1;
    };
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log) {
  $log.debug('#nav-control');

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
