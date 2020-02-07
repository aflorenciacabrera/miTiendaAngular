import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number;
  nombre: string;
  apellido: string;
  chat = false;
  constructor() {
    this.anio = new Date().getFullYear();
    this.nombre = '';
    this.apellido = 'SIFC';

  }

  ngOnInit() {
  }

  verChat(chat) {

   if (chat) {
    this.chat = false;
   } else {
    this.chat = true;
   }
    }
}
