import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Config } from "./common/config";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        if (Config.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}