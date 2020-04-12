const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync();

app.use(express.json());

// form을 통해서 전송된 데이터를 req.body로 받으려면 아래 선언해줘야 함.
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) => {
    res.send("안녕 시퀄라이즈");
})

app.post("/user", async (req, res, next) => {
    try {
        const newUser = await db.User.create({
            where: {
                email: req.body.email,
                password: req.body.password,
                nickname: req.body.nickname
            }
        });
        res.status(201).json(newUser);
        // send는 문자열로 응답, json은 json형태로 응답
    } catch(err) {
        console.log(err);
        next(err);
    }


})

app.listen(3085, () => {
    console.log(`백엔드 서버 ${3085}번 포트에서 작동중`);
});