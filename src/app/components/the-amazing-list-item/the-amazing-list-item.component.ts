import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'app-the-amazing-list-item',
  templateUrl: './the-amazing-list-item.component.html',
  styleUrls: ['./the-amazing-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None, // esto permite que los estilos de este componente se apliquen a los hijos
  host: {
    tabindex: '-1', // tabindex es una propiedad de accesibilidad que indica si un elemento es enfocable y en qué orden
    role: 'listitem', // role es una propiedad de accesibilidad que indica el tipo de elemento que es
  },
})
export class TheAmazingListItemComponent implements OnInit, FocusableOption {
  @Input() item: Partial<AppUserCard>;
  constructor(private el: ElementRef) {}
  focus() {
    this.el.nativeElement.focus();
  }

  ngOnInit(): void {}
}
