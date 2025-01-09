# Adatelemzés és Adatbányászat
## Követelmény

    ...

## Tananyag
### Freestyle

__OLAP (Online Analytical Processing)__ adat elemzés orientált, hatékony lekérdezésre, aggregálásra alkalmas.
Lekérdezés orientált. Ebből jön ki a Data Warehouse.

__OLTP (Online Transaction Processing)__ a hagyományos módosítási funkciókra orientált rendszerek, pl. leltár, rendelés leadás, kis módosítások lehetnek benne

    Adat alacsonyabb dimenzióba hozása
    Kluszterezés (Clustering) és Regresszió (Regression)
    MLP NN (Neurális Háló)
    Konvolúciós háló (képeknél használható)
    Rekurens Neurális Háló (RNN) - a múltbeli történéseket hozzácsapja a friss jelenlegi adathoz
    
    Mean: Absztrakt fogalom ami egy valószínűségi változó középértékét mutatja. Ez az érték, amihez az átlagok tartanak a végtelenbe, az eloszlás középértéke.

### Eloszlás négyzet
```
    S^2 = 1 / (N - 1) * Sum[i=1 -> N]((xi - x)^2)
```
Ez a négyzeten adja az eloszlást, szórást

Anaconda Cloud - Python fejlesztői környezet, ami a felhőbe van

CDF (Cumulative distribution):
    `F(x) = P(xi <= x)`, a valószínűség, hogy az adott x értéknél nagyobb számot kapunk

F(x) deriváltja a sűrűségfüggvény, f(x), ami mutatja a valószínűségek eloszlását.
A sűrűség alatti terület: 1, mivel a valószínűségek egy egészet alkotnak.

### Normál eloszlás

Akkor a legnagyobb, ahol az `x` megegyezik a várható értékkel, `ɳ` (mű)
Standard alak, ha `ɳ = 0` és `x = 1`

Ha én azt az átlagot vizsgálom, hogy hol helyezkednek el a tengelyen, akkor azt veszem észre, hogy az átlagnak az elhelyezkedése harang görbére fog hasonlítani. Minél több a mintavétel, annál jobban közelíti a normál eloszlást

### T próba (T-test)

Az átlag értékek illeszkednek-e egy megadott normál eloszlásra.
Ezt egy standard 0-1 eloszláshoz lehet igazítani
`t = (x - ɳ) / (s / n^(1/2))`
- n - darabszám,
- ɳ - a megadott, várható érték, elvárt érték
- x - a ténylegesen mért érték
- s - az empírikus szórás

Konfidencia szint (p-value)

### Korreláció (Correlation)
Ha X és Y függetlenek, akkor a korreláció közel 0, mert ilyenkor az értékek kioltják egymást. Ha függenek egymástól, akkor egy nagy pozitív, vagy negatív szám lesz.

## Adat tárházak
A nagy mennyiségű adatok tárolására szolgál, elemzési feladatra.
Ez az OLAP-ból jött ki.
- Adatelemzés orientált,
- heterogén forrásokból gyűjt össze mindent,
- hisztorikus adat, hogy a múltból tudjon elemezni és
- esetleg több dimenziós lehet

_[A PPT-ben az ábra a fontos az OLTP és OLAP belső működését mutató]_

Az OLAP Datasource, már meglévő adatbázisokból kapja az adatát

ETL modul 3 funkció rövidítés:
- Extraction: kiveszi az OLTP-ből az adatot és áthozza egy munkaasztalra, ahol a következő lépés jön,
- Transzformációkat végez el rajta, hibát szűr ki, ha kész adat tisztítás.
- Load, betöltés

_EDW (Enterprise Data Warehouse)_

Adat kocka model, nem több tábla van, hanem egy kocka, minden kocka az üzlet egy szempontja, egy témakör összes adata.

_[MD Cube Components (star model):]_

_[MD Cube Components (snowflae model):]_
Ez az elterjedtebb

### MDX
(MultiDimensional eXpression)
#### MD Operations
__Slice and Dice__, kiválasztok egy metszetet, vagy egy darabot a kockából.

__Roll up__, aggregál, összesít, egy részletező adatról átmegyünk egy összesítőbb adatra, pl. városról ország szintre. A keletkezett nagy cella értékre a kicsik befoglalt értékre. A cellák száma csökkent, de az összeg állandó.

__Drill down__, részletezőbb szinre térünk át, nagyból megyünk át kicsire, dimenzió nem változik, cellák száma nő, az értékek kisebbek lesznek. A _roll up_ ellentetje

__Fold__, dimenziókat elhagyunk, bevonjuk őket (mintha __*GROUP BY*__ lenne). A cellák értéke aggregálással növekednek, de az össz érték továbbra is változatlan, kevesebb cellákba kerülnek bele.

__*MDX Language Adat kocke lekérdezi nyelv*__

_Measure_ dimenzió, amit behoz az MDX nyelv

### Klaszterezés (Cluster)

#### Áttekintés

<u>__Adatbányászat__</u>: Nagy mennyiségű forrás adatból, valamilyen módszerrel emeljük ki a lényeges szabályokat. <br/>
<u>__Klaszterezés__</u>: Egymáshoz hasonló tulajdonságú elemek vannak egy csoportba.
Ha csoportok vannak az elemiek helyett, az egyszerűsíti az adatrendszert. Előkészítő lépés. Másik célja a megjelenítés támogatása (SOM [Self Organization Map]). <br/>
<u>__Outlayer (kívülálló)__</u>: Kikeressük azokat az elemeket, amelyek nagyon eltrének a klaszterektől, a többiektől. <br/>
<u>__Classification (Csoport)__</u>: Az osztályozásnál vannak eleve megadott kategóriáink. <br/>
<u>__Prediction__</u>: A kategória megbecslése, egy javaslat a kategóriára. <br/>
<u>__Regression (Regresszió)__</u>: Az eset amikor egy valós értéket kell megjósolnom. <br/>
<u>__Association Rules (Asszociációs szabályfeltárás)__</u>: A piaci kosárelemzés, ami azt vizsgálja mit vesznek az emberek együtt (Ha valaki vesz A terméket, akkor fog venni B-t is). 
__Apriori-elv__: Gyakori halmaznak minden részhalmaza is gyakori.

#### Clustering

<u>__HAC__ (Hierarchikus Összeillesztő Klaszterezés)</u>: Két kicsi klasztert egy nagyobb, közösbe hoz össze. Induláskor minden egyes elem egy önálló klaszter lesz. Minden lépésben a két legközelebbit vonjuk össze. Minden lépésben eggyel csökken a klaszterszám. Plussz elem, a leállási feltéte, hogy mikor fog leállni az összevonásokkal.
2 leállási feltétel szokott lenni:
- Távolság, amikor még összevonom,
- Klaszter darabszám,

Vannak módszerek a klaszterezés jóságának mérésére, mint Sziluett módszer, Könyök módszer (Elbow). <br/>
Dendrogram, a klaszterek összevonási lépéseinek ábrázolása. Egész jól leírja egy szakembernek az elemek elhelyezkedését a térben.
[13. oldal a PPT-ben]

<u>__k-means__ metódus</u>: A klasztereket klaszter középpontokkal írja le. Célja a középpontok optimállis helyének a meghatározása.
Induláskor random módon elhelyezik. Akkor van jó helyen egy pont, ha a tagjainak az átlagánál helyezkedik el; cél, hogy ezt megkeressük. Elérés: Vesszük az aktuális pontokat és minden egyes adatelemet hozzárendelem a legközelebbi klaszterhez, középponthoz. Minden halmazra kiszámolja a tagok átlagát. Akkor állhatunk meg, ha az átlag megegyezik a mostani középpont pozíciókkal. Ha nem teljesül, akkor az átlag pozícciók lesznek az új középpont pozíciók. A mozgatás során megváltozhat a tagság halmaz. <br/>
Célfüggvény: ...

### Döntési fák

Naív, mert feltételezi, hogy az egyes attribútumok értékei függetlenek.

<u>__ID3__</u>: Minden egyes példában egy feature vektor van és egy kategória. Minden egyes csomópont előtt egy elemi döntés van, mindig 1 attribútum lesz társítva. A teszt az attribútum értékét veszi. Az elágazás az attribútum érték eltérés.
Adat előkészítésnél egy fontos lépés a diszkretizálás (folytonosból diszkrét lesz).
Ha az odajutó adatrész homogén, csak az a kategória fordul elő benne. <br/>
Az ID3 célja minimális mélységű fa előállítása ---> olyan attribútum, amivel gyorsan tudunk dönteni, tehát az adathalmaz hamar homogénné válik a kategória szerint
Azt az attribútummot veszem, amelyik a leghomogénebben bontja fel az oda jutó adathalmazt.
Megmérjük az egyes ágak (részhalmazok) homogenitását és ebből kapunk egy eredő homogenitást.
A rendezetlenséget az entrópiával lehet mérni.
Az a győztes attribútum, ahol az entrópia minimális.

##### Megjegyzés: _Random Forest_, több szempontot tudunk figyelembe venni általa. A gépi tanulásban gyakori az együttes szintű döntés, mert mindegyik komponens egy más szempont szerint vizsgál, majd döntéskor a dominánsabb kerül kiválasztásra. Mindegyik az attribútumoknak egy random részhalmazát veszi alapul (_mert van olyan, amelyik csak zaj_). Nem mindegyiket fogjuk ugyan azzal a tanítóhalmazzal betanítani.

### SVM (Support Vector Machine) classifier

Keres egy szeparátor síkot és a döntést úgy hozza meg, hogy a síkhoz mérten veszi a ... . <br/>
Cél a legnagyobb margójú (határsávú) sík megkeresése. A síknak a normálvektoros alakját vesszük alapul.
Az előjel mutatja hogy a sík felett, vagy alatt van a pont, a szám pedig a pont és sík közötti távolságot.

#### SVM Kernel approach

Új dimenzió az osztályozóhoz. A transzformációval átviszem a pontokat egy magasabb dimenzióba, így a szeparátor sík használható optimális döntési síknak nem lineáris eloszlásnál.

### Neurális hálók
_(Perceptron model, MLP [Multilayer Perceptron neural network])_

Elsősorban függvény approximációnak készült.
Ha nem lenne aktivációs függvényem, akkor csak lineáris approximációt tudnák végezni. Nem lehetne görbét alkotni vele. Célja megtalálni a legjobb súlyokat az élekhez, ezt iteratív módon, lépésenként teszi. A gradiens a legmeredekebb változás irányát adja meg. A háló kiszámolja a mintától való eltérést, annak veszi a deriváltjait és ... .

**Backpropagation**, a súlykiszámítás visszafele megy, az output neutronoktól az input neutronok felé... <br/>
**<u>Overfitting</u>:** Amikor a háló túltanul, az ismert pontokra tökéletesen illeszkedik, de az ismeretlenekre egyáltalán nem illeszkedik.<br/>
**<u>Regularizáció</u>**: A szabályosságot emeli ki, az egyszerűséget jelenti, annak kiemelésére szolgál. Mindig egyszerűsítést jelent<br/>

A teszt adat és tanító adatok általában 20%-80% vagy 30%-70%-ban vannak kettéválasztva, ahol a teszt adat a kevesebb. Nem csak a tanítás legvégén kell teszteket csinálni, mert ha befejezésnél kiderül, hogy nem jól tanult be, már nem túl sok mindent lehet vele kezdeni. A tanító adatokból lecsípünk egy validációs részt, amit tanítás közben, menet közben adunk be.
Ha elkezd csökkenni a validációs adatokon mért jóság, akkor tudjuk, hogy megállhatunk a tesztekkel, ha nem így teszünk túltanulhat a háló.
Crossfault validation, a tanító adatok (***T***) és validációs adatok (***V***) ciklikusan mennek körbe, amíg a tanító adat el nem tűnik.<br/>
*[ V | T | T | T ]<br/>
 [ T | V | T | T ]<br/>
 [ T | T | V | T ]<br/>
 [ T | T | T | V ]*<br/>
Accuracy (pontosság): Az esetek hány %-ban találta el jól.<br/>
Confusion matrix: Az esetek egy mátrixban vannak gyűjtve, eltalált esetek számossága alapján...<br/>
<table>
    <tbody>
        <tr>
            <td>C2</td>
            <td>5</td>
            <td>10</td>
        </tr>
        <tr>
            <td>C1</td>
            <td>20</td>
            <td>10</td>
        </tr>
        <tr>
            <td></td>
            <td>C1</td>
            <td>C2</td>
        </tr>
    </tbody>
</table>