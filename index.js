const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

const APPLICATION_ID = '1167760523090219088';
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=MtlA34oIUdU';
const STATE = 'Valorant';
const NAME = 'Primo';
const DETAILS = '.gg/eporium';
const LARGE_IMAGE = 'https://media.discordapp.net/attachments/1138857476847054941/1270354246105301077/c78da7861df114e834ab4ab323983317.png?ex=66b36516&is=66b21396&hm=568182151adae38285cde7179071f0d12b8e74ce69a3107be0019f3657de52b5&=&format=webp&quality=lossless';
const LARGE_TEXT = 'Nitro & ExitLag available!!';
const SMALL_IMAGE = 'https://cdn.discordapp.com/emojis/1117852451236761691.gif?size=96&quality=lossless';
const SMALL_TEXT = 'Legit Discord Shop!';
const BUTTONS = [
  { label: '⇢˗ˏˋShop࿐ྂ', url: 'https://discord.com/invite/eporium' },
  { label: '⇢˗ˏˋVouches࿐ྂ', url: 'https://discord.gg/bG6PgpBA2P' }
];
const TIME_ZONE = 'America/New_York';
const UPDATE_INTERVAL = 60000; // Update every minute

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: TIME_ZONE,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function createRichPresence(details) {
  const r = new Discord.RichPresence()
    .setApplicationId(APPLICATION_ID)
    .setType('STREAMING')
    .setURL(YOUTUBE_URL)
    .setState(STATE)
    .setName(NAME)
    .setDetails(details)
    .setAssetsLargeImage(LARGE_IMAGE)
    .setAssetsLargeText(LARGE_TEXT)
    .setAssetsSmallImage(SMALL_IMAGE)
    .setAssetsSmallText(SMALL_TEXT);

  BUTTONS.forEach(button => r.addButton(button.label, button.url));
  return r;
}

client.on('ready', () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const richPresence = createRichPresence(DETAILS);
  client.user.setActivity(richPresence);
  client.user.setPresence({ status: "dnd" });

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      richPresence.setDetails(DETAILS);
      client.user.setActivity(richPresence);
      prevTime = newTime;
    }
  }, UPDATE_INTERVAL);
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
