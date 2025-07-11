import { HttpClient } from '@angular/common/http';
import { inject, Injectable,  } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

private http = inject(HttpClient);

private apiUrl = 'http://localhost:5001';

getCategoris$() : Observable<ICategory[]> {
  return this.http.get<ICategory[]>(`${this.apiUrl}/productCategoris`)
}

}
