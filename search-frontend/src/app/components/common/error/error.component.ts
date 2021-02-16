import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from 'src/app/services/keyword.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errMsg:string='';
  errCode:string='';
  constructor(private activatedRoute:ActivatedRoute,private keywordService: KeywordService,private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.errMsg=params["msg"];
      if(!this.errMsg){
        this.errMsg='Unknown Error. Please check connection to service.';
      }
      this.errCode=params["msgCode"];
    });
  }

  redirectToHome(){
    this.keywordService.updateEnteredKeyword('');
    this.route.navigateByUrl('/search')
  }

}
