"use strict";
const args = process.argv.slice(2);
function run() {
    if (args.length === 0) {
        console.log("⚠️ No arguments provided");
        return;
    }
    console.log("🛠️ Running utility with:", args);
}
run();
