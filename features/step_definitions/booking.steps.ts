// Importowanie wymaganych modułów
import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';

// Przykładowe dane testowe
interface Flight {
  flightNumber: string;
  destination: string;
  date: string;
  availableSeats: number;
}

let availableFlights: Flight[] = [
  { flightNumber: '1234', destination: 'Nowy Jork', date: '2024-12-25', availableSeats: 5 },
];

let selectedFlight: Flight | undefined;
let confirmationCode: string | undefined;

// Definicje kroków
Given('użytkownik jest zalogowany', function () {
  console.log('Użytkownik zalogowany.');
});

When('użytkownik wybiera miejsce docelowe {string}', function (destination: string) {
  selectedFlight = availableFlights.find(flight => flight.destination === destination);
});

When('użytkownik wybiera datę podróży {string}', function (date: string) {
  if (selectedFlight && selectedFlight.date !== date) {
    selectedFlight = undefined;
  }
});

Then('system wyświetla dostępne loty', function () {
  assert(selectedFlight !== undefined, 'Brak dostępnych lotów.');
});

When('użytkownik wybrał lot {string} do {string}', function (flightNumber: string, destination: string) {
  selectedFlight = availableFlights.find(
    flight => flight.flightNumber === flightNumber && flight.destination === destination
  );
});

When('użytkownik uzupełnia dane pasażera:', function (dataTable: { raw: () => string[][] }) {
  const passengerData = dataTable.raw();
  console.log('Dane pasażera:', passengerData);
});

When('użytkownik dokonuje płatności kartą {string}', function (paymentCard: string) {
  if (selectedFlight && selectedFlight.availableSeats > 0) {
    confirmationCode = `CONF-${Date.now()}`;
    selectedFlight.availableSeats--;
  } else {
    throw new Error('Rezerwacja nie powiodła się.');
  }
});

Then('system generuje potwierdzenie rezerwacji', function () {
  assert(confirmationCode !== undefined, 'Brak potwierdzenia rezerwacji.');
  console.log('Potwierdzenie rezerwacji:', confirmationCode);
});
