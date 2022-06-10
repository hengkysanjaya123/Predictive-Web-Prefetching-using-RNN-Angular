import { Component, OnInit } from '@angular/core';
import { Path, PathService } from '../../services/path/path.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paths: Path[];

  constructor(private pathService: PathService) {
  }

  ngOnInit(): void {
    this.paths = this.pathService.getPaths();
  }
}
