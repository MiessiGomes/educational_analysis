import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showOverlay(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const overlay = document.querySelector('.overlay') as HTMLElement;
      const overlayImg = overlay.querySelector('img') as HTMLImageElement;
      overlayImg.src = (target as HTMLImageElement).src;
      overlay.classList.remove('hide');
    }
  }

  hideOverlay() {
    const overlay = document.querySelector('.overlay') as HTMLElement;
    overlay.classList.add('hide');
  }

}
