import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItem } from '../../interface/IListItem.interface';

@Component({
  selector: 'app-input-list-item',
  imports: [],
  templateUrl: './input-list-item.html',
  styleUrl: './input-list-item.scss',
})
export class InputListItem {

  @Input({ required: true }) public inputListItems: IListItem[] = []

  @Output() outputUpdateCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();


  public updateItemCheckbox(id: string, checked: boolean) {
    return this.outputUpdateCheckbox.emit({ id, checked })
  }

  @Output() outputUpdateText = new EventEmitter<{
    id: string;
    value: string;
  }>();
  public updateItemText(id: string, value: string) {
    return this.outputUpdateText.emit({ id, value})
  }
  
  @Output() outputDeleteItem = new EventEmitter<string>();
  public deleteItem(id: string) {
    return this.outputDeleteItem.emit(id)
  }
}
