import { Component } from '@angular/core';

/**
 * Generated class for the Shared component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shared',
  templateUrl: 'shared.html'
})
export class Shared {

  text: string;

  constructor() {
    console.log('Hello Shared Component');
    this.text = 'katmandu';
  }

}
