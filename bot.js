const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// Vars Here \\

client.on('ready', () => {
  client.user.setPresence({game: {name: "zander: < command start", type: 0}});
  console.log('I am ready!');
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === "spam") {
    var i;
    for (i = 0; i < 20000; i++) {
    message.guild.channels.find("name", "spam-zander").sendMessage("<@257337698338078721>");
      message.guild.channels.find("name", "zander-spam").sendMessage("<@257337698338078721>");
      message.guild.channels.find("name", "zander-spamming").sendMessage("<@257337698338078721>");
      message.guild.channels.find("name", "zander-spammer").sendMessage("<@257337698338078721>");
//      message.guild.channels.find("name", "other-spam").sendMessage("<@296071898960494592>");
    }
    message.channel.sendMessage("```css\nSpamming Zandercross12!```");
  }
  
  if (command === "help") {
    message.channel.sendMessage("`zander:spam` = Spams Zander\n`zander:help` = Displays this help menu\n`More changes will come soon`");
  }

});

setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
