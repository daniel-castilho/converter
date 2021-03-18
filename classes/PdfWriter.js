const pdf = require('html-pdf');

class PDFWriter {
    static WritePDF(filename, html) {
        console.log(html);
        pdf.create(html, {}).toFile(filename, (err) => {});
    }
}

module.exports = PDFWriter;