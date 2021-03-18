const Reader = require('./classes/Reader');
const Processor = require('./classes/Processor');
const Table = require('./classes/Table');
const HtmlParser = require('./classes/HtmlParser');
const Writer = require('./classes/Writer');
const PDFWriter = require('./classes/PDFWriter');

const leitor = new Reader();
const escritor = new Writer();

async function main() {
    const dados = await leitor.Read("./data/users.csv");

    const dadosProcessados = Processor.Process(dados);
    const usuarios = new Table(dadosProcessados);

    const html = await HtmlParser.Parse(usuarios);

    PDFWriter.WritePDF(Date.now() +'.pdf', html);
    escritor.writer(Date.now() +'.html', html);

}

main();