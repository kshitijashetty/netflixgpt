export const validateData = (sUserName, sPassword) => {
  const bEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(sUserName);
  const bPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
    sPassword
  );

  if (!bEmail && !bPassword) return "Both Email and Password are not valid";
  if (!bEmail) return "Email is not valid";
  if (!bPassword) return "Password is not valid";

  return null;
};
