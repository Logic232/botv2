/*CMD
  command: /brdmsg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📌*Send your message*
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin")
if (user.telegramid == ""+admin+""){
 
  Bot.setProperty("adminBroadcast", message)
  Bot.runAll({
    command: "broadcastforad"
  })
  Bot.sendMessage("✅Message sent to all active members")
} else {
 Bot.sendMessage("❌ You are not a Admin")
}

