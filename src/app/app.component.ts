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
  serverCreationStatus="No Server was created";
  serverName='';

  constructor() {
    // setTimeout( () =>{
    //   this.allowNewServer=true;
    // },2000)

    
  }

  onUpdateServerName(){
     this.serverName=(<HTMLInputElement>event.target).value;
  }

  getServerStatus(){
    return this.serverStatus;
  }
  onCreateServer(){
    this.serverCreationStatus="server was created with"+this.serverName;
  }

  getColor(){
    return this.serverStatus
  }
}
