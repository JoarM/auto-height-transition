import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auto-height-modal';
  open = false;

  toggle(e: any): void {
    console.log(e)
    this.open = !this.open;
  } 
}
