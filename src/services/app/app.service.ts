import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Location} from '../country/country.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // public serviceWorker: ServiceWorker | null = null;
  public serviceWorker = new BehaviorSubject<ServiceWorker>(null);
  public currentLocation = new BehaviorSubject<Location>(null);

  constructor() {
  }
}
