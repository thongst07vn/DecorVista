
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { DesignerService } from '../services/designer.service';
import { Designer } from '../entities/designer.entity';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './designerProfile.component.html',
  host:{
    'collision': 'DesignerProfileComponent'
  }
})
export class DesignerProfileComponent implements OnInit {
  designer:Designer
  constructor(
    private conect : Conect,
    private userService: UserService,
    private designerService : DesignerService,
    private activedRoute : ActivatedRoute

  ){}
  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      params => {
        console.log(params.get('dsId'))
        this.designerService.findById(parseInt(params.get('dsId'))).then(
          res=>{
              this.designer = res['result'] as Designer
          },
          error=>{
            console.log(error)
          }
        )
      }
    )
    this.conect.removeScript("src/plugins/src/highlight/highlight.pack.js")
    this.conect.removeScript("src/plugins/src/flatpickr/flatpickr.js")
    this.conect.removeScript("src/plugins/src/flatpickr/custom-flatpickr.js")

    this.conect.addStyle("src/assets/css/light/components/list-group.css")
    this.conect.addStyle("src/assets/css/light/users/user-profile.css")
    this.conect.addStyle("src/assets/css/dark/components/list-group.css")
    this.conect.addStyle("src/assets/css/dark/users/user-profile.css")
    this.conect.addStyle("src/plugins/css/light/flatpickr/custom-flatpickr.css")
    this.conect.addStyle("src/plugins/css/dark/flatpickr/custom-flatpickr.css")

    this.conect.addScript("src/plugins/src/highlight/highlight.pack.js")

    this.conect.addScript("src/plugins/src/flatpickr/flatpickr.js")
    this.conect.addScript("src/plugins/src/flatpickr/custom-flatpickr.js")
    // this.conect.reloadPage()

  }
}
