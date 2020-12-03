const fileSelector = document.getElementById('myfile');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  displayImage(fileList[0])
});

const dropArea = document.getElementById('drop-area');

dropArea.addEventListener('dragover', (event) => {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
});

dropArea.addEventListener('drop', (event) => {
  event.stopPropagation();
  event.preventDefault();
  const fileList = event.dataTransfer.files;
  displayImage(fileList[0])
});

function displayImage(file) {
  if (file.type && file.type.indexOf('image') === -1) {
    console.log('File is not an image.', file.type, file);
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    loadImage(e.target.result);
  };

  reader.readAsDataURL(file);
}

var size = 500;

function loadImage(src) {
  var image = new Image();
  image.crossOrigin = 'Anonymous';

  var img_lr = document.getElementById('img-lr');
  img_lr.src = src;

  image.onload = function() {
    var W, H;
    if (image.width < image.height){
      W = ~~(size * image.width / image.height);
      H = ~~(size);
    }
    else{
      H = ~~(size * image.height / image.width);
      W = ~~(size);
    }
    img_lr.width = W; img_lr.height = H;

    var imgLR = nj.images.read(image);
    console.log(imgLR.selection)
  }
  image.src = src;
}

function upload() {

}
