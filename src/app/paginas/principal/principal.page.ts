import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonText } from '@ionic/angular/standalone';
import { Lado } from 'src/app/models/cubo';
import { HeaderComponent } from "src/app/componentes/header/header.component";
import { MenuLateralComponent } from "src/app/componentes/menu-lateral/menu-lateral.component";
import { Util } from 'src/app/servicios/util';
import { EstudiosModalComponent } from 'src/app/componentes/modals/estudios-modal/estudios-modal.component';
import { TecnologiasModalComponent } from 'src/app/componentes/modals/tecnologias-modal/tecnologias-modal.component';
import { ExperienciaModalComponent } from 'src/app/componentes/modals/experiencia-modal/experiencia-modal.component';
import { ProyectosModalComponent } from 'src/app/componentes/modals/proyectos-modal/proyectos-modal.component';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonContent, HeaderComponent, MenuLateralComponent, IonText]
})
export class PrincipalPage implements OnInit {

  private touchStartX = 0;
  private touchStartY = 0;

  private utilSvc = inject(Util);

  protected currentSide: Lado = 'front';

  protected readonly menuItems: { label: string; side: Lado }[] = [
    { label: 'Sobre mí', side: 'front' },
    { label: 'Educación', side: 'right' },
    { label: 'Experiencia', side: 'back' },
    { label: 'Tecnologías', side: 'left' },
    { label: 'Proyectos', side: 'top' },
    { label: '¡Contáctame!', side: 'bottom' }
  ];

  protected changeSide(side: Lado): void {
    this.currentSide = side;
  }

  async abrirModal(item: Lado){
    switch(item){
      case 'right':
        await this.utilSvc.crearModal(EstudiosModalComponent, 'lg', {}, true);
        break;
      case 'left':
        await this.utilSvc.crearModal(TecnologiasModalComponent, 'lg', {}, true);
        break;
      case 'back':
        await this.utilSvc.crearModal(ExperienciaModalComponent, 'md', {}, true);
        break;
      case 'top':
        await this.utilSvc.crearModal(ProyectosModalComponent, 'md', {}, true);
        break;
    }
  }


  protected onTouchStart(event: TouchEvent): void {

    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;

  }

  protected onTouchEnd(event: TouchEvent): void {
    const endX = event.changedTouches[0].screenX;
    const endY = event.changedTouches[0].screenY;

    const diffX = endX - this.touchStartX;
    const diffY = endY - this.touchStartY;

    const threshold = 50;

    // horizontal
    if (Math.abs(diffX) > Math.abs(diffY)) {

      if (diffX > threshold) {
        this.moveCube('right');
      }

      else if (diffX < -threshold) {
        this.moveCube('left');
      }

      return;
    }

    // vertical
    if (Math.abs(diffY) > Math.abs(diffX)) {

      if (diffY > threshold) {
        this.moveCube('down');
      }

      else if (diffY < -threshold) {
        this.moveCube('up');
      }

    }

  }

  protected moveCube(direction: 'up' | 'down' | 'left' | 'right'): void {
    const navigationMap: Record<Lado, Record<string, Lado>> = {

      front: {
        right: 'right',
        left: 'left',
        up: 'top',
        down: 'bottom'
      },

      right: {
        right: 'back',
        left: 'front',
        up: 'top',
        down: 'bottom'
      },

      back: {
        right: 'left',
        left: 'right',
        up: 'top',
        down: 'bottom'
      },

      left: {
        right: 'front',
        left: 'back',
        up: 'top',
        down: 'bottom'
      },

      top: {
        down: 'front',
        up: 'bottom',
        left: 'left',
        right: 'right'
      },

      bottom: {
        up: 'front',
        down: 'back',
        left: 'left',
        right: 'right'
      }

    };
    this.currentSide = navigationMap[this.currentSide][direction];

  }

  constructor() { }

  ngOnInit() {
  }

}
