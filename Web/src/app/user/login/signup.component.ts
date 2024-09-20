
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAPIService } from '../services/user.service';
import { formatDate } from '@angular/common';
import { DesignerService } from '../services/designer.service';

@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  host:{
    'collision': 'SignUpComponent'
  }
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup
  selectedFile: any;

  constructor(
    private conect: Conect,
    private userService: UserAPIService,
    private formBuilder: FormBuilder,
    private designerService : DesignerService
  ){}
  ngOnInit(): void {
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

    this.registerForm = this.formBuilder.group({
      username:['',
        [Validators.required]
      ],
      email:['',
        [Validators.required,
        Validators.email]
      ],
      password:['',
        [Validators.required,
        Validators.pattern(/^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%]).{6,20})$/)]
      ],
      rePassword:['',[
        Validators.required
      ]],
      contactnumber:['',
        [Validators.required,
        Validators.pattern(/^0\d{9}$/)]
      ],
      role:['1'],
      avatar:['noimg.jpg']
  },
  {
      validator: this.CheckP
  }
)
  }
  CheckP(control:AbstractControl){
    return control.value.password === control.value.rePassword ? null:{mismatch:true}
 }
  Register(){
      this.userService.findbyemail(this.registerForm.value.email).then(
        res => {
           if(res['result']){
            console.log('this account already exists')
           } else {
              this.designerService.findbyemail(this.registerForm.value.email).then(
                res => {
                  if(res['result']){
                    console.log('this account is already exists');
                  } else {
                    let user = this.registerForm.value;
              console.log(user);
              let u = JSON.stringify(user)
              let formdata = new FormData();
              formdata.append('userinfo',u);
                if(user.role == 1){
                  this.userService.register(formdata).then(
                    res => {
                      if(res['result']){
                        console.log('success')
                      }
                      else {
                        console.log('failed')
                      }
                    },
                    error => {
                      console.log(error);
                    }
                  )
                }               
                if(user.role == 2){
                  this.designerService.register(formdata).then(
                    res => {
                      if(res['result']){
                        console.log('success create designer')
                      }
                      else {
                        console.log('failed')
                      }
                    },
                    error => {
                      console.log(error);
                    }
                  )
                }
                  }
                }
              )
           }
        }
      )  
  }
}
