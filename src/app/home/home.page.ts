import { Component } from '@angular/core';

import {
  IonHeader,
  IonContent,
  IonButton,
  IonFooter
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonContent,
    IonButton,
    IonFooter
  ],
})

// Aqui va toda la logica de la pagina
// Variables y Metodos

export class HomePage {

  public numero: number = 1500;

  constructor() {}

}
