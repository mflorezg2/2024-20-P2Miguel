import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';
import { TrainerDetail } from './trainerDetail';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
private apiUrl: string = environment.baseUrl + 'trainers.json';
constructor(private http: HttpClient) { }

getTrainers(): Observable<TrainerDetail[]> {
  return this.http.get<TrainerDetail[]>(this.apiUrl);
}

}
