import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './skill.routes';

export class SkillController {
  set this(value) {
    this.this = value;
  }
  /*@ngInject*/
  constructor() {

  }
}

export default angular.module('portfolioApp.skill', [uiRouter])
  .config(routing)
  .component('skill', {
    template: require('./skill.html'),
    controller: SkillController
  })
  .name;
