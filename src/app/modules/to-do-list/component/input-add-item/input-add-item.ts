import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';

//Interfaces
import { IListItem } from '../../interface/IListItem.interface';
import { JsonPipe, NgClass } from '@angular/common';


@Component({
  selector: 'app-input-add-item',
  standalone:true,
  imports: [JsonPipe, NgClass],
  templateUrl: './input-add-item.html',
  styleUrl: './input-add-item.scss',
})
export class InputAddItem {

#cdr = inject(ChangeDetectorRef);
@ViewChild("inputText") public inputText!: ElementRef;

@Input({required:true}) public inputListItems: IListItem[] = []
@Output() public outputAddListItem = new EventEmitter<IListItem>();

  public focusAndAddItem(value:string) {
    if(value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const currentDate = new Date();
      const timesstamp = currentDate.getTime()
      const id = `ID ${timesstamp}`

      this.outputAddListItem.emit({
        id,
        checked:false,
        value
      })
      return this.inputText.nativeElement.focus();
    }
  }
}
