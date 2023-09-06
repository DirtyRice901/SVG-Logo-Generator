//  Include packages needed for this file //
const Circle = require("../lib/circle")
const Square = require("../lib/square")
const Triangle = require("../lib/triangle")

// Create a function to generate logo for SVG
function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'Triangle') {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
    } else if (data.shape === 'Square') {
        shape = new Square(data.shape_color, data.text, data.text_color)
    } else {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    }
    return shape.render();
}

module.exports = generateLogo;