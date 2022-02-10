const idAndName = (req, res, next) => {
    res.locals.name = req.session?.name;
    res.locals.userId = req.session?.userid;

    next();
};

const userCheck = (req, res, next) => {
    if (req.session.name) {
        next();
    } else return res.redirect('/register');
};

const isOwner = (req, res, next) => {
    next();
};

module.exports = {idAndName, userCheck};
