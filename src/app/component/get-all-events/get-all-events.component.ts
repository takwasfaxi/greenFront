import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-get-all-events',
  templateUrl: './get-all-events.component.html',
  styleUrls: ['./get-all-events.component.css'] 
})
export class GetAllEventsComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data: Event[]) => {
        this.events = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error('Error fetching events:', error);
      }
    });
  }
}