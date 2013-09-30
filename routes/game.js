
exports.signup = function(req, res){
    res.render("partials/signup");
};

exports.create = function(req, res) {
    res.json(req.body);
}
