import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";
@Injectable({
    providedIn: 'root'
})
export class AuthGoogleService{
    private oAuthService :  OAuthService
    private router : Router
    constructor() {
        this.initConfiguration();
    }
    initConfiguration(){
        const authConfig: AuthConfig = {
            issuer:'https://accounts.google.com',
            strictDiscoveryDocumentValidation: false,
            clientId:'585670576605-lh30tp300kh6bdjllld1djd3h9vacuor.apps.googleusercontent.com',
            redirectUri: window.location.origin+'/user/home',
            scope:''
        }
        this.oAuthService.configure(authConfig)
        this.oAuthService.setupAutomaticSilentRefresh()
        this.oAuthService.loadDiscoveryDocumentAndTryLogin()
    }
    login(){
        this.oAuthService.initImplicitFlow()
    }
    logout(){
        this.oAuthService.revokeTokenAndLogout()
        this.oAuthService.logOut()
    }
    getProfile(){
        return this.oAuthService.getIdentityClaims()
    }
    getToken(){
        return this.oAuthService.getAccessToken()
    }
}