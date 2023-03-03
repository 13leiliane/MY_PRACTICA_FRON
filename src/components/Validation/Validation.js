const regerxEmail = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function Validation(userData) {
  let errors = {};

  if (!regerxEmail.test(userData.username))
    // validamos el username
    errors.username = "El usuario deve ser un email";
  else if (!userData.username)
    errors.username = "El usuario no puede estar vazio";
  else if (userData.username.length > 35)
    errors.username =
      "El nombre de un usuario no puede ser mayor a 35 caracters";

  if (!regexPassword.test(userData.password))
    errors.password = "La contraseña deve tener un número";
  else if (userData.password.length < 6 && userData.password.length > 10)
    errors.password =
      "La contraseña deve tener una longitude entre 6 y 10 caracters";
  return errors;
}
