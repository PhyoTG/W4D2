const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const answers = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

app.get("/", (req, res) => {
    res.render("form");
})

app.get("/8ball",(req,res)=>{
    res.json({answer: answers[Math.floor(Math.random() * answers.length)]});
})

app.listen(3000);