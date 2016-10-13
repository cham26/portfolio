import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './skill.routes';

export class SkillController {
  set this(value) {
    this.this = value;
  }
  /*@ngInject*/
  constructor() {
    this.images = [
      {
        thumb: '/assets/images/photogallery/photo1.jpg',
        dxp: 'ray of sunshine',
        img: '/assets/images/photogallery/photo1.jpg',
        caption: 'hello world happy day'
      },
      {
        thumb: '/assets/images/photogallery/photo2.jpg',
        dxp: 'world peace',
        img: '/assets/images/photogallery/photo2.jpg',
        caption: 'sunshine'
      },
      {
        thumb: '/assets/images/photogallery/photo3.jpg',
        dxp: 'happy day',
        img: '/assets/images/photogallery/photo3.jpg',
        caption: 'sea'
      },
      {
        thumb: '/assets/images/photogallery/photo4.jpg',
        dxp: 'choose happiness',
        img: '/assets/images/photogallery/photo4.jpg',
        caption: 'sand'
      },
      {
        thumb: '/assets/images/photogallery/photo5.jpg',
        dxp: 'celebrate life',
        img: '/assets/images/photogallery/photo5.jpg',
        caption: 'beach'
      },
      {
        thumb: '/assets/images/photogallery/photo1.jpg',
        dxp: 'love all time',
        img: '/assets/images/photogallery/photo1.jpg',
        caption: 'hello world happy day'
      },
      {
        thumb: '/assets/images/photogallery/photo2.jpg',
        dxp: 'be grateful',
        img: '/assets/images/photogallery/photo2.jpg',
        caption: 'sunshine'
      },
      {
        thumb: '/assets/images/photogallery/photo3.jpg',
        dxp: 'always smile',
        img: '/assets/images/photogallery/photo3.jpg',
        caption: 'sea'
      },
      {
        thumb: '/assets/images/photogallery/photo4.jpg',
        dxp: 'keep the spirit up',
        img: '/assets/images/photogallery/photo4.jpg',
        caption: 'sand'
      },
      {
        thumb: '/assets/images/photogallery/photo5.jpg',
        dxp: 'never give up',
        img: '/assets/images/photogallery/photo5.jpg',
        caption: 'beach'
      },
      {
        thumb: '/assets/images/photogallery/photo2.jpg',
        dxp: 'live life to the fullest',
        img: '/assets/images/photogallery/photo2.jpg',
        caption: 'sunshine'
      },
      {
        thumb: '/assets/images/photogallery/photo3.jpg',
        dxp: 'cheers to new beginnings',
        img: '/assets/images/photogallery/photo3.jpg',
        caption: 'sea'
      }
    ];
  }
}

export default angular.module('portfolioApp.skill', [uiRouter])
  .config(routing)
  .component('skill', {
    template: require('./skill.html'),
    controller: SkillController
  })
  .name;
