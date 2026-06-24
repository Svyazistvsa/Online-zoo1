import 'normalize.css'
import './style.css'
import bambuk from '../src/bambuk.png'
import coperite from '../src/coperite.png'
import map from './map.png'
import plus from './plus.png'
import minus from './minus.png'
//import green_plus from './green_plus.png'
//import green_minus from './green_minus.png'

document.querySelector(".map").style.backgroundImage = `url("${map}")`;
document.querySelector(".plus").style.backgroundImage = `url("${plus}")`
document.querySelector(".minus").style.backgroundImage = `url("${minus}")`
//document.querySelector(".plus:active").style.backgroundImage =`url("${green_plus}")`
//document.querySelector(".minus:active").style.backgroundImage =`url("${green_minus}")`
document.getElementsByClassName('bambuk')[0].src = bambuk;
document.getElementsByClassName('bambuk')[1].src = bambuk;
document.querySelector('.coperite').style.backgroundImage = `url("${coperite}")`;