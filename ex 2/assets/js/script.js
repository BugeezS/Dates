function daysSince(dateString) {
    const birthDate = new Date(dateString);
    const today = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceBirth = Math.round((today - birthDate) / msPerDay);
    return daysSinceBirth;
  }
  
  const daysSinceBirth = daysSince("2001-09-30");
  console.log(`Nombre de jours depuis la naissance: ${daysSinceBirth}`);