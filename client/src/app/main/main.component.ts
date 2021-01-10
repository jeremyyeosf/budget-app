import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private fb: FormBuilder) { }

    mainForm: FormGroup

    ngOnInit(): void {
        this.mainForm = this.fb.group({
            date: [''],
            amount: ['', Validators.required],
            category: [''],
            description: [''],
        })
    }

    saveInput() {
        console.log(this.mainForm.value)
    }
}
