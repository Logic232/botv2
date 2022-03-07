/*CMD
  command: Admin
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
var admin = 1144712831
Bot.getProperty("admin")
if(admin == 1144712831){
Bot.sendMessage("Please Set Admin First Use /SetAd")
} else {
if (user.telegramid == 1144712831){
var adpa = [[{title:"🚨Main Setting",command:"/mains"},{title:"👲User Settings",command:"/users"}],[{title:"🔄Tranfer Admin Panel",command:"/SetAd"}],[{title:"🤖Bot Setting",command:"/bots"},{title:"💫Mass Setting",command:"/massse"}]]
Bot.sendInlineKeyboard(adpa,"*🤗 Welcome To Admin Panel\nPanel Is Made By @Zeusstech\n\nUsing Many Setting at Same Time Can\nHarm Your Bot*")
} else {
Bot.sendMessage("❌You are Not Admin")
}}
