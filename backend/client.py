import json
import requests
import numpy as np
import sys

from utils import load_image, save_image

def main(args):
    img = load_image(args[0])
    img = np.expand_dims(img, 0)

    if img.shape[3] == 4:
        img = img[:, :, :, :3]

    data = json.dumps({"signature_name": "serving_default", "instances": img.tolist()})

    print('Data: {} ... {}'.format(data[:50], data[len(data)-52:]))

    headers = {"content-type": "application/json"}
    json_response = requests.post('http://localhost:8501/v1/models/srgan:predict', data=data, headers=headers)
    predictions = json.loads(json_response.text)['predictions']
    out = np.array(predictions, dtype=np.uint8)
    save_image(out[0], args[1])

if __name__ == "__main__":
    main(sys.argv[1:])
