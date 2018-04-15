class Logger{
    constructor(args) {
        if(args == null){ args = {}; }

        if(args.log == null){ args.log = true; }
        if(args.info == null){ args.info = true; }
        if(args.debug == null){ args.debug = true; }
        if(args.warn == null){ args.warn = true; }
        if(args.error == null){ args.error = true; }

        if(args.addName == null){ args.addName = true; }

        if(args.logName == null){ args.logName = "LOG"; }
        if(args.infoName == null){ args.infoName = "INFO"; }
        if(args.debugName == null){ args.debugName = "DEBUG"; }
        if(args.warnName == null){ args.warnName = "WARNING"; }
        if(args.errorName == null){ args.errorName = "ERROR"; }

        if(args.prefix == null){ args.prefix = ""; }
        if(args.dynamicPrefix == null){ args.dynamicPrefix = ()=>{ return "-"; } }
        if(args.join == null){ args.join = ""; }
        if(args.output == null){ args.output = console.log; }

        this.args = args;
    }

    log(...data){
    if(this.args.log) {
    data = data.join(this.args.join);
    this.send(this.args.logName, data);
}
}
info(...data){
    if(this.args.info) {
        data = data.join(this.args.join);
        this.send(this.args.infoName, data);
    }
}
debug(...data){
    if(this.args.debug) {
        data = data.join(this.args.join);
        this.send(this.args.debugName, data);
    }
}
warn(...data){
    if(this.args.warn) {
        data = data.join(this.args.join);
        this.send(this.args.warnName, data);
    }
}
error(...data){
    if(this.args.error) {
        data = data.join(this.args.join);
        this.send(this.args.errorName, data);
    }
}

send(name, data){
    data = this.args.prefix + " " + this.args.dynamicPrefix() + " " + data;
    if(this.args.addName){ data = name + " " + data; }
    this.args.output(data);
}
}

module.exports = Logger;