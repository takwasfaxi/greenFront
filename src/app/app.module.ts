import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { EventComponent } from './component/event/event.component';
import { GetAllEventsComponent } from './component/get-all-events/get-all-events.component';
import { GetEventByIdComponent } from './component/get-event-by-id/get-event-by-id.component';
import { CreateEventComponent } from './component/create-event/create-event.component';
import { UpdateEventComponent } from './component/update-event/update-event.component';
import { DeleteEventComponent } from './component/delete-event/delete-event.component';
import { AddUserToEventComponent } from './component/add-user-to-event/add-user-to-event.component';

@NgModule({
  declarations: [
    AppComponent,
    //EventComponent,
    GetAllEventsComponent,
    GetEventByIdComponent,
    CreateEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    AddUserToEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
