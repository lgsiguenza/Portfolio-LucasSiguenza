import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { IonText, IonContent, IonModal, IonIcon, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline, chevronDownOutline, chevronUpOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.scss'],
  imports: [IonIcon, IonContent, IonText],
})
export class ExperienciaModalComponent  implements OnInit {
  protected modalCtrl = inject(ModalController)
  protected readonly scroll =  viewChild.required(IonContent);


  private readonly secciones = [
    'exp-0',
    'exp-1',
  ];


  protected readonly mostrarArriba = () =>this.indiceActual() > 0;

  protected readonly mostrarAbajo = () =>   this.indiceActual() < this.secciones.length - 1;


  protected readonly indiceActual = signal(0);

  /* ======================================================
    SCROLL
    ====================================================== */

    protected async irSeccionSiguiente(): Promise<void> {
      if (!this.mostrarAbajo()) {

        await this.scroll().scrollToBottom(400);

        return;
      }

      this.indiceActual.update(v => v + 1);

      await this.scrollASeccionActual();
    }

    protected async irSeccionAnterior(): Promise<void> {

       if (!this.mostrarArriba()) {

        await this.scroll().scrollToTop(400);

        return;
      }

      this.indiceActual.update(v => v - 1);

      await this.scrollASeccionActual();
    }

    private async scrollASeccionActual(): Promise<void> {

      const id =
        this.secciones[this.indiceActual()];

      const elemento =
        document.getElementById(id);

      if (!elemento) return;

      await elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    /* ======================================================
      MODAL
      ====================================================== */

    protected async cerrarModal(): Promise<void> {
      await this.modalCtrl.dismiss();
  }

  constructor() { 
    addIcons({closeOutline, chevronUpOutline, chevronDownOutline,
      arrowUpOutline, arrowDownOutline
    })
  }
  ngOnInit() {}

}
