let quote = []
const $layoutQuote = document.getElementById('layout-quote')

//인덱스로 접근한 쿼츠를 변수에 담고 해당 내용을 랜더한다. 
//로드 할 때마다 다시 그릴 수 있으니, 랜더에 값을 할당해버림
function renderQuote(){
    $layoutQuote.innerHTML = `<div class="quote-text">${quote[randomIndex()].text}</div>
    <div class="quote-author">${quote[randomIndex()].author}</div>`
}

//index로 접근하기 위한 랜덤 인덱스 함수
function randomIndex(){
    return Math.floor(Math.random() * 10);
}

function getQuote() {

    quote = [{
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle"
      },
      {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
      },
      {
        "text": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster"
      },
      {
        "text": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
      },
      {
        "text": "What you give is what you get.",
        "author": "Byron Pulsifer"
      },
      {
        "text": "We can only learn to love by loving.",
        "author": "Iris Murdoch"
      },
      {
        "text": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark"
      },
      {
        "text": "You'll see it when you believe it.",
        "author": "Wayne Dyer"
      }]


    renderQuote()    
    }

    window.onload = getQuote();