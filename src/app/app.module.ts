import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CreateComponent } from './components/create/create.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router.module';
import { ShareService } from './service/share.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './components/read/read.component';
import { ViewComponent } from './components/view/view.component';

import {NgxPaginationModule} from 'ngx-pagination';  // import for pagination


@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [ AppComponent, CreateComponent, ReadComponent, ViewComponent ],
  bootstrap: [ AppComponent ],
  providers: [ShareService]
})
export class AppModule {}
