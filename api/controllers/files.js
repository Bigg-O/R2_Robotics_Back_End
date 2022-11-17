const mongoose = require("mongoose");
const File = require("../models/file");
const path = require('path');

exports.get_all = (req, res, next) => {
    File.find({user_id : req.params.id})
      .then(files => {
        res.status(200).json({
          count: files.length,
          request: "GET",
          files: files.map(file => {
            return file
          })
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
};

exports.download = (req, res, next) => {
  File.findById(req.params.id)
    .then(file => {
      res.set({
        'Content-Type': file.file_mimetype
      })
      res.sendFile(path.join(__dirname, '../..', file.file_path))
      // res.status(200).json({
      //   file_path: file.file_path,
      //   mime_type: file.file_mimetype,
      // })
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        error: err
      });
    });
};

exports.create = (req, res, next) => {
    const file = new File({
      _id: new mongoose.Types.ObjectId(),
      user_id: req.body.user_id,
      product_info: req.body.product_info,
      product_name: req.body.product_name,
      reference_number: req.body.reference_number,
      country: req.body.country,
      date_created: Date.now(),
      file_path: req.file.path,
      file_mimetype: req.file.mimetype
    })

    file.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created File successfully",
          createdFile: {
            _id: result._id,
            user_id: result.user_id,
            product_info: result.product_info,
            product_name: result.product_name,
            reference_number: result.reference_number,
            country: result.country,
            date_created: result.date_created,
            request: {
              type: "POST",
              url: "http://localhost:3000/Files/"
            }
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  exports.update = (req, res, next) => {
    const id = req.params.id;
    const updateOps = {
      product_name: req.body.product_name,
      reference_number: req.body.reference_number,
      country: req.body.country,
      product_info: req.body.product_info,
    };
    File.updateOne({ _id: id }, { $set: updateOps })
      .then(result => {
        console.log(result)
        res.status(200).json({
          message: "File updated",
          request: {
            type: "PATCH",
            url: "http://localhost:3000/Files/" + id
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  File.remove({ _id: id })
    .then(result => {
      res.status(200).json({
        message: "File deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/Files",
          body: result
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
