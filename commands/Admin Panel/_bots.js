/*CMD
  command: /bots
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Panel
  answer: 
  keyboard: 
  aliases: 
CMD*/


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var admin = 
Bot.getProperty("admin")
if (user.telegramid == 1144712831){
var boss = [[{title:"👥Clone This Bot🤖",command:"/clonea"},{title:"🚦User Illertaion",command:"🚦User Illertaion"}],[{title:"🔙Back",command:"Admin"}]]
Bot.sendInlineKeyboard(boss,"*🤖Bot Setting Area*")
} else {
Bot.sendMessage("❌You are Not Admin")
}
