
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { Product } from '../../entities/product.entity';
import { ProductSevice } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './addtocard.component.html',
  host:{
    'collision': 'AddtoCardComponent'
  }
})
export class AddtoCardComponent implements OnInit, AfterViewInit {
  cartItems: any
  buyItems: any = []
  constructor(
    private conect : Conect,
    private productService: ProductSevice,
    private cartService : CartService,
    private userService : UserService
  ){

  }
  async ngOnInit(){
    try {
      const user = await this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser")));
      const cartResult = await this.cartService.innerCart(user['result'].id);
      if (cartResult['result']) {
        this.cartItems = []; // Initialize cartItems array
        for(let i=0; i<cartResult['result'].length; i++){
          const product = await this.productService.findProductId(cartResult['result'][i].productId);
          this.cartItems.push({
            id : product['result'].id,
            name:product['result'].name,
            brand:product['result'].brand,
            description:product['result'].description,
            categoryId:product['result'].categoryId,
            image:product['result'].image,
            price:product['result'].price,
            quantity: cartResult['result'][i].quantity,
            cardid : cartResult['result'][i].id,
            selectedindex: i,
            selected:false
        });
        }
        console.log(this.cartItems)
      }
    } catch (error) {
      console.error(error);
    }
    this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    this.conect.removeScript("src/plugins/src/filepond/filepond.min.js")
    this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")
    this.conect.removeScript("src/assets/js/apps/invoice-list.js")
    this.conect.removeScript("src/plugins/src/table/datatable/datatables.js")
    this.conect.removeScript("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    this.conect.removeScript("src/assets/js/custom.js")

    this.conect.addStyle("src/plugins/src/table/datatable/datatables.css")
    this.conect.addStyle("src/plugins/css/light/table/datatable/dt-global_style.css")
    this.conect.addStyle("src/assets/css/light/apps/invoice-list.css")
    this.conect.addStyle("src/plugins/css/dark/table/datatable/dt-global_style.css")
    this.conect.addScriptAsync("src/assets/js/custom.js")

    this.conect.addStyle("src/assets/css/dark/apps/invoice-list.css")
    
    this.conect.addScriptAsync("src/plugins/src/table/datatable/datatables.js")
    this.conect.addScriptAsync("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    await this.conect.addScriptAsync("src/assets/js/apps/invoice-list.js")
    this.conect.reloadPage()
  }
  ngAfterViewInit() {
    const deleteButton =  document.querySelector('.dt-delete');
    console.log(deleteButton)
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.deleteAll();
      });
    }
  }
  deleteAll(){
    console.log('CCCCCCCCC')
  }
  formattedPrice(price: { toString: () => string; }){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  truncate(text: string, length: number, suffix: any) {
    if (text.length > length) {
      // text = text.replace(/\s+/g, '')
      return text.substring(0, length) + suffix;
    }
    return text; 
  }
  DeleteItem(id:any){
    console.log(id)
    this.cartService.deleteItem(id);
    window.location.href = 'user/add-to-cart'

  }
  ChangeSelectedValue(selectedindex: number,evt:any){
    const isChecked = evt.target.checked;
      this.cartItems[selectedindex].selected = isChecked
  }
  BuyItems(){
    this.buyItems=[]
    sessionStorage.setItem('buyItems',JSON.stringify(this.buyItems))

    for(let i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].selected){
        this.buyItems.push(this.cartItems[i]);
      }
    }
    if(this.buyItems.length >0){
      sessionStorage.setItem('buyItems', JSON.stringify(this.buyItems))
      // console.log(sessionStorage.getItem('buyItems'));
      window.location.href = '../user/invoice'
    }
  }
}
