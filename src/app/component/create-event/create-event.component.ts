import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService
  ) {
    this.eventForm = this.formBuilder.group({
      nom: ['', Validators.required], // Correspond à l'attribut 'nom' du modèle d'événement
      description: ['', Validators.required], // Correspond à l'attribut 'description' du modèle d'événement
      date: ['', Validators.required], // Correspond à l'attribut 'date' du modèle d'événement
      lieu: ['', Validators.required], // Correspond à l'attribut 'lieu' du modèle d'événement
      affiche: [''] // Correspond à l'attribut 'affiche' du modèle d'événement
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const eventData: Event = this.eventForm.value;
      this.eventService.createEvent(eventData).subscribe(
        (response: any) => {
          console.log(response); // Gérer la réponse comme vous le souhaitez
          // Réinitialiser le formulaire après la création réussie
          this.eventForm.reset();
        },
        (error: any) => {
          console.error(error); // Gérer les erreurs de manière appropriée
        }
      );
    }
  }
}