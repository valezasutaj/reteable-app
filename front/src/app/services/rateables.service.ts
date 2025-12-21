import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rateable } from '../models/rateables.model';


@Injectable({
    providedIn: 'root'
})

export class RateablesService {
    apiUrl = 'http://localhost:3000/api/rateables';
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<Rateable[]>(`${this.apiUrl}`);
    }

    like(id: number) {
        return this.http.post(`${this.apiUrl}/like`, { id });
    }
}
