import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-signup-layout',
  standalone: true,
  imports: [],
  templateUrl: './signup-layout.component.html',
  styleUrl: './signup-layout.component.scss'
})
export class SignupLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();
  
  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
