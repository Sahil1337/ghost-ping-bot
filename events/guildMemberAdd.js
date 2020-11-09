module.exports = async(client, member) => {
    let channel = '769594179398402090';
    let message = await
    member.guild.channels.cache.get(channel).send(`${member}`)//its the message
    setTimeout(async() => {
        await message.delete();
        console.log(`done ghost ping for ${member.user.username}`)
    }, 1000) //1000ms = 1sec
}
