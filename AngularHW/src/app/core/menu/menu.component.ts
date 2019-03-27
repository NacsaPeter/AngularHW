import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  constructor(
    private router: Router
  ) {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
