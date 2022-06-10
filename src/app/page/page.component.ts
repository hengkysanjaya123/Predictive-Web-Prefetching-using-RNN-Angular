import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Path, PathService } from '../../services/path/path.service';
import { CountryService, Location } from '../../services/country/country.service';

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
      console.log(this.currentLocation.country);
    });
    navigator.serviceWorker.ready.then(registration => {
      this._serviceWorker = registration.active;
    });
    this.route.params.subscribe(({path}) => {
      this.currentPath = this.pathService.get(path);
      if (this._serviceWorker) {
        let randomPath = this.pathService.getPaths().filter(p => p.images != null && p.images.length > 0);
        // @ts-ignore
        randomPath = randomPath[Math.floor(Math.random() * randomPath.length)];
        this._serviceWorker.postMessage({path: randomPath});
      }
    });
  }

}
