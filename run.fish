function servup
	cd backend
	docker run -t --rm -p 8501:8501 -v "$PWD/tmp/srgan:/models/srgan" -e MODEL_NAME=srgan tensorflow/serving
end

function runjs
	cd backend/js_server
	node index.js
end

