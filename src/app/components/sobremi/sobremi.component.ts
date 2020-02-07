import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  public title:string;
  public subtitle: string;
  public email: string;

  constructor() { 
    this.title = "Ulises Alejandro Mora Quintana";
    this.subtitle = "Ingeniero en Computación";
    this.email = "ulisesmora3@gmail.com";
  }

  ngOnInit() {
  }

}
