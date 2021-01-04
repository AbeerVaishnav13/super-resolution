# Super Resolution
This is our 7th semested self study project which uses Super Resolution Generative Adversarial Networks (SRGAN) as the proof of concept for upscaling low resolution images (LR) to super resolution images (SR).

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
