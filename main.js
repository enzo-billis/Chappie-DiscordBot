const Discord = require('discord.js')
const client = new Discord.Client()
const Command = require('./commands/command')

client.login('[INSERT_DISCORD_API_KEY]')
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
