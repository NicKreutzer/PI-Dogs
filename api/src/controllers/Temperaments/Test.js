
const { saveApiDataTemp } = require('./saveApiDataTemp');

saveApiDataTemp()
.then((result) => {
    console.log(result);
    process.exit(0);
})
.catch((error) => {
    console.log(error);
    process.exit(1);
});