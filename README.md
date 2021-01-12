# Super Resolution
This is our 7th semester self study project which uses Super Resolution Generative Adversarial Networks (SRGAN) as the proof of concept for upscaling low resolution images (LR) to super resolution images (SR).

## Technologies used
The project utilizes the following technologies:

### Backend
1. **Tensoflow** (for SRGAN model)
2. **Tensorflow Serving** (For deploying the model to a server)
3. **Flask** for interacting with the REST API server provided by `Tensorflow Serve`.

### Frontend
1. **Web UI** with HTML,CSS and JS.
2. **ExpressJS** for communication between client and the server.
3. **NodeJS** for server-side filesystem management.

## Installation instructions
1. Install the required dependencies for python (To make the backend work):
```
$ pip install tensorflow flask
```

2. Install the dependencies for the **Tensorflow Serve REST API server** to work:
```
// Install docker into your system
$ sudo apt install docker docker-compose

// Install tensorflow server using
$ docker pull tensorflow/serving
```

3. Install NodeJS dependencies (To make the frontend work):
```
// Install NPM package manager (if not installed previously)
$ sudo apt install npm

// Run the following to install the dependencies
$ cd backend/js_server
$ npm install
```

4. To run the model
```
// Source the run.fish file
$ source run.fish

// Run tensorflow serving using (Do remember to activate docker first)
$ servup

// Run the backend JS server for communication between frontend and backend using
$ runjs
```
