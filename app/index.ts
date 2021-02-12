import PromiseWorker from 'promise-worker';
// @ts-expect-error : has no default export.
import Worker from './worker/test.worker';

// const worker = new Worker(new URL("./worker/test.worker.ts", import.meta.url));

const worker = new PromiseWorker(new Worker());

// worker.onmessage = console.log;
// worker.addEventListener("message", console.log);

worker.postMessage("").then(console.log);
