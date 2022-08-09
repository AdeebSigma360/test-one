import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestOneModule } from 'test-one';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TestOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
