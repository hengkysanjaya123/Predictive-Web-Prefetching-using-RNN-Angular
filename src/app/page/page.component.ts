import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Path, PathService } from '../../services/path/path.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private _serviceWorker: ServiceWorker|null = null;
  currentPath: Path;

  constructor(private route: ActivatedRoute, private pathService: PathService) {
  }

  ngOnInit(): void {
    navigator.serviceWorker.ready.then( registration => {
      this._serviceWorker = registration.active;
    });
    this.route.params.subscribe(({path}) => {
      this.currentPath = this.pathService.get(path);
      if (this._serviceWorker) {
        this._serviceWorker.postMessage({ path: this.pathService.getPaths()[Math.floor(Math.random() * this.pathService.getPaths().length)] });
      }
    });
  }

}
