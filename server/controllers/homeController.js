const { req, res } = require('express');

// view template
exports.index = (req, res) => {
    res.render('home', {title: 'File Upload', active: {Home: true}})
}