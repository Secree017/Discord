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
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1193573791155097630/1227583263791513610/04e4a49b482bbcf1bbd17d4c173df9ef.png?ex=6628ef01&is=66167a01&hm=c0c0de9ead5b4a31d9c6ab0079f879861b434cbb75efd2b64dca36ffe7d9080c&=&format=webp&quality=lossless&width=350&height=350') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro & ExitLag available!') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1117852451236761691.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
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
