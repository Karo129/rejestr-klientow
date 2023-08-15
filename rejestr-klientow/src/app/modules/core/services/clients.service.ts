import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client, ClientResponse } from '../models/client.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get(`${this.apiUrl}/clients`).pipe(
      map((clients) => clients.map(({id, firstname, surname, email, phone, address, postcode}) => new Client(id, firstname, surname, email, phone, address, postcode)))
    );
  };



  postClient(clientData: PostClient): Observable<Client> {
    return this.http
    .post<ClientResponse>(`${this.apiUrl}/clients`, clientData)
    .pipe(
      map(
        ({id, firstname, surname, email, phone, address, postcode}) => new Client(id, firstname, surname, email, phone, address, postcode)
      )
    );
  }
  


}

