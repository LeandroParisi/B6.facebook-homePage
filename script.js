const loginButton = document.querySelector('#button-login');
const emailTelephoneInput = document.querySelector('#user-email-phone');
const femaleGender = document.querySelector('#feminino');
const maleGender = document.querySelector('#masculino');
const customGender = document.querySelector('#personalizado');
const rightContent = document.querySelector('.right-content');
const inputTextArray = document.querySelectorAll('.input-text-verification');

loginButton.addEventListener('click', function () {
  alert(emailTelephoneInput.value);
});

function removeData() {
  while (rightContent.firstChild) {
    rightContent.firstChild.remove();
  }
}

function printData() {
  const p = document.createElement('p');
  p.innerHTML = 'Olá, ';
  p.innerHTML += inputTextArray[0].value;
  p.innerHTML += ' ';
  p.innerHTML += inputTextArray[1].value;
  p.innerHTML += '<br>';
  p.innerHTML += inputTextArray[2].value;
  p.innerHTML += '<br>';
  p.innerHTML += inputTextArray[4].value;
  p.innerHTML += '<br>';
  if (femaleGender.checked) {
    p.innerHTML += 'Feminino';
  } else
  if (maleGender.checked) {
    p.innerHTML += 'Masculino';
  } else {
    p.innerHTML += 'Personalizado';
  }
  removeData();
  rightContent.appendChild(p);
}

const facebookRegister = document.querySelector('#facebook-register');
facebookRegister.addEventListener('click', function () {
  const form = document.querySelector('.subscription-form');
  const p = document.createElement('p');
  p.innerHTML = 'Campos inválidos';
  if (!femaleGender.checked && !maleGender.checked && !customGender.checked) {
    form.appendChild(p);
  } else {
    for (let index = 0; index < inputTextArray.length; index += 1) {
      if (inputTextArray[index].value === '') {
        form.appendChild(p);
        break;
      }
    }
    printData();
  }
});
/*
const personalizeRadio = document.getElementById('personalizado');
personalizeRadio.addEventListener('click', function () {
const input = document.createElement('input');
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  const subscriptionForm = document.querySelector('.subscription-form');
  subscriptionForm.insertBefore(input, facebookRegister);
}); */

const form2 = document.querySelectorAll('.subscription-form-2')[0];
form2.addEventListener('click', function (event) {
  const genderCustom = document.getElementsByName('gender-custom')[0];
  const subscriptionForm = document.querySelector('.subscription-form');
  if (event.target.value === 'Personalizado' && genderCustom === undefined) {
    const input = document.createElement('input');
    input.name = 'gender-custom';
    input.placeholder = 'Gênero (opcional)';
    subscriptionForm.insertBefore(input, facebookRegister);
  } else
    if (event.target.value === 'Feminino' || event.target.value === 'Masculino') {
      if (genderCustom !== undefined) {
        subscriptionForm.removeChild(genderCustom);
      }
    }
});
