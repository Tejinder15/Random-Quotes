const quotes = [
    {
        line: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        author: "~ Nelson Mandela"
    },
    {
        line: '"The way to get started is to quit talking and begin doing."',
        author: "~ Walt Disney"
    },
    {
        line: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        author: "~ Steve Jobs"
    },
    {
        line: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        author: "~ James Cameron"
    },
    {
        line: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        author: "~ Benjamin Franklin"
    }
    //Further You Can Add More
];

// Selection
const btn = document.querySelector('button');
// const display = document.getElementById('display');
const said = document.getElementById("said");
const whoSaid = document.getElementById("saidby");

// Adding Event
btn.addEventListener("click",()=>{
let randomNumber = parseInt(Math.random() * quotes.length);
let randomQuote = quotes[randomNumber].line;
let saidBy = quotes[randomNumber].author;
said.innerText = randomQuote;
whoSaid.innerText = saidBy;
});