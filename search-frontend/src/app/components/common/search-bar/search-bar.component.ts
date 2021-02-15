import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { KeywordService } from '../../../services/keyword.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit,OnDestroy {
  @Input()  enteredKeyword:string='';
  searchFormControl = new FormControl();
  options: Observable<string[]>;
  keywordSubscription : Subscription ;

  constructor(private keywordService: KeywordService) {
  }

  ngOnInit() {
    this.enteredKeyword=this.keywordService.selectedKeyword;    
    this.keywordSubscription=this.keywordService.getEnteredKeyword().subscribe(k=>{
      this.enteredKeyword=k;
      this.searchFormControl.setValue(this.enteredKeyword);
    });

    this.searchFormControl.valueChanges.subscribe(
      value => {
        if(this.enteredKeyword!=value){
          this.keywordService.updateEnteredKeyword(value);
        }
        this.options = this.keywordService.getkeywords();
      }
    );
    this.searchFormControl.setValue(this.enteredKeyword);
  }

  ngOnDestroy(): void {
    if(this.keywordSubscription){
      this.keywordSubscription.unsubscribe();
    }    
  }
}
