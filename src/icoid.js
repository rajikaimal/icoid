const express = require("express");
const request = require("request");

function icoid() {
	const app = express();

	function init(host, port, resolve) {
		const uri = `${host}:${port}`;

		// return new Promise((resolve, reject) => {
			app.listen(uri, () => {
				// if(err) reject(err);

				resolve(uri);
			});
		// });
	}

	function mapEndpoints(endPoints) {
		if (!endPoints) return;

		if (app) {
			endPoints.map(endPoint => {
				let type = endPoint.type;
				let url = endPoint.url;
				let mappedUrl = endPont.mappedUrl;

				app.type(url, (req, res) => {
					//fetch with request
				});
			});
		}
	}

	function helmet(config) {
		if (!config) {
			app.use(helmet(config));
		}

		app.use(helmet());
	}

	return {
		init,
		mapEndpoints,
		helmet
	};
}

process.on("uncaughtException", err => {
	return new Promise((resolve, reject) => {
		reject(err);
	});
});

module.exports = icoid;
