import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class Header {

  changeLanguage() {
    // Need Logic to change the language
    this.changeStyleButton();
  }

  changeStyleButton() {
    let focused = document.querySelector('.language_focused');
    let unfocused = document.querySelector('.language_unfocused');

    if (focused && unfocused) {
      focused.classList.remove('language_focused');
      focused.classList.add('language_unfocused');
      unfocused.classList.remove('language_unfocused');
      unfocused.classList.add('language_focused');
    }
  }
}
