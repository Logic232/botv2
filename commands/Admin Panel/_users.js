/*CMD
  command: /users
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
if (user.telegramid == "1144712831"){
var ues = [[{title:"➕Add Balance 💵",command:"➕Add Balance 💵"},{title:"➖Cut Balance 💵",command:"➖Cut Balance 💵"}],[{title:"🔒Ban User",command:"🔒Ban User"},{title:"🔓Unban User",command:"🔓Unban User"}],[{title:"🔙Back",command:"Admin"}]]
Bot.sendInlineKeyboard(ues,"*👲User Setting Area*")
} else {
Bot.sendMessage("❌You are Not Admin")
}
