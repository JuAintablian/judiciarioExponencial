import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat1 = false;
  chat2 = false;
  chat3 = false;
  chat4 = false;
  chat5 = false;
  chat6 = false;
  chat7 = false;
  chat8 = false;
  chat9 = false;

  mtDinamico = '';

  constructor() { }

  ngOnInit(): void {
    this.showMessages();
  }

  showMessages(){
    this.chat1 = true;
    this.mtDinamico = 'mt-324';
    setTimeout(() => {
      this.chat2 = true, this.mtDinamico = 'mt-290';
    }, 1000);
    setTimeout(() => {
      this.chat3 = true, this.mtDinamico = 'mt-252';
    }, 2000);
    setTimeout(() => {
      this.chat4 = true, this.mtDinamico = 'mt-215';
    }, 3000);
    setTimeout(() => {
      this.chat5 = true, this.mtDinamico = 'mt-178';
    }, 4000);
    setTimeout(() => {
      this.chat6 = true, this.mtDinamico = 'mt-10';
    }, 6000);
    setTimeout(() => {
      this.chat7 = true, this.mtDinamico = 'mt-10';
    }, 7000);
    setTimeout(() => {
      this.chat8 = true, this.mtDinamico = 'mt-10';
    }, 9000);
    setTimeout(() => {
      this.chat9 = true, this.mtDinamico = 'mt-10';
    }, 10000);
  }

}
