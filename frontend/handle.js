var app = require('express')();
var http = require('http')(app);
var io = require('socket.io')(http);

function handleFileSelect(ele){
    var file = ele.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = () => {
        var arrayBuffer = fileReader.result;
        socketControl.uploadImage({
            name: file.name,
            type: file.type,
            size: file.size,
            binary: arrayBuffer
        });
    }
}

function appendImageMessage(data) {
    var messageContainer = document.getElementById('message-container');
    messageContainer.appendChild(createImageMessageDOM(data))
}

function createImageMessageDOM(data) {
    var img = document.createElement("img");
    var str = String.fromCharCode.apply(null, new Uint8Array(data.binary));
    img.src = 'data:image/jpg;base64,' + btoa(str);
    img.style.width = '100%';
}

var socket = io.connect('http://' + document.domain + ':' + location.port);
socket.on('connect', function() {
    console.log('initSocketIO')
});

document.getElementById('files').addEventListener('change', handleFileSelect, false);

socket.on("send-image", function(data){
    appendImageMessage(data)
})
