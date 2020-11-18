import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    clicked = false;
    op1 = false;
    op2 = false;

    detailInfo = {
        firstName: '',
        lastName: '',
        level: '',
        tel: '',
        Option: '',
        Internship: '',
        email: '',
        field: '',
        degree: '',
        mandate: ''
    };

    internship: any;
    director: any;
    students: any[];
    otherStudents: any[];
    terminalStudents: any[];
    teachers: any[];
    errorMessage: string;
    showDetail = false;
    showInternship = false;
    constructor(private _eventService: EventService) { }

    getStudents() {
        console.log("entred")
        this._eventService.getStudents().subscribe(
            data => {
                this.students = data;
                console.log(data);
            },
            (error) => this.errorMessage = error
        );
    }

    getTerminalStudents() {
        console.log("entred")
        this._eventService.getTermianlStudents().subscribe(
            data => {
                this.terminalStudents = data;
                console.log(data);
            },
            (error) => this.errorMessage = error
        );
    }

    getOtherStudents() {
        console.log("entred")
        this._eventService.getOtherStudents().subscribe(
            data => {
                this.otherStudents = data;
                console.log(data);
            },
            (error) => this.errorMessage = error
        );
    }

    getTeachers() {
        console.log("entred")
        this._eventService.getTeachers().subscribe(
            data => {
                this.teachers = data;
                console.log(data);
            },
            (error) => this.errorMessage = error
        );
    }

    getDirector() {
        console.log("entred")
        this._eventService.getDirector().subscribe(
            data => {
                this.director = data[0];
                console.log(data);
            },
            (error) => this.errorMessage = error
        );
    }


    ngOnInit() {
        this.getStudents()
        this.getTeachers()
        this.getDirector()
        this.getTerminalStudents()
        this.getOtherStudents()
    }
    option1() {
        this.clicked = true;
        this.op1 = true;
        this.op2 = false;
    }
    option2() {
        this.clicked = true;
        this.op2 = true;
        this.op1 = false;
    }
    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }

    detail(st) {
        this.showDetail = true;
        this.detailInfo.firstName = st.firstName;
        this.detailInfo.lastName = st.lastName;
        this.detailInfo.level = st.level;
        this.detailInfo.tel = st.tel;
        this.detailInfo.Option = st.Option;
        this.detailInfo.Internship = st.Internship;
        this.detailInfo.email = st.email;
        this.detailInfo.degree = '';
        this.detailInfo.field = '';
        this.detailInfo.mandate = '';
    }

    detailTeacher(st) {
        this.showDetail = true;
        this.detailInfo.firstName = st.firstName;
        this.detailInfo.lastName = st.lastName;
        this.detailInfo.tel = st.tel;
        this.detailInfo.email = st.email;
        this.detailInfo.degree = st.degree;
        this.detailInfo.field = st.field;
        this.detailInfo.Option = '';
        this.detailInfo.Internship = '';
        this.detailInfo.level = '';
        this.detailInfo.mandate = '';
    }

    detailDirector(st) {
        this.showDetail = true;
        this.detailInfo.firstName = st.firstName;
        this.detailInfo.lastName = st.lastName;
        this.detailInfo.tel = st.tel;
        this.detailInfo.email = st.email;
        this.detailInfo.mandate = st.mandate;
        this.detailInfo.degree = '';
        this.detailInfo.field = '';
    }
    detailInternship(value) {
        this.showInternship = true;
        this._eventService.getInternship(value).subscribe(
            data => {
                this.internship = data[0];
                console.log(data)
            },
            (error) => this.errorMessage = error
        );

    }
}