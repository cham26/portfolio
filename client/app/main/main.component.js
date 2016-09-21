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
    ];
  }

  changeImage(direction){
    if (direction === 'next' && this.index < this.allProfileImages.length -1){
      this.index++;
    }
    else if (direction === 'next' && this.allProfileImages.length){
      this.index = 0;
    }
    else if (direction === 'prev' && this.index !== 0){
      this.index--;
    }
    else if (direction === 'prev' && this.index === 0) {
      this.index = this.allProfileImages.length;
    }
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
