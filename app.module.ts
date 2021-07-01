import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './user/booking/booking.component';
import { HeaderComponent } from './user/header/header.component';
import { BookinghistoryComponent } from './user/bookinghistory/bookinghistory.component';
import { ManagebookingComponent } from './user/managebooking/managebooking.component';
import { ManageschedulesComponent } from './admin/manageschedules/manageschedules.component';
import { ManagediscountsComponent } from './admin/managediscounts/managediscounts.component';
import { ManageairlinesComponent } from './admin/manageairlines/manageairlines.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AddairlinesComponent } from './admin/addairlines/addairlines.component';
import { BookingconfirmComponent } from './user/bookingconfirm/bookingconfirm.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AboutComponent,
    BookingComponent,
    HeaderComponent,
    BookinghistoryComponent,
    ManagebookingComponent,
    ManageschedulesComponent,
    ManagediscountsComponent,
    ManageairlinesComponent,
    ReportsComponent,
    NavbarComponent,
    AddairlinesComponent,
    BookingconfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
