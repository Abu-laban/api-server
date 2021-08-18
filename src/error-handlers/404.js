'use strict';

module.exports = (req, res, next) => {
    const err = {
        status: 404,
        route: req.path,
        message: 'NOT FOUND 😱'
    }
    res.status(404).json(err);
}