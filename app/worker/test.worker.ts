// let _rust: typeof import("../../pkg");
// async function getRust(): Promise<typeof _rust> {
//     if (!_rust) {
//         _rust = await import("../../pkg");
//     }

//     return _rust;
// }

async function handleMessage() {
    // const rust = await getRust();
    // const greeting = rust.get_greeting("Test");
    const greeting = "Hello!";

    console.log("Worker thread", greeting);
    (self as any).postMessage(greeting);
}

self.onmessage = handleMessage;
self.addEventListener("message", handleMessage);
