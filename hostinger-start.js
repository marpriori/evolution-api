// Entrada para o "Implante Web App" da Hostinger.
// A Hostinger informa a porta em PORT; o Evolution só lê SERVER_PORT.
process.env.SERVER_PORT = process.env.PORT || process.env.SERVER_PORT || '8080';
require('./dist/main');
