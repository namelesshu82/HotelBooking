import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getHelloWorld(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/hello`)
      .pipe(
        map(response => response.message)
      );
  }

}
