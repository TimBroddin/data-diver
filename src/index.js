const optional = (obj, path, defaultValue = null) => {
    const steps = path.split('.');
    let o = obj;

    try {
        steps.forEach((step) => {
            if (o instanceof Array) {
                o = o[parseInt(step)];
            } else {
                o = o[step];
            }
        });
    } catch (err) {
        o = defaultValue
    }

    if(typeof o === 'undefined') {
      o = defaultValue;
    }

    return o;
}

export default optional;
