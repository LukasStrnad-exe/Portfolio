import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  name: string = '';
  email: string = '';
  message: string = '';
  terms: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  isShown = signal(false);
  termsTouched: boolean = false;

  constructor() {
    emailjs.init('1_J16aYKb8gAkh34h');
  }

  onSubmit(form: any) {
    this.isLoading = true;
    this.termsTouched = false;
    this.sendEmail()
      .then(() => {
        this.showSuccesMessage();
        this.isLoading = false;
        form.resetForm();
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        this.errorMessage = 'Failed to send email. Please try again.';
        this.isLoading = false;
      });
  }

  sendEmail() {
    return emailjs.send('service_v8y9ikl', 'template_b75bhns', {
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }

  showSuccesMessage() {
    this.toggleSuccesMessage();
    setTimeout(() => this.toggleSuccesMessage(), 3000);
  }

  toggleSuccesMessage() {
    this.isShown.update((isShown) => !isShown);
  }
}
