import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  transferencia:any = []
  private apiUrl = "http://localhost:3000/transferencias"

  constructor(private httpClient:HttpClient) { }

  adicionar($event:any) {
    const transferencia = {...$event, data: new Date()}

    return this.httpClient.post<Transferencia>(this.apiUrl, transferencia)
  }

  todas():Observable<Transferencia> {
    return this.httpClient.get<Transferencia>(this.apiUrl)
  }

}

