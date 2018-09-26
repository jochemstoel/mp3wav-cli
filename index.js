#!/usr/bin/env node
if(process.argv.length<3) console.error('use: mp3wav <filename>')
else require('mp3wav')(process.argv[2])