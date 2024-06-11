const { selectGenres } = require("../models/genres.model")


exports.getGenres = async (req, res, next) => {
    const genres = await selectGenres();
    res.status(200).send({genres})
}