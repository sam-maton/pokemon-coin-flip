import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRange } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonRange],
})
export class HomePage {
  constructor() {}
}
