const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + "/dist"));

app.use('/api', createProxyMiddleware({ target: 'https://imageuploader-api.herokuapp.com', changeOrigin: true }))

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
})


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})