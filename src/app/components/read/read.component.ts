import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from '../../share.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public shares: Observable<any[]>;
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/submissions');
  }
  getShares(path) {
    return this.shareservice.getShares(path);
  }
}
