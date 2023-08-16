const body = document.querySelector("body");
const title = document.createElement("h1");

title.textContent = "Formulario";
body.insertAdjacentElement("afterbegin", title);

const formulario = document.createElement("form");
body.insertBefore(formulario, body.children[1]);
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.gap = "1rem";
formulario.style.width = "50%";
formulario.style.margin = "0 auto";

//NAME
const name = document.createElement("label");
formulario.insertAdjacentElement("afterbegin", name);
name.textContent = "Nombre: ";

const inputName = document.createElement("input");
name.appendChild(inputName);

//APELLIDO
const lastName = document.createElement("label");
formulario.appendChild(lastName);
lastName.textContent = "Apellido: ";

const inputLastName = document.createElement("input");
lastName.appendChild(inputLastName);

//EDAD
const edad = document.createElement("label");
formulario.appendChild(edad);
edad.textContent = "Edad: ";

const inputAge = document.createElement("input");
edad.appendChild(inputAge);
inputAge.setAttribute("type", "number");
inputAge.setAttribute("min", "1");
inputAge.setAttribute("max", "100");
// inputAge.setAttribute('value', '18');

//GENERO
const genero = document.createElement("label");
formulario.appendChild(genero);
genero.textContent = "Genero: ";

//FEMENINO
const femenino = document.createElement("label");
genero.appendChild(femenino);
// genero.insertAdjacentElement('afterbegin', femenino);
femenino.textContent = "Femenino";
const inputFem = document.createElement("input");
femenino.appendChild(inputFem);
inputFem.setAttribute("type", "radio");
inputFem.setAttribute("name", "gender");
inputFem.setAttribute("value", "femenino");

//MASCULINO
const masculino = document.createElement("label");
genero.appendChild(masculino);
masculino.textContent = "Masculino";
const inputMasc = document.createElement("input");
masculino.appendChild(inputMasc);
inputMasc.setAttribute("type", "radio");
inputMasc.setAttribute("name", "gender");
inputMasc.setAttribute("value", "masculino");

//NACIONALIDAD
const nacionalidad = document.createElement("label");
nacionalidad.textContent = "Nacionalidad:";
formulario.appendChild(nacionalidad);

const nacionalitySelect = document.createElement("select");
nacionalidad.appendChild(nacionalitySelect);

const generateNationalitiesOptions = () => {
  const options = ["Boliviano", "Brasilero", "Argentino"];
  options.forEach((country) => {
    const option = document.createElement("option");
    option.textContent = country;
    nacionalitySelect.appendChild(option);
    option.setAttribute("value", country);
  });
};

generateNationalitiesOptions();

const validarCampos = () => {
  if (inputName.value.length === 0) {
    alert("El nombre debe tener al menos 2 caracteres");
    return false;
  }

  if (inputLastName.value.length === 0) {
    alert("El apellido debe tener al menos 2 caracteres");
    return false;
  }
  if (isNaN(Number(inputAge.value)) || inputAge.value.length === 0) {
    alert("Verifica el numero ingresado");
    return false;
  }

  return true;
};

//FECHA DE NACIMIENTO = EDAD
const birthday = document.createElement("label");
birthday.textContent = "Fecha de Nacimiento:";
formulario.appendChild(birthday);

const birthdayDate = document.createElement("input");
birthdayDate.setAttribute("type", "date");
birthday.appendChild(birthdayDate);

const generateAge = (date) => {
    const bornDate = new Date(date);
    const millisecondsDifference = Date.now() - bornDate.getTime();
    const dateDifference = new Date(millisecondsDifference); 
    const resultDate = Math.abs(dateDifference.getUTCFullYear() - 1970); 
    return resultDate.toString();
};

//BUTTON
const boton = document.createElement("button");
formulario.appendChild(boton);
boton.textContent = "Enviar";
boton.style.width = "100px";

const mostrarResultado = (e) => {
  e.preventDefault();
  if (validarCampos()) {
    const result = document.createElement("h2");
    const genderSelected = document.querySelector(
      "input[type='radio'][name=gender]:checked"
    );
    // const nationality = document.querySelector("option[")
    result.innerHTML = `Hola ${inputName.value} ${inputLastName.value},  sexo: ${genderSelected.value}, de nacionalidad: ${nacionalitySelect.value}, <br /> tu fecha de nacimiento es: ${birthdayDate.value} y tienes ${generateAge(birthdayDate.value)}`;
    formulario.appendChild(result);
    // alert(`Hola ${inputName.value} ${inputLastName.value}, tienes ${inputAge.value}`)
  }
};

formulario.addEventListener("submit", mostrarResultado);
