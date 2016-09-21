'use strict';

import angular from 'angular';

export class BioController {
  set this(value) {
    this.this = value;
  }

  constructor() {
    this.allProfileImages = [
      {
        id: 1,
        source: "/assets/images/bio/profPic.jpg"
      },
      {
        id: 2,
        source: "/assets/images/bio/nerd.jpg"
      },
      {
        id: 3,
        source: "/assets/images/bio/sideview.jpg"
      }
    ];
    this.index = 0;
  }

};

export default angular.module('directives.bio', [])
  .directive('bio', function() {
    return {
      template: require('./myBio.html'),
      restrict: 'E',
      controller: BioController,
      controllerAs: '$ctrl',
      scope: {
        onImageChange: '&'
      }
    };
  })
  .name;

// ToDo: Read about isolated scope function binding., move this.allProfileImages to constants.,
