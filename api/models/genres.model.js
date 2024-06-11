const db = require('../../db/connection');

exports.selectGenres = async () => {
    const result = await db.query(`SELECT * FROM genres;`);
    return result.rows;
}