// Require the package
const QRCode = require('qrcode')
const http = require('http')

http.createServer((req,res)=>{
    // Creating the data
let data = {
	name:"Samratini",
	age:100,
	department:"IT",
	id:"20"
}

data = JSON.stringify(data)
  // Generate the QR code
  QRCode.toDataURL(data, (err, qrDataURL) => {
    if (err) {
      console.error('Error generating QR code:', err);
      res.statusCode = 500;
      res.end('Error generating QR code');
      return;
    }

    // Construct the HTML response with the QR code image
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QR Code Generator</title>
      </head>
      <body>
        <h1>QR Code Generator</h1>
        <img src="${qrDataURL}" alt="QR Code">
      </body>
      </html>
    `;

    // Set Content-Type header to indicate HTML response
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML response to the client
    res.end(html);
  });

}).listen(8080)
