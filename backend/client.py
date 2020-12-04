import json
import requests
import numpy as np

from utils import load_image, save_image

img = load_image("demo/0869x4-crop.png")
img = np.expand_dims(img, 0)

data = json.dumps({"signature_name": "serving_default", "instances": img.tolist()})

print('Data: {} ... {}'.format(data[:50], data[len(data)-52:]))

headers = {"content-type": "application/json"}
json_response = requests.post('http://localhost:8501/v1/models/srgan:predict', data=data, headers=headers)
predictions = json.loads(json_response.text)['predictions']
out = np.array(predictions, dtype=np.uint8)
save_image(out[0], 'SR-output/SR (GAN).png')
