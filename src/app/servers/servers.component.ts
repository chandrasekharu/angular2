import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  username='raju';
  userName=false;
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


}
