function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`${monthNumber} : January`);
            break;
        case 2:
            console.log(`${monthNumber} : February `);
            break;
        case 3:
            console.log(`${monthNumber} : March  `);
            break;
        case 4:
            console.log(`${monthNumber} : April`);
            break;
        case 5:
            console.log(`${monthNumber} : May`);
            break;
        case 6:
            console.log(`${monthNumber} : Jun`);
            break;
        case 7:
            console.log(`${monthNumber} : Jully`);
            break;
        case 8:
            console.log(`${monthNumber} : Augest `);
            break;
        case 9:
            console.log(`${monthNumber} : Septbar`);
            break;
        case 10:
            console.log(`${monthNumber} : Octbar`);
            break;
        case 11:
            console.log(`${monthNumber} : Novembar `);
            break;
        case 12:
            console.log(`${monthNumber} : December `);
            break;
        default:
            console.log(`${monthNumber} : Invalid Month Number`);
            break;
    }

}
monthOfYear(2)
monthOfYear(5)
monthOfYear(12)
monthOfYear(15)
monthOfYear(100)