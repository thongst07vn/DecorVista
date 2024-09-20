import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { BaseURLService } from "./baseURL.service";

@Injectable({
    providedIn: 'root'
})
export class ProductSevice{
    constructor(
        private httpClient: HttpClient,
        private baseUrlService : BaseURLService
    ){}
    async findAllProduct(){
        return lastValueFrom(this.httpClient.get(this.baseUrlService.BASE_URL+'product/findall'))
    }
}