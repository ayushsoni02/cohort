const { Router } = require('express');
const { adminModel, courseModel } = require("../db");
const adminRouter = Router();
const bcrypt = require('bcrypt');
const { z } = require("zod");

const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const jwt = require('jsonwebtoken');

// bcrypt , zod, jsonwebtoken 

adminRouter.post("/signup", async function (req, res) {

  // const { email, password, firstName, lastName } = req.body;

  // const requiredBody = z.object({
  //   email:z.string().min(3).max(100
  // ).email(), 
  //   firstName:z.string().min(3).max(10),
  //   lastName:z.string().min(3).max(10),
  //   password:z.string()
  //   .min(8,"password should be atleast 8 characters long")
  //   .regex(/[A-Z]/,"password should atleast contains one uppercase letter")
  //   .regex(/[a-z]/,"password should atleast conatains one lowercase letter")
  //   .regex(/[!@#$%^&*(),.?":{}|<>]/,"password should atleast contains one special character")
  // })


  //  const parsedDatawithSucess = requiredBody.safeParse(req.body);

  //  if(!parsedDatawithSucess.success){
  //   res.json({
  //     message:"Incorrect format",
  //     error:parsedDatawithSucess.error
  //   })
  //   return 
  //  }


  const { email, password, firstName, lastName } = req.body;
  // const email = req.body.email;
  // const password = req.body.password;
  // const name = req.body.name;

  const hashedPassword = await bcrypt.hash(password, 5);
  console.log(hashedPassword);


  await adminModel.create({
    email: email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName,

  })

  res.json({
    message: "you have logged in"
  })
})


adminRouter.post("/signin", async function (req, res) {
  //  const email = req.body.email;
  //  const password = req.body.password;

  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    // password:password
  });

  if (!admin) {
    return res.status(403).json({
      message: "User doesn't exist "
    });
  }

  const PasswordMatch = await bcrypt.compare(password, admin.password);

  if (PasswordMatch) {
    const token = jwt.sign({
      id: admin._id
    }, JWT_ADMIN_PASSWORD);
    res.json({
      token: token,
      message: "you have logged in successfully"
    })
  } else {
    return res.status(403).json({
      message: "Incorrect Cerendentials"
    });
  }
})

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price } = req.body;

  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    createrId: adminId
  })

  res.json({
    message: "Course created",
    creatorId: course._id
  })
})

adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { courseId, title, description, imageUrl, price } = req.body;

  if (!courseId) {
    res.status(400).json({
      message: "courseId is required"
    })
  }

  const course = await courseModel.updateOne({
    _id: courseId,
    createrId: adminId
  }, {
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
  });


  res.json({
    message: "Course Updated",
    courseId: course._id
  });
});


adminRouter.get("/course/bulk", async function (req, res) {
  const adminId = req.userId;

  const courses = await courseModel.findOne({
    createrId: adminId
  })
  console.log("adminId:", adminId);
  res.json({
    message: "course updated",
    courses
  })
})

module.exports = {
  adminRouter: adminRouter
}


// harshita's 
// "courseId": "66f8cf2706b062ecf9396998"

// harshita's token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjcxMTVlZWZhYzFiZGNiZjQzOTI3OSIsImlhdCI6MTcyNzU4MTg2NH0.jWbOXeRCCDmjCXxvG7pKco9oJeefeAWg_0F0vN0mGiE

// aditi's token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjhkNmU0NjBkZWRlZGM2M2EwOGY1NSIsImlhdCI6MTcyNzU4NDAxNn0.YIEGMPwCqPIz3VkWQNdKBfxWuQxHdHYsypu6NY0YWms