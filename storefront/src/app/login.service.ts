import { Injectable, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Injectable()
export class LoginService {

  @ViewChild('myModal')
  modal: ModalComponent;

  close() {
      this.modal.close();
  }

  open() {
      this.modal.open();
  }
}
