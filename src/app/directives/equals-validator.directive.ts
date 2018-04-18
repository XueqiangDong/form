import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {equal} from 'assert';
import {equalValidator} from '../validators/validators';

@Directive({
  selector: '[equals]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualsValidatorDirective {

  constructor() {
  }

}
