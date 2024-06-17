import { Component } from '@angular/core';

@Component({
  selector: 'app-rendimento',
  templateUrl: './rendimento.component.html',
  styleUrls: ['./rendimento.component.scss']
})
export class RendimentoComponent {

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
