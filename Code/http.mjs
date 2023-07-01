import http from 'node:http'

const server = http.createServer((req, res) => {

    const obj = {
        name: "Mohamed",
        age: "22",
        wife: "Eman"
    };

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(obj));
})

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

export default http;