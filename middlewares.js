const funcionMiddleware = (req, res, next) => {
    const { body } = req;

    if (body.token === undefined) {
        return res.status(500).json({ error: 'No se ha enviado el token' });
    }

    next();
};

module.exports = {
    funcionMiddleware,
}
