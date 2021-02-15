const worker = new Worker(new URL("./worker/test.worker.ts", import.meta.url));

worker.onmessage = (e) => console.log("Main thread", e);
worker.postMessage("");
