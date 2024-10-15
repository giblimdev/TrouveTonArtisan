import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly form = new FormGroup({
    name: new FormControl('DUPOND'),
    email: new FormControl('MonEmail@Domainr.fr'),
    objet: new FormControl('Demande de devis'),
    message: new FormControl('Merci de me contacter'),
  });
  onSubmit() {}
}
