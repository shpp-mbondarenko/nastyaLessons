import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MatToolbarModule, MatCardModule} from '@angular/material';
import { ImgcardComponent } from './imgcard/imgcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgcardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
