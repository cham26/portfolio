'use strict';

import angular from 'angular';

export class BioController {
  set this(value) {
    this.this = value;
  }
  /*@ngInject*/
  constructor(appConfig) {
    this.allProfileInformation = appConfig.PROFILE_INFORMATION;
    this.index = 0;
  }

  changeImage(direction){
    if (direction === 'next' && this.index < this.allProfileInformation.length -1){
      this.index++;
    }
    else if (direction === 'next' && this.allProfileInformation.length){
      this.index = 0;
    }
    else if (direction === 'prev' && this.index !== 0){
      this.index--;
    }
    else if (direction === 'prev' && this.index === 0) {
      this.index = this.allProfileInformation.length -1;
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


