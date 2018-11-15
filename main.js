const Discord = require('discord.js')
const client = new Discord.Client()
const Command = require('./commands/command')

client.login('NTEyNTkwMDM2MjQ4NTU5NjI2.Ds7uUg.epxekxFrrz83Wdkzdm6YXza1pA0')
  .then()
  .catch(console.error)

client.on('ready', () => {
    client.channels.find("type","text").send("Yo Yo Yo, Chappie est dans la place")
    .then()
    .catch(console.error)
})

client.on('message', (message) =>{
    message.content[0] === "!" ? Command.parseCommand(message) : null
});
