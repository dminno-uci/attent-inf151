import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { rmp_data } from './data/data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css', '../../app.component.css']
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
  addForOnce() {
    // const year_names = ['1st', '2nd', '3rd', '4th'];
    // rmp_data.forEach(element => {

    //   console.log(year_names[Math.floor(Math.random() * 4)], ' : ', element);
    //   this.addShare(year_names[Math.floor(Math.random() * 4)], element);

    // });
  }

  ngOnInit() {
    this.createForm();
    this.addForOnce();
  }
}
