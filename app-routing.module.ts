import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ManageairlinesComponent } from './admin/manageairlines/manageairlines.component';
import { ManagediscountsComponent } from './admin/managediscounts/managediscounts.component';
import { ManageschedulesComponent } from './admin/manageschedules/manageschedules.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { BookingComponent } from './user/booking/booking.component';
import { BookingconfirmComponent } from './user/bookingconfirm/bookingconfirm.component';
import { BookinghistoryComponent } from './user/bookinghistory/bookinghistory.component';
import { HeaderComponent } from './user/header/header.component';
import { ManagebookingComponent } from './user/managebooking/managebooking.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : 'user', component : UserComponent
  },
 
  {
    path : 'admin', component : AdminComponent
  },
  {
    path : 'about' , component : AboutComponent
  },
  { path: 'adminmenu',component : NavbarComponent},
 
  {path : 'booking' , component : BookingComponent
  },
  {path:'usermenu',component:HeaderComponent},
  {
    path : 'bookinghistory', component : BookinghistoryComponent
  },
  {
    path : 'managebooking' , component : ManagebookingComponent
  },
  {
    path : 'manageairlines', component : ManageairlinesComponent
  },
  {
    path : 'managediscounts', component : ManagediscountsComponent
  },
  {
    path : 'manageschedule', component : ManageschedulesComponent
  },
  {
    path : '',component:UserComponent
  },

  {
    path : 'manageairlines', component :ManageairlinesComponent
  },

  {
    path : 'managediscounts', component : ManagediscountsComponent
  },

  {path : 'Manageschedules', component : ManageschedulesComponent},
  {
    path:'bookingconfirmed',component:BookingconfirmComponent
  },
  
  {path:'**',component:UserComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
