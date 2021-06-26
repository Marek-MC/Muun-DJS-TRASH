module.exports = {
    name: 'Commands List',
    argument: 'commands',
    description: "Lists all commands.",

    async execute(message, args) {

        const fileSystem = require("fs")
        const commandFiles = fileSystem.readdirSync("./Commands").filter(file => file.endsWith(".js"))

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`)
            // commandsIndex.push(command.argument, command)

            message.channel.send(`${command.name}`)
        }






        setTimeout(5000)

        message.channel.send("There you go. :)")
    },
}

