module.exports = {
    name: 'cmd3',
    description: '',
    aliases: [],
    usage: '[command name]',
    category: 'debug',
    async execute(message, args) {
        message.channel.send(`test3`)

    },
};
