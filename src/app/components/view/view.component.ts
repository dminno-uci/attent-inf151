import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/share.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css', '../../app.component.css']
})
export class ViewComponent implements OnInit {
  public images: Observable<any[]>;

  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.images = this.getShares('/dataImages').pipe(map((array) => array.reverse()));
  }
  getShares(path) {
    return this.shareservice.getImages(path, 1);
  }

}
