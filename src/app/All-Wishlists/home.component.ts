import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  stockitems: items[]= [];
   users: any;
constructor(private appservice: AppService, private router: Router, private toastr:ToastrService , private form: FormBuilder){}

ngOnInit(): void{
 this.appservice.viewAllStock().subscribe(data=>{
  this.users= data;
  console.log(this.users);
 })



}

deleteItem(id: number): void {

  this.appservice.removeFromFavList(id).subscribe(data => {
    this.users= data;
    console.log(data);
    this.toastr.success("Successfully Delete");

  });

}
}
interface items{
  userId: number,
  symbol: string,
  currency: string,
  name: string,
  exchange: string,
  country: string,
  type: string
  
}


