const Discord = require("discord.js")
const Token = require("../Token.json")
const Configuration = require("./Configuration.json")
const Status = require('./Functions/statusPicker')
const Client = new Discord.Client()

// Command Setup
const fileSystem = require("fs")
const commandFiles = fileSystem.readdirSync("./Commands").filter(file => file.endsWith(".js"))
Client.commands = new Discord.Collection()

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    Client.commands.set(command.argument, command)
} 

// Event Listener
Client.on("message", message => {

    if (!message.content.toLowerCase().startsWith(Configuration.Prefix) || message.author.bot) return
    const args = message.content.slice(Configuration.Prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = Client.commands.get(commandName)

    if (!commandName) return message.reply("```if (!commandName) return message.reply``` ... in the _Origin.js file has returned this message.")
        || Client.commands.find(command.aliases && command.aliases.includes(commandName))
    try { command.execute(message, args) } catch (error) {
        console.log(error)
        message.reply("This command gave me an error, check the console for more details.")
    }
})

// On Startup 
Client.once("ready", () => {
    Status.statusPicker(Client, Configuration)
    console.log(`${Configuration.Title} ${Configuration.Version} is online.`)
})

// Activate Client
Client.login(Token.Token)
