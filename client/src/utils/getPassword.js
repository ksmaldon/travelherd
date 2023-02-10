export function getPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  const array = new Uint32Array(8);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < 8; i++) {
    password += chars[array[i] % chars.length]; // % operator returns remainder of division
  }
  return password;
}
