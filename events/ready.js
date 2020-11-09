const { prefix } = require('../config')

module.exports = async(client) => {
    await client.user.setActivity(`${prefix}help` , {type: 'STREAMING'}).catch(console.log);
    console.log("Logged in to discord as" + " " + client.user.username)
}
