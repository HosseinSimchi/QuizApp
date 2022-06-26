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
    q: "Tehran is the capital of ... ?",
    a: [{ text: "Thailand", isSelected: false },
        { text: "Iraq", isCorrect: false },
        { text: "Canada", isCorrect: false },
        { text: "Iran", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 3,
    q: "What is the capital of Gujarat1",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 4,
    q: "What is the capital of Gujarat2",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 5,
    q: "What is the capital of Gujarat3",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 6,
    q: "What is the capital of Gujarat4",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 7,
    q: "What is the capital of Gujarat5",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 8,
    q: "What is the capital of Gujarat6",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]
},
{
    id: 9,
    q: "What is the capital of Gujarat7",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
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
        selected = op1.innerText;
    })
  
    op2.addEventListener("click", () => {
        selected = op2.innerText;
    })
  
    op3.addEventListener("click", () => {
        selected = op3.innerText;
    })
  
    op4.addEventListener("click", () => {
        selected = op4.innerText;
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

    const next = document.getElementsByClassName('next')[0];
    var id = 0;
    next.addEventListener("click", () => {
        start = false;
        if (id < 10) {
            id++;
            iterate(id);
        }

    })
    