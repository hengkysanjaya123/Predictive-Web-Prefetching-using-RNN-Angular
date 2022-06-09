import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Pages {
  name: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pages: Pages[] = [
    {name: '', path: '/members/'},
    {name: '', path: '/members/argentina/'},
    {name: '', path: '/members/armenia/'},
    {name: '', path: '/members/australia/'},
    {name: '', path: '/members/austria/'},
    {name: '', path: '/members/bangladesh/'},
    {name: '', path: '/members/belgium/'},
    {name: '', path: '/members/brazil/'},
    {name: '', path: '/members/canada/'},
    {name: '', path: '/members/chile/'},
    {name: '', path: '/members/china/'},
    {name: '', path: '/members/chinese-taipei/'},
    {name: '', path: '/members/colombia/'},
    {name: '', path: '/members/costa-rica/'},
    {name: '', path: '/members/denmark/'},
    {name: '', path: '/members/egypt/'},
    {name: '', path: '/members/france/'},
    {name: '', path: '/members/georgia/'},
    {name: '', path: '/members/germany/'},
    {name: '', path: '/members/ghana/'},
    {name: '', path: '/members/hong-kong-china/'},
    {name: '', path: '/members/iceland/'},
    {name: '', path: '/members/india/'},
    {name: '', path: '/members/indonesia/'},
    {name: '', path: '/members/iran/'},
    {name: '', path: '/members/israel/'},
    {name: '', path: '/members/japan/'},
    {name: '', path: '/members/kazakhstan/'},
    {name: '', path: '/members/kenya/'},
    {name: '', path: '/members/morocco/'},
    {name: '', path: '/members/netherlands/'},
    {name: '', path: '/members/new-zealand/'},
    {name: '', path: '/members/norway/'},
    {name: '', path: '/members/palestine/'},
    {name: '', path: '/members/paraguay/'},
    {name: '', path: '/members/philippines/'},
    {name: '', path: '/members/poland/'},
    {name: '', path: '/members/portugal/'},
    {name: '', path: '/members/romania/'},
    {name: '', path: '/members/russia/'},
    {name: '', path: '/members/saudi-arabia/'},
    {name: '', path: '/members/singapore/'},
    {name: '', path: '/members/south-africa/'},
    {name: '', path: '/members/spain/'},
    {name: '', path: '/members/sri-lanka/'},
    {name: '', path: '/members/sweden/'},
    {name: '', path: '/members/switzerland/'},
    {name: '', path: '/members/thailand/'},
    {name: '', path: '/members/trinidad-and-tobago/'},
    {name: '', path: '/members/tunisia/'},
    {name: '', path: '/members/turkey/'},
    {name: '', path: '/members/uganda/'},
    {name: '', path: '/members/ukraine/'},
    {name: '', path: '/members/united-arab-emirates/'},
    {name: '', path: '/members/united-states-america/'},
    {name: '', path: '/members/uzbekistan/'},
    {name: '', path: '/members/venezuela/'},
    {name: '', path: '/members/vietnam/'},
    {name: '', path: '/members/zambia/'},
    {name: '', path: '/skills/'},
    {name: '', path: '/skills/.es/'},
    {name: '', path: '/skills/id/114/'},
    {name: '', path: '/skills/id/125/'},
    {name: '', path: '/skills/id/126/'},
    {name: '', path: '/skills/id/127/'},
    {name: '', path: '/skills/id/128/'},
    {name: '', path: '/skills/id/145/'},
    {name: '', path: '/skills/id/146/'},
    {name: '', path: '/skills/id/177/'},
    {name: '', path: '/skills/id/208/'},
    {name: '', path: '/skills/id/209/'},
    {name: '', path: '/skills/id/211/'},
    {name: '', path: '/skills/id/212/'},
    {name: '', path: '/skills/id/216/'},
    {name: '', path: '/skills/id/217/'},
    {name: '', path: '/skills/id/218/'},
    {name: '', path: '/skills/id/219/'},
    {name: '', path: '/skills/id/221/'},
    {name: '', path: '/skills/id/222/'},
    {name: '', path: '/skills/id/224/'},
    {name: '', path: '/skills/id/225/'},
    {name: '', path: '/skills/id/227/'},
    {name: '', path: '/skills/id/228/'},
    {name: '', path: '/skills/id/232/'},
    {name: '', path: '/skills/id/233/'},
    {name: '', path: '/skills/id/234/'},
    {name: '', path: '/skills/id/235/'},
    {name: '', path: '/skills/id/236/'},
    {name: '', path: '/skills/id/237/'},
    {name: '', path: '/skills/id/238/'},
    {name: '', path: '/skills/id/239/'},
    {name: '', path: '/skills/id/240/'},
    {name: '', path: '/skills/id/243/'},
    {name: '', path: '/skills/id/244/'},
    {name: '', path: '/skills/id/245/'},
    {name: '', path: '/skills/id/246/'},
    {name: '', path: '/skills/id/247/'},
    {name: '', path: '/skills/id/249/'},
    {name: '', path: '/skills/id/336/'},
    {name: '', path: '/skills/id/337/'},
    {name: '', path: '/skills/id/385/'},
    {name: '', path: '/skills/id/40/'},
    {name: '', path: '/skills/id/43/'},
    {name: '', path: '/skills/id/430/'},
    {name: '', path: '/skills/id/432/'},
    {name: '', path: '/skills/id/483/'},
    {name: '', path: '/skills/id/484/'},
    {name: '', path: '/skills/id/485/'},
    {name: '', path: '/skills/id/49/'},
    {name: '', path: '/skills/id/544/'},
    {name: '', path: '/skills/id/545/'},
    {name: '', path: '/skills/id/546/'},
    {name: '', path: '/skills/id/547/'},
    {name: '', path: '/skills/id/740/'},
    {name: '', path: '/skills/id/82/'},
    {name: '', path: '/skills/id/83/'},
    {name: '', path: '/skills/id/9/'}
  ];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      console.log(routeParams.path);
      // this.getMerch(routeParams.category);
      // if (this._serviceWorker) {
      //   this._serviceWorker.postMessage({page: routeParams.category});
      // }
    });
  }

}
