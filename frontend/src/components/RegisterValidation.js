function Validation(values) {
  let error = {};
  const name_pattern = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^[a-zA-Z0-9]{6,}$/;

  if (values.name === "") {
    error.name = "Name should not be empty";
  } else if (!name_pattern.test(values.name)) {
    error.name = "Name should only contain alphabet characters";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match the correct format";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't meet the requirements";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
