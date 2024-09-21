
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { ProductSevice } from '../services/product.service';
import { Product } from '../entities/product.entity';
import { NgClass } from '@angular/common';
import { DesignerService } from '../services/designer.service';
import { Designer } from '../entities/designer.entity';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass],
  templateUrl: './designerContact.component.html',
  host:{
    'collision': 'DesignerContactComponent'
  }
})
export class DesignerContactComponent implements OnInit {
  designer: Designer[]
  designerToDisplay: Designer[] = []; // Array for displaying current page items
  // Pagination variables
  totalItems: number = 0;
  itemsPerPage: number = 12;
  currentPage: number = 1;
  constructor(
    private conect : Conect,
    private productService:ProductSevice,
    private designerService:DesignerService
  ){}
  async ngOnInit(){
    await this.designerService.findall().then(
      res=>{
        this.designer = res['result'] as Designer[]
        this.totalItems = this.designer?.length || 0; // Assuming products length
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
    this.designerToDisplay = this.designer.slice(startIndex, endIndex);
    console.log(this.designerToDisplay[0].designerId)
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
