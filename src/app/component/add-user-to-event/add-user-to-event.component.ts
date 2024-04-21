import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event.service';
//import { UserService } from '../../service/user.service';
import { switchMap, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user-to-event',
  templateUrl: './add-user-to-event.component.html',
  styleUrls: ['./add-user-to-event.component.css']
})
export class AddUserToEventComponent implements OnInit, OnDestroy {

  eventId: string | null = null;
  userId: string | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    //private userService: UserService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.pipe(
        switchMap(params => {
          this.eventId = params.get('eventId');
          this.userId = params.get('userId');
          if (this.eventId && this.userId) {
            return this.eventService.addUserToEvent(this.eventId, this.userId);
          } else {
            return of(null);
          }
        }),
        catchError(error => {
          console.error(error);
          return of(null);
        })
      ).subscribe(response => {
        if (response) {
          console.log(response); // Gérer la réponse comme vous le souhaitez
          // Rediriger l'utilisateur vers une autre page, afficher un message de succès, etc.
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Désabonnement pour éviter les fuites de mémoire
  }
}
