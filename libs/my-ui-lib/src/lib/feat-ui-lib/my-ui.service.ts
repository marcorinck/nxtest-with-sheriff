import { inject, Injectable } from '@angular/core';
import {AnotherTestService} from '@nx/annother-lib'
@Injectable({
  providedIn: 'root'
})
export class MyUiService {
  testService = inject(AnotherTestService);
  
  constructor() {
    console.log("my ui!")
   }
}
