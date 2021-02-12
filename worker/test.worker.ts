import registerPromiseWorker from 'promise-worker/register';

async function workerFunction() {
    const rust = await import("../pkg");
    const greeting = rust.get_greeting("Test");
    console.log(greeting);
}

registerPromiseWorker(workerFunction);