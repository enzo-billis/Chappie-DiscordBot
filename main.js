const Discord = require('discord.js')
const client = new Discord.Client()

client.login('NTEyNTkwMDM2MjQ4NTU5NjI2.Ds7uUg.epxekxFrrz83Wdkzdm6YXza1pA0')
  .then()
  .catch(console.error)

client.on('ready', () => {
  client.channels.first().children.first().send("Yo Yo Yo, Chappie est dans la place")
    .then()
    .catch(console.error)
})

client.on('message', (message) =>{
  if(message.content == "tg"){
    message.channel.send({
      files: ['./images/Chappie/chappie-Gangsta.jpg']
    })
      .then(() => {
        message.reply("T'as dis quoi fdp ?")
          .then()
          .catch(console.error)
      })
      .catch(console.error)
  }
})
