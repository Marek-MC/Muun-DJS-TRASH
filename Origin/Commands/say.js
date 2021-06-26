module.exports = {
    name: 'Say',
    argument: 'say',
    description: "Repeat after me",

    async execute(message, args) {

        if (!args[0]) {
            return message.reply(`you wanted me to say something?`)
        }

        if (args[0] == '-d') {
            const userMessage = message
            const newMessage = args.join(' ')


            // const newMessage = args.splice(0).then(args.join(' '))
            // const newMessage = args.splice(0).join(' ')
            // const newMessage = args.shift().join(' ')

            return userMessage.delete({ timeout: 500 }).then(message.channel.send(newMessage))
        }

        // Project for later - Will send the repeated message too another channel
        if (args[0] == '#') {
            return message.channel.send('Say this message into another channel?')
        }

        // Project for later - Will also send the repeated message too another channel, then delete the your message
        if (args[0] == '-d #') {
            return message.channel.send('Say this message into another channel?')
        }

        if (args[0]) {
            const newMessage = args.join(' ')
            return message.channel.send(newMessage)
        }
    },
}

