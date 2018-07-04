const app = require('./app')
//chai tests
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')

chai.use(chaiHttp)


describe('POST /topics', () => {
    // this.timeout(15000)
    it('add topic to database', (done) => {
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
                topicid: "topic id is here",
                userid: "users id is here"
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

// describe('GET /Topics', () => {
//     // this.timeout(15000)
//     it('should return all our Topics', (done) => {
//         chai.request(app)
//             .get('/Topics')
//             .end((err, res) => {
//                 should.equal(err, null)
//                 res.body[0].should.have.property('title')
//                 res.body[0].should.have.property('parentId')
//                 res.should.have.status(200)
//                 done()
//             })
//     })
// })
