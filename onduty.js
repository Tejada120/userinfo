module.exports = {
    name: 'onduty',
    permissions: [],
    execute(message){
        const channel = message.guild.channels.cache.find(c => c.name === 'channel-here');
        const author = message.author.tag
        const time = Math.floor(Date.now() / 1000)

        channel.send({content: `Onduty OF ${author} at <t:${time}>`})

        message.delete()
    }
}

 [Delete this lines]
For offduty just change the name of onduty to offduty, and the message content

IMPORTANT 💥

Change channel-here where you want to register the onduty and offduty messages.

[Delete this lines]


