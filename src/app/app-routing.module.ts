import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllEventsComponent } from './component/get-all-events/get-all-events.component';
import { CreateEventComponent } from './component/create-event/create-event.component';
import { UpdateEventComponent } from './component/update-event/update-event.component';
import { DeleteEventComponent } from './component/delete-event/delete-event.component';
import { GetEventByIdComponent } from './component/get-event-by-id/get-event-by-id.component';
import { AddUserToEventComponent } from './component/add-user-to-event/add-user-to-event.component';

const routes: Routes = [
  {path:'events',component:GetAllEventsComponent},
  {path:'events/create',component:CreateEventComponent},
  {path:'events/update/:id',component:UpdateEventComponent},
  {path:'events/delete/:id',component:DeleteEventComponent},
  {path:'events/details/:id',component:GetEventByIdComponent},
  {path:'events/participate/:id/:id',component:AddUserToEventComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
