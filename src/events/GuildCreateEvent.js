const Event = require('../structures/Event');
const GuildConfig = require('../database/schemas/GuildConfig')

module.exports = class GuildCreateEvent extends Event {

        
    async run(client, guild) {
        try {
            const guildConfig = await GuildConfig.create({
                guildId: guild.id,
                });
                console.log('Bot has Joined a new server. Saved to Database');
        } catch ( err ) {
            console.log( err )
        }
    }
}
