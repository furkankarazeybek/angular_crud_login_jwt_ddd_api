import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "identity" | "password" | "email"

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {
    @Input() type: InputTypes = "text";
    @Input() placeholder: string = "";
    @Input() label: string = "";
    @Input() inputName: string = "";
    
    @Input() hasError: boolean = false;
    @Input() errorMessage: string = '';
  
    value: string = '';
    onChange: any = () => {};
    onTouched: any = () => {};
  
    onInput(event: Event){
      const value = (event.target as HTMLInputElement).value;
      this.onChange(value);
    }
  
    writeValue(value: any): void {
      this.value = value;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    setDisabledState(isDisabled: boolean): void {}
  }