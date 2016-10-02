import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import _ from 'lodash';
import routing from './contact.routes';

export class ContactController {
  set this(value) {
    this.this = value;
  }

  /*@ngInject*/
  constructor() {
    this.testArray = [
      {
        name: 'Arthur',
        gender: 'man',
        active: true,
        age: 27
      },
      {
        name: 'Cham',
        gender: 'lady',
        active: true,
        age: 12
      },
      {
        name: 'Cham',
        gender: 'woman',
        active: true,
        age: 27
      },
      {
        name: 'somedue',
        gender: 'man',
        active: true,
        age: 20
      },
      {
        name: 'Karry',
        gender: 'woman',
        active: false,
        age: 14
      },
      {
        name: 'Marry',
        gender: 'woman',
        active: false,
        age: 50
      },
      {
        name: 'Marry',
        gender: 'man',
        active: false,
        age: 10
      },
      {
        name: 'horse',
        gender: 'horse',
        active: true,
        age: 99
      }
    ];

    this.onlyActiveMen = _
      .chain(this.testArray)
      .filter({gender: 'man', active: true})
      .value();

    this.youngMenArray = _.filter(this.onlyActiveMen, (man) => man.age < 26);

    this.fiveYearsYounger = _.forEach(this.testArray, (person) => {
      if (_.isNumber(person.age)) {
        return person.age = person.age - 5;
      }
    });

    this.onlyWomenArray = _.filter(this.testArray, {gender: 'woman'});

    this.otherGenderArray = _.filter(this.testArray, (person) =>
      person.gender !== "man" && person.gender !== "woman")
  }
}

export default angular.module('portfolioApp.contact', [uiRouter])
  .config(routing)
  .component('contact', {
    template: require('./contact.html'),
    controller: ContactController
  })
  .name;

