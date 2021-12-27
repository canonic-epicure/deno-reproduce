import { log } from "./lib.js"

self.onmessage = async (e) => {
  const { filename } = e.data;

  await log(filename)

  self.close();
};
