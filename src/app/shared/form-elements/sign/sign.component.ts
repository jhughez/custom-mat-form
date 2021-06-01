import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';

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
  },
    {
      provide: MatFormFieldControl,
      useExisting: SignComponent
    }]
})
export class SignComponent implements ControlValueAccessor, MatFormFieldControl<any> {
  public signatureImage;
  public changed: (value: string) => void;
  public touched: () => void;

  constructor() {
  }

  value: any;
    stateChanges = new Subject<void>();
    id: string;
    placeholder: string;
    ngControl: NgControl;
    focused: boolean;
    empty: boolean;
    shouldLabelFloat: boolean;
    required: boolean;
    disabled: boolean;
    errorState: boolean;
    setDescribedByIds(ids: string[]): void {
    }
    onContainerClick(event: MouseEvent): void {
    }

//*************************************************

  writeValue(obj: any): void {
    this.signatureImage = obj;
    }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  showImage(data) {
	  this.signatureImage = data;
    this.changed(data);
  }

}
