import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  
  stockitems: items[]= [];
  
  form = new FormGroup({
    userId: new FormControl(''),
    symbol: new FormControl(''),
    currency: new FormControl(''),
    name: new FormControl(''),
    exchange: new FormControl(''),
    country: new FormControl(''),
    type: new FormControl(''),
   
  });

  submitted = false;
  errorMessage = '';

  constructor(private toastr: ToastrService, private appservice: AppService , private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        userId: ['', Validators.required],
        symbol: ['', Validators.required ],
        currency: ['', Validators.required],
        name: ['', Validators.required ],
        exchange: ['', Validators.required],
        country: ['', Validators.required ],
        type: ['', Validators.required]
      }

    );
  }





  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    this.appservice.addTofavList(this.form.value).subscribe(data => {
      console.log(data);
     this.router.navigate(['/home'])
      this.toastr.success('Added Successfully.', 'Success');
     


    }, error => {
      console.log(error);

      

    })
}
deleteItem(id: any): void {

  this.appservice.removeFromFavList(id).subscribe(data => {
    const index = this.stockitems.findIndex(x => x.userId = id);
    this.stockitems.splice(index, 1)
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
