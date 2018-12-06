import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/share.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {utf8Encode} from '@angular/compiler/src/util';
import { Base64 } from 'js-base64';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css', '../../app.component.css']
})
export class ViewComponent implements OnInit {
  public images: Observable<any[]>;
  // public realImages: Image[];

  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.images = this.getImages('/dataImages').pipe(map((array) => {
      return array.map(d => {
        if (d.wordcloud) {
          return 'data:image/png;base64,' + d.wordcloud;
        } else if (d.doughnutplot) {
          return 'data:image/png;base64,' + d.doughnutplot;
        }
      });
    }));
  }
  getImages(path) {
    return this.shareservice.getImages(path, 2);
  }


}
