import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'

})
export class RegisterComponent implements OnInit{
  userId: any;
  user!: User;
  
  form: FormGroup = new FormGroup({
    'firstName': new FormGroup(''),
    'lastName': new FormGroup(''),
    'username': new FormGroup(''),
    'password': new FormGroup(''),
    'emailId': new FormGroup(''),
    'phone': new FormGroup(''),
    'country': new FormGroup(''),
  });

 

   constructor(private toastr: ToastrService, private authService: AuthService , private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        emailId: ['', Validators.required],
        phone: ['', Validators.required],
        country: ['', Validators.required]
    });
  }





   onSubmit() {
    this.user = {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
      emailId: this.form.controls['emailId'].value,
      phone: this.form.controls['phone'].value,
      country: this.form.controls['country'].value
      }
    

    console.log(this.user);

    this.authService.createUser(this.user).subscribe(data => {

      this.toastr.success("User Added Successfully.", 'Success');
      
     this.router.navigate(['/login'])

    }, error => {
      this.toastr.error("Something went wrong", 'Error');
    })
  }


//  }

// getUser() {
//   this.authService.getUserById(this.userIdToGet).subscribe(user => {
//     console.log('User:', user);

//   });
// }

// createUser() {
//   this.authService.createUser(this.newUser).subscribe(createdUser => {
//     console.log('Created User:', createdUser);
//     // Handle the created user data as needed
//   });
// }

// updateUser(id: any) {
//   this.authService.updateUser(this.userId, this.user).subscribe(data=>{
//     this.user= data;
//     console.log(this.user);
//   });
  // Implement the logic to update user data using this.userService.updateUser
//}
 
}
