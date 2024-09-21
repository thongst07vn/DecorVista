
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { ProductSevice } from '../../services/product.service';
import { Product } from '../../entities/product.entity';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './product-details.component.html',
  host:{
    'collision': 'ProductDetailsComponent'
  }
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  constructor(
    private conect : Conect,
    private productService: ProductSevice,
    private activedRoute: ActivatedRoute
  ){}
  ngOnInit(): void {

    this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    this.conect.removeScript("src/plugins/src/filepond/filepond.min.js")
    this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")
    this.conect.removeScript("src/plugins/src/leaflet/leaflet.js")
    this.conect.removeScript("src/assets/js/apps/invoice-list.js")
    this.conect.removeScript("src/plugins/src/table/datatable/datatables.js")
    this.conect.removeScript("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    this.conect.removeScript("src/assets/js/custom.js")
    this.conect.removeScript("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js")

    this.conect.addStyle("src/assets/css/light/components/accordions.css")
    this.conect.addStyle("src/assets/css/dark/components/accordions.css")
    this.conect.addStyle("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css")
    this.conect.addStyle("src/plugins/src/glightbox/glightbox.min.css")
    this.conect.addStyle("src/plugins/src/splide/splide.min.css")
    this.conect.addStyle("src/assets/css/light/components/tabs.css")
    this.conect.addStyle("src/assets/css/light/apps/ecommerce-details.css")
    this.conect.addStyle("src/assets/css/dark/components/tabs.css")
    this.conect.addStyle("src/assets/css/dark/apps/ecommerce-details.css")
    

    this.conect.addScriptAsync("src/plugins/src/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js")
    this.conect.addScriptAsync("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.addScriptAsync("src/plugins/src/splide/splide.min.js")
    this.conect.addScriptAsync("src/assets/js/apps/ecommerce-details.js")
    // this.conect.reloadPage()
    this.activedRoute.paramMap.subscribe(
      params => {
        this.productService.findProductId(parseInt(params.get('productId'))).then(
          res=>{
            this.product = res['result'] as Product
          },
          error=>{
            console.log(error)
          }
        )
      }
    )
  }
  formattedPrice(price: { toString: () => string; }){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  addToCart(){
    window.location.href = '/user/add-to-cart'
  }
  buy(){
  }
}
