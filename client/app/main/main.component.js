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
      {source: '/assets/images/skills/html.png', id: 'HTML', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta fugit perspiciatis? Accusantium cum et id libero nemo quia, similique. Eligendi, expedita, nihil. Animi, aperiam, atque. Mollitia provident quo quod?'},
      {source: '/assets/images/skills/css.png', id: 'CSS', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta fugit perspiciatis? Accusantium cum et id libero nemo quia, similique. Eligendi, expedita, nihil. Animi, aperiam, atque. Mollitia provident quo quod?'},
      {source: '/assets/images/skills/angular.png', id: 'ANGULAR', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta fugit perspiciatis? Accusantium cum et id libero nemo quia, similique. Eligendi, expedita, nihil. Animi, aperiam, atque. Mollitia provident quo quod?'},
      {source: '/assets/images/skills/git.png', id: 'GIT', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta fugit perspiciatis? Accusantium cum et id libero nemo quia, similique. Eligendi, expedita, nihil. Animi, aperiam, atque. Mollitia provident quo quod?'},
      {source: '/assets/images/skills/bootstrap.png', id: 'BOOTSTRAP', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta fugit perspiciatis? Accusantium cum et id libero nemo quia, similique. Eligendi, expedita, nihil. Animi, aperiam, atque. Mollitia provident quo quod?'},
      {source: '/assets/images/skills/heroku.png', id: 'HEROKU', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta fugit perspiciatis? Accusantium cum et id libero nemo quia, similique. Eligendi, expedita, nihil. Animi, aperiam, atque. Mollitia provident quo quod?'}
    ]
  }
}

export default angular.module('portfolioApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;

// ToDo: write arrays into constants
