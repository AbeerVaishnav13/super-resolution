import os
from model.srgan import generator
from model import resolve_single
from utils import load_image, save_image

import tensorflow as tf

# ML model stuff
weights_file = lambda filename: os.path.join('weights/srgan', filename)

def resolve_and_save(lr_image_path):
    lr = load_image(lr_image_path)
    # print(lr)
    # print(lr.shape)
    gan_sr = resolve_single(gan_generator, lr)
    img_name = lr_image_path.split('/')[1].split('.')[0]
    save_image(gan_sr, 'SR-output/sr_image.png')

if __name__ == "__main__":
    gan_generator = generator()
    gan_generator.load_weights(weights_file('gan_generator.h5'))

    # tf.saved_model.save(
    #     gan_generator,
    #     export_dir='tmp/srgan/1/',
    #     signatures=None,
    # )

    resolve_and_save('LR-input/lr_image.png')
