'use strict';

import angular from 'angular';

export class BioController {
  set this(value) {
    this.this = value;
  }
  /*@ngInject*/
  constructor(appConfig) {
    this.allProfileImages = appConfig.PROFILE_IMAGES;
    this.allProfileDescriptions = appConfig.PROFILE_DESCRIPTION;
    this.index = 0;
  }

  changeImage(direction){
    if (direction === 'next' && this.index < this.allProfileImages.length -1 && this.index < this.allProfileDescriptions.length -1){
      this.index++;
    }
    else if (direction === 'next' && this.allProfileImages.length && this.allProfileDescriptions.length){
      this.index = 0;
    }
    else if (direction === 'prev' && this.index !== 0){
      this.index--;
    }
    else if (direction === 'prev' && this.index === 0) {
      this.index = this.allProfileImages.length && this.allProfileDescriptions.length;
    }
  }

}

export default angular.module('directives.bio', [])
  .directive('bio', function() {
    return {
      template: require('./myBio.html'),
      restrict: 'E',
      controller: BioController,
      controllerAs: '$ctrl',
      scope: {
      }
    };
  })
  .name;


