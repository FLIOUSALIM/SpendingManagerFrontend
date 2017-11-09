/* Import Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Import Component */
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

/*Import Services */
import { ExpenditureService } from './services/expediture/expenditure.service';
import { HttpModule } from '@angular/http';


/* Import Routes */
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
  ],
  providers: [
    ExpenditureService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
