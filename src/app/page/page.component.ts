import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Path, PathService } from '../../services/path/path.service';
import { CountryService, Location } from '../../services/country/country.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  currentPath: Path;
  private currentLocation: Location;
  private _serviceWorker: ServiceWorker | null = null;

  constructor(private route: ActivatedRoute, private pathService: PathService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.getLocation().subscribe(loc => {
      this.currentLocation = loc;
    });
    navigator.serviceWorker.ready.then(registration => {
      this._serviceWorker = registration.active;
    });
    combineLatest([
      this.route.queryParams,
      this.route.params
    ]).subscribe(([{prefetch}, {path}]) => {
      this.currentPath = this.pathService.get(path);

      const pathSequence = sessionStorage.getItem('path');
      if (pathSequence !== null && pathSequence !== undefined) {
        sessionStorage.setItem('path', pathSequence + this.currentPath.originalPath + ',');
      } else {
        sessionStorage.setItem('path', this.currentPath.originalPath + ',');
      }

      if (this._serviceWorker && prefetch !== 'false') {
        this._serviceWorker.postMessage({
          path: this.currentPath,
          country: this.currentLocation.country,
          pathSequence: sessionStorage.getItem('path')
        });
      } else {
        console.log('prefetching disabled');
      }
    });
  }

}
