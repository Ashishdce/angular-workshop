import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoaderComponent } from "./components/loader/loader.component";

import { AppRoutingModule } from "./app.routing";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ub40" }),
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
