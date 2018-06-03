import { Component, OnInit } from '@angular/core';
import {CountryService} from '../services/country.service';
import {Languages } from '../JSON/languages';

@Component({
  selector: 'app-countriesview',
  templateUrl: './countriesview.component.html',
  styleUrls: ['./countriesview.component.css'],
  providers: [CountryService]
})
export class CountriesviewComponent implements OnInit {

  public returnJson:any[]=[];
  pageSize:number=10;
  p: number = 1;
  Languagesdata;

  mytext;
  langauges;

  constructor(private _httpService: CountryService) { }

  ngOnInit() {

    this.getAllCountries();
    this.Languagesdata=Languages;
  }

  getAllCountries(): void{
     console.log("Hello fetch data ");
    
     this._httpService.GetCountries()
     .subscribe((data) => {
      
       this.returnJson =data.json();
       console.log(this.returnJson)
      }, error=>alert(error),
     () =>console.log("data displayed")
     );
  }

}
