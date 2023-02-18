const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  config: {
    name: "ping",
    description: "Replies with pong!",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    console.log(`${message.author.tag}`.yellow + ` ran ${prefix}ping.`.green);
    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription(`**Pong!** Client connection ping: \`${client.ws.ping}\` ms.`)
        .setColor("Blue")
    ] })
  },
};