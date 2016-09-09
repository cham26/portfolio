'use strict';

import angular from 'angular';

angular
  .module('portfolioApp', [])
  .component('mySkills', function() {
    return {
      template: require('./mySkills.html'),
      restrict: 'E',
      controller: function() {

      }
    };
  });

// ToDo: add controller using constructor pattern for example see controller on main.js,
//       pass through isolated scope data from portfolio controller, scope includes: array with images (use for skills)
//           and text
