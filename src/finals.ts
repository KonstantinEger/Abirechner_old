const possibleExams = ['de', 'ma', 'mu', 'en', 'geo', 'phy', 'bio', 'che', 'ge', 'eth'];
const possibleAdvancedCourses = ['de', 'ma', 'en', 'ge', 'phy', 'che', 'bio'];

function checkIfConstellationPossible(con: {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
}): boolean {
  // p1 must be De or Ma
  if (con.p1 !== 'ma' && con.p1 !== 'de') return false;

  {
    // p2 must be other than De or Ma
    const possibleP2 = possibleAdvancedCourses.filter(c => c !== 'ma' && c !== 'de');
    let oneOfP2: boolean = false;
    possibleP2.map(c => {
      if (c === con.p2) oneOfP2 = true;
    });
    if (oneOfP2 === false) return false;
  }

  // if p1 is Ma -> p3 must be De and vv.
  if ((con.p1 === 'ma' && con.p3 !== 'de') || (con.p1 === 'de' && con.p3 !== 'ma')) return false;

  {
    // one of the finals must be from complex II.
    let fromC2: boolean = false;
    for (let c of Object.values(con)) {
      if (c === 'ge' || c === 'geo') fromC2 = true;
    }
    if (fromC2 === false) return false;
  }

  {
    // one of the finals must be science
    let science: boolean = false;
    for (let c of Object.values(con)) {
      if (c === 'phy' || c === 'bio' || c === 'che') science = true;
    }
    if (science === false) return false;
  }

  // check if all subjects can be examined
  for (let c of Object.values(con)) {
    if (possibleExams.includes(c) === false) return false;
  }

  // check for duplicates
  const cArr = Object.values(con);
  if ((new Set(cArr).size !== cArr.length) === true) return false;

  return true;
}

export { possibleAdvancedCourses, checkIfConstellationPossible };
