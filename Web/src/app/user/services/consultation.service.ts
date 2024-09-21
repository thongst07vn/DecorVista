import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { BaseURLService } from "./baseURL.service";

@Injectable({
    providedIn: 'root'
})
export class ConsultationService{
    constructor(
        private httpClient: HttpClient,
        private baseUrlService : BaseURLService
    ){}
    async createConsultation(consultation:any){
        return lastValueFrom(this.httpClient.post(this.baseUrlService.BASE_URL+'consultation/create',consultation))
    }
    async findall(designerId:number){
        return lastValueFrom(this.httpClient.get(this.baseUrlService.BASE_URL+'consultation/findallconsultatio/'+designerId))
    }
}