import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Location {
  country: string;
  countryCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {
  }

  public getLocation(): Observable<Location> {
    return this.http.get<Location>(`http://ip-api.com/json`).pipe(share());
  }
}
