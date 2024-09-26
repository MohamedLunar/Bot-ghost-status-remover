const { Client, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  client.user.setActivity('?help | Made By MohamedLunar', { type: 'WATCHING' })
    
});

client.login(token);
