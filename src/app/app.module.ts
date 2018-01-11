import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, TestComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
