import { Injectable } from '@angular/core';

console.log("%cSharedService" + "%c bundled", "color:red", "color:green");
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    console.log("%cSharedService" + "%c instantiated", "color:red", "color:green");
  }
}
