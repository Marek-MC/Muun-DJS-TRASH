module.exports = {
    name: 'Purge',
    argument: 'purge',
    description: "Delete messages in bulk. Fact: DS bots cannot delete messages older than 14 days, due to DS limitations.",

    async execute(message, args) {

        const toPurge = parseInt(args[0])
        const purgeMax = 100
        const purgeMin = 1


        if (!args[0]) {
            return message.channel.send(`How many messages did you want to purge? Your purge limit is ${purgeMax}`)
        }

        if (isNaN(toPurge)) return message.reply(`The number you have given is "${args[0]}"?..`)
        // if (toPurge < purgeMax) return message.reply(`You can't delete more than ${purgeMax} messages at once.`)
        // if (toPurge > purgeMin) return message.reply(`You have to choose a number higher than ${purgeMin}.`)

        await message.channel.messages.fetch({ limit: toPurge }).then(messages => {
            message.channel.bulkDelete(messages)
        })
    }
}