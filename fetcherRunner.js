/**
 * Created by tronguyen on 28/12/16.
 */

let phantomjs = require('phantomjs-prebuilt');
let program = phantomjs.exec('movieUrlFetcher.js');
program.stdout.pipe(process.stdout);
program.stderr.pipe(process.stderr);

program.on('exit', code => {
    console.log("End");
});