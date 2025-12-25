import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rateable } from '../models/rateables.model';

@Injectable({
    providedIn: 'root'
})

export class RateablesService {
    private http = inject(HttpClient);
    apiUrl = 'http://localhost:3000/api/rateables';

    getAll() {
        return this.http.get<Rateable[]>(`${this.apiUrl}`);
    }

    skip(id: number) {
        return this.http.post(`${this.apiUrl}/${id}/skip`, {});
    }

    like(id: number) {
        return this.http.post(`${this.apiUrl}/${id}/like`, {});
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
