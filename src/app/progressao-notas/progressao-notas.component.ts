import { Component } from '@angular/core';

@Component({
  selector: 'app-progressao-notas',
  templateUrl: './progressao-notas.component.html',
  styleUrls: ['./progressao-notas.component.scss']
})
export class ProgressaoNotasComponent {


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
