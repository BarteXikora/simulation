Zadanie: Wizualizacja Symulacji Zdarzeń

Uruchomienie:

npm install
npm run start


Zrozumienie polecenia:  

Z wykorzystaniem biblioteki @react-three/fiber wykonać autorską symulację zdarzeń: Wewnątrz okręgu znajdują się różnokolorowe piłki odbijające się od siebie nawzajem oraz od ścian okręgu. Na piłki działa też grawitacja. Piłki odbijają się od siebie nawzajem w sposób symulujący faktyczne odbicia, tj. z zachowaniem kąta odbicia. Natomiast przy kontakcie ze ścianą okręgu zamiast odbić się, te zmieniają zwrot wektora ruchu z zachowaniem jego kierunku i prędkości. 


Napotkane problemy:

1. Odbicia między piłkami – napędzanie się piłek nawzajem w sytuacji, w której dochodzi do kolizji, a wektory kolidujących piłek x i/lub y są obydwa dodatnie, lub obydwa ujemne (Na przykład wektor x piłki A i wektor x piłki B są dodatnie). Prowadzi to do rozpędzania się piłek do bardzo dużych prędkości, przez co wypadają poza okrąg.

Rozwiązanie: Piłki nie uwzględniają przy kolizji siły wektora piłki z którą kolidują.

Zalety: Piłki nie wypadają poza okrąg i nie nabierają zbyt dużych prędkości, zachowują się naturalniej.

Wady: Piłki nie przekazują sobie energii przy kolizji, a odbijają się od siebie jak od nieruchomych obiektów.


2. Kolizja z wieloma obiektami na raz – piłki mogą kolidować z wieloma obiektami na raz, funkcja znajdująca aktualne kolizje zwraca ich tablicę.

Testowane rozwiązanie 1: Skrypt oblicza wektory wszystkich kolizji, a następnie  oblicza i zwraca ich średnią (średnią składowych x i średnią składowych y).

Zalety: Hipotetycznie jest no zachowanie jak najbardziej naturalne.

Wady: Piłki wypadające poza okrąg.


Testowane rozwiązanie 2: Wybór jednej kolizji na podstawie największego współczynnika „intersection”. Jest to różnica między odległością piłki od obiektu, od którego ma się odbić i odległości, na której odbicie to powinno zajść. (W przypadku piłek jest to suma ich promieni, w przypadku kolizji piłki z okręgiem – średnica piłki).

Zalety: Brak,

Wady: W tym rozwiązaniu również dochodzi do wypadania piłek poza okrąg, gdy intersection z inną piłką jest większy, niż ze ścianą okręgu.


Wybrane rozwiązanie: Skrypt wybiera w pierwszej kolejności kolizję z okręgiem, a jeśli taka nie występuje to oblicza kolizję z pierwszą piłką z tablicy kolizji.

Zalety: Piłki nie wypadają poza okrąg.

Wady: Piłki ignorują niektóre kolizje.
