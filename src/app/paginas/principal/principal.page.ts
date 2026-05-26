import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Lado } from 'src/app/models/cubo';
import { HeaderComponent } from "src/app/componentes/header/header.component";



@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonContent, IonButton, IonButtons, IonIcon, HeaderComponent]
})
export class PrincipalPage implements OnInit {

  protected currentSide: Lado = 'front';

  protected readonly menuItems: { label: string; side: Lado }[] = [
    { label: 'Sobre mí', side: 'front' },
    { label: 'Experiencia', side: 'right' },
    { label: 'Educación', side: 'back' },
    { label: 'Certificados', side: 'left' },
    { label: 'Proyectos', side: 'top' },
    { label: '¡Contáctame!', side: 'bottom' }
  ];

  protected changeSide(side: Lado): void {
    this.currentSide = side;
  }

  constructor() { }

  ngOnInit() {
  }

}
