const discord = require('discord.js');
const client = new discord.Client();
const dotenv = require('dotenv');

dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content === 'hey') {
    msg.reply(process.env.MESSAGE);
  }
});

client.on('message', (msg) => {
  if (msg.content.includes('pop')) {
    msg.reply(process.env.MESSAGEAARON);
  }
});

client.login(process.env.TOKEN);
