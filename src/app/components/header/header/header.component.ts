import { Component } from '@angular/core';
import {MenuService} from "../../../service/menu.service";
import {UserAuthService} from "../../../service/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private menuService: MenuService,
              private userAuthService:UserAuthService,
              private router:Router) {
  }
  toggleMenu() {
    this.menuService.toggle();
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }
}
