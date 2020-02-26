function test(string) {
    // var n = string.length;
    // for(var i = 0; i < n; ++i){
    //     if(string.charAt(i) === "-") {
    //         string = string.slice(0, i) + "_" + string.slice(i + 1
    //             );
    //     }
    // }
    // return string;
    var str = string.replace(/-/g, "_");
    return str;
}