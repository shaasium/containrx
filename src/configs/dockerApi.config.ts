import Docker from "dockerode";

export const dockerApi = new Docker({
  host: "127.0.0.1",
  port: "2375",
});
