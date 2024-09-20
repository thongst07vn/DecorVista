declare var google : any  
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { FormsModule } from '@angular/forms';
import * as JSBase64 from 'js-base64'
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { DesignerService } from '../services/designer.service';
@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './login.component.html',
  host:{
    'collision': 'LoginComponent'
  }
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  imageURL : string
  selectFile : any
  constructor(
    private conect: Conect,
    private http : HttpClient,
    private userService: UserService,
    private designerService : DesignerService
    // private authService : AuthGoogleService
  ){}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:'585670576605-lh30tp300kh6bdjllld1djd3h9vacuor.apps.googleusercontent.com',
      callback:(resp : any)=> {
        console.log(resp);
        this.handleLogin(resp)
      }
    })
    google.accounts.id.renderButton(document.getElementById("google-btn"),{
        type: 'icon',
        // text: 'signin_with',
        // theme:'filled_blue',
        shape:'circle',
        size:'large',
        // logo_alignment: 'center'
    })
    this.username = ''
    this.password = ''

    // this.conect.removeScript("src/bootstrap/js/bootstrap.bundle.min.js")
    this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    this.conect.removeScript("src/plugins/src/mousetrap/mousetrap.min.js")
    this.conect.removeScript("layouts/horizontal-light-menu/app.js")
    this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    this.conect.removeScript("src/plugins/src/filepond/filepond.min.js")
    this.conect.removeScript("src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js")
    this.conect.removeScript("src/plugins/src/waves/waves.min.js")
    this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")


    this.conect.addStyle("layouts/horizontal-light-menu/css/light/loader.css")
    this.conect.addStyle("layouts/horizontal-light-menu/css/dark/loader.css")
    this.conect.addScript("layouts/horizontal-light-menu/loader.js")
    this.conect.addStyle("src/bootstrap/css/bootstrap.min.css")
    this.conect.addStyle("layouts/horizontal-light-menu/css/light/plugins.css")
    this.conect.addStyle("src/assets/css/light/authentication/auth-cover.css")

    this.conect.addStyle("layouts/horizontal-light-menu/css/dark/plugins.css")
    this.conect.addStyle("src/assets/css/dark/authentication/auth-cover.css")
    this.conect.addStyle("src/plugins/src/sweetalerts2/sweetalerts2.css")
    this.conect.addStyle("src/plugins/css/light/sweetalerts2/custom-sweetalert.css")
    this.conect.addStyle("src/plugins/css/dark/sweetalerts2/custom-sweetalert.css")

    this.conect.addScriptAsync("src/plugins/src/sweetalerts2/sweetalerts2.min.js")
    this.conect.addScriptAsync("layouts/horizontal-light-menu/alert.js")
  }
  login(){
    this.userService.findbyemail(this.username).then(
      res => {
        if(res['result']){
          this.userService.login(this.username,this.password).then(
            res => {
              if(res['result']){
                sessionStorage.setItem("loggedInUser",this.username)
                window.location.href = 'user/home'
              }
            }
          )
        } else {
          this.designerService.findbyemail(this.username).then(
            res => {
              if(res['result']){
                this.designerService.login(this.username,this.password).then(
                  res => {
                    if(res['result']){
                      sessionStorage.setItem("loggedInUser",this.username)
                      window.location.href = 'user/home'
                    }
                  }
                )
              }
            }
          )
        }
      }
    )
  }
  // async downloadImage(url: string) {
  //   this.http.get(url, { responseType: 'blob' })
  //     .subscribe(blob => {
  //       const reader = new FileReader();
  //       console.log(reader)
  //       // this.selectFile = reader
  //       reader.onloadend = () => {
  //         this.imageURL = reader.result as string;
  //         // console.log(this.imageURL)

  //       };
  //       reader.readAsDataURL(blob);
  //     });
  // }
  decodeToken(token:string){
    const base64URL = token.split(".")[1]
    const base64 = base64URL.replace(/-/g,'+').replace(/_/g,'/')
    // console.log(JSON.parse(atob(token.split(".")[1])))
    // decodeURIComponent(JSON.parse(atob(base64).split('').map(function(c){
    //   return c.charCodeAt(0).toString(16).slice(-2)
    // }).join('')))

    return JSON.parse(JSBase64.decode(base64))
  }
  handleLogin(resp:any){
    // this.authService.login()
    const payLoad = this.decodeToken(resp.credential)
    // const file = this.convertToFile(payLoad.picture)
    // this.downloadImage(payLoad.picture)
    console.log(this.imageURL)
    const account = {
      email: payLoad.email,
      username: payLoad.name,
      avatar: 'noimg.jpg',
      role: 1 
    }
    this.userService.findbyemail(account.email).then(
      res=>{
        if(res['result']){
          sessionStorage.setItem("loggedInUser",JSON.stringify(account.email))
          window.location.href = 'user/home'
        }else{
          let s = JSON.stringify(account);
          let formData = new FormData();

          formData.append('avt', payLoad.picture);
          formData.append('usergg',s);
          this.userService.siginWithGG(formData).then(
              res =>{
                  if(res['result']){
                    // console.log(account)
                    sessionStorage.setItem("loggedInUser",JSON.stringify(account.email))
                    window.location.href = 'user/home' 
                  } else {
                      console.log('failed');
                  }
              },
              error => {
                  console.log(error);
              }
          )
        }
      }
    )
    
    
  }

}
