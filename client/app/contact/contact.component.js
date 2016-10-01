import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './contact.routes';

export class ContactController {
  set this(value) {
    this.this = value;
  }
  /*@ngInject*/
  constructor() {

  }
}

export default angular.module('portfolioApp.contact', [uiRouter])
  .config(routing)
  .component('contact', {
    template: require('./contact.html'),
    controller: ContactController
  })
  .name;
