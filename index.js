//importing modules etc...
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config");
const fs = require("fs");

//Client Events
fs.readdir("./events/", (err, files) => {
  if (err) return console.log(err);
  files.forEach((f) => {
    const event = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    console.log(`Event Loaded: ${f}`);
    client.on(eventName, event.bind(null, client));
  });
});


client.login(config.token);
