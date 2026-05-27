import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonIcon, IonContent, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, closeOutline} from 'ionicons/icons';

@Component({
  selector: 'app-tecnologias-modal',
  templateUrl: './tecnologias-modal.component.html',
  styleUrls: ['./tecnologias-modal.component.scss'],
  imports: [IonIcon, IonContent],
})
export class TecnologiasModalComponent  implements OnInit {

  protected activeIndex = signal(0);

  protected domains = [
    {
      id: 1,
      title: 'Backend',

      icons: [
        {
          label: 'Java',
          svg: `assets/tecnologías/java.svg`
        },

        {
          label: 'Nodejs',
          svg: `assets/tecnologías/nodejs.svg`
        },
      ]
    },

    {
      id: 2,
      title: 'Frontend',

      icons: [
        {
          label: 'Angular',
          svg: `assets/tecnologías/angular.svg`
        },

        {
          label: 'Ionic',
          svg: `assets/tecnologías/ionic.svg`
        },
      ]
    },

    {
      id: 3,
      title: 'DevOps y Bases de datos',

      icons: [
        {
          label: 'Github',
          svg: `assets/tecnologías/github.svg`
        },

        {
          label: 'Supabase',
          svg: `assets/tecnologías/supabase.svg`
        },

        {
          label: 'PostgreSQL',
          svg: `assets/tecnologías/postgrest.svg`
        },

        {
          label: 'MySql',
          svg: `assets/tecnologías/mysql.svg`
        }
      ]
    }
  ];

  //~ =========================================================
  //~ CAROUSEL STATE
  //~ =========================================================
  protected touchStartX = 0;

  //~ =========================================================
  //~ SLIDES
  //~ =========================================================

  protected readonly totalSlides = computed(() => {
    return this.domains.length;
  });

  //~ =========================================================
  //~ NAVIGATION
  //~ =========================================================

  protected siguiente(): void {

    if (this.activeIndex() >= this.totalSlides() - 1) {
      return;
    }

    this.activeIndex.update(v => v + 1);
  }

  protected anterior(): void {

    if (this.activeIndex() <= 0) {
      return;
    }

    this.activeIndex.update(v => v - 1);
  }

  //~ =========================================================
  //~ TOUCH EVENTS
  //~ =========================================================

  protected onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  protected onTouchEnd(event: TouchEvent): void {

    const endX = event.changedTouches[0].screenX;

    const delta = endX - this.touchStartX;

    /*
      Evita swipes accidentales pequeños
    */

    if (Math.abs(delta) < 50) {
      return;
    }

    /*
      Swipe derecha
    */

    if (delta > 0) {
      this.anterior();
      return;
    }

    /*
      Swipe izquierda
    */

    this.siguiente();
  }

  private modalCtrl = inject(ModalController);

  protected async cerrarModal(): Promise<void> {
    await this.modalCtrl.dismiss();
  }
  constructor() {
    addIcons({chevronBackOutline, chevronForwardOutline, closeOutline})
   }

  ngOnInit() {}

}
