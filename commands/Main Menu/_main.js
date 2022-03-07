/*CMD
  command: /main
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 🔙back to menu, 🔙 back
CMD*/


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💵 Balance 💵\n🤴Referral🤴,🎁 Bonus 🎁,↗️Withdraw↗️,\n⚙️ Set wallet ⚙️,📊 Statistics 📊", "*▶️ Refer and Earn TRX*")
}
if (user=="left"){
Bot.runCommand("/start");
}
Bot.runCommand("reff")
