const TeleBot = require('telebot');
BOT_TOKEN = 'Token aqui'
const bot = new TeleBot(BOT_TOKEN);

bot.start();

bot.on(['/start'], msg => msg.reply.text('Olá! Eu sou o MotivacionalBot, o bot que ao digitar /motivacao te enviará a imagem do cachorrinho do vai dar tudo certo'));

bot.on(['/motivacao'], msg => msg.reply.photo('imagens/cachorrinho.jpg'));