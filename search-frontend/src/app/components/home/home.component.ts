import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { KeywordService } from '../../services/keyword.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  enteredKeyword:string='';
  keywordSubscription : Subscription ;
  constructor(private keywordService: KeywordService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.keywordSubscription=this.keywordService.getEnteredKeyword().subscribe(k=>{
      this.enteredKeyword=k;
    });
  }

  onSearchClick() {
    
    if(this.keywordService.selectedKeyword.length>0){
      this.router.navigate(['/results'], {
        queryParams: {
          k: this.keywordService.selectedKeyword
        }
      });
    }else{
      this._snackBar.open("Please enter search keyword.", "Ok", {
        duration: 5000,
      });
    }
  }

  onClearClick(){
    this.keywordService.updateEnteredKeyword("");
  }

  ngOnDestroy(): void {
    if(this.keywordSubscription){
      this.keywordSubscription.unsubscribe();
    }    
  }

}
