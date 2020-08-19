import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NarutoModel, NarutoModelList } from 'src/models/naruto.model';

@Injectable({
  providedIn: 'root'
})
export class NarutoService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<NarutoModelList> {
    return this.http.get('assets/data/naruto.json') as Observable<NarutoModelList>;
  }
}
