import { inject, Injectable } from '@angular/core';
// import {AnotherTestService} from '@nx/annother-lib/feat-another-test/another-test.service'
@Injectable({
  providedIn: 'root'
})
export class MyUiService {
  // testService = inject(AnotherTestService);
  
  constructor() {
    console.log("my ui!")
   }
}
