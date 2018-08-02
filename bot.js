const Discord = requir('discord.js');
const client = new Discord.Client();

client.on('ready',{}=> (
   console.log'I am ready!');
});

client.on('message'),message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

//THIS MUST BE THIS WAY
client.loginprocess.env.BOT_TOKEN);
