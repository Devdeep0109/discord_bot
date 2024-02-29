const { REST, Routes } =  require("discord.js");



const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];
  
  const rest = new REST({ version: '10' }).setToken("MTIxMjcyNTQxMDU3NjYwMTA4OA.GXVvXP.Djs8HYuPezjITrgDx_DmnCYKGXaIuqDzKm7jdU");
  
  try {
    console.log('Started refreshing application (/) commands.');
  
    rest.put(Routes.applicationCommands("1212725410576601088"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
