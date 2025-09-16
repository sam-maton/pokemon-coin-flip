import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRange,
  RangeCustomEvent,
  IonText,
  IonButton,
  IonRippleEffect,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonRippleEffect,
    IonButton,
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRange,
  ],
})
export class HomePage {
  constructor() {}

  selectedValue: number = 1;

  rangeChange(event: RangeCustomEvent) {
    this.selectedValue = event.detail.value as number;
  }
}
