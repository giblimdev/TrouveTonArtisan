import {
  Component,
  computed,
  EnvironmentInjector,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ArtisanService } from '../../getartisans.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactComponent } from '../../contact/contact.component';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { NoteDirective } from '../../note.directive';
import { JsonPipe } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
//import { environment } from 'src/environments/environment';

//import emailjs { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-artisan-profile',
  standalone: true,
  imports: [
    ContactComponent,
    RouterLink,
    AsyncPipe,
    NgIf,
    NoteDirective,
    JsonPipe,
  ],
  templateUrl: './artisan-profile.component.html',
  styleUrl: './artisan-profile.component.scss',
})
export class ArtisanProfileComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly artisanService = inject(ArtisanService);
  artisanId!: number;
  artisan$!: Observable<any>;

  readonly form = new FormGroup({
    name: new FormControl('DUPOND'),
    email: new FormControl('MonEmail@Domainr.fr'),
    objet: new FormControl('Demande de devis'),
    message: new FormControl('Merci de me contacter'),
  });

  ngOnInit(): void {
    this.artisanId = Number(this.route.snapshot.paramMap.get('id'));
    this.artisan$ = this.artisanService.getArtisanById(this.artisanId);
  }

  /*

alert(SERVICE_ID TEMPLATE_ID PUBLIC_KEY "artisan.mail "nom: This.name this.email this.objet this.message
)

EnvironmentInjector.SERVICE_ID ;
EnvironmentInjector. TEMPLATE_ID ;
EnvironmentInjector.PUBLIC_KEY ;


      public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target as HTMLFormElement, {
        publicKey: 'PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );*/
}
