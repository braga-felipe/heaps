const assert = require("assert");
const express = require("express");
const chai = require("chai");
const expect = chai.expect;
const url = `http://localhost:4000`;
const request = require("supertest")(url);

describe("GraphQL", () => {
  it("Returns user details with id = 1", (done) => {
    request.post("/graphql")
    .send({
      query: `{
        getOneUserByID(id: 1) {
          id
          username
          email
          address
          zipCode
          SICK_points
          items_owned {
            id
            name
          }
          items_taken {
            id
            name
          }
          chats {
            id
          }
          img_url
          createdAt
          updatedAt
        }
      }`
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.data.getOneUserByID).to.have.a.property('id')
      expect(res.body.data.getOneUserByID).to.have.a.property('username')
      expect(res.body.data.getOneUserByID).to.have.a.property('email')
      expect(res.body.data.getOneUserByID).to.have.a.property('address')
      expect(res.body.data.getOneUserByID).to.have.a.property('zipCode')
      expect(res.body.data.getOneUserByID).to.have.a.property('SICK_points')
      expect(res.body.data.getOneUserByID).to.have.a.property('items_owned')
      expect(res.body.data.getOneUserByID).to.have.a.property('items_taken')
      expect(res.body.data.getOneUserByID).to.have.a.property('chats')
      expect(res.body.data.getOneUserByID).to.have.a.property('img_url')
      expect(res.body.data.getOneUserByID).to.have.a.property('createdAt')
      expect(res.body.data.getOneUserByID).to.have.a.property('updatedAt')
      done();
    })
  });

  it("Returns all users with their details", (done) => {
    request.post("/graphql")
    .send({
      query: `{
          getAllUsers {
            id
            username
            email
            address
            zipCode
            SICK_points
            items_owned {
              id
            }
            items_taken {
              id
            }
            chats {
              id
            }
            img_url
            createdAt
            updatedAt
          }
        }`
    })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.data.getAllUsers[0]).to.have.a.property('id')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('username')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('email')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('address')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('zipCode')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('SICK_points')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('items_owned')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('items_taken')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('chats')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('img_url')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('createdAt')
      expect(res.body.data.getAllUsers[0]).to.have.a.property('updatedAt')
      expect(res.body.data.getAllUsers).to.be.an('array')
      done();
    })
  });

  it("User able to log in with a valid email and password.", (done) => {
    const query = `mutation {
      userLogin(options: { email: "testemail@test.com", password: "password123"}) {
        errors {
          field
          message
        }
        user {
          username
          id
          email
          address
          zipCode
        }
      }
    }`;
    request.post("/graphql")
    .send({ query })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.data.userLogin.errors).to.equal(null)
      expect(res.body.data.userLogin.user.username).to.not.equal(undefined)
      done();
    })
  });

  it("Create/Register a new user and check if session cookie is created. Random generated email each time.", (done) => {
    function random(max = 10000) {
      return Math.floor(Math.random() * max) + 1
    };
    let randomNumber = random();
    const randomEmail = `testemail${randomNumber}@testingheaps.com`;
    const query = `mutation {
      createUser(options: { username: "Andy", password: "password123" , email: "${randomEmail}", address: "Codeworks Berlin", zipCode: "10967", img_url: "imageURL"}) {
        user {
          username
          email
          address
          zipCode
          img_url
        }
        errors {
          field
          message
        }
      }
    }`;
    request.post("/graphql")
    .send({ query })
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.data.createUser.errors).to.equal(null)
      expect(res.body.data.createUser.user.username).to.not.equal(null)
      expect(res.body.data.createUser.user.email).to.not.equal(null)
      expect(res.header['set-cookie']).to.not.equal(null)
      done();
    })
  });

});
