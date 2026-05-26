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

  private utilSvc = inject(Util);

  protected currentSide: Lado = 'front';

  protected readonly menuItems: { label: string; side: Lado }[] = [
    { label: 'Sobre mí', side: 'front' },
    { label: 'Educación', side: 'back' },
    { label: 'Experiencia', side: 'right' },
    { label: 'Tecnologías', side: 'left' },
    { label: 'Proyectos', side: 'top' },
    { label: '¡Contáctame!', side: 'bottom' }
  ];

  protected changeSide(side: Lado): void {
    this.currentSide = side;
  }

  async abrirModal(item: Lado){
    switch(item){
      case 'back':
        await this.utilSvc.crearModal(EstudiosModalComponent, 'full', {}, true);
        break;
      case 'left':
        await this.utilSvc.crearModal(TecnologiasModalComponent, 'full', {}, true);
        break;
      case 'right':
        await this.utilSvc.crearModal(ExperienciaModalComponent, 'full', {}, true);
        break;
      case 'top':
        await this.utilSvc.crearModal(ProyectosModalComponent, 'full', {}, true);
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
