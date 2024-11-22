# Administrátorská dokumentace

## 1. Úvod

Administrátorský panel aplikace Scrum Geniuses je dostupný na [admin.scrumgeniuses.cloud](https://admin.scrumgeniuses.cloud). Administrátoři mají na starosti správu uživatelů, článků a vydání.

---

## 2. Administrační panel

Administrační panel je přístupný na adrese [admin.scrumgeniuses.cloud](https://admin.scrumgeniuses.cloud).  
Implementovali jsme všechny datové modely podle našeho ER modelu, včetně relací.

### Hlavní vlastnosti:

- Administrace je uživatelsky přívětivá (user-friendly) a nabízí flexibilní možnosti práce.
- Možnost vytvářet a spravovat články, vydání časopisů a přidělovat role.
- Systém je navržen s ohledem na budoucí rozšiřitelnost.

---

## 3. Přístup do administračního panelu

Přístup do administrace je omezen na následující uživatelské údaje:

- **E-mail:** checkmyadmin@test.cz
- **Heslo:** test

Administrátoři s tímto přístupem mají pouze čtecí a přidávací práva a nemohou:

- Upravovat data.
- Mazat data.
- Editovat obsah jakéhokoli objektu.

Pro plný přístup je nutné kontaktovat tým **Scrum Geniuses** nebo lektora.

### Poznámka:

Plný přístup zahrnuje:

- Možnost vytvářet nové datové struktury.
- Možnost upravovat a mazat stávající data.
- Oprávnění ke změnám datových modelů.

---

## 4. Správa kolekcí

### Kolekce Autor, Redaktor, Recenzent

- Tyto kolekce obsahují seznam uživatelů v jednotlivých rolích.

### Vydání časopisu

- Pro správu vydání časopisu otevřete kolekci „Vydání časopisu“.
- Můžete přidávat nové vydání.

### Článek

- Kolekce „Článek“ obsahuje všechny články aplikace.
- Umožňuje sledovat stav článků a pripadne pridavat dalsi clanek.

---

## 5. Nastavení oprávnění

### Role a oprávnění

- Přístup k administračnímu panelu je omezen na základě uživatelských práv.
- Omezená oprávnění (přístup checkmyadmin@test.cz) umožňují pouze čtení a přidání dat.

### Plný přístup

Plný přístup k administraci je vyhrazen týmu Scrum Geniuses nebo schválenému lektorovi. Tento přístup zahrnuje možnost:

- Vytvářet, upravovat a mazat jakákoli data.
- Modifikovat datové modely, přidávát uživatelů, mazát uživatelů, měnit informací a vzhledu.

## 6. Řešení problémů

### Diagnostika

- **Problémy s přihlášením:** Zkontrolujte, zda má uživatel správně nastavenou roli.
- **Chybějící data:** Zkontrolujte historii změn kolekce.

### Podpora

- **E-mail:** choloyan@student.vspj.cz

---

## P.S.

Tato dokumentace odráží aktuální funkcionalitu aplikace po prvním sprintu vývoje. Budoucí aktualizace a rozšíření funkcí budou postupně dokumentovány.
