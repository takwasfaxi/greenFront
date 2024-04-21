import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-event-by-id',
  templateUrl: './get-event-by-id.component.html',
  styleUrls: ['./get-event-by-id.component.css']
})
export class GetEventByIdComponent implements OnInit, OnDestroy {

  event: Event | undefined;
  eventId: string | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.getEventById(this.eventId);
    }
  }

  getEventById(id: string): void {
    this.subscription.add(
      this.eventService.getEventById(id).subscribe({
        next: (data: Event) => {
          this.event = data;
        },
        error: (error: any) => {
          console.error('Error fetching event:', error);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Désabonnement pour éviter les fuites de mémoire
  }
}

