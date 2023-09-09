
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "Pemula", level: 0 }, { name: "warga", level: 4 }, 
      { name: "junior", level: 8 }, { name: "senior", level: 12 }, 
      { name: "Master", level: 16 }, { name: "grandmaster", level: 20 }, 
      { name: "new hero", level: 24 }, { name: "Hero", level: 28 }, 
      { name: "Legend", level: 32 }, { name: "new wizard", level: 36 },
      { name: "Wizard", level: 48 }, { name: "new sepuh", level: 52 }, 
      { name: "Sepuh", level: 56 }, { name: "new gods", level: 60 }, 
      { name: "GOD", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
