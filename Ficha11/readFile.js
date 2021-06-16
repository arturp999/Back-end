var fs = require('fs');
var zlib = require('zlib');

function readFilesFS(path) {
    fs.readFile(path, function(err, data) {
        console.log(data.toString());
    });
}

function readFileStream(path) {
    var readerStream = fs.createReadStream(path);
    var writeStream = fs.createWriteStream('copy.txt'); //serve para copiar o ficheiro original

    readerStream.setEncoding('UTF8');

    //On arrival of new data
    readerStream.on('data', function(chunk) {
        //console.log(chunk);
        writeStream.write(chunk, 'UTF8'); //serve para copiar o ficheiro original
    });

    //On completion of the file
    readerStream.on('end', function(chunk) {
        console.log("File Completed");
        writeStream.end(); //serve para copiar o ficheiro original
    });

    //On error while reading
    readerStream.on('error', function(error) {
        console.log(err.stack);
    });
}

//readFileStream("./text.txt");
//readFilesFS("./text.txt");

// PIPE FROM READER TO WRITER
// var readerStream = fs.createReadStream("./text.txt");
// var writeStream = fs.createWriteStream('copy.txt');
// readerStream.pipe(writeStream);

//READ , ZIP, SAVE;
var readerStream = fs.createReadStream("./copy.txt");
var writeStream = fs.createWriteStream('copy.txt.gz');
readerStream.pipe(zlib.createGzip()).pipe(writeStream);

//fs.createReadStream("./copy.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream('unzip.txt'));