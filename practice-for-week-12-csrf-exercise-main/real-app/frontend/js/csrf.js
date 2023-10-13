function getCSRFTokenCookie() {
  // CSRF Protection:
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=');
    acc[name] = value;
    return acc;
  }, {});
  const csrfToken = cookies['XSRF-Token'];
  return csrfToken;
}
/*
It starts by splitting the document.cookie string into individual cookies. The document.cookie property contains all the cookies associated with the current web page as a single string.

It uses the .split('; ') method to split the string into an array of individual cookies. The .split('; ') method separates cookies based on the semicolon and space character, which is the common format used to delimit cookies in the document.cookie string.

It then iterates over the array of cookie strings using the .reduce() method. In each iteration, it further splits the cookie into a name-value pair by using .split('='), assuming that the cookie name and value are separated by an equal sign ('='). It adds each name-value pair to an accumulator object.

The function expects a specific CSRF token cookie with the name 'XSRF-Token'. It retrieves the value associated with this cookie from the accumulator object.

Finally, it returns the value of the 'XSRF-Token' cookie, which is the CSRF token.

*/