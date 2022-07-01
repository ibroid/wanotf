const whatsapp = require("./whatsapp");
const Reply = require("./reply/main");
const cron = require("./schedule.js");

whatsapp.initialization().then(() => {
  cron.start()
  console.log('Schedule Notification Started');

  whatsapp.client.on('message', async (message) => {
    const chat = await message.getChat()
    await chat.sendSeen()
    if (!message.isStatus && !message.hasMedia && !message.isGif && !message.broadcast) {
      new Reply(message)
    }
  })

  whatsapp.client.getChats().then(chats => {
    chats.forEach(async (chat) => {
      if (chat.unreadCount > 0) {
        await chat.sendSeen()
        await chat.fetchMessages({ limit: chat.unreadCount }).then(messages => {
          messages.forEach(message => {
            if (!message.isStatus && !message.hasMedia && !message.isGif && !message.broadcast) {
              new Reply(message)
            }
          })
        })

      }
    })
  })
})




