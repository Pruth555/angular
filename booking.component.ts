import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  clientName : string = "";
  clientId : string = "";
  city : string = "";
  onewaytrip : boolean = true;
  departDate : string = "";
  returnDate : any  ;

  constructor() { }

  ngOnInit(): void {
  }
  
}
