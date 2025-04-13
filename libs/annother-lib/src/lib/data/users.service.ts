import { inject, Injectable } from '@angular/core';
import { AnotherTestService } from '../feat-another-test/another-test.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  testService = inject(AnotherTestService);
  constructor() {
    console.log("usersservice");
   }
}
