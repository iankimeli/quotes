import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';
import { QuotesFormComponent } from './components/quotes-form/quotes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteItemComponent,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
