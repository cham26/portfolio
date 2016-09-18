'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  set this(value) {
    this.this = value;
  }

  constructor() {
    this.optionsVisible = false;
  }

  options(){
    this.optionsVisible = !this.optionsVisible;
  };
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
