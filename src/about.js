// src/hello.js
exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Projeto de e-commerce desenvolvido como forma de avaliação para vaga na Ziro.'
  })
}