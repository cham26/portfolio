import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  set this(value) {
    this.this = value;
  }

  /*@ngInject*/
  constructor() {
    this.skillsArray = [
      {
        source: '/assets/images/skills/html.png',
        id: 'HTML',
        caption: 'Creating user-friendly web pages and web applications. Providing a semantically structured and interactive web pages.'
      },
      {
        source: '/assets/images/skills/css.png',
        id: 'CSS',
        caption: 'Able to produce an elegant and clean mark-up presentation that makes a visually engaging user interfaces for both web and mobile applications.'
      },
      {
        source: '/assets/images/skills/angular.png',
        id: 'ANGULAR',
        caption: 'A complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.'
      },
      {
        source: '/assets/images/skills/git.png',
        id: 'GIT',
        caption: 'A version control system that is used for software development and other version control tasks. As a distributed revision control system it is aimed at speed,[8] data integrity, and support for distributed, non-linear workflows.'
      },
      {
        source: '/assets/images/skills/bootstrap.png',
        id: 'BOOTSTRAP',
        caption: 'Is a collection of tools for creating websites and web applications. It is free and open source. It includes templates based on HTML and CSS for typography, forms, buttons, navigation and other interface components. It also includes JavaScript extensions. The bootstrap framework is intended to simplify web development.'
      },
      {
        source: '/assets/images/skills/heroku.png',
        id: 'HEROKU',
        caption: ' Is a cloud Platform-as-a-Service (PaaS) supporting several programming languages and being used as a Web Application Deployment model. Lets you build, run and scale applications in a similar manner across all the languages – utilizing the dependencies'
      }
    ];
  }
}

export default angular.module('portfolioApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;


