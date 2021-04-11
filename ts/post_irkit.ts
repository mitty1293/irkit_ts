import {SystemConst} form './const.js';
//DOM
const light_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("light_btn");
const ac_on_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ac_on_btn");
const ac_off_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ac_off_btn");
const heater_on_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("heater_on_btn");
const heater_off_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("heater_off_btn");

//eventlistener
light_btn.addEventListener('click', () => {
    fetch(SystemConst.IrkitPara.POST_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(SystemConst.Signals.LIGHT_SIG)
    })
});
ac_on_btn.addEventListener('click', () => {
    fetch(SystemConst.IrkitPara.POST_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(SystemConst.Signals.AC_ON_SIG)
    })
});
ac_off_btn.addEventListener('click', () => {
    fetch(SystemConst.IrkitPara.POST_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(SystemConst.Signals.AC_OFF_SIG)
    })
});
heater_on_btn.addEventListener('click', () => {
    fetch(SystemConst.IrkitPara.POST_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(SystemConst.Signals.HEATER_ON_SIG)
    })
});
heater_off_btn.addEventListener('click', () => {
    fetch(SystemConst.IrkitPara.POST_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(SystemConst.Signals.HEATER_OFF_SIG)
    })
});