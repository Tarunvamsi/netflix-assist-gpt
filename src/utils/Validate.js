export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isFullNameValid = /^([A-Z][a-zA-Z]*)/.test(fullName);

  if (!isEmailValid) return "Email Id not Valid !";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
};
