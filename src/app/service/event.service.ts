import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  

  constructor(private httpClient: HttpClient) { }

  // Méthode pour récupérer tous les événements
  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:3000/events/all');
  }

  // Méthode pour récupérer un événement par son ID
  getEventById(id: string): Observable<Event> {
    return this.httpClient.get<Event>(`http://localhost:3000/events/${id}`);
  }

  // Méthode pour ajouter un événement
  createEvent(eventData: Event): Observable<any> {
    return this.httpClient.post<Event>('http://localhost:3000/events/create', eventData);
  }

  // Méthode pour mettre à jour un événement
  updateEvent(id: string, eventData: Event): Observable<any> {
    return this.httpClient.put<Event>(`http://localhost:3000/events/${id}`, eventData);
  }

  // Méthode pour supprimer un événement
  deleteEvent(id: string): Observable<any> {
    return this.httpClient.delete<Event>(`http://localhost:3000/events/${id}`);
  }

  //Méthode pour participer à un event
  addUserToEvent(idevent: string, iduser: string): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:3000/events/${idevent}/users/${iduser}`, {});
  }
}
