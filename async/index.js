const request = (msg) => new Promise(
	(resolve, reject) => {
		setTimeout(
			() => {
				console.log("request finished");
				return msg
			},
			1000)
	}
);

const fun1 = () => {
	console.log("before request");
	request("teste1");
	console.log("after request");
}

const fun2 = () => {
	console.log("before request");
	request("teste2").then(console.log);
	console.log("after request");
}



const main = async () => {
	fun1();
	fun2();
}
main();
