import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './todo/welcome/welcome.component';
import { TodosComponent } from  './todo/todos/todos.component';
import { SubtodoComponent } from './todo/subtodo/subtodo.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'todos', component:TodosComponent},
  {path:'subtodo', component:SubtodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
