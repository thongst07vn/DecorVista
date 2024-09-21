
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { ProductSevice } from '../../services/product.service';
import { Product } from '../../entities/product.entity';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../entities/cartItem.entity';
import { User } from '../../entities/user.entity';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass],
  templateUrl: './home.component.html',
  host:{
    'collision': 'HomeComponent'
  }
})
export class HomeComponent implements OnInit {
  products: Product[]
  productsToDisplay: Product[] = []; // Array for displaying current page items
  // Pagination variables
  totalItems: number = 0;
  itemsPerPage: number = 12;
  currentPage: number = 1;
  constructor(
    private conect : Conect,
    private productService:ProductSevice,
    private userService:UserService,
    private cartService:CartService
  ){}
  async ngOnInit(){
    await this.productService.findAllProduct().then(
      res=>{
        this.products = res as Product[]
        this.totalItems = this.products?.length || 0; // Assuming products length
        this.updateDisplayedProducts(); // Update displayed products on initial load
      },
      error=>{
        console.log(error)
      }
    )
  }
  truncate(text: string, length: number, suffix: any) {
      if (text.length > length) {
        // text = text.replace(/\s+/g, '')
        return text.substring(0, length) + suffix;
      }
      return text; 
  }
  formattedPrice(price: { toString: () => string; }){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const visiblePages = 5; // Adjust as needed
    const startPage = Math.max(this.currentPage - Math.floor(visiblePages / 2), 1);
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);
    const pageNumbers: number[] = [];
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage; 
    this.productsToDisplay = this.products.slice(startIndex, endIndex);
  }

  // Event handlers for pagination interactions (implement in your component)
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedProducts();
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProducts();
    }
  }

  onNextPage() {
    if (this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.currentPage++;
      this.updateDisplayedProducts();
    }
  }
  next(){
    return Math.ceil(this.totalItems / this.itemsPerPage)
  }
  async addToCart(productID:any){
    await this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
        if(res['result']){
          let user = res['result'] as User;
          const cartItem = new CartItem();
          cartItem.cartId = user.id;
          cartItem.productId = productID;
          cartItem.quantity = 1;
          this.cartService.addToCart(cartItem).then(
            res => {
              if(res['result']){
                console.log('add success');
                window.location.href = 'user/home'
              }
              else{
                console.log('add failed')
              }
            },
            error => {
              console.log(error);
            }
          )
        }
      },
      error=>{
        console.log(error)
      }
    )

  }
}
