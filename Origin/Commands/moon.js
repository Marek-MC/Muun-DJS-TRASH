module.exports = {
    name: 'Moon',
    argument: 'moon',
    description: "Displays tonights lunar phase!",

    async execute(message, args) {

        message.channel.send(`The nights lunar phase is...`)



        // Figures out moon position relative to now

        function calculatePosition(now) {
            if (now === null) {
                // now = datetime.datetime.now() // A function that retrieves the time of now
            }

            const diff = null // UNFINISHED
            const days = null // UNFINISHED
            const lunations = null // UNFINISHED

            return lunations // % dec(1) ?????
        }


        function calculatePhase(pos) {
            const index = null // (pos * dec(8) + dec("0.5")) ?????
            index = math.floor(index)

            return {
                0: "New Moon",
                1: "Waxing Crescent",
                2: "First Quarter",
                3: "Waxing Gibbous",
                4: "Full Moon", 
                5: "Waning Gibbous",
                6: "Last Quarter",
                7: "Waning Crescent"
            } [parseInt(index) & 7] // Almost exactly like python... Kinda sus.
        }



        function calculatePhase() {
            const position = calculatePosition()
            const phaseName = phase(position)
            const roundedPosition = null // round(float(position), 3)
            // print "%s (%s)" % (phaseName, roundedPosition)
        }


        message.channel.send(`[null]`)
    }
}