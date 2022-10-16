import app from "./index.js";

const startServer = async (port: number): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve(true);
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

export default startServer;
