/**
 * This is used for experimentation purposes only. Not used in final build.
 * 
 * Requires svg-sprite
 * https://www.npmjs.com/package/svg-sprite
 * 
 * Official Google MD icons: https://material.io/resources/icons/?style=baseline
 */
var SVGSpriter = require('svg-sprite'),
mkdirp = require('mkdirp'),
path = require('path'),
fs = require('fs');

var config = {
    dest: 'out', // Main output directory
    mode: {
        css: true,
        inline: true, // Prepare for inline embedding
        symbol: true, // Create a «symbol» sprite
    }
}

var sassConfig = {
    dest: 'out',
    mode: {
        css: { // Create a «css» sprite
            render: {
                scss: true // Render a Sass stylesheet
            }
        }
    }
}

var standaloneConfig = {
    mode: {
        inline: true, // Prepare for inline embedding
        symbol: true // Create a «symbol» sprite
    }
}

// Create spriter instance (see below for `config` examples)
var spriter = new SVGSpriter(sassConfig);
 
// Add SVG source files — the manual way ...
const basePath = './node_modules/material-design-icons/';
const iconList = [
    "action/svg/production/ic_account_circle_24px.svg"
]

// Test
let xy = "./node_modules/material-design-icons/action/svg/production/ic_account_circle_24px.svg";
spriter.add(xy, null, fs.readFileSync(xy, {encoding: 'utf-8'}));
let xy2 = "./node_modules/material-design-icons/navigation/svg/production/ic_menu_24px.svg";
spriter.add(xy2, null, fs.readFileSync(xy2, {encoding: 'utf-8'}));
 
// Compile the sprite
spriter.compile(function(error, result) {
    /* Write `result` files to disk (or do whatever with them ...) */
    for (var mode in result) {
        for (var resource in result[mode]) {
            mkdirp.sync(path.dirname(result[mode][resource].path));
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }
});
