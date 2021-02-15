import registerPromiseWorker from 'promise-worker/register';

async function workerFunction(): Promise<string> {
    const rust = await import("../../pkg");
    const greeting = rust.get_greeting("Test");
    return greeting;
}

registerPromiseWorker(workerFunction);