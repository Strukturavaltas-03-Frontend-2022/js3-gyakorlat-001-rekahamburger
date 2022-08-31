
const HU = (date, currency, list) => {
    const huObj = new Object();
    const huCurr = new Intl.NumberFormat('hu-Hu', {
        style: 'currency',
        currency: 'Huf'
    });
    huObj.date = date.toLocaleDateString('hu');
    huObj.currency = huCurr.format(currency);
    huObj.list = list[0] + ", " + list[1] + " és " + list[2];
    return huObj;
}




export default HU;
