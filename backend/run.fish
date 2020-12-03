alias servup="docker run -t --rm -p 8501:8501 -v '$PWD/tmp/srgan:/models/srgan' -e MODEL_NAME=srgan tensorflow/serving"
