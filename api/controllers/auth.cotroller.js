import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    //db operations
    const { username, email, password } = req.body;

    //has the password
    try {

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //create a new user and save to DB
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });

    console.log(newUser);

        res.status(201).json({ message: "User created successfully!" });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user!" });
    }


    // console.log(req.body);
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try{
        //CHECK IF THE USER EXIST
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) return res.status(401).json({ message: "Invalid credentials!" });

        //CHECK IF THE PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) return res.status(401).json({ message: "Invalid credentials!" });

        //GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: false,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );

        const { password: userPassword, ...userInfo } = user;

        res
           .cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            domain: 'appsupernova.onrender.com',
            maxAge: age,
           })
           .status(200)
           .json(userInfo);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message:"Failed to login!" });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message:"Logout Successful!" });
};
