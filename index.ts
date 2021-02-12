import PromiseWorker from 'promise-worker';
// @ts-expect-error : has no default export.
import Worker from './worker/test.worker';

const worker = new PromiseWorker(new Worker());

worker.postMessage("test").then(_ => console.log("works??")).catch(e => console.error(e));

// import("./pkg").then(module => {
//   module.greet("Test");
// });
