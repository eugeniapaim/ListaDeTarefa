import { Component, signal } from '@angular/core';

//Components
import { InputAddItem } from '../../component/input-add-item/input-add-item';
import { InputListItem } from '../../component/input-list-item/input-list-item';

// Interface
import { IListItem } from '../../interface/IListItem.interface';
import { ELocalStorage } from '../../enum/ELocalStorage.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  imports: [InputAddItem, InputListItem],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  public addItem = signal(true);


  #setListItem = signal<IListItem[]>(this.#parseItem())

  public getListItem = this.#setListItem.asReadonly();

  #parseItem() {
    return JSON.parse(localStorage.getItem(ELocalStorage.MY_LIST) || '[]')
  }

  #updateLocalStorage() {
    return localStorage.setItem(
      ELocalStorage.MY_LIST,
      JSON.stringify(this.#setListItem())
    )
  }

  public getInputAndAddItem(value: IListItem) {
    localStorage.setItem(
      ELocalStorage.MY_LIST, JSON.stringify([...this.#setListItem(), value])
    )

    return this.#setListItem.set(this.#parseItem())
  }

  public listItemsStage(value: 'pending' | 'completed') {
    return this.getListItem().filter((res: IListItem) => {
      if (value === 'pending') {
        return !res.checked;
      }
      if (value === 'completed') {
        return res.checked
      }

      return res
    })
  }

  public updateItemCheckbox(newItem: { id: string; checked: boolean }) {
    this.#setListItem.update((oldValue: IListItem[]) => {
      oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.checked = newItem.checked
        }
        return res;
      })
      return oldValue;
    })
    return this.#updateLocalStorage
  }

  public updateItemText(newItem: { id: string, value: string }) {
    this.#setListItem.update((oldValue: IListItem[]) => {
      oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.value = newItem.value
        }
        return res;
      })
      return oldValue;
    })
    return this.#updateLocalStorage
  }

  public deleteItem(id: string) {
    Swal.fire({
      title: "Tem certeza que deseja excluir o itenm?",
      text: "Essa ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--secondary)",
      cancelButtonColor: "var(--primary)",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Deletar"
    }).then((result) => {


      if (result.isConfirmed) {
        this.#setListItem.update((oldValue: IListItem[]) => {
          return oldValue.filter((res) => res.id !== id);
        });

        this.#updateLocalStorage();

        Swal.fire({
          title: "Item deletado com sucesso!",
          text: "Item deletado.",
          icon: "success",
        });
      }
    })
  }

  public deleteAllItems() {
    Swal.fire({
      title: "Tem certeza que deseja excluir todos os itens?",
      text: "Essa ação não pode ser desfeita!",
      icon: "warning",
      iconColor: "var(--primary)",
      background: "var(--bg-010)",
      showCancelButton: true,
      confirmButtonColor: "var(--secondary)",
      cancelButtonColor: "var(--primary)",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Deletar"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(ELocalStorage.MY_LIST);
        return this.#setListItem.set(this.#parseItem())
      Swal.fire({
        title: "Itens deletados com sucesso!",
        text: "Seus itens foram deletados.",
        icon: "success"
      });
      }
    });


  }
};



