import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../service/app.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-country',
  templateUrl: './stock-country.component.html',
  styleUrl: './stock-country.component.css'
})
export class StockCountryComponent  {
  constructor(private toastr: ToastrService, private appService: AppService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  countryName!: string;
  stocks!: any[];
 
  
 
  search() {
    if (this.countryName) {
      this.appService.getStocksByCountryName(this.countryName)
        .subscribe(data => this.stocks = data);
    }
  }
 

  }

