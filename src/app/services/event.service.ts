import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private Uri = 'https://internship.free.beeceptor.com/';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + 'students')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage)
        return throwError(errorMessage);
    }
}

