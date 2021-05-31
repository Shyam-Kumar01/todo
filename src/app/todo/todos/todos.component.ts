import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { HelloWorldBeanwelcome, TodoBeans } from '../welcome/welcome.component';


export class hello{
  constructor(
    public message:string
  ){

  }
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  id: number = 0;
  Todoresult: TodoBeans = {"arrcounter" : 0, "name" : ""};
  // HelloWorldBeanwelcome = 
  // {"id": 0,"username":"","description":"","isdone":false,"targetdate":new Date()};
  
  constructor(private data: DataService,
    private router:Router) { }

  ngOnInit(): void {
  this.todoGetData();
  }

  todoGetData(id:number =this.data.dataid){
    console.log(id);
    if(id!=0){
    this.data.getTodoApiData(id).subscribe(
      // response => this.Todoresult = (response),
      response => this.Todoresult = (response));
    }   
  }

  saveTodo(){
    if(this.id == -1 || this.id == 0){
      return this.data.postApiData(this.Todoresult).subscribe(
        // response => {console.log(response)}
        _response => this.router.navigate(["/welcome"])
      );
      this.router.navigate(["/welcome"])
    }else{
      return this.data.putApiData(this.id ,this.Todoresult).subscribe(
        // response => {console.log(response)}
        _response => this.router.navigate(["/welcome"])
        );
    };
    
  }
}
