// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/LoginSignup");
//     console.log("Database connected");
//   } catch (error) {
//     console.error("Database connection error:", error);
//     process.exit(1); // Exit the process with failure
//   }
// };

// connectDB();

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// app.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({ message: "User already registered" });
//       alert("ALready Registred User");
//     }

//     const user = new User({ name, email, password });
//     await user.save();
//     res.send({ message: "Successfully Registered" });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post('/login', (req, res) => {
//   const {email,password} = req.body;
//   User.findOne({email:email},(err,user) => {
//     if(user){
//       if(password === user.password){
//         res.send({message : "Login Successful",user:user});
//       }
//       else{
//         res.send({message:"Pass didnt match"})
//       }
//     }
//     else{
//         res.send({message:"user not registered"})
//     }
//   })
// });

// const port = 5001;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/LoginSignup");
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

connectDB();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User already registered" });
      alert("ALready Registred User");
    }

    const user = new User({ name, email, password });
    await user.save();
    res.send({ message: "Successfully Registered" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
