const colors = require('colors');
const kill = require("kill-port");
console.log("[!] Closing port 3000...".yellow);
kill(3000, "tcp");
console.log("[COMMAND - MESSAGE] Success!".green);