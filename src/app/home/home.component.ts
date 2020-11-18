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
    };

    students: any[];
    teachers: any[];
    errorMessage: string;
    showDetail = false;
    constructor(private _eventService: EventService) { }

    getStudents() {
        console.log("entred")
        this._eventService.getStudents().subscribe(
            data => {
                this.students = data.result;
                console.log(data.result)
            },
            (error) => this.errorMessage = error
        );
    }

    ngOnInit() {
        this.getStudents()
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

    detail() {
        this.showDetail = true;
        this.detailInfo.firstName = 'oussama';
        this.detailInfo.lastName = 'souissi';
        this.detailInfo.level = '4';
        this.detailInfo.tel = '46545454';
        this.detailInfo.Option = 'twin';
        this.detailInfo.Internship = 'erff';
        this.detailInfo.email = 'ee@ffff.com';
    }
}
