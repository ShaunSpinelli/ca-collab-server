const app = require('./app')
//chai tests
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)



describe('POST /topics', () => {
    // this.timeout(15000)
    it('Adds topic to database', (done) => {
        chai.request(app)
            .post('/topics')
            .send({
                "title": "book",
                "parentId": "1000"
            })
            .end((err, res) => {
                should.equal(err, null)
                res.should.be.json;
                res.body.should.be.a('object')
                res.body.should.have.property('title')
                res.body.should.have.property('parentId')
                res.should.have.status(200)
                done()
            })
    })
})

describe('GET /Topics', () => {
    // this.timeout(15000)
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


describe('POST /blogposts', () => {
    // this.timeout(15000)
    it('add topic to database', (done) => {
        chai.request(app)
            .post('/blogposts')
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

describe('GET /Blogposts', () => {
    // this.timeout(15000)
    it('should return all our Blog Posts', (done) => {
        chai.request(app)
            .get('/blogposts')
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

describe('POST /user/register',()=>{
    it('Should register a new user', (done)=>{
        chai.request(app)
            .post('/user/register')
            .send({
                email: 'jimdmy@jimmail.com',
                password: 'pass',
                role: 'teacher'
            })
            .end((err,res) =>{
                should.equal(err, null)
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('email')
                res.body.should.have.property('role')
                // res.body.role.should.be('teacher')
                done()
            })
    })
})

