exports.handler = (event, context, callback) => {
    console.log("test");
    callback(null, {
        statusCode: 200,
        body: 'Yey!',
    });
};
