import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AddService} from './add.service';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    providers: [AddService]
})
export class AddComponent implements OnInit {
    addForm: FormGroup;
    added: boolean;
    qrcode: string;

    constructor(private formBuild: FormBuilder, private addService: AddService) {
        this.addForm = this.formBuild.group({
            sdid: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
            sharecode: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            dtype: ['', [Validators.required]]
        });
        this.added = false;

    }

    ngOnInit() {
    }


    addDevice() {
        if (this.addForm.valid) {
            this.addService.addDevices(this.addForm.value).subscribe(
                (success) => {
                    if (success.err === 0) {
                        /*            console.log(success);*/
                        this.qrcode = success.qrcode;
                        this.addForm.reset();
                        this.added = true;
                    }
                },
                (error) => {
                    console.log(error);
                    this.addForm.reset();
                }
            );
        }

    }

}
