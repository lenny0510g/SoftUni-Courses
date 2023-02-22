function manOfWar(array) {

    let pirateShipStatus = array[0].split(">").map(Number);
    let warShipStatus = array[1].split(">").map(Number);
    let maxHealthCapacity = Number(array[2]);
    let commandsArray = array.slice(3);
    let gameOver = false;
    let defeat = false;
    let win = false;

    for (let i = 0; i < commandsArray.length; i++) {
        
        if (win === true || defeat === true) {
           return;
        }
        let commands = commandsArray[i].split(" ");
        let actionCommand = commands[0];

        switch (actionCommand) {
            case "Fire":
                let targetIndex = Number(commands[1]);
                let damageDone = Number(commands[2]);
                if (targetIndex >= 0 && targetIndex < warShipStatus.length) {
                    if ((warShipStatus[targetIndex] - damageDone) <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        win = true;
                    } else {
                        warShipStatus[targetIndex] -= damageDone;
                    }
                } else {
                    continue;
                }
                break;
            case "Defend":
                let startTargetIndex = Number(commands[1]);
                let endTargetindex = Number(commands[2]);
                let damageDone1 = Number(commands[3]);
                if (startTargetIndex >= 0
                    && startTargetIndex < pirateShipStatus.length
                    && endTargetindex >= 0
                    && endTargetindex < pirateShipStatus.length) {
                    for (let j = startTargetIndex; j <= endTargetindex; j++) {
                        if (pirateShipStatus[j] - damageDone1 <= 0) {
                            defeat = true;
                            console.log("You lost! The pirate ship has sunken.");
                            break;
                        } else {
                            pirateShipStatus[j] -= damageDone1;
                        }
                    }
                }
                break;
            case "Repair":
                let repairIndex = Number(commands[1]);
                let repairAmount = Number(commands[2]);
                if (repairIndex >= 0 && repairIndex < pirateShipStatus.length) {
                    if ((pirateShipStatus[repairIndex] + repairAmount) >= maxHealthCapacity) {
                        pirateShipStatus[repairIndex] = maxHealthCapacity;
                    } else {
                        pirateShipStatus[repairIndex] += repairAmount;
                    }
                }
                break;
            case "Status":
                let criticalyDamagedPirateShipSections = 0;
                for (let k = 0; k < pirateShipStatus.length; k++) {
                    let section = pirateShipStatus[k];
                    let allowedDamageSection = maxHealthCapacity / 5;
                    if (section < allowedDamageSection) {
                        criticalyDamagedPirateShipSections++;
                    }
                }
                console.log(`${criticalyDamagedPirateShipSections} sections need repair.`);
                break;
            case "Retire":
                break;
        }

    }
    if (!win && !defeat) {
        console.log(`Pirate ship status: ${pirateShipStatus.reduce((a, b) => a + b, 0)}`);
        console.log(`Warship status: ${warShipStatus.reduce((a, b) => a + b, 0)}`);
    }

}
manOfWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])