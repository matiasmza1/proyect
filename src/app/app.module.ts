import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
