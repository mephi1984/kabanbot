const express = require('express');
const bodyParser = require('body-parser');

const VkBot = require('node-vk-bot-api');

const KhaleesiModule = require("./animetwitterpickerbot.khaleesi.js");


var fs = require('fs');

fs.readFile('/home/ubuntu/vk_bot_token.txt', 'utf8', function(err, data) {
    if (err) throw err;
	
	data = data.trim();
	
    console.log("Token: >" + data + "<");
	
	const bot = new VkBot(stx);


	bot.on((answer) => {
		console.log("bot on ctx");
  
  //console.log(answer);
 
	   if (typeof answer.message.fwd_messages !== 'undefined' && answer.message.fwd_messages.length > 0) {
		   var message = answer.message.fwd_messages[0].text;
		   
		   message = message.replace(/\[.*\]/g, '');
		   
		   console.log(">>>" + message + "<<<");
	   
		   return answer.reply(KhaleesiModule(message));
	   }
	   else
	   {
		  
		let message = answer.message.text;
		
		message = message.replace(/\[.*\]/g, '');
		
		console.log(">>>" + message + "<<<");
	   
		return answer.reply(KhaleesiModule(message));
	   
	   }
	});


	//console.log(KhaleesiModule("А почему у меня ничего не работает"));

	bot.startPolling((err) => {
	  if (err) {
		console.error(err);
	  }
	  else
	  {
		  console.log('[BOT] Бот успешно запущен!'); // Сделал себе для понятности запустился
	  }
	});
});




