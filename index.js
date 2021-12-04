const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("hello! simple bot");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("Hello")) {
     message.channel.send("Hi");
   }
 
 });
 
 client.login("Token");

//////////////in console write "npm install discord.js"//////////////
