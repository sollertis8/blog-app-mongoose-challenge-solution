const chai = require('chai');
const chaiHttp = require ('chai-http');
const faker = require ('faker');
const mongoose = require('mongoose');


const should = chai.should();

const {BlogPost} = require('../models');
const {app, runServer, closeServer} = require ('../server');
const {TEST_DATABAASE_URL} = require('../config');

chai.use(chaiHttp);

