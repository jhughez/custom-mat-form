import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { RegistrationRequestModel } from './registration-request.model';


@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {


	public registrationFrom: FormGroup;

	public passwordFieldType: string = 'password';

	get nameField (): FormControl {
		return this.registrationFrom.get( 'name' ) as FormControl;
	}

	get emailField (): FormControl {
		return this.registrationFrom.get( 'email' ) as FormControl;
	}

	get passwordField (): FormControl {
		return this.registrationFrom.get( 'password' ) as FormControl;
	}

	get favouriteHexCodeValue (): string {
		return this.registrationFrom.get( 'favouriteHexCode' ).value;
	}

	constructor() { }


	ngOnInit(): void {
		this.generateRegistrationForm();
	}


	public generateRegistrationForm (): void {
		this.registrationFrom =
			new FormGroup( {
        signature: new FormControl(
          'data:image/png;base64,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',
          {
            validators: [
            ]
          }
        ),
				name: new FormControl(
					'Joe',
					{
						validators: [
							Validators.required,
							UniversalValidators.noEmptyString
						]
					}
				),
				email: new FormControl(
					'joe@joe.com',
					{
						validators: [
							Validators.required,
							EmailValidators.normal
						]
					}
				),
				password: new FormControl(
					'password',
					{
						validators: [
							Validators.required,
							UniversalValidators.noWhitespace
						]
					}
				),
				favouriteHexCode: new FormControl( '#efefef' )
			});
	}

	public submitRegistrationForm (): void {
		if ( this.registrationFrom.valid ) {
			const registrationRequest: RegistrationRequestModel = {
				...this.registrationFrom.value
			};

			// Success 🎉
			console.log( { registrationRequest } );
		}
	}

	public togglePasswordVisible (): void {
		this.passwordFieldType =
			this.passwordFieldType === 'text'
				? 'password'
				: 'text';
	}

}
