import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { HelloWorldBeanwelcome } from '../welcome/welcome.component';

@Component({
  selector: 'app-subtodo',
  templateUrl: './subtodo.component.html',
  styleUrls: ['./subtodo.component.css']
})
export class SubtodoComponent implements OnInit {

  id: number = 0;
  subtodoresult:HelloWorldBeanwelcome = {"id":0,"username":"","description":"","isdone":false,"targetdate":new Date,"todo":0};
  constructor(private data: DataService,
    private router:Router) { }

  ngOnInit(): void {
    this.todoGetSubTodo();
  }

  todoGetSubTodo(id:number =this.data.todoid,maintodoid:number = this.data.dataid){
    console.log(id, maintodoid);
    if(id!=0){
    this.data.getApisubTodoData(id, maintodoid).subscribe(
      // response => this.Todoresult = (response),
      response => this.subtodoresult = (response));
    }   
  }

  saveSubTodo(){
    if(this.id == -1 || this.id == 0){
      return this.data.postApiSubTodo(this.subtodoresult,this.data.dataid).subscribe(
        // response => {console.log(response)}
        _response => this.router.navigate(["/welcome"])
      );
    }else{
      return this.data.putApiSubTodo(this.id ,this.data.dataid,this.subtodoresult).subscribe(
        // response => {console.log(response)}
        _response => this.router.navigate(["/welcome"])
        );
    };
    
  }
}


