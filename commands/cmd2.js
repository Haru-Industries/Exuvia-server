module.exports = {
    name: 'cmd4',
    description: '',
    aliases: [],
    usage: '[command name]',
    category: 'debug',
    async execute(message, args) {
        message.channel.send(`test4`)

    },
};
