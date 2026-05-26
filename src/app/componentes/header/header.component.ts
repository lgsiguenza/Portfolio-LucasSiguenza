import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lado } from 'src/app/models/cubo';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList,
   IonMenu, IonMenuButton, IonTitle,IonToolbar } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {menuOutline} from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton, IonButtons, IonMenuButton, IonToolbar],
})
export class HeaderComponent  implements OnInit {

 @Input({ required: true })
  public items!: { label: string; side: Lado }[];

  @Input({ required: true })
  public currentSide!: Lado;

  @Output()
  public sideChange = new EventEmitter<Lado>();

  protected onSelect(side: Lado): void {
    this.sideChange.emit(side);
  }


  constructor() { 
    addIcons({menuOutline})
  }

  ngOnInit() {}

}
