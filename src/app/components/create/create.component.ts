import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {data} from '../../rmp';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
  }

  createForm() {
    this.angForm = this.fb.group({
      year: ['', Validators.required ],
      submission: ['', Validators.required ]
    });
  }
  addShare(year, submission) {
    const dataObj = {
      year: year,
      submission: submission
    };
    this.shareservice.addShare(dataObj);

    this.angForm.reset();
  }

  // this method is a use-once-for-all method, just need to use for one time. Double
  // use will create dummy data unless you update the xlsx form
  /*addForOnce() {
    data.forEach(element => {
      console.log(element);
      this.addShare(element.year, element.submission);
    });
  }*/

  ngOnInit() {
    this.createForm();
    // this.addForOnce();
  }
}
