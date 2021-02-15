import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Result } from '../../models/Result';
import { KeywordService } from '../../services/keyword.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit,OnDestroy {
  enteredKeyword:string='';
  result:Result={keyword:'', pageNumber:1, pageSize:20, totalRecords:0,items:[],empty:true};
  keywordSubscription : Subscription ;

  constructor(private keywordService:KeywordService,
    private searchService:SearchService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.keywordService.getEnteredKeyword().subscribe(k=>{
      this.enteredKeyword=k;
    });
    this.activatedRoute.queryParams.subscribe(params=>{
      this.keywordService.updateEnteredKeyword(params['k']);
      this.searchService.getSearchResults('0','10').subscribe((data: Result)=>this.result=data);
    });
    
}

  onSearchClick(){
    this.router.navigate(['/results'],{queryParams:{k:this.keywordService.selectedKeyword}});
  }

  onPageChange(pageEvent){
    this.searchService.getSearchResults(pageEvent.pageIndex,pageEvent.pageSize).subscribe((data: Result)=>this.result=data);
  }
  
  ngOnDestroy(): void {
    if(this.keywordSubscription){
      this.keywordSubscription.unsubscribe();
    }
  }
}
