import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {AnotherTestService} from '@nx/annother-lib';
import {MyUiService} from '@nx/my-ui-lib';
//import { UsersService } from '@nx/annother-lib';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nxtest';
  myUiService = inject(MyUiService);
  anotherService = inject(AnotherTestService);
//  usersService = inject(UsersService);
}
