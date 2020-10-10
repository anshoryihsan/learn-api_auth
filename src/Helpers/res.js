exports.ok = function (values, res) {
    const data = {
        status: 200,
        values: values,
    };
    res.json(data);
    res.end();
};

exports.clientError = function (values, res) {
    const data = {
        status: 400,
        message: values.sqlMessage,
        code: values.code,
    };
    res.json(data);
    res.end();
};

exports.serverError = function (values, res) {
    const data = {
        satatus: 500,
        message: values.sqlMessage,
        code: values.code,
    };
    res.json(data);
    res.end();
};