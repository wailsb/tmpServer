const SerialPort = require('serialport').SerialPort;
const { ReadlineParser } = require('@serialport/parser-readline');
const fs = require('fs');
const path = require('path');

const PORT = 'COM3';
const BAUD_RATE = 9600;
const LOG_FILE = path.join(__dirname, 'log.json');

const port = new SerialPort({ path: PORT, baudRate: BAUD_RATE }); // Updated this line

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

port.on('open', () => {
  console.log(`📡 Listening to Arduino on ${PORT} at ${BAUD_RATE} baud...`);
});

parser.on('data', (data) => {
  console.log(`📊 Received: ${data}`);
  const logEntry = {
    timestamp: new Date().toISOString(),
    data: data.trim()
  };
  saveLog(logEntry);
});

port.on('error', (err) => {
  console.error(`❌ Serial Port Error: ${err.message}`);
});

function saveLog(entry) {
  fs.readFile(LOG_FILE, 'utf8', (err, data) => {
    let logs = [];
    if (!err && data) {
      logs = JSON.parse(data);
    }
    logs.push(entry);
    fs.writeFile(LOG_FILE, JSON.stringify(logs, null, 2), (err) => {
      if (err) {
        console.error(`❌ Error writing log file: ${err.message}`);
      }
    });
  });
}
