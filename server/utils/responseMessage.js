exports.responseSender = (res, code, success, message, data) => {
    return res.status(code).json({
        success: success,
        message: message,
        data: data
    })
}
exports.errorSender = (res, code, success, error) => {
    return res.status(code).json({
        success: success,
        message: error.message,
    })
}