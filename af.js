


function saveAll(dataobjects, cb) {
    dataobjects = dataobjects.filter(ds => ds.isDirt());

    // If all dataobjects are clean invoke callback if provided and return
    if(dataobjects.length === 0) {
        if(typeof cb === "function") cb();

        return;
    }

    var count = dataobjects.length;

    dataobjects.forEach(function(ds) {
        ds.endEdit(endEditHandler);
    })

    function endEditHandler(err) {
        count--;

        if(count === 0 && typeof cb === "function") cb();
    }
}

function callbackIfNoErrors(fn) {
    return function(err) {
        if(!err) fn();
    }
}

function combineWhereClauses(op) {
    return function(...strings) {
        return strings.map(str => "(" + str + ")").join(op);
    }
}

const combineWithAnd = combineWhereClauses(" AND ");
const combineWithOr = combineWhereClauses(" OR ");
const reloadAppIfNoErrors = callbackIfNoErrors(function() {
    window.location.reload();
});

function callbackWhenFieldChange(fieldname, fn) {
    if(typeof fieldname !== "string" || typeof fn !== "function") {
        throw new Error("InvalidArgumentException");
    }

    return function(change) {
        if(change.name === fieldname) fn();
    }
}