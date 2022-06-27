const whatsapp = require("./whatsapp");
const Reply = require("./reply/main");
const cron = require("./schedule.js");

whatsapp.initialization().then(() => {
  cron.start()
  console.log('Schedule Notification Started');

  whatsapp.client.on('message', message => {
    message.getChat().then(chat => chat.sendSeen())
    if (!message.isStatus && !message.hasMedia && !message.isGif && !message.broadcast) {
      new Reply(message)
    }
  })

  whatsapp.client.getChats().then(chats => {
    chats.forEach(chat => {
      if (chat.unreadCount > 0) {
        chat.fetchMessages({ limit: chat.unreadCount }).then(messages => {
          messages.forEach(message => {
            if (!message.isStatus && !message.hasMedia && !message.isGif && !message.broadcast) {
              new Reply(message)
            }
          })
        })
        chat.sendSeen()
      }
    })
  })
})




