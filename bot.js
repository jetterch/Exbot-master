const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!ใคร') {
      msg.reply('บอทเอง');
  
  }
});
client.on('message', msg => {
    if (msg.content === '!fa') {
      msg.reply('ช่องทางการติดตามแอดฟา เพจ:https://www.facebook.com/AddfaFanpage/');
  
  }
});
client.on('message', msg => {
    if (msg.content === '!fa') {
      msg.reply('ช่องทางการติดตามแอดฟา twitch:https://www.twitch.tv/fakakvasad/');
  
  }
});client.on('message', msg => {
    if (msg.content === '!resume') {
      msg.reply('แนะนำตัว สวัสดีนะค้าบทุกคน~  ชื่อจริง นาย นนทกร สิทธิสวัสดิ์สกุล  ชื่อเล่นชื่อ ฟา ( ที่เป็นตัวโน๊ตอะ โด เร มี ฟา 5555 เกิดวันจันทร์ที่ 16 สิงหาคม 2542  งานอดิเรกเป็นสตรีมเมอร์ ในแฟนเพจ แอดฟา และก็มีลงรูป ลงคลิปพวกมีมต่างๆ ฝากเนื่อฝากตัวด้วยนะค้าบบ  💝 ');
  } 
});


const token = 'NzE1MzkxMDU5NjAxMTI5NDgy.XtC1WQ.FGVVL5Oe5O-aISJ3tzmKMa5SBeo';

bot.login(process.env.token);