const mongoose = require("mongoose");

const database = "g2gmgirlschess"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection to database: ${database}`))
.catch((err) => console.log(`Error establishing a connection to database: ${err}`))