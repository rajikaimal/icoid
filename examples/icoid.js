const icoid = require("../index");
const app = icoid();
const port = process.env.PORT || 3009;

console.log('running')

console.log(app.init)

app.init('localhost', port, (re) => {
	console.log(re);
})

// app.init("localhost", port).then(res => {
// 	console.log(res);
// })
// .catch(err => {
// 	console.log(err);
// })

// app.helmet({
// 	frameguard: false
// });
