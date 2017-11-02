import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Does this change?';
  name='';
  serverId: number= 12;
  serverStatus: string='offline';
  allowNewServer= false;

  constructor() {
    setTimeout( () =>{
      this.allowNewServer=true;
    },2000)
  }

  
  getServerStatus(){
    return this.serverStatus;
  }
}
