import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-sign-component',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(
      () => SignComponent
    ),
    multi: true
  }]
})
export class SignComponent implements ControlValueAccessor {
  public signatureImage;
  public changed: (value: string) => void;
  public touched: () => void;
  public isDisabled: boolean;

  constructor() { }

  writeValue(obj: any): void {
    this.signatureImage = obj;
    }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  showImage(data) {
	  this.signatureImage = data;
    this.changed(data);
  }

}
