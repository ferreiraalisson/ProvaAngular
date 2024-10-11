import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArqEtapasService {

  constructor( private http: HttpClient) { }

  getArquivosEtapas(id: number): Observable<any>{
    return this.http.get(
        `http://academico3.rj.senac.br/arquivo/ArquivosEtapa/${id}`,{}
    );
  }
}
