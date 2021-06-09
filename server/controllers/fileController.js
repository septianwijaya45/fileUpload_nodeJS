const {req, res} = require('express');

// view form index
exports.index = (req, res) => {
    res.render('file', {title:'Form File Upload', active: {File: true}})
}

// post form
exports.post = (req, res) => {
    let sampleFile;
    let uploadPath;

    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send("No File were uploaded")
    }

    // name of the input is sampleFile
    sampleFile = req.files.sampleFile;
    uploadPath = './Images/' +sampleFile.name;

    console.log(sampleFile);

    // use mv() to place file on the server
    sampleFile.mv(uploadPath, function(err){
        if(err) return res.status(500).send(err);
    });

    res.send('File Uploaded!!');
}