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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1187227299112820756/1242765146061799515/fe978b35ead918577cf8ab65493e0726.png?ex=664f06bc&is=664db53c&hm=bceeb23402860c6719ac25f75b75ffdcf369b79420f7c68c7b9b311ca0e63148&=&format=webp&quality=lossless&width=379&height=458') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro & ExitLag available!') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1167746213307756566.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
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
