import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

export class HelloWorldBeanwelcome{
  constructor(public id: number,
   public username: string,
   public description:string,
   public targetdate: Date,
   public isdone:Boolean,
   public todo:number)
   {}
 }

 export class TodoBeans{
   constructor(public arrcounter:number,
    public name:string){}
 }

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  //variables
  message:string = "";
  id:number = 0;
  maintodoid:number = 0;
  resultr: TodoBeans[] = [];
  Todoresult:HelloWorldBeanwelcome[] = [];

  constructor(private data:DataService,
    private router:Router) { }

  ngOnInit(): void {
    this.forCheck();
  }
  
  //moving to main todos page for creation
  newData(){
    this.data.dataid = this.id;
    this.router.navigate(['todos'])
  }
  
  //to get all the main todo data
  forCheck(){
    this.data.getApiData().subscribe(
      // response => {console.log(response)};
      response => {this.resultr = response}
      );
      // data => this.employee = data
  }
  
  //add the sub todo
  todoAdd(id:number){
    this.data.todoid = 0;
    this.data.dataid = id;
    this.router.navigate(['subtodo']);
  }
  
  //to delete main todo data
  dataDelete(id:number){
    console.log(`this delete button works${id}`);
    this.data.deleteApiData(id).subscribe(
      // response => console.log(response)
      _response => this.forCheck()
      );
      
      // this.forCheck();
      this.message = "delete Successful";
  }
 
  //goes to the update page of main todo
  dataUpdate(id:number){
    this.data.dataid = id;
    this.router.navigate(['todos']);  
  }
 
  // getting all individual tods for main todo//
  getTodosData(id: number){
    console.log(`the mouse has been hovered${id}`)
    this.data.dataid = id;
    this.data.getApiTodo(id).subscribe(
      response => this.Todoresult = response
    )
  }

  //go to update sub todo page
  todoUpdate(id:number){
    console.log(id);
    this.data.todoid = id;
    this.router.navigate(['subtodo']);  
  }
  
  //delete sub todo of main todo
  todoDelete(id: number){
    console.log(`this delete button works${id}, ${this.maintodoid}`);
    
    this.data.deleteApiTodo(id,this.maintodoid).subscribe(
      // response => console.log(response)
      _response => this.getTodosData(this.maintodoid)
      );
      
      // this.forCheck();
      this.message = "delete Successful";
  }
}

