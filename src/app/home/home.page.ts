import { Component, ChangeDetectorRef } from '@angular/core';

import {
  IonHeader,
  IonContent,
  IonButton,
  IonFooter,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { carSportOutline } from 'ionicons/icons';

import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  imports: [
    IonHeader,
    IonContent,
    IonButton,
    IonFooter,
    IonIcon
  ],
})

export class HomePage {

  public numero: number = 0;

  public readonly MINIMO: number = 0;
  public readonly MAXIMO: number = 10;

  private readonly KEY_NUMBER: string = 'ddr_key_number';


  constructor(private cdr: ChangeDetectorRef) {

    addIcons({
      carSportOutline
    });

  }


  // GUARDAR EL NÚMERO
  async saveNumber() {

    await Preferences.set({
      key: this.KEY_NUMBER,
      value: this.numero.toString()
    });

    console.log('Número guardado:', this.numero);
  }


  // RECUPERAR EL NÚMERO AL ENTRAR
  async ionViewWillEnter() {

    console.log('ionViewWillEnter');

    const counterPreferences = await Preferences.get({
      key: this.KEY_NUMBER
    });

    console.log('Número recuperado:', counterPreferences.value);

    if (counterPreferences.value !== null) {

      const numero = Number(counterPreferences.value);

      if (
        isNaN(numero) ||
        numero < this.MINIMO ||
        numero > this.MAXIMO
      ) {

        this.numero = this.MINIMO;

        await this.saveNumber();

      } else {

        this.numero = numero;

      }

      // ACTUALIZA LA PANTALLA
      this.cdr.detectChanges();
    }
  }


  // AUMENTAR
  async counterUp() {

    if (this.numero < this.MAXIMO) {

      this.numero++;

      await this.saveNumber();

      console.log('Up:', this.numero);
    }
  }


  // DISMINUIR
  async counterDown() {

    if (this.numero > this.MINIMO) {

      this.numero--;

      await this.saveNumber();

      console.log('Down:', this.numero);
    }
  }

}
