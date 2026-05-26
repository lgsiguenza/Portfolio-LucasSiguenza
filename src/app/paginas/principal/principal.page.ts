import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonText } from '@ionic/angular/standalone';
import { Lado } from 'src/app/models/cubo';
import { HeaderComponent } from "src/app/componentes/header/header.component";
import { MenuLateralComponent } from "src/app/componentes/menu-lateral/menu-lateral.component";
import { Util } from 'src/app/servicios/util';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonContent, HeaderComponent, MenuLateralComponent, IonText]
})
export class PrincipalPage implements OnInit {

  private utilSvc = inject(Util);

  protected currentSide: Lado = 'front';

  protected readonly menuItems: { label: string; side: Lado }[] = [
    { label: 'Sobre mí', side: 'front' },
    { label: 'Experiencia', side: 'right' },
    { label: 'Educación', side: 'back' },
    { label: 'Tecnologías', side: 'left' },
    { label: 'Proyectos', side: 'top' },
    { label: '¡Contáctame!', side: 'bottom' }
  ];

  protected changeSide(side: Lado): void {
    this.currentSide = side;
  }

  async abrirModal(item: Lado){
    console.log(item)
  }

  constructor() { }

  ngOnInit() {
  }

}
