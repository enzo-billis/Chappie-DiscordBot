module.exports = class chappie {

  static action(message){
    let args = message.content.split(' ')
    args.shift()

    if(args[0] === "maman"){
      message.channel.send({
        files:["images/Chappie/chappie-mom.jpg"]
      })
        .then()
        .catch(console.error)
    }
  }
}