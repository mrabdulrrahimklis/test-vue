export interface Contact {
  contactForm: ContactForm | null;
  errorLog: string;
}

export interface ContactForm {
  email: string;
  text: string;
}
