const brusselsTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Brussels" });
const anchorageTime = new Date().toLocaleString("en-US", { timeZone: "America/Anchorage" });
const reykjavikTime = new Date().toLocaleString("en-US", { timeZone: "Atlantic/Reykjavik" });
const stpetersburgTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" });

console.log(`Brussels: ${brusselsTime}`);
console.log(`Anchorage: ${anchorageTime}`);
console.log(`Reykjavik: ${reykjavikTime}`);
console.log(`Saint-Petersburg: ${stpetersburgTime}`);
