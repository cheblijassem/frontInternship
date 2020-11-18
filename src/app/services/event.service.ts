import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private Uri = 'http://localhost:8888/';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + 'getStudents')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    getTermianlStudents(): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + 'getTerminalStudents')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    getOtherStudents(): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + 'getOtherStudents')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    getTeachers(): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + 'getTeachers')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    getDirector(): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + 'getDirector')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    getInternship(name): Observable<any> {
        const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json' }) };
        return this.http.get(this.Uri + '/getStudentInternship?internship=' + name)
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

