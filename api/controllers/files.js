const mongoose = require("mongoose");
const File = require("../models/file");

// exports.get_all = (req, res, next) => {
//     File.find()
//       .then(files => {
//         res.status(200).json({
//           count: files.length,
//           request: "GET",
//           files: files.map(file => {
//             return file
//           })
//         })
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({
//           error: err
//         });
//       });
//   };

exports.create = (req, res, next) => {
  console.log(req)

    const file = new File({
      _id: new mongoose.Types.ObjectId(),
      user_id: req.body.user_id,
      productId: req.body.productId,
      productInfo: req.body.productInfo,
      productName: req.body.productName,
      referenceNumber: req.body.referenceNumber,
      country: req.body.country,
      dateCreated: Date.now(),
      image: req.body.image,
      file: req.body.file
    });
    file.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created File successfully",
          createdFile: {
            _id: result._id,
            user_id: result.user_id,
            productId: result.productId,
            productInfo: result.productInfo,
            productName: result.productName,
            referenceNumber: result.referenceNumber,
            country: result.country,
            dateCreated: result.dateCreated,
            request: {
              type: "GET",
              url: "http://localhost:3000/Files/" + result._id
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

//   exports.update = (req, res, next) => {
//   console.log(req.params.id)
//   console.log(req.body)
//   const id = req.params.id;
//   const updateOps = {
//     total_amount : req.body.total_amount,
//     bidders: req.body.bidders
//   };
//   // for (const ops of req.body) {
//   //   updateOps[ops.propName] = ops.value;
//   // }
//   File.update({ _id: id }, { $set: updateOps })
//     .then(result => {
//       res.status(200).json({
//         message: "File updated",
//         request: {
//           type: "PATCH",
//           url: "http://localhost:3000/Files/" + id
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// };

// exports.delete = (req, res, next) => {
//   const id = req.params.id;
//   File.remove({ _id: id })
//     .then(result => {
//       res.status(200).json({
//         message: "File deleted",
//         request: {
//           type: "POST",
//           url: "http://localhost:3000/Files",
//           body: { name: "String", price: "Number" }
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// };
