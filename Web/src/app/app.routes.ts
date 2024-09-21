import { Routes } from '@angular/router';
import { HomeComponent } from './user/components/product/home.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { ProductDetailsComponent } from './user/components/product/product-details.component';
import { ProfileEditComponent } from './user/components/profile/profile-edit.component';
import { LayoutsComponent } from './user/layouts/layouts/layouts.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/login/signup.component';
import { ContactUsComponent } from './user/components/contactUs.component';
import { AddtoCardComponent } from './user/components/product/addtocard.component';
import { ChatBoxComponent } from './user/components/profile/chatBox.component';
import { DesignerContactComponent } from './user/components/designerContact.component';
import { DesignerProfileComponent } from './user/components/designerProfile.component';
import { ListScheduleComponent } from './user/components/listSchedule.component';
import { InvoiceComponent } from './user/components/product/invoice.component';


export const routes: Routes = [
    {
        path:'user',
        component:LayoutsComponent,
        children:[
            {
                path:'',
                component:HomeComponent,
                data:{
                    addActive: 'home',
                }
            },
            {
                path:'home',
                component:HomeComponent,
                data:{
                    addActive: 'home',
                }
            },
            {
                path:'profile',
                component:ProfileComponent,
            },
            {
                path:'edit-profile',
                component: ProfileEditComponent
            },
            {
                path:'product-details',
                component:ProductDetailsComponent,
                data:{
                    addActive: 'home',
                }
            },
            {
                path:'contact-us',
                component:ContactUsComponent,
                data:{
                    addActive: 'contactUs',
                }
            },
            {
                path:'add-to-cart',
                component:AddtoCardComponent
            },
            {
                path:'chat',
                component:ChatBoxComponent
            },
            {
                path:'designer-contact',
                component:DesignerContactComponent,
                data:{
                    addActive: 'designer',
                }
            },
            {
                path:'designer-detail',
                component:DesignerProfileComponent,
                data:{
                    addActive: 'designer',
                }
            },
            {
                path:'schedule-list',
                component:ListScheduleComponent,
            },
            {
                path:'invoice',
                component:InvoiceComponent
            }
        ]
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:SignUpComponent
    }

];
