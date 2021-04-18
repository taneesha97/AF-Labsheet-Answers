//console.log('Hello world');

//==================q2=====================
const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());


//====================q3================
/*const fs = require('fs');
const fileName = __dirname + '/text.txt';

//1st
fs.readFile(fileName, (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data.toString());
});

//2nd
const data = fs.readFileSync(fileName);
console.log(data.toString());

*/

//========================q4======================
const fs = require('fs');
const fileName = __dirname + '/text.txt';
const outFileName = __dirname + '/text-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data =>{
    console.log(data.toString());
});



//======================q5===============================
const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(3000);


http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'test/html');

    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello world</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
       }
    }).listen(3000, (err) => {
        console.log('Server is listening to port 3000')
});



