import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) {}

  getAsset<T>(assetPath: string): Observable<T> {
    return this.http.get<T>(
      'http://localhost:4200/assets/data/mock/' + assetPath + '.json',
    );
  }
  
}
