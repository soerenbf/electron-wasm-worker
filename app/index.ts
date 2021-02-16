import PromiseWorker from 'promise-worker';

const worker = new PromiseWorker(new Worker(new URL("./worker/test.worker.ts", import.meta.url)));

worker.postMessage("").then(console.log);
