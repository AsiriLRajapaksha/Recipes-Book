import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadFeature = 'receipes';
  title = 'new-first-app';

  onNavigate(feature:string){
    this.loadFeature = feature;
  }
}
