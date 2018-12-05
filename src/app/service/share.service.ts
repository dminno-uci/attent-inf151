import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { SubmitEntrance } from '../type/data';

@Injectable()
export class ShareService {

  private basePath = '/submissions';
  constructor(private db: AngularFireDatabase) { }

  addShare(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log('Success');
  }

  getShares(path, amount): Observable<any[]> {
    return this.db.list(path, ref => ref.limitToLast(amount)).valueChanges();
  }

  searchShares(path, key): Observable<any[]> {
    return this.db.list(path).valueChanges().pipe(
      tap(val => console.log(val)),
      map(result =>
        result.filter((one: SubmitEntrance) => {
          if (one.submission) {
            return one.submission.toLowerCase().includes(key.toLowerCase());
          } else {
            return false;
          }
        })
      ));
  }
}
