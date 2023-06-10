import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName="Sree";
  enterage="";
  entergen="";
  parentData="";
  parentData1="";
  parentData2="";
transferData(){
  this.parentData=this.enterName;
  this.parentData1=this.enterage;
  this.parentData2=this.entergen;
}

value="";
sendData(value:string){
  this.value=value;
}
}
