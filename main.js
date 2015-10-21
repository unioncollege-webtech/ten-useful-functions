"use strict";
var range = require("./range");
var greaterthan = require("./greaterthan");
var lessthan = require("./lessthan");
var greaterthanequalto = require("./greaterthanequalto");
var lessthanequalto = require("./lessthanequalto");
var largest = require("./largest");
var sentenceCase = require("./sentenceCase");
var snake_case = require("./snakecase");
var camelcase = require("./camelcase");
var kebobcase = require("./kebobcase");

var numRange = range(4,100,6);

var greaterthanFive = greaterthan(5);

var lessthanSix = lessthan(6);

var greaterthanTen = greaterthanequalto(10);

var lessthanequaltoTen =  lessthanequalto(10);

var bigger = largest(17,2);

var base = "A walk to the moon and back.";

var sentence = sentenceCase(base);

var camel = camelcase(base);

var snake = snake_case(camel);

var kebob = kebobcase(camel);
