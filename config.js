 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['918360234087', 'WHITE', true], 
  ['2347045035241', 'Excel', true],
  ['9231840709', 'Xcel', true], 
  ['947894815', 'cell', true],
  ['233536672', 'ell', true],
  ['233531655067', 'll', true],

] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['923184070915', '94789481495', '923184474176','233531910067','233208179431'] 
global.prems = ['2347045035241','2348021779696','2347045038687', '','']
global.allowed = ['2347045035241', '2348021779696', '', '9183602355','']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'STAR-MD-V2'
global.premium = 'true'
global.packname = 'Excel' 
global.author = '@Excel' 
global.menuvid = 'https://i.ibb.co/HtT3vjm/goku-gif-3.gif'
global.igfg = 'https://chat.whatsapp.com/EmP3syvou18HrZk6R6nTAK' 
global.dygp = 'https://chat.whatsapp.com/Lg0lY4M1k8oDMYzylg86xs'
global.fgsc = 'https://chat.whatsapp.com/Lg0lY4M1k8oDMYzylg86xs' 
global.fgyt = 'https://github.com/Xcelsama'
global.fgpyp = 'https://github.com/Xcelsama/STAR-MD-V2'
global.fglog = 'STAR.jpg' 
global.thumb = fs.readFileSync('./STAR.jpg')


global.wait = '*🕣 _STAR IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '🔜'
global.dmoji = '🎈'
global.done = '☑️'
global.error = '❎' 
global.xmoji = '⤵️' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
