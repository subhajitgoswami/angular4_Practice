import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import { PhoneListAppComponent } from './components/phone-list-app/phone-list-app.component';
import { PhoneAppComponent } from './components/phone-app/phone-app.component';



import { AppComponent } from './app.component';
import { routes } from './components/routes';
import { PROVIDERS } from './services';
import { COMPONENTS } from './components';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListAppComponent,
    PhoneAppComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [ PROVIDERS,
    { provide: 'ACTUAL_YEAR', useValue: 2016 }],
  bootstrap: [AppComponent]
})
export class AppModule { }
