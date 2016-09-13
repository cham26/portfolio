'use strict';

import angular from 'angular';

export class SkillsController {
  constructor() {}

}

export default angular.module('directives.skills', [])
  .directive('skills', function() {
    return {
      template: require('./mySkills.html'),
      bindToController: true,
      restrict: 'E',
      controller: SkillsController,
      controllerAs: '$ctrl',
      scope: {
        skillsIcon: '='
      }
    };
  })
  .name;


// ToDo: add controller using constructor pattern for example see controller on main.js,
//       pass through isolated scope data from portfolio controller, scope includes: array with images (use for skills)
//           and text
