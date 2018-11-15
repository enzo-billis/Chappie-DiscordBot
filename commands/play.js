const YoutubeStream = require('ytdl-core');
const fs = require('fs');
let voiceInstance;

module.exports = class play {

    static action (message) {
        let args = message.content.split(" ")
        this.play(args[1], message)
    }

    static play (playFlux, message) {
        if (YoutubeStream.validateURL(playFlux)) {

            let stream = YoutubeStream(playFlux)
            stream.on("error", function () {
                message.reply("Chappie n'arrive pas à accéder à la vidéo :frowning: ")
                return false;
            })

            message.client.channels.find("type", "voice").join()
                .then((connection) => {
                    voiceInstance = connection
                    message.delete()
                    connection.playStream(stream)
                        .on('end', () => {
                            connection.disconnect()
                            voiceInstance = null;
                        })

                })
                .catch((e) => {
                    console.error(e)
                })

        }
        else {
            message.reply("Chappie trouve que ton lien YouTube n'est pas correcte :frowning: ")
        }
    }

    static stop (message) {
        voiceInstance ? voiceInstance.disconnect()
            : message.reply("Mais je ne joue rien...")
        message.delete()

    }
}