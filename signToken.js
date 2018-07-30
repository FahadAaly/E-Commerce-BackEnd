 module.exports.signToken=function(id) {
    return jwt.sign({ _id: id,}, config.secrets.session, {
        expiresIn: 60 * 60 * 5
    });
}
