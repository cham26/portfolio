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
        fieldLabel: "first group",
        photos: [
          {
            img: "/assets/images/photogallery/photo1.jpg",
            thumb: "/assets/images/photogallery/photo1.jpg",
            dxp: "ray of sunshine",
            caption: "hello world happy day"
          }
        ]
      },
      {
        fieldLabel: "Photo",
        photos: [
          {
            img: "/assets/images/photogallery/photo2.jpg",
            thumb: "/assets/images/photogallery/photo2.jpg",
            dxp: "world peace",
            caption: "sunshine"
          }
        ]
      },
      {
        fieldLabel: "Photo List1",
        photos: [
          {
            img: "/assets/images/photogallery/photo3.jpg",
            thumb: '/assets/images/photogallery/photo3.jpg',
            dxp: 'happy day',
            caption: 'sea'
          },
          {
            img: "/assets/images/photogallery/photo4.jpg",
            thumb: '/assets/images/photogallery/photo4.jpg',
            dxp: 'choose happiness',
            caption: 'sand'
          },
          {
            img: "/assets/images/photogallery/photo5.jpg",
            thumb: '/assets/images/photogallery/photo5.jpg',
            dxp: 'be happy',
            caption: 'beach'
          },
          {
            img: "/assets/images/photogallery/photo1.jpg",
            thumb: '/assets/images/photogallery/photo1.jpg',
            dxp: 'happy tummy',
            caption: 'sandcastle'
          },
          {
            img: "/assets/images/photogallery/photo2.jpg",
            thumb: '/assets/images/photogallery/photo2.jpg',
            dxp: 'spread happiness',
            caption: 'swimming'
          }
        ]
      },
      {
        fieldLabel: "Photo List1",
        photos: [
          {
            img: "/assets/images/photogallery/photo5.jpg",
            thumb: '/assets/images/photogallery/photo5.jpg',
            dxp: 'be grateful',
            caption: 'chocolates'
          },
          {
            img: "/assets/images/photogallery/photo4.jpg",
            thumb: '/assets/images/photogallery/photo4.jpg',
            dxp: 'appreciate small things',
            caption: 'candy'
          },
          {
            img: "/assets/images/photogallery/photo2.jpg",
            thumb: '/assets/images/photogallery/photo2.jpg',
            dxp: 'be thankful',
            caption: 'cotton candy'
          },
          {
            img: "/assets/images/photogallery/photo1.jpg",
            thumb: '/assets/images/photogallery/photo1.jpg',
            dxp: 'be content',
            caption: 'bubblegum'
          },
          {
            img: "/assets/images/photogallery/photo3.jpg",
            thumb: '/assets/images/photogallery/photo3.jpg',
            dxp: 'be blissful',
            caption: 'ice cream'
          }
        ]
      },
      {
        fieldLabel: "Photo List2",
        photos: [
          {
            img: "/assets/images/photogallery/photo2.jpg",
            thumb: '/assets/images/photogallery/photo2.jpg',
            dxp: 'do not give up',
            caption: 'wind'
          },
          {
            img: "/assets/images/photogallery/photo4.jpg",
            thumb: '/assets/images/photogallery/photo4.jpg',
            dxp: 'keep your spirit up',
            caption: 'breeze'
          },
          {
            img: "/assets/images/photogallery/photo5.jpg",
            thumb: '/assets/images/photogallery/photo5.jpg',
            dxp: 'keep on fighting',
            caption: 'fresh air'
          }
        ]
      }
    ];
    this.newImages = _.flatten(_.map(this.images,'photos'));
    this.showGroupedPictures = true;
  }
  toggleGroupPictures() {
    return this.showGroupedPictures = !this.showGroupedPictures;
  }
}

export default angular.module('portfolioApp.skill', [uiRouter])
  .config(routing)
  .component('skill', {
    template: require('./skill.html'),
    controller: SkillController
  })
  .name;
