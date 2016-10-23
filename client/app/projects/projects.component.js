import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './projects.routes';

export class ProjectsController {
  set this(value) {
    this.this = value;
  }
  /*@ngInject*/
  constructor() {

  }

}

export default angular.module('portfolioApp.projects', [uiRouter])
  .config(routing)
  .component('projects', {
    template: require('./projects.html'),
    controller: ProjectsController
  })
  .name;

