const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1167760523090219088')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=MtlA34oIUdU') //Must be a youtube video link 
    .setState('Valorant')
    .setName('Primo')
    .setDetails(`.gg/eporium `)
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1138857476847054941/1259741952149291130/10c925f2abb468aca4430c2662a15b05.png?ex=668cc99e&is=668b781e&hm=6d4c237047c28fb96f3af79b9af733ce45c5a3cd8c418f6a5e3d50d37edd4340&=&format=webp&quality=lossless&width=462&height=458') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro & ExitLag available!') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1222410539314057236.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Legit Discord Shop!') //Text when you hover the Small image
    .addButton('⇢˗ˏˋShop࿐ྂ', 'https://discord.com/invite/eporium')
    .addButton('⇢˗ˏˋVouches࿐ྂ', 'https://discord.gg/bG6PgpBA2P');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` .gg/eporium`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
