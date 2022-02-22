// validações se formulário tem erro
// se houver add classes de erro aos compoenntes html e não permitir envio

import { send } from 'process';
import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.documentElement.querySelector('.form') as HTMLFormElement;
const username = document.documentElement.querySelector(
  '.username',
) as HTMLInputElement;
const email = document.documentElement.querySelector(
  '.email',
) as HTMLInputElement;
const password = document.documentElement.querySelector(
  '.password',
) as HTMLInputElement;
const password2 = document.documentElement.querySelector(
  '.password2 ',
) as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  console.log('Validando formulário');

  // this é o próprio form
  hideErrorMessages(this);

  checkForEmptyFields(username, email, password, password2);

  checkEmail(email);
  checkEqualPasswords(password, password2);

  if (shouldSendForm(this)) {
    console.log('Formulário enviado');
  } else {
    console.log('Por favor verifique os campos do formulário');
    console.log('Formulário não foi enviado');
  }
});

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas precisam ser iguais');
    showErrorMessage(password2, 'As senhas precisam ser iguais');
  }
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGE}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let sendForm = true;

  const inputsWithErrors = form.querySelectorAll(
    `.${SHOW_ERROR_MESSAGE}`,
  ).length;

  if (inputsWithErrors > 0) sendForm = false;

  return sendForm;
}
