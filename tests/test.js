process.env.NODE_ENV = 'test';
const app = require('../index')
//chai tests
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const mongoose = require("mongoose");

chai.use(chaiHttp)

const BlogPost = require('../models/BlogPost')
const User = require('../models/User')
const Topic = require('../models/Topic')



    describe('POST /topics', function () {
        this.timeout(15000)
        
        it('Adds topic to database', (done) => {
            chai.request(app)
                .post('/topics')
                .send({
                    "title": "book",
                    "parentId": "1000"
                })
                .end((err, res) => {
                    should.equal(err, null)
                    res.should.have.status(200) 
                    res.should.be.json;
                    res.body.should.be.a('object')
                    res.body.should.have.property('title')
                    res.body.should.have.property('parentId')
                    done()
                })
        })
    })

describe('GET /Topics', function () {
    this.timeout(15000)
    afterEach(function(done){
            Topic.collection.drop();
            done();
        })
    it('should return all our Topics', (done) => {
        chai.request(app)
            .get('/Topics')
            .end((err, res) => {
                should.equal(err, null)
                res.body[0].should.have.property('title')
                res.body[0].should.have.property('parentId')
                res.should.have.status(200)
                done()
            })
    })
})


describe('POST /blogpost', function () {
    this.timeout(15000)
    
    it('add topic to database', (done) => {
        chai.request(app)
            .post('/blogpost')
            .send({
                title: "ben the worm",
                content: "this is a story a bout a worm named ben",
                topicId: "topic id is here",
                userId: "users id is here"
            })
            .end((err, res) => {
                should.equal(err, null)
                res.should.be.json;
                res.body.should.be.a('object')
                res.body.should.have.property('title')
                res.body.should.have.property('content')
                res.body.should.have.property('topicId')
                res.body.should.have.property('userId')
                res.should.have.status(200)
                done()
            })
    })
})

describe('GET /Blogpost', function () {
    this.timeout(15000)
    afterEach(function(done){
        BlogPost.collection.drop();
        done();
    })
    it('should return all our Blog Posts', (done) => {
        chai.request(app)
            .get('/blogpost')
            .end((err, res) => {
                should.equal(err, null)
                res.body.should.be.a('array')
                res.body[0].should.have.property('title')
                res.body[0].should.have.property('content')
                res.body[0].should.have.property('topicId')
                res.body[0].should.have.property('userId')
                res.should.have.status(200)
                done()
            })
    })
})

describe('POST /user/register',function (){
    this.timeout(15000)
    beforeEach(function(done){
        User.collection.drop();
        done();
      })
    it('Should register a new user', (done)=>{
        chai.request(app)
            .post('/user/register')
            .send({
                email: 'jimdmy@jiimmail.com',
                password: 'pass',
                role: 'teacher'
            })
            .end((err,res) =>{
                should.equal(err, null)
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('token')
                // res.body.should.have.property('role')
                // res.body.role.should.be('teacher')
                done()
            })
    })
})

