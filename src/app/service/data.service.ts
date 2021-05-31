import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hello } from '../todo/todos/todos.component';
import { HelloWorldBeanwelcome, TodoBeans } from '../todo/welcome/welcome.component';


export class HelloWorldBean{
 constructor(public id: number,
  public username: string,
  public description:string,
  public targetdate: Date,
  public isdone:Boolean){}
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataid:number = 0;
  public todoid:number = 0;
  private get_url: string = "http://localhost:8080/welcome";
  
  constructor(private http:HttpClient) { }
  //to ge the Hello world bean result
  getApiHello(){
    return this.http.get<hello>("http://localhost:8080/hello-world-bean");
  }
  //to get all main todo list
  getApiData(){
    return this.http.get<TodoBeans[]>(this.get_url);
  }
  //to get all the tods under main tods
  getApiTodo(id:number){
    return this.http.get<HelloWorldBeanwelcome[]>(`http://localhost:8080/todos/${id}`);
  }
  //Delete main todos
  deleteApiData(id: number){
    return this.http.delete(`http://localhost:8080/todo/${id}`);
  }
  //Delete todo under main todos
  deleteApiTodo(id: number, maintodoid:number){
    return this.http.delete(`http://localhost:8080/todos/${maintodoid}/${id}`);
  }

  //get individual main todos
  getTodoApiData(id: number){
    return this.http.get<TodoBeans>(`http://localhost:8080/todo/${id}`);
  }
  //get individual sub todos under main todos
  getApisubTodoData(id: number, maintodoid:number){
    return this.http.get<HelloWorldBeanwelcome>(`http://localhost:8080/todos/${maintodoid}/${id}`);
  }
  //edit the main todo
  putApiData(id: number, todo: TodoBeans){
    return this.http.put(`http://localhost:8080/todo/${id}`, todo);
  }
  //edit the sub todos
  putApiSubTodo(id: number,maintodoid:number, todo: HelloWorldBeanwelcome){
    return this.http.put(`http://localhost:8080/todos/${maintodoid}/${id}`, todo);
  }
  //add the main todos
  postApiData(todo: TodoBeans){
    return this.http.post(`http://localhost:8080/todo/`, todo);
  }
  //add the sub todos
  postApiSubTodo(todo: HelloWorldBeanwelcome, maintodo:number){
    return this.http.post(`http://localhost:8080/todos/${maintodo}`, todo);
  }
}
