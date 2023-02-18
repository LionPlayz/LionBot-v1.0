const { EmbedBuilder } = require('discord.js');
module.exports = {
    config: {
        name: "", // Name of Command
        description: "", // Command Description
        usage: "" // Command usage
    },
    permissions: "", // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
        console.log(`${message.author.tag}`.yellow + ` ran ${prefix}NAME OF COMMAND.`.green);
        // execute
    },
};