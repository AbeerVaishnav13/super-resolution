import os
from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)


app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app, always_connect=True, engineio_logger=True)

@socketio.on('connect')
def connected():
    print('connect')

@socketio.on('disconnect')
def disconnect():
    print('disconnect')

@socketio.on('image-upload')
def imageUpload(image):
    emit('send-image', image, broadcast = True)

if __name__ == '__main__':
    socketio.run(app, debug=True)
