
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../entities/user.entity';
import { Product } from '../../entities/product.entity';
import { DatePipe, formatDate } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  host:{
    'collision': 'InvoiceComponent'
  }
})
export class InvoiceComponent implements OnInit {
  invoiceList: any = [];
  addressForm: FormGroup;
  orderForm: FormGroup;
  city= ['Alipur' , 'Andaman Island', 'Anderson Island' , 'Arainj-Laka-Punga' , 'Austinabad' , 'Bamboo Flat' ,'Barren Island']
  total:number;
  address:any;
  user:any;
  constructor(
    private conect : Conect,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cartService: CartService
  ){
    this.addressForm = this.formBuilder.group(
      {
        city:['Alipur'],
        addressLine1:['',[Validators.required]],
        userId:[''],
        title:[''],
        addressLine2:[''],
        country:[''],
        postalCode:[''],
        landmark:[''],
        phoneNumber:['']
      }
    );
    this.orderForm = this.formBuilder.group(
      {
        userId:[''],
        paymentType:['1'],
        total:[this.total],
        createdAt:[''],
        updateAt:['']
      }
    );
  }
  async ngOnInit() {
    this.invoiceList = JSON.parse(sessionStorage.getItem('buyItems'))
    this.user = await this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser")));
    console.log(this.user['result'].id)
    this.addressForm.value.userId = this.user['result'].id;
    this.orderForm.value.userId = this.user['result'].id;
    this.total=0;
    for(let i =0; i< this.invoiceList.length; i++){
     
      this.total += (this.invoiceList[i].price * this.invoiceList[i].quantity);
    }
    // Các Script không sử dụng
    this.conect.removeScript("src/plugins/src/global/vendors.min.js");
    this.conect.removeScript("layouts/horizontal-light-menu/app.js");
    this.conect.removeScript("src/plugins/src/splide/splide.min.js");
    this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js");
    this.conect.removeScript("src/plugins/src/filepond/filepond.min.js");
    this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js");

    // Các Script sử dụng + trong index
    // this.conect.addScript("src/assets/js/apps/invoice-preview.js");
    
    // Các style có sử dụng
    this.conect.addStyle("src/assets/css/light/apps/invoice-preview.css");
    this.conect.addStyle("src/assets/css/dark/apps/invoice-preview.css");
    

    // this.conect.addScriptAsync("src/assets/js/apps/invoice-preview.js");
      
   
  }

  BuyItems(){
    this.address = JSON.stringify(this.addressForm.value);
    
    let formdata = new FormData();
    this.orderForm.value.createdAt = formatDate(new Date(),'dd/MM/yyyy','en-us');
    this.orderForm.value.total = this.total;
    let order = JSON.stringify(this.orderForm.value);
    console.log(this.orderForm.value);
    console.log(JSON.stringify(this.invoiceList));
    console.log(this.address);
    const OrderItems:any = [];
    for(let i=0;  i < this.invoiceList.length; i++){
        OrderItems.push(
            {
              productId: this.invoiceList[i].id,
              quantity: this.invoiceList[i].quantity
            }
        )
    }
    console.log(JSON.stringify(OrderItems));

    formdata.append('address',this.address);
    formdata.append('invoicelist',JSON.stringify(OrderItems));
    formdata.append('order', order)

    this.cartService.createOrder(formdata).then(
      res => {
        alert('Order success');
      },
      error => {
        console.log(error);
      }
    );
  }

}