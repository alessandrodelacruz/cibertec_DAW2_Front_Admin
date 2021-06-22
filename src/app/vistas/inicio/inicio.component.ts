import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @Input() title: string;
  @Input() buy: string;
  @Input() sell: string;
  @Input() currentDate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
