import os
from model.srgan import generator
from model import resolve_single
from utils import load_image, save_image

import tensorflow as tf

# ML model stuff
weights_file = lambda filename: os.path.join('weights/srgan', filename)

def resolve_and_save(lr_image_path):
    lr = load_image(lr_image_path)
    gan_sr = resolve_single(gan_generator, lr)
    img_name = lr_image_path.split('/')[1].split('.')[0]
    save_image(gan_sr, 'SR-outputs/SR (GAN)' + img_name + '.png')

if __name__ == "__main__":
    gan_generator = generator()
    gan_generator.load_weights(weights_file('gan_generator.h5'))

    tf.saved_model.save(
        gan_generator,
        export_dir='models/gan_generator',
        signatures=None,
    )

    # resolve_and_save('demo/0869x4-crop.png')
