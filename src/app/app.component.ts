import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .online{
    color:white;
  }
  .offline{
    color:white;
  }
  `]
})
export class AppComponent {
  title = 'Does this change?';
  name='';
  serverId: number= 12;
  serverStatus: string='offline';
  allowNewServer= false;
  serverCreationStatus="No Server was created";
  serverName='';
  servers=["server1","server2"];

  constructor() {
    setTimeout( () =>{
      this.allowNewServer=true;
    },2000)
    this.serverStatus= Math.random() > 0.5? 'online':'offline';
    
  }
  getFontColor(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus=== 'online'? 'green':'red';
  }

  onUpdateServerName(){
     this.serverName=(<HTMLInputElement>event.target).value;
  }

  getServerStatus(){
    return this.serverStatus;
  }
  onCreateServer(){

    this.allowNewServer=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="server was created with"+this.serverName;
  }

  
}
