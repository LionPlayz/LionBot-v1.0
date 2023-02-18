const { EmbedBuilder } = require('discord.js');
const kill = require("kill-port");
module.exports = {
    config: {
        name: "update",
        description: "Kills the bot then reboots the bot with new code changes.",
        usage: "update"
    },
    permissions: ['Administrator'],
    owner: false,
    run: async (client, message, args, prefix, config, db) => {
        console.log(`${message.author.tag}`.yellow + ` ran ${prefix}update.`.green);
        console.log("[INFO] Stopping the bot...".yellow);
        console.log(`[INFO] Bot stopping in ${client.ws.ping}ms...`.yellow);
        console.log("[INFO] Closing port 3000...".yellow);
        kill(3000, "tcp");
        console.log("[MESSAGE] Success!".green);
        client.destroy();
        console.log("[MESSAGE] Bot offline!".green);
        var spawn = require("child_process").spawn,
        ls = spawn('cmd.exe', ['/c', 'start.bat']);
        ls.stdout.on('data', function (data) {
        console.log("stdout: ".yellow + `${data}`.yellow);
        });
        ls.stderr.on('data', function (data) {
        console.log("stderr: ".red + `${data}`.red);
        });
        ls.on("exit", function (code) {
        console.log("Restarted bot with code ".green + `${code}`.green + ".".green);
        });
        setTimeout(function stop() {
            console.log("[INFO] Killed old bot.".green);
            process.exit()
        }, 100);
    },
};