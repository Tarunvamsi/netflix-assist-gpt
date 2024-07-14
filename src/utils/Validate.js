export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const isFullNameValid = /^([A-Z][a-zA-Z]*)/.test(fullName);

  const conditions = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    digit: /\d/.test(password),
    specialChar: /[@$!%*?&]/.test(password),
  };

  if (!isEmailValid) return { valid: false, message: "Email Id not Valid !" };
  if (!isPasswordValid) {
    return {
      valid: false,
      conditions: conditions,
      message: "Password does not meet the required conditions."
    };
  }

  return { valid: true, conditions: conditions, message: null };
};
