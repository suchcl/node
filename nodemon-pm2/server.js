const fastify = require("fastify")();
fastify.get("/", async () => {
    return {
        status: "success"
    }
});
fastify.listen(5000, () => {
    console.log("server is listening at http://localhost:5000");
});