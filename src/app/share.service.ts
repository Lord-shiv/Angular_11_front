import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShareService {
  readonly APIUrl = "https://branches-shiv.herokuapp.com";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http: HttpClient) { }

  getBranchList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/branches/');
  }

  getAllNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/branches/');
  }
}