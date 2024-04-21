import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit, OnDestroy {

  event: Event = {} as Event;
  id: string | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = id;
      this.getEventDetails();
    }
  }

  getEventDetails(): void {
    if (this.id !== null) {
      this.subscription.add(
        this.eventService.getEventById(this.id).subscribe({
          next: (data: Event) => {
            this.event = data;
          },
          error: (error: any) => {
            console.error('Error fetching event details:', error);
          }
        })
      );
    }
  }

  updateEvent(): void {
    if (this.id !== null && this.event) {
      this.subscription.add(
        this.eventService.updateEvent(this.id, this.event).subscribe({
          next: () => {
            this.router.navigate(['/events']); // Rediriger vers la liste des événements après la mise à jour
            console.log('Event updated successfully!');
          },
          error: (error: any) => {
            console.error('Error updating event:', error);
          }
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }
}
