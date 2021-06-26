module.exports = {
    name: 'Ping!',
    argument: 'ping',
    description: "This is a ping command!",

    async execute(message, args) {

        const pingTime = Date.now() - message.createdTimestamp;
        return message.reply(`Your pingtime is ${pingTime} milliseconds.`)
    },
}

