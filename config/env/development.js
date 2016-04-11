module.exports = {
    db: "mongodb://localhost:27017/rest-server",
    sessionSecret : 'somesecret',
    facebook: {
        clientID: '932035920185631',
        clientSecret: 'b0a277474c97c0952a6f7fe217970c46',
        callbackURL: 'http://localhost:3030/oauth/facebook/callback',
        profileFields : []
    }
}
