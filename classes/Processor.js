class Processor {
    static Process(data) {
        const line = data.split('\r\n');
        let rows = [];

        line.forEach((row) => {
            const arr = row.split(',');
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;