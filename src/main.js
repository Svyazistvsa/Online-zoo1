import 'normalize.css'
import './style.css'
import headerPanda from './header-panda.jpg'
import logoText from './logoText.png'
import bambuk from './bambuk.png'
import coperite from './coperite.png'
import ded from './ded.png'
import leafs1 from './leafs1.png'
import flower from './flower.png'
import bush from './bush.png'

document.getElementById('logoBox').style.backgroundImage = `url("${headerPanda}")`
document.getElementById('logoText').src = logoText;
document.getElementsByClassName('bambuk')[0].src = bambuk;
document.querySelector('.coperite').style.backgroundImage = `url("${coperite}")`;
document.getElementById('ded').style.backgroundImage = `url("${ded}")`;
document.querySelector('.one').style.backgroundImage = `url("${leafs1}")`;
document.querySelector('.two').style.backgroundImage = `url("${flower}")`;
document.querySelector('.decorTwo').src = bush;

