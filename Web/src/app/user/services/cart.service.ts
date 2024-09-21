import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { BaseURLService } from "./baseURL.service";

@Injectable({
    providedIn: 'root'
})
export class CartService{
    constructor(
        private httpClient: HttpClient,
        private baseUrlService : BaseURLService
    ){}
    async addToCart(cartItem:any){
        return lastValueFrom(this.httpClient.post(this.baseUrlService.BASE_URL+'cart/addtocart',cartItem))
    }
    async innerCart(userid:number){
        return lastValueFrom(this.httpClient.get(this.baseUrlService.BASE_URL+'cart/innercart/'+userid))
    }
}