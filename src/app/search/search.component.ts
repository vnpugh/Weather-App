import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  zip: string = '';
  weather: any;
  // create the observable
  searchSubject = new Subject<string>();

  constructor(private searchService: SearchService) { }

  findWeather(zip: string) {
    // we are publishing something inside searchSubject
    this.searchSubject.next(zip);
  }

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(zip => {
        this.searchService.createAPIObservable(zip)
        .subscribe(response => this.weather = response);
          })
      }
  }


