import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/Result';
import { KeywordService } from './keyword.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  serviceUrl:string=(environment.apiBaseUrl)+"search";

  constructor(private keywordService:KeywordService,private http:HttpClient) { }

  getSearchResults(page?:string,size?:string):Observable<Result>{
    return this.http.get<Result>(this.serviceUrl,{
      params: {
        "k": this.keywordService.selectedKeyword,
        "page":page,
        "size":size
      }
    });
  }





}
