const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Hey Guys welcome to my homepage`);
  }
  if (req.url === "/about") {
    res.end(`Hey Guys welcome to my youtube channel`);
  }
  res.end(
    `<h1> Oops! </h1>
    <p> We can't seem to find this page </p>
    <a href="/">back home </a>`
  );
});

server.listen(5000);
