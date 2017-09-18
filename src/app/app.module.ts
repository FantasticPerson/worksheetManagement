import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { TicketNavigatorComponent } from './ticket-navigator/ticket-navigator.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CreateItemComponent } from './ticket-list/create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    TicketNavigatorComponent,
    TicketListComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
