let badwords = require("../assets/badwords")

module.exports = class chappie {

    static action(message) {
        let args = message.content.split(' ')
        args.shift()

        if (args[0] === "maman") {
            message.channel.send({
                files: ["images/Chappie/chappie-mom.jpg"]
            })
                .then()
                .catch(console.error)
            return true
        }
        else if (args[0] === "papa") {
            message.channel.send({
                files: ["images/Chappie/chappie-dad.jpg"]
            })
                .then()
                .catch(console.error)
            return true
        }
        else if (args[0] === "famille") {
            message.channel.send({
                files: ["images/Chappie/chappie-family.jpg"]
            })
                .then()
                .catch(console.error)
            return true
        }
        else if (args.includes("bye")) {
            message.reply("Bisous °~°")
            return true
        }
        else if (args.includes("coucou")) {
            message.reply("Coucou toi °~°")
            return true
        }
        else {
            message.reply("Chappie pas comprendre....")
        }
    }

    static chappieHateBadwords(message) {
        // let badwordsFR = badwords.split("/");
        // let messageArray = message.content.split(" ")
        // return _.intersection(messageArray,badwordsFR).length > 0 ? message.reply("Chappie deteste les gros mots !") : false

        // return message.content.match(badwords) ? true : false
    }
}