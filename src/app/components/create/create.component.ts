import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
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
  ngOnInit() {
  }
}
