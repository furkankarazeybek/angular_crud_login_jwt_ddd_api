import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { ModalDefaultComponent } from '../../../components/modal-default/modal-default.component';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule, ModalDefaultComponent],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent {
  @Input() registeredEmail: string = '';
  @Input() isOpen: boolean = false;
  @Output() onCloseModal = new EventEmitter<void>();

  closeModal() {
    this.onCloseModal.emit();
  }

}
