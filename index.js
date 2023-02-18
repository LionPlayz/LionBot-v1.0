const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config/config');
const colors = require("colors");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("||                       ==============".yellow);
console.log("||                       ||          ||".yellow);
console.log("||                       ||          ||".yellow);
console.log("||                       ||          ||".yellow);
console.log("||                       ||          ||".yellow);
console.log("||                       ||============".yellow);
console.log("||                       ||            ".yellow);
console.log("||                       ||            ".yellow);
console.log("||                       ||            ".yellow);
console.log("||                       ||            ".yellow);
console.log("||                       ||            ".yellow);
console.log("||                       ||            ".yellow);
console.log("====================     ||            ".yellow);
console.log(" ");
console.log(" ");
console.log("0------------------| Bot Info:".blue);
console.log("Current Version: ".yellow + config.BotInfo.Version.green);
console.log("Date Created: ".yellow + "2/18/2023".green);
console.log("Last Updated: ".yellow + config.BotInfo.LastUpdated.green);
console.log("Owner: ".yellow + "LionPlayz".green);
console.log("Developers: ".yellow + "T.F.A., ".green + config.BotInfo.DevelopersNames.green);
console.log("Developer Note: ".yellow + "This bot is using a command handler developed by T.F.A. while all commands and info were developed by LionPlayz.".green);

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],

/*
  presence: {
    activities: [{
      name: "$help",
      type: 2
    }],
    status: 'online'
  }
});
*/

presence: {
  activities: [{
    name: "Lion's Epic Base",
    type: 3
  }],
  status: 'online'
}
});

/*
1 = Playing
2 = Listening to
3 = Watching
4+ = nothing
*/

// Host the bot:
require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.js.".red)
  return process.exit();
};

// Handler:
client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "application_commands", "modals", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});