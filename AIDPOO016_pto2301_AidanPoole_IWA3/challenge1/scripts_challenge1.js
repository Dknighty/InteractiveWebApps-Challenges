// scripts.js

import { company } from "./configuration_challenge1.js"  //form supposed to be from 
import { year } from './configuration_challenge1.js'

const message = '© ' + company + ' ('+ year  +')'
document.querySelector("footer").innerText= message;