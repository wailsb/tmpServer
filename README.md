# Arduino Serial Port Logger

This project is an IoT application that listens to an Arduino device over a serial port. The Arduino device detects temperature and humidity data, sends it to the server, and the server logs the received data to a `log.json` file with timestamps.

## Prerequisites

- Node.js (v22.14.0 or later)
- npm (Node Package Manager)
- Arduino device connected to a serial port

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/tmpServer.git
    cd tmpServer/backendJSON
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

- Update the `PORT` and `BAUD_RATE` constants in `server.js` to match your Arduino's serial port and baud rate.

## Usage

1. Start the server:
    ```sh
    node server.js
    ```

2. The server will listen to the Arduino device and log received data to `log.json`.

## Files

- `server.js`: Main server file that handles serial port communication and logging.
- `log.json`: File where received data is logged with timestamps.

## License

This project is licensed under the MIT License.
