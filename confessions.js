const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'confession',
    permissions: [],
    execute(message, args, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'channel-here');

        let messageArgs = args.join(' ');
        const embed = new MessageEmbed()
        .setColor('BLACK')
        .setAuthor({ name: 'Confessions', iconURL: 'https://cdn.discordapp.com/attachments/948960755909296158/951164342508875816/26826364-silueta-del-hombre-anonimo-con-signo-de-interrogacion_1.png' })
        .setDescription(messageArgs)
        .setFooter({ text: 'Confessions', iconURL: 'https://images-ext-2.discordapp.net/external/Ec2PkAjYwdjOaizGzJwkSw2-tF2V6Zk3Fyk2dqeNRsQ/https/media.discordapp.net/attachments/764215405841481728/765145386926473226/inferno_acavado_sin_fuego.png' })

        channel.send({embeds: [embed]});
        message.delete()
    }
}
