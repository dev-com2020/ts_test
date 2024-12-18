"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importowanie wymaganych modułów
const cucumber_1 = require("@cucumber/cucumber");
const assert_1 = __importDefault(require("assert"));
let availableFlights = [
    { flightNumber: '1234', destination: 'Nowy Jork', date: '2024-12-25', availableSeats: 5 },
];
let selectedFlight;
let confirmationCode;
// Definicje kroków
(0, cucumber_1.Given)('użytkownik jest zalogowany', function () {
    console.log('Użytkownik zalogowany.');
});
(0, cucumber_1.When)('użytkownik wybiera miejsce docelowe {string}', function (destination) {
    selectedFlight = availableFlights.find(flight => flight.destination === destination);
});
(0, cucumber_1.When)('użytkownik wybiera datę podróży {string}', function (date) {
    if (selectedFlight && selectedFlight.date !== date) {
        selectedFlight = undefined;
    }
});
(0, cucumber_1.Then)('system wyświetla dostępne loty', function () {
    (0, assert_1.default)(selectedFlight !== undefined, 'Brak dostępnych lotów.');
});
(0, cucumber_1.When)('użytkownik wybrał lot {string} do {string}', function (flightNumber, destination) {
    selectedFlight = availableFlights.find(flight => flight.flightNumber === flightNumber && flight.destination === destination);
});
(0, cucumber_1.When)('użytkownik uzupełnia dane pasażera:', function (dataTable) {
    const passengerData = dataTable.raw();
    console.log('Dane pasażera:', passengerData);
});
(0, cucumber_1.When)('użytkownik dokonuje płatności kartą {string}', function (paymentCard) {
    if (selectedFlight && selectedFlight.availableSeats > 0) {
        confirmationCode = `CONF-${Date.now()}`;
        selectedFlight.availableSeats--;
    }
    else {
        throw new Error('Rezerwacja nie powiodła się.');
    }
});
(0, cucumber_1.Then)('system generuje potwierdzenie rezerwacji', function () {
    (0, assert_1.default)(confirmationCode !== undefined, 'Brak potwierdzenia rezerwacji.');
    console.log('Potwierdzenie rezerwacji:', confirmationCode);
});
