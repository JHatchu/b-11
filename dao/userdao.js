const pool = require("../db")

class userDao {
    async addUser(fname, lname, email, password) {
        console.log("userdao...", fname, lname, email, password);
        try {
            const [rows] = await pool.query(
                "INSERT INTO user_master (fname, lname, email, password) VALUES (?, ?, ?, ?)",
                [fname, lname, email, password]
            );
            console.log("user dao=====>", fname, lname, email, password);
            return rows;  // For MySQL, you might want to return the result of the query
        } catch (error) {
            console.log("user insert dao error====>", error);
        }
    }

    async getByEmail(email) {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM user_master WHERE email = ?",
                [email]
            );
            console.log("user dao email get====>", rows);
            return rows[0];  // For MySQL, `rows` is an array of results
        } catch (error) {
            console.log("user dao get email error====>", error);
        }
    }
}

module.exports = new userDao();