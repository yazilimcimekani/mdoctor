const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

function Text(message, options) {
    if (!options) return message;
    if (!isObject(options)) throw new Error('Options must be an object');

    if (options.isCode && options.isItalic)
        throw new Error('Cannot be both code and italic');
    if (options.isCode && options.isBold)
        throw new Error('Cannot be both code and bold');

    options.isCode ? (message = `\`${message}\``) : null;
    options.isItalic ? (message = `*${message}*`) : null;
    options.isBold ? (message = `**${message}**`) : null;
    return message;
}

export default Text;
