var quotes = [{ quote: '"Be yourself; everyone else is already taken."', author: "--Oscar Wilde" },
{ quote: '"Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle But if you can not handle me at my worst, then you sure as hell do not deserve me at my best."', author: "--Marilyn Monroe" }
    , { quote: '"So many books, so little time"', author: "--Frank Zappa" }
    , { quote: '"Two things are infinite: the universe and human stupidity; and Iam not sure about the universe."', author: "--Albert Einstein" }
    , { quote: '"A room without books is like a body without a soul."', author: "--Marcus Tullius Cicero" }
    , { quote: '"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind."', author: "--Bernard M. Baruch" }]
// function quote() {
//     for (var i = 0; i < quotes.length; i++) {
//         document.getElementById("quote").innerHTML = (quotes[i].quote);
//         document.getElementById("author").innerHTML = (quotes[i].author);
//     }
// }
function quote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    document.getElementById("quote").innerHTML = (randomQuote.quote);
    document.getElementById("author").innerHTML = (randomQuote.author);
}





