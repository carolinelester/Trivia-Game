$(document).ready(function(){

var currentQuestion; 
var currentAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time;
var answered; 
var UserSelect; 
var messages = {
    correct: "Correct!"+ "<br>" + "That's what I do: drink and know things", 
    incorrect: "Incorrect!" + "<br>" + "You know nothing Jon Snow",
    endTime: "The night is dark and full of terrors" + "<br>" + "You ran out of time!",
    finished: "How did you do?"
}

var triviaQuestions = [
    {   question: "Who was responsible for the creation of the Night King?",
        answerList: ["The Lord of Light", "The Children of the Forest", "The Drowned God", "The First Men"],
        answer: 1,
        image: ,
        answerText: ,
    },
    {   question: "What was Hodor called before he got his tragic door-holding nickname?",
        answerList: ["Wylis", "Horys", "Myrys", "Gladys"],
        answer: 0,
        image: ,
        answerText: ,
    },
    {   question: "Who said: 'I don’t plan on knitting by the fire while men fight for me'?",
        answerList: ["Sansa Stark", "Ser Brienne of Tarth", "Olenna Tyrell", "Lyanna Mormont"],
        answer: 3,
        image: ,
        answerText ,
    }, 
    {   question: "Where is the House of Black and White, the training temple of the Faceless Men?",
        answerList: ["Quarth", "Braavos", "Meereen", "Unknown"],
        answer: 1,
        image: ,
        answerText: ,
    },
    {   question: "Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands?",
        answerText: ["his brother", "his uncle", "his nephew", "his counsin"],
        answer: 0,
        image: ,
        answerText: ,
    },
    {   question: "What is the name of Arya’s sword?",
        answerText: ["Ice", "Pointy", "Fang", "Needle"],
        answer: 3,
        image: ,
        answerText: ,
    },
    {   question: "In which King's Landing slum did Gendry grow up?",
        answerText: ["Flea Bottom", "Rat Bottom", "Rhaenys's Hill", "Dragonpit"],
        answer: 0; 
        image: ,
        answerText: ,
    },
    {   question: "Who was Ned Stark’s predecessor as Robert Baratheon’s Hand?", 
        answerText: ["Jaime Lannister", "Jon Arryn", "Tywin Lannister", "Ser Jorah Mormont"],
        answer: 1; 
        image: , 
        answerText: , 
    }, 
    {   question: "How many kings and queens of Westeros did Lord Varys serve?",
        answerText: ["2", "3", "4", "5"],
        answer: 2, 
        image: , 
        answerText: "Lord Varys served 4 kings: the Mad King, Robert, Joffrey, Tommen."
    }, 
    {   question: "The King Beyond the Wall, Mance Rayder, was roasted alive on whose orders?",
        answerText: ["Cersei Lannister", "Daenerys Targaryen", "Stannis Baratheon", "Roose Bolton"], 
        answer: 2, 
        image: , 
        answerText: ,
    },
    {   question: "What is the name of Jon Snow's Direwolf?", 
        answerText: ["Grey Wind", "Graham", "Ghost", "Gargameln"], 
        answer: 2, 
        image: , 
        answerText: ,
    }, 
    {   question: "What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?", 
        answerText: ["Wildfire", "Dragonfire", "Godsfire", "Pantsonfire"], 
        answer: 0, 
        image: , 
        answerText: ,
    },
    {   question: "What does Daenerys mean when she says 'Shekh ma shieraki anni' to Khal Drogo?",
        answerText: ["Moon of my life", "Sound did silence me", "My sun and stars", "Light of my Life"],
        answer: 2,
        image: , 
        answerText: , 
    },
    {   question: "Who said: 'It's not easy being drunk all the time. Everyone would do it if it were easy?'",
        answerText: ["Bronn", "King Robert", "The Hound", "Tyrion Lannister"],
        answer: 3, 
        image: , 
        answerText: , 
    },
    {   question: "Whose skull was cracked like an egg by The Mountain's giant hands?", 
        answerText: ["Lady the direwolf", "Oberyn Martell", "Beric Dondarrion", "Auric Goldfinger"],
        answer: 1, 
        image: , 
        answerText: , 
    }
];


});