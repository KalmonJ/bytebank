import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  dadosTransferencia:any[] = [];

  constructor(private service:ServiceService) {

  }

  transferir($event:any) {
    this.service.adicionar($event)
  }
}
