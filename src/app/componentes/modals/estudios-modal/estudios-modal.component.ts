import { Component, inject, OnInit, signal } from '@angular/core';
import { IonText, IonContent, IonModal, IonIcon, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-estudios-modal',
  templateUrl: './estudios-modal.component.html',
  styleUrls: ['./estudios-modal.component.scss'],
  imports: [IonIcon, IonContent, IonText],
})
export class EstudiosModalComponent  implements OnInit {
  
  protected modalCtrl = inject(ModalController)

  protected cerrarModal(): void {
    setTimeout(() => {
      this.modalCtrl.dismiss(null)
    }, 130);
  }

  constructor() { 
    addIcons({closeOutline})
  }

  ngOnInit() {}

}
