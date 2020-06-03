const client = require("../config/RedisConfig");
const { body, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");

exports.addUser = [
  body("id").isLength({ min: 6, max: 15 }),
  body("name").isLength({ min: 2 }),
  body("email").isEmail(),
  body("phone").isLength({ min: 8 }),

  sanitizeBody("*").escape(),

  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      else {
        const id = req.body.id;
        const { name, email, phone } = req.body;
        client.hmset(
          id,
          ["name", name, "email", email, "phone", phone],
          (err, req) => {
            if (err) return apiResponse.ErrorResponse(res, err);
            else {
              return apiResponse.successResponseWithData(
                res,
                "added successfully",
                req
              );
            }
          }
        );
      }
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.user = [
  (req, res) => {
    try {
      let param = req.params.id;
      client.hgetall(param, (err, obj) => {
        if (err) {
          return apiResponse.ErrorResponse(res, err);
        } else {
          if (!obj) return apiResponse.noResourceFoundResponse(res, "user not found");
          obj.id = param;
          return apiResponse.successResponseWithData(
            res,
            "fetched successfully",
            obj
          );
        }
      });
    } catch (err) {
      return apiResponse.ErrorResponse(res, err);
    }
  },
];


exports.deleteUser = [
    (req, res) => {
      try {
        let param = req.params.id;
        client.del(param, (err, obj) => {
          if (err) {
            return apiResponse.ErrorResponse(res, err);
          } else {
            if (!obj) return apiResponse.notFoundResponse(res, "user not found");
            obj.id = param;
            return apiResponse.successResponseWithData(
              res,
              param +" deleted successfully",
              obj
            );
          }
        });
      } catch (err) {
        return apiResponse.ErrorResponse(res, err);
      }
    },
  ];
  