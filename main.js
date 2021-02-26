const options = {},
    io = require('socket.io')(options),
    fs = require('fs');

var room = rand()
var commands = {};
var counter = 0;
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = fs.readFileSync(`./commands/${file}`, 'utf-8');
    commands[counter] = { 'name': `${command.split('name: \'')[1].split('\'')[0]}`, 'command': command }
    counter = counter + 1
}

const jsfile = fs.readFileSync('./commands/cmd.js', { encoding: "utf-8" })
const buff = Buffer.from(JSON.stringify(commands), 'utf-8');
const b64 = buff.toString('base64');

console.log(`cmd accepting connections`);
io.on('connection', (socket) => {
    console.log(`${socket.id} has connected`)
    socket.on('room', () => {
        socket.join(room)
        socket.join([socket.id, room])
        console.log(`${socket.id} has joined ${room}`)
        var infos = `as ${socket.id} in ${room}`
        socket.emit('room', infos)
    })
    socket.on('enable', () => {
        socket.emit('recv', buff, room)
    })
    socket.on('end', () => {
        socket.disconnect()
    })
})
io.listen(3000);

function rand() {
    return Math.random().toString(16).substr(2, 8);
}
