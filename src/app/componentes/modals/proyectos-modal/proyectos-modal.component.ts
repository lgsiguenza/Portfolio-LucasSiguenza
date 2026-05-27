import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { IonContent, IonChip, IonLabel, IonIcon, ModalController } from "@ionic/angular/standalone";
import { CarruselImagenesComponent } from "../../carrusel-imagenes/carrusel-imagenes.component";
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.scss'],
  imports: [IonIcon, IonLabel, IonChip, IonContent, CarruselImagenesComponent],
})
export class ProyectosModalComponent  implements OnInit {

  mensaje = 'Y te invito a probar el resto ;)'

  imagenes= [
    'assets/proyectos/guzman-motos/preinicio.png',
    'assets/proyectos/guzman-motos/bienvenida.png',
    'assets/proyectos/guzman-motos/inicio.png',
    'assets/proyectos/guzman-motos/form-registro.png',
    'assets/proyectos/guzman-motos/form-inicio-sesion.png',
    'assets/proyectos/guzman-motos/panel-trabajos.png',
    'assets/proyectos/guzman-motos/panel-vehiculos.png',
  ]

  project = input({
      title: 'Guzman Motos',
      subtitle: '',
      description:
        'Sistema de gestión de reparaciones para un taller de motos con roles de usuario, autenticación, y registro de trabajos, usuarios y vehículos.',
      tech: [
        {nombre: 'Ionic', src: 'assets/tecnologías/ionic.svg'},
        {nombre: 'Angular', src: 'assets/tecnologías/angular.svg'},
        {nombre: 'Supabase', src: 'assets/tecnologías/supabase.svg'},
        {nombre: 'PosgreSQL', src: 'assets/tecnologías/postgrest.svg'}
      ],
      features: [
        '• Registro con autenticación, persistencia de sesión, y roles de usuario.',
        '• Gestión en tiempo real de vehículos y reparaciones.',
        '• Redirección a chat directo de WhatsApp.',
        '• Cálculo de presupuesto en tiempo real y descarga en pdf'
      ],
    });



  protected modalCtrl = inject(ModalController);
  protected readonly scroll = viewChild.required(IonContent);


/* ======================================================
   SCROLL HACIA ARRIBA
   ====================================================== */

  protected async irArriba(): Promise<void> {
    const content = this.scroll();

    await content.scrollToTop(400);
    await this.actualizarEstadoScroll();
  }

  /* ======================================================
    SCROLL HACIA ABAJO
    ====================================================== */

  protected async irAbajo(): Promise<void> {
    const content = this.scroll();

    await content.scrollToBottom(400);
    await this.actualizarEstadoScroll();
  }

  /* ======================================================
   ESTADO (OPCIONAL PERO RECOMENDADO)
   ====================================================== */

    private async actualizarEstadoScroll(): Promise<void> {
      const content = this.scroll();

      const scrollElement = await content.getScrollElement();

      const top = scrollElement.scrollTop;
      const max = scrollElement.scrollHeight - scrollElement.clientHeight;

    }

  /* ======================================================
    MODAL
    ====================================================== */

  protected async cerrarModal(): Promise<void> {
    await this.modalCtrl.dismiss();
  }

  constructor() { 
    addIcons({arrowDownOutline, arrowUpOutline, closeOutline})
  }

  ngOnInit() {}

}
