import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencia:any[] = [];

  constructor(private listTransferencias:ServiceService) { 
  }

  ngOnInit(): void {
    this.listTransferencias.todas().subscribe((res:any) => {
      console.table(res)
      this.transferencia = res
    })
  }

}
