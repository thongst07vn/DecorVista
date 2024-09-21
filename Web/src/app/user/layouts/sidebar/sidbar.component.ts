import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../entities/user.entity';
import { Designer } from '../../entities/designer.entity';
import { Conect } from '../../../conect';
import { UserService } from '../../services/user.service';
import { DesignerService } from '../../services/designer.service';
import { ConectActive } from '../../services/conectActive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sidbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgClass],
  templateUrl: './sidbar.component.html',
  host:{
    'collision': 'SidbarComponent'
  }
})
export class SidbarComponent {
  user:User
  designer:Designer
  activeClasses = {
    home: '',
    designer: '',
    contactUs:''
  };
  ariahome: boolean
  ariadesigner: boolean
  ariacontactUs: boolean

  showUser:string
  showAuction:string
  constructor(
    private conect : Conect,
    private userService: UserService,
    private designerService : DesignerService,
    private conectActive : ConectActive

  ){
    this.conectActive.data$.subscribe((data) => {
      console.log(data)
      if (data) {
        // if(data == 'buyer' || data=='seller'){
        //   this.activeClasses.manageUser = 'active'
        //   this.ariaUser= true
        //   this.showUser = 'show'
        // }
        // if(data == 'auctionCreate'){
        //   this.activeClasses.auction = 'active'
        //   this.ariaAuction= true
        //   this.showAuction = 'show'
        // }
      }
      // this.activeClasses = { ...this.activeClasses, [data]: 'active' };
    });
  }
  ngOnInit(): void {
    
    this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
          if(res['result']!=null){
            this.user = res['result'] as User
          }
      },
      error=>{
        console.log(error)
      }
    )
    this.designerService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
        if(res['result']!=null){
          this.designer = res['result'] as Designer
        }
      },
      error=>{
        console.log(error)
      }
    )
  }
}
