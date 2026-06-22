import 'normalize.css'
import './style.css'
import bambuk from '../src/bambuk.png'
import coperite from '../src/coperite.png'

document.getElementsByClassName('bambuk')[0].src = bambuk;
document.getElementsByClassName('bambuk')[1].src = bambuk;
document.querySelector('.coperite').style.backgroundImage = `url("${coperite}")`;