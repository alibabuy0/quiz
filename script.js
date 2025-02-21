let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let start_button = document.querySelector(".start_button")
let start = document.querySelector(".start")
let title = document.querySelector(".title")
let block = document.querySelector(".block")

class Question{
    constructor(){
        this.a = this.randint(1,30)
        this.b = this.randint(1,30)
        this.signs = ["+", "-", "*", "/"]
        this.current_sign = this.get_random_sign()



        
        this.question = `${this.a} ${this.current_sign} ${this.b}`
        this.correct_answers = this.choose_do()
        this.answers =[
            this.correct_answers,
            this.randint(this.correct_answers-5,this.correct_answers-1),
            this.randint(this.correct_answers-5,this.correct_answers-1),
            this.randint(this.correct_answers-5,this.correct_answers-1),
            this.randint(this.correct_answers-5,this.correct_answers-1),

        ]
        this.shuffle(this.answers)
        }
    
    display(){
        question.innerHTML = this.question
        for (let i=0; i< this.answers.length; i++){
            answers[i].innerHTML = this.answers[i]
        }
    }
    randint(min, max){
        return Math.round(Math.random()*(max-min)+min)

    }
    get_random_sign(){
        return this.signs[this.randint(0,3)]
    }
    choose_do(){
        if(this.current_sign == "+"){
            return (this.a + this.b)
        }
        else if (this.current_sign =="-"){
            return(this.a - this.b)
        }
                if(this.current_sign == "*"){
            return (this.a * this.b)
        }
        else if (this.current_sign =="/"){
            return Math.round(this.a / this.b)
        }

    }
    shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
        let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
        [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
  } 
}

}

let question_counter
let correct_answers_given 
let current_question 

start_button.addEventListener("click", function(){
    start.style.display = "none"
    block.style.display = "flex"
    current_question = new Question()
    current_question.display()
    correct_answers_given = 0
    question_counter = 0

    setTimeout(function(){
        start.style.display = "flex"
        block.style.display = "none"
        title.innerHTML = `<h3> Ви двлм ${correct_answers_given} правильних выдповідей із ${question_counter}
        Точність - ${Math.round(100 * correct_answers_given / question_counter)}) %`

    },10000)
})




for (let i=0; i< answers.length; i++){
            answers[i].addEventListener("click", function(){
                if (answers[i].innerHTML == current_question.correct_answers){
                    correct_answers_given +=1
                    answers[i].style.background = "#00ff00"
                    anime({
                        targets: answers[i],
                        background: "#ffffff",
                        duration: 500,
                        easing: "linear"
                    })

                    
                
                }else{
                    anime({
                        targets: answers[i],
                        background: "#ffffff",
                        duration: 500,
                        easing: "linear"
                    })
                }
                question_counter +=1 
                current_question = new Question()
                current_question.display()
                
            })
        }
