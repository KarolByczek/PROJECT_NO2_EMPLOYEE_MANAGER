import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            employees: "EMPLOYEES",
            search_for: "SEARCH FOR:",
            first_name: "FIRST NAME",
            last_name: "LAST NAME",
            salary: "SALARY",
            status: "STATUS",
            birthdate: "BIRTHDAY",
            actions: "ACTIONS",
            clubmember: "CLUB MEMBER",
            carowner: "CAR OWNER",
            confirmation: "YES",
            denial: "NO",
            details: "DETAILS",
            edit: "Edit",
            edit_data: "EDIT EMPLOYEE DATA",
            save_edited: "SAVE THE EDITED DATA",
            remove: "Remove",
            add_a_new: "ADD A NEW EMPLOYEE",
            add_button: "ADD THE EMPLOYEE",
            sorted_by: "SORTED BY:",
            sort_employees_by: "SORT EMPLOYEES IN ASCENDING OR DESCENDING ORDER BY (CLICK)",
            sort_employees_by_other: "CLICK ON ANY COLUMN HEADLINE TO SORT THE LIST (IN ASCENDING OR DESCENDING ORDER)",
            sorting_direction: "SORTING DIRECTION:",
            delete_confirmation: "Are you sure you would like to delete this employee:",
            cancellation: "CANCEL",
            employee_result_one: "{{count}} EMPLOYEE",
            employee_result: "{{count}} EMPLOYEES",
            search_placeholder: "Type any employee data...",
            default: "default",
            ascending: "ascending",
            descending: "descending",
            none: "none",
            add_employee_text: "PROVIDE DATA OF AN EMPLYEE YOU WOULD LIKE TO ADD TO THE LIST:",
            return: "RETURN TO HOME PAGE"
        }
    },
    pl: {
        translation: {
            employees: "PRACOWNICY",
            search_for: "SZUKAJ:",
            first_name: "IMIĘ",
            last_name: "NAZWISKO",
            salary: "WYNAGRODZENIE",
            status: "STATUS",
            birthdate: "DATA URODZIN",
            actions: "AKCJE",
            clubmember: "CZŁONEK KLUBU",
            carowner: "WŁAŚCICIEL SAMOCHODU",
            confirmation: "TAK",
            denial: "NIE",
            details: "SZCZEGÓŁY",
            edit: "Edytuj",
            edit_data: "EDYTUJ DANE PRACOWNIKA",
            save_edited: "ZAPISZ ZMIANY",
            remove: "Usuń",
            add_a_new: "DODAJ NOWEGO PRACOWNIKA",
            add_button: "DODAJ PRACOWNIKA",
            sorted_by: "SORTOWANIE WEDŁUG:",
            sort_employees_by: "SORTUJ PRACOWNIKÓW ROSNĄCO LUB MALEJĄCO WEDŁUG (KLIKNIJ)",
            sort_employees_by_other: "KLIKNIJ W DOWOLNY NAGŁÓWEK KOLUMNY, ABY POSORTOWAĆ LISTĘ (ROSNĄCO LUB MALEJĄCO)",
            sorting_direction: "KIERUNEK SORTOWANIA:",
            delete_confirmation: "Czy na pewno chciałabyś/chciałbyś usunąć tego pracownika:",
            cancellation: "ANULUJ",
            employee_result_one: "{{count}} PRACOWNIK",
            employee_result: "{{count}} PRACOWNIKÓW",
            search_placeholder: "Wpisz dowolne dane pracownika...",
            default: "domyślnie",
            ascending: "rosnąco",
            descending: "malejąco",
            none: "brak",
            add_employee_text: "WPISZ DANE PRACOWNIKA, KTÓREGO CHCIAŁ(A)BYŚ DODAĆ DO LISTY:",
            return: "POWRÓT DO STRONY GŁÓWNEJ"
        }
    },
    de: {
        translation: {
            employees: "MITARBEITERN",
            search_for: "SUCHEN:",
            first_name: "ERSTE NAME",
            last_name: "FAMILIENNAME",
            salary: "LOHN",
            status: "STATEN",
            birthdate: "GEBURTSTAG",
            actions: "AKTIONEN",
            clubmember: "KLUBMITGLIED",
            carowner: "AUTOBESITZER",
            confirmation: "JA",
            denial: "NEIN",
            details: "DETAILEN",
            edit: "Editen",
            edit_data: "EDITEN SIE DIE DATEN VON DER MITARBEITER",
            save_edited: "HALTEN SIE DIE MODIFIZIERTE DATEN",
            remove: "Entfernen",
            add_a_new: "HINFÜGEN EINE NEUE MITARBEITER ZU",
            add_button: "HINFÜGE DER MITARBEITER ZU",
            sorted_by: "SORTIEREN NACH:",
            sort_employees_by: "SORTIEREN DIE MITARBEITERN IN AUFSTEIGENDER ODER ABSTEIGENDER RICHTUNG NACH (KLICKEN)",
            sort_employees_by_other: "CLICKEN SIE AUF EINE GEWÄHLTE KOLONNE ÜBERSCHRIFT FÜR SORTIERUNG (IN AUFSTEIGENDER ODER ABSTEIGENDER RICHTUNG)",
            sorting_direction: "SORTIERUNG RICHTUNG:",
            delete_confirmation: "Sind Sie sicher Sie mochten dieser Mitarbeiter entfernen:",
            cancellation: "ANULIEREN",
            employee_result_one: "{{count}} MITARBEITER",
            employee_result: "{{count}} MITARBEITERN",
            search_placeholder: "Schreiben Sie einen info von einer mitarbeiter...",
            default: "standard",
            ascending: "aufsteigend",
            descending: "absteigend",
            none: "keiner",
            add_employee_text: "SCHREIBEN SIE DIE DATEN VON EINER MITARBEITER SIE MOCHTEN ZUR DIE LISTE HINZUFÜGEN:",
            return: "GEHEN SIE NACH DIE HEIM ZURÜCK"

        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en"
})

export default i18n;