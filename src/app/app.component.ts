import { Component } from '@angular/core';
import { Genders } from './enums/genders';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profileEditor';
  user: User = {
    name: 'Bob',
    age: 24,
    favoriteColor: 'blue',
    gender: Genders[Genders.Male],
    active: true
  };
  formUser: User = this.user;
  displayEdit: boolean = false;
  genders: string[] = [Genders[Genders.Male], Genders[Genders.Female], Genders[Genders.Others]];

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }

  saveChanges(): void {
    this.user = this.formUser;
    this.toggleEdit();
  }
}
