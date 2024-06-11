exports.serverError = (err, req, res, next) => {
    if (err) console.log(err)
    return res.status(500).send({msg: "Internal Server Error"})
}