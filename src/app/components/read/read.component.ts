import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareService } from '../../service/share.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public shares: Observable<any[]>;
  public searchKey: string;

  public page = 1;
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/submissions');
    this.searchKey = '';
  }
  getShares(path) {
    return this.shareservice.getShares(path, 900);
  }

  onPageChange(event) {
    this.page = event;
  }
  searchShares(path): void {
    this.shares = this.shareservice.searchShares(path, this.searchKey);
    // console.log(this.searchKey);
  }
}
