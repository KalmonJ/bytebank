import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { ServiceService } from "../services/service.service";

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent implements OnInit{

  valor:number | undefined
  destino: number | undefined;

  constructor(private service:ServiceService, private route:Router) {

  }
  
  ngOnInit(): void {
      
  }

  transferir(){
    const dados = {valor: this.valor, destino:this.destino}
    
    this.service.adicionar(dados).subscribe((res:Transferencia) => {
      console.log(res)
    },
    error => console.error(error)
    )
    this.limparCampos()
    this.route.navigateByUrl('extrato')
  }

  limparCampos() {
    this.valor = 0
    this.destino = 0
  }
}