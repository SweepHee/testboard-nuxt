const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const db = require("./models");
const app = express();

db.sequelize.sync({ force: true });

app.use(cors("http://localhost:3000"));
app.use(express.json());

app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("안녕 시퀄라이즈");
});

app.post("/user", async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 12);

        const exUser = await db.User.findOne({
            email: req.body.email,
        });
        if(exUser) { // 이미 회원가입되어있으면
            return res.status(403).json({
                errorCode: 2,
                message: "이미 회원가입 되어있습니다."
            });
        }

        const newUser = await db.User.create({
            email: req.body.email,
            password: hash,
            nickname: req.body.nickname
        });
        return res.status(201).json(newUser);
    } catch(err) {
        console.log(err);
        next(err);
    }
})

app.post("/user/login", (req, res) => {
    req.body.email
    req.body.password
})



app.listen(3085, () => {
    console.log(`백엔드 서버 ${3085}번 포트에서 작동중`);
});