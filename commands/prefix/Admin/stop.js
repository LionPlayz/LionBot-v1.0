const { EmbedBuilder } = require("discord.js");
const kill = require("kill-port");
module.exports = {
  config: {
    name: "stop",
    description: "Stop the bot with a command.",
    usage: "stop"
  },
  permissions: ['Administrator'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    console.log(`${message.author.tag}`.yellow + ` ran ${prefix}stop.`.green);
    console.log("[INFO] Stopping the bot...".yellow);
    console.log(`[INFO] Bot stopping in ${client.ws.ping}ms...`.yellow);
    console.log("[INFO] Closing port 3000...".yellow);
    kill(3000, "tcp");
    console.log("[MESSAGE] Success!".green);
    client.destroy();
    console.log("[MESSAGE] Bot offline!".green);
    process.exit()
  },
};
