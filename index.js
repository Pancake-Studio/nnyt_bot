const MainClient = require("./nanospace.js");
const client = new MainClient();
const { exec } = require('child_process');

const javaCommand = 'java -jar Lavalink.jar';

exec(javaCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Java program: ${error}`);
    return;
  }
 
  console.log(stdout);

  if (stderr) {
    console.error(`Java program stderr: ${stderr}`);
  }
});

client.connect()

module.exports = client; 