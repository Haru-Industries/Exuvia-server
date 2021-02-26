const Discord = require('./node_modules/discord.js');


module.exports = {
    name: 'unload',
    description: '',
    aliases: [],
    usage: '[command name]',
    category: 'debug',
    async execute(message, args) {

        if (!args || args.length < 1) return message.channel.send("Must provide a command name to reload.");
        const commandName = args[0];
        // Check if the command exists and is valid
        if (!message.client.commands.has(commandName)) {
            return message.reply("That command does not exist");
        }

        try {
            message.client.commands.delete(commandName);
            console.log(`attempting to unload ${commandName}`)
        } catch (e) {
            console.error(e)
        }
        message.reply(`The command ${commandName} has been unloaded`);
        console.log(`unloaded ${commandName}`)
    }
}

