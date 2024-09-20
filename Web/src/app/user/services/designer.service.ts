import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { lastValueFrom } from "rxjs";
import { Data } from "@angular/router";
import { BaseURLService } from "./baseURL.service";

@Injectable({
    providedIn: 'root',

})
export class DesignerService{
    constructor(
        private httpClient: HttpClient,
        private baseUrlService : BaseURLService
    ){}
    async register(formData: FormData){
        return lastValueFrom(this.httpClient.post(this.baseUrlService.BASE_URL + 'designer/register', formData));
    }
    async findbyemail(email: string){
        return lastValueFrom(this.httpClient.get(this.baseUrlService.BASE_URL + 'designer/findbyemail/'+email));
    }
    async login(email: string, password:string){
        return lastValueFrom(this.httpClient.post(this.baseUrlService.BASE_URL + 'designer/login/',{email,password}));
    }
}