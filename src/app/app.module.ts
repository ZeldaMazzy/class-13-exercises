import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatusDisplay } from './status-display/status-display.component';
import { ImagePostComponent } from './image-post/image-post.component'

@NgModule({
  declarations: [
    AppComponent,
    StatusDisplay,
    ImagePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
