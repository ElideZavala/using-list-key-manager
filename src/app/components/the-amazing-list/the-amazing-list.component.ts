import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  HostListener,
} from '@angular/core';
import { AppUserCard } from 'src/interfaces/app-user-card.interface';
import { TheAmazingListItemComponent } from '../the-amazing-list-item/the-amazing-list-item.component';

@Component({
  selector: 'app-the-amazing-list',
  templateUrl: './the-amazing-list.component.html',
  styleUrls: ['./the-amazing-list.component.scss'],
  host: {
    role: 'list',
  },
})
export class TheAmazingListComponent implements OnInit, AfterViewInit {
  @Input() listItems: Partial<AppUserCard>[] = [];
  @ViewChildren(TheAmazingListItemComponent)
  listItemsElements: QueryList<TheAmazingListItemComponent>; // QueryList es una lista de elementos que se pueden consultar desde la vista
  private listKeyManager: FocusKeyManager<TheAmazingListItemComponent>; // FocusKeyManager es una clase que permite manejar el foco de los elementos de una lista

  @HostListener('window:keydown', ['$event'])
  onKeydown(event) {
    // onKeydown es un método de FocusKeyManager que permite manejar los eventos de teclado
    this.listKeyManager.onKeydown(event);
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // focusFirstItem es un método de FocusKeyManager que enfoca el primer elemento de la lista
    this.listKeyManager = new FocusKeyManager(this.listItemsElements);
  }
}
