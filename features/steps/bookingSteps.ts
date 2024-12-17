const { Given, When, Then } = await import('@cucumber/cucumber');

Given('użytkownik jest zalogowany', function () {
  // Implementacja kroku
  console.log('Użytkownik jest zalogowany');
});

When('użytkownik wybiera miejsce docelowe {string}', function (destination: string) {
  // Implementacja kroku
  console.log(`Użytkownik wybiera miejsce docelowe: ${destination}`);
});

When('użytkownik wybiera datę podróży {string}', function (date: string) {
  // Implementacja kroku
  console.log(`Użytkownik wybiera datę podróży: ${date}`);
});

Then('system wyświetla dostępne loty', function () {
  // Implementacja kroku
  console.log('System wyświetla dostępne loty');
});

Given('użytkownik wybrał lot {string} do {string}', function (flight: string, destination: string) {
  // Implementacja kroku
  console.log(`Użytkownik wybrał lot: ${flight} do: ${destination}`);
});

When('użytkownik uzupełnia dane pasażera:', function (dataTable) {
  // Implementacja kroku
  console.log('Użytkownik uzupełnia dane pasażera:', dataTable);
});

When('użytkownik dokonuje płatności kartą {string}', function (cardNumber: string) {
  // Implementacja kroku
  console.log(`Użytkownik dokonuje płatności kartą: ${cardNumber}`);
});

Then('system generuje potwierdzenie rezerwacji', function () {
  // Implementacja kroku
  console.log('System generuje potwierdzenie rezerwacji');
});