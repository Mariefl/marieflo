import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AbstractControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import {User} from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterValidationService {

  constructor(private http: HttpClient,
    private authService:AuthService) { }

    

  passwordMatchValidator(mdp: string, mdpp: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[mdp];
      const confirmPasswordControl = formGroup.controls[mdpp];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
}




}


