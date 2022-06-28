const Questions = [{
    id: 0,
    q: "Who is written this Application?",
    a: [{ text: "Ehsan Gazar", isCorrect: false },
        { text: "Hossein Simchi", isCorrect: true },
        { text: "Reza Amini", isCorrect: false },
        { text: "Mohsen Saffar", isCorrect: false }
    ]

},
{
    id: 1,
    q: "1 * 5 ?",
    a: [{ text: "6", isSelected: false },
        { text: "7", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: true }
    ]

},
{
    id: 2,
    q: "6 + 9 ?",
    a: [{ text: "14", isCorrect: false },
        { text: "15", isCorrect: true },
        { text: "17", isCorrect: false },
        { text: "16", isCorrect: false }
    ]
},
{
    id: 3,
    q: "9 * 11 ?",
    a: [{ text: "99", isCorrect: true },
        { text: "98", isCorrect: false },
        { text: "999", isCorrect: false },
        { text: "9", isCorrect: false }
    ]
},
{
    id: 4,
    q: "7 / 1 ?",
    a: [{ text: "14", isCorrect: false },
        { text: "77", isCorrect: false },
        { text: "3.5", isCorrect: false },
        { text: "7", isCorrect: true }
    ]
},
{
    id: 5,
    q: "4 * 7 ?",
    a: [{ text: "24", isCorrect: false },
        { text: "28", isCorrect: true },
        { text: "32", isCorrect: false },
        { text: "36", isCorrect: false }
    ]
},
{
    id: 6,
    q: "1 * 25 ?",
    a: [{ text: "1/25", isCorrect: false },
        { text: "2.5", isCorrect: false },
        { text: "25", isCorrect: true },
        { text: "1.25", isCorrect: false }
    ]
},
{
    id: 7,
    q: "65 / 5 ?",
    a: [{ text: "325", isCorrect: false },
        { text: "14", isCorrect: false },
        { text: "15", isCorrect: false },
        { text: "13", isCorrect: true }
    ]
},
{
    id: 8,
    q: "8 * 9 ?",
    a: [{ text: "72", isCorrect: true },
        { text: "81", isCorrect: false },
        { text: "90", isCorrect: false },
        { text: "100", isCorrect: false }
    ]
},
{
    id: 9,
    q: "100 - 8 ?",
    a: [{ text: "93", isCorrect: false },
        { text: "108", isCorrect: false },
        { text: "92", isCorrect: true },
        { text: "91", isCorrect: false }
    ]
}
]


var start = true;
var answers = [];
function iterate(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";


    const question = document.getElementById("question");



    question.innerText = Questions[id].q;


    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;


    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    op1.addEventListener("click", () => {
        selected = op1.value;
    })
  
    op2.addEventListener("click", () => {
        selected = op2.value;
    })
  
    op3.addEventListener("click", () => {
        selected = op3.value;
    })
  
    op4.addEventListener("click", () => {
        selected = op4.value;
    })


    const evaluate = document.getElementsByClassName("evaluate");


    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

function push1() {
    const op1 = document.getElementById('op1');
    answers.push(op1.innerHTML);
}

function push2() {
    const op2 = document.getElementById('op2');
    answers.push(op2.innerHTML);
}

function push3() {
    const op3 = document.getElementById('op3');
    answers.push(op3.innerHTML);
}

function push4() {
    const op4 = document.getElementById('op4');
    answers.push(op4.innerHTML);
}

function ShowResults(){
    var text = "";
    for (let i = 0; i < answers.length; i++) {
        text += "your answer for question " + i + " is:  " + answers[i] + "\n"; 
    }
    alert(text);
}

const next = document.getElementsByClassName('next')[0];
var id = 0;
next.addEventListener("click", () => {
    start = false;
    if (id < 10) {
        id++;
        iterate(id);
    }
})
    