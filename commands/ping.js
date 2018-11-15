module.exports = class ping {

  static action (message) {
    let args = message.content.split(' ')
    args.shift()
    message.reply('pong papa !')
  }

}