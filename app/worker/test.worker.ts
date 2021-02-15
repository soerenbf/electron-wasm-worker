// let _rust: typeof import("../../pkg");
// async function getRust(): Promise<typeof _rust> {
//     if (!_rust) {
//         _rust = await import("../../pkg");
//     }

//     return _rust;
// }

let _imported: typeof import("./import-test").default;
async function getImported() {
    if (!_imported) {
        _imported = (await import("./import-test")).default;
    }

    return _imported;
}

async function handleMessage() {
    // const rust = await getRust();
    // const greeting = rust.get_greeting("Test");
    const dyn = await getImported();
    const greeting = dyn();

    console.log("Worker thread", greeting);
    (self as any).postMessage(greeting);
}

self.onmessage = handleMessage;
self.addEventListener("message", handleMessage);
