
const host = "raja.db.elephantsql.com";
const database = "mtwbayea";
const user = "mtwbayea";
const password = "eNSerAddkfrCPWdxcyT9iNnYZ9ZPYVvB";



const pgp = require('pg-promise') ({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);


module.exports = db;