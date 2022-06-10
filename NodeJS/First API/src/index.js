const http = require("http");
const { URL } = require("url");

const routes = require("./routes");
const bodyParser = require("./helpers/bodyParser");

const server = http.createServer((request, response) => {
  const parseUrl = new URL(`http://localhost:3001${request.url}`);
  console.log(
    `Request method: ${request.method} | Endpoint: ${parseUrl.pathname}`
  );

  let { pathname } = parseUrl;
  let id = null;

  const splitedEndpoint = pathname.split("/").filter(Boolean);

  if (splitedEndpoint.length > 1) {
    pathname = `/${splitedEndpoint[0]}/:id`;
    id = splitedEndpoint[1];
  }

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === pathname && routeObj.method === request.method
  );

  if (route) {
    request.query = Object.fromEntries(parseUrl.searchParams);
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-Type": "application/json" });
      response.end(JSON.stringify(body));
    };

    if (["POST", "PUT", "PATCH"].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${parseUrl.pathname}`);
  }
});

server.listen(3001, () =>
  console.log("Server started at http://localhost:3001")
);
