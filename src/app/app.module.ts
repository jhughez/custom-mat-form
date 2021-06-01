import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { InputComponent } from './shared/form-elements/input/input.component';
import { SignComponent } from './shared/form-elements/sign/sign.component';
import {SignaturePadModule} from '@ng-plus/signature-pad';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    InputComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SignaturePadModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor ( library: FaIconLibrary ) {
		library.addIconPacks( far );
	}
}
