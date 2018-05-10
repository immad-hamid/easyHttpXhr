function easyHttp() {
    this.http = new XMLHttpRequest;
}

// prototype for a get request
easyHttp.prototype.get = function(url, callBack) {
    this.http.open('GET', url, true);

    let self = this;
    
    this.http.onload = function() {

        if (self.http.status === 200) {
            callBack(this.responseText);
        }
        else callBack('An Erorr Occured: ' + self.http.status);
    };

    this.http.send();
}