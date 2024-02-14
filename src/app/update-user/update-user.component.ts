import { Component } from '@angular/core';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  user!: Users;
  userData!: Users;
  userId: any

  form: FormGroup = new FormGroup({
    
    'firstName': new FormGroup(''),
    'lastName': new FormGroup(''),
    'username': new FormGroup(''),
    'password': new FormGroup(''),
    'emailId': new FormGroup(''),
    'phone': new FormGroup(''),
    'country': new FormGroup(''),
  });


  constructor(private toastr: ToastrService, private authservice: AuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.form = new FormGroup( {
        firstName: new FormControl(params['firstName']).value,
        lastName: new FormControl(params['lastName']).value,
        username: new FormControl(params['username']).value,
        password: new FormControl(params['password']).value,
        emailId: new FormControl(params['emailId']).value,
        
        phone: new FormControl(params['phone']).value,
        country: new FormControl(params['country']).value
      
      
          
        
      });
    });


    
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      emailId: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required]
    });
    // console.log(this.route.snapshot.params['id'])
    //     this.authservice.getUserById(this.route.snapshot.params['id']).subscribe(data=>{
    //       console.log(data)
    //       this.form = new FormGroup( {
      
    //               country: this.form.controls['country'].value,
    //               emailId: this.form.controls['emailId'].value,
    //               phone: this.form.controls['phone'].value,
    //               username: this.form.controls['username'].value,
    //               password: this.form.controls['password'].value,
    //                 firstName: this.form.controls['firstName'].value,
    //                 lastName: this.form.controls['lastName'].value
                  
            
    //     })
   

    //   })

  }

  async getdata(): Promise<void> {

    await this.authservice.getUserById(this.userId).subscribe(data => {
      this.user = data;
      this.form.patchValue({
        country: this.user.country,
        emailId: this.user.emailId,
        phone: this.user.phone,
        username: this.user.username,
        password: this.user.password,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      });
    });




  }

  onSubmit() {
    this.userData = {
     
      country: this.form.controls['country'].value,
      emailId: this.form.controls['emailId'].value,
      phone: this.form.controls['phone'].value,
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
        firstName: this.form.controls['firstName'].value,
        lastName: this.form.controls['lastName'].value
      
    };

    console.log(this.userData);

    this.authservice.updateUser(this.userId, this.userData).subscribe(data => {

      this.toastr.success("User Updated Successfully.", 'Success');
      this.router.navigate(['/getAllUser']);

    }, error => {
      this.toastr.error("Something went wrong", 'Error');
    })
  }
}

interface Users{

  firstName: any;
  lastName: any;
  username: any;
  country: any;
  password: any;
  emailId: any;
  phone: any;
  
}


