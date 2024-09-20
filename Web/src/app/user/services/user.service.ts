import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { BaseURLService } from "./baseURL.service";

@Injectable({
    providedIn: 'root'
})
export class UserSevice{
    constructor(
        private httpClient: HttpClient,
        private baseUrlService : BaseURLService
    ){}
    async siginWithGG(formData:FormData){
        return lastValueFrom(this.httpClient.post(this.baseUrlService.BASE_URL+'user/siginwithgg',formData))
    }
    async findbyemail(email: string){
        return lastValueFrom(this.httpClient.get(this.baseUrlService.BASE_URL + 'user/findbyemail/'+email));
    }
}