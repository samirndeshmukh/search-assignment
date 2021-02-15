import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result } from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  serviceUrl: string = (environment.apiBaseUrl)+'search/keywords';
  selectedKeywordChange =new Subject<string>();
  selectedKeyword: string = '';

  constructor(private http: HttpClient) {

  }

  getkeywords(): Observable<string[]> {
    return this.http.get<string[]>(this.serviceUrl,
      {
        params: {
          "k": this.selectedKeyword
        }
      });
  }

  updateEnteredKeyword(keyword:string):void{
    this.selectedKeyword=keyword;
    this.selectedKeywordChange.next(this.selectedKeyword);
  }

  getEnteredKeyword():Observable<string>{
    return this.selectedKeywordChange;
  }
}
