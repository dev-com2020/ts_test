Feature: Rezerwacja lotów
    Jako klient chcę zarezerwować lot, aby podróżować do wybranego celu.

    # Warstwa biznesowa
    Scenario: Użytkownik wyszukuje dostępne loty
        Given użytkownik jest zalogowany
        When użytkownik wybiera miejsce docelowe "Nowy Jork"
        And użytkownik wybiera datę podróży "2024-12-25"
        Then system wyświetla dostępne loty

    # Warstwa techniczna
    Scenario: Użytkownik rezerwuje lot
        Given użytkownik wybrał lot "Lot 1234" do "Nowy Jork"
        When użytkownik uzupełnia dane pasażera:
            | Imię | Nazwisko |
            | Jan  | Kowalski |
        And użytkownik dokonuje płatności kartą "1234-5678-9876-5432"
        Then system generuje potwierdzenie rezerwacji

