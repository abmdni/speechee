var peer = new Peer();

let conn;
function connect() {
    let id = document.getElementById('id').value;
    conn = peer.connect(id);
}
function send() {

    let id = document.getElementById('id').value;
    let text = document.getElementById('text').value;
    var conn = peer.connect(id);
    conn.on('open', function () {
        // here you have conn.id
        conn.send(text);
    });
}
peer.on('connection', function (conn) {
    conn.on('data', function (data) {
        // Will print 'hi!'
        console.log(data);
        let newNode = document.createElement('text');
        newNode.innerHTML = data;
        let div = document.getElementById('recieved');
        linebreak = document.createElement("br");
        div.append(linebreak);
        div.appendChild(newNode);
    });
});

// on open will be launch when you successfully connect to PeerServer

peer.on('open', (id) => {
    document.getElementById("myId").innerHTML = id;
    console.log(id);
});