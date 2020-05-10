$(document).ready(function(){

        var currentQuestion; 
        var correctAnswer; 
        var incorrectAnswer; 
        var unanswered; 
        var seconds; 
        var time; 
        var answered; 
        var userSelect;
        var messages = {
            correct: "Correct!"+ "<br>" + "That's what I do: drink and know things", 
            incorrect: "Incorrect!" + "<br>" + "You know nothing Jon Snow",
            endTime: "The night is dark and full of terrors" + "<br>" + "You ran out of time!",
            finished: "How did you do?"
        };
    
        var triviaQuestions = [
            {   question: "Who was responsible for the creation of the Night King?",
                answerList: ["The Lord of Light", "The Children of the Forest", "The Drowned God", "The First Men"],
                answer: 1,
                image: "assets/images/nightking1.gif",
                answerText: "The Children of the Forest created White Walkers to defend themselves from the First Men",
            },
            {   question: "What was Hodor called before he got his tragic door-holding nickname?",
                answerList: ["Walder", "Horys", "Myrys", "Gladys"],
                answer: 0,
                image: "assets/images/hodor2.gif",
                answerText: "Hodor was originally a stableboy named Walder",
            },
            {   question: "Who said: 'I don’t plan on knitting by the fire while men fight for me'?",
                answerList: ["Sansa Stark", "Ser Brienne of Tarth", "Olenna Tyrell", "Lyanna Mormont"],
                answer: 3,
                image: "assets/images/lyanna3.gif",
                answerText: "Lyanna Mormont refuses Stannis Baratheon's claim and will bend no knee unless it is to a Stark",
            }, 
            {   question: "Where is the House of Black and White, the training temple of the Faceless Men?",
                answerList: ["Quarth", "Braavos", "Meereen", "Unknown"],
                answer: 1,
                image: "assets/images/blackwhite4.gif",
                answerText: "The House of Black and White is where Arya trains with the Faceless Men",
            },
            {   question: "Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands?",
                answerList: ["his uncle", "his brother", "his nephew", "his counsin"],
                answer: 1,
                image: "assets/images/euron5.gif",
                answerText: "Euron was banished from the Iron Islands and before returning home pirated the 7 kingdoms",
            },
            {   question: "What is the name of Arya’s sword?",
                answerList: ["Ice", "Pointy", "Fang", "Needle"],
                answer: 3,
                image: "assets/images/needle6.gif",
                answerText: "Needle was originally a gift from Jon Snow before he left for the Night's Watch",
            },
            {   question: "In which King's Landing slum did Gendry grow up?",
                answerList: ["Flea Bottom", "Rat Bottom", "Rhaenys's Hill", "Dragonpit"],
                answer: 0,
                image: "assets/images/gendry7.gif",
                answerText: "Fleabottom is considered the poorest area of King's Landing",
            },
            {   question: "Who was Ned Stark’s predecessor as Robert Baratheon’s Hand?", 
                answerList: ["Jaime Lannister", "Jon Arryn", "Tywin Lannister", "Ser Jorah Mormont"],
                answer: 1, 
                image: "assets/images/handofking8.gif", 
                answerText: "The Hand of the King is the second most powerful position in the kingdom", 
            }, 
            {   question: "How many kings and queens of Westeros did Lord Varys serve?",
                answerList: ["2", "3", "4", "5"],
                answer: 2, 
                image: "assets/images/varys9.gif", 
                answerText: "Lord Varys served 4 kings: the Mad King, Robert, Joffrey, Tommen"
            }, 
            {   question: "The King Beyond the Wall, Mance Rayder, was roasted alive on whose orders?",
                answerList: ["Cersei Lannister", "Daenerys Targaryen", "Stannis Baratheon", "Roose Bolton"], 
                answer: 2, 
                image: "assets/images/mance10.gif", 
                answerText: "Mance Rayder does not believe the free folk should bow to anyone",
            },
            {   question: "What is the name of Jon Snow's Direwolf?", 
                answerList: ["Grey Wind", "Graham", "Ghost", "Gargameln"], 
                answer: 2, 
                image: "assets/images/ghost11.gif", 
                answerText: "Ghost is an albino direwolf belonging to Jon Snow",
            }, 
            {   question: "What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?", 
                answerList: ["Wildfire", "Dragonfire", "Godsfire", "Pantsonfire"], 
                answer: 0, 
                image: "assets/images/wildfire12.gif", 
                answerText: "Tyrion defeats Stannis Baratheon's ships at the Battle of Blackwater with Wildfire",
            },
            {   question: "What does Daenerys mean when she says 'Shekh ma shieraki anni' to Khal Drogo?",
                answerList: ["Moon of my life", "Sound did silence me", "My sun and stars", "Light of my Life"],
                answer: 2,
                image: "assets/images/khaldrogo13.gif", 
                answerText: "When Khal Drogo Says Shekh ma shieraki anni to Daenerys it means Moon of my Life", 
            },
            {   question: "Who said: 'It's not easy being drunk all the time. Everyone would do it if it were easy?'",
                answerList: ["Bronn", "King Robert", "The Hound", "Tyrion Lannister"],
                answer: 3, 
                image: "assets/images/drunk14.gif", 
                answerText: "Tyrion Lannister throughout the series seems to enjoy wine the most", 
            },
            {   question: "Whose skull was cracked like an egg by The Mountain's giant hands?", 
                answerList: ["Lady the direwolf", "Oberyn Martell", "Beric Dondarrion", "Auric Goldfinger"],
                answer: 1, 
                image: "assets/images/mountain15.gif", 
                answerText: "Oberyn Martell fights for Tyrion Lannister at King Geoffry's death trial", 
            }
        ];
    
        $("#gameCol").hide();
        
        $("#startBtn").on("click", function(){
            $(this).hide();
            newGame();
        });
    
        $("#startOverBtn").on("click", function(){
            $(this).hide();
            newGame();
        });
    
        function newGame(){
            $("#gameCol").show();
            $("#finalMessage").empty();
            $("#correctAnswers").empty();
            $("#incorrectAnswers").empty();
            $("#unanswered").empty();
            $("#gif").hide();
            $("#gifCaption").hide();
            currentQuestion = 0;
            correctAnswer = 0;
            incorrectAnswer = 0;
            unanswered = 0;
            newQuestion();
        }
    
        function newQuestion(){
            $("#message").empty();
            $("#correctedAnswer").empty();
            $("#gif").hide();
            $("#gifCaption").hide();
            answered = true;
            
            $("#currentQuestion").html("Question " + (currentQuestion+1) + " of " + triviaQuestions.length);
            $(".question").html(triviaQuestions[currentQuestion].question);
    
            for(var i = 0; i <= 3; i++){
    
                var choices = $("<div>");
                console.log("triviaQuestions: " + triviaQuestions)
                console.log("CurrentQuestion: " + currentQuestion)
                choices.text(triviaQuestions[currentQuestion].answerList[i]);
                choices.attr({"data-index": i });
                choices.addClass("thisChoice");
                $(".answerList").append(choices);
            }
    
            countdown();
    
            $(".thisChoice").on("click",function(){
                    userSelect = $(this).data("index");
                    clearInterval(time);
                    answerPage();
                });
            }
    
        function countdown(){
            seconds = 15;
            $("#timeLeft").html("00:" + seconds);
            answered = true;
            time = setInterval(showCountdown, 1000);
        }
    
        function showCountdown(){
            seconds--;
    
            if(seconds < 10) {
                $("#timeLeft").html("00:0" + seconds);	
            } else {
                $("#timeLeft").html("00:" + seconds);	
            }
            
            if(seconds < 1){
                clearInterval(time);
                answered = false;
                answerPage();
            }
        }
    
        function answerPage(){
            $("#currentQuestion").empty();
            $(".thisChoice").empty(); 
            $(".question").empty();
            $("#gif").show();
            $("#gifCaption").show();
    
            var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
            var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    
            var gifImageLink = triviaQuestions[currentQuestion].image;
            var newGif = $("<img>");
            newGif.attr("src", gifImageLink);
            newGif.addClass("gifImg");
            $("#gif").html(newGif);
    
            var gifCaption = triviaQuestions[currentQuestion].answerText;
                newCaption = $("<div>");
                newCaption.html(gifCaption);
                newCaption.addClass("gifCaption");
                $("#gifCaption").html(newCaption);
            
            if((userSelect == rightAnswerIndex) && (answered === true)){
                correctAnswer++;
                $('#message').html(messages.correct);
            } else if((userSelect != rightAnswerIndex) && (answered === true)){
                incorrectAnswer++;
                $('#message').html(messages.incorrect);
                $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            } else{
                unanswered++;
                $('#message').html(messages.endTime);
                $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
                answered = true;
            }
            
            if(currentQuestion == (triviaQuestions.length-1)){
                setTimeout(scoreboard, 6000);
            } else{
                currentQuestion++;
                setTimeout(newQuestion, 6000);
            }	
        }
    
        function scoreboard(){
            $('#timeLeft').empty();
            $('#message').empty();
            $('#correctedAnswer').empty();
            $('#gif').hide();
            $("#gifCaption").hide();
    
            $('#finalMessage').html(messages.finished);
            $('#correctAnswers').html("Correct Answers: " + correctAnswer);
            $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
            $('#unanswered').html("Unanswered: " + unanswered);
            $('#startOverBtn').addClass('reset');
            $('#startOverBtn').show();
            $('#startOverBtn').html("PLAY AGAIN");
        }
    
    
    }); 