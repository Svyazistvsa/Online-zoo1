import 'normalize.css'
import './style.css'
import headerPanda from './header-panda.jpg'
import logoText from './logoText.png'
import bambuk from './bambuk.png'

document.getElementsByTagName('header')[0].style.backgroundImage = `url("${headerPanda}")`
document.getElementById('logoText').src = logoText;
document.getElementsByClassName('bambuk')[0].src = bambuk;




