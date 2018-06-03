import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CountriesviewComponent } from './countriesview/countriesview.component';
import {CountryService} from './services/country.service';
import { AllpipesPipe,MyLanguage} from './pipes/allpipes.pipe';


const appRoutes : Routes=[
{path:"countries", component:CountriesviewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesviewComponent,
    AllpipesPipe,
    MyLanguage
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
