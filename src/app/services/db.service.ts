import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  validador: boolean = false;

  constructor(private router : Router) { }

    canActivate() {
      if(this.validador) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }

    validarRuta(name: string,password: string) {
    this.router.navigate(["principal"]);
    if (name === "admin" && password === "admin" ) {
      this.validador = true;
      return true;
    }
    else {
      return false;
    }
}
}

