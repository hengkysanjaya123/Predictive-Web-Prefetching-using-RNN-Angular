import {Component, OnInit} from '@angular/core';
import {Path, PathService} from '../../services/path/path.service';
import {AppService} from "../../services/app/app.service";
import {CountryService} from "../../services/country/country.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paths: Path[];
  filteredPaths: Path[];
  currentPath: Path;

  constructor(private pathService: PathService, private appService: AppService,
              private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.paths = this.pathService.getPaths();
    this.filteredPaths = this.paths;
    this.filteredPaths = this.filteredPaths.sort((a, b) => a.name > b.name ? 1 : -1);

    navigator.serviceWorker.ready.then(registration => {
      this.appService.serviceWorker.next(registration.active);
    });
    this.countryService.getLocation().subscribe(loc => {
      this.appService.currentLocation.next(loc);
    });
    // for (const path of this.filteredPaths.filter(p => p.images !== undefined).sort((a, b) => a.images?.length > b.images?.length ? -1 : 1)) {
    //   console.log(path.name, path.images.length);
    // }
    //
    // console.log(this.filteredPaths.filter(p => p.images !== undefined).map(i => i.images.length).reduce((p, c) => p + c, 0));
    // console.log(this.filteredPaths.filter(p => p.images !== undefined).length);
  }

  search(value: string): void {
    value = value.trim();
    value = value.toLowerCase();
    if (value === '') {
      this.filteredPaths = this.paths;
    } else {
      this.filteredPaths = this.paths.filter(p => p.name != null && p.name.toLowerCase().startsWith(value));
    }
    this.filteredPaths = this.filteredPaths.sort((a, b) => a.name > b.name ? 1 : -1);
  }
}
