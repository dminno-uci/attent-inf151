import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareService } from '../../service/share.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css', '../../app.component.css']
})
export class ReadComponent implements OnInit {

  public shares: Observable<any[]>;
  public searchKey: string;

  public page = 1;
  public item = 30;
  private innerWidth: number;
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/submissions').pipe(map((array) => array.reverse()));
    this.searchKey = '';
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 640) {this.item = 10; }
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
