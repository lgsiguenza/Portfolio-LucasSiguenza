import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lado } from 'src/app/models/cubo';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton],
})
export class HeaderComponent  implements OnInit {

  @Input({ required: true })
  public items!: { label: string; side: Lado }[];

  @Input({ required: true })
  public currentSide!: Lado;

  @Output()
  public sideChange = new EventEmitter<Lado>();

  protected onSelect(side: Lado): void {
    this.sideChange.emit(side);
  }


  constructor() { }

  ngOnInit() {}

}
