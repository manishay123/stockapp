import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

users: any;
  constructor(private appservice: AuthService, private router: Router, private toastr:ToastrService , private form: FormBuilder){}


  ngOnInit(): void{
    this.appservice.getAllUser().subscribe(data=>{
     this.users= data;
     console.log(this.users);
    })
   
   
   
   }
}
