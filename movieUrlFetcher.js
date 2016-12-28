/**
 * Created by tronguyen on 28/12/16.
 */
var webPage = require('webpage');

var page = webPage.create();

page.open('http://www.phimmoi.net/phim/night-light-i2-4538/xem-phim.html', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});

page.onResourceRequested = function(requestData, networkRequest) {
    // if (requestData.url.indexOf("redirector.googlevideo") > -1) {
    //     console.log(requestData.url);
    // }
    console.log(JSON.stringify(phantom.cookies));
    console.log(requestData.url);
};


phantom.addCookie({
    'name': 'fx_geoip_ctc',
    'value': 'VN%402b3a03fe',
    'domain': 'www.phimmoi.net'
});
phantom.addCookie({
    'name': 'fx_geoip_host',
    'value': '%2A%40224f0384',
    'domain': 'www.phimmoi.net'
});
phantom.addCookie({
    'name': 'fx_verify_verifycountry',
    'value': 'f12c0a871482920011',
    'domain': '.phimmoi.net'
});

