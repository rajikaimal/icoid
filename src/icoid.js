let express = require("express");
let app = express();

function Icoid() {
	function init(host, port) {
		const uri = `${host}:${port}`;

		return new Promise((resolve, reject) => {
			app.listen(uri, () => {
				console.log(`Icoid running on ${uri}`);
				resolve(app);
			});
		});
	}

	return {
		init: init
	};
}

process.on("uncaughtException", err => {
	return new Promise((resolve, reject) => {
		reject(err);
	});
});

module.exports = Icoid;
