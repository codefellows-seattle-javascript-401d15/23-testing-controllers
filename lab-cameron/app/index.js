'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');

angular.module('ipsumApp', []);

angular.module('ipsumApp')
.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('#CowsayController');
  $log.log(this);

  this.$onInit = () => {
    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[10];
    });

    this.dictionary = {
      hacker: ['fdasdf', 'jtdfghf', 'sdxc', 'gdfg4sr', 'her5y', 'sdfgw'],
      rico: ['dope', 'wittit', 'doje', 'fo\'sho', 'fresh', 'bruh'],
      simpsons: ['doh!', 'why', 'little', 'donuts', 'you', 'AAAAHHH'],
    };
    this.choices = Object.keys(this.dictionary);
    this.selected = this.choices[0];
    this.text = '';
    this.history = [];

    this.getRandomItem = (list) => {
      return list[Math.floor(Math.random() * list.length)];
    };

    this.handleSubmit = () => {
      let result = [];
      for (let i = 0; i < 15; i++) {
        let choice = this.dictionary[this.selected];
        result.push(this.getRandomItem(choice));
      }
      this.text = result.join(' ');
    };

    this.update = function(input) {
      $log.debug('#update');
      return cowsay.say({text: input || ' ', f: this.current, W: 40});
    };

    this.speak = function(input) {
      $log.debug('#speak');
      this.spoken = this.update(input);
      this.history.push(this.spoken);
    };

    this.undo = function() {
      $log.debug('#undo');
      this.history.pop();
      this.spoken = this.history[this.history.length - 1] || '';
    };
  };
}

angular.module('ipsumApp')
.controller('NavigationController', ['$log', NavigationController]);

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
