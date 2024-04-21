import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  id!: string;
  private subscription: Subscription = new Subscription();

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteEvent();
  }

  deleteEvent(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.subscription.add(
      this.eventService.deleteEvent(this.id).subscribe({
        next: () => {
          //alert('Event deleted.');
          this.router.navigate(['events']); // Rediriger vers la liste des événements après la suppression
        },
        error: (error: any) => {
          console.error('Error deleting event:', error); // Gérer les erreurs de manière appropriée
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Assurez-vous de vous désabonner lors de la destruction du composant
  }
}
