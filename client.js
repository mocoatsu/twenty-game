const net = require("net");

const client = net.createConnection({ port: 12345, host: "localhost" }, () => {
  console.log("Connected to server");
  process.stdin.pipe(client);
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("end", () => {
  console.log("Disconnected from server");
  process.exit();
});
