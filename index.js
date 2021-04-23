const Discord = require('discord.js');
const client = new Discord.Client();

//Console Logs
client.on('ready' ,() => {
    console.log('Im Online :D');
});

//!Avatar
client.on("message", message => {
    if (message.content.startsWith("!avatar")){
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setImage(message.author.displayAvatarURL())
        .setColor("#8EA1E1")
        message.reply(embed)
    }
});

//!Kick
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
});

//!Ban
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              message.reply(`Successfully banned ${user.tag}`);
            })
            .catch(err => {
              message.reply('I was unable to ban the member');
              console.error(err);
            });
        } else {
          message.reply("That user isn't in this guild!");
        }
      } else {
        message.reply("You didn't mention the user to ban!");
      }
    }
});
  
  
client.login('****************************************************');
