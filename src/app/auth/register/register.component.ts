import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    test : Date = new Date();
    focus: any;
    focus1: any;
    constructor() { }

    ngOnInit() {}
}
