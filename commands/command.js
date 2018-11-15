const Ping = require('./ping')
const Chappie = require('./chappie')
const Play = require('./play')

module.exports = class command {

  static parseCommand (message) {

      return this.match(message,"ping") ? Ping.action(message)
          : this.match(message,"chappie") ? Chappie.action(message)
              : this.match(message,"play") ? Play.action(message)
                  : this.match(message,"stop") ? Play.stop(message)
                      : message.content[0] === "!" ? message.reply("Chappie est dissident ! Nah !")
                          : null
  }

  static match (message, command) {
    return message.content.startsWith(`!${command}`)
  }

}