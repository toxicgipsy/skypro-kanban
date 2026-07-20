export function getUserInfo() {
  try {
    return JSON.parse(localStorage.getItem("userInfo"));
  } catch {
    return null;
  }
}
