import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent {

    id: number;

    constructor(
      private activatedRoute: ActivatedRoute
    ) {

      // Vorzeichenänderung bewirkt impliziten Cast, alternativ: parseInt()
      // this.id = parseInt(this.activatedRoute.snapshot.params['id']);
      this.id = +this.activatedRoute.snapshot.params['id'];
      console.log(this.id, typeof this.id);
    }

}
