var fs = require('fs');

function createFile(path, size, str) {
    var data = '';
    for (let i = 0; i < size; i++) {
        data = data + text
    }
    fs.writeFile(path, data, function(err) {
        if (err) throw err;
        console.log("File created and written");
    })
}

var text = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.";

createFile('text.txt', 999, text)