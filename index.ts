import PromiseWorker from 'promise-worker';
// @ts-expect-error : has no default export.
import Worker from './worker/test.worker';

const worker = new PromiseWorker(new Worker());

worker.postMessage(null);
