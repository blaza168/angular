import { Component } from '@angular/core';
import {AppService} from './services/app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public form: FormGroup;

  constructor(public appService: AppService) {
    this.form = new FormGroup({
      'name': new FormControl('default', [Validators.required])
    });
  }

  public onSubmit() {
    console.log(this.form);
    this.appService.storeValues(this.form.value).then((data: string[]) => {
      console.log('DATA');
      console.log(data);
      console.log('-------------');
    });
  }

  onInput() {
    console.log(this.appService.text);
  }
}
