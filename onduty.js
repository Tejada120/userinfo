module.exports = {
    name: 'onduty',
    permissions: [],
    execute(message){
        const channel = message.guild.channels.cache.find(c => c.name === '📃┊fichar-staff');
        const author = message.author.tag
        const time = Math.floor(Date.now() / 1000)

        channel.send({content: `Onduty OF ${author} at <t:${time}>`})

        message.delete()
    }
}
