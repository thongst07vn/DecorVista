
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conect } from '../../../conect';
import { User } from '../../entities/user.entity';
import { Designer } from '../../entities/designer.entity';
import { UserService } from '../../services/user.service';
import { DesignerService } from '../../services/designer.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './profile-edit.component.html',
  host:{
    'collision': 'ProfileEditComponent'
  }
})
export class ProfileEditComponent implements OnInit {
  editProfile: FormGroup
  flag:boolean
  constructor(
    private conect : Conect,
    private userService: UserService,
    private designerService : DesignerService,
    private formBuilder : FormBuilder
  ){
    this.editProfile = this.formBuilder.group({
      // id:[designer.id],
      username : [''],
      avatar:[''],
      email: [''],
      role:[''],
      contactnumber:[''],
      yearofexp:[''],
      specialization:['']
    })
  }
  ngOnInit(): void {
    this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    this.conect.removeScript("src/plugins/src/filepond/filepond.min.js")
    this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")
    this.conect.removeScript("src/plugins/src/leaflet/leaflet.js")
    this.conect.removeScript("src/assets/js/apps/invoice-list.js")
    this.conect.removeScript("src/plugins/src/table/datatable/datatables.js")
    this.conect.removeScript("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    this.conect.removeScript("src/assets/js/custom.js")

    this.conect.addStyle("src/assets/css/light/scrollspyNav.css");
    this.conect.addStyle("src/assets/css/light/components/carousel.css");
    this.conect.addStyle("src/assets/css/light/components/modal.css");
    this.conect.addStyle("src/assets/css/dark/scrollspyNav.css");
    this.conect.addStyle("src/assets/css/dark/components/carousel.css");
    this.conect.addStyle("src/assets/css/dark/components/modal.css");
    this.conect.addStyle("src/plugins/src/filepond/filepond.min.css")
    this.conect.addStyle("src/plugins/src/filepond/FilePondPluginImagePreview.min.css")
    this.conect.addStyle("src/plugins/src/notification/snackbar/snackbar.min.css")
    this.conect.addStyle("src/plugins/src/sweetalerts2/sweetalerts2.css")
    this.conect.addStyle("src/plugins/css/light/filepond/custom-filepond.css")
    this.conect.addStyle("src/assets/css/light/components/tabs.css")
    this.conect.addStyle("src/assets/css/light/elements/alert.css")
    this.conect.addStyle("src/plugins/css/light/sweetalerts2/custom-sweetalert.css")
    this.conect.addStyle("src/plugins/css/light/notification/snackbar/custom-snackbar.css")
    this.conect.addStyle("src/assets/css/light/forms/switches.css")
    this.conect.addStyle("src/assets/css/light/components/list-group.css")
    this.conect.addStyle("src/assets/css/light/users/account-setting.css")
    this.conect.addStyle("src/plugins/css/dark/filepond/custom-filepond.css")
    this.conect.addStyle("src/assets/css/dark/components/tabs.css")
    this.conect.addStyle("src/assets/css/dark/elements/alert.css")
    this.conect.addStyle("src/plugins/css/dark/sweetalerts2/custom-sweetalert.css")
    this.conect.addStyle("src/plugins/css/dark/notification/snackbar/custom-snackbar.css")
    this.conect.addStyle("src/assets/css/dark/forms/switches.css")
    this.conect.addStyle("src/assets/css/dark/components/list-group.css")
    this.conect.addStyle("src/assets/css/dark/users/account-setting.css")

    this.conect.addScriptAsync("src/plugins/src/filepond/filepond.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/FilePondPluginFileValidateType.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/FilePondPluginImageExifOrientation.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/FilePondPluginImagePreview.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/FilePondPluginImageCrop.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/FilePondPluginImageResize.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")
    this.conect.addScriptAsync("src/plugins/src/filepond/filepondPluginFileValidateSize.min.js")
    this.conect.addScriptAsync("src/plugins/src/notification/snackbar/snackbar.min.js")
    this.conect.addScriptAsync("src/plugins/src/sweetalerts2/sweetalerts2.min.js")
    this.conect.addScriptAsync("src/assets/js/users/account-settings.js")
    this.userService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
      res=>{
        if(res['result'] !=null){
          let user = res['result'] as User
          // console.log(user)
          if(user.contactnumber==null){
            user.contactnumber = 'Updating.......'
          }
          this.flag = false
          this.editProfile = this.formBuilder.group({
              // id:[user.id],
              username : [user.username,Validators.required],
              avatar:[user.avatar],
              email: [user.email, Validators.required],
              role:[user.role],
              contactnumber:[user.contactnumber,Validators.required]
          })
        }else{
          this.designerService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser"))).then(
            res=>{
              if(res['result'] != null){
                let designer = res['result'] as Designer
                if(designer.yearofexp==null){
                  designer.yearofexp = 'Updating.......'
                }
                if(designer.specialization==null){
                  designer.specialization = 'Updating.......'
                }
                // console.log(designer.username)
                this.flag = true
                this.editProfile = this.formBuilder.group({
                  // id:[designer.id],
                  username : [designer.username,Validators.required],
                  avatar:[designer.avatar],
                  email: [designer.email, Validators.required],
                  role:[designer.role],
                  contactnumber:[designer.contactnumber,Validators.required],
                  yearofexp:[designer.yearofexp],
                  specialization:[designer.specialization]
                })
              }
            },
            error=>{
              console.log(error)
            }
          )
        }
      },
      error=>{
        console.log(error)
      }
    )
    // this.conect.reloadPage()
  }
  edit(){

  }
}
