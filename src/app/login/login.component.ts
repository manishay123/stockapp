import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 responsedata : any;
 
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
   
  });

  submitted = false;
  errorMessage = '';

  constructor(private toastr: ToastrService, private authService: AuthService ,private router
    : Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      }

    );
  }





  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    this.authService.loginUser(this.form.value).subscribe(data => {
      console.log(data);
    if(data!=null){
      this.responsedata= data;
      localStorage.setItem('token', this.responsedata.token);
      this.router.navigate(['/stocksbycountryname/:countryname']);
    }
    

      this.toastr.success('Login Successfully.', 'Success');
     


    }, error => {
      console.log(error);

      

    })

  }

 

}
