import { Given, When, Then, TableDefinition } from "@cucumber/cucumber";
import assert from "assert";

interface Passenger {
    Imię: string;
    Nazwisko: string;
}

let userLoggedIn = false;
let destination = "";
let travelDate = "";
let flightNumber = "";
let passengers: Passenger[] = [];
let paymentSuccess = false;

// Warstwa biznesowa
Given("użytkownik jest zalogowany", () => {
    userLoggedIn = true;
});

When("użytkownik wybiera miejsce docelowe {string}", (selectedDestination: string) => {
    destination = selectedDestination;
});

When("użytkownik wybiera datę podróży {string}", (selectedTravelDate: string) => {
    travelDate = selectedTravelDate;
});

Then("system wyświetla dostępne loty", () => {
    assert(userLoggedIn, "Użytkownik nie jest zalogowany.");
    assert(destination && travelDate, "Brakuje informacji o locie.");
    console.log(`Dostępne loty do ${destination} na ${travelDate}.`);
});

// Warstwa techniczna
Given("użytkownik wybrał lot {string} do {string}", (selectedFlight: string, selectedDestination: string) => {
    flightNumber = selectedFlight;
    destination = selectedDestination;
});

When("użytkownik uzupełnia dane pasażera:", (table: TableDefinition) => {
    passengers = table.hashes().map(row => ({
        Imię: row["Imię"],
        Nazwisko: row["Nazwisko"]
    }));
});

When("użytkownik dokonuje płatności kartą {string}", (cardNumber: string) => {
    paymentSuccess = cardNumber === "1234-5678-9876-5432";
});

Then("system generuje potwierdzenie rezerwacji", () => {
    assert(paymentSuccess, "Płatność nie powiodła się.");
    console.log(`Rezerwacja lotu ${flightNumber} do ${destination} została potwierdzona.`);
});