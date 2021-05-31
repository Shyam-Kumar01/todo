import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './todo/welcome/welcome.component';
import { FilterPipe } from './pipe/filter.pipe';
import { TodosComponent } from './todo/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { SubtodoComponent } from './todo/subtodo/subtodo.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FilterPipe,
    TodosComponent,
    SubtodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
