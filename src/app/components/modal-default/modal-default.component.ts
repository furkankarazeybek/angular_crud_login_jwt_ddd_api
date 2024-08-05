import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-default.component.html',
  styleUrl: './modal-default.component.scss',
})
export class ModalDefaultComponent {
  @Input() titleModal: string = '';
  @Input() primaryMessageText: string = '';
  @Input() secondaryMessageText: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Input() srcIcon: string = '';

  @Input() headerBackgroundColor: string = '';
  @Input() headerTextColor: string = '';
  @Input() closeTextColor: string = '';
  @Input() backgroundPrimaryBtn: string = '';
  @Input() borderColorPrimaryBtn: string = '';
  @Input() colorTextPrimaryBtn: string = '';

  @Input() backgroundSecondaryBtn: string = '';
  @Input() colorTextSecondaryBtn: string = '';




  @Output('submit') onSubmit = new EventEmitter();
  @Output('closeModal') onClose = new EventEmitter();


  submit() {
    this.onSubmit.emit();
  }

  closeModal() {
    this.onClose.emit();
  }

  
}
