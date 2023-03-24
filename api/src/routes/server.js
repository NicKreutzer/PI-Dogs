
const PORT = 3001;
const server = require('../app');

server.listen(PORT, async () => {
    await sequelize.sync({force: true});
    console.log("Server raised in port " + PORT);
});
