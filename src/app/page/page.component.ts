import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Path, PathService} from '../../services/path/path.service';
import {CountryService, Location} from '../../services/country/country.service';
import {combineLatest} from 'rxjs';
import {AppService} from "../../services/app/app.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  currentPath: Path;
  private currentLocation: Location;

  // private _serviceWorker: ServiceWorker | null = null;

  constructor(private route: ActivatedRoute, private pathService: PathService,
              private countryService: CountryService, private appService: AppService) {
  }

  ngOnInit(): void {
    navigator.serviceWorker.ready.then(registration => {
      this.appService.serviceWorker.next(registration.active);
    });
    combineLatest([
      this.route.queryParams,
      this.route.params,
      this.appService.currentLocation
    ]).subscribe(([{prefetch}, {path}, loc]) => {
      this.currentPath = this.pathService.get(path);
      this.currentLocation = loc;

      const pathSequence = sessionStorage.getItem('path');
      if (pathSequence !== null && pathSequence !== undefined) {
        sessionStorage.setItem('path', pathSequence + this.currentPath.originalPath + ',');
      } else {
        sessionStorage.setItem('path', this.currentPath.originalPath + ',');
      }

      // console.log('prefetch', prefetch);
      // console.log('_serviceWorker', this._serviceWorker);
      this.appService.serviceWorker.subscribe(serviceWorker => {
        if (serviceWorker && (prefetch === undefined || prefetch !== 'false')) {
          serviceWorker.postMessage({
            path: this.currentPath,
            country: this.currentLocation.country,
            pathSequence: sessionStorage.getItem('path')
          });
        } else {
          console.log('prefetching disabled');
        }
      });
    });
  }

}
