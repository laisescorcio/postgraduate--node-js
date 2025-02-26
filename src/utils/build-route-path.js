// /users/:id

export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g; // regex to find a specific format text. Exemplo: I want to find a text that starts with : and followed by any character (a-zA-Z). This characters (a-zA-Z) could be repeat once or more times. And /g is to find all the matches in the string (global regex).
  const pathWithParams = path.replaceAll(
    routeParametersRegex,
    "(?<$1>[a-z0-9-_]+)"
  );

  // const test = /\/users\/([a-z0-9\-_]+)/ // to test the regex

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`); // We need the string starts (^) with pathWithParams. After URL (?), we get all the query params (.*)

  return pathRegex;
}
