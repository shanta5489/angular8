import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup = new FormGroup({

    name : new FormControl('')
});

  constructor() { }

  ngOnInit() {
  }

  updateValue(){
    this.registerFormGroup.get("name").setValue("Shanta");
  }

}
