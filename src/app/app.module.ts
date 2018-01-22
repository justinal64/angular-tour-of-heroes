import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { TestComponent } from "./test/test.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { TestDetailComponent } from "./components/test-detail/test-detail.component";
import { HeroService } from "./services/hero.service";
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TestComponent,
    HeroDetailComponent,
    TestDetailComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
