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

  constructor(private pathService: PathService) {
  }

  ngOnInit(): void {
    this.paths = this.pathService.getPaths();
    this.filteredPaths = this.paths;
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
