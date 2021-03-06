module.exports = {
  ifeq(a, b, options) {
    if (a !== null && b !== null) {
      if (a.toString() === b.toString()) {
        return options.fn(this);
      }
    }

    return options.inverse(this);
  },
};
