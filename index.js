const { Client, GatewayIntentBits } = require("discord.js"); 

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds ,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
// listener...
client.on("messageCreate" ,(msg) =>{
    if(msg.author.bot) return;
    msg.reply({
        content : "Hi from bot",
    });
});

client.on("interactionCreate" ,(interaction)=>{
    console.log(interaction);
    interaction.reply("pong!!!");
})

client.login(
    "MTIxMjcyNTQxMDU3NjYwMTA4OA.GXVvXP.Djs8HYuPezjITrgDx_DmnCYKGXaIuqDzKm7jdU"
)