import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem, 
    IonInput,
    IonButton, 
    IonIcon, 
  ],
})
export class TaskListPage implements OnInit {
  public tasks: string [] = []
  public task: string =''; 
  constructor() {
    addIcons({
      addOutline
    })
  }

  ngOnInit() {}
  addTas(){
    console.log(this.task)
    this.tasks.push(this.task); 
    console.log(this.tasks)
    this.task =''; 
    
  }
}

