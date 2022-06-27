import { Component, OnInit } from '@angular/core';
import { Path, PathService } from '../../services/path/path.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paths: Path[];
  filteredPaths: Path[];
  currentPath: Path;

  constructor(private pathService: PathService) {
  }

  ngOnInit(): void {
    this.paths = this.pathService.getPaths();
    this.filteredPaths = this.paths;


    // for (const path of this.filteredPaths.filter(p => p.images !== undefined).sort((a, b) => a.images?.length > b.images?.length ? -1 : 1)) {
    //   console.log(path.name, path.images.length);
    // }
  }

  search(value: string): void {
    value = value.trim();
    value = value.toLowerCase();
    if (value === '') {
      this.filteredPaths = this.paths;
    } else {
      this.filteredPaths = this.paths.filter(p => p.name != null && p.name.toLowerCase().startsWith(value));
    }
  }
}
