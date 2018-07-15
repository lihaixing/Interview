function Vue (options) {
    var self = this;
    this.data = options.data;
    this.methods = options.methods;
    Object.keys(this.data).forEach(function (key) {
        self.proxykeys(key);
    })
}