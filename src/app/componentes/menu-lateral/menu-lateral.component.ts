import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, 
  IonItem, MenuController } from "@ionic/angular/standalone";
import { Lado } from 'src/app/models/cubo';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  imports: [IonItem, IonList, IonContent, IonTitle, IonToolbar, IonHeader, IonMenu],
})
export class MenuLateralComponent {

  private menuCtrl = inject(MenuController)

  @Input({ required: true }) public items!: { label: string; side: Lado }[];

  @Output() public sideChange = new EventEmitter<Lado>();

  
  protected async onSelect(side: Lado): Promise<void> {
    this.sideChange.emit(side);

    await this.menuCtrl.close('portfolio-menu');
  }

}
