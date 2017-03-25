  // algo de informacion con la que trabajaremos

  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. llenar la lista con los inventores que nacieron en 1500´s
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

  console.table(fifteen);

  // Array.prototype.map()
  // 2. danos un arreglo de los nombres y apellidos de los inventores
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.log(fullNames);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  // 3. ordena a los invetores por cumpleaños, y los mas viejos
  // const ordered = inventors.sort(function(a, b) {
  //   if(a.year > b.year) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
  console.table(ordered);

  // Array.prototype.reduce()
  // 4. cuantos años vivieron todos los invetores?
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

  console.log(totalYears);

  // 5. ordena los invetores por el año en el que vivieron
  const oldest = inventors.sort(function(a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
  });
  console.table(oldest);

  // 6. crea una lista de los Boulevards en paris que contengan de en donde sea del nombre
  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));
  // const de = links
  //             .map(link => link.textContent)
  //             .filter(streetName => streetName.includes('de'));

  // 7. ordena ejercicio
  // ordena alphabeticamente los nombres
  const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
  });
  console.log(alpha);

  // 8. reduce el ejercicio
  // suma todo lo que haga la persona
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

  const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});

  console.log(transportation);
