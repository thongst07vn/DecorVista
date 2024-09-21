
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Conect } from '../../conect';
import { Product } from '../entities/product.entity';
import { ProductSevice } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { ConsultationService } from '../services/consultation.service';
import { Designer } from '../entities/designer.entity';
import { Consultation } from '../entities/consultation.entity';
import { DesignerService } from '../services/designer.service';
import { User } from '../entities/user.entity';


@Component({
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './listSchedule.component.html',
  host:{
    'collision': 'ListScheduleComponent'
  }
})
export class ListScheduleComponent implements OnInit{
  consultationItems:any =[]
  constructor(
    private conect : Conect,
    private productService: ProductSevice,
    private cartService : CartService,
    private userService : UserService,
    private designerService : DesignerService,
    private consultationService : ConsultationService
  ){

  }
  async ngOnInit(){
    
    this.conect.removeScript("src/plugins/src/glightbox/glightbox.min.js")
    this.conect.removeScript("src/plugins/src/global/vendors.min.js")
    this.conect.removeScript("src/plugins/src/splide/splide.min.js")
    this.conect.removeScript("src/plugins/src/filepond/filepond.min.js")
    this.conect.removeScript("src/plugins/src/filepond/FilePondPluginImageTransform.min.js")
    this.conect.removeScript("src/assets/js/apps/invoice-list.js")
    this.conect.removeScript("src/plugins/src/table/datatable/datatables.js")
    this.conect.removeScript("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    this.conect.removeScript("src/assets/js/custom.js")

    this.conect.addStyle("src/plugins/src/table/datatable/datatables.css")
    this.conect.addStyle("src/plugins/css/light/table/datatable/dt-global_style.css")
    this.conect.addStyle("src/assets/css/light/apps/invoice-list.css")
    this.conect.addStyle("src/plugins/css/dark/table/datatable/dt-global_style.css")
    this.conect.addScriptAsync("src/assets/js/custom.js")

    this.conect.addStyle("src/assets/css/dark/apps/invoice-list.css")
    
    this.conect.addScriptAsync("src/plugins/src/table/datatable/datatables.js")
    this.conect.addScriptAsync("src/plugins/src/table/datatable/button-ext/dataTables.buttons.min.js")
    this.conect.addScriptAsync("src/assets/js/apps/invoice-list.js")
    this.conect.reloadPage()
    const designerServiceR = await this.designerService.findbyemail(JSON.parse(sessionStorage.getItem("loggedInUser")))
    const designer = designerServiceR['result']
    const consultationServiceR = await this.consultationService.findall(designer.designerId)
    const consultation = consultationServiceR['result']
    for(let i = 0; i<= consultation.length;i++){
      const user = await this.userService.findbyid(consultation[i].userId)
      this.consultationItems.push({
        username:user['result'].username,
        scheduledTime:consultation[i].scheduledTime,
        status:consultation[i].status,
        note:consultation[i].note
      })
    }
  }
  ngAfterViewInit() {
    const deleteButton =  document.querySelector('.dt-delete');
    console.log(deleteButton)
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.deleteAll();
      });
    }
  }
  deleteAll(){
    console.log('CCCCCCCCC')
  }

}
