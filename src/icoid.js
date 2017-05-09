function Icoid() {
	const express = require("express");
	const app = express();
	const request = require("request");

	function init(host, port) {
		const uri = `${host}:${port}`;

		return new Promise((resolve, reject) => {
			app.listen(uri, () => {
				console.log(`Icoid running on ${uri}`);
				resolve(app);
			});
		});
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

	return {
		init: init,
		mapEndpoints: mapEndpoints
	};
}

process.on("uncaughtException", err => {
	return new Promise((resolve, reject) => {
		reject(err);
	});
});

module.exports = Icoid;
