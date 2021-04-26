import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { RegisterValidationService } from 'src/app/service/register-validation.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';



@Component({

  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css'],
  
})
export class AuthenComponent implements OnInit {
  dataRegister:any={}

registerForm = this.fb.group({
nom:[],
prenom:['',Validators.required],
email:['',[Validators.required, Validators.email]],
mdp:['',Validators.required],
mdpp:['',Validators.required],
sexe:['',Validators.required],

},

{
  validator:this.registerValidator.passwordMatchValidator("mdp","mdpp")
  
}
);

  constructor( 
     private fb: FormBuilder,
     private registerValidator:RegisterValidationService,
     private authService:AuthService,
     private router: Router)
      { 

  }

  ngOnInit(): void {
    

  }
    


  getErrorMessage() {
    if (this.registerForm.get('mdp').hasError('required') || this.registerForm.get('mdpp').hasError('required') || this.registerForm.get('nom').hasError('required') || this.registerForm.get('prenom').hasError('required') ) {
      return 'Veuillez remplir ce champs';
    }

    return this.registerForm.get('mdpp').hasError('passwordMismatch') ? 'les mots de passes ne correspondent pas' : '';
  } 

  getErrorMail() {
    if (this.registerForm.get('email').hasError('required')) {
      return 'Veuillez remplir ce champs';
    }

    if(this.registerForm.get('email').hasError('emailTaken')){
      return 'email deja utilisé';
    } 
    return this.registerForm.get('email').hasError('email') ? 'email invalide' : '';
  } 

  hide=true;
  clear(){
    this.registerForm.reset();
  }

  
  onSubmit() {
    const user = {
      nom: this.registerForm.get('nom'),
      prenom: this.registerForm.get('prenom'),
      email: this.registerForm.get('email'),
      mdp: this.registerForm.get('mdp'),
      sexe: this.registerForm.get('sexe')

    }

    this.authService.RegisterUser(user).subscribe(

    res => { 
  
        this.router.navigate(['/contact']);
      },
    err => console.log(err) 
     )

   
      
   


  // TODO: Use EventEmitter with form value console.warn(this.registerForm.value);
  
  }


 




}
