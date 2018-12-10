
const timer = function timer() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;
    }
    m = checkTime(m);

    document.getElementById('timer').innerHTML = `${h}:${m} ${ampm}`
    const t = setTimeout(timer, 1000);
}


module.exports = timer