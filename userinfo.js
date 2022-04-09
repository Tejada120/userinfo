const { MessageEmbed, interaction } = require('discord.js');
module.exports = {
    name: "userinfo",
    description: "Information of an user",
    execute(message, args, commandName, client, Discord, getUserBannerUrl) {
        const Target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(Target.id);

        const Response = new MessageEmbed()
        .setAuthor({name: `${Target.username}`, iconURL: Target.avatarURL({dynamic: true})})
        .setThumbnail(Target.avatarURL({dynamic: true}))
        .setColor('BLURPLE')
        .setDescription(`
        **Name:** ${Target.tag} 
        **NickName:** ${Target.toString()}
        **ID:** ${Target.id}\n
        **Ranks:** ${member.roles.cache.map(r => r).join(' ').replace("@everyone", "")}\n
        **Account Created:** <t:${parseInt(Target.createdTimestamp / 1000)}:R>
        **Member of server since:** <t:${parseInt(member.joinedTimestamp / 1000)}:R>`)
        message.reply({embeds: [Response], ephemeral: true});
    }
}
