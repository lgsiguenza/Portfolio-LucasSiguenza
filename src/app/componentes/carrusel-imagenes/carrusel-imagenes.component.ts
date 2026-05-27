import { Component, computed, input, OnInit, signal } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chevronBack, chevronForward } from 'ionicons/icons';

@Component({
  selector: 'app-carrusel-imagenes',
  templateUrl: './carrusel-imagenes.component.html',
  styleUrls: ['./carrusel-imagenes.component.scss'],
  imports: [IonIcon],
})
export class CarruselImagenesComponent  implements OnInit {

   images = input.required<string[]>();
  message = input<string>(''); // 👈 nuevo input

  index = signal(0);

  totalSlides = computed(() => this.images().length + 1);
  mostrarNav = computed(() => this.totalSlides() > 1);

  private startX = 0;

  siguiente() {
    if (this.index() < this.totalSlides() - 1) {
      this.index.update(v => v + 1);
    }
  }

  anterior() {
    if (this.index() > 0) {
      this.index.update(v => v - 1);
    }
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    const delta = event.changedTouches[0].screenX - this.startX;
    if (Math.abs(delta) < 50) return;

    delta > 0 ? this.anterior() : this.siguiente();
  }

  constructor() { 
    addIcons({chevronBack, chevronForward})
  }

  ngOnInit() {}

}
