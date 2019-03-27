import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 itemCount:number;
 btnText:string="Add an Item";
goalText:string="My First Goal";
goals=[];
 constructor(private data:DataService) { }

  ngOnInit() {
    this.data.goal.subscribe(res=>this.goals=res);
    this.itemCount=this.goals.length;
    
    this.data.changeGoal(this.goals);
  }

  addItem(){
     this.goals.push(this.goalText);
     this.goalText='';
     this.itemCount=this.goals.length;
     this.data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.data.changeGoal(this.goals);
  }

}
