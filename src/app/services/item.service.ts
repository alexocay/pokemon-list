import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getItem(index) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
