import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username='raju';
  userName=false;
  details=false;
  logall=[];
  log:number=0;
  constructor() {

  }

  ngOnInit() {
  }

  emptyString(){
    this.username='';
  }

  isUsernameEmpty(){
    return this.username==="";
  }
  onCreateUser(){
    this.userName=true;
  }
  
  hidePara(){
    this.details=!this.details;
    // this.logall.push(this.logall.length+1);
    this.logall.push(new Date()); 
  }



}
