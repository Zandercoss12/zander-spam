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
  	for (int i = 0; i < 100; i++) {
  		message.channel.sendMessage("@Zandercross12#7714");
  	}
  break;
  }

});



setInterval(() => {
 http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
