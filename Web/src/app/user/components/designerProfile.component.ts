
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { UserService } from '../services/user.service';

import { DesignerService } from '../services/designer.service';
import { Designer } from '../entities/designer.entity';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ConsultationService } from '../services/consultation.service';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './designerProfile.component.html',
  host:{
    'collision': 'DesignerProfileComponent'
  }
})
export class DesignerProfileComponent implements OnInit {
  designer:Designer
  designerId:number
  userId:any
  designerForm: FormGroup
  constructor(
    private conect : Conect,
    private userService: UserService,
    private designerService : DesignerService,
    private activedRoute : ActivatedRoute,
    private formBuilder: FormBuilder,
    private consultationService : ConsultationService


  ){

    // this.userId = userResult['result'].id;
    this.activedRoute.paramMap.subscribe(
      params => {
        this.designerId = parseInt(params.get('dsId'))
        this.designerService.findById(this.designerId).then(
          res=>{
              this.designer = res['result'] as Designer
          },
          error=>{
            console.log(error)
          }
        )
      }
    )
    this.designerForm =  this.formBuilder.group({
      scheduledTime:[''],
      note:[''],
      designerId:[this.designerId],
      userId:[this.userId]
    })
  }
  async ngOnInit(){
    const userResult = await this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser")));
    this.userId = userResult['result'].id;
    // console.log(userResult)
    this.designerForm =  this.formBuilder.group({
      scheduledTime:['',Validators.required],
      status:[1],
      note:[''],
      designerId:[this.designerId],
      userId:[this.userId]
    })

    this.conect.addStyle("src/assets/css/light/components/list-group.css")
    this.conect.addStyle("src/assets/css/light/users/user-profile.css")
    this.conect.addStyle("src/assets/css/dark/components/list-group.css")
    this.conect.addStyle("src/assets/css/dark/users/user-profile.css")

    // this.conect.reloadPage()
    
  }

  send(){
    let s = JSON.stringify(this.designerForm.value)
    let fromData = new FormData()
    fromData.append('desingerConsultation',s)
    this.consultationService.createConsultation(fromData).then(
      res=>{
        if(res['result']){
          alert('Scheduled successfully')
        }
        else{
          alert('Scheduling failed')
        }
      }
    )
    console.log(this.designerForm.value)
  }
}
