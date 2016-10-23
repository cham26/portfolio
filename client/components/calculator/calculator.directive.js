'use strict';

import angular from 'angular';

export class CalculatorController {
  constructor() {
    this.inputNumber = '';
    this.operationSymbol = '';
  }
  getUserInput(btn) {
    this.inputNumber = this.inputNumber + btn;
  };
  resetOutput() {
    this.inputNumber = '';
  }
  selectedOperation(btn, firstNumber) {
    this.number1 = firstNumber;
    this.resetOutput();
    this.operationSymbol = btn;
  };
  computeResult() {
    if (_.isNumber(this.inputNumber)) return false;
    let number1 = parseInt(this.number1);
    let number2 = parseInt(this.inputNumber);
    if (this.operationSymbol === '+') {
       this.inputNumber = number1 + number2;
    }
    else if (this.operationSymbol === '-') {
      this.inputNumber = number1 - number2;
    }
    else if (this.operationSymbol === '*') {
      this.inputNumber = number1 * number2;
    }
    else if (this.operationSymbol === '/') {
      if (number2 === 0) {
         return this.inputNumber = 'Invalid Operation';
      }
      this.inputNumber = number1 / number2;
    }
  }
}

export default angular.module('directives.calculator', [])
  .directive('calculator', function() {
    return {
      template: require('./calculator.html'),
      bindToController: true,
      restrict: 'E',
      controller: CalculatorController,
      controllerAs: '$ctrl',
      scope: {
      }
    };
  })
  .name;

