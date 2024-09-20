
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { ProductSevice } from '../../services/product.service';
import { Product } from '../../entities/product.entity';
import { NgClass } from '@angular/common';


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

}
