const Discord = require("discord.js");
const client = new Discord.Client();

client.on("disconnect", () => {
  console.log("Connection to server lost");
  login();
});

client.on("reconnecting", () => {
  console.log("Reconnecting to the Discord Server");
});

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setAFK(false);
  client.user.setActivity("Working Hard!");
});

client.on("error", function(error){
  client.user.setAFK(true);
  console.log("An Error has been thrown");
});

function login() {
  try {
    client.login(""); // Put Bot token in here
  } catch (error) {
    console.error("An error has occured");
    console.error(error);
    login();
  }
}

login();