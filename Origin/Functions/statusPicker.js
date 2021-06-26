


module.exports = {
    name: 'Status Picker',
    argument: null,
    description: "Functions built to create a DS bot status.",

    statusPicker(Client, Configuration) {

        statusTitleTable = {
            0: "WATCHING", 
            1: "WATCHING",
            2: "WATCHING",
            3: "WATCHING",
            4: "WATCHING", 
            5: "PLAYING",
            6: "PLAYING",
            7: "PLAYING",
            8: "PLAYING",
            9: "PLAYING",
            10: "PLAYING"
        }

        statusDescriptionTable = {
            0: `for prefix: ${Configuration.Prefix}`, 
            1: "the stars.",
            2: "dreams go by.",
            3: "you.",
            4: "the universe dance.", 
            5: "the game.",
            6: "with a ball of yarn",
            7: "with your curser.",
            8: "in a sea of stars.",
            9: "in the safety of home.",
            10: "for the win."
        }

        const statusNumber = Math.random(1, 10)
        // I need the statusTitle and statusDescription to return me
        // status titles and descriptions respective too the given random number
        // Currently, no status is set at all, and i believe it is because
        // I am not grabbing the status data correctly



        const statusTitle = toString(statusTitleTable[statusNumber]) 
        const statusDescription = toString(statusDescriptionTable[statusNumber]) 
        return Client.user.setActivity(statusDescription, { type: statusTitle }) 
    }
}