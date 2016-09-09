'use strict';

import angular from 'angular';

export default angular
  .module('portfolioApp', [])
  .component('myBio', function() {
    return {
      template: require('./myBio.html'),
      restrict: 'E',
      // template: 'lorem120',
      controller: function() {
      }
    };
  })
  .name;


// export default angular.module('directives.navbar', [])
//   .component('navbar', {
//     template: require('./navbar.html'),
//     controller: NavbarComponent
//   });
//   .name;
