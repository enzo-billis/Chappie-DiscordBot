const Ping = require('./ping')
const Chappie = require('./chappie')

module.exports = class command {

  static parseCommand (message) {
    if(this.match(message,"ping")) {
      Ping.action(message)
      return true
    }
    else if(this.match(message,"chappie")){
      Chappie.action(message)
      return true
    }
    else if(message.content[0] === "!"){
      message.reply("Chappie est dissident ! Nah !")
      return true
    }
    return false;
  }

  static match (message, command) {
    return message.content.startsWith(`!${command}`)
  }

}