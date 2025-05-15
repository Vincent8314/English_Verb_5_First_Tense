// Define verb data structure for different tenses
const verbData = {
    "present": [
        {
            name: "Be",
            conjugations: [
                { subject: "I", verb: "am", example: "I am a student." },
                { subject: "You", verb: "are", example: "You are very kind." },
                { subject: "He/She", verb: "is", example: "She is at home." },
                { subject: "We", verb: "are", example: "We are happy to meet you." },
                { subject: "They", verb: "are", example: "They are busy today." }
            ]
        },
        {
            name: "Have",
            conjugations: [
                { subject: "I", verb: "have", example: "I have three books." },
                { subject: "You", verb: "have", example: "You have a nice house." },
                { subject: "He/She", verb: "has", example: "He has a new car." },
                { subject: "We", verb: "have", example: "We have a meeting at 2 PM." },
                { subject: "They", verb: "have", example: "They have two children." }
            ]
        },
        {
            name: "Do",
            conjugations: [
                { subject: "I", verb: "do", example: "I do my homework every day." },
                { subject: "You", verb: "do", example: "You do wonderful work." },
                { subject: "He/She", verb: "does", example: "She does yoga in the morning." },
                { subject: "We", verb: "do", example: "We do our best to help." },
                { subject: "They", verb: "do", example: "They do the shopping on weekends." }
            ]
        },
        {
            name: "Go",
            conjugations: [
                { subject: "I", verb: "go", example: "I go to the gym regularly." },
                { subject: "You", verb: "go", example: "You go to work by bus." },
                { subject: "He/She", verb: "goes", example: "He goes to school every day." },
                { subject: "We", verb: "go", example: "We go to the beach in summer." },
                { subject: "They", verb: "go", example: "They go to church on Sundays." }
            ]
        },
        {
            name: "Like",
            conjugations: [
                { subject: "I", verb: "like", example: "I like chocolate ice cream." },
                { subject: "You", verb: "like", example: "You like playing sports." },
                { subject: "He/She", verb: "likes", example: "She likes reading mystery novels." },
                { subject: "We", verb: "like", example: "We like traveling to new places." },
                { subject: "They", verb: "like", example: "They like watching movies together." }
            ]
        },
        {
            name: "Work",
            conjugations: [
                { subject: "I", verb: "work", example: "I work at a software company." },
                { subject: "You", verb: "work", example: "You work very efficiently." },
                { subject: "He/She", verb: "works", example: "He works from home on Fridays." },
                { subject: "We", verb: "work", example: "We work well as a team." },
                { subject: "They", verb: "work", example: "They work in the same office." }
            ]
        },
        {
            name: "Eat",
            conjugations: [
                { subject: "I", verb: "eat", example: "I eat breakfast at 7 AM." },
                { subject: "You", verb: "eat", example: "You eat healthy food." },
                { subject: "He/She", verb: "eats", example: "She eats vegetables with every meal." },
                { subject: "We", verb: "eat", example: "We eat dinner together every night." },
                { subject: "They", verb: "eat", example: "They eat at restaurants on weekends." }
            ]
        },
        {
            name: "Study",
            conjugations: [
                { subject: "I", verb: "study", example: "I study English every day." },
                { subject: "You", verb: "study", example: "You study for your exams regularly." },
                { subject: "He/She", verb: "studies", example: "He studies mathematics at university." },
                { subject: "We", verb: "study", example: "We study together at the library." },
                { subject: "They", verb: "study", example: "They study different subjects." }
            ]
        },
        {
            name: "Live",
            conjugations: [
                { subject: "I", verb: "live", example: "I live in a small apartment." },
                { subject: "You", verb: "live", example: "You live near the beach." },
                { subject: "He/She", verb: "lives", example: "She lives with her parents." },
                { subject: "We", verb: "live", example: "We live in the same neighborhood." },
                { subject: "They", verb: "live", example: "They live in New York City." }
            ]
        },
        {
            name: "Speak",
            conjugations: [
                { subject: "I", verb: "speak", example: "I speak three languages." },
                { subject: "You", verb: "speak", example: "You speak very clearly." },
                { subject: "He/She", verb: "speaks", example: "He speaks Spanish fluently." },
                { subject: "We", verb: "speak", example: "We speak to each other every day." },
                { subject: "They", verb: "speak", example: "They speak English at work." }
            ]
        },
        {
            name: "Make",
            conjugations: [
                { subject: "I", verb: "make", example: "I make dinner every evening." },
                { subject: "You", verb: "make", example: "You make people feel welcome." },
                { subject: "He/She", verb: "makes", example: "He makes a lot of mistakes." },
                { subject: "We", verb: "make", example: "We make plans for the weekend." },
                { subject: "They", verb: "make", example: "They make their own clothes." }
            ]
        },
        {
            name: "Get",
            conjugations: [
                { subject: "I", verb: "get", example: "I get up at seven every morning." },
                { subject: "You", verb: "get", example: "You get good results at school." },
                { subject: "He/She", verb: "gets", example: "She gets tired after work." },
                { subject: "We", verb: "get", example: "We get ready for the meeting." },
                { subject: "They", verb: "get", example: "They get home very late." }
            ]
        },
        {
            name: "Take",
            conjugations: [
                { subject: "I", verb: "take", example: "I take a walk every afternoon." },
                { subject: "You", verb: "take", example: "You take your job seriously." },
                { subject: "He/She", verb: "takes", example: "He takes care of his dog." },
                { subject: "We", verb: "take", example: "We take the same train daily." },
                { subject: "They", verb: "take", example: "They take photos for fun." }
            ]
        },
        {
            name: "Come",
            conjugations: [
                { subject: "I", verb: "come", example: "I come to this café often." },
                { subject: "You", verb: "come", example: "You come here every summer." },
                { subject: "He/She", verb: "comes", example: "She comes to class early." },
                { subject: "We", verb: "come", example: "We come here to relax." },
                { subject: "They", verb: "come", example: "They come from far away." }
            ]
        },
        {
            name: "See",
            conjugations: [
                { subject: "I", verb: "see", example: "I see my friends on weekends." },
                { subject: "You", verb: "see", example: "You see the same doctor, right?" },
                { subject: "He/She", verb: "sees", example: "He sees the problem clearly." },
                { subject: "We", verb: "see", example: "We see progress every day." },
                { subject: "They", verb: "see", example: "They see what’s going on." }
            ]
        },
        {
            name: "Know",
            conjugations: [
                { subject: "I", verb: "know", example: "I know the answer to that." },
                { subject: "You", verb: "know", example: "You know the way, don’t you?" },
                { subject: "He/She", verb: "knows", example: "She knows how to drive." },
                { subject: "We", verb: "know", example: "We know this place very well." },
                { subject: "They", verb: "know", example: "They know what to do next." }
            ]
        },
        {
            name: "Think",
            conjugations: [
                { subject: "I", verb: "think", example: "I think we should leave now." },
                { subject: "You", verb: "think", example: "You think it's a good idea." },
                { subject: "He/She", verb: "thinks", example: "He thinks about the future." },
                { subject: "We", verb: "think", example: "We think the same way." },
                { subject: "They", verb: "think", example: "They think it’s too late." }
            ]
        },
        {
            name: "Give",
            conjugations: [
                { subject: "I", verb: "give", example: "I give advice when asked." },
                { subject: "You", verb: "give", example: "You give me too much credit." },
                { subject: "He/She", verb: "gives", example: "She gives her time freely." },
                { subject: "We", verb: "give", example: "We give help when needed." },
                { subject: "They", verb: "give", example: "They give gifts at Christmas." }
            ]
        },
        {
            name: "Find",
            conjugations: [
                { subject: "I", verb: "find", example: "I find this book very useful." },
                { subject: "You", verb: "find", example: "You find joy in small things." },
                { subject: "He/She", verb: "finds", example: "He finds peace in nature." },
                { subject: "We", verb: "find", example: "We find the keys every time." },
                { subject: "They", verb: "find", example: "They find answers online." }
            ]
        },
        {
            name: "Tell",
            conjugations: [
                { subject: "I", verb: "tell", example: "I tell the story every year." },
                { subject: "You", verb: "tell", example: "You tell funny jokes often." },
                { subject: "He/She", verb: "tells", example: "He tells great stories." },
                { subject: "We", verb: "tell", example: "We tell each other everything." },
                { subject: "They", verb: "tell", example: "They tell the truth always." }
            ]
        },
        { 
            name: "Ask", 
            conjugations: [
              { subject: "I", verb: "ask", example: "I ask questions in class." },
              { subject: "You", verb: "ask", example: "You ask for help when needed." },
              { subject: "He/She", verb: "asks", example: "She asks interesting questions." },
              { subject: "We", verb: "ask", example: "We ask for directions." },
              { subject: "They", verb: "ask", example: "They ask about the schedule." }
            ]
          },
          { 
            name: "Feel", 
            conjugations: [
              { subject: "I", verb: "feel", example: "I feel happy today." },
              { subject: "You", verb: "feel", example: "You feel the texture of the fabric." },
              { subject: "He/She", verb: "feels", example: "He feels confident about the test." },
              { subject: "We", verb: "feel", example: "We feel excited about the trip." },
              { subject: "They", verb: "feel", example: "They feel tired after working." }
            ]
          },
          { 
            name: "Become", 
            conjugations: [
              { subject: "I", verb: "become", example: "I become nervous when speaking in public." },
              { subject: "You", verb: "become", example: "You become more skilled with practice." },
              { subject: "He/She", verb: "becomes", example: "She becomes a doctor next year." },
              { subject: "We", verb: "become", example: "We become friends quickly." },
              { subject: "They", verb: "become", example: "They become impatient when waiting." }
            ]
          },
          { 
            name: "Leave", 
            conjugations: [
              { subject: "I", verb: "leave", example: "I leave for work at 8 AM." },
              { subject: "You", verb: "leave", example: "You leave your keys on the table." },
              { subject: "He/She", verb: "leaves", example: "He leaves early on Fridays." },
              { subject: "We", verb: "leave", example: "We leave the party at midnight." },
              { subject: "They", verb: "leave", example: "They leave their luggage at the hotel." }
            ]
          },
          { 
            name: "Put", 
            conjugations: [
              { subject: "I", verb: "put", example: "I put my books on the shelf." },
              { subject: "You", verb: "put", example: "You put too much sugar in the coffee." },
              { subject: "He/She", verb: "puts", example: "She puts emphasis on accuracy." },
              { subject: "We", verb: "put", example: "We put our trust in you." },
              { subject: "They", verb: "put", example: "They put the furniture in storage." }
            ]
          },
          { 
            name: "Mean", 
            conjugations: [
              { subject: "I", verb: "mean", example: "I mean what I say." },
              { subject: "You", verb: "mean", example: "You mean a lot to me." },
              { subject: "He/She", verb: "means", example: "He means to call you later." },
              { subject: "We", verb: "mean", example: "We mean business." },
              { subject: "They", verb: "mean", example: "They mean well with their advice." }
            ]
          },
          { 
            name: "Keep", 
            conjugations: [
              { subject: "I", verb: "keep", example: "I keep a journal every day." },
              { subject: "You", verb: "keep", example: "You keep your promises." },
              { subject: "He/She", verb: "keeps", example: "She keeps her room tidy." },
              { subject: "We", verb: "keep", example: "We keep in touch with old friends." },
              { subject: "They", verb: "keep", example: "They keep trying despite difficulties." }
            ]
          },
          { 
            name: "Let", 
            conjugations: [
              { subject: "I", verb: "let", example: "I let him borrow my car." },
              { subject: "You", verb: "let", example: "You let the cat inside." },
              { subject: "He/She", verb: "lets", example: "He lets his children stay up late." },
              { subject: "We", verb: "let", example: "We let the matter drop." },
              { subject: "They", verb: "let", example: "They let us use their swimming pool." }
            ]
          },
          { 
            name: "Help", 
            conjugations: [
              { subject: "I", verb: "help", example: "I help my parents on weekends." },
              { subject: "You", verb: "help", example: "You help whenever needed." },
              { subject: "He/She", verb: "helps", example: "She helps at the community center." },
              { subject: "We", verb: "help", example: "We help each other with homework." },
              { subject: "They", verb: "help", example: "They help organize the event." }
            ]
          },
          { 
            name: "Talk", 
            conjugations: [
              { subject: "I", verb: "talk", example: "I talk to my friends every day." },
              { subject: "You", verb: "talk", example: "You talk very fast." },
              { subject: "He/She", verb: "talks", example: "He talks about sports a lot." },
              { subject: "We", verb: "talk", example: "We talk on the phone for hours." },
              { subject: "They", verb: "talk", example: "They talk in whispers." }
            ]
          },
          { 
            name: "Turn", 
            conjugations: [
              { subject: "I", verb: "turn", example: "I turn the page of my book." },
              { subject: "You", verb: "turn", example: "You turn left at the intersection." },
              { subject: "He/She", verb: "turns", example: "She turns the knob slowly." },
              { subject: "We", verb: "turn", example: "We turn to each other for support." },
              { subject: "They", verb: "turn", example: "They turn the lights off at night." }
            ]
          },
          { 
            name: "Show", 
            conjugations: [
              { subject: "I", verb: "show", example: "I show my ticket at the entrance." },
              { subject: "You", verb: "show", example: "You show great potential." },
              { subject: "He/She", verb: "shows", example: "He shows his collection to visitors." },
              { subject: "We", verb: "show", example: "We show respect to our elders." },
              { subject: "They", verb: "show", example: "They show their work at the exhibition." }
            ]
          },
          { 
            name: "Hear", 
            conjugations: [
              { subject: "I", verb: "hear", example: "I hear music in the distance." },
              { subject: "You", verb: "hear", example: "You hear birds singing in the morning." },
              { subject: "He/She", verb: "hears", example: "She hears a knock at the door." },
              { subject: "We", verb: "hear", example: "We hear rumors about the new policy." },
              { subject: "They", verb: "hear", example: "They hear the announcement on the radio." }
            ]
          },
          { 
            name: "Play", 
            conjugations: [
              { subject: "I", verb: "play", example: "I play the guitar every evening." },
              { subject: "You", verb: "play", example: "You play basketball very well." },
              { subject: "He/She", verb: "plays", example: "He plays with his dog in the park." },
              { subject: "We", verb: "play", example: "We play board games on weekends." },
              { subject: "They", verb: "play", example: "They play important roles in the company." }
            ]
          },
          { 
            name: "Run", 
            conjugations: [
              { subject: "I", verb: "run", example: "I run five kilometers every morning." },
              { subject: "You", verb: "run", example: "You run a successful business." },
              { subject: "He/She", verb: "runs", example: "She runs faster than anyone on the team." },
              { subject: "We", verb: "run", example: "We run out of time during the exam." },
              { subject: "They", verb: "run", example: "They run the marathon annually." }
            ]
          },
          { 
            name: "Move", 
            conjugations: [
              { subject: "I", verb: "move", example: "I move to a new apartment next month." },
              { subject: "You", verb: "move", example: "You move gracefully when you dance." },
              { subject: "He/She", verb: "moves", example: "He moves the furniture around." },
              { subject: "We", verb: "move", example: "We move at a slow pace." },
              { subject: "They", verb: "move", example: "They move to the countryside every summer." }
            ]
          },
          { 
            name: "Want", 
            conjugations: [
              { subject: "I", verb: "want", example: "I want to learn a new language." },
              { subject: "You", verb: "want", example: "You want the best for your children." },
              { subject: "He/She", verb: "wants", example: "She wants to become a doctor." },
              { subject: "We", verb: "want", example: "We want to finish this project soon." },
              { subject: "They", verb: "want", example: "They want more information before deciding." }
            ]
          },
          { 
            name: "Need", 
            conjugations: [
              { subject: "I", verb: "need", example: "I need more time to complete this task." },
              { subject: "You", verb: "need", example: "You need to rest after working so hard." },
              { subject: "He/She", verb: "needs", example: "He needs assistance with his homework." },
              { subject: "We", verb: "need", example: "We need to order more supplies." },
              { subject: "They", verb: "need", example: "They need directions to the hotel." }
            ]
          },
          { 
            name: "Start", 
            conjugations: [
              { subject: "I", verb: "start", example: "I start work at 9 AM." },
              { subject: "You", verb: "start", example: "You start to understand the concept." },
              { subject: "He/She", verb: "starts", example: "She starts her day with exercise." },
              { subject: "We", verb: "start", example: "We start the meeting with introductions." },
              { subject: "They", verb: "start", example: "They start building the house next week." }
            ]
          },
          { 
            name: "Seem", 
            conjugations: [
              { subject: "I", verb: "seem", example: "I seem to have misplaced my keys." },
              { subject: "You", verb: "seem", example: "You seem worried about something." },
              { subject: "He/She", verb: "seems", example: "He seems happy with the results." },
              { subject: "We", verb: "seem", example: "We seem to be lost." },
              { subject: "They", verb: "seem", example: "They seem interested in our proposal." }
            ]
          },
          { 
            name: "Look", 
            conjugations: [
              { subject: "I", verb: "look", example: "I look at the stars at night." },
              { subject: "You", verb: "look", example: "You look tired after your journey." },
              { subject: "He/She", verb: "looks", example: "She looks through the window." },
              { subject: "We", verb: "look", example: "We look for solutions to the problem." },
              { subject: "They", verb: "look", example: "They look forward to the weekend." }
            ]
          },
          { 
            name: "Call", 
            conjugations: [
              { subject: "I", verb: "call", example: "I call my parents every Sunday." },
              { subject: "You", verb: "call", example: "You call for assistance when needed." },
              { subject: "He/She", verb: "calls", example: "He calls his dog by whistling." },
              { subject: "We", verb: "call", example: "We call this dish our specialty." },
              { subject: "They", verb: "call", example: "They call a meeting every Monday." }
            ]
          },
          { 
            name: "Try", 
            conjugations: [
              { subject: "I", verb: "try", example: "I try to exercise daily." },
              { subject: "You", verb: "try", example: "You try too hard sometimes." },
              { subject: "He/She", verb: "tries", example: "She tries new recipes regularly." },
              { subject: "We", verb: "try", example: "We try our best in competitions." },
              { subject: "They", verb: "try", example: "They try to arrive on time." }
            ]
          },
          { 
            name: "Use", 
            conjugations: [
              { subject: "I", verb: "use", example: "I use my computer for work." },
              { subject: "You", verb: "use", example: "You use too much salt in cooking." },
              { subject: "He/She", verb: "uses", example: "He uses public transportation daily." },
              { subject: "We", verb: "use", example: "We use solar energy in our home." },
              { subject: "They", verb: "use", example: "They use advanced technology in their research." }
            ]
          },
          { 
            name: "Bring", 
            conjugations: [
              { subject: "I", verb: "bring", example: "I bring lunch to work every day." },
              { subject: "You", verb: "bring", example: "You bring joy to everyone around you." },
              { subject: "He/She", verb: "brings", example: "She brings her camera on every trip." },
              { subject: "We", verb: "bring", example: "We bring gifts when visiting friends." },
              { subject: "They", verb: "bring", example: "They bring interesting perspectives to discussions." }
            ]
          },
          { 
            name: "Begin", 
            conjugations: [
              { subject: "I", verb: "begin", example: "I begin my day with meditation." },
              { subject: "You", verb: "begin", example: "You begin to see progress after practice." },
              { subject: "He/She", verb: "begins", example: "He begins work at sunrise." },
              { subject: "We", verb: "begin", example: "We begin our journey at dawn." },
              { subject: "They", verb: "begin", example: "They begin rehearsals next week." }
            ]
          },
          { 
            name: "Write", 
            conjugations: [
              { subject: "I", verb: "write", example: "I write in my journal every night." },
              { subject: "You", verb: "write", example: "You write beautiful poetry." },
              { subject: "He/She", verb: "writes", example: "She writes articles for magazines." },
              { subject: "We", verb: "write", example: "We write code for the new application." },
              { subject: "They", verb: "write", example: "They write to each other regularly." }
            ]
          },
          { 
            name: "Read", 
            conjugations: [
              { subject: "I", verb: "read", example: "I read books before bedtime." },
              { subject: "You", verb: "read", example: "You read too quickly to absorb details." },
              { subject: "He/She", verb: "reads", example: "He reads the newspaper every morning." },
              { subject: "We", verb: "read", example: "We read instructions carefully." },
              { subject: "They", verb: "read", example: "They read different genres of literature." }
            ]
          },
          { 
            name: "Say", 
            conjugations: [
              { subject: "I", verb: "say", example: "I say what I mean." },
              { subject: "You", verb: "say", example: "You say the same thing repeatedly." },
              { subject: "He/She", verb: "says", example: "She says hello to everyone she meets." },
              { subject: "We", verb: "say", example: "We say prayers before meals." },
              { subject: "They", verb: "say", example: "They say the weather will improve tomorrow." }
            ]
          },
          { 
            name: "Stop", 
            conjugations: [
              { subject: "I", verb: "stop", example: "I stop at red traffic lights." },
              { subject: "You", verb: "stop", example: "You stop working at 6 PM." },
              { subject: "He/She", verb: "stops", example: "He stops to rest during long hikes." },
              { subject: "We", verb: "stop", example: "We stop arguing when someone intervenes." },
              { subject: "They", verb: "stop", example: "They stop production during holidays." }
            ]
          },
          { 
            name: "Learn", 
            conjugations: [
              { subject: "I", verb: "learn", example: "I learn something new every day." },
              { subject: "You", verb: "learn", example: "You learn quickly from your mistakes." },
              { subject: "He/She", verb: "learns", example: "She learns languages easily." },
              { subject: "We", verb: "learn", example: "We learn from each other's experiences." },
              { subject: "They", verb: "learn", example: "They learn about different cultures through travel." }
            ]
          },
          { 
            name: "Understand", 
            conjugations: [
              { subject: "I", verb: "understand", example: "I understand your concerns." },
              { subject: "You", verb: "understand", example: "You understand complex theories quickly." },
              { subject: "He/She", verb: "understands", example: "He understands the importance of timing." },
              { subject: "We", verb: "understand", example: "We understand the risks involved." },
              { subject: "They", verb: "understand", example: "They understand each other without words." }
            ]
          },
          { 
            name: "Watch", 
            conjugations: [
              { subject: "I", verb: "watch", example: "I watch documentaries in my free time." },
              { subject: "You", verb: "watch", example: "You watch the children at the playground." },
              { subject: "He/She", verb: "watches", example: "She watches birds from her window." },
              { subject: "We", verb: "watch", example: "We watch our expenses carefully." },
              { subject: "They", verb: "watch", example: "They watch the sunset from their balcony." }
            ]
          },
          { 
            name: "Follow", 
            conjugations: [
              { subject: "I", verb: "follow", example: "I follow the recipe exactly." },
              { subject: "You", verb: "follow", example: "You follow the latest fashion trends." },
              { subject: "He/She", verb: "follows", example: "He follows a strict daily routine." },
              { subject: "We", verb: "follow", example: "We follow the guide through the museum." },
              { subject: "They", verb: "follow", example: "They follow each other on social media." }
            ]
          },
          { 
            name: "Walk", 
            conjugations: [
              { subject: "I", verb: "walk", example: "I walk to work every day." },
              { subject: "You", verb: "walk", example: "You walk your dog in the park." },
              { subject: "He/She", verb: "walks", example: "She walks with confidence." },
              { subject: "We", verb: "walk", example: "We walk five miles each weekend." },
              { subject: "They", verb: "walk", example: "They walk along the beach at sunset." }
            ]
          },
          { 
            name: "Meet", 
            conjugations: [
              { subject: "I", verb: "meet", example: "I meet with clients regularly." },
              { subject: "You", verb: "meet", example: "You meet interesting people in your job." },
              { subject: "He/She", verb: "meets", example: "He meets his goals consistently." },
              { subject: "We", verb: "meet", example: "We meet for coffee every Thursday." },
              { subject: "They", verb: "meet", example: "They meet to discuss project updates." }
            ]
          },
          { 
            name: "Consider", 
            conjugations: [
              { subject: "I", verb: "consider", example: "I consider all options before deciding." },
              { subject: "You", verb: "consider", example: "You consider yourself an expert in this field." },
              { subject: "He/She", verb: "considers", example: "She considers feedback carefully." },
              { subject: "We", verb: "consider", example: "We consider the environmental impact." },
              { subject: "They", verb: "consider", example: "They consider the proposal reasonable." }
            ]
          },
          { 
            name: "Change", 
            conjugations: [
              { subject: "I", verb: "change", example: "I change my schedule when necessary." },
              { subject: "You", verb: "change", example: "You change your mind too often." },
              { subject: "He/She", verb: "changes", example: "He changes his clothes after work." },
              { subject: "We", verb: "change", example: "We change our strategy based on results." },
              { subject: "They", verb: "change", example: "They change apartments frequently." }
            ]
          },
          { 
            name: "Appear", 
            conjugations: [
              { subject: "I", verb: "appear", example: "I appear calm even when stressed." },
              { subject: "You", verb: "appear", example: "You appear in many of the photos." },
              { subject: "He/She", verb: "appears", example: "She appears on television weekly." },
              { subject: "We", verb: "appear", example: "We appear confident during presentations." },
              { subject: "They", verb: "appear", example: "They appear to be lost." }
            ]
          },
          { 
            name: "Happen", 
            conjugations: [
              { subject: "I", verb: "happen", example: "I happen to know the answer." },
              { subject: "You", verb: "happen", example: "You happen to be at the right place." },
              { subject: "He/She", verb: "happens", example: "It happens when least expected." },
              { subject: "We", verb: "happen", example: "We happen to share the same birthday." },
              { subject: "They", verb: "happen", example: "They happen to be experts in this field." }
            ]
          },
          { 
            name: "Drive", 
            conjugations: [
              { subject: "I", verb: "drive", example: "I drive to the countryside on weekends." },
              { subject: "You", verb: "drive", example: "You drive too fast on highways." },
              { subject: "He/She", verb: "drives", example: "She drives an electric car." },
              { subject: "We", verb: "drive", example: "We drive carefully in bad weather." },
              { subject: "They", verb: "drive", example: "They drive across the country every summer." }
            ]
          },
          { 
            name: "Send", 
            conjugations: [
              { subject: "I", verb: "send", example: "I send emails to clients daily." },
              { subject: "You", verb: "send", example: "You send too many text messages." },
              { subject: "He/She", verb: "sends", example: "She sends flowers on special occasions." },
              { subject: "We", verb: "send", example: "We send our condolences to the family." },
              { subject: "They", verb: "send", example: "They send packages overseas." }
            ]
          },
          { 
            name: "Stay", 
            conjugations: [
              { subject: "I", verb: "stay", example: "I stay at home during bad weather." },
              { subject: "You", verb: "stay", example: "You stay focused during meetings." },
              { subject: "He/She", verb: "stays", example: "He stays with his grandparents on weekends." },
              { subject: "We", verb: "stay", example: "We stay in touch through video calls." },
              { subject: "They", verb: "stay", example: "They stay at luxury hotels when traveling." }
            ]
          },
          { 
            name: "Receive", 
            conjugations: [
              { subject: "I", verb: "receive", example: "I receive too much junk mail." },
              { subject: "You", verb: "receive", example: "You receive praise for your hard work." },
              { subject: "He/She", verb: "receives", example: "She receives a salary every month." },
              { subject: "We", verb: "receive", example: "We receive guests on Sundays." },
              { subject: "They", verb: "receive", example: "They receive funding for their research." }
            ]
          },
          { 
            name: "Remember", 
            conjugations: [
              { subject: "I", verb: "remember", example: "I remember my childhood clearly." },
              { subject: "You", verb: "remember", example: "You remember faces better than names." },
              { subject: "He/She", verb: "remembers", example: "He remembers to call on birthdays." },
              { subject: "We", verb: "remember", example: "We remember the good times we shared." },
              { subject: "They", verb: "remember", example: "They remember the directions to the cabin." }
            ]
          },

          { 
            name: "Fall", 
            conjugations: [
              { subject: "I", verb: "fall", example: "I fall asleep quickly after exercising." },
              { subject: "You", verb: "fall", example: "You fall behind when you miss classes." },
              { subject: "He/She", verb: "falls", example: "He falls silent when upset." },
              { subject: "We", verb: "fall", example: "We fall in love with the city's charm." },
              { subject: "They", verb: "fall", example: "They fall into predictable patterns." }
            ]
          },
          { 
            name: "Reach", 
            conjugations: [
              { subject: "I", verb: "reach", example: "I reach for the stars in my goals." },
              { subject: "You", verb: "reach", example: "You reach the top shelf easily." },
              { subject: "He/She", verb: "reaches", example: "She reaches out to old friends regularly." },
              { subject: "We", verb: "reach", example: "We reach our destination before sunset." },
              { subject: "They", verb: "reach", example: "They reach agreements through compromise." }
            ]
          },
          { 
            name: "Remain", 
            conjugations: [
              { subject: "I", verb: "remain", example: "I remain optimistic despite challenges." },
              { subject: "You", verb: "remain", example: "You remain seated during turbulence." },
              { subject: "He/She", verb: "remains", example: "He remains dedicated to his studies." },
              { subject: "We", verb: "remain", example: "We remain friends despite disagreements." },
              { subject: "They", verb: "remain", example: "They remain silent about the incident." }
            ]
          },
          { 
            name: "Believe", 
            conjugations: [
              { subject: "I", verb: "believe", example: "I believe in equal opportunities." },
              { subject: "You", verb: "believe", example: "You believe everything you read online." },
              { subject: "He/She", verb: "believes", example: "She believes in working hard." },
              { subject: "We", verb: "believe", example: "We believe the project will succeed." },
              { subject: "They", verb: "believe", example: "They believe in traditional values." }
            ]
          },
          { 
            name: "Hold", 
            conjugations: [
              { subject: "I", verb: "hold", example: "I hold meetings every Monday." },
              { subject: "You", verb: "hold", example: "You hold the record for fastest time." },
              { subject: "He/She", verb: "holds", example: "He holds three different positions." },
              { subject: "We", verb: "hold", example: "We hold hands when crossing the street." },
              { subject: "They", verb: "hold", example: "They hold their breath underwater." }
            ]
          },
          { 
            name: "Sell", 
            conjugations: [
              { subject: "I", verb: "sell", example: "I sell handmade crafts online." },
              { subject: "You", verb: "sell", example: "You sell your ideas convincingly." },
              { subject: "He/She", verb: "sells", example: "She sells houses in this neighborhood." },
              { subject: "We", verb: "sell", example: "We sell organic products only." },
              { subject: "They", verb: "sell", example: "They sell tickets at the entrance." }
            ]
          },
          { 
            name: "Pay", 
            conjugations: [
              { subject: "I", verb: "pay", example: "I pay bills at the start of each month." },
              { subject: "You", verb: "pay", example: "You pay attention to details." },
              { subject: "He/She", verb: "pays", example: "He pays for dinner when we go out." },
              { subject: "We", verb: "pay", example: "We pay our employees fairly." },
              { subject: "They", verb: "pay", example: "They pay extra for express shipping." }
            ]
          },
          { 
            name: "Open", 
            conjugations: [
              { subject: "I", verb: "open", example: "I open the window for fresh air." },
              { subject: "You", verb: "open", example: "You open your gifts carefully." },
              { subject: "He/She", verb: "opens", example: "She opens the store at 8 AM." },
              { subject: "We", verb: "open", example: "We open our home to visitors." },
              { subject: "They", verb: "open", example: "They open a new branch every year." }
            ]
          },
          { 
            name: "Lose", 
            conjugations: [
              { subject: "I", verb: "lose", example: "I lose my keys frequently." },
              { subject: "You", verb: "lose", example: "You lose patience with difficult customers." },
              { subject: "He/She", verb: "loses", example: "He loses interest in long meetings." },
              { subject: "We", verb: "lose", example: "We lose track of time when having fun." },
              { subject: "They", verb: "lose", example: "They lose weight through regular exercise." }
            ]
          },
          { 
            name: "Wait", 
            conjugations: [
              { subject: "I", verb: "wait", example: "I wait for the bus every morning." },
              { subject: "You", verb: "wait", example: "You wait patiently for your turn." },
              { subject: "He/She", verb: "waits", example: "She waits outside the school." },
              { subject: "We", verb: "wait", example: "We wait until everyone arrives." },
              { subject: "They", verb: "wait", example: "They wait in line for concert tickets." }
            ]
          },
          { 
            name: "Serve", 
            conjugations: [
              { subject: "I", verb: "serve", example: "I serve dinner at 7 PM." },
              { subject: "You", verb: "serve", example: "You serve on the community board." },
              { subject: "He/She", verb: "serves", example: "He serves in the military." },
              { subject: "We", verb: "serve", example: "We serve local produce in our restaurant." },
              { subject: "They", verb: "serve", example: "They serve as mentors to young professionals." }
            ]
          },
          { 
            name: "Die", 
            conjugations: [
              { subject: "I", verb: "die", example: "I die a little inside when I see injustice." },
              { subject: "You", verb: "die", example: "You die of laughter at his jokes." },
              { subject: "He/She", verb: "dies", example: "She dies her hair different colors." },
              { subject: "We", verb: "die", example: "We die to our old habits to form new ones." },
              { subject: "They", verb: "die", example: "They die down eventually, these rumors." }
            ]
          },
          { 
            name: "Expect", 
            conjugations: [
              { subject: "I", verb: "expect", example: "I expect to finish by tomorrow." },
              { subject: "You", verb: "expect", example: "You expect too much from others." },
              { subject: "He/She", verb: "expects", example: "She expects excellence from her team." },
              { subject: "We", verb: "expect", example: "We expect the delivery this afternoon." },
              { subject: "They", verb: "expect", example: "They expect clear communication." }
            ]
          },
          { 
            name: "Build", 
            conjugations: [
              { subject: "I", verb: "build", example: "I build model airplanes as a hobby." },
              { subject: "You", verb: "build", example: "You build strong relationships with clients." },
              { subject: "He/She", verb: "builds", example: "She builds websites for small businesses." },
              { subject: "We", verb: "build", example: "We build our schedules around family time." },
              { subject: "They", verb: "build", example: "They build eco-friendly homes." }
            ]
          },
          { 
            name: "Fall", 
            conjugations: [
              { subject: "I", verb: "fall", example: "I fall asleep quickly after exercising." },
              { subject: "You", verb: "fall", example: "You fall behind when you miss classes." },
              { subject: "He/She", verb: "falls", example: "He falls silent when upset." },
              { subject: "We", verb: "fall", example: "We fall in love with the city's charm." },
              { subject: "They", verb: "fall", example: "They fall into predictable patterns." }
            ]
          },
          { 
            name: "Reach", 
            conjugations: [
              { subject: "I", verb: "reach", example: "I reach for the stars in my goals." },
              { subject: "You", verb: "reach", example: "You reach the top shelf easily." },
              { subject: "He/She", verb: "reaches", example: "She reaches out to old friends regularly." },
              { subject: "We", verb: "reach", example: "We reach our destination before sunset." },
              { subject: "They", verb: "reach", example: "They reach agreements through compromise." }
            ]
          },
          { 
            name: "Remain", 
            conjugations: [
              { subject: "I", verb: "remain", example: "I remain optimistic despite challenges." },
              { subject: "You", verb: "remain", example: "You remain seated during turbulence." },
              { subject: "He/She", verb: "remains", example: "He remains dedicated to his studies." },
              { subject: "We", verb: "remain", example: "We remain friends despite disagreements." },
              { subject: "They", verb: "remain", example: "They remain silent about the incident." }
            ]
          },
          { 
            name: "Believe", 
            conjugations: [
              { subject: "I", verb: "believe", example: "I believe in equal opportunities." },
              { subject: "You", verb: "believe", example: "You believe everything you read online." },
              { subject: "He/She", verb: "believes", example: "She believes in working hard." },
              { subject: "We", verb: "believe", example: "We believe the project will succeed." },
              { subject: "They", verb: "believe", example: "They believe in traditional values." }
            ]
          },
          { 
            name: "Hold", 
            conjugations: [
              { subject: "I", verb: "hold", example: "I hold meetings every Monday." },
              { subject: "You", verb: "hold", example: "You hold the record for fastest time." },
              { subject: "He/She", verb: "holds", example: "He holds three different positions." },
              { subject: "We", verb: "hold", example: "We hold hands when crossing the street." },
              { subject: "They", verb: "hold", example: "They hold their breath underwater." }
            ]
          },
          { 
            name: "Sell", 
            conjugations: [
              { subject: "I", verb: "sell", example: "I sell handmade crafts online." },
              { subject: "You", verb: "sell", example: "You sell your ideas convincingly." },
              { subject: "He/She", verb: "sells", example: "She sells houses in this neighborhood." },
              { subject: "We", verb: "sell", example: "We sell organic products only." },
              { subject: "They", verb: "sell", example: "They sell tickets at the entrance." }
            ]
          },
          { 
            name: "Pay", 
            conjugations: [
              { subject: "I", verb: "pay", example: "I pay bills at the start of each month." },
              { subject: "You", verb: "pay", example: "You pay attention to details." },
              { subject: "He/She", verb: "pays", example: "He pays for dinner when we go out." },
              { subject: "We", verb: "pay", example: "We pay our employees fairly." },
              { subject: "They", verb: "pay", example: "They pay extra for express shipping." }
            ]
          },
          { 
            name: "Open", 
            conjugations: [
              { subject: "I", verb: "open", example: "I open the window for fresh air." },
              { subject: "You", verb: "open", example: "You open your gifts carefully." },
              { subject: "He/She", verb: "opens", example: "She opens the store at 8 AM." },
              { subject: "We", verb: "open", example: "We open our home to visitors." },
              { subject: "They", verb: "open", example: "They open a new branch every year." }
            ]
          },
          { 
            name: "Lose", 
            conjugations: [
              { subject: "I", verb: "lose", example: "I lose my keys frequently." },
              { subject: "You", verb: "lose", example: "You lose patience with difficult customers." },
              { subject: "He/She", verb: "loses", example: "He loses interest in long meetings." },
              { subject: "We", verb: "lose", example: "We lose track of time when having fun." },
              { subject: "They", verb: "lose", example: "They lose weight through regular exercise." }
            ]
          },
          { 
            name: "Wait", 
            conjugations: [
              { subject: "I", verb: "wait", example: "I wait for the bus every morning." },
              { subject: "You", verb: "wait", example: "You wait patiently for your turn." },
              { subject: "He/She", verb: "waits", example: "She waits outside the school." },
              { subject: "We", verb: "wait", example: "We wait until everyone arrives." },
              { subject: "They", verb: "wait", example: "They wait in line for concert tickets." }
            ]
          },
          { 
            name: "Serve", 
            conjugations: [
              { subject: "I", verb: "serve", example: "I serve dinner at 7 PM." },
              { subject: "You", verb: "serve", example: "You serve on the community board." },
              { subject: "He/She", verb: "serves", example: "He serves in the military." },
              { subject: "We", verb: "serve", example: "We serve local produce in our restaurant." },
              { subject: "They", verb: "serve", example: "They serve as mentors to young professionals." }
            ]
          },
          { 
            name: "Die", 
            conjugations: [
              { subject: "I", verb: "die", example: "I die a little inside when I see injustice." },
              { subject: "You", verb: "die", example: "You die of laughter at his jokes." },
              { subject: "He/She", verb: "dies", example: "She dies her hair different colors." },
              { subject: "We", verb: "die", example: "We die to our old habits to form new ones." },
              { subject: "They", verb: "die", example: "They die down eventually, these rumors." }
            ]
          },
          { 
            name: "Lead", 
            conjugations: [
              { subject: "I", verb: "lead", example: "I lead the marketing team." },
              { subject: "You", verb: "lead", example: "You lead by example." },
              { subject: "He/She", verb: "leads", example: "She leads the discussion skillfully." },
              { subject: "We", verb: "lead", example: "We lead different departments in the company." },
              { subject: "They", verb: "lead", example: "They lead tours through the historic district." }
            ]
          },
          { 
            name: "Break", 
            conjugations: [
              { subject: "I", verb: "break", example: "I break for lunch at noon." },
              { subject: "You", verb: "break", example: "You break records in swimming." },
              { subject: "He/She", verb: "breaks", example: "He breaks down complex topics simply." },
              { subject: "We", verb: "break", example: "We break tradition by celebrating differently." },
              { subject: "They", verb: "break", example: "They break into small groups for the activity." }
            ]
          },
          { 
            name: "Create", 
            conjugations: [
              { subject: "I", verb: "create", example: "I create digital art in my spare time." },
              { subject: "You", verb: "create", example: "You create opportunities for others." },
              { subject: "He/She", verb: "creates", example: "She creates a positive atmosphere." },
              { subject: "We", verb: "create", example: "We create new products every quarter." },
              { subject: "They", verb: "create", example: "They create lasting memories on their trips." }
            ]
          },
          { 
            name: "Sleep", 
            conjugations: [
              { subject: "I", verb: "sleep", example: "I sleep for eight hours every night." },
              { subject: "You", verb: "sleep", example: "You sleep through alarm clocks." },
              { subject: "He/She", verb: "sleeps", example: "He sleeps with the window open." },
              { subject: "We", verb: "sleep", example: "We sleep in tents when camping." },
              { subject: "They", verb: "sleep", example: "They sleep late on weekends." }
            ]
          },
          { 
            name: "Win", 
            conjugations: [
              { subject: "I", verb: "win", example: "I win at card games regularly." },
              { subject: "You", verb: "win", example: "You win people's trust with your honesty." },
              { subject: "He/She", verb: "wins", example: "She wins competitions through hard work." },
              { subject: "We", verb: "win", example: "We win most of our home games." },
              { subject: "They", verb: "win", example: "They win awards for their documentary films." }
            ]
          },
          { 
            name: "Offer", 
            conjugations: [
              { subject: "I", verb: "offer", example: "I offer to help whenever possible." },
              { subject: "You", verb: "offer", example: "You offer valuable advice to beginners." },
              { subject: "He/She", verb: "offers", example: "He offers free consultations to new clients." },
              { subject: "We", verb: "offer", example: "We offer discounts to loyal customers." },
              { subject: "They", verb: "offer", example: "They offer various payment options." }
            ]
          },
          { 
            name: "Grow", 
            conjugations: [
              { subject: "I", verb: "grow", example: "I grow vegetables in my garden." },
              { subject: "You", verb: "grow", example: "You grow wiser with experience." },
              { subject: "He/She", verb: "grows", example: "She grows flowers on her balcony." },
              { subject: "We", verb: "grow", example: "We grow closer through shared experiences." },
              { subject: "They", verb: "grow", example: "They grow their business through referrals." }
            ]
          },
          { 
            name: "Teach", 
            conjugations: [
              { subject: "I", verb: "teach", example: "I teach history at the local high school." },
              { subject: "You", verb: "teach", example: "You teach children to respect nature." },
              { subject: "He/She", verb: "teaches", example: "He teaches piano to beginners." },
              { subject: "We", verb: "teach", example: "We teach workshops on creative writing." },
              { subject: "They", verb: "teach", example: "They teach each other new skills." }
            ]
          },
          { 
            name: "Cook", 
            conjugations: [
              { subject: "I", verb: "cook", example: "I cook dinner for my family every night." },
              { subject: "You", verb: "cook", example: "You cook Italian food really well." },
              { subject: "He/She", verb: "cooks", example: "She cooks professionally in a restaurant." },
              { subject: "We", verb: "cook", example: "We cook together on special occasions." },
              { subject: "They", verb: "cook", example: "They cook traditional recipes from their culture." }
            ]
          },
          { 
            name: "Spend", 
            conjugations: [
              { subject: "I", verb: "spend", example: "I spend time reading every day." },
              { subject: "You", verb: "spend", example: "You spend money wisely." },
              { subject: "He/She", verb: "spends", example: "He spends hours practicing the guitar." },
              { subject: "We", verb: "spend", example: "We spend weekends at the beach." },
              { subject: "They", verb: "spend", example: "They spend resources on employee development." }
            ]
          },
          { 
            name: "Draw", 
            conjugations: [
              { subject: "I", verb: "draw", example: "I draw illustrations for children's books." },
              { subject: "You", verb: "draw", example: "You draw inspiration from nature." },
              { subject: "He/She", verb: "draws", example: "She draws attention with her bright clothing." },
              { subject: "We", verb: "draw", example: "We draw conclusions from the available data." },
              { subject: "They", verb: "draw", example: "They draw crowds to their performances." }
            ]
          },
          { 
            name: "Continue", 
            conjugations: [
              { subject: "I", verb: "continue", example: "I continue to practice despite difficulties." },
              { subject: "You", verb: "continue", example: "You continue working after everyone leaves." },
              { subject: "He/She", verb: "continues", example: "He continues the family business." },
              { subject: "We", verb: "continue", example: "We continue the tradition every year." },
              { subject: "They", verb: "continue", example: "They continue to support various charities." }
            ]
          },
          { 
            name: "Sit", 
            conjugations: [
              { subject: "I", verb: "sit", example: "I sit by the window to read." },
              { subject: "You", verb: "sit", example: "You sit at the head of the table." },
              { subject: "He/She", verb: "sits", example: "She sits on the board of directors." },
              { subject: "We", verb: "sit", example: "We sit together during lunch breaks." },
              { subject: "They", verb: "sit", example: "They sit in the front row at concerts." }
            ]
          },
          { 
            name: "Rise", 
            conjugations: [
              { subject: "I", verb: "rise", example: "I rise early to exercise." },
              { subject: "You", verb: "rise", example: "You rise to the challenge every time." },
              { subject: "He/She", verb: "rises", example: "He rises through the ranks quickly." },
              { subject: "We", verb: "rise", example: "We rise to the occasion when needed." },
              { subject: "They", verb: "rise", example: "They rise before dawn to start fishing." }
            ]
          },
          { 
            name: "Drink", 
            conjugations: [
              { subject: "I", verb: "drink", example: "I drink water throughout the day." },
              { subject: "You", verb: "drink", example: "You drink tea every morning." },
              { subject: "He/She", verb: "drinks", example: "She drinks coffee without sugar." },
              { subject: "We", verb: "drink", example: "We drink smoothies after workouts." },
              { subject: "They", verb: "drink", example: "They drink toasts at celebrations." }
            ]
          },
          { 
            name: "Wear", 
            conjugations: [
              { subject: "I", verb: "wear", example: "I wear comfortable shoes to work." },
              { subject: "You", verb: "wear", example: "You wear your heart on your sleeve." },
              { subject: "He/She", verb: "wears", example: "He wears glasses for reading." },
              { subject: "We", verb: "wear", example: "We wear uniforms during competitions." },
              { subject: "They", verb: "wear", example: "They wear traditional clothing on holidays." }
            ]
          },
          { 
            name: "Choose", 
            conjugations: [
              { subject: "I", verb: "choose", example: "I choose quality over quantity." },
              { subject: "You", verb: "choose", example: "You choose friends wisely." },
              { subject: "He/She", verb: "chooses", example: "She chooses organic products." },
              { subject: "We", verb: "choose", example: "We choose vacation destinations together." },
              { subject: "They", verb: "choose", example: "They choose to walk instead of driving." }
            ]
          },
          { 
            name: "Travel", 
            conjugations: [
              { subject: "I", verb: "travel", example: "I travel for work frequently." },
              { subject: "You", verb: "travel", example: "You travel to exotic locations." },
              { subject: "He/She", verb: "travels", example: "He travels by train whenever possible." },
              { subject: "We", verb: "travel", example: "We travel light with just carry-on luggage." },
              { subject: "They", verb: "travel", example: "They travel around the world documenting cultures." }
            ]
          },
          { 
            name: "Forget", 
            conjugations: [
              { subject: "I", verb: "forget", example: "I forget names easily." },
              { subject: "You", verb: "forget", example: "You forget to lock the door sometimes." },
              { subject: "He/She", verb: "forgets", example: "She forgets appointments occasionally." },
              { subject: "We", verb: "forget", example: "We forget how far we've come." },
              { subject: "They", verb: "forget", example: "They forget to check their emails on weekends." }
            ]
          },
          { 
            name: "Smile", 
            conjugations: [
              { subject: "I", verb: "smile", example: "I smile when I see dogs in the park." },
              { subject: "You", verb: "smile", example: "You smile in all your photos." },
              { subject: "He/She", verb: "smiles", example: "She smiles at everyone she meets." },
              { subject: "We", verb: "smile", example: "We smile through difficult times." },
              { subject: "They", verb: "smile", example: "They smile proudly at their graduation." }
            ]
          },
          { 
            name: "Finish", 
            conjugations: [
              { subject: "I", verb: "finish", example: "I finish my homework before dinner." },
              { subject: "You", verb: "finish", example: "You finish projects ahead of schedule." },
              { subject: "He/She", verb: "finishes", example: "She finishes the race in first place." },
              { subject: "We", verb: "finish", example: "We finish eating at the same time." },
              { subject: "They", verb: "finish", example: "They finish their work day at 5 PM." }
            ]
          },
          { 
            name: "Decide", 
            conjugations: [
              { subject: "I", verb: "decide", example: "I decide where we go for dinner." },
              { subject: "You", verb: "decide", example: "You decide too quickly sometimes." },
              { subject: "He/She", verb: "decides", example: "He decides which movie to watch." },
              { subject: "We", verb: "decide", example: "We decide our budget together." },
              { subject: "They", verb: "decide", example: "They decide the company's direction." }
            ]
          },
          { 
            name: "Explain", 
            conjugations: [
              { subject: "I", verb: "explain", example: "I explain the process step by step." },
              { subject: "You", verb: "explain", example: "You explain concepts clearly." },
              { subject: "He/She", verb: "explains", example: "She explains the rules to newcomers." },
              { subject: "We", verb: "explain", example: "We explain our decisions to stakeholders." },
              { subject: "They", verb: "explain", example: "They explain their research findings." }
            ]
          },
          { 
            name: "Develop", 
            conjugations: [
              { subject: "I", verb: "develop", example: "I develop new skills through practice." },
              { subject: "You", verb: "develop", example: "You develop software applications." },
              { subject: "He/She", verb: "develops", example: "He develops strong relationships with clients." },
              { subject: "We", verb: "develop", example: "We develop strategies for growth." },
              { subject: "They", verb: "develop", example: "They develop photos in a darkroom." }
            ]
          },
          { 
            name: "Accept", 
            conjugations: [
              { subject: "I", verb: "accept", example: "I accept your apology." },
              { subject: "You", verb: "accept", example: "You accept challenges bravely." },
              { subject: "He/She", verb: "accepts", example: "She accepts the award with gratitude." },
              { subject: "We", verb: "accept", example: "We accept all major credit cards." },
              { subject: "They", verb: "accept", example: "They accept new members twice a year." }
            ]
          },
          { 
            name: "Drop", 
            conjugations: [
              { subject: "I", verb: "drop", example: "I drop hints about what I want for my birthday." },
              { subject: "You", verb: "drop", example: "You drop by unannounced sometimes." },
              { subject: "He/She", verb: "drops", example: "He drops the children at school every morning." },
              { subject: "We", verb: "drop", example: "We drop our voices when discussing sensitive topics." },
              { subject: "They", verb: "drop", example: "They drop prices during sales." }
            ]
          },
          { 
            name: "Present", 
            conjugations: [
              { subject: "I", verb: "present", example: "I present my findings to the committee." },
              { subject: "You", verb: "present", example: "You present yourself professionally." },
              { subject: "He/She", verb: "presents", example: "She presents a new proposal each quarter." },
              { subject: "We", verb: "present", example: "We present awards at the annual ceremony." },
              { subject: "They", verb: "present", example: "They present a united front to competitors." }
            ]
          },
          { 
            name: "Plan", 
            conjugations: [
              { subject: "I", verb: "plan", example: "I plan my week in advance." },
              { subject: "You", verb: "plan", example: "You plan excellent parties." },
              { subject: "He/She", verb: "plans", example: "He plans to retire early." },
              { subject: "We", verb: "plan", example: "We plan our vacation carefully." },
              { subject: "They", verb: "plan", example: "They plan for every contingency." }
            ]
          },
          { 
            name: "Argue", 
            conjugations: [
              { subject: "I", verb: "argue", example: "I argue for environmental protection." },
              { subject: "You", verb: "argue", example: "You argue your case convincingly." },
              { subject: "He/She", verb: "argues", example: "She argues with passion in debates." },
              { subject: "We", verb: "argue", example: "We argue about politics occasionally." },
              { subject: "They", verb: "argue", example: "They argue for higher wages." }
            ]
          },
          { 
            name: "Support", 
            conjugations: [
              { subject: "I", verb: "support", example: "I support local businesses." },
              { subject: "You", verb: "support", example: "You support your friends in tough times." },
              { subject: "He/She", verb: "supports", example: "He supports several charities." },
              { subject: "We", verb: "support", example: "We support each other's career goals." },
              { subject: "They", verb: "support", example: "They support the community through volunteering." }
            ]
          },
          { 
            name: "Jump", 
            conjugations: [
              { subject: "I", verb: "jump", example: "I jump at every opportunity to learn." },
              { subject: "You", verb: "jump", example: "You jump to conclusions too quickly." },
              { subject: "He/She", verb: "jumps", example: "She jumps rope for exercise." },
              { subject: "We", verb: "jump", example: "We jump into the lake on hot days." },
              { subject: "They", verb: "jump", example: "They jump with excitement at the news." }
            ]
          },
          { 
            name: "Share", 
            conjugations: [
              { subject: "I", verb: "share", example: "I share my lunch with colleagues." },
              { subject: "You", verb: "share", example: "You share interesting articles online." },
              { subject: "He/She", verb: "shares", example: "He shares his experience with beginners." },
              { subject: "We", verb: "share", example: "We share a passion for music." },
              { subject: "They", verb: "share", example: "They share resources across departments." }
            ]
          },
          { 
            name: "Pass", 
            conjugations: [
              { subject: "I", verb: "pass", example: "I pass by your house on my way to work." },
              { subject: "You", verb: "pass", example: "You pass the ball too late." },
              { subject: "He/She", verb: "passes", example: "She passes her exams with high marks." },
              { subject: "We", verb: "pass", example: "We pass through security checks quickly." },
              { subject: "They", verb: "pass", example: "They pass legislation after much debate." }
            ]
          },
          { 
            name: "Save", 
            conjugations: [
              { subject: "I", verb: "save", example: "I save money for retirement." },
              { subject: "You", verb: "save", example: "You save time by taking shortcuts." },
              { subject: "He/She", verb: "saves", example: "He saves endangered animals for a living." },
              { subject: "We", verb: "save", example: "We save energy by using LED lights." },
              { subject: "They", verb: "save", example: "They save their best players for important matches." }
            ]
          },
          { 
            name: "Control", 
            conjugations: [
              { subject: "I", verb: "control", example: "I control the budget for my department." },
              { subject: "You", verb: "control", example: "You control the temperature with that remote." },
              { subject: "He/She", verb: "controls", example: "She controls access to the secure area." },
              { subject: "We", verb: "control", example: "We control quality through regular inspections." },
              { subject: "They", verb: "control", example: "They control several companies in the sector." }
            ]
          },
          { 
            name: "Wonder", 
            conjugations: [
              { subject: "I", verb: "wonder", example: "I wonder what tomorrow will bring." },
              { subject: "You", verb: "wonder", example: "You wonder about life on other planets." },
              { subject: "He/She", verb: "wonders", example: "He wonders why people behave as they do." },
              { subject: "We", verb: "wonder", example: "We wonder if we made the right decision." },
              { subject: "They", verb: "wonder", example: "They wonder about the meaning of the painting." }
            ]
          },
          { 
            name: "Include", 
            conjugations: [
              { subject: "I", verb: "include", example: "I include everyone in group activities." },
              { subject: "You", verb: "include", example: "You include too many details in your reports." },
              { subject: "He/She", verb: "includes", example: "She includes references in her papers." },
              { subject: "We", verb: "include", example: "We include breakfast in the hotel price." },
              { subject: "They", verb: "include", example: "They include diverse perspectives in planning." }
            ]
          },
          { 
            name: "Agree", 
            conjugations: [
              { subject: "I", verb: "agree", example: "I agree with your assessment." },
              { subject: "You", verb: "agree", example: "You agree to the terms and conditions." },
              { subject: "He/She", verb: "agrees", example: "He agrees to participate in the study." },
              { subject: "We", verb: "agree", example: "We agree to meet at six o'clock." },
              { subject: "They", verb: "agree", example: "They agree on the importance of education." }
            ]
          },
          { 
            name: "Return", 
            conjugations: [
              { subject: "I", verb: "return", example: "I return books to the library on time." },
              { subject: "You", verb: "return", example: "You return home late from work." },
              { subject: "He/She", verb: "returns", example: "She returns calls promptly." },
              { subject: "We", verb: "return", example: "We return to our hometown for holidays." },
              { subject: "They", verb: "return", example: "They return the borrowed equipment." }
            ]
          },
          { 
            name: "Describe", 
            conjugations: [
              { subject: "I", verb: "describe", example: "I describe my symptoms to the doctor." },
              { subject: "You", verb: "describe", example: "You describe scenes vividly in your writing." },
              { subject: "He/She", verb: "describes", example: "He describes the incident in detail." },
              { subject: "We", verb: "describe", example: "We describe our ideal candidates in the job posting." },
              { subject: "They", verb: "describe", example: "They describe their experience as life-changing." }
            ]
          },     
          { 
            name: "Hope", 
            conjugations: [
              { subject: "I", verb: "hope", example: "I hope for good weather tomorrow." },
              { subject: "You", verb: "hope", example: "You hope to finish the project soon." },
              { subject: "He/She", verb: "hopes", example: "She hopes for a promotion this year." },
              { subject: "We", verb: "hope", example: "We hope you can join us for dinner." },
              { subject: "They", verb: "hope", example: "They hope their flight isn't delayed." }
            ]
          },
          { 
            name: "Allow", 
            conjugations: [
              { subject: "I", verb: "allow", example: "I allow myself one dessert a week." },
              { subject: "You", verb: "allow", example: "You allow your children great freedom." },
              { subject: "He/She", verb: "allows", example: "He allows extra time for questions." },
              { subject: "We", verb: "allow", example: "We allow pets in our building." },
              { subject: "They", verb: "allow", example: "They allow employees to work remotely." }
            ]
          },
          { 
            name: "Visit", 
            conjugations: [
              { subject: "I", verb: "visit", example: "I visit my grandmother every Sunday." },
              { subject: "You", verb: "visit", example: "You visit museums when traveling." },
              { subject: "He/She", verb: "visits", example: "She visits clients throughout the week." },
              { subject: "We", verb: "visit", example: "We visit the beach during summer." },
              { subject: "They", verb: "visit", example: "They visit different countries each year." }
            ]
          },
          { 
            name: "Complete", 
            conjugations: [
              { subject: "I", verb: "complete", example: "I complete my tasks ahead of schedule." },
              { subject: "You", verb: "complete", example: "You complete puzzles with remarkable speed." },
              { subject: "He/She", verb: "completes", example: "He completes a marathon every spring." },
              { subject: "We", verb: "complete", example: "We complete the course requirements." },
              { subject: "They", verb: "complete", example: "They complete renovations next month." }
            ]
          },
          { 
            name: "Love", 
            conjugations: [
              { subject: "I", verb: "love", example: "I love spending time with family." },
              { subject: "You", verb: "love", example: "You love classical music." },
              { subject: "He/She", verb: "loves", example: "She loves baking bread from scratch." },
              { subject: "We", verb: "love", example: "We love traveling to new places." },
              { subject: "They", verb: "love", example: "They love watching movies together." }
            ]
          },
          { 
            name: "Join", 
            conjugations: [
              { subject: "I", verb: "join", example: "I join the meeting via video call." },
              { subject: "You", verb: "join", example: "You join us for dinner every Friday." },
              { subject: "He/She", verb: "joins", example: "He joins the team next week." },
              { subject: "We", verb: "join", example: "We join forces to solve the problem." },
              { subject: "They", verb: "join", example: "They join the protest against pollution." }
            ]
          },
          { 
            name: "Carry", 
            conjugations: [
              { subject: "I", verb: "carry", example: "I carry a notebook everywhere." },
              { subject: "You", verb: "carry", example: "You carry too much in your backpack." },
              { subject: "He/She", verb: "carries", example: "She carries the responsibility well." },
              { subject: "We", verb: "carry", example: "We carry traditions from our homeland." },
              { subject: "They", verb: "carry", example: "They carry supplies to the campsite." }
            ]
          },
          { 
            name: "Realize", 
            conjugations: [
              { subject: "I", verb: "realize", example: "I realize my mistake now." },
              { subject: "You", verb: "realize", example: "You realize the importance of preparation." },
              { subject: "He/She", verb: "realizes", example: "He realizes his potential through practice." },
              { subject: "We", verb: "realize", example: "We realize the consequences of our actions." },
              { subject: "They", verb: "realize", example: "They realize their dreams through hard work." }
            ]
          },
          { 
            name: "Dance", 
            conjugations: [
              { subject: "I", verb: "dance", example: "I dance at weddings and parties." },
              { subject: "You", verb: "dance", example: "You dance with great rhythm." },
              { subject: "He/She", verb: "dances", example: "She dances ballet professionally." },
              { subject: "We", verb: "dance", example: "We dance to celebrate our victory." },
              { subject: "They", verb: "dance", example: "They dance traditional dances at festivals." }
            ]
          },
          { 
            name: "Wish", 
            conjugations: [
              { subject: "I", verb: "wish", example: "I wish for peace in the world." },
              { subject: "You", verb: "wish", example: "You wish things were different." },
              { subject: "He/She", verb: "wishes", example: "He wishes to travel more often." },
              { subject: "We", verb: "wish", example: "We wish you a happy birthday." },
              { subject: "They", verb: "wish", example: "They wish upon shooting stars." }
            ]
          },
          { 
            name: "Admit", 
            conjugations: [
              { subject: "I", verb: "admit", example: "I admit when I am wrong." },
              { subject: "You", verb: "admit", example: "You admit your fears to close friends." },
              { subject: "He/She", verb: "admits", example: "She admits students to the program." },
              { subject: "We", verb: "admit", example: "We admit the evidence into the record." },
              { subject: "They", verb: "admit", example: "They admit making a poor decision." }
            ]
          },
          { 
            name: "Fix", 
            conjugations: [
              { subject: "I", verb: "fix", example: "I fix computers for a living." },
              { subject: "You", verb: "fix", example: "You fix problems efficiently." },
              { subject: "He/She", verb: "fixes", example: "He fixes breakfast every morning." },
              { subject: "We", verb: "fix", example: "We fix the time and place for the meeting." },
              { subject: "They", verb: "fix", example: "They fix their eyes on the horizon." }
            ]
          },
          { 
            name: "Succeed", 
            conjugations: [
              { subject: "I", verb: "succeed", example: "I succeed through persistence." },
              { subject: "You", verb: "succeed", example: "You succeed in challenging situations." },
              { subject: "He/She", verb: "succeeds", example: "She succeeds because of her preparation." },
              { subject: "We", verb: "succeed", example: "We succeed when we work together." },
              { subject: "They", verb: "succeed", example: "They succeed against all odds." }
            ]
          },
          { 
            name: "Enjoy", 
            conjugations: [
              { subject: "I", verb: "enjoy", example: "I enjoy reading mystery novels." },
              { subject: "You", verb: "enjoy", example: "You enjoy outdoor activities." },
              { subject: "He/She", verb: "enjoys", example: "He enjoys collecting vintage records." },
              { subject: "We", verb: "enjoy", example: "We enjoy trying new restaurants." },
              { subject: "They", verb: "enjoy", example: "They enjoy each other's company." }
            ]
          },
          { 
            name: "Clean", 
            conjugations: [
              { subject: "I", verb: "clean", example: "I clean my apartment every weekend." },
              { subject: "You", verb: "clean", example: "You clean your desk before leaving." },
              { subject: "He/She", verb: "cleans", example: "She cleans her brushes after painting." },
              { subject: "We", verb: "clean", example: "We clean the beach as volunteers." },
              { subject: "They", verb: "clean", example: "They clean their equipment after use." }
            ]
          },
          { 
            name: "Achieve", 
            conjugations: [
              { subject: "I", verb: "achieve", example: "I achieve my goals through planning." },
              { subject: "You", verb: "achieve", example: "You achieve excellent results." },
              { subject: "He/She", verb: "achieves", example: "She achieves balance in her life." },
              { subject: "We", verb: "achieve", example: "We achieve more when working together." },
              { subject: "They", verb: "achieve", example: "They achieve recognition for their work." }
            ]
          },
          { 
            name: "Cover", 
            conjugations: [
              { subject: "I", verb: "cover", example: "I cover all the bases in my research." },
              { subject: "You", verb: "cover", example: "You cover expenses for the team lunch." },
              { subject: "He/She", verb: "covers", example: "He covers sports for the local newspaper." },
              { subject: "We", verb: "cover", example: "We cover three topics in each session." },
              { subject: "They", verb: "cover", example: "They cover the furniture during renovations." }
            ]
          },
          { 
            name: "Avoid", 
            conjugations: [
              { subject: "I", verb: "avoid", example: "I avoid eating too much sugar." },
              { subject: "You", verb: "avoid", example: "You avoid confrontation when possible." },
              { subject: "He/She", verb: "avoids", example: "She avoids driving during rush hour." },
              { subject: "We", verb: "avoid", example: "We avoid unnecessary expenses." },
              { subject: "They", verb: "avoid", example: "They avoid making hasty decisions." }
            ]
          },
          { 
            name: "Raise", 
            conjugations: [
              { subject: "I", verb: "raise", example: "I raise questions during meetings." },
              { subject: "You", verb: "raise", example: "You raise awareness about important issues." },
              { subject: "He/She", verb: "raises", example: "He raises funds for charity." },
              { subject: "We", verb: "raise", example: "We raise our children to be kind." },
              { subject: "They", verb: "raise", example: "They raise crops on their farm." }
            ]
          },
          { 
            name: "Experience", 
            conjugations: [
              { subject: "I", verb: "experience", example: "I experience joy when helping others." },
              { subject: "You", verb: "experience", example: "You experience culture shock when traveling." },
              { subject: "He/She", verb: "experiences", example: "She experiences the world through art." },
              { subject: "We", verb: "experience", example: "We experience growth through challenges." },
              { subject: "They", verb: "experience", example: "They experience different cuisines on their trip." }
            ]
          },
          { 
            name: "Identify", 
            conjugations: [
              { subject: "I", verb: "identify", example: "I identify patterns in data." },
              { subject: "You", verb: "identify", example: "You identify with the main character." },
              { subject: "He/She", verb: "identifies", example: "She identifies rare bird species." },
              { subject: "We", verb: "identify", example: "We identify the key issues quickly." },
              { subject: "They", verb: "identify", example: "They identify potential risks in advance." }
            ]
          },
          { 
            name: "Prepare", 
            conjugations: [
              { subject: "I", verb: "prepare", example: "I prepare dinner for the family." },
              { subject: "You", verb: "prepare", example: "You prepare thoroughly for presentations." },
              { subject: "He/She", verb: "prepares", example: "He prepares financial reports monthly." },
              { subject: "We", verb: "prepare", example: "We prepare for emergencies with supplies." },
              { subject: "They", verb: "prepare", example: "They prepare students for college." }
            ]
          },
          { 
            name: "Laugh", 
            conjugations: [
              { subject: "I", verb: "laugh", example: "I laugh at good jokes." },
              { subject: "You", verb: "laugh", example: "You laugh easily and often." },
              { subject: "He/She", verb: "laughs", example: "She laughs with her whole heart." },
              { subject: "We", verb: "laugh", example: "We laugh together during game nights." },
              { subject: "They", verb: "laugh", example: "They laugh at their own mistakes." }
            ]
          },
          { 
            name: "Manage", 
            conjugations: [
              { subject: "I", verb: "manage", example: "I manage a team of designers." },
              { subject: "You", verb: "manage", example: "You manage your time effectively." },
              { subject: "He/She", verb: "manages", example: "He manages the family business." },
              { subject: "We", verb: "manage", example: "We manage to complete projects on time." },
              { subject: "They", verb: "manage", example: "They manage several properties." }
            ]
          },
          { 
            name: "Enter", 
            conjugations: [
              { subject: "I", verb: "enter", example: "I enter the building through the main door." },
              { subject: "You", verb: "enter", example: "You enter data into the system." },
              { subject: "He/She", verb: "enters", example: "She enters competitions regularly." },
              { subject: "We", verb: "enter", example: "We enter the theater quietly." },
              { subject: "They", verb: "enter", example: "They enter new markets each year." }
            ]
          },
          { 
            name: "Care", 
            conjugations: [
              { subject: "I", verb: "care", example: "I care about environmental issues." },
              { subject: "You", verb: "care", example: "You care for your elderly parents." },
              { subject: "He/She", verb: "cares", example: "He cares deeply for his community." },
              { subject: "We", verb: "care", example: "We care about quality education." },
              { subject: "They", verb: "care", example: "They care for abandoned animals." }
            ]
          },
          { 
            name: "Solve", 
            conjugations: [
              { subject: "I", verb: "solve", example: "I solve puzzles in my free time." },
              { subject: "You", verb: "solve", example: "You solve problems creatively." },
              { subject: "He/She", verb: "solves", example: "She solves conflicts diplomatically." },
              { subject: "We", verb: "solve", example: "We solve mathematical equations." },
              { subject: "They", verb: "solve", example: "They solve crimes for a living." }
            ]
          },
          { 
            name: "Produce", 
            conjugations: [
              { subject: "I", verb: "produce", example: "I produce high-quality work." },
              { subject: "You", verb: "produce", example: "You produce award-winning films." },
              { subject: "He/She", verb: "produces", example: "He produces organic vegetables on his farm." },
              { subject: "We", verb: "produce", example: "We produce monthly reports for clients." },
              { subject: "They", verb: "produce", example: "They produce cars in their factory." }
            ]
          },
          { 
            name: "Close", 
            conjugations: [
              { subject: "I", verb: "close", example: "I close my eyes during scary movies." },
              { subject: "You", verb: "close", example: "You close deals successfully." },
              { subject: "He/She", verb: "closes", example: "She closes the shop at 8 PM." },
              { subject: "We", verb: "close", example: "We close our meetings with action items." },
              { subject: "They", verb: "close", example: "They close ranks when threatened." }
            ]
          },
          { 
            name: "Notice", 
            conjugations: [
              { subject: "I", verb: "notice", example: "I notice small details in paintings." },
              { subject: "You", verb: "notice", example: "You notice changes in people's behavior." },
              { subject: "He/She", verb: "notices", example: "He notices when someone is upset." },
              { subject: "We", verb: "notice", example: "We notice the temperature dropping." },
              { subject: "They", verb: "notice", example: "They notice patterns in customer feedback." }
            ]
          },
          { 
            name: "Imagine", 
            conjugations: [
              { subject: "I", verb: "imagine", example: "I imagine traveling to distant planets." },
              { subject: "You", verb: "imagine", example: "You imagine creative solutions." },
              { subject: "He/She", verb: "imagines", example: "She imagines her future career." },
              { subject: "We", verb: "imagine", example: "We imagine a world without poverty." },
              { subject: "They", verb: "imagine", example: "They imagine possibilities others miss." }
            ]
          },
          { 
            name: "Replace", 
            conjugations: [
              { subject: "I", verb: "replace", example: "I replace worn-out shoes regularly." },
              { subject: "You", verb: "replace", example: "You replace negative thoughts with positive ones." },
              { subject: "He/She", verb: "replaces", example: "He replaces the batteries in smoke detectors." },
              { subject: "We", verb: "replace", example: "We replace old equipment with newer models." },
              { subject: "They", verb: "replace", example: "They replace staff who leave the company." }
            ]
          },
          { 
            name: "Improve", 
            conjugations: [
              { subject: "I", verb: "improve", example: "I improve my skills through practice." },
              { subject: "You", verb: "improve", example: "You improve processes in the organization." },
              { subject: "He/She", verb: "improves", example: "She improves her English by reading." },
              { subject: "We", verb: "improve", example: "We improve with each performance." },
              { subject: "They", verb: "improve", example: "They improve their offerings based on feedback." }
            ]
          },
          { 
            name: "Apply", 
            conjugations: [
              { subject: "I", verb: "apply", example: "I apply for jobs in my field." },
              { subject: "You", verb: "apply", example: "You apply sunscreen before going outside." },
              { subject: "He/She", verb: "applies", example: "He applies principles of physics to engineering." },
              { subject: "We", verb: "apply", example: "We apply new methods in our research." },
              { subject: "They", verb: "apply", example: "They apply pressure to stop bleeding." }
            ]
          },
          { 
            name: "Report", 
            conjugations: [
              { subject: "I", verb: "report", example: "I report directly to the CEO." },
              { subject: "You", verb: "report", example: "You report suspicious activities to security." },
              { subject: "He/She", verb: "reports", example: "She reports on environmental issues." },
              { subject: "We", verb: "report", example: "We report our findings to the committee." },
              { subject: "They", verb: "report", example: "They report quarterly earnings to shareholders." }
            ]
          },
          { 
            name: "Listen", 
            conjugations: [
              { subject: "I", verb: "listen", example: "I listen to podcasts while commuting." },
              { subject: "You", verb: "listen", example: "You listen carefully to instructions." },
              { subject: "He/She", verb: "listens", example: "He listens to classical music before bed." },
              { subject: "We", verb: "listen", example: "We listen to customer feedback seriously." },
              { subject: "They", verb: "listen", example: "They listen for birds in the forest." }
            ]
          },
          { 
            name: "Discover", 
            conjugations: [
              { subject: "I", verb: "discover", example: "I discover new restaurants in my neighborhood." },
              { subject: "You", verb: "discover", example: "You discover hidden talents in others." },
              { subject: "He/She", verb: "discovers", example: "She discovers ancient artifacts." },
              { subject: "We", verb: "discover", example: "We discover new solutions through collaboration." },
              { subject: "They", verb: "discover", example: "They discover the source of the problem." }
            ]
          },
          { 
            name: "Protect", 
            conjugations: [
              { subject: "I", verb: "protect", example: "I protect my data with strong passwords." },
              { subject: "You", verb: "protect", example: "You protect your skin from the sun." },
              { subject: "He/She", verb: "protects", example: "He protects endangered species." },
              { subject: "We", verb: "protect", example: "We protect our children from harm." },
              { subject: "They", verb: "protect", example: "They protect their intellectual property." }
            ]
          },
          { 
            name: "Occur", 
            conjugations: [
              { subject: "I", verb: "occur", example: "It occurs to me that we forgot something." },
              { subject: "You", verb: "occur", example: "It occurs to you suddenly." },
              { subject: "He/She", verb: "occurs", example: "It occurs to him during meditation." },
              { subject: "We", verb: "occur", example: "It occurs to us that there's a better way." },
              { subject: "They", verb: "occur", example: "Earthquakes occur along fault lines." }
            ]
          },
          { 
            name: "Fight", 
            conjugations: [
              { subject: "I", verb: "fight", example: "I fight for equal rights." },
              { subject: "You", verb: "fight", example: "You fight against injustice." },
              { subject: "He/She", verb: "fights", example: "She fights to protect the environment." },
              { subject: "We", verb: "fight", example: "We fight our fears to grow stronger." },
              { subject: "They", verb: "fight", example: "They fight for their beliefs." }
            ]
          },
          { 
            name: "Remove", 
            conjugations: [
              { subject: "I", verb: "remove", example: "I remove obstacles from my path." },
              { subject: "You", verb: "remove", example: "You remove your shoes before entering." },
              { subject: "He/She", verb: "removes", example: "She removes stains from clothing." },
              { subject: "We", verb: "remove", example: "We remove unnecessary steps in the process." },
              { subject: "They", verb: "remove", example: "They remove old furniture from the office." }
            ]
          },
          { 
            name: "Discuss", 
            conjugations: [
              { subject: "I", verb: "discuss", example: "I discuss options with my team." },
              { subject: "You", verb: "discuss", example: "You discuss politics at dinner." },
              { subject: "He/She", verb: "discusses", example: "He discusses literature in his podcast." },
              { subject: "We", verb: "discuss", example: "We discuss budget plans quarterly." },
              { subject: "They", verb: "discuss", example: "They discuss their concerns openly." }
            ]
          },
          { 
            name: "Face", 
            conjugations: [
              { subject: "I", verb: "face", example: "I face challenges with courage." },
              { subject: "You", verb: "face", example: "You face north when meditating." },
              { subject: "He/She", verb: "faces", example: "She faces her fears directly." },
              { subject: "We", verb: "face", example: "We face difficult decisions together." },
              { subject: "They", verb: "face", example: "They face competition in the market." }
            ]
          },
          { 
            name: "Cut", 
            conjugations: [
              { subject: "I", verb: "cut", example: "I cut expenses to save money." },
              { subject: "You", verb: "cut", example: "You cut vegetables for the salad." },
              { subject: "He/She", verb: "cuts", example: "He cuts hair professionally." },
              { subject: "We", verb: "cut", example: "We cut through the park to save time." },
              { subject: "They", verb: "cut", example: "They cut the ribbon at the grand opening." }
            ]
          },
          { 
            name: "Miss", 
            conjugations: [
              { subject: "I", verb: "miss", example: "I miss my family when traveling." },
              { subject: "You", verb: "miss", example: "You miss the point of the story." },
              { subject: "He/She", verb: "misses", example: "She misses her train sometimes." },
              { subject: "We", verb: "miss", example: "We miss the old neighborhood." },
              { subject: "They", verb: "miss", example: "They miss opportunities by not networking." }
            ]
          },
          { 
            name: "Reduce", 
            conjugations: [
              { subject: "I", verb: "reduce", example: "I reduce my carbon footprint." },
              { subject: "You", verb: "reduce", example: "You reduce waste by recycling." },
              { subject: "He/She", verb: "reduces", example: "He reduces stress through meditation." },
              { subject: "We", verb: "reduce", example: "We reduce our spending during recession." },
              { subject: "They", verb: "reduce", example: "They reduce prices for clearance sales." }
            ]
          },
          { 
            name: "Sing", 
            conjugations: [
              { subject: "I", verb: "sing", example: "I sing in the shower." },
              { subject: "You", verb: "sing", example: "You sing beautifully in harmony." },
              { subject: "He/She", verb: "sings", example: "She sings in a choir." },
              { subject: "We", verb: "sing", example: "We sing carols during holidays." },
              { subject: "They", verb: "sing", example: "They sing folk songs around the campfire." }
            ]
          },
          { 
            name: "Deliver", 
            conjugations: [
              { subject: "I", verb: "deliver", example: "I deliver packages for a living." },
              { subject: "You", verb: "deliver", example: "You deliver speeches with confidence." },
              { subject: "He/She", verb: "delivers", example: "He delivers newspapers every morning." },
              { subject: "We", verb: "deliver", example: "We deliver results on time." },
              { subject: "They", verb: "deliver", example: "They deliver meals to elderly residents." }
            ]
          },
          { 
            name: "Collect", 
            conjugations: [
              { subject: "I", verb: "collect", example: "I collect vintage stamps." },
              { subject: "You", verb: "collect", example: "You collect data for your research." },
              { subject: "He/She", verb: "collects", example: "She collects donations for charity." },
              { subject: "We", verb: "collect", example: "We collect signatures for the petition." },
              { subject: "They", verb: "collect", example: "They collect rainwater for gardening." }
            ]
          },
          { 
            name: "Throw", 
            conjugations: [
              { subject: "I", verb: "throw", example: "I throw a party every New Year." },
              { subject: "You", verb: "throw", example: "You throw the ball to the dog." },
              { subject: "He/She", verb: "throws", example: "He throws discus for the university team." },
              { subject: "We", verb: "throw", example: "We throw away broken items." },
              { subject: "They", verb: "throw", example: "They throw confetti at celebrations." }
            ]
          },
          { 
            name: "Treat", 
            conjugations: [
              { subject: "I", verb: "treat", example: "I treat everyone with respect." },
              { subject: "You", verb: "treat", example: "You treat yourself to dessert occasionally." },
              { subject: "He/She", verb: "treats", example: "She treats patients with various conditions." },
              { subject: "We", verb: "treat", example: "We treat our employees like family." },
              { subject: "They", verb: "treat", example: "They treat the symptoms, not the cause." }
            ]
          },
          { 
            name: "Introduce", 
            conjugations: [
              { subject: "I", verb: "introduce", example: "I introduce new members to the team." },
              { subject: "You", verb: "introduce", example: "You introduce innovative ideas." },
              { subject: "He/She", verb: "introduces", example: "He introduces speakers at the conference." },
              { subject: "We", verb: "introduce", example: "We introduce changes gradually." },
              { subject: "They", verb: "introduce", example: "They introduce new products yearly." }
            ]
          },
          { 
            name: "Answer", 
            conjugations: [
              { subject: "I", verb: "answer", example: "I answer emails promptly." },
              { subject: "You", verb: "answer", example: "You answer the phone on the first ring." },
              { subject: "He/She", verb: "answers", example: "She answers questions thoughtfully." },
              { subject: "We", verb: "answer", example: "We answer to the board of directors." },
              { subject: "They", verb: "answer", example: "They answer customer inquiries 24/7." }
            ]
          },
          { 
            name: "Exist", 
            conjugations: [
              { subject: "I", verb: "exist", example: "I exist to make a positive difference." },
              { subject: "You", verb: "exist", example: "You exist in my memories forever." },
              { subject: "He/She", verb: "exists", example: "He exists between two cultures." },
              { subject: "We", verb: "exist", example: "We exist in a rapidly changing world." },
              { subject: "They", verb: "exist", example: "They exist primarily in tropical regions." }
            ]
          },
          { 
            name: "Pull", 
            conjugations: [
              { subject: "I", verb: "pull", example: "I pull weeds from the garden." },
              { subject: "You", verb: "pull", example: "You pull the door instead of pushing it." },
              { subject: "He/She", verb: "pulls", example: "She pulls her weight on the team." },
              { subject: "We", verb: "pull", example: "We pull together during difficult times." },
              { subject: "They", verb: "pull", example: "They pull an all-nighter to finish the project." }
            ]
          },
          { 
            name: "Maintain", 
            conjugations: [
              { subject: "I", verb: "maintain", example: "I maintain a healthy lifestyle." },
              { subject: "You", verb: "maintain", example: "You maintain good relationships with clients." },
              { subject: "He/She", verb: "maintains", example: "He maintains the company website." },
              { subject: "We", verb: "maintain", example: "We maintain our equipment regularly." },
              { subject: "They", verb: "maintain", example: "They maintain strict quality standards." }
            ]
          },
          { 
            name: "Type", 
            conjugations: [
              { subject: "I", verb: "type", example: "I type quickly on my keyboard." },
              { subject: "You", verb: "type", example: "You type without looking at the keys." },
              { subject: "He/She", verb: "types", example: "She types 100 words per minute." },
              { subject: "We", verb: "type", example: "We type our reports in the standard format." },
              { subject: "They", verb: "type", example: "They type notes during the meeting." }
            ]
          },
          { 
            name: "Suggest", 
            conjugations: [
              { subject: "I", verb: "suggest", example: "I suggest we leave early to avoid traffic." },
              { subject: "You", verb: "suggest", example: "You suggest creative solutions to problems." },
              { subject: "He/She", verb: "suggests", example: "He suggests reading this book." },
              { subject: "We", verb: "suggest", example: "We suggest alternatives when necessary." },
              { subject: "They", verb: "suggest", example: "They suggest meeting in person instead." }
            ]
          },
          { 
            name: "Connect", 
            conjugations: [
              { subject: "I", verb: "connect", example: "I connect with people through shared interests." },
              { subject: "You", verb: "connect", example: "You connect the dots quickly." },
              { subject: "He/She", verb: "connects", example: "She connects the equipment properly." },
              { subject: "We", verb: "connect", example: "We connect flights in Chicago." },
              { subject: "They", verb: "connect", example: "They connect students with mentors." }
            ]
          },
          { 
            name: "Compare", 
            conjugations: [
              { subject: "I", verb: "compare", example: "I compare prices before buying." },
              { subject: "You", verb: "compare", example: "You compare yourself to others too much." },
              { subject: "He/She", verb: "compares", example: "He compares different investment options." },
              { subject: "We", verb: "compare", example: "We compare our results with previous years." },
              { subject: "They", verb: "compare", example: "They compare notes after the meeting." }
            ]
          },
          { 
            name: "Handle", 
            conjugations: [
              { subject: "I", verb: "handle", example: "I handle customer complaints professionally." },
              { subject: "You", verb: "handle", example: "You handle pressure well." },
              { subject: "He/She", verb: "handles", example: "She handles the finances for the company." },
              { subject: "We", verb: "handle", example: "We handle each case individually." },
              { subject: "They", verb: "handle", example: "They handle fragile items with care." }
            ]
          },
          { 
            name: "Fill", 
            conjugations: [
              { subject: "I", verb: "fill", example: "I fill my water bottle several times a day." },
              { subject: "You", verb: "fill", example: "You fill out forms accurately." },
              { subject: "He/She", verb: "fills", example: "He fills the car with gas once a week." },
              { subject: "We", verb: "fill", example: "We fill our calendar with appointments." },
              { subject: "They", verb: "fill", example: "They fill the theater for every performance." }
            ]
          },
          { 
            name: "Ignore", 
            conjugations: [
              { subject: "I", verb: "ignore", example: "I ignore distractions when working." },
              { subject: "You", verb: "ignore", example: "You ignore the warning signs sometimes." },
              { subject: "He/She", verb: "ignores", example: "She ignores negative comments online." },
              { subject: "We", verb: "ignore", example: "We ignore petty disagreements." },
              { subject: "They", verb: "ignore", example: "They ignore emails during weekends." }
            ]
          },
          { 
            name: "Survive", 
            conjugations: [
              { subject: "I", verb: "survive", example: "I survive on coffee during busy weeks." },
              { subject: "You", verb: "survive", example: "You survive challenges that would break others." },
              { subject: "He/She", verb: "survives", example: "He survives on minimal sleep." },
              { subject: "We", verb: "survive", example: "We survive difficult times by supporting each other." },
              { subject: "They", verb: "survive", example: "They survive extreme weather conditions." }
            ]
          },
          { 
            name: "Attempt", 
            conjugations: [
              { subject: "I", verb: "attempt", example: "I attempt to solve problems before asking for help." },
              { subject: "You", verb: "attempt", example: "You attempt difficult climbs regularly." },
              { subject: "He/She", verb: "attempts", example: "She attempts new recipes on weekends." },
              { subject: "We", verb: "attempt", example: "We attempt to reduce our environmental impact." },
              { subject: "They", verb: "attempt", example: "They attempt to break world records." }
            ]
          },
          { 
            name: "Divide", 
            conjugations: [
              { subject: "I", verb: "divide", example: "I divide my time between work and family." },
              { subject: "You", verb: "divide", example: "You divide the cake equally among guests." },
              { subject: "He/She", verb: "divides", example: "He divides the class into small groups." },
              { subject: "We", verb: "divide", example: "We divide responsibilities fairly." },
              { subject: "They", verb: "divide", example: "They divide profits among shareholders." }
            ]
          },
          { 
            name: "Claim", 
            conjugations: [
              { subject: "I", verb: "claim", example: "I claim my luggage at the airport." },
              { subject: "You", verb: "claim", example: "You claim to have seen a ghost." },
              { subject: "He/She", verb: "claims", example: "She claims her insurance after an accident." },
              { subject: "We", verb: "claim", example: "We claim our rightful place in history." },
              { subject: "They", verb: "claim", example: "They claim ownership of the land." }
            ]
          },
          { 
            name: "Practice", 
            conjugations: [
              { subject: "I", verb: "practice", example: "I practice piano every day." },
              { subject: "You", verb: "practice", example: "You practice medicine in a rural clinic." },
              { subject: "He/She", verb: "practices", example: "He practices yoga in the morning." },
              { subject: "We", verb: "practice", example: "We practice our presentation before the meeting." },
              { subject: "They", verb: "practice", example: "They practice sustainable farming methods." }
            ]
          },
          { 
            name: "Mention", 
            conjugations: [
              { subject: "I", verb: "mention", example: "I mention your contribution in my speech." },
              { subject: "You", verb: "mention", example: "You mention the issue casually." },
              { subject: "He/She", verb: "mentions", example: "She mentions her experiences in her book." },
              { subject: "We", verb: "mention", example: "We mention the deadline in every email." },
              { subject: "They", verb: "mention", example: "They mention potential risks in the report." }
            ]
          },
          { 
            name: "Encourage", 
            conjugations: [
              { subject: "I", verb: "encourage", example: "I encourage my children to try new things." },
              { subject: "You", verb: "encourage", example: "You encourage innovation in your team." },
              { subject: "He/She", verb: "encourages", example: "He encourages students to ask questions." },
              { subject: "We", verb: "encourage", example: "We encourage open communication." },
              { subject: "They", verb: "encourage", example: "They encourage environmental awareness." }
            ]
          },
          { 
            name: "Request", 
            conjugations: [
              { subject: "I", verb: "request", example: "I request information about your services." },
              { subject: "You", verb: "request", example: "You request time off for personal reasons." },
              { subject: "He/She", verb: "requests", example: "She requests assistance with the project." },
              { subject: "We", verb: "request", example: "We request your presence at the meeting." },
              { subject: "They", verb: "request", example: "They request feedback from customers." }
            ]
          },
          { 
            name: "Test", 
            conjugations: [
              { subject: "I", verb: "test", example: "I test new software before release." },
              { subject: "You", verb: "test", example: "You test recipes in your kitchen." },
              { subject: "He/She", verb: "tests", example: "He tests his limits in competitions." },
              { subject: "We", verb: "test", example: "We test all products for quality." },
              { subject: "They", verb: "test", example: "They test candidates through interviews." }
            ]
          },
          { 
            name: "Fly", 
            conjugations: [
              { subject: "I", verb: "fly", example: "I fly to London twice a year." },
              { subject: "You", verb: "fly", example: "You fly kites at the beach." },
              { subject: "He/She", verb: "flies", example: "She flies helicopters professionally." },
              { subject: "We", verb: "fly", example: "We fly our national flag with pride." },
              { subject: "They", verb: "fly", example: "They fly south for the winter." }
            ]
          },
          { 
            name: "Push", 
            conjugations: [
              { subject: "I", verb: "push", example: "I push myself to improve constantly." },
              { subject: "You", verb: "push", example: "You push the boundaries of conventional thinking." },
              { subject: "He/She", verb: "pushes", example: "He pushes the cart through the supermarket." },
              { subject: "We", verb: "push", example: "We push for changes in policy." },
              { subject: "They", verb: "push", example: "They push back against unreasonable demands." }
            ]
          },
          { 
            name: "Disappear", 
            conjugations: [
              { subject: "I", verb: "disappear", example: "I disappear into books when reading." },
              { subject: "You", verb: "disappear", example: "You disappear without saying goodbye." },
              { subject: "He/She", verb: "disappears", example: "She disappears from social media periodically." },
              { subject: "We", verb: "disappear", example: "We disappear into the crowd." },
              { subject: "They", verb: "disappear", example: "They disappear from radar when flying low." }
            ]
          },
          { 
            name: "Examine", 
            conjugations: [
              { subject: "I", verb: "examine", example: "I examine every detail carefully." },
              { subject: "You", verb: "examine", example: "You examine evidence objectively." },
              { subject: "He/She", verb: "examines", example: "He examines patients in the clinic." },
              { subject: "We", verb: "examine", example: "We examine all options before deciding." },
              { subject: "They", verb: "examine", example: "They examine artifacts from ancient civilizations." }
            ]
          },
          { 
            name: "Count", 
            conjugations: [
              { subject: "I", verb: "count", example: "I count calories when dieting." },
              { subject: "You", verb: "count", example: "You count sheep to fall asleep." },
              { subject: "He/She", verb: "counts", example: "She counts inventory at the end of each day." },
              { subject: "We", verb: "count", example: "We count on your support." },
              { subject: "They", verb: "count", example: "They count votes after the election." }
            ]
          },
          { 
            name: "Reflect", 
            conjugations: [
              { subject: "I", verb: "reflect", example: "I reflect on my experiences regularly." },
              { subject: "You", verb: "reflect", example: "You reflect deeply before responding." },
              { subject: "He/She", verb: "reflects", example: "He reflects the values of his community." },
              { subject: "We", verb: "reflect", example: "We reflect on our mistakes to learn from them." },
              { subject: "They", verb: "reflect", example: "They reflect light from their shiny surfaces." }
            ]
          },
          { 
            name: "Rely", 
            conjugations: [
              { subject: "I", verb: "rely", example: "I rely on my intuition in uncertain situations." },
              { subject: "You", verb: "rely", example: "You rely too much on technology." },
              { subject: "He/She", verb: "relies", example: "She relies on her team members." },
              { subject: "We", verb: "rely", example: "We rely on accurate data for decision-making." },
              { subject: "They", verb: "rely", example: "They rely on renewable energy sources." }
            ]
          },
          { 
            name: "Influence", 
            conjugations: [
              { subject: "I", verb: "influence", example: "I influence my peers through example." },
              { subject: "You", verb: "influence", example: "You influence consumer behavior through marketing." },
              { subject: "He/She", verb: "influences", example: "He influences policy decisions." },
              { subject: "We", verb: "influence", example: "We influence community standards." },
              { subject: "They", verb: "influence", example: "They influence young minds as teachers." }
            ]
          },
          { 
            name: "Hide", 
            conjugations: [
              { subject: "I", verb: "hide", example: "I hide my feelings sometimes." },
              { subject: "You", verb: "hide", example: "You hide presents before birthdays." },
              { subject: "He/She", verb: "hides", example: "She hides her talent out of modesty." },
              { subject: "We", verb: "hide", example: "We hide our disappointment with a smile." },
              { subject: "They", verb: "hide", example: "They hide in the bushes during the game." }
            ]
          },
          { 
            name: "Address", 
            conjugations: [
              { subject: "I", verb: "address", example: "I address the audience at conferences." },
              { subject: "You", verb: "address", example: "You address issues directly." },
              { subject: "He/She", verb: "addresses", example: "He addresses the letter to his grandmother." },
              { subject: "We", verb: "address", example: "We address concerns in team meetings." },
              { subject: "They", verb: "address", example: "They address each point in the proposal." }
            ]
          },
          { 
            name: "Record", 
            conjugations: [
              { subject: "I", verb: "record", example: "I record my lectures for later review." },
              { subject: "You", verb: "record", example: "You record family events on video." },
              { subject: "He/She", verb: "records", example: "She records data from each experiment." },
              { subject: "We", verb: "record", example: "We record minutes during meetings." },
              { subject: "They", verb: "record", example: "They record their album in a professional studio." }
            ]
          },
          { 
            name: "Fail", 
            conjugations: [
              { subject: "I", verb: "fail", example: "I fail to understand the complexity sometimes." },
              { subject: "You", verb: "fail", example: "You fail to notice the small details." },
              { subject: "He/She", verb: "fails", example: "He fails to meet deadlines occasionally." },
              { subject: "We", verb: "fail", example: "We fail forward and learn from mistakes." },
              { subject: "They", verb: "fail", example: "They fail to recognize the consequences." }
            ]
          },
          { 
            name: "Indicate", 
            conjugations: [
              { subject: "I", verb: "indicate", example: "I indicate my preferences on the form." },
              { subject: "You", verb: "indicate", example: "You indicate directions with hand gestures." },
              { subject: "He/She", verb: "indicates", example: "She indicates her approval with a nod." },
              { subject: "We", verb: "indicate", example: "We indicate our availability in the calendar." },
              { subject: "They", verb: "indicate", example: "They indicate interest by asking questions." }
            ]
          },
          { 
            name: "Represent", 
            conjugations: [
              { subject: "I", verb: "represent", example: "I represent my company at trade shows." },
              { subject: "You", verb: "represent", example: "You represent the voice of the community." },
              { subject: "He/She", verb: "represents", example: "He represents clients in court." },
              { subject: "We", verb: "represent", example: "We represent diverse perspectives in our work." },
              { subject: "They", verb: "represent", example: "They represent their country in the Olympics." }
            ]
          },
          { 
            name: "Print", 
            conjugations: [
              { subject: "I", verb: "print", example: "I print documents double-sided to save paper." },
              { subject: "You", verb: "print", example: "You print photos for your scrapbook." },
              { subject: "He/She", verb: "prints", example: "She prints labels for the packages." },
              { subject: "We", verb: "print", example: "We print our newsletter monthly." },
              { subject: "They", verb: "print", example: "They print money at the national mint." }
            ]
          },
          { 
            name: "Release", 
            conjugations: [
              { subject: "I", verb: "release", example: "I release tension through yoga." },
              { subject: "You", verb: "release", example: "You release the brake before driving." },
              { subject: "He/She", verb: "releases", example: "He releases a new book every year." },
              { subject: "We", verb: "release", example: "We release updates quarterly." },
              { subject: "They", verb: "release", example: "They release rehabilitated animals back to the wild." }
            ]
          },
          { 
            name: "Protect", 
            conjugations: [
              { subject: "I", verb: "protect", example: "I protect my skin from the sun." },
              { subject: "You", verb: "protect", example: "You protect your password carefully." },
              { subject: "He/She", verb: "protects", example: "She protects her younger siblings." },
              { subject: "We", verb: "protect", example: "We protect our environment through recycling." },
              { subject: "They", verb: "protect", example: "They protect wildlife in the sanctuary." }
            ]
          },
          { 
            name: "Suffer", 
            conjugations: [
              { subject: "I", verb: "suffer", example: "I suffer from allergies in spring." },
              { subject: "You", verb: "suffer", example: "You suffer unnecessarily by not asking for help." },
              { subject: "He/She", verb: "suffers", example: "He suffers from chronic back pain." },
              { subject: "We", verb: "suffer", example: "We suffer the consequences of poor planning." },
              { subject: "They", verb: "suffer", example: "They suffer through extreme temperatures." }
            ]
          },
          { 
            name: "Intend", 
            conjugations: [
              { subject: "I", verb: "intend", example: "I intend to finish this project today." },
              { subject: "You", verb: "intend", example: "You intend to travel after graduation." },
              { subject: "He/She", verb: "intends", example: "She intends to apply for the position." },
              { subject: "We", verb: "intend", example: "We intend to renovate the kitchen next year." },
              { subject: "They", verb: "intend", example: "They intend to expand their business overseas." }
            ]
          },
          { 
            name: "Confirm", 
            conjugations: [
              { subject: "I", verb: "confirm", example: "I confirm appointments before attending." },
              { subject: "You", verb: "confirm", example: "You confirm your reservation by email." },
              { subject: "He/She", verb: "confirms", example: "He confirms details with clients." },
              { subject: "We", verb: "confirm", example: "We confirm the information before publishing." },
              { subject: "They", verb: "confirm", example: "They confirm their attendance at events." }
            ]
          },
          { 
            name: "Kiss", 
            conjugations: [
              { subject: "I", verb: "kiss", example: "I kiss my children goodnight." },
              { subject: "You", verb: "kiss", example: "You kiss your partner goodbye each morning." },
              { subject: "He/She", verb: "kisses", example: "She kisses the baby's forehead." },
              { subject: "We", verb: "kiss", example: "We kiss cheeks when greeting in some cultures." },
              { subject: "They", verb: "kiss", example: "They kiss the bride and groom at weddings." }
            ]
          },
          { 
            name: "Seek", 
            conjugations: [
              { subject: "I", verb: "seek", example: "I seek advice from experienced colleagues." },
              { subject: "You", verb: "seek", example: "You seek adventure in your travels." },
              { subject: "He/She", verb: "seeks", example: "He seeks solutions to complex problems." },
              { subject: "We", verb: "seek", example: "We seek to understand before being understood." },
              { subject: "They", verb: "seek", example: "They seek funding for their startup." }
            ]
          },
          { 
            name: "Review", 
            conjugations: [
              { subject: "I", verb: "review", example: "I review my notes before exams." },
              { subject: "You", verb: "review", example: "You review contracts thoroughly." },
              { subject: "He/She", verb: "reviews", example: "She reviews books for a literary magazine." },
              { subject: "We", verb: "review", example: "We review applications twice a year." },
              { subject: "They", verb: "review", example: "They review the budget quarterly." }
            ]
          },
          { 
            name: "Acquire", 
            conjugations: [
              { subject: "I", verb: "acquire", example: "I acquire new skills through continuous learning." },
              { subject: "You", verb: "acquire", example: "You acquire antiques for your collection." },
              { subject: "He/She", verb: "acquires", example: "He acquires knowledge through reading." },
              { subject: "We", verb: "acquire", example: "We acquire properties in developing areas." },
              { subject: "They", verb: "acquire", example: "They acquire smaller companies regularly." }
            ]
          },
          { 
            name: "Benefit", 
            conjugations: [
              { subject: "I", verb: "benefit", example: "I benefit from regular exercise." },
              { subject: "You", verb: "benefit", example: "You benefit from diverse perspectives." },
              { subject: "He/She", verb: "benefits", example: "She benefits from early morning meditation." },
              { subject: "We", verb: "benefit", example: "We benefit from collaboration." },
              { subject: "They", verb: "benefit", example: "They benefit from tax incentives." }
            ]
          },
          { 
            name: "Hang", 
            conjugations: [
              { subject: "I", verb: "hang", example: "I hang pictures on the wall." },
              { subject: "You", verb: "hang", example: "You hang out with friends after work." },
              { subject: "He/She", verb: "hangs", example: "He hangs his coat on the rack." },
              { subject: "We", verb: "hang", example: "We hang decorations for parties." },
              { subject: "They", verb: "hang", example: "They hang their clothes to dry." }
            ]
          },
          { 
            name: "Relate", 
            conjugations: [
              { subject: "I", verb: "relate", example: "I relate to your experience." },
              { subject: "You", verb: "relate", example: "You relate stories from your childhood." },
              { subject: "He/She", verb: "relates", example: "She relates well to children." },
              { subject: "We", verb: "relate", example: "We relate our success to hard work." },
              { subject: "They", verb: "relate", example: "They relate current events to historical patterns." }
            ]
          },
          { 
            name: "Mix", 
            conjugations: [
              { subject: "I", verb: "mix", example: "I mix ingredients for the cake." },
              { subject: "You", verb: "mix", example: "You mix colors to create new shades." },
              { subject: "He/She", verb: "mixes", example: "He mixes drinks at the bar." },
              { subject: "We", verb: "mix", example: "We mix business with pleasure occasionally." },
              { subject: "They", verb: "mix", example: "They mix different musical styles in their compositions." }
            ]
          },
          { 
            name: "Function", 
            conjugations: [
              { subject: "I", verb: "function", example: "I function well under pressure." },
              { subject: "You", verb: "function", example: "You function as team leader in her absence." },
              { subject: "He/She", verb: "functions", example: "She functions as both manager and mentor." },
              { subject: "We", verb: "function", example: "We function as a cohesive unit." },
              { subject: "They", verb: "function", example: "They function despite limited resources." }
            ]
          },
          { 
            name: "Establish", 
            conjugations: [
              { subject: "I", verb: "establish", example: "I establish clear boundaries in relationships." },
              { subject: "You", verb: "establish", example: "You establish new protocols for safety." },
              { subject: "He/She", verb: "establishes", example: "He establishes rapport with clients quickly." },
              { subject: "We", verb: "establish", example: "We establish goals at the beginning of each quarter." },
              { subject: "They", verb: "establish", example: "They establish branches in different countries." }
            ]
          },
          { 
            name: "Engage", 
            conjugations: [
              { subject: "I", verb: "engage", example: "I engage in meaningful conversations." },
              { subject: "You", verb: "engage", example: "You engage with your audience effectively." },
              { subject: "He/She", verb: "engages", example: "She engages students through interactive activities." },
              { subject: "We", verb: "engage", example: "We engage local communities in our projects." },
              { subject: "They", verb: "engage", example: "They engage experts for specialized tasks." }
            ]
          },
          { 
            name: "Contain", 
            conjugations: [
              { subject: "I", verb: "contain", example: "I contain my excitement until the announcement." },
              { subject: "You", verb: "contain", example: "You contain the spread of misinformation." },
              { subject: "He/She", verb: "contains", example: "This box contains important documents." },
              { subject: "We", verb: "contain", example: "We contain costs by careful planning." },
              { subject: "They", verb: "contain", example: "They contain the fire before it spreads." }
            ]
          },
          { 
            name: "Arrange", 
            conjugations: [
              { subject: "I", verb: "arrange", example: "I arrange flowers for special occasions." },
              { subject: "You", verb: "arrange", example: "You arrange your schedule to fit everything in." },
              { subject: "He/She", verb: "arranges", example: "She arranges music for the orchestra." },
              { subject: "We", verb: "arrange", example: "We arrange transportation for conference attendees." },
              { subject: "They", verb: "arrange", example: "They arrange furniture to maximize space." }
            ]
          },
          { 
            name: "Thank", 
            conjugations: [
              { subject: "I", verb: "thank", example: "I thank you for your assistance." },
              { subject: "You", verb: "thank", example: "You thank everyone for their contributions." },
              { subject: "He/She", verb: "thanks", example: "He thanks his parents for their support." },
              { subject: "We", verb: "thank", example: "We thank our sponsors in the program." },
              { subject: "They", verb: "thank", example: "They thank volunteers with a special dinner." }
            ]
          },
          { 
            name: "Shake", 
            conjugations: [
              { subject: "I", verb: "shake", example: "I shake hands when meeting someone new." },
              { subject: "You", verb: "shake", example: "You shake salt onto your food." },
              { subject: "He/She", verb: "shakes", example: "She shakes her head in disagreement." },
              { subject: "We", verb: "shake", example: "We shake things up with innovative ideas." },
              { subject: "They", verb: "shake", example: "They shake the tree to collect apples." }
            ]
          },
          { 
            name: "Adopt", 
            conjugations: [
              { subject: "I", verb: "adopt", example: "I adopt new technologies quickly." },
              { subject: "You", verb: "adopt", example: "You adopt a positive attitude despite challenges." },
              { subject: "He/She", verb: "adopts", example: "He adopts a rescue dog from the shelter." },
              { subject: "We", verb: "adopt", example: "We adopt sustainable practices in our business." },
              { subject: "They", verb: "adopt", example: "They adopt children from different countries." }
            ]
          },
          { 
            name: "Access", 
            conjugations: [
              { subject: "I", verb: "access", example: "I access my emails remotely." },
              { subject: "You", verb: "access", example: "You access the database securely." },
              { subject: "He/She", verb: "accesses", example: "She accesses restricted areas with her key card." },
              { subject: "We", verb: "access", example: "We access information through various sources." },
              { subject: "They", verb: "access", example: "They access education through scholarships." }
            ]
          },
          { 
            name: "Intend", 
            conjugations: [
              { subject: "I", verb: "intend", example: "I intend to complete my degree next year." },
              { subject: "You", verb: "intend", example: "You intend to start your own business." },
              { subject: "He/She", verb: "intends", example: "She intends to apply for the manager position." },
              { subject: "We", verb: "intend", example: "We intend to launch the product in spring." },
              { subject: "They", verb: "intend", example: "They intend to relocate their headquarters." }
            ]
          },
          { 
            name: "Hire", 
            conjugations: [
              { subject: "I", verb: "hire", example: "I hire professionals for specialized tasks." },
              { subject: "You", verb: "hire", example: "You hire temporary staff during busy seasons." },
              { subject: "He/She", verb: "hires", example: "He hires based on skills and cultural fit." },
              { subject: "We", verb: "hire", example: "We hire graduates from local universities." },
              { subject: "They", verb: "hire", example: "They hire consultants for specific projects." }
            ]
          },
          { 
            name: "Define", 
            conjugations: [
              { subject: "I", verb: "define", example: "I define my goals clearly before starting." },
              { subject: "You", verb: "define", example: "You define terms at the beginning of your paper." },
              { subject: "He/She", verb: "defines", example: "She defines her personal boundaries." },
              { subject: "We", verb: "define", example: "We define success differently than others." },
              { subject: "They", verb: "define", example: "They define the scope of the project." }
            ]
          },
          { 
            name: "Contribute", 
            conjugations: [
              { subject: "I", verb: "contribute", example: "I contribute to environmental causes." },
              { subject: "You", verb: "contribute", example: "You contribute valuable ideas in meetings." },
              { subject: "He/She", verb: "contributes", example: "He contributes articles to scientific journals." },
              { subject: "We", verb: "contribute", example: "We contribute to the community through volunteering." },
              { subject: "They", verb: "contribute", example: "They contribute funds to disaster relief." }
            ]
          },
          { 
            name: "Swim", 
            conjugations: [
              { subject: "I", verb: "swim", example: "I swim laps in the morning." },
              { subject: "You", verb: "swim", example: "You swim competitively for your school." },
              { subject: "He/She", verb: "swims", example: "She swims across the lake every summer." },
              { subject: "We", verb: "swim", example: "We swim in the ocean during vacations." },
              { subject: "They", verb: "swim", example: "They swim against the current." }
            ]
          },
          { 
            name: "Launch", 
            conjugations: [
              { subject: "I", verb: "launch", example: "I launch new initiatives regularly." },
              { subject: "You", verb: "launch", example: "You launch your career in technology." },
              { subject: "He/She", verb: "launches", example: "He launches rockets as a hobby." },
              { subject: "We", verb: "launch", example: "We launch our website next month." },
              { subject: "They", verb: "launch", example: "They launch products after thorough testing." }
            ]
          },
          { 
            name: "Cross", 
            conjugations: [
              { subject: "I", verb: "cross", example: "I cross the street at the traffic light." },
              { subject: "You", verb: "cross", example: "You cross items off your list as you complete them." },
              { subject: "He/She", verb: "crosses", example: "She crosses the finish line in record time." },
              { subject: "We", verb: "cross", example: "We cross bridges when we come to them." },
              { subject: "They", verb: "cross", example: "They cross international borders frequently." }
            ]
          },
          { 
            name: "Express", 
            conjugations: [
              { subject: "I", verb: "express", example: "I express my feelings through art." },
              { subject: "You", verb: "express", example: "You express your opinions clearly." },
              { subject: "He/She", verb: "expresses", example: "He expresses gratitude to his mentors." },
              { subject: "We", verb: "express", example: "We express concern about climate change." },
              { subject: "They", verb: "express", example: "They express themselves through dance." }
            ]
          },
          { 
            name: "Transfer", 
            conjugations: [
              { subject: "I", verb: "transfer", example: "I transfer files securely between devices." },
              { subject: "You", verb: "transfer", example: "You transfer money electronically." },
              { subject: "He/She", verb: "transfers", example: "She transfers to a different department." },
              { subject: "We", verb: "transfer", example: "We transfer knowledge to new employees." },
              { subject: "They", verb: "transfer", example: "They transfer patients to specialized facilities." }
            ]
          },
          { 
            name: "Detect", 
            conjugations: [
              { subject: "I", verb: "detect", example: "I detect patterns in complex data." },
              { subject: "You", verb: "detect", example: "You detect problems before they escalate." },
              { subject: "He/She", verb: "detects", example: "He detects errors in the code." },
              { subject: "We", verb: "detect", example: "We detect fraudulent transactions quickly." },
              { subject: "They", verb: "detect", example: "They detect radiation with specialized equipment." }
            ]
          },
          { 
            name: "Evaluate", 
            conjugations: [
              { subject: "I", verb: "evaluate", example: "I evaluate options before making decisions." },
              { subject: "You", verb: "evaluate", example: "You evaluate employee performance annually." },
              { subject: "He/She", verb: "evaluates", example: "She evaluates research proposals." },
              { subject: "We", verb: "evaluate", example: "We evaluate risks carefully." },
              { subject: "They", verb: "evaluate", example: "They evaluate candidates during interviews." }
            ]
          },        
          { 
            name: "Place", 
            conjugations: [
              { subject: "I", verb: "place", example: "I place my keys on the hook by the door." },
              { subject: "You", verb: "place", example: "You place too much emphasis on appearances." },
              { subject: "He/She", verb: "places", example: "She places flowers on the dining table." },
              { subject: "We", verb: "place", example: "We place our orders online." },
              { subject: "They", verb: "place", example: "They place bets on horse races." }
            ]
          },
          { 
            name: "Mark", 
            conjugations: [
              { subject: "I", verb: "mark", example: "I mark important dates on my calendar." },
              { subject: "You", verb: "mark", example: "You mark your territory like a cat." },
              { subject: "He/She", verb: "marks", example: "He marks essays over the weekend." },
              { subject: "We", verb: "mark", example: "We mark our anniversary every year." },
              { subject: "They", verb: "mark", example: "They mark the boundaries of their property." }
            ]
          },
          { 
            name: "Secure", 
            conjugations: [
              { subject: "I", verb: "secure", example: "I secure my bicycle with a strong lock." },
              { subject: "You", verb: "secure", example: "You secure funding for your projects." },
              { subject: "He/She", verb: "secures", example: "She secures the premises before leaving." },
              { subject: "We", verb: "secure", example: "We secure our data with encryption." },
              { subject: "They", verb: "secure", example: "They secure their position in the market." }
            ]
          },
          { 
            name: "Qualify", 
            conjugations: [
              { subject: "I", verb: "qualify", example: "I qualify for the discount as a student." },
              { subject: "You", verb: "qualify", example: "You qualify your statements carefully." },
              { subject: "He/She", verb: "qualifies", example: "He qualifies for the finals with a personal best." },
              { subject: "We", verb: "qualify", example: "We qualify as experts in this field." },
              { subject: "They", verb: "qualify", example: "They qualify for financial assistance." }
            ]
          },
          { 
            name: "Settle", 
            conjugations: [
              { subject: "I", verb: "settle", example: "I settle disputes through negotiation." },
              { subject: "You", verb: "settle", example: "You settle into your new home quickly." },
              { subject: "He/She", verb: "settles", example: "She settles her bills on time." },
              { subject: "We", verb: "settle", example: "We settle for nothing less than excellence." },
              { subject: "They", verb: "settle", example: "They settle down after years of traveling." }
            ]
          },
          { 
            name: "Fold", 
            conjugations: [
              { subject: "I", verb: "fold", example: "I fold laundry while watching TV." },
              { subject: "You", verb: "fold", example: "You fold your napkin neatly after dinner." },
              { subject: "He/She", verb: "folds", example: "He folds paper into origami shapes." },
              { subject: "We", verb: "fold", example: "We fold our business when demand decreases." },
              { subject: "They", verb: "fold", example: "They fold their cards in poker." }
            ]
          },
          { 
            name: "Design", 
            conjugations: [
              { subject: "I", verb: "design", example: "I design websites for small businesses." },
              { subject: "You", verb: "design", example: "You design your own workout routine." },
              { subject: "He/She", verb: "designs", example: "She designs clothing for major fashion brands." },
              { subject: "We", verb: "design", example: "We design our curriculum around student needs." },
              { subject: "They", verb: "design", example: "They design bridges to withstand earthquakes." }
            ]
          },
          { 
            name: "Hurt", 
            conjugations: [
              { subject: "I", verb: "hurt", example: "I hurt my ankle while running." },
              { subject: "You", verb: "hurt", example: "You hurt people's feelings with harsh words." },
              { subject: "He/She", verb: "hurts", example: "He hurts from the loss of his friend." },
              { subject: "We", verb: "hurt", example: "We hurt when our team loses." },
              { subject: "They", verb: "hurt", example: "They hurt their chances by missing the deadline." }
            ]
          },
          { 
            name: "Operate", 
            conjugations: [
              { subject: "I", verb: "operate", example: "I operate heavy machinery at work." },
              { subject: "You", verb: "operate", example: "You operate under the assumption that everyone is honest." },
              { subject: "He/She", verb: "operates", example: "She operates on patients three days a week." },
              { subject: "We", verb: "operate", example: "We operate our business ethically." },
              { subject: "They", verb: "operate", example: "They operate in over fifty countries." }
            ]
          },
          { 
            name: "Recover", 
            conjugations: [
              { subject: "I", verb: "recover", example: "I recover quickly from minor illnesses." },
              { subject: "You", verb: "recover", example: "You recover deleted files from backup." },
              { subject: "He/She", verb: "recovers", example: "He recovers lost items for a living." },
              { subject: "We", verb: "recover", example: "We recover costs through efficient operations." },
              { subject: "They", verb: "recover", example: "They recover precious metals from electronic waste." }
            ]
          },
          { 
            name: "Tie", 
            conjugations: [
              { subject: "I", verb: "tie", example: "I tie my shoelaces in a double knot." },
              { subject: "You", verb: "tie", example: "You tie ribbons on gift packages beautifully." },
              { subject: "He/She", verb: "ties", example: "He ties flies for fly fishing." },
              { subject: "We", verb: "tie", example: "We tie for first place in the competition." },
              { subject: "They", verb: "tie", example: "They tie their boats to the dock." }
            ]
          },
          { 
            name: "Roll", 
            conjugations: [
              { subject: "I", verb: "roll", example: "I roll out pastry dough for pies." },
              { subject: "You", verb: "roll", example: "You roll your eyes at bad jokes." },
              { subject: "He/She", verb: "rolls", example: "She rolls down the hill for fun." },
              { subject: "We", verb: "roll", example: "We roll with the punches life throws at us." },
              { subject: "They", verb: "roll", example: "They roll the dice in board games." }
            ]
          },
          { 
            name: "Differ", 
            conjugations: [
              { subject: "I", verb: "differ", example: "I differ from my siblings in many ways." },
              { subject: "You", verb: "differ", example: "You differ with your colleague on this point." },
              { subject: "He/She", verb: "differs", example: "He differs in his approach to problem-solving." },
              { subject: "We", verb: "differ", example: "We differ in our political views." },
              { subject: "They", verb: "differ", example: "They differ significantly in their methods." }
            ]
          },
          { 
            name: "Promote", 
            conjugations: [
              { subject: "I", verb: "promote", example: "I promote healthy eating habits to my family." },
              { subject: "You", verb: "promote", example: "You promote your business on social media." },
              { subject: "He/She", verb: "promotes", example: "She promotes diversity in the workplace." },
              { subject: "We", verb: "promote", example: "We promote from within whenever possible." },
              { subject: "They", verb: "promote", example: "They promote their products at trade shows." }
            ]
          },
          { 
            name: "Attack", 
            conjugations: [
              { subject: "I", verb: "attack", example: "I attack problems with enthusiasm." },
              { subject: "You", verb: "attack", example: "You attack each challenge methodically." },
              { subject: "He/She", verb: "attacks", example: "He attacks his opponent's arguments." },
              { subject: "We", verb: "attack", example: "We attack the project from different angles." },
              { subject: "They", verb: "attack", example: "They attack when they feel threatened." }
            ]
          },
          { 
            name: "Sign", 
            conjugations: [
              { subject: "I", verb: "sign", example: "I sign my name on official documents." },
              { subject: "You", verb: "sign", example: "You sign contracts without reading them carefully." },
              { subject: "He/She", verb: "signs", example: "She signs autographs for fans." },
              { subject: "We", verb: "sign", example: "We sign the petition to support the cause." },
              { subject: "They", verb: "sign", example: "They sign their work to claim ownership." }
            ]
          },
          { 
            name: "Inform", 
            conjugations: [
              { subject: "I", verb: "inform", example: "I inform my supervisor when there's a problem." },
              { subject: "You", verb: "inform", example: "You inform the police about suspicious activity." },
              { subject: "He/She", verb: "informs", example: "He informs patients about treatment options." },
              { subject: "We", verb: "inform", example: "We inform the public through press releases." },
              { subject: "They", verb: "inform", example: "They inform their decisions with research." }
            ]
          },
          { 
            name: "Note", 
            conjugations: [
              { subject: "I", verb: "note", example: "I note significant details in my journal." },
              { subject: "You", verb: "note", example: "You note down appointments in your calendar." },
              { subject: "He/She", verb: "notes", example: "She notes the changes in behavior." },
              { subject: "We", verb: "note", example: "We note with concern the rising temperatures." },
              { subject: "They", verb: "note", example: "They note each transaction carefully." }
            ]
          },
          { 
            name: "Spread", 
            conjugations: [
              { subject: "I", verb: "spread", example: "I spread butter on my toast." },
              { subject: "You", verb: "spread", example: "You spread joy wherever you go." },
              { subject: "He/She", verb: "spreads", example: "He spreads rumors unintentionally." },
              { subject: "We", verb: "spread", example: "We spread our resources too thin." },
              { subject: "They", verb: "spread", example: "They spread blankets on the grass for the picnic." }
            ]
          },
          { 
            name: "Form", 
            conjugations: [
              { subject: "I", verb: "form", example: "I form clay into sculptures." },
              { subject: "You", verb: "form", example: "You form opinions based on evidence." },
              { subject: "He/She", verb: "forms", example: "She forms close bonds with her students." },
              { subject: "We", verb: "form", example: "We form a circle for the discussion." },
              { subject: "They", verb: "form", example: "They form partnerships with local businesses." }
            ]
          },          
          { 
            name: "Worry", 
            conjugations: [
              { subject: "I", verb: "worry", example: "I worry about climate change." },
              { subject: "You", verb: "worry", example: "You worry too much about what others think." },
              { subject: "He/She", verb: "worries", example: "She worries about her children constantly." },
              { subject: "We", verb: "worry", example: "We worry about the economic outlook." },
              { subject: "They", verb: "worry", example: "They worry that they might miss the deadline." }
            ]
          },
          { 
            name: "Concentrate", 
            conjugations: [
              { subject: "I", verb: "concentrate", example: "I concentrate better in a quiet environment." },
              { subject: "You", verb: "concentrate", example: "You concentrate on one task at a time." },
              { subject: "He/She", verb: "concentrates", example: "He concentrates deeply when playing chess." },
              { subject: "We", verb: "concentrate", example: "We concentrate our efforts on customer service." },
              { subject: "They", verb: "concentrate", example: "They concentrate resources in urban areas." }
            ]
          },
          { 
            name: "Vote", 
            conjugations: [
              { subject: "I", verb: "vote", example: "I vote in every election." },
              { subject: "You", verb: "vote", example: "You vote according to your principles." },
              { subject: "He/She", verb: "votes", example: "She votes by mail when traveling." },
              { subject: "We", verb: "vote", example: "We vote on proposals during meetings." },
              { subject: "They", verb: "vote", example: "They vote their shares at the annual meeting." }
            ]
          },
          { 
            name: "Extend", 
            conjugations: [
              { subject: "I", verb: "extend", example: "I extend my hand in friendship." },
              { subject: "You", verb: "extend", example: "You extend your stay at the hotel." },
              { subject: "He/She", verb: "extends", example: "He extends credit to regular customers." },
              { subject: "We", verb: "extend", example: "We extend our deepest sympathies." },
              { subject: "They", verb: "extend", example: "They extend the deadline when necessary." }
            ]
          },
          { 
            name: "Lift", 
            conjugations: [
              { subject: "I", verb: "lift", example: "I lift weights three times a week." },
              { subject: "You", verb: "lift", example: "You lift people's spirits with your humor." },
              { subject: "He/She", verb: "lifts", example: "She lifts her baby out of the crib." },
              { subject: "We", verb: "lift", example: "We lift each other up during hard times." },
              { subject: "They", verb: "lift", example: "They lift heavy furniture with proper technique." }
            ]
          },
          { 
            name: "Catch", 
            conjugations: [
              { subject: "I", verb: "catch", example: "I catch the bus every morning." },
              { subject: "You", verb: "catch", example: "You catch fish with skill and patience." },
              { subject: "He/She", verb: "catches", example: "He catches the ball one-handed." },
              { subject: "We", verb: "catch", example: "We catch up on weekends after busy weeks." },
              { subject: "They", verb: "catch", example: "They catch criminals through careful investigation." }
            ]
          },
          { 
            name: "Combine", 
            conjugations: [
              { subject: "I", verb: "combine", example: "I combine work and study effectively." },
              { subject: "You", verb: "combine", example: "You combine different ingredients in your cooking." },
              { subject: "He/She", verb: "combines", example: "She combines her talents in music and writing." },
              { subject: "We", verb: "combine", example: "We combine our resources for better results." },
              { subject: "They", verb: "combine", example: "They combine traditional and modern techniques." }
            ]
          },
          { 
            name: "Propose", 
            conjugations: [
              { subject: "I", verb: "propose", example: "I propose a solution to the problem." },
              { subject: "You", verb: "propose", example: "You propose ideas with confidence." },
              { subject: "He/She", verb: "proposes", example: "He proposes marriage on bended knee." },
              { subject: "We", verb: "propose", example: "We propose changes to the policy." },
              { subject: "They", verb: "propose", example: "They propose a partnership between companies." }
            ]
          },
          { 
            name: "Celebrate", 
            conjugations: [
              { subject: "I", verb: "celebrate", example: "I celebrate my achievements, big and small." },
              { subject: "You", verb: "celebrate", example: "You celebrate holidays with enthusiasm." },
              { subject: "He/She", verb: "celebrates", example: "She celebrates her birthday next week." },
              { subject: "We", verb: "celebrate", example: "We celebrate diversity in our community." },
              { subject: "They", verb: "celebrate", example: "They celebrate the team's victory." }
            ]
          },
          { 
            name: "Supply", 
            conjugations: [
              { subject: "I", verb: "supply", example: "I supply the office with stationery." },
              { subject: "You", verb: "supply", example: "You supply evidence for your claims." },
              { subject: "He/She", verb: "supplies", example: "He supplies materials for the workshop." },
              { subject: "We", verb: "supply", example: "We supply electricity to the entire region." },
              { subject: "They", verb: "supply", example: "They supply components to major manufacturers." }
            ]
          },
          { 
            name: "Link", 
            conjugations: [
              { subject: "I", verb: "link", example: "I link related topics in my presentation." },
              { subject: "You", verb: "link", example: "You link your social media accounts together." },
              { subject: "He/She", verb: "links", example: "She links sources to her research paper." },
              { subject: "We", verb: "link", example: "We link arms in solidarity." },
              { subject: "They", verb: "link", example: "They link their success to hard work." }
            ]
          },
          { 
            name: "Demand", 
            conjugations: [
              { subject: "I", verb: "demand", example: "I demand fair treatment for all employees." },
              { subject: "You", verb: "demand", example: "You demand too much from yourself." },
              { subject: "He/She", verb: "demands", example: "He demands excellence in everything." },
              { subject: "We", verb: "demand", example: "We demand an explanation for the delay." },
              { subject: "They", verb: "demand", example: "They demand a refund for poor service." }
            ]
          },
          { 
            name: "Destroy", 
            conjugations: [
              { subject: "I", verb: "destroy", example: "I destroy old documents for security." },
              { subject: "You", verb: "destroy", example: "You destroy misconceptions with facts." },
              { subject: "He/She", verb: "destroys", example: "She destroys her competition on the field." },
              { subject: "We", verb: "destroy", example: "We destroy harmful patterns of behavior." },
              { subject: "They", verb: "destroy", example: "They destroy outdated records regularly." }
            ]
          },
          { 
            name: "Preserve", 
            conjugations: [
              { subject: "I", verb: "preserve", example: "I preserve family traditions." },
              { subject: "You", verb: "preserve", example: "You preserve fruits by making jam." },
              { subject: "He/She", verb: "preserves", example: "He preserves historical documents." },
              { subject: "We", verb: "preserve", example: "We preserve wildlife through conservation." },
              { subject: "They", verb: "preserve", example: "They preserve ancient buildings as heritage sites." }
            ]
          },
          { 
            name: "Blame", 
            conjugations: [
              { subject: "I", verb: "blame", example: "I blame myself for the misunderstanding." },
              { subject: "You", verb: "blame", example: "You blame external factors for failures." },
              { subject: "He/She", verb: "blames", example: "She blames traffic for her lateness." },
              { subject: "We", verb: "blame", example: "We blame poor planning for the confusion." },
              { subject: "They", verb: "blame", example: "They blame each other for the mistake." }
            ]
          },
          { 
            name: "Invest", 
            conjugations: [
              { subject: "I", verb: "invest", example: "I invest in my education consistently." },
              { subject: "You", verb: "invest", example: "You invest wisely for retirement." },
              { subject: "He/She", verb: "invests", example: "He invests in startups with potential." },
              { subject: "We", verb: "invest", example: "We invest time in building relationships." },
              { subject: "They", verb: "invest", example: "They invest profits back into the business." }
            ]
          },
          { 
            name: "Prefer", 
            conjugations: [
              { subject: "I", verb: "prefer", example: "I prefer tea to coffee in the morning." },
              { subject: "You", verb: "prefer", example: "You prefer working independently." },
              { subject: "He/She", verb: "prefers", example: "She prefers classical music to rock." },
              { subject: "We", verb: "prefer", example: "We prefer to meet in person rather than online." },
              { subject: "They", verb: "prefer", example: "They prefer casual dress in the office." }
            ]
          },
          { 
            name: "Demonstrate", 
            conjugations: [
              { subject: "I", verb: "demonstrate", example: "I demonstrate techniques to new employees." },
              { subject: "You", verb: "demonstrate", example: "You demonstrate leadership in crisis situations." },
              { subject: "He/She", verb: "demonstrates", example: "He demonstrates the product features to customers." },
              { subject: "We", verb: "demonstrate", example: "We demonstrate our commitment through actions." },
              { subject: "They", verb: "demonstrate", example: "They demonstrate for environmental causes." }
            ]
          },
          { 
            name: "Generate", 
            conjugations: [
              { subject: "I", verb: "generate", example: "I generate new ideas through brainstorming." },
              { subject: "You", verb: "generate", example: "You generate excitement about the project." },
              { subject: "He/She", verb: "generates", example: "She generates reports using the new software." },
              { subject: "We", verb: "generate", example: "We generate electricity from solar panels." },
              { subject: "They", verb: "generate", example: "They generate significant revenue through online sales." }
            ]
          },
          { 
            name: "Lock", 
            conjugations: [
              { subject: "I", verb: "lock", example: "I lock my door when leaving home." },
              { subject: "You", verb: "lock", example: "You lock your computer when stepping away." },
              { subject: "He/She", verb: "locks", example: "He locks his bike to the rack." },
              { subject: "We", verb: "lock", example: "We lock valuable items in the safe." },
              { subject: "They", verb: "lock", example: "They lock the building at night." }
            ]
          },          
          { 
            name: "Adapt", 
            conjugations: [
              { subject: "I", verb: "adapt", example: "I adapt quickly to changing circumstances." },
              { subject: "You", verb: "adapt", example: "You adapt your teaching style for different learners." },
              { subject: "He/She", verb: "adapts", example: "She adapts recipes to suit dietary needs." },
              { subject: "We", verb: "adapt", example: "We adapt our strategies based on feedback." },
              { subject: "They", verb: "adapt", example: "They adapt to new technology easily." }
            ]
          },
          { 
            name: "Grab", 
            conjugations: [
              { subject: "I", verb: "grab", example: "I grab coffee on my way to work." },
              { subject: "You", verb: "grab", example: "You grab opportunities when they arise." },
              { subject: "He/She", verb: "grabs", example: "He grabs his jacket before leaving." },
              { subject: "We", verb: "grab", example: "We grab a quick lunch between meetings." },
              { subject: "They", verb: "grab", example: "They grab the last available tickets." }
            ]
          },
          { 
            name: "Calculate", 
            conjugations: [
              { subject: "I", verb: "calculate", example: "I calculate expenses for tax purposes." },
              { subject: "You", verb: "calculate", example: "You calculate distances before planning trips." },
              { subject: "He/She", verb: "calculates", example: "She calculates risks before investing." },
              { subject: "We", verb: "calculate", example: "We calculate interest rates on loans." },
              { subject: "They", verb: "calculate", example: "They calculate profits at the end of each quarter." }
            ]
          },
          { 
            name: "Proceed", 
            conjugations: [
              { subject: "I", verb: "proceed", example: "I proceed with caution in unfamiliar situations." },
              { subject: "You", verb: "proceed", example: "You proceed to the next stage after approval." },
              { subject: "He/She", verb: "proceeds", example: "He proceeds with the experiment as planned." },
              { subject: "We", verb: "proceed", example: "We proceed down the path toward the lake." },
              { subject: "They", verb: "proceed", example: "They proceed with construction despite delays." }
            ]
          },
          { 
            name: "Trust", 
            conjugations: [
              { subject: "I", verb: "trust", example: "I trust my instincts when making decisions." },
              { subject: "You", verb: "trust", example: "You trust people until they give you reason not to." },
              { subject: "He/She", verb: "trusts", example: "She trusts her team to complete the project." },
              { subject: "We", verb: "trust", example: "We trust each other completely." },
              { subject: "They", verb: "trust", example: "They trust scientific evidence over anecdotes." }
            ]
          },
          { 
            name: "Wake", 
            conjugations: [
              { subject: "I", verb: "wake", example: "I wake up at six every morning." },
              { subject: "You", verb: "wake", example: "You wake the baby when you talk loudly." },
              { subject: "He/She", verb: "wakes", example: "He wakes to the sound of birds chirping." },
              { subject: "We", verb: "wake", example: "We wake our children for school." },
              { subject: "They", verb: "wake", example: "They wake before sunrise to go fishing." }
            ]
          },
          { 
            name: "Hate", 
            conjugations: [
              { subject: "I", verb: "hate", example: "I hate waiting in long lines." },
              { subject: "You", verb: "hate", example: "You hate spicy food." },
              { subject: "He/She", verb: "hates", example: "She hates being interrupted when speaking." },
              { subject: "We", verb: "hate", example: "We hate to disappoint our customers." },
              { subject: "They", verb: "hate", example: "They hate missing deadlines." }
            ]
          },
          { 
            name: "Fear", 
            conjugations: [
              { subject: "I", verb: "fear", example: "I fear heights since childhood." },
              { subject: "You", verb: "fear", example: "You fear rejection more than failure." },
              { subject: "He/She", verb: "fears", example: "He fears the consequences of his actions." },
              { subject: "We", verb: "fear", example: "We fear what we don't understand." },
              { subject: "They", verb: "fear", example: "They fear losing their market position." }
            ]
          },
          { 
            name: "Possess", 
            conjugations: [
              { subject: "I", verb: "possess", example: "I possess the skills needed for this job." },
              { subject: "You", verb: "possess", example: "You possess remarkable patience with children." },
              { subject: "He/She", verb: "possesses", example: "She possesses extensive knowledge of art history." },
              { subject: "We", verb: "possess", example: "We possess the determination to succeed." },
              { subject: "They", verb: "possess", example: "They possess valuable antiques in their collection." }
            ]
          },
          { 
            name: "Recognize", 
            conjugations: [
              { subject: "I", verb: "recognize", example: "I recognize your voice immediately." },
              { subject: "You", verb: "recognize", example: "You recognize patterns quickly." },
              { subject: "He/She", verb: "recognizes", example: "He recognizes the importance of teamwork." },
              { subject: "We", verb: "recognize", example: "We recognize outstanding achievements annually." },
              { subject: "They", verb: "recognize", example: "They recognize each other after many years." }
            ]
          },
          { 
            name: "Stretch", 
            conjugations: [
              { subject: "I", verb: "stretch", example: "I stretch before and after exercising." },
              { subject: "You", verb: "stretch", example: "You stretch the truth sometimes." },
              { subject: "He/She", verb: "stretches", example: "She stretches her budget to cover expenses." },
              { subject: "We", verb: "stretch", example: "We stretch our resources during busy periods." },
              { subject: "They", verb: "stretch", example: "They stretch their legs during the break." }
            ]
          },
          { 
            name: "Light", 
            conjugations: [
              { subject: "I", verb: "light", example: "I light candles during power outages." },
              { subject: "You", verb: "light", example: "You light up the room with your smile." },
              { subject: "He/She", verb: "lights", example: "He lights the fireplace on cold evenings." },
              { subject: "We", verb: "light", example: "We light lanterns for the garden party." },
              { subject: "They", verb: "light", example: "They light the path with solar lamps." }
            ]
          },
          { 
            name: "Interview", 
            conjugations: [
              { subject: "I", verb: "interview", example: "I interview candidates for the position." },
              { subject: "You", verb: "interview", example: "You interview celebrities for your podcast." },
              { subject: "He/She", verb: "interviews", example: "She interviews experts in various fields." },
              { subject: "We", verb: "interview", example: "We interview multiple vendors before deciding." },
              { subject: "They", verb: "interview", example: "They interview witnesses at the scene." }
            ]
          },
          { 
            name: "Commit", 
            conjugations: [
              { subject: "I", verb: "commit", example: "I commit to regular exercise." },
              { subject: "You", verb: "commit", example: "You commit valuable time to volunteer work." },
              { subject: "He/She", verb: "commits", example: "He commits his thoughts to paper." },
              { subject: "We", verb: "commit", example: "We commit resources to research and development." },
              { subject: "They", verb: "commit", example: "They commit to sustainable practices." }
            ]
          },
          { 
            name: "Reveal", 
            conjugations: [
              { subject: "I", verb: "reveal", example: "I reveal personal information cautiously." },
              { subject: "You", verb: "reveal", example: "You reveal your intentions through actions." },
              { subject: "He/She", verb: "reveals", example: "She reveals the secret ingredient in her recipe." },
              { subject: "We", verb: "reveal", example: "We reveal our findings at the conference." },
              { subject: "They", verb: "reveal", example: "They reveal new products at annual events." }
            ]
          },
          { 
            name: "Load", 
            conjugations: [
              { subject: "I", verb: "load", example: "I load the dishwasher after dinner." },
              { subject: "You", verb: "load", example: "You load too much work onto yourself." },
              { subject: "He/She", verb: "loads", example: "He loads the truck with furniture." },
              { subject: "We", verb: "load", example: "We load our shopping into the car." },
              { subject: "They", verb: "load", example: "They load the software onto new computers." }
            ]
          },
          { 
            name: "Highlight", 
            conjugations: [
              { subject: "I", verb: "highlight", example: "I highlight important passages in my textbooks." },
              { subject: "You", verb: "highlight", example: "You highlight your strengths in interviews." },
              { subject: "He/She", verb: "highlights", example: "She highlights accomplishments in her resume." },
              { subject: "We", verb: "highlight", example: "We highlight key points during presentations." },
              { subject: "They", verb: "highlight", example: "They highlight areas for improvement in the report." }
            ]
          },
          { 
            name: "Guide", 
            conjugations: [
              { subject: "I", verb: "guide", example: "I guide visitors through the museum." },
              { subject: "You", verb: "guide", example: "You guide students toward understanding." },
              { subject: "He/She", verb: "guides", example: "He guides the discussion with thoughtful questions." },
              { subject: "We", verb: "guide", example: "We guide our decisions by ethical principles." },
              { subject: "They", verb: "guide", example: "They guide climbers up the mountain." }
            ]
          },
          { 
            name: "Quote", 
            conjugations: [
              { subject: "I", verb: "quote", example: "I quote Shakespeare in my essays." },
              { subject: "You", verb: "quote", example: "You quote statistics to support your argument." },
              { subject: "He/She", verb: "quotes", example: "She quotes prices for various services." },
              { subject: "We", verb: "quote", example: "We quote directly from the original text." },
              { subject: "They", verb: "quote", example: "They quote each other frequently in meetings." }
            ]
          },
          { 
            name: "Charge", 
            conjugations: [
              { subject: "I", verb: "charge", example: "I charge my devices overnight." },
              { subject: "You", verb: "charge", example: "You charge reasonable prices for your work." },
              { subject: "He/She", verb: "charges", example: "He charges forward despite obstacles." },
              { subject: "We", verb: "charge", example: "We charge admission to cover expenses." },
              { subject: "They", verb: "charge", example: "They charge their customers for extra services." }
            ]
          }
    ],
"past": [
      { 
        name: "Be", 
        conjugations: [
          { subject: "I", verb: "was", example: "I was at the library yesterday." },
          { subject: "You", verb: "were", example: "You were very helpful last week." },
          { subject: "He/She", verb: "was", example: "She was happy with the results." },
          { subject: "We", verb: "were", example: "We were late for the meeting." },
          { subject: "They", verb: "were", example: "They were excited about the trip." }
        ]
      },
      { 
        name: "Have", 
        conjugations: [
          { subject: "I", verb: "had", example: "I had a wonderful time at the party." },
          { subject: "You", verb: "had", example: "You had many opportunities to succeed." },
          { subject: "He/She", verb: "had", example: "He had lunch with his colleagues." },
          { subject: "We", verb: "had", example: "We had a discussion about the project." },
          { subject: "They", verb: "had", example: "They had similar experiences abroad." }
        ]
      },
      { 
        name: "Do", 
        conjugations: [
          { subject: "I", verb: "did", example: "I did my homework before dinner." },
          { subject: "You", verb: "did", example: "You did an excellent job on the presentation." },
          { subject: "He/She", verb: "did", example: "She did the dishes after lunch." },
          { subject: "We", verb: "did", example: "We did our best to arrive on time." },
          { subject: "They", verb: "did", example: "They did not expect the surprise party." }
        ]
      },
      { 
        name: "Go", 
        conjugations: [
          { subject: "I", verb: "went", example: "I went to the store to buy groceries." },
          { subject: "You", verb: "went", example: "You went hiking in the mountains last weekend." },
          { subject: "He/She", verb: "went", example: "He went to visit his grandparents." },
          { subject: "We", verb: "went", example: "We went to the concert together." },
          { subject: "They", verb: "went", example: "They went swimming at the beach." }
        ]
      },
      { 
        name: "Like", 
        conjugations: [
          { subject: "I", verb: "liked", example: "I liked the movie we saw last night." },
          { subject: "You", verb: "liked", example: "You liked the gift I gave you." },
          { subject: "He/She", verb: "liked", example: "She liked the new restaurant downtown." },
          { subject: "We", verb: "liked", example: "We liked how the project turned out." },
          { subject: "They", verb: "liked", example: "They liked traveling together." }
        ]
      },
      { 
        name: "Work", 
        conjugations: [
          { subject: "I", verb: "worked", example: "I worked on the report all evening." },
          { subject: "You", verb: "worked", example: "You worked hard to meet the deadline." },
          { subject: "He/She", verb: "worked", example: "He worked at the company for five years." },
          { subject: "We", verb: "worked", example: "We worked together to solve the problem." },
          { subject: "They", verb: "worked", example: "They worked overtime last week." }
        ]
      },
      { 
        name: "Eat", 
        conjugations: [
          { subject: "I", verb: "ate", example: "I ate breakfast before class." },
          { subject: "You", verb: "ate", example: "You ate all your vegetables." },
          { subject: "He/She", verb: "ate", example: "She ate at her favorite restaurant." },
          { subject: "We", verb: "ate", example: "We ate dinner together as a family." },
          { subject: "They", verb: "ate", example: "They ate ice cream after the game." }
        ]
      },
      { 
        name: "Study", 
        conjugations: [
          { subject: "I", verb: "studied", example: "I studied for the exam all night." },
          { subject: "You", verb: "studied", example: "You studied French in high school." },
          { subject: "He/She", verb: "studied", example: "He studied biology at the university." },
          { subject: "We", verb: "studied", example: "We studied together at the library." },
          { subject: "They", verb: "studied", example: "They studied different subjects." }
        ]
      },
      { 
        name: "Live", 
        conjugations: [
          { subject: "I", verb: "lived", example: "I lived in Chicago for ten years." },
          { subject: "You", verb: "lived", example: "You lived abroad during college." },
          { subject: "He/She", verb: "lived", example: "She lived next door to her best friend." },
          { subject: "We", verb: "lived", example: "We lived in the same neighborhood." },
          { subject: "They", verb: "lived", example: "They lived happily in their new home." }
        ]
      },
      { 
        name: "Speak", 
        conjugations: [
          { subject: "I", verb: "spoke", example: "I spoke to the manager about our concerns." },
          { subject: "You", verb: "spoke", example: "You spoke clearly during your presentation." },
          { subject: "He/She", verb: "spoke", example: "He spoke three languages fluently." },
          { subject: "We", verb: "spoke", example: "We spoke about our plans for the weekend." },
          { subject: "They", verb: "spoke", example: "They spoke quietly in the library." }
        ]
      },
      { 
        name: "Make", 
        conjugations: [
          { subject: "I", verb: "made", example: "I made a cake for the party." },
          { subject: "You", verb: "made", example: "You made an excellent point during the debate." },
          { subject: "He/She", verb: "made", example: "She made a difficult decision yesterday." },
          { subject: "We", verb: "made", example: "We made plans to meet after work." },
          { subject: "They", verb: "made", example: "They made progress on the project." }
        ]
      },
      { 
        name: "Get", 
        conjugations: [
          { subject: "I", verb: "got", example: "I got a new job last month." },
          { subject: "You", verb: "got", example: "You got an A on your test." },
          { subject: "He/She", verb: "got", example: "He got tickets to the concert." },
          { subject: "We", verb: "got", example: "We got home late after the party." },
          { subject: "They", verb: "got", example: "They got lost on their way to the museum." }
        ]
      },
      { 
        name: "Take", 
        conjugations: [
          { subject: "I", verb: "took", example: "I took the bus to work yesterday." },
          { subject: "You", verb: "took", example: "You took notes during the lecture." },
          { subject: "He/She", verb: "took", example: "She took her dog for a walk." },
          { subject: "We", verb: "took", example: "We took photos of the beautiful sunset." },
          { subject: "They", verb: "took", example: "They took a different route home." }
        ]
      },
      { 
        name: "Come", 
        conjugations: [
          { subject: "I", verb: "came", example: "I came to the party as soon as I could." },
          { subject: "You", verb: "came", example: "You came early to help set up." },
          { subject: "He/She", verb: "came", example: "He came to visit last summer." },
          { subject: "We", verb: "came", example: "We came by train from Boston." },
          { subject: "They", verb: "came", example: "They came to our wedding." }
        ]
      },
      { 
        name: "See", 
        conjugations: [
          { subject: "I", verb: "saw", example: "I saw a shooting star last night." },
          { subject: "You", verb: "saw", example: "You saw the mistake in the document." },
          { subject: "He/She", verb: "saw", example: "She saw her old friend at the store." },
          { subject: "We", verb: "saw", example: "We saw an interesting movie last weekend." },
          { subject: "They", verb: "saw", example: "They saw the need for immediate changes." }
        ]
      },
      { 
        name: "Know", 
        conjugations: [
          { subject: "I", verb: "knew", example: "I knew the answer to the question." },
          { subject: "You", verb: "knew", example: "You knew exactly what to do." },
          { subject: "He/She", verb: "knew", example: "He knew the directions by heart." },
          { subject: "We", verb: "knew", example: "We knew each other since childhood." },
          { subject: "They", verb: "knew", example: "They knew about the surprise party." }
        ]
      },
      { 
        name: "Think", 
        conjugations: [
          { subject: "I", verb: "thought", example: "I thought about your suggestion." },
          { subject: "You", verb: "thought", example: "You thought the meeting was tomorrow." },
          { subject: "He/She", verb: "thought", example: "She thought of a brilliant idea." },
          { subject: "We", verb: "thought", example: "We thought carefully before making a decision." },
          { subject: "They", verb: "thought", example: "They thought the movie was excellent." }
        ]
      },
      { 
        name: "Give", 
        conjugations: [
          { subject: "I", verb: "gave", example: "I gave my friend a birthday present." },
          { subject: "You", verb: "gave", example: "You gave an impressive performance." },
          { subject: "He/She", verb: "gave", example: "He gave his time to help others." },
          { subject: "We", verb: "gave", example: "We gave feedback on the proposal." },
          { subject: "They", verb: "gave", example: "They gave a donation to charity." }
        ]
      },
      { 
        name: "Find", 
        conjugations: [
          { subject: "I", verb: "found", example: "I found my keys under the sofa." },
          { subject: "You", verb: "found", example: "You found a solution to the problem." },
          { subject: "He/She", verb: "found", example: "She found a rare coin in her garden." },
          { subject: "We", verb: "found", example: "We found the perfect spot for our picnic." },
          { subject: "They", verb: "found", example: "They found their way back to the hotel." }
        ]
      },
      { 
        name: "Tell", 
        conjugations: [
          { subject: "I", verb: "told", example: "I told you about my new job." },
          { subject: "You", verb: "told", example: "You told an interesting story at dinner." },
          { subject: "He/She", verb: "told", example: "He told the truth about what happened." },
          { subject: "We", verb: "told", example: "We told our parents about our travel plans." },
          { subject: "They", verb: "told", example: "They told everyone the good news." }
        ]
      },
      { 
        name: "Ask", 
        conjugations: [
          { subject: "I", verb: "asked", example: "I asked questions in class." },
          { subject: "You", verb: "asked", example: "You asked for help when needed." },
          { subject: "He/She", verb: "asked", example: "She asked about the weather." },
          { subject: "We", verb: "asked", example: "We asked for directions." },
          { subject: "They", verb: "asked", example: "They asked about the schedule." }
        ]
      },
      { 
        name: "Feel", 
        conjugations: [
          { subject: "I", verb: "felt", example: "I felt happy yesterday." },
          { subject: "You", verb: "felt", example: "You felt the texture of the fabric." },
          { subject: "He/She", verb: "felt", example: "He felt confident about the test." },
          { subject: "We", verb: "felt", example: "We felt excited about the trip." },
          { subject: "They", verb: "felt", example: "They felt tired after working." }
        ]
      },
      { 
        name: "Become", 
        conjugations: [
          { subject: "I", verb: "became", example: "I became nervous when speaking in public." },
          { subject: "You", verb: "became", example: "You became more skilled with practice." },
          { subject: "He/She", verb: "became", example: "She became a doctor last year." },
          { subject: "We", verb: "became", example: "We became friends quickly." },
          { subject: "They", verb: "became", example: "They became impatient when waiting." }
        ]
      },
      { 
        name: "Leave", 
        conjugations: [
          { subject: "I", verb: "left", example: "I left for work at 8 AM." },
          { subject: "You", verb: "left", example: "You left your keys on the table." },
          { subject: "He/She", verb: "left", example: "He left early on Friday." },
          { subject: "We", verb: "left", example: "We left the party at midnight." },
          { subject: "They", verb: "left", example: "They left their luggage at the hotel." }
        ]
      },
      { 
        name: "Put", 
        conjugations: [
          { subject: "I", verb: "put", example: "I put my books on the shelf." },
          { subject: "You", verb: "put", example: "You put too much sugar in the coffee." },
          { subject: "He/She", verb: "put", example: "She put emphasis on accuracy." },
          { subject: "We", verb: "put", example: "We put our trust in you." },
          { subject: "They", verb: "put", example: "They put the furniture in storage." }
        ]
      },
      { 
        name: "Mean", 
        conjugations: [
          { subject: "I", verb: "meant", example: "I meant what I said." },
          { subject: "You", verb: "meant", example: "You meant a lot to me." },
          { subject: "He/She", verb: "meant", example: "He meant to call you later." },
          { subject: "We", verb: "meant", example: "We meant business." },
          { subject: "They", verb: "meant", example: "They meant well with their advice." }
        ]
      },
      { 
        name: "Keep", 
        conjugations: [
          { subject: "I", verb: "kept", example: "I kept a journal every day." },
          { subject: "You", verb: "kept", example: "You kept your promises." },
          { subject: "He/She", verb: "kept", example: "She kept her room tidy." },
          { subject: "We", verb: "kept", example: "We kept in touch with old friends." },
          { subject: "They", verb: "kept", example: "They kept trying despite difficulties." }
        ]
      },
      { 
        name: "Let", 
        conjugations: [
          { subject: "I", verb: "let", example: "I let him borrow my car." },
          { subject: "You", verb: "let", example: "You let the cat inside." },
          { subject: "He/She", verb: "let", example: "He let his children stay up late." },
          { subject: "We", verb: "let", example: "We let the matter drop." },
          { subject: "They", verb: "let", example: "They let us use their swimming pool." }
        ]
      },
      { 
        name: "Help", 
        conjugations: [
          { subject: "I", verb: "helped", example: "I helped my parents last weekend." },
          { subject: "You", verb: "helped", example: "You helped whenever needed." },
          { subject: "He/She", verb: "helped", example: "She helped at the community center." },
          { subject: "We", verb: "helped", example: "We helped each other with homework." },
          { subject: "They", verb: "helped", example: "They helped organize the event." }
        ]
      },
      { 
        name: "Talk", 
        conjugations: [
          { subject: "I", verb: "talked", example: "I talked to my friends yesterday." },
          { subject: "You", verb: "talked", example: "You talked very fast." },
          { subject: "He/She", verb: "talked", example: "He talked about sports a lot." },
          { subject: "We", verb: "talked", example: "We talked on the phone for hours." },
          { subject: "They", verb: "talked", example: "They talked in whispers." }
        ]
      },
      { 
        name: "Turn", 
        conjugations: [
          { subject: "I", verb: "turned", example: "I turned the page of my book." },
          { subject: "You", verb: "turned", example: "You turned left at the intersection." },
          { subject: "He/She", verb: "turned", example: "She turned the knob slowly." },
          { subject: "We", verb: "turned", example: "We turned to each other for support." },
          { subject: "They", verb: "turned", example: "They turned the lights off at night." }
        ]
      },
      { 
        name: "Show", 
        conjugations: [
          { subject: "I", verb: "showed", example: "I showed my ticket at the entrance." },
          { subject: "You", verb: "showed", example: "You showed great potential." },
          { subject: "He/She", verb: "showed", example: "He showed his collection to visitors." },
          { subject: "We", verb: "showed", example: "We showed respect to our elders." },
          { subject: "They", verb: "showed", example: "They showed their work at the exhibition." }
        ]
      },
      { 
        name: "Hear", 
        conjugations: [
          { subject: "I", verb: "heard", example: "I heard music in the distance." },
          { subject: "You", verb: "heard", example: "You heard birds singing in the morning." },
          { subject: "He/She", verb: "heard", example: "She heard a knock at the door." },
          { subject: "We", verb: "heard", example: "We heard rumors about the new policy." },
          { subject: "They", verb: "heard", example: "They heard the announcement on the radio." }
        ]
      },
      { 
        name: "Play", 
        conjugations: [
          { subject: "I", verb: "played", example: "I played the guitar last evening." },
          { subject: "You", verb: "played", example: "You played basketball very well." },
          { subject: "He/She", verb: "played", example: "He played with his dog in the park." },
          { subject: "We", verb: "played", example: "We played board games on the weekend." },
          { subject: "They", verb: "played", example: "They played important roles in the company." }
        ]
      },
      { 
        name: "Run", 
        conjugations: [
          { subject: "I", verb: "ran", example: "I ran five kilometers yesterday morning." },
          { subject: "You", verb: "ran", example: "You ran a successful business." },
          { subject: "He/She", verb: "ran", example: "She ran faster than anyone on the team." },
          { subject: "We", verb: "ran", example: "We ran out of time during the exam." },
          { subject: "They", verb: "ran", example: "They ran the marathon last year." }
        ]
      },
      { 
        name: "Move", 
        conjugations: [
          { subject: "I", verb: "moved", example: "I moved to a new apartment last month." },
          { subject: "You", verb: "moved", example: "You moved gracefully when you danced." },
          { subject: "He/She", verb: "moved", example: "He moved the furniture around." },
          { subject: "We", verb: "moved", example: "We moved at a slow pace." },
          { subject: "They", verb: "moved", example: "They moved to the countryside last summer." }
        ]
      },
      { 
        name: "Want", 
        conjugations: [
          { subject: "I", verb: "wanted", example: "I wanted to learn a new language." },
          { subject: "You", verb: "wanted", example: "You wanted the best for your children." },
          { subject: "He/She", verb: "wanted", example: "She wanted to become a doctor." },
          { subject: "We", verb: "wanted", example: "We wanted to finish the project soon." },
          { subject: "They", verb: "wanted", example: "They wanted more information before deciding." }
        ]
      },
      { 
        name: "Need", 
        conjugations: [
          { subject: "I", verb: "needed", example: "I needed more time to complete the task." },
          { subject: "You", verb: "needed", example: "You needed to rest after working so hard." },
          { subject: "He/She", verb: "needed", example: "He needed assistance with his homework." },
          { subject: "We", verb: "needed", example: "We needed to order more supplies." },
          { subject: "They", verb: "needed", example: "They needed directions to the hotel." }
        ]
      },
      { 
        name: "Start", 
        conjugations: [
          { subject: "I", verb: "started", example: "I started work at 9 AM." },
          { subject: "You", verb: "started", example: "You started to understand the concept." },
          { subject: "He/She", verb: "started", example: "She started her day with exercise." },
          { subject: "We", verb: "started", example: "We started the meeting with introductions." },
          { subject: "They", verb: "started", example: "They started building the house last week." }
        ]
      },
      { 
        name: "Seem", 
        conjugations: [
          { subject: "I", verb: "seemed", example: "I seemed to have misplaced my keys." },
          { subject: "You", verb: "seemed", example: "You seemed worried about something." },
          { subject: "He/She", verb: "seemed", example: "He seemed happy with the results." },
          { subject: "We", verb: "seemed", example: "We seemed to be lost." },
          { subject: "They", verb: "seemed", example: "They seemed interested in our proposal." }
        ]
      },
      { 
        name: "Look", 
        conjugations: [
          { subject: "I", verb: "looked", example: "I looked at the stars last night." },
          { subject: "You", verb: "looked", example: "You looked tired after your journey." },
          { subject: "He/She", verb: "looked", example: "She looked through the window." },
          { subject: "We", verb: "looked", example: "We looked for solutions to the problem." },
          { subject: "They", verb: "looked", example: "They looked forward to the weekend." }
        ]
      },
      { 
        name: "Call", 
        conjugations: [
          { subject: "I", verb: "called", example: "I called my parents last Sunday." },
          { subject: "You", verb: "called", example: "You called for assistance when needed." },
          { subject: "He/She", verb: "called", example: "He called his dog by whistling." },
          { subject: "We", verb: "called", example: "We called this dish our specialty." },
          { subject: "They", verb: "called", example: "They called a meeting on Monday." }
        ]
      },
      { 
        name: "Try", 
        conjugations: [
          { subject: "I", verb: "tried", example: "I tried to exercise daily." },
          { subject: "You", verb: "tried", example: "You tried too hard sometimes." },
          { subject: "He/She", verb: "tried", example: "She tried new recipes regularly." },
          { subject: "We", verb: "tried", example: "We tried our best in the competition." },
          { subject: "They", verb: "tried", example: "They tried to arrive on time." }
        ]
      },
      { 
        name: "Use", 
        conjugations: [
          { subject: "I", verb: "used", example: "I used my computer for work." },
          { subject: "You", verb: "used", example: "You used too much salt in cooking." },
          { subject: "He/She", verb: "used", example: "He used public transportation daily." },
          { subject: "We", verb: "used", example: "We used solar energy in our home." },
          { subject: "They", verb: "used", example: "They used advanced technology in their research." }
        ]
      },
      { 
        name: "Bring", 
        conjugations: [
          { subject: "I", verb: "brought", example: "I brought lunch to work every day." },
          { subject: "You", verb: "brought", example: "You brought joy to everyone around you." },
          { subject: "He/She", verb: "brought", example: "She brought her camera on the trip." },
          { subject: "We", verb: "brought", example: "We brought gifts when visiting friends." },
          { subject: "They", verb: "brought", example: "They brought interesting perspectives to discussions." }
        ]
      },
      { 
        name: "Begin", 
        conjugations: [
          { subject: "I", verb: "began", example: "I began my day with meditation." },
          { subject: "You", verb: "began", example: "You began to see progress after practice." },
          { subject: "He/She", verb: "began", example: "He began work at sunrise." },
          { subject: "We", verb: "began", example: "We began our journey at dawn." },
          { subject: "They", verb: "began", example: "They began rehearsals last week." }
        ]
      },
      { 
        name: "Write", 
        conjugations: [
          { subject: "I", verb: "wrote", example: "I wrote in my journal every night." },
          { subject: "You", verb: "wrote", example: "You wrote beautiful poetry." },
          { subject: "He/She", verb: "wrote", example: "She wrote articles for magazines." },
          { subject: "We", verb: "wrote", example: "We wrote code for the new application." },
          { subject: "They", verb: "wrote", example: "They wrote to each other regularly." }
        ]
      },
      { 
        name: "Read", 
        conjugations: [
          { subject: "I", verb: "read", example: "I read books before bedtime." },
          { subject: "You", verb: "read", example: "You read too quickly to absorb details." },
          { subject: "He/She", verb: "read", example: "He read the newspaper every morning." },
          { subject: "We", verb: "read", example: "We read instructions carefully." },
          { subject: "They", verb: "read", example: "They read different genres of literature." }
        ]
      },
      { 
        name: "Say", 
        conjugations: [
          { subject: "I", verb: "said", example: "I said what I meant." },
          { subject: "You", verb: "said", example: "You said the same thing repeatedly." },
          { subject: "He/She", verb: "said", example: "She said hello to everyone she met." },
          { subject: "We", verb: "said", example: "We said prayers before meals." },
          { subject: "They", verb: "said", example: "They said the weather would improve tomorrow." }
        ]
      },
      { 
        name: "Stop", 
        conjugations: [
          { subject: "I", verb: "stopped", example: "I stopped at red traffic lights." },
          { subject: "You", verb: "stopped", example: "You stopped working at 6 PM." },
          { subject: "He/She", verb: "stopped", example: "He stopped to rest during long hikes." },
          { subject: "We", verb: "stopped", example: "We stopped arguing when someone intervened." },
          { subject: "They", verb: "stopped", example: "They stopped production during holidays." }
        ]
      },
      { 
        name: "Learn", 
        conjugations: [
          { subject: "I", verb: "learned", example: "I learned something new every day." },
          { subject: "You", verb: "learned", example: "You learned quickly from your mistakes." },
          { subject: "He/She", verb: "learned", example: "She learned languages easily." },
          { subject: "We", verb: "learned", example: "We learned from each other's experiences." },
          { subject: "They", verb: "learned", example: "They learned about different cultures through travel." }
        ]
      },
      { 
        name: "Understand", 
        conjugations: [
          { subject: "I", verb: "understood", example: "I understood your concerns." },
          { subject: "You", verb: "understood", example: "You understood complex theories quickly." },
          { subject: "He/She", verb: "understood", example: "He understood the importance of timing." },
          { subject: "We", verb: "understood", example: "We understood the risks involved." },
          { subject: "They", verb: "understood", example: "They understood each other without words." }
        ]
      },
      { 
        name: "Watch", 
        conjugations: [
          { subject: "I", verb: "watched", example: "I watched documentaries in my free time." },
          { subject: "You", verb: "watched", example: "You watched the children at the playground." },
          { subject: "He/She", verb: "watched", example: "She watched birds from her window." },
          { subject: "We", verb: "watched", example: "We watched our expenses carefully." },
          { subject: "They", verb: "watched", example: "They watched the sunset from their balcony." }
        ]
      },
      { 
        name: "Follow", 
        conjugations: [
          { subject: "I", verb: "followed", example: "I followed the recipe exactly." },
          { subject: "You", verb: "followed", example: "You followed the latest fashion trends." },
          { subject: "He/She", verb: "followed", example: "He followed a strict daily routine." },
          { subject: "We", verb: "followed", example: "We followed the guide through the museum." },
          { subject: "They", verb: "followed", example: "They followed each other on social media." }
        ]
      },
      { 
        name: "Walk", 
        conjugations: [
          { subject: "I", verb: "walked", example: "I walked to work every day." },
          { subject: "You", verb: "walked", example: "You walked your dog in the park." },
          { subject: "He/She", verb: "walked", example: "She walked with confidence." },
          { subject: "We", verb: "walked", example: "We walked five miles each weekend." },
          { subject: "They", verb: "walked", example: "They walked along the beach at sunset." }
        ]
      },
      { 
        name: "Meet", 
        conjugations: [
          { subject: "I", verb: "met", example: "I met with clients regularly." },
          { subject: "You", verb: "met", example: "You met interesting people in your job." },
          { subject: "He/She", verb: "met", example: "He met his goals consistently." },
          { subject: "We", verb: "met", example: "We met for coffee every Thursday." },
          { subject: "They", verb: "met", example: "They met to discuss project updates." }
        ]
      },
      { 
        name: "Consider", 
        conjugations: [
          { subject: "I", verb: "considered", example: "I considered all options before deciding." },
          { subject: "You", verb: "considered", example: "You considered yourself an expert in this field." },
          { subject: "He/She", verb: "considered", example: "She considered feedback carefully." },
          { subject: "We", verb: "considered", example: "We considered the environmental impact." },
          { subject: "They", verb: "considered", example: "They considered the proposal reasonable." }
        ]
      },
      { 
        name: "Change", 
        conjugations: [
          { subject: "I", verb: "changed", example: "I changed my schedule when necessary." },
          { subject: "You", verb: "changed", example: "You changed your mind too often." },
          { subject: "He/She", verb: "changed", example: "He changed his clothes after work." },
          { subject: "We", verb: "changed", example: "We changed our strategy based on results." },
          { subject: "They", verb: "changed", example: "They changed apartments frequently." }
        ]
      },
      { 
        name: "Appear", 
        conjugations: [
          { subject: "I", verb: "appeared", example: "I appeared calm even when stressed." },
          { subject: "You", verb: "appeared", example: "You appeared in many of the photos." },
          { subject: "He/She", verb: "appeared", example: "She appeared on television weekly." },
          { subject: "We", verb: "appeared", example: "We appeared confident during presentations." },
          { subject: "They", verb: "appeared", example: "They appeared to be lost." }
        ]
      },
      { 
        name: "Happen", 
        conjugations: [
          { subject: "I", verb: "happened", example: "I happened to know the answer." },
          { subject: "You", verb: "happened", example: "You happened to be at the right place." },
          { subject: "He/She", verb: "happened", example: "It happened when least expected." },
          { subject: "We", verb: "happened", example: "We happened to share the same birthday." },
          { subject: "They", verb: "happened", example: "They happened to be experts in this field." }
        ]
      },
      { 
        name: "Drive", 
        conjugations: [
          { subject: "I", verb: "drove", example: "I drove to the countryside last weekend." },
          { subject: "You", verb: "drove", example: "You drove too fast on the highway." },
          { subject: "He/She", verb: "drove", example: "She drove an electric car." },
          { subject: "We", verb: "drove", example: "We drove carefully in bad weather." },
          { subject: "They", verb: "drove", example: "They drove across the country last summer." }
        ]
      },
      { 
        name: "Send", 
        conjugations: [
          { subject: "I", verb: "sent", example: "I sent emails to clients yesterday." },
          { subject: "You", verb: "sent", example: "You sent too many text messages." },
          { subject: "He/She", verb: "sent", example: "She sent flowers on the special occasion." },
          { subject: "We", verb: "sent", example: "We sent our condolences to the family." },
          { subject: "They", verb: "sent", example: "They sent packages overseas." }
        ]
      },
      { 
        name: "Stay", 
        conjugations: [
          { subject: "I", verb: "stayed", example: "I stayed at home during bad weather." },
          { subject: "You", verb: "stayed", example: "You stayed focused during the meeting." },
          { subject: "He/She", verb: "stayed", example: "He stayed with his grandparents last weekend." },
          { subject: "We", verb: "stayed", example: "We stayed in touch through video calls." },
          { subject: "They", verb: "stayed", example: "They stayed at a luxury hotel when traveling." }
        ]
      },
      { 
        name: "Receive", 
        conjugations: [
          { subject: "I", verb: "received", example: "I received too much junk mail." },
          { subject: "You", verb: "received", example: "You received praise for your hard work." },
          { subject: "He/She", verb: "received", example: "She received a salary last month." },
          { subject: "We", verb: "received", example: "We received guests on Sunday." },
          { subject: "They", verb: "received", example: "They received funding for their research." }
        ]
      },
      { 
        name: "Remember", 
        conjugations: [
          { subject: "I", verb: "remembered", example: "I remembered my childhood clearly." },
          { subject: "You", verb: "remembered", example: "You remembered faces better than names." },
          { subject: "He/She", verb: "remembered", example: "He remembered to call on birthdays." },
          { subject: "We", verb: "remembered", example: "We remembered the good times we shared." },
          { subject: "They", verb: "remembered", example: "They remembered the directions to the cabin." }
        ]
      },
      { 
        name: "Expect", 
        conjugations: [
          { subject: "I", verb: "expected", example: "I expected to finish by yesterday." },
          { subject: "You", verb: "expected", example: "You expected too much from others." },
          { subject: "He/She", verb: "expected", example: "She expected excellence from her team." },
          { subject: "We", verb: "expected", example: "We expected the delivery yesterday afternoon." },
          { subject: "They", verb: "expected", example: "They expected clear communication." }
        ]
      },
      { 
        name: "Buy", 
        conjugations: [
          { subject: "I", verb: "bought", example: "I bought organic produce when possible." },
          { subject: "You", verb: "bought", example: "You bought new clothes last season." },
          { subject: "He/She", verb: "bought", example: "He bought stocks when prices dropped." },
          { subject: "We", verb: "bought", example: "We bought in bulk to save money." },
          { subject: "They", verb: "bought", example: "They bought tickets well in advance." }
        ]
      },
      { 
        name: "Build", 
        conjugations: [
          { subject: "I", verb: "built", example: "I built model airplanes as a hobby." },
          { subject: "You", verb: "built", example: "You built strong relationships with clients." },
          { subject: "He/She", verb: "built", example: "She built websites for small businesses." },
          { subject: "We", verb: "built", example: "We built our schedules around family time." },
          { subject: "They", verb: "built", example: "They built eco-friendly homes." }
        ]
      },
      { 
        name: "Fall", 
        conjugations: [
          { subject: "I", verb: "fell", example: "I fell asleep quickly after exercising." },
          { subject: "You", verb: "fell", example: "You fell behind when you missed classes." },
          { subject: "He/She", verb: "fell", example: "He fell silent when upset." },
          { subject: "We", verb: "fell", example: "We fell in love with the city's charm." },
          { subject: "They", verb: "fell", example: "They fell into predictable patterns." }
        ]
      },
      { 
        name: "Reach", 
        conjugations: [
          { subject: "I", verb: "reached", example: "I reached for the stars in my goals." },
          { subject: "You", verb: "reached", example: "You reached the top shelf easily." },
          { subject: "He/She", verb: "reached", example: "She reached out to old friends regularly." },
          { subject: "We", verb: "reached", example: "We reached our destination before sunset." },
          { subject: "They", verb: "reached", example: "They reached agreements through compromise." }
        ]
      },
      { 
        name: "Remain", 
        conjugations: [
          { subject: "I", verb: "remained", example: "I remained optimistic despite challenges." },
          { subject: "You", verb: "remained", example: "You remained seated during turbulence." },
          { subject: "He/She", verb: "remained", example: "He remained dedicated to his studies." },
          { subject: "We", verb: "remained", example: "We remained friends despite disagreements." },
          { subject: "They", verb: "remained", example: "They remained silent about the incident." }
        ]
      },
      { 
        name: "Believe", 
        conjugations: [
          { subject: "I", verb: "believed", example: "I believed in equal opportunities." },
          { subject: "You", verb: "believed", example: "You believed everything you read online." },
          { subject: "He/She", verb: "believed", example: "She believed in working hard." },
          { subject: "We", verb: "believed", example: "We believed the project would succeed." },
          { subject: "They", verb: "believed", example: "They believed in traditional values." }
        ]
      },
      { 
        name: "Hold", 
        conjugations: [
          { subject: "I", verb: "held", example: "I held meetings every Monday." },
          { subject: "You", verb: "held", example: "You held the record for fastest time." },
          { subject: "He/She", verb: "held", example: "He held three different positions." },
          { subject: "We", verb: "held", example: "We held hands when crossing the street." },
          { subject: "They", verb: "held", example: "They held their breath underwater." }
        ]
      },
      { 
        name: "Sell", 
        conjugations: [
          { subject: "I", verb: "sold", example: "I sold handmade crafts online." },
          { subject: "You", verb: "sold", example: "You sold your ideas convincingly." },
          { subject: "He/She", verb: "sold", example: "She sold houses in this neighborhood." },
          { subject: "We", verb: "sold", example: "We sold organic products only." },
          { subject: "They", verb: "sold", example: "They sold tickets at the entrance." }
        ]
      },
      { 
        name: "Pay", 
        conjugations: [
          { subject: "I", verb: "paid", example: "I paid bills at the start of last month." },
          { subject: "You", verb: "paid", example: "You paid attention to details." },
          { subject: "He/She", verb: "paid", example: "He paid for dinner when we went out." },
          { subject: "We", verb: "paid", example: "We paid our employees fairly." },
          { subject: "They", verb: "paid", example: "They paid extra for express shipping." }
        ]
      },
      { 
        name: "Open", 
        conjugations: [
          { subject: "I", verb: "opened", example: "I opened the window for fresh air." },
          { subject: "You", verb: "opened", example: "You opened your gifts carefully." },
          { subject: "He/She", verb: "opened", example: "She opened the store at 8 AM." },
          { subject: "We", verb: "opened", example: "We opened our home to visitors." },
          { subject: "They", verb: "opened", example: "They opened a new branch last year." }
        ]
      },
      { 
        name: "Lose", 
        conjugations: [
          { subject: "I", verb: "lost", example: "I lost my keys frequently." },
          { subject: "You", verb: "lost", example: "You lost patience with difficult customers." },
          { subject: "He/She", verb: "lost", example: "He lost interest in long meetings." },
          { subject: "We", verb: "lost", example: "We lost track of time when having fun." },
          { subject: "They", verb: "lost", example: "They lost weight through regular exercise." }
        ]
      },
      { 
        name: "Wait", 
        conjugations: [
          { subject: "I", verb: "waited", example: "I waited for the bus every morning." },
          { subject: "You", verb: "waited", example: "You waited patiently for your turn." },
          { subject: "He/She", verb: "waited", example: "She waited outside the school." },
          { subject: "We", verb: "waited", example: "We waited until everyone arrived." },
          { subject: "They", verb: "waited", example: "They waited in line for concert tickets." }
        ]
      },
      { 
        name: "Serve", 
        conjugations: [
          { subject: "I", verb: "served", example: "I served dinner at 7 PM." },
          { subject: "You", verb: "served", example: "You served on the community board." },
          { subject: "He/She", verb: "served", example: "He served in the military." },
          { subject: "We", verb: "served", example: "We served local produce in our restaurant." },
          { subject: "They", verb: "served", example: "They served as mentors to young professionals." }
        ]
      },
      { 
        name: "Die", 
        conjugations: [
          { subject: "I", verb: "died", example: "I died a little inside when I saw injustice." },
          { subject: "You", verb: "died", example: "You died of laughter at his jokes." },
          { subject: "He/She", verb: "died", example: "She died her hair different colors." },
          { subject: "We", verb: "died", example: "We died to our old habits to form new ones." },
          { subject: "They", verb: "died", example: "They died down eventually, these rumors." }
        ]
      },
      { 
        name: "Lead", 
        conjugations: [
          { subject: "I", verb: "led", example: "I led the marketing team." },
          { subject: "You", verb: "led", example: "You led by example." },
          { subject: "He/She", verb: "led", example: "She led the discussion skillfully." },
          { subject: "We", verb: "led", example: "We led different departments in the company." },
          { subject: "They", verb: "led", example: "They led tours through the historic district." }
        ]
      },
      { 
        name: "Break", 
        conjugations: [
          { subject: "I", verb: "broke", example: "I broke for lunch at noon." },
          { subject: "You", verb: "broke", example: "You broke records in swimming." },
          { subject: "He/She", verb: "broke", example: "He broke down complex topics simply." },
          { subject: "We", verb: "broke", example: "We broke tradition by celebrating differently." },
          { subject: "They", verb: "broke", example: "They broke into small groups for the activity." }
        ]
      },
      { 
        name: "Create", 
        conjugations: [
          { subject: "I", verb: "created", example: "I created digital art in my spare time." },
          { subject: "You", verb: "created", example: "You created opportunities for others." },
          { subject: "He/She", verb: "created", example: "She created a positive atmosphere." },
          { subject: "We", verb: "created", example: "We created new products every quarter." },
          { subject: "They", verb: "created", example: "They created lasting memories on their trips." }
        ]
      },
      { 
        name: "Sleep", 
        conjugations: [
          { subject: "I", verb: "slept", example: "I slept for eight hours last night." },
          { subject: "You", verb: "slept", example: "You slept through alarm clocks." },
          { subject: "He/She", verb: "slept", example: "He slept with the window open." },
          { subject: "We", verb: "slept", example: "We slept in tents when camping." },
          { subject: "They", verb: "slept", example: "They slept late on weekends." }
        ]
      },
      { 
        name: "Win", 
        conjugations: [
          { subject: "I", verb: "won", example: "I won at card games regularly." },
          { subject: "You", verb: "won", example: "You won people's trust with your honesty." },
          { subject: "He/She", verb: "won", example: "She won competitions through hard work." },
          { subject: "We", verb: "won", example: "We won most of our home games." },
          { subject: "They", verb: "won", example: "They won awards for their documentary films." }
        ]
      },
      { 
        name: "Offer", 
        conjugations: [
          { subject: "I", verb: "offered", example: "I offered to help whenever possible." },
          { subject: "You", verb: "offered", example: "You offered valuable advice to beginners." },
          { subject: "He/She", verb: "offered", example: "He offered free consultations to new clients." },
          { subject: "We", verb: "offered", example: "We offered discounts to loyal customers." },
          { subject: "They", verb: "offered", example: "They offered various payment options." }
        ]
      },
      { 
        name: "Grow", 
        conjugations: [
          { subject: "I", verb: "grew", example: "I grew vegetables in my garden." },
          { subject: "You", verb: "grew", example: "You grew wiser with experience." },
          { subject: "He/She", verb: "grew", example: "She grew flowers on her balcony." },
          { subject: "We", verb: "grew", example: "We grew closer through shared experiences." },
          { subject: "They", verb: "grew", example: "They grew their business through referrals." }
        ]
      },
      { 
        name: "Teach", 
        conjugations: [
          { subject: "I", verb: "taught", example: "I taught history at the local high school." },
          { subject: "You", verb: "taught", example: "You taught children to respect nature." },
          { subject: "He/She", verb: "taught", example: "He taught piano to beginners." },
          { subject: "We", verb: "taught", example: "We taught workshops on creative writing." },
          { subject: "They", verb: "taught", example: "They taught each other new skills." }
        ]
      },
      { 
        name: "Cook", 
        conjugations: [
          { subject: "I", verb: "cooked", example: "I cooked dinner for my family last night." },
          { subject: "You", verb: "cooked", example: "You cooked Italian food really well." },
          { subject: "He/She", verb: "cooked", example: "She cooked professionally in a restaurant." },
          { subject: "We", verb: "cooked", example: "We cooked together on special occasions." },
          { subject: "They", verb: "cooked", example: "They cooked traditional recipes from their culture." }
        ]
      },
      { 
        name: "Spend", 
        conjugations: [
          { subject: "I", verb: "spent", example: "I spent time reading every day." },
          { subject: "You", verb: "spent", example: "You spent money wisely." },
          { subject: "He/She", verb: "spent", example: "He spent hours practicing the guitar." },
          { subject: "We", verb: "spent", example: "We spent weekends at the beach." },
          { subject: "They", verb: "spent", example: "They spent resources on employee development." }
        ]
      },
      { 
        name: "Draw", 
        conjugations: [
          { subject: "I", verb: "drew", example: "I drew illustrations for children's books." },
          { subject: "You", verb: "drew", example: "You drew inspiration from nature." },
          { subject: "He/She", verb: "drew", example: "She drew attention with her bright clothing." },
          { subject: "We", verb: "drew", example: "We drew conclusions from the available data." },
          { subject: "They", verb: "drew", example: "They drew crowds to their performances." }
        ]
      },
      { 
        name: "Continue", 
        conjugations: [
          { subject: "I", verb: "continued", example: "I continued to practice despite difficulties." },
          { subject: "You", verb: "continued", example: "You continued working after everyone left." },
          { subject: "He/She", verb: "continued", example: "He continued the family business." },
          { subject: "We", verb: "continued", example: "We continued the tradition every year." },
          { subject: "They", verb: "continued", example: "They continued to support various charities." }
        ]
      },
      { 
        name: "Sit", 
        conjugations: [
          { subject: "I", verb: "sat", example: "I sat by the window to read." },
          { subject: "You", verb: "sat", example: "You sat at the head of the table." },
          { subject: "He/She", verb: "sat", example: "She sat on the board of directors." },
          { subject: "We", verb: "sat", example: "We sat together during lunch breaks." },
          { subject: "They", verb: "sat", example: "They sat in the front row at concerts." }
        ]
      },
      { 
        name: "Rise", 
        conjugations: [
          { subject: "I", verb: "rose", example: "I rose early to exercise." },
          { subject: "You", verb: "rose", example: "You rose to the challenge every time." },
          { subject: "He/She", verb: "rose", example: "He rose through the ranks quickly." },
          { subject: "We", verb: "rose", example: "We rose to the occasion when needed." },
          { subject: "They", verb: "rose", example: "They rose before dawn to start fishing." }
        ]
      },
      { 
        name: "Drink", 
        conjugations: [
          { subject: "I", verb: "drank", example: "I drank water throughout the day." },
          { subject: "You", verb: "drank", example: "You drank tea every morning." },
          { subject: "He/She", verb: "drank", example: "She drank coffee without sugar." },
          { subject: "We", verb: "drank", example: "We drank smoothies after workouts." },
          { subject: "They", verb: "drank", example: "They drank toasts at celebrations." }
        ]
      },
      { 
        name: "Wear", 
        conjugations: [
          { subject: "I", verb: "wore", example: "I wore comfortable shoes to work." },
          { subject: "You", verb: "wore", example: "You wore your heart on your sleeve." },
          { subject: "He/She", verb: "wore", example: "He wore glasses for reading." },
          { subject: "We", verb: "wore", example: "We wore uniforms during competitions." },
          { subject: "They", verb: "wore", example: "They wore traditional clothing on holidays." }
        ]
      },
      { 
        name: "Choose", 
        conjugations: [
          { subject: "I", verb: "chose", example: "I chose quality over quantity." },
          { subject: "You", verb: "chose", example: "You chose friends wisely." },
          { subject: "He/She", verb: "chose", example: "She chose organic products." },
          { subject: "We", verb: "chose", example: "We chose vacation destinations together." },
          { subject: "They", verb: "chose", example: "They chose to walk instead of driving." }
        ]
      },
      { 
        name: "Travel", 
        conjugations: [
          { subject: "I", verb: "traveled", example: "I traveled for work frequently." },
          { subject: "You", verb: "traveled", example: "You traveled to exotic locations." },
          { subject: "He/She", verb: "traveled", example: "He traveled by train whenever possible." },
          { subject: "We", verb: "traveled", example: "We traveled light with just carry-on luggage." },
          { subject: "They", verb: "traveled", example: "They traveled around the world documenting cultures." }
        ]
      },
      { 
        name: "Forget", 
        conjugations: [
          { subject: "I", verb: "forgot", example: "I forgot names easily." },
          { subject: "You", verb: "forgot", example: "You forgot to lock the door sometimes." },
          { subject: "He/She", verb: "forgot", example: "She forgot appointments occasionally." },
          { subject: "We", verb: "forgot", example: "We forgot how far we'd come." },
          { subject: "They", verb: "forgot", example: "They forgot to check their emails on weekends." }
        ]
      },
      { 
        name: "Smile", 
        conjugations: [
          { subject: "I", verb: "smiled", example: "I smiled when I saw dogs in the park." },
          { subject: "You", verb: "smiled", example: "You smiled in all your photos." },
          { subject: "He/She", verb: "smiled", example: "She smiled at everyone she met." },
          { subject: "We", verb: "smiled", example: "We smiled through difficult times." },
          { subject: "They", verb: "smiled", example: "They smiled proudly at their graduation." }
        ]
      },
      { 
        name: "Finish", 
        conjugations: [
          { subject: "I", verb: "finished", example: "I finished my homework before dinner." },
          { subject: "You", verb: "finished", example: "You finished projects ahead of schedule." },
          { subject: "He/She", verb: "finished", example: "She finished the race in first place." },
          { subject: "We", verb: "finished", example: "We finished eating at the same time." },
          { subject: "They", verb: "finished", example: "They finished their work day at 5 PM." }
        ]
      },
      { 
        name: "Decide", 
        conjugations: [
          { subject: "I", verb: "decided", example: "I decided where we would go for dinner." },
          { subject: "You", verb: "decided", example: "You decided too quickly sometimes." },
          { subject: "He/She", verb: "decided", example: "He decided which movie to watch." },
          { subject: "We", verb: "decided", example: "We decided our budget together." },
          { subject: "They", verb: "decided", example: "They decided the company's direction." }
        ]
      },
      { 
        name: "Explain", 
        conjugations: [
          { subject: "I", verb: "explained", example: "I explained the process step by step." },
          { subject: "You", verb: "explained", example: "You explained concepts clearly." },
          { subject: "He/She", verb: "explained", example: "She explained the rules to newcomers." },
          { subject: "We", verb: "explained", example: "We explained our decisions to stakeholders." },
          { subject: "They", verb: "explained", example: "They explained their research findings." }
        ]
      },
      { 
        name: "Develop", 
        conjugations: [
          { subject: "I", verb: "developed", example: "I developed new skills through practice." },
          { subject: "You", verb: "developed", example: "You developed software applications." },
          { subject: "He/She", verb: "developed", example: "He developed strong relationships with clients." },
          { subject: "We", verb: "developed", example: "We developed strategies for growth." },
          { subject: "They", verb: "developed", example: "They developed photos in a darkroom." }
        ]
      },
      { 
        name: "Accept", 
        conjugations: [
          { subject: "I", verb: "accepted", example: "I accepted your apology." },
          { subject: "You", verb: "accepted", example: "You accepted challenges bravely." },
          { subject: "He/She", verb: "accepted", example: "She accepted the award with gratitude." },
          { subject: "We", verb: "accepted", example: "We accepted all major credit cards." },
          { subject: "They", verb: "accepted", example: "They accepted new members twice a year." }
        ]
      },
      { 
        name: "Drop", 
        conjugations: [
          { subject: "I", verb: "dropped", example: "I dropped hints about what I wanted for my birthday." },
          { subject: "You", verb: "dropped", example: "You dropped by unannounced sometimes." },
          { subject: "He/She", verb: "dropped", example: "He dropped the children at school every morning." },
          { subject: "We", verb: "dropped", example: "We dropped our voices when discussing sensitive topics." },
          { subject: "They", verb: "dropped", example: "They dropped prices during sales." }
        ]
      },
      { 
        name: "Present", 
        conjugations: [
          { subject: "I", verb: "presented", example: "I presented my findings to the committee." },
          { subject: "You", verb: "presented", example: "You presented yourself professionally." },
          { subject: "He/She", verb: "presented", example: "She presented a new proposal each quarter." },
          { subject: "We", verb: "presented", example: "We presented awards at the annual ceremony." },
          { subject: "They", verb: "presented", example: "They presented a united front to competitors." }
        ]
      },
      { 
        name: "Plan", 
        conjugations: [
          { subject: "I", verb: "planned", example: "I planned my week in advance." },
          { subject: "You", verb: "planned", example: "You planned excellent parties." },
          { subject: "He/She", verb: "planned", example: "He planned to retire early." },
          { subject: "We", verb: "planned", example: "We planned our vacation carefully." },
          { subject: "They", verb: "planned", example: "They planned for every contingency." }
        ]
      },
      { 
        name: "Argue", 
        conjugations: [
          { subject: "I", verb: "argued", example: "I argued for environmental protection." },
          { subject: "You", verb: "argued", example: "You argued your case convincingly." },
          { subject: "He/She", verb: "argued", example: "She argued with passion in debates." },
          { subject: "We", verb: "argued", example: "We argued about politics occasionally." },
          { subject: "They", verb: "argued", example: "They argued for higher wages." }
        ]
      },
      { 
        name: "Support", 
        conjugations: [
          { subject: "I", verb: "supported", example: "I supported local businesses." },
          { subject: "You", verb: "supported", example: "You supported your friends in tough times." },
          { subject: "He/She", verb: "supported", example: "He supported several charities." },
          { subject: "We", verb: "supported", example: "We supported each other's career goals." },
          { subject: "They", verb: "supported", example: "They supported the community through volunteering." }
        ]
      },
      { 
        name: "Jump", 
        conjugations: [
          { subject: "I", verb: "jumped", example: "I jumped at the opportunity to learn." },
          { subject: "You", verb: "jumped", example: "You jumped to conclusions too quickly." },
          { subject: "He/She", verb: "jumped", example: "She jumped rope for exercise." },
          { subject: "We", verb: "jumped", example: "We jumped into the lake on hot days." },
          { subject: "They", verb: "jumped", example: "They jumped with excitement at the news." }
        ]
      },
      { 
        name: "Share", 
        conjugations: [
          { subject: "I", verb: "shared", example: "I shared my lunch with colleagues." },
          { subject: "You", verb: "shared", example: "You shared interesting articles online." },
          { subject: "He/She", verb: "shared", example: "He shared his experience with beginners." },
          { subject: "We", verb: "shared", example: "We shared a passion for music." },
          { subject: "They", verb: "shared", example: "They shared resources across departments." }
        ]
      },
      { 
        name: "Pass", 
        conjugations: [
          { subject: "I", verb: "passed", example: "I passed by your house on my way to work." },
          { subject: "You", verb: "passed", example: "You passed the ball too late." },
          { subject: "He/She", verb: "passed", example: "She passed her exams with high marks." },
          { subject: "We", verb: "passed", example: "We passed through security checks quickly." },
          { subject: "They", verb: "passed", example: "They passed legislation after much debate." }
        ]
      },
      { 
        name: "Save", 
        conjugations: [
          { subject: "I", verb: "saved", example: "I saved money for retirement." },
          { subject: "You", verb: "saved", example: "You saved time by taking shortcuts." },
          { subject: "He/She", verb: "saved", example: "He saved endangered animals for a living." },
          { subject: "We", verb: "saved", example: "We saved energy by using LED lights." },
          { subject: "They", verb: "saved", example: "They saved their best players for important matches." }
        ]
      },
      { 
        name: "Control", 
        conjugations: [
          { subject: "I", verb: "controlled", example: "I controlled the budget for my department." },
          { subject: "You", verb: "controlled", example: "You controlled the temperature with that remote." },
          { subject: "He/She", verb: "controlled", example: "She controlled access to the secure area." },
          { subject: "We", verb: "controlled", example: "We controlled quality through regular inspections." },
          { subject: "They", verb: "controlled", example: "They controlled several companies in the sector." }
        ]
      },
      { 
        name: "Wonder", 
        conjugations: [
          { subject: "I", verb: "wondered", example: "I wondered what tomorrow would bring." },
          { subject: "You", verb: "wondered", example: "You wondered about life on other planets." },
          { subject: "He/She", verb: "wondered", example: "He wondered why people behaved as they did." },
          { subject: "We", verb: "wondered", example: "We wondered if we made the right decision." },
          { subject: "They", verb: "wondered", example: "They wondered about the meaning of the painting." }
        ]
      },
      { 
        name: "Include", 
        conjugations: [
          { subject: "I", verb: "included", example: "I included everyone in group activities." },
          { subject: "You", verb: "included", example: "You included too many details in your reports." },
          { subject: "He/She", verb: "included", example: "She included references in her papers." },
          { subject: "We", verb: "included", example: "We included breakfast in the hotel price." },
          { subject: "They", verb: "included", example: "They included diverse perspectives in planning." }
        ]
      },
      { 
        name: "Agree", 
        conjugations: [
          { subject: "I", verb: "agreed", example: "I agreed with your assessment." },
          { subject: "You", verb: "agreed", example: "You agreed to the terms and conditions." },
          { subject: "He/She", verb: "agreed", example: "He agreed to participate in the study." },
          { subject: "We", verb: "agreed", example: "We agreed to meet at six o'clock." },
          { subject: "They", verb: "agreed", example: "They agreed on the importance of education." }
        ]
      },
      { 
        name: "Return", 
        conjugations: [
          { subject: "I", verb: "returned", example: "I returned books to the library on time." },
          { subject: "You", verb: "returned", example: "You returned home late from work." },
          { subject: "He/She", verb: "returned", example: "She returned calls promptly." },
          { subject: "We", verb: "returned", example: "We returned to our hometown for holidays." },
          { subject: "They", verb: "returned", example: "They returned the borrowed equipment." }
        ]
      },
      { 
        name: "Describe", 
        conjugations: [
          { subject: "I", verb: "described", example: "I described my symptoms to the doctor." },
          { subject: "You", verb: "described", example: "You described scenes vividly in your writing." },
          { subject: "He/She", verb: "described", example: "He described the incident in detail." },
          { subject: "We", verb: "described", example: "We described our ideal candidates in the job posting." },
          { subject: "They", verb: "described", example: "They described their experience as life-changing." }
        ]
      },
      { 
        name: "Hope", 
        conjugations: [
          { subject: "I", verb: "hoped", example: "I hoped for good weather yesterday." },
          { subject: "You", verb: "hoped", example: "You hoped to finish the project soon." },
          { subject: "He/She", verb: "hoped", example: "She hoped for a promotion last year." },
          { subject: "We", verb: "hoped", example: "We hoped you could join us for dinner." },
          { subject: "They", verb: "hoped", example: "They hoped their flight wouldn't be delayed." }
        ]
      },
      { 
        name: "Allow", 
        conjugations: [
          { subject: "I", verb: "allowed", example: "I allowed myself one dessert last week." },
          { subject: "You", verb: "allowed", example: "You allowed your children great freedom." },
          { subject: "He/She", verb: "allowed", example: "He allowed extra time for questions." },
          { subject: "We", verb: "allowed", example: "We allowed pets in our building." },
          { subject: "They", verb: "allowed", example: "They allowed employees to work remotely." }
        ]
      },
      { 
        name: "Visit", 
        conjugations: [
          { subject: "I", verb: "visited", example: "I visited my grandmother last Sunday." },
          { subject: "You", verb: "visited", example: "You visited museums when traveling." },
          { subject: "He/She", verb: "visited", example: "She visited clients throughout the week." },
          { subject: "We", verb: "visited", example: "We visited the beach during summer." },
          { subject: "They", verb: "visited", example: "They visited different countries last year." }
        ]
      },
      { 
        name: "Complete", 
        conjugations: [
          { subject: "I", verb: "completed", example: "I completed my tasks ahead of schedule." },
          { subject: "You", verb: "completed", example: "You completed puzzles with remarkable speed." },
          { subject: "He/She", verb: "completed", example: "He completed a marathon last spring." },
          { subject: "We", verb: "completed", example: "We completed the course requirements." },
          { subject: "They", verb: "completed", example: "They completed renovations last month." }
        ]
      },
      { 
        name: "Love", 
        conjugations: [
          { subject: "I", verb: "loved", example: "I loved spending time with family." },
          { subject: "You", verb: "loved", example: "You loved classical music." },
          { subject: "He/She", verb: "loved", example: "She loved baking bread from scratch." },
          { subject: "We", verb: "loved", example: "We loved traveling to new places." },
          { subject: "They", verb: "loved", example: "They loved watching movies together." }
        ]
      },
      { 
        name: "Join", 
        conjugations: [
          { subject: "I", verb: "joined", example: "I joined the meeting via video call." },
          { subject: "You", verb: "joined", example: "You joined us for dinner last Friday." },
          { subject: "He/She", verb: "joined", example: "He joined the team last week." },
          { subject: "We", verb: "joined", example: "We joined forces to solve the problem." },
          { subject: "They", verb: "joined", example: "They joined the protest against pollution." }
        ]
      },
      { 
        name: "Carry", 
        conjugations: [
          { subject: "I", verb: "carried", example: "I carried a notebook everywhere." },
          { subject: "You", verb: "carried", example: "You carried too much in your backpack." },
          { subject: "He/She", verb: "carried", example: "She carried the responsibility well." },
          { subject: "We", verb: "carried", example: "We carried traditions from our homeland." },
          { subject: "They", verb: "carried", example: "They carried supplies to the campsite." }
        ]
      },
      { 
        name: "Realize", 
        conjugations: [
          { subject: "I", verb: "realized", example: "I realized my mistake then." },
          { subject: "You", verb: "realized", example: "You realized the importance of preparation." },
          { subject: "He/She", verb: "realized", example: "He realized his potential through practice." },
          { subject: "We", verb: "realized", example: "We realized the consequences of our actions." },
          { subject: "They", verb: "realized", example: "They realized their dreams through hard work." }
        ]
      },
      { 
        name: "Dance", 
        conjugations: [
          { subject: "I", verb: "danced", example: "I danced at weddings and parties." },
          { subject: "You", verb: "danced", example: "You danced with great rhythm." },
          { subject: "He/She", verb: "danced", example: "She danced ballet professionally." },
          { subject: "We", verb: "danced", example: "We danced to celebrate our victory." },
          { subject: "They", verb: "danced", example: "They danced traditional dances at festivals." }
        ]
      },
      { 
        name: "Wish", 
        conjugations: [
          { subject: "I", verb: "wished", example: "I wished for peace in the world." },
          { subject: "You", verb: "wished", example: "You wished things were different." },
          { subject: "He/She", verb: "wished", example: "He wished to travel more often." },
          { subject: "We", verb: "wished", example: "We wished you a happy birthday." },
          { subject: "They", verb: "wished", example: "They wished upon shooting stars." }
        ]
      },
      { 
        name: "Admit", 
        conjugations: [
          { subject: "I", verb: "admitted", example: "I admitted when I was wrong." },
          { subject: "You", verb: "admitted", example: "You admitted your fears to close friends." },
          { subject: "He/She", verb: "admitted", example: "She admitted students to the program." },
          { subject: "We", verb: "admitted", example: "We admitted the evidence into the record." },
          { subject: "They", verb: "admitted", example: "They admitted making a poor decision." }
        ]
      },
      { 
        name: "Fix", 
        conjugations: [
          { subject: "I", verb: "fixed", example: "I fixed computers for a living." },
          { subject: "You", verb: "fixed", example: "You fixed problems efficiently." },
          { subject: "He/She", verb: "fixed", example: "He fixed breakfast every morning." },
          { subject: "We", verb: "fixed", example: "We fixed the time and place for the meeting." },
          { subject: "They", verb: "fixed", example: "They fixed their eyes on the horizon." }
        ]
      },
      { 
        name: "Succeed", 
        conjugations: [
          { subject: "I", verb: "succeeded", example: "I succeeded through persistence." },
          { subject: "You", verb: "succeeded", example: "You succeeded in challenging situations." },
          { subject: "He/She", verb: "succeeded", example: "She succeeded because of her preparation." },
          { subject: "We", verb: "succeeded", example: "We succeeded when we worked together." },
          { subject: "They", verb: "succeeded", example: "They succeeded against all odds." }
        ]
      },
      { 
        name: "Enjoy", 
        conjugations: [
          { subject: "I", verb: "enjoyed", example: "I enjoyed reading mystery novels." },
          { subject: "You", verb: "enjoyed", example: "You enjoyed outdoor activities." },
          { subject: "He/She", verb: "enjoyed", example: "He enjoyed collecting vintage records." },
          { subject: "We", verb: "enjoyed", example: "We enjoyed trying new restaurants." },
          { subject: "They", verb: "enjoyed", example: "They enjoyed each other's company." }
        ]
      },
      { 
        name: "Clean", 
        conjugations: [
          { subject: "I", verb: "cleaned", example: "I cleaned my apartment last weekend." },
          { subject: "You", verb: "cleaned", example: "You cleaned your desk before leaving." },
          { subject: "He/She", verb: "cleaned", example: "She cleaned her brushes after painting." },
          { subject: "We", verb: "cleaned", example: "We cleaned the beach as volunteers." },
          { subject: "They", verb: "cleaned", example: "They cleaned their equipment after use." }
        ]
      },
      { 
        name: "Achieve", 
        conjugations: [
          { subject: "I", verb: "achieved", example: "I achieved my goals through planning." },
          { subject: "You", verb: "achieved", example: "You achieved excellent results." },
          { subject: "He/She", verb: "achieved", example: "She achieved balance in her life." },
          { subject: "We", verb: "achieved", example: "We achieved more when working together." },
          { subject: "They", verb: "achieved", example: "They achieved recognition for their work." }
        ]
      },
      { 
        name: "Cover", 
        conjugations: [
          { subject: "I", verb: "covered", example: "I covered all the bases in my research." },
          { subject: "You", verb: "covered", example: "You covered expenses for the team lunch." },
          { subject: "He/She", verb: "covered", example: "He covered sports for the local newspaper." },
          { subject: "We", verb: "covered", example: "We covered three topics in each session." },
          { subject: "They", verb: "covered", example: "They covered the furniture during renovations." }
        ]
      },
      { 
        name: "Avoid", 
        conjugations: [
          { subject: "I", verb: "avoided", example: "I avoided eating too much sugar." },
          { subject: "You", verb: "avoided", example: "You avoided confrontation when possible." },
          { subject: "He/She", verb: "avoided", example: "She avoided driving during rush hour." },
          { subject: "We", verb: "avoided", example: "We avoided unnecessary expenses." },
          { subject: "They", verb: "avoided", example: "They avoided making hasty decisions." }
        ]
      },
      { 
        name: "Raise", 
        conjugations: [
          { subject: "I", verb: "raised", example: "I raised questions during meetings." },
          { subject: "You", verb: "raised", example: "You raised awareness about important issues." },
          { subject: "He/She", verb: "raised", example: "He raised funds for charity." },
          { subject: "We", verb: "raised", example: "We raised our children to be kind." },
          { subject: "They", verb: "raised", example: "They raised crops on their farm." }
        ]
      },
      { 
        name: "Experience", 
        conjugations: [
          { subject: "I", verb: "experienced", example: "I experienced joy when helping others." },
          { subject: "You", verb: "experienced", example: "You experienced culture shock when traveling." },
          { subject: "He/She", verb: "experienced", example: "She experienced the world through art." },
          { subject: "We", verb: "experienced", example: "We experienced growth through challenges." },
          { subject: "They", verb: "experienced", example: "They experienced different cuisines on their trip." }
        ]
      },
      { 
        name: "Identify", 
        conjugations: [
          { subject: "I", verb: "identified", example: "I identified patterns in data." },
          { subject: "You", verb: "identified", example: "You identified with the main character." },
          { subject: "He/She", verb: "identified", example: "She identified rare bird species." },
          { subject: "We", verb: "identified", example: "We identified the key issues quickly." },
          { subject: "They", verb: "identified", example: "They identified potential risks in advance." }
        ]
      },
      { 
        name: "Prepare", 
        conjugations: [
          { subject: "I", verb: "prepared", example: "I prepared dinner for the family." },
          { subject: "You", verb: "prepared", example: "You prepared thoroughly for presentations." },
          { subject: "He/She", verb: "prepared", example: "He prepared financial reports monthly." },
          { subject: "We", verb: "prepared", example: "We prepared for emergencies with supplies." },
          { subject: "They", verb: "prepared", example: "They prepared students for college." }
        ]
      },
      { 
        name: "Laugh", 
        conjugations: [
          { subject: "I", verb: "laughed", example: "I laughed at good jokes." },
          { subject: "You", verb: "laughed", example: "You laughed easily and often." },
          { subject: "He/She", verb: "laughed", example: "She laughed with her whole heart." },
          { subject: "We", verb: "laughed", example: "We laughed together during game nights." },
          { subject: "They", verb: "laughed", example: "They laughed at their own mistakes." }
        ]
      },
      { 
        name: "Manage", 
        conjugations: [
          { subject: "I", verb: "managed", example: "I managed a team of designers." },
          { subject: "You", verb: "managed", example: "You managed your time effectively." },
          { subject: "He/She", verb: "managed", example: "He managed the family business." },
          { subject: "We", verb: "managed", example: "We managed to complete projects on time." },
          { subject: "They", verb: "managed", example: "They managed several properties." }
        ]
      },
      { 
        name: "Enter", 
        conjugations: [
          { subject: "I", verb: "entered", example: "I entered the building through the main door." },
          { subject: "You", verb: "entered", example: "You entered data into the system." },
          { subject: "He/She", verb: "entered", example: "She entered competitions regularly." },
          { subject: "We", verb: "entered", example: "We entered the theater quietly." },
          { subject: "They", verb: "entered", example: "They entered new markets each year." }
        ]
      },
      { 
        name: "Care", 
        conjugations: [
          { subject: "I", verb: "cared", example: "I cared about environmental issues." },
          { subject: "You", verb: "cared", example: "You cared for your elderly parents." },
          { subject: "He/She", verb: "cared", example: "He cared deeply for his community." },
          { subject: "We", verb: "cared", example: "We cared about quality education." },
          { subject: "They", verb: "cared", example: "They cared for abandoned animals." }
        ]
      },
      { 
        name: "Solve", 
        conjugations: [
          { subject: "I", verb: "solved", example: "I solved puzzles in my free time." },
          { subject: "You", verb: "solved", example: "You solved problems creatively." },
          { subject: "He/She", verb: "solved", example: "She solved conflicts diplomatically." },
          { subject: "We", verb: "solved", example: "We solved mathematical equations." },
          { subject: "They", verb: "solved", example: "They solved crimes for a living." }
        ]
      },
      { 
        name: "Produce", 
        conjugations: [
          { subject: "I", verb: "produced", example: "I produced high-quality work." },
          { subject: "You", verb: "produced", example: "You produced award-winning films." },
          { subject: "He/She", verb: "produced", example: "He produced organic vegetables on his farm." },
          { subject: "We", verb: "produced", example: "We produced monthly reports for clients." },
          { subject: "They", verb: "produced", example: "They produced cars in their factory." }
        ]
      },
      { 
        name: "Close", 
        conjugations: [
          { subject: "I", verb: "closed", example: "I closed my eyes during scary movies." },
          { subject: "You", verb: "closed", example: "You closed deals successfully." },
          { subject: "He/She", verb: "closed", example: "She closed the shop at 8 PM." },
          { subject: "We", verb: "closed", example: "We closed our meetings with action items." },
          { subject: "They", verb: "closed", example: "They closed ranks when threatened." }
        ]
      },
      { 
        name: "Notice", 
        conjugations: [
          { subject: "I", verb: "noticed", example: "I noticed small details in paintings." },
          { subject: "You", verb: "noticed", example: "You noticed changes in people's behavior." },
          { subject: "He/She", verb: "noticed", example: "He noticed when someone was upset." },
          { subject: "We", verb: "noticed", example: "We noticed the temperature dropping." },
          { subject: "They", verb: "noticed", example: "They noticed patterns in customer feedback." }
        ]
      },
      { 
        name: "Imagine", 
        conjugations: [
          { subject: "I", verb: "imagined", example: "I imagined traveling to distant planets." },
          { subject: "You", verb: "imagined", example: "You imagined creative solutions." },
          { subject: "He/She", verb: "imagined", example: "She imagined her future career." },
          { subject: "We", verb: "imagined", example: "We imagined a world without poverty." },
          { subject: "They", verb: "imagined", example: "They imagined possibilities others missed." }
        ]
      },
      { 
        name: "Replace", 
        conjugations: [
          { subject: "I", verb: "replaced", example: "I replaced worn-out shoes regularly." },
          { subject: "You", verb: "replaced", example: "You replaced negative thoughts with positive ones." },
          { subject: "He/She", verb: "replaced", example: "He replaced the batteries in smoke detectors." },
          { subject: "We", verb: "replaced", example: "We replaced old equipment with newer models." },
          { subject: "They", verb: "replaced", example: "They replaced staff who left the company." }
        ]
      },
      { 
        name: "Improve", 
        conjugations: [
          { subject: "I", verb: "improved", example: "I improved my skills through practice." },
          { subject: "You", verb: "improved", example: "You improved processes in the organization." },
          { subject: "He/She", verb: "improved", example: "She improved her English by reading." },
          { subject: "We", verb: "improved", example: "We improved with each performance." },
          { subject: "They", verb: "improved", example: "They improved their offerings based on feedback." }
        ]
      },
      { 
        name: "Apply", 
        conjugations: [
          { subject: "I", verb: "applied", example: "I applied for jobs in my field." },
          { subject: "You", verb: "applied", example: "You applied sunscreen before going outside." },
          { subject: "He/She", verb: "applied", example: "He applied principles of physics to engineering." },
          { subject: "We", verb: "applied", example: "We applied new methods in our research." },
          { subject: "They", verb: "applied", example: "They applied pressure to stop bleeding." }
        ]
      },
      { 
        name: "Report", 
        conjugations: [
          { subject: "I", verb: "reported", example: "I reported directly to the CEO." },
          { subject: "You", verb: "reported", example: "You reported suspicious activities to security." },
          { subject: "He/She", verb: "reported", example: "She reported on environmental issues." },
          { subject: "We", verb: "reported", example: "We reported our findings to the committee." },
          { subject: "They", verb: "reported", example: "They reported quarterly earnings to shareholders." }
        ]
      },
      { 
        name: "Listen", 
        conjugations: [
          { subject: "I", verb: "listened", example: "I listened to podcasts while commuting." },
          { subject: "You", verb: "listened", example: "You listened carefully to instructions." },
          { subject: "He/She", verb: "listened", example: "He listened to classical music before bed." },
          { subject: "We", verb: "listened", example: "We listened to customer feedback seriously." },
          { subject: "They", verb: "listened", example: "They listened for birds in the forest." }
        ]
      },
      { 
        name: "Discover", 
        conjugations: [
          { subject: "I", verb: "discovered", example: "I discovered new restaurants in my neighborhood." },
          { subject: "You", verb: "discovered", example: "You discovered hidden talents in others." },
          { subject: "He/She", verb: "discovered", example: "She discovered ancient artifacts." },
          { subject: "We", verb: "discovered", example: "We discovered new solutions through collaboration." },
          { subject: "They", verb: "discovered", example: "They discovered the source of the problem." }
        ]
      },
      { 
        name: "Protect", 
        conjugations: [
          { subject: "I", verb: "protected", example: "I protected my data with strong passwords." },
          { subject: "You", verb: "protected", example: "You protected your skin from the sun." },
          { subject: "He/She", verb: "protected", example: "He protected endangered species." },
          { subject: "We", verb: "protected", example: "We protected our children from harm." },
          { subject: "They", verb: "protected", example: "They protected their intellectual property." }
        ]
      },
      { 
        name: "Occur", 
        conjugations: [
          { subject: "I", verb: "occurred", example: "It occurred to me that we forgot something." },
          { subject: "You", verb: "occurred", example: "It occurred to you suddenly." },
          { subject: "He/She", verb: "occurred", example: "It occurred to him during meditation." },
          { subject: "We", verb: "occurred", example: "It occurred to us that there was a better way." },
          { subject: "They", verb: "occurred", example: "Earthquakes occurred along fault lines." }
        ]
      },
      { 
        name: "Fight", 
        conjugations: [
          { subject: "I", verb: "fought", example: "I fought for equal rights." },
          { subject: "You", verb: "fought", example: "You fought against injustice." },
          { subject: "He/She", verb: "fought", example: "She fought to protect the environment." },
          { subject: "We", verb: "fought", example: "We fought our fears to grow stronger." },
          { subject: "They", verb: "fought", example: "They fought for their beliefs." }
        ]
      },
      { 
        name: "Remove", 
        conjugations: [
          { subject: "I", verb: "removed", example: "I removed obstacles from my path." },
          { subject: "You", verb: "removed", example: "You removed your shoes before entering." },
          { subject: "He/She", verb: "removed", example: "She removed stains from clothing." },
          { subject: "We", verb: "removed", example: "We removed unnecessary steps in the process." },
          { subject: "They", verb: "removed", example: "They removed old furniture from the office." }
        ]
      },
      { 
        name: "Discuss", 
        conjugations: [
          { subject: "I", verb: "discussed", example: "I discussed options with my team." },
          { subject: "You", verb: "discussed", example: "You discussed politics at dinner." },
          { subject: "He/She", verb: "discussed", example: "He discussed literature in his podcast." },
          { subject: "We", verb: "discussed", example: "We discussed budget plans quarterly." },
          { subject: "They", verb: "discussed", example: "They discussed their concerns openly." }
        ]
      },
      { 
        name: "Face", 
        conjugations: [
          { subject: "I", verb: "faced", example: "I faced challenges with courage." },
          { subject: "You", verb: "faced", example: "You faced north when meditating." },
          { subject: "He/She", verb: "faced", example: "She faced her fears directly." },
          { subject: "We", verb: "faced", example: "We faced difficult decisions together." },
          { subject: "They", verb: "faced", example: "They faced competition in the market." }
        ]
      },
      { 
        name: "Cut", 
        conjugations: [
          { subject: "I", verb: "cut", example: "I cut expenses to save money." },
          { subject: "You", verb: "cut", example: "You cut vegetables for the salad." },
          { subject: "He/She", verb: "cut", example: "He cut hair professionally." },
          { subject: "We", verb: "cut", example: "We cut through the park to save time." },
          { subject: "They", verb: "cut", example: "They cut the ribbon at the grand opening." }
        ]
      },
      { 
        name: "Miss", 
        conjugations: [
          { subject: "I", verb: "missed", example: "I missed my family when traveling." },
          { subject: "You", verb: "missed", example: "You missed the point of the story." },
          { subject: "He/She", verb: "missed", example: "She missed her train yesterday." },
          { subject: "We", verb: "missed", example: "We missed the old neighborhood." },
          { subject: "They", verb: "missed", example: "They missed opportunities by not networking." }
        ]
      },
      { 
        name: "Reduce", 
        conjugations: [
          { subject: "I", verb: "reduced", example: "I reduced my carbon footprint." },
          { subject: "You", verb: "reduced", example: "You reduced waste by recycling." },
          { subject: "He/She", verb: "reduced", example: "He reduced stress through meditation." },
          { subject: "We", verb: "reduced", example: "We reduced our spending during recession." },
          { subject: "They", verb: "reduced", example: "They reduced prices for clearance sales." }
        ]
      },
      { 
        name: "Sing", 
        conjugations: [
          { subject: "I", verb: "sang", example: "I sang in the shower." },
          { subject: "You", verb: "sang", example: "You sang beautifully in harmony." },
          { subject: "He/She", verb: "sang", example: "She sang in a choir." },
          { subject: "We", verb: "sang", example: "We sang carols during holidays." },
          { subject: "They", verb: "sang", example: "They sang folk songs around the campfire." }
        ]
      },
      { 
        name: "Deliver", 
        conjugations: [
          { subject: "I", verb: "delivered", example: "I delivered packages for a living." },
          { subject: "You", verb: "delivered", example: "You delivered speeches with confidence." },
          { subject: "He/She", verb: "delivered", example: "He delivered newspapers every morning." },
          { subject: "We", verb: "delivered", example: "We delivered results on time." },
          { subject: "They", verb: "delivered", example: "They delivered meals to elderly residents." }
        ]
      },
      { 
        name: "Collect", 
        conjugations: [
          { subject: "I", verb: "collected", example: "I collected vintage stamps." },
          { subject: "You", verb: "collected", example: "You collected data for your research." },
          { subject: "He/She", verb: "collected", example: "She collected donations for charity." },
          { subject: "We", verb: "collected", example: "We collected signatures for the petition." },
          { subject: "They", verb: "collected", example: "They collected rainwater for gardening." }
        ]
      },
      { 
        name: "Throw", 
        conjugations: [
          { subject: "I", verb: "threw", example: "I threw a party last New Year." },
          { subject: "You", verb: "threw", example: "You threw the ball to the dog." },
          { subject: "He/She", verb: "threw", example: "He threw discus for the university team." },
          { subject: "We", verb: "threw", example: "We threw away broken items." },
          { subject: "They", verb: "threw", example: "They threw confetti at celebrations." }
        ]
      },
      { 
        name: "Treat", 
        conjugations: [
          { subject: "I", verb: "treated", example: "I treated everyone with respect." },
          { subject: "You", verb: "treated", example: "You treated yourself to dessert occasionally." },
          { subject: "He/She", verb: "treated", example: "She treated patients with various conditions." },
          { subject: "We", verb: "treated", example: "We treated our employees like family." },
          { subject: "They", verb: "treated", example: "They treated the symptoms, not the cause." }
        ]
      },
      { 
        name: "Introduce", 
        conjugations: [
          { subject: "I", verb: "introduced", example: "I introduced new members to the team." },
          { subject: "You", verb: "introduced", example: "You introduced innovative ideas." },
          { subject: "He/She", verb: "introduced", example: "He introduced speakers at the conference." },
          { subject: "We", verb: "introduced", example: "We introduced changes gradually." },
          { subject: "They", verb: "introduced", example: "They introduced new products yearly." }
        ]
      },
      { 
        name: "Answer", 
        conjugations: [
          { subject: "I", verb: "answered", example: "I answered emails promptly." },
          { subject: "You", verb: "answered", example: "You answered the phone on the first ring." },
          { subject: "He/She", verb: "answered", example: "She answered questions thoughtfully." },
          { subject: "We", verb: "answered", example: "We answered to the board of directors." },
          { subject: "They", verb: "answered", example: "They answered customer inquiries 24/7." }
        ]
      },
      { 
        name: "Exist", 
        conjugations: [
          { subject: "I", verb: "existed", example: "I existed to make a positive difference." },
          { subject: "You", verb: "existed", example: "You existed in my memories forever." },
          { subject: "He/She", verb: "existed", example: "He existed between two cultures." },
          { subject: "We", verb: "existed", example: "We existed in a rapidly changing world." },
          { subject: "They", verb: "existed", example: "They existed primarily in tropical regions." }
        ]
      },
      { 
        name: "Pull", 
        conjugations: [
          { subject: "I", verb: "pulled", example: "I pulled weeds from the garden." },
          { subject: "You", verb: "pulled", example: "You pulled the door instead of pushing it." },
          { subject: "He/She", verb: "pulled", example: "She pulled her weight on the team." },
          { subject: "We", verb: "pulled", example: "We pulled together during difficult times." },
          { subject: "They", verb: "pulled", example: "They pulled an all-nighter to finish the project." }
        ]
      },
      { 
        name: "Maintain", 
        conjugations: [
          { subject: "I", verb: "maintained", example: "I maintained a healthy lifestyle." },
          { subject: "You", verb: "maintained", example: "You maintained good relationships with clients." },
          { subject: "He/She", verb: "maintained", example: "He maintained the company website." },
          { subject: "We", verb: "maintained", example: "We maintained our equipment regularly." },
          { subject: "They", verb: "maintained", example: "They maintained strict quality standards." }
        ]
      },
      { 
        name: "Type", 
        conjugations: [
          { subject: "I", verb: "typed", example: "I typed quickly on my keyboard." },
          { subject: "You", verb: "typed", example: "You typed without looking at the keys." },
          { subject: "He/She", verb: "typed", example: "She typed 100 words per minute." },
          { subject: "We", verb: "typed", example: "We typed our reports in the standard format." },
          { subject: "They", verb: "typed", example: "They typed notes during the meeting." }
        ]
      },
      { 
        name: "Suggest", 
        conjugations: [
          { subject: "I", verb: "suggested", example: "I suggested we leave early to avoid traffic." },
          { subject: "You", verb: "suggested", example: "You suggested creative solutions to problems." },
          { subject: "He/She", verb: "suggested", example: "He suggested reading this book." },
          { subject: "We", verb: "suggested", example: "We suggested alternatives when necessary." },
          { subject: "They", verb: "suggested", example: "They suggested meeting in person instead." }
        ]
      },
      { 
        name: "Connect", 
        conjugations: [
          { subject: "I", verb: "connected", example: "I connected with people through shared interests." },
          { subject: "You", verb: "connected", example: "You connected the dots quickly." },
          { subject: "He/She", verb: "connected", example: "She connected the equipment properly." },
          { subject: "We", verb: "connected", example: "We connected flights in Chicago." },
          { subject: "They", verb: "connected", example: "They connected students with mentors." }
        ]
      },
      { 
        name: "Compare", 
        conjugations: [
          { subject: "I", verb: "compared", example: "I compared prices before buying." },
          { subject: "You", verb: "compared", example: "You compared yourself to others too much." },
          { subject: "He/She", verb: "compared", example: "He compared different investment options." },
          { subject: "We", verb: "compared", example: "We compared our results with previous years." },
          { subject: "They", verb: "compared", example: "They compared notes after the meeting." }
        ]
      },
      { 
        name: "Handle", 
        conjugations: [
          { subject: "I", verb: "handled", example: "I handled customer complaints professionally." },
          { subject: "You", verb: "handled", example: "You handled pressure well." },
          { subject: "He/She", verb: "handled", example: "She handled the finances for the company." },
          { subject: "We", verb: "handled", example: "We handled each case individually." },
          { subject: "They", verb: "handled", example: "They handled fragile items with care." }
        ]
      },
      { 
        name: "Fill", 
        conjugations: [
          { subject: "I", verb: "filled", example: "I filled my water bottle several times yesterday." },
          { subject: "You", verb: "filled", example: "You filled out forms accurately." },
          { subject: "He/She", verb: "filled", example: "He filled the car with gas once a week." },
          { subject: "We", verb: "filled", example: "We filled our calendar with appointments." },
          { subject: "They", verb: "filled", example: "They filled the theater for every performance." }
        ]
      },
      { 
        name: "Ignore", 
        conjugations: [
          { subject: "I", verb: "ignored", example: "I ignored distractions when working." },
          { subject: "You", verb: "ignored", example: "You ignored the warning signs sometimes." },
          { subject: "He/She", verb: "ignored", example: "She ignored negative comments online." },
          { subject: "We", verb: "ignored", example: "We ignored petty disagreements." },
          { subject: "They", verb: "ignored", example: "They ignored emails during weekends." }
        ]
      },
      { 
        name: "Survive", 
        conjugations: [
          { subject: "I", verb: "survived", example: "I survived on coffee during busy weeks." },
          { subject: "You", verb: "survived", example: "You survived challenges that would break others." },
          { subject: "He/She", verb: "survived", example: "He survived on minimal sleep." },
          { subject: "We", verb: "survived", example: "We survived difficult times by supporting each other." },
          { subject: "They", verb: "survived", example: "They survived extreme weather conditions." }
        ]
      },
      { 
        name: "Attempt", 
        conjugations: [
          { subject: "I", verb: "attempted", example: "I attempted to solve problems before asking for help." },
          { subject: "You", verb: "attempted", example: "You attempted difficult climbs regularly." },
          { subject: "He/She", verb: "attempted", example: "She attempted new recipes on weekends." },
          { subject: "We", verb: "attempted", example: "We attempted to reduce our environmental impact." },
          { subject: "They", verb: "attempted", example: "They attempted to break world records." }
        ]
      },
      { 
        name: "Divide", 
        conjugations: [
          { subject: "I", verb: "divided", example: "I divided my time between work and family." },
          { subject: "You", verb: "divided", example: "You divided the cake equally among guests." },
          { subject: "He/She", verb: "divided", example: "He divided the class into small groups." },
          { subject: "We", verb: "divided", example: "We divided responsibilities fairly." },
          { subject: "They", verb: "divided", example: "They divided profits among shareholders." }
        ]
      },
      { 
        name: "Claim", 
        conjugations: [
          { subject: "I", verb: "claimed", example: "I claimed my luggage at the airport." },
          { subject: "You", verb: "claimed", example: "You claimed to have seen a ghost." },
          { subject: "He/She", verb: "claimed", example: "She claimed her insurance after an accident." },
          { subject: "We", verb: "claimed", example: "We claimed our rightful place in history." },
          { subject: "They", verb: "claimed", example: "They claimed ownership of the land." }
        ]
      },
      { 
        name: "Practice", 
        conjugations: [
          { subject: "I", verb: "practiced", example: "I practiced piano every day." },
          { subject: "You", verb: "practiced", example: "You practiced medicine in a rural clinic." },
          { subject: "He/She", verb: "practiced", example: "He practiced yoga in the morning." },
          { subject: "We", verb: "practiced", example: "We practiced our presentation before the meeting." },
          { subject: "They", verb: "practiced", example: "They practiced sustainable farming methods." }
        ]
      },
      { 
        name: "Mention", 
        conjugations: [
          { subject: "I", verb: "mentioned", example: "I mentioned your contribution in my speech." },
          { subject: "You", verb: "mentioned", example: "You mentioned the issue casually." },
          { subject: "He/She", verb: "mentioned", example: "She mentioned her experiences in her book." },
          { subject: "We", verb: "mentioned", example: "We mentioned the deadline in every email." },
          { subject: "They", verb: "mentioned", example: "They mentioned potential risks in the report." }
        ]
      },
      { 
        name: "Encourage", 
        conjugations: [
          { subject: "I", verb: "encouraged", example: "I encouraged my children to try new things." },
          { subject: "You", verb: "encouraged", example: "You encouraged innovation in your team." },
          { subject: "He/She", verb: "encouraged", example: "He encouraged students to ask questions." },
          { subject: "We", verb: "encouraged", example: "We encouraged open communication." },
          { subject: "They", verb: "encouraged", example: "They encouraged environmental awareness." }
        ]
      },
      { 
        name: "Request", 
        conjugations: [
          { subject: "I", verb: "requested", example: "I requested information about your services." },
          { subject: "You", verb: "requested", example: "You requested time off for personal reasons." },
          { subject: "He/She", verb: "requested", example: "She requested assistance with the project." },
          { subject: "We", verb: "requested", example: "We requested your presence at the meeting." },
          { subject: "They", verb: "requested", example: "They requested feedback from customers." }
        ]
      },
      { 
        name: "Test", 
        conjugations: [
          { subject: "I", verb: "tested", example: "I tested new software before release." },
          { subject: "You", verb: "tested", example: "You tested recipes in your kitchen." },
          { subject: "He/She", verb: "tested", example: "He tested his limits in competitions." },
          { subject: "We", verb: "tested", example: "We tested all products for quality." },
          { subject: "They", verb: "tested", example: "They tested candidates through interviews." }
        ]
      },
      { 
        name: "Fly", 
        conjugations: [
          { subject: "I", verb: "flew", example: "I flew to London twice last year." },
          { subject: "You", verb: "flew", example: "You flew kites at the beach." },
          { subject: "He/She", verb: "flew", example: "She flew helicopters professionally." },
          { subject: "We", verb: "flew", example: "We flew our national flag with pride." },
          { subject: "They", verb: "flew", example: "They flew south for the winter." }
        ]
      },
      { 
        name: "Push", 
        conjugations: [
          { subject: "I", verb: "pushed", example: "I pushed myself to improve constantly." },
          { subject: "You", verb: "pushed", example: "You pushed the boundaries of conventional thinking." },
          { subject: "He/She", verb: "pushed", example: "He pushed the cart through the supermarket." },
          { subject: "We", verb: "pushed", example: "We pushed for changes in policy." },
          { subject: "They", verb: "pushed", example: "They pushed back against unreasonable demands." }
        ]
      },
      { 
        name: "Disappear", 
        conjugations: [
          { subject: "I", verb: "disappeared", example: "I disappeared into books when reading." },
          { subject: "You", verb: "disappeared", example: "You disappeared without saying goodbye." },
          { subject: "He/She", verb: "disappeared", example: "She disappeared from social media periodically." },
          { subject: "We", verb: "disappeared", example: "We disappeared into the crowd." },
          { subject: "They", verb: "disappeared", example: "They disappeared from radar when flying low." }
        ]
      },
      { 
        name: "Examine", 
        conjugations: [
          { subject: "I", verb: "examined", example: "I examined every detail carefully." },
          { subject: "You", verb: "examined", example: "You examined evidence objectively." },
          { subject: "He/She", verb: "examined", example: "He examined patients in the clinic." },
          { subject: "We", verb: "examined", example: "We examined all options before deciding." },
          { subject: "They", verb: "examined", example: "They examined artifacts from ancient civilizations." }
        ]
      },
      { 
        name: "Count", 
        conjugations: [
          { subject: "I", verb: "counted", example: "I counted calories when dieting." },
          { subject: "You", verb: "counted", example: "You counted sheep to fall asleep." },
          { subject: "He/She", verb: "counted", example: "She counted inventory at the end of each day." },
          { subject: "We", verb: "counted", example: "We counted on your support." },
          { subject: "They", verb: "counted", example: "They counted votes after the election." }
        ]
      },
      { 
        name: "Reflect", 
        conjugations: [
          { subject: "I", verb: "reflected", example: "I reflected on my experiences regularly." },
          { subject: "You", verb: "reflected", example: "You reflected deeply before responding." },
          { subject: "He/She", verb: "reflected", example: "He reflected the values of his community." },
          { subject: "We", verb: "reflected", example: "We reflected on our mistakes to learn from them." },
          { subject: "They", verb: "reflected", example: "They reflected light from their shiny surfaces." }
        ]
      },
      { 
        name: "Rely", 
        conjugations: [
          { subject: "I", verb: "relied", example: "I relied on my intuition in uncertain situations." },
          { subject: "You", verb: "relied", example: "You relied too much on technology." },
          { subject: "He/She", verb: "relied", example: "She relied on her team members." },
          { subject: "We", verb: "relied", example: "We relied on accurate data for decision-making." },
          { subject: "They", verb: "relied", example: "They relied on renewable energy sources." }
        ]
      },
      { 
        name: "Influence", 
        conjugations: [
          { subject: "I", verb: "influenced", example: "I influenced my peers through example." },
          { subject: "You", verb: "influenced", example: "You influenced consumer behavior through marketing." },
          { subject: "He/She", verb: "influenced", example: "He influenced policy decisions." },
          { subject: "We", verb: "influenced", example: "We influenced community standards." },
          { subject: "They", verb: "influenced", example: "They influenced young minds as teachers." }
        ]
      },
      { 
        name: "Hide", 
        conjugations: [
          { subject: "I", verb: "hid", example: "I hid my feelings sometimes." },
          { subject: "You", verb: "hid", example: "You hid presents before birthdays." },
          { subject: "He/She", verb: "hid", example: "She hid her talent out of modesty." },
          { subject: "We", verb: "hid", example: "We hid our disappointment with a smile." },
          { subject: "They", verb: "hid", example: "They hid in the bushes during the game." }
        ]
      },
      { 
        name: "Address", 
        conjugations: [
          { subject: "I", verb: "addressed", example: "I addressed the audience at the conference." },
          { subject: "You", verb: "addressed", example: "You addressed issues directly." },
          { subject: "He/She", verb: "addressed", example: "He addressed the letter to his grandmother." },
          { subject: "We", verb: "addressed", example: "We addressed concerns in team meetings." },
          { subject: "They", verb: "addressed", example: "They addressed each point in the proposal." }
        ]
      },
      { 
        name: "Record", 
        conjugations: [
          { subject: "I", verb: "recorded", example: "I recorded my lectures for later review." },
          { subject: "You", verb: "recorded", example: "You recorded family events on video." },
          { subject: "He/She", verb: "recorded", example: "She recorded data from each experiment." },
          { subject: "We", verb: "recorded", example: "We recorded minutes during meetings." },
          { subject: "They", verb: "recorded", example: "They recorded their album in a professional studio." }
        ]
      },
      { 
        name: "Fail", 
        conjugations: [
          { subject: "I", verb: "failed", example: "I failed to understand the complexity sometimes." },
          { subject: "You", verb: "failed", example: "You failed to notice the small details." },
          { subject: "He/She", verb: "failed", example: "He failed to meet deadlines occasionally." },
          { subject: "We", verb: "failed", example: "We failed forward and learned from mistakes." },
          { subject: "They", verb: "failed", example: "They failed to recognize the consequences." }
        ]
      },
      { 
        name: "Indicate", 
        conjugations: [
          { subject: "I", verb: "indicated", example: "I indicated my preferences on the form." },
          { subject: "You", verb: "indicated", example: "You indicated directions with hand gestures." },
          { subject: "He/She", verb: "indicated", example: "She indicated her approval with a nod." },
          { subject: "We", verb: "indicated", example: "We indicated our availability in the calendar." },
          { subject: "They", verb: "indicated", example: "They indicated interest by asking questions." }
        ]
      },
      { 
        name: "Represent", 
        conjugations: [
          { subject: "I", verb: "represented", example: "I represented my company at trade shows." },
          { subject: "You", verb: "represented", example: "You represented the voice of the community." },
          { subject: "He/She", verb: "represented", example: "He represented clients in court." },
          { subject: "We", verb: "represented", example: "We represented diverse perspectives in our work." },
          { subject: "They", verb: "represented", example: "They represented their country in the Olympics." }
        ]
      },
      { 
        name: "Print", 
        conjugations: [
          { subject: "I", verb: "printed", example: "I printed documents double-sided to save paper." },
          { subject: "You", verb: "printed", example: "You printed photos for your scrapbook." },
          { subject: "He/She", verb: "printed", example: "She printed labels for the packages." },
          { subject: "We", verb: "printed", example: "We printed our newsletter monthly." },
          { subject: "They", verb: "printed", example: "They printed money at the national mint." }
        ]
      },
      { 
        name: "Release", 
        conjugations: [
          { subject: "I", verb: "released", example: "I released tension through yoga." },
          { subject: "You", verb: "released", example: "You released the brake before driving." },
          { subject: "He/She", verb: "released", example: "He released a new book last year." },
          { subject: "We", verb: "released", example: "We released updates quarterly." },
          { subject: "They", verb: "released", example: "They released rehabilitated animals back to the wild." }
        ]
      },
      { 
        name: "Protect", 
        conjugations: [
          { subject: "I", verb: "protected", example: "I protected my skin from the sun." },
          { subject: "You", verb: "protected", example: "You protected your password carefully." },
          { subject: "He/She", verb: "protected", example: "She protected her younger siblings." },
          { subject: "We", verb: "protected", example: "We protected our environment through recycling." },
          { subject: "They", verb: "protected", example: "They protected wildlife in the sanctuary." }
        ]
      },
      { 
        name: "Suffer", 
        conjugations: [
          { subject: "I", verb: "suffered", example: "I suffered from allergies in spring." },
          { subject: "You", verb: "suffered", example: "You suffered unnecessarily by not asking for help." },
          { subject: "He/She", verb: "suffered", example: "He suffered from chronic back pain." },
          { subject: "We", verb: "suffered", example: "We suffered the consequences of poor planning." },
          { subject: "They", verb: "suffered", example: "They suffered through extreme temperatures." }
        ]
      },
      { 
        name: "Intend", 
        conjugations: [
          { subject: "I", verb: "intended", example: "I intended to finish this project yesterday." },
          { subject: "You", verb: "intended", example: "You intended to travel after graduation." },
          { subject: "He/She", verb: "intended", example: "She intended to apply for the position." },
          { subject: "We", verb: "intended", example: "We intended to renovate the kitchen next year." },
          { subject: "They", verb: "intended", example: "They intended to expand their business overseas." }
        ]
      },
      { 
        name: "Confirm", 
        conjugations: [
          { subject: "I", verb: "confirmed", example: "I confirmed appointments before attending." },
          { subject: "You", verb: "confirmed", example: "You confirmed your reservation by email." },
          { subject: "He/She", verb: "confirmed", example: "He confirmed details with clients." },
          { subject: "We", verb: "confirmed", example: "We confirmed the information before publishing." },
          { subject: "They", verb: "confirmed", example: "They confirmed their attendance at events." }
        ]
      },
      { 
        name: "Kiss", 
        conjugations: [
          { subject: "I", verb: "kissed", example: "I kissed my children goodnight." },
          { subject: "You", verb: "kissed", example: "You kissed your partner goodbye each morning." },
          { subject: "He/She", verb: "kissed", example: "She kissed the baby's forehead." },
          { subject: "We", verb: "kissed", example: "We kissed cheeks when greeting in some cultures." },
          { subject: "They", verb: "kissed", example: "They kissed the bride and groom at the wedding." }
        ]
      },
      { 
        name: "Seek", 
        conjugations: [
          { subject: "I", verb: "sought", example: "I sought advice from experienced colleagues." },
          { subject: "You", verb: "sought", example: "You sought adventure in your travels." },
          { subject: "He/She", verb: "sought", example: "He sought solutions to complex problems." },
          { subject: "We", verb: "sought", example: "We sought to understand before being understood." },
          { subject: "They", verb: "sought", example: "They sought funding for their startup." }
        ]
      },
      { 
        name: "Review", 
        conjugations: [
          { subject: "I", verb: "reviewed", example: "I reviewed my notes before exams." },
          { subject: "You", verb: "reviewed", example: "You reviewed contracts thoroughly." },
          { subject: "He/She", verb: "reviewed", example: "She reviewed books for a literary magazine." },
          { subject: "We", verb: "reviewed", example: "We reviewed applications twice a year." },
          { subject: "They", verb: "reviewed", example: "They reviewed the budget quarterly." }
        ]
      },
      { 
        name: "Acquire", 
        conjugations: [
          { subject: "I", verb: "acquired", example: "I acquired new skills through continuous learning." },
          { subject: "You", verb: "acquired", example: "You acquired antiques for your collection." },
          { subject: "He/She", verb: "acquired", example: "He acquired knowledge through reading." },
          { subject: "We", verb: "acquired", example: "We acquired properties in developing areas." },
          { subject: "They", verb: "acquired", example: "They acquired smaller companies regularly." }
        ]
      },
      { 
        name: "Benefit", 
        conjugations: [
          { subject: "I", verb: "benefited", example: "I benefited from regular exercise." },
          { subject: "You", verb: "benefited", example: "You benefited from diverse perspectives." },
          { subject: "He/She", verb: "benefited", example: "She benefited from early morning meditation." },
          { subject: "We", verb: "benefited", example: "We benefited from collaboration." },
          { subject: "They", verb: "benefited", example: "They benefited from tax incentives." }
        ]
      },
      { 
        name: "Hang", 
        conjugations: [
          { subject: "I", verb: "hung", example: "I hung pictures on the wall." },
          { subject: "You", verb: "hung", example: "You hung out with friends after work." },
          { subject: "He/She", verb: "hung", example: "He hung his coat on the rack." },
          { subject: "We", verb: "hung", example: "We hung decorations for parties." },
          { subject: "They", verb: "hung", example: "They hung their clothes to dry." }
        ]
      },
      { 
        name: "Relate", 
        conjugations: [
          { subject: "I", verb: "related", example: "I related to your experience." },
          { subject: "You", verb: "related", example: "You related stories from your childhood." },
          { subject: "He/She", verb: "related", example: "She related well to children." },
          { subject: "We", verb: "related", example: "We related our success to hard work." },
          { subject: "They", verb: "related", example: "They related current events to historical patterns." }
        ]
      },
      { 
        name: "Mix", 
        conjugations: [
          { subject: "I", verb: "mixed", example: "I mixed ingredients for the cake." },
          { subject: "You", verb: "mixed", example: "You mixed colors to create new shades." },
          { subject: "He/She", verb: "mixed", example: "He mixed drinks at the bar." },
          { subject: "We", verb: "mixed", example: "We mixed business with pleasure occasionally." },
          { subject: "They", verb: "mixed", example: "They mixed different musical styles in their compositions." }
        ]
      },
      { 
        name: "Function", 
        conjugations: [
          { subject: "I", verb: "functioned", example: "I functioned well under pressure." },
          { subject: "You", verb: "functioned", example: "You functioned as team leader in her absence." },
          { subject: "He/She", verb: "functioned", example: "She functioned as both manager and mentor." },
          { subject: "We", verb: "functioned", example: "We functioned as a cohesive unit." },
          { subject: "They", verb: "functioned", example: "They functioned despite limited resources." }
        ]
      },
      { 
        name: "Establish", 
        conjugations: [
          { subject: "I", verb: "established", example: "I established clear boundaries in relationships." },
          { subject: "You", verb: "established", example: "You established new protocols for safety." },
          { subject: "He/She", verb: "established", example: "He established rapport with clients quickly." },
          { subject: "We", verb: "established", example: "We established goals at the beginning of each quarter." },
          { subject: "They", verb: "established", example: "They established branches in different countries." }
        ]
      },
      { 
        name: "Engage", 
        conjugations: [
          { subject: "I", verb: "engaged", example: "I engaged in meaningful conversations." },
          { subject: "You", verb: "engaged", example: "You engaged with your audience effectively." },
          { subject: "He/She", verb: "engaged", example: "She engaged students through interactive activities." },
          { subject: "We", verb: "engaged", example: "We engaged local communities in our projects." },
          { subject: "They", verb: "engaged", example: "They engaged experts for specialized tasks." }
        ]
      },
      { 
        name: "Contain", 
        conjugations: [
          { subject: "I", verb: "contained", example: "I contained my excitement until the announcement." },
          { subject: "You", verb: "contained", example: "You contained the spread of misinformation." },
          { subject: "He/She", verb: "contained", example: "This box contained important documents." },
          { subject: "We", verb: "contained", example: "We contained costs by careful planning." },
          { subject: "They", verb: "contained", example: "They contained the fire before it spread." }
        ]
      },
      { 
        name: "Arrange", 
        conjugations: [
          { subject: "I", verb: "arranged", example: "I arranged flowers for special occasions." },
          { subject: "You", verb: "arranged", example: "You arranged your schedule to fit everything in." },
          { subject: "He/She", verb: "arranged", example: "She arranged music for the orchestra." },
          { subject: "We", verb: "arranged", example: "We arranged transportation for conference attendees." },
          { subject: "They", verb: "arranged", example: "They arranged furniture to maximize space." }
        ]
      },
      { 
        name: "Thank", 
        conjugations: [
          { subject: "I", verb: "thanked", example: "I thanked you for your assistance." },
          { subject: "You", verb: "thanked", example: "You thanked everyone for their contributions." },
          { subject: "He/She", verb: "thanked", example: "He thanked his parents for their support." },
          { subject: "We", verb: "thanked", example: "We thanked our sponsors in the program." },
          { subject: "They", verb: "thanked", example: "They thanked volunteers with a special dinner." }
        ]
      },
      { 
        name: "Shake", 
        conjugations: [
          { subject: "I", verb: "shook", example: "I shook hands when meeting someone new." },
          { subject: "You", verb: "shook", example: "You shook salt onto your food." },
          { subject: "He/She", verb: "shook", example: "She shook her head in disagreement." },
          { subject: "We", verb: "shook", example: "We shook things up with innovative ideas." },
          { subject: "They", verb: "shook", example: "They shook the tree to collect apples." }
        ]
      },
      { 
        name: "Adopt", 
        conjugations: [
          { subject: "I", verb: "adopted", example: "I adopted new technologies quickly." },
          { subject: "You", verb: "adopted", example: "You adopted a positive attitude despite challenges." },
          { subject: "He/She", verb: "adopted", example: "He adopted a rescue dog from the shelter." },
          { subject: "We", verb: "adopted", example: "We adopted sustainable practices in our business." },
          { subject: "They", verb: "adopted", example: "They adopted children from different countries." }
        ]
      },
      { 
        name: "Access", 
        conjugations: [
          { subject: "I", verb: "accessed", example: "I accessed my emails remotely." },
          { subject: "You", verb: "accessed", example: "You accessed the database securely." },
          { subject: "He/She", verb: "accessed", example: "She accessed restricted areas with her key card." },
          { subject: "We", verb: "accessed", example: "We accessed information through various sources." },
          { subject: "They", verb: "accessed", example: "They accessed education through scholarships." }
        ]
      },
      { 
        name: "Intend", 
        conjugations: [
          { subject: "I", verb: "intended", example: "I intended to complete my degree next year." },
          { subject: "You", verb: "intended", example: "You intended to start your own business." },
          { subject: "He/She", verb: "intended", example: "She intended to apply for the manager position." },
          { subject: "We", verb: "intended", example: "We intended to launch the product in spring." },
          { subject: "They", verb: "intended", example: "They intended to relocate their headquarters." }
        ]
      },
      { 
        name: "Hire", 
        conjugations: [
          { subject: "I", verb: "hired", example: "I hired professionals for specialized tasks." },
          { subject: "You", verb: "hired", example: "You hired temporary staff during busy seasons." },
          { subject: "He/She", verb: "hired", example: "He hired based on skills and cultural fit." },
          { subject: "We", verb: "hired", example: "We hired graduates from local universities." },
          { subject: "They", verb: "hired", example: "They hired consultants for specific projects." }
        ]
      },
      { 
        name: "Define", 
        conjugations: [
          { subject: "I", verb: "defined", example: "I defined my goals clearly before starting." },
          { subject: "You", verb: "defined", example: "You defined terms at the beginning of your paper." },
          { subject: "He/She", verb: "defined", example: "She defined her personal boundaries." },
          { subject: "We", verb: "defined", example: "We defined success differently than others." },
          { subject: "They", verb: "defined", example: "They defined the scope of the project." }
        ]
      },
      { 
        name: "Contribute", 
        conjugations: [
          { subject: "I", verb: "contributed", example: "I contributed to environmental causes." },
          { subject: "You", verb: "contributed", example: "You contributed valuable ideas in meetings." },
          { subject: "He/She", verb: "contributed", example: "He contributed articles to scientific journals." },
          { subject: "We", verb: "contributed", example: "We contributed to the community through volunteering." },
          { subject: "They", verb: "contributed", example: "They contributed funds to disaster relief." }
        ]
      },
      { 
        name: "Swim", 
        conjugations: [
          { subject: "I", verb: "swam", example: "I swam laps in the morning." },
          { subject: "You", verb: "swam", example: "You swam competitively for your school." },
          { subject: "He/She", verb: "swam", example: "She swam across the lake last summer." },
          { subject: "We", verb: "swam", example: "We swam in the ocean during vacations." },
          { subject: "They", verb: "swam", example: "They swam against the current." }
        ]
      },
      { 
        name: "Launch", 
        conjugations: [
          { subject: "I", verb: "launched", example: "I launched new initiatives regularly." },
          { subject: "You", verb: "launched", example: "You launched your career in technology." },
          { subject: "He/She", verb: "launched", example: "He launched rockets as a hobby." },
          { subject: "We", verb: "launched", example: "We launched our website last month." },
          { subject: "They", verb: "launched", example: "They launched products after thorough testing." }
        ]
      },
      { 
        name: "Cross", 
        conjugations: [
          { subject: "I", verb: "crossed", example: "I crossed the street at the traffic light." },
          { subject: "You", verb: "crossed", example: "You crossed items off your list as you completed them." },
          { subject: "He/She", verb: "crossed", example: "She crossed the finish line in record time." },
          { subject: "We", verb: "crossed", example: "We crossed bridges when we came to them." },
          { subject: "They", verb: "crossed", example: "They crossed international borders frequently." }
        ]
      },
      { 
        name: "Express", 
        conjugations: [
          { subject: "I", verb: "expressed", example: "I expressed my feelings through art." },
          { subject: "You", verb: "expressed", example: "You expressed your opinions clearly." },
          { subject: "He/She", verb: "expressed", example: "He expressed gratitude to his mentors." },
          { subject: "We", verb: "expressed", example: "We expressed concern about climate change." },
          { subject: "They", verb: "expressed", example: "They expressed themselves through dance." }
        ]
      },
      { 
        name: "Transfer", 
        conjugations: [
          { subject: "I", verb: "transferred", example: "I transferred files securely between devices." },
          { subject: "You", verb: "transferred", example: "You transferred money electronically." },
          { subject: "He/She", verb: "transferred", example: "She transferred to a different department." },
          { subject: "We", verb: "transferred", example: "We transferred knowledge to new employees." },
          { subject: "They", verb: "transferred", example: "They transferred patients to specialized facilities." }
        ]
      },
      { 
        name: "Detect", 
        conjugations: [
          { subject: "I", verb: "detected", example: "I detected patterns in complex data." },
          { subject: "You", verb: "detected", example: "You detected problems before they escalated." },
          { subject: "He/She", verb: "detected", example: "He detected errors in the code." },
          { subject: "We", verb: "detected", example: "We detected fraudulent transactions quickly." },
          { subject: "They", verb: "detected", example: "They detected radiation with specialized equipment." }
        ]
      },
      { 
        name: "Evaluate", 
        conjugations: [
          { subject: "I", verb: "evaluated", example: "I evaluated options before making decisions." },
          { subject: "You", verb: "evaluated", example: "You evaluated employee performance annually." },
          { subject: "He/She", verb: "evaluated", example: "She evaluated research proposals." },
          { subject: "We", verb: "evaluated", example: "We evaluated risks carefully." },
          { subject: "They", verb: "evaluated", example: "They evaluated candidates during interviews." }
        ]
      },
      { 
        name: "Place", 
        conjugations: [
          { subject: "I", verb: "placed", example: "I placed my keys on the hook by the door." },
          { subject: "You", verb: "placed", example: "You placed too much emphasis on appearances." },
          { subject: "He/She", verb: "placed", example: "She placed flowers on the dining table." },
          { subject: "We", verb: "placed", example: "We placed our orders online." },
          { subject: "They", verb: "placed", example: "They placed bets on horse races." }
        ]
      },
      { 
        name: "Mark", 
        conjugations: [
          { subject: "I", verb: "marked", example: "I marked important dates on my calendar." },
          { subject: "You", verb: "marked", example: "You marked your territory like a cat." },
          { subject: "He/She", verb: "marked", example: "He marked essays over the weekend." },
          { subject: "We", verb: "marked", example: "We marked our anniversary every year." },
          { subject: "They", verb: "marked", example: "They marked the boundaries of their property." }
        ]
      },
      { 
        name: "Secure", 
        conjugations: [
          { subject: "I", verb: "secured", example: "I secured my bicycle with a strong lock." },
          { subject: "You", verb: "secured", example: "You secured funding for your projects." },
          { subject: "He/She", verb: "secured", example: "She secured the premises before leaving." },
          { subject: "We", verb: "secured", example: "We secured our data with encryption." },
          { subject: "They", verb: "secured", example: "They secured their position in the market." }
        ]
      },
      { 
        name: "Qualify", 
        conjugations: [
          { subject: "I", verb: "qualified", example: "I qualified for the discount as a student." },
          { subject: "You", verb: "qualified", example: "You qualified your statements carefully." },
          { subject: "He/She", verb: "qualified", example: "He qualified for the finals with a personal best." },
          { subject: "We", verb: "qualified", example: "We qualified as experts in this field." },
          { subject: "They", verb: "qualified", example: "They qualified for financial assistance." }
        ]
      },
      { 
        name: "Settle", 
        conjugations: [
          { subject: "I", verb: "settled", example: "I settled disputes through negotiation." },
          { subject: "You", verb: "settled", example: "You settled into your new home quickly." },
          { subject: "He/She", verb: "settled", example: "She settled her bills on time." },
          { subject: "We", verb: "settled", example: "We settled for nothing less than excellence." },
          { subject: "They", verb: "settled", example: "They settled down after years of traveling." }
        ]
      },
      { 
        name: "Fold", 
        conjugations: [
          { subject: "I", verb: "folded", example: "I folded laundry while watching TV." },
          { subject: "You", verb: "folded", example: "You folded your napkin neatly after dinner." },
          { subject: "He/She", verb: "folded", example: "He folded paper into origami shapes." },
          { subject: "We", verb: "folded", example: "We folded our business when demand decreased." },
          { subject: "They", verb: "folded", example: "They folded their cards in poker." }
        ]
      },
      { 
        name: "Design", 
        conjugations: [
          { subject: "I", verb: "designed", example: "I designed websites for small businesses." },
          { subject: "You", verb: "designed", example: "You designed your own workout routine." },
          { subject: "He/She", verb: "designed", example: "She designed clothing for major fashion brands." },
          { subject: "We", verb: "designed", example: "We designed our curriculum around student needs." },
          { subject: "They", verb: "designed", example: "They designed bridges to withstand earthquakes." }
        ]
      },
      { 
        name: "Hurt", 
        conjugations: [
          { subject: "I", verb: "hurt", example: "I hurt my ankle while running." },
          { subject: "You", verb: "hurt", example: "You hurt people's feelings with harsh words." },
          { subject: "He/She", verb: "hurt", example: "He hurt from the loss of his friend." },
          { subject: "We", verb: "hurt", example: "We hurt when our team lost." },
          { subject: "They", verb: "hurt", example: "They hurt their chances by missing the deadline." }
        ]
      },
      { 
        name: "Operate", 
        conjugations: [
          { subject: "I", verb: "operated", example: "I operated heavy machinery at work." },
          { subject: "You", verb: "operated", example: "You operated under the assumption that everyone was honest." },
          { subject: "He/She", verb: "operated", example: "She operated on patients three days a week." },
          { subject: "We", verb: "operated", example: "We operated our business ethically." },
          { subject: "They", verb: "operated", example: "They operated in over fifty countries." }
        ]
      },
      { 
        name: "Recover", 
        conjugations: [
          { subject: "I", verb: "recovered", example: "I recovered quickly from minor illnesses." },
          { subject: "You", verb: "recovered", example: "You recovered deleted files from backup." },
          { subject: "He/She", verb: "recovered", example: "He recovered lost items for a living." },
          { subject: "We", verb: "recovered", example: "We recovered costs through efficient operations." },
          { subject: "They", verb: "recovered", example: "They recovered precious metals from electronic waste." }
        ]
      },
      { 
        name: "Tie", 
        conjugations: [
          { subject: "I", verb: "tied", example: "I tied my shoelaces in a double knot." },
          { subject: "You", verb: "tied", example: "You tied ribbons on gift packages beautifully." },
          { subject: "He/She", verb: "tied", example: "He tied flies for fly fishing." },
          { subject: "We", verb: "tied", example: "We tied for first place in the competition." },
          { subject: "They", verb: "tied", example: "They tied their boats to the dock." }
        ]
      },
      { 
        name: "Roll", 
        conjugations: [
          { subject: "I", verb: "rolled", example: "I rolled out pastry dough for pies." },
          { subject: "You", verb: "rolled", example: "You rolled your eyes at bad jokes." },
          { subject: "He/She", verb: "rolled", example: "She rolled down the hill for fun." },
          { subject: "We", verb: "rolled", example: "We rolled with the punches life threw at us." },
          { subject: "They", verb: "rolled", example: "They rolled the dice in board games." }
        ]
      },
      { 
        name: "Differ", 
        conjugations: [
          { subject: "I", verb: "differed", example: "I differed from my siblings in many ways." },
          { subject: "You", verb: "differed", example: "You differed with your colleague on this point." },
          { subject: "He/She", verb: "differed", example: "He differed in his approach to problem-solving." },
          { subject: "We", verb: "differed", example: "We differed in our political views." },
          { subject: "They", verb: "differed", example: "They differed significantly in their methods." }
        ]
      },
      { 
        name: "Promote", 
        conjugations: [
          { subject: "I", verb: "promoted", example: "I promoted healthy eating habits to my family." },
          { subject: "You", verb: "promoted", example: "You promoted your business on social media." },
          { subject: "He/She", verb: "promoted", example: "She promoted diversity in the workplace." },
          { subject: "We", verb: "promoted", example: "We promoted from within whenever possible." },
          { subject: "They", verb: "promoted", example: "They promoted their products at trade shows." }
        ]
      },
      { 
        name: "Attack", 
        conjugations: [
          { subject: "I", verb: "attacked", example: "I attacked problems with enthusiasm." },
          { subject: "You", verb: "attacked", example: "You attacked each challenge methodically." },
          { subject: "He/She", verb: "attacked", example: "He attacked his opponent's arguments." },
          { subject: "We", verb: "attacked", example: "We attacked the project from different angles." },
          { subject: "They", verb: "attacked", example: "They attacked when they felt threatened." }
        ]
      },
      { 
        name: "Sign", 
        conjugations: [
          { subject: "I", verb: "signed", example: "I signed my name on official documents." },
          { subject: "You", verb: "signed", example: "You signed contracts without reading them carefully." },
          { subject: "He/She", verb: "signed", example: "She signed autographs for fans." },
          { subject: "We", verb: "signed", example: "We signed the petition to support the cause." },
          { subject: "They", verb: "signed", example: "They signed their work to claim ownership." }
        ]
      },
      { 
        name: "Inform", 
        conjugations: [
          { subject: "I", verb: "informed", example: "I informed my supervisor when there was a problem." },
          { subject: "You", verb: "informed", example: "You informed the police about suspicious activity." },
          { subject: "He/She", verb: "informed", example: "He informed patients about treatment options." },
          { subject: "We", verb: "informed", example: "We informed the public through press releases." },
          { subject: "They", verb: "informed", example: "They informed their decisions with research." }
        ]
      },
      { 
        name: "Note", 
        conjugations: [
          { subject: "I", verb: "noted", example: "I noted significant details in my journal." },
          { subject: "You", verb: "noted", example: "You noted down appointments in your calendar." },
          { subject: "He/She", verb: "noted", example: "She noted the changes in behavior." },
          { subject: "We", verb: "noted", example: "We noted with concern the rising temperatures." },
          { subject: "They", verb: "noted", example: "They noted each transaction carefully." }
        ]
      },
      { 
        name: "Spread", 
        conjugations: [
          { subject: "I", verb: "spread", example: "I spread butter on my toast." },
          { subject: "You", verb: "spread", example: "You spread joy wherever you went." },
          { subject: "He/She", verb: "spread", example: "He spread rumors unintentionally." },
          { subject: "We", verb: "spread", example: "We spread our resources too thin." },
          { subject: "They", verb: "spread", example: "They spread blankets on the grass for the picnic." }
        ]
      },
      { 
        name: "Form", 
        conjugations: [
          { subject: "I", verb: "formed", example: "I formed clay into sculptures." },
          { subject: "You", verb: "formed", example: "You formed opinions based on evidence." },
          { subject: "He/She", verb: "formed", example: "She formed close bonds with her students." },
          { subject: "We", verb: "formed", example: "We formed a circle for the discussion." },
          { subject: "They", verb: "formed", example: "They formed partnerships with local businesses." }
        ]
      },
      { 
        name: "Worry", 
        conjugations: [
          { subject: "I", verb: "worried", example: "I worried about climate change." },
          { subject: "You", verb: "worried", example: "You worried too much about what others thought." },
          { subject: "He/She", verb: "worried", example: "She worried about her children constantly." },
          { subject: "We", verb: "worried", example: "We worried about the economic outlook." },
          { subject: "They", verb: "worried", example: "They worried that they might miss the deadline." }
        ]
      },
      { 
        name: "Concentrate", 
        conjugations: [
          { subject: "I", verb: "concentrated", example: "I concentrated better in a quiet environment." },
          { subject: "You", verb: "concentrated", example: "You concentrated on one task at a time." },
          { subject: "He/She", verb: "concentrated", example: "He concentrated deeply when playing chess." },
          { subject: "We", verb: "concentrated", example: "We concentrated our efforts on customer service." },
          { subject: "They", verb: "concentrated", example: "They concentrated resources in urban areas." }
        ]
      },
      { 
        name: "Vote", 
        conjugations: [
          { subject: "I", verb: "voted", example: "I voted in every election." },
          { subject: "You", verb: "voted", example: "You voted according to your principles." },
          { subject: "He/She", verb: "voted", example: "She voted by mail when traveling." },
          { subject: "We", verb: "voted", example: "We voted on proposals during meetings." },
          { subject: "They", verb: "voted", example: "They voted their shares at the annual meeting." }
        ]
      },
      { 
        name: "Extend", 
        conjugations: [
          { subject: "I", verb: "extended", example: "I extended my hand in friendship." },
          { subject: "You", verb: "extended", example: "You extended your stay at the hotel." },
          { subject: "He/She", verb: "extended", example: "He extended credit to regular customers." },
          { subject: "We", verb: "extended", example: "We extended our deepest sympathies." },
          { subject: "They", verb: "extended", example: "They extended the deadline when necessary." }
        ]
      },
      { 
        name: "Lift", 
        conjugations: [
          { subject: "I", verb: "lifted", example: "I lifted weights three times a week." },
          { subject: "You", verb: "lifted", example: "You lifted people's spirits with your humor." },
          { subject: "He/She", verb: "lifted", example: "She lifted her baby out of the crib." },
          { subject: "We", verb: "lifted", example: "We lifted each other up during hard times." },
          { subject: "They", verb: "lifted", example: "They lifted heavy furniture with proper technique." }
        ]
      },
      { 
        name: "Catch", 
        conjugations: [
          { subject: "I", verb: "caught", example: "I caught the bus every morning." },
          { subject: "You", verb: "caught", example: "You caught fish with skill and patience." },
          { subject: "He/She", verb: "caught", example: "He caught the ball one-handed." },
          { subject: "We", verb: "caught", example: "We caught up on weekends after busy weeks." },
          { subject: "They", verb: "caught", example: "They caught criminals through careful investigation." }
        ]
      },
      { 
        name: "Combine", 
        conjugations: [
          { subject: "I", verb: "combined", example: "I combined work and study effectively." },
          { subject: "You", verb: "combined", example: "You combined different ingredients in your cooking." },
          { subject: "He/She", verb: "combined", example: "She combined her talents in music and writing." },
          { subject: "We", verb: "combined", example: "We combined our resources for better results." },
          { subject: "They", verb: "combined", example: "They combined traditional and modern techniques." }
        ]
      },
      { 
        name: "Propose", 
        conjugations: [
          { subject: "I", verb: "proposed", example: "I proposed a solution to the problem." },
          { subject: "You", verb: "proposed", example: "You proposed ideas with confidence." },
          { subject: "He/She", verb: "proposed", example: "He proposed marriage on bended knee." },
          { subject: "We", verb: "proposed", example: "We proposed changes to the policy." },
          { subject: "They", verb: "proposed", example: "They proposed a partnership between companies." }
        ]
      },
      { 
        name: "Celebrate", 
        conjugations: [
          { subject: "I", verb: "celebrated", example: "I celebrated my achievements, big and small." },
          { subject: "You", verb: "celebrated", example: "You celebrated holidays with enthusiasm." },
          { subject: "He/She", verb: "celebrated", example: "She celebrated her birthday last week." },
          { subject: "We", verb: "celebrated", example: "We celebrated diversity in our community." },
          { subject: "They", verb: "celebrated", example: "They celebrated the team's victory." }
        ]
      },
      { 
        name: "Supply", 
        conjugations: [
          { subject: "I", verb: "supplied", example: "I supplied the office with stationery." },
          { subject: "You", verb: "supplied", example: "You supplied evidence for your claims." },
          { subject: "He/She", verb: "supplied", example: "He supplied materials for the workshop." },
          { subject: "We", verb: "supplied", example: "We supplied electricity to the entire region." },
          { subject: "They", verb: "supplied", example: "They supplied components to major manufacturers." }
        ]
      },
      { 
        name: "Link", 
        conjugations: [
          { subject: "I", verb: "linked", example: "I linked related topics in my presentation." },
          { subject: "You", verb: "linked", example: "You linked your social media accounts together." },
          { subject: "He/She", verb: "linked", example: "She linked sources to her research paper." },
          { subject: "We", verb: "linked", example: "We linked arms in solidarity." },
          { subject: "They", verb: "linked", example: "They linked their success to hard work." }
        ]
      },
      { 
        name: "Demand", 
        conjugations: [
          { subject: "I", verb: "demanded", example: "I demanded fair treatment for all employees." },
          { subject: "You", verb: "demanded", example: "You demanded too much from yourself." },
          { subject: "He/She", verb: "demanded", example: "He demanded excellence in everything." },
          { subject: "We", verb: "demanded", example: "We demanded an explanation for the delay." },
          { subject: "They", verb: "demanded", example: "They demanded a refund for poor service." }
        ]
      },
      { 
        name: "Destroy", 
        conjugations: [
          { subject: "I", verb: "destroyed", example: "I destroyed old documents for security." },
          { subject: "You", verb: "destroyed", example: "You destroyed misconceptions with facts." },
          { subject: "He/She", verb: "destroyed", example: "She destroyed her competition on the field." },
          { subject: "We", verb: "destroyed", example: "We destroyed harmful patterns of behavior." },
          { subject: "They", verb: "destroyed", example: "They destroyed outdated records regularly." }
        ]
      },
      { 
        name: "Preserve", 
        conjugations: [
          { subject: "I", verb: "preserved", example: "I preserved family traditions." },
          { subject: "You", verb: "preserved", example: "You preserved fruits by making jam." },
          { subject: "He/She", verb: "preserved", example: "He preserved historical documents." },
          { subject: "We", verb: "preserved", example: "We preserved wildlife through conservation." },
          { subject: "They", verb: "preserved", example: "They preserved ancient buildings as heritage sites." }
        ]
      },
      { 
        name: "Blame", 
        conjugations: [
          { subject: "I", verb: "blamed", example: "I blamed myself for the misunderstanding." },
          { subject: "You", verb: "blamed", example: "You blamed external factors for failures." },
          { subject: "He/She", verb: "blamed", example: "She blamed traffic for her lateness." },
          { subject: "We", verb: "blamed", example: "We blamed poor planning for the confusion." },
          { subject: "They", verb: "blamed", example: "They blamed each other for the mistake." }
        ]
      },
      { 
        name: "Invest", 
        conjugations: [
          { subject: "I", verb: "invested", example: "I invested in my education consistently." },
          { subject: "You", verb: "invested", example: "You invested wisely for retirement." },
          { subject: "He/She", verb: "invested", example: "He invested in startups with potential." },
          { subject: "We", verb: "invested", example: "We invested time in building relationships." },
          { subject: "They", verb: "invested", example: "They invested profits back into the business." }
        ]
      },
      { 
        name: "Prefer", 
        conjugations: [
          { subject: "I", verb: "preferred", example: "I preferred tea to coffee in the morning." },
          { subject: "You", verb: "preferred", example: "You preferred working independently." },
          { subject: "He/She", verb: "preferred", example: "She preferred classical music to rock." },
          { subject: "We", verb: "preferred", example: "We preferred to meet in person rather than online." },
          { subject: "They", verb: "preferred", example: "They preferred casual dress in the office." }
        ]
      },
      { 
        name: "Demonstrate", 
        conjugations: [
          { subject: "I", verb: "demonstrated", example: "I demonstrated techniques to new employees." },
          { subject: "You", verb: "demonstrated", example: "You demonstrated leadership in crisis situations." },
          { subject: "He/She", verb: "demonstrated", example: "He demonstrated the product features to customers." },
          { subject: "We", verb: "demonstrated", example: "We demonstrated our commitment through actions." },
          { subject: "They", verb: "demonstrated", example: "They demonstrated for environmental causes." }
        ]
      },
      { 
        name: "Generate", 
        conjugations: [
          { subject: "I", verb: "generated", example: "I generated new ideas through brainstorming." },
          { subject: "You", verb: "generated", example: "You generated excitement about the project." },
          { subject: "He/She", verb: "generated", example: "She generated reports using the new software." },
          { subject: "We", verb: "generated", example: "We generated electricity from solar panels." },
          { subject: "They", verb: "generated", example: "They generated significant revenue through online sales." }
        ]
      },
      { 
        name: "Lock", 
        conjugations: [
          { subject: "I", verb: "locked", example: "I locked my door when leaving home." },
          { subject: "You", verb: "locked", example: "You locked your computer when stepping away." },
          { subject: "He/She", verb: "locked", example: "He locked his bike to the rack." },
          { subject: "We", verb: "locked", example: "We locked valuable items in the safe." },
          { subject: "They", verb: "locked", example: "They locked the building at night." }
        ]
      },
      { 
        name: "Adapt", 
        conjugations: [
          { subject: "I", verb: "adapted", example: "I adapted quickly to changing circumstances." },
          { subject: "You", verb: "adapted", example: "You adapted your teaching style for different learners." },
          { subject: "He/She", verb: "adapted", example: "She adapted recipes to suit dietary needs." },
          { subject: "We", verb: "adapted", example: "We adapted our strategies based on feedback." },
          { subject: "They", verb: "adapted", example: "They adapted to new technology easily." }
        ]
      },
      { 
        name: "Grab", 
        conjugations: [
          { subject: "I", verb: "grabbed", example: "I grabbed coffee on my way to work." },
          { subject: "You", verb: "grabbed", example: "You grabbed opportunities when they arose." },
          { subject: "He/She", verb: "grabbed", example: "He grabbed his jacket before leaving." },
          { subject: "We", verb: "grabbed", example: "We grabbed a quick lunch between meetings." },
          { subject: "They", verb: "grabbed", example: "They grabbed the last available tickets." }
        ]
      },
      { 
        name: "Calculate", 
        conjugations: [
          { subject: "I", verb: "calculated", example: "I calculated expenses for tax purposes." },
          { subject: "You", verb: "calculated", example: "You calculated distances before planning trips." },
          { subject: "He/She", verb: "calculated", example: "She calculated risks before investing." },
          { subject: "We", verb: "calculated", example: "We calculated interest rates on loans." },
          { subject: "They", verb: "calculated", example: "They calculated profits at the end of each quarter." }
        ]
      },
      { 
        name: "Proceed", 
        conjugations: [
          { subject: "I", verb: "proceeded", example: "I proceeded with caution in unfamiliar situations." },
          { subject: "You", verb: "proceeded", example: "You proceeded to the next stage after approval." },
          { subject: "He/She", verb: "proceeded", example: "He proceeded with the experiment as planned." },
          { subject: "We", verb: "proceeded", example: "We proceeded down the path toward the lake." },
          { subject: "They", verb: "proceeded", example: "They proceeded with construction despite delays." }
        ]
      },
      { 
        name: "Trust", 
        conjugations: [
          { subject: "I", verb: "trusted", example: "I trusted my instincts when making decisions." },
          { subject: "You", verb: "trusted", example: "You trusted people until they gave you reason not to." },
          { subject: "He/She", verb: "trusted", example: "She trusted her team to complete the project." },
          { subject: "We", verb: "trusted", example: "We trusted each other completely." },
          { subject: "They", verb: "trusted", example: "They trusted scientific evidence over anecdotes." }
        ]
      },
      { 
        name: "Wake", 
        conjugations: [
          { subject: "I", verb: "woke", example: "I woke up at six every morning." },
          { subject: "You", verb: "woke", example: "You woke the baby when you talked loudly." },
          { subject: "He/She", verb: "woke", example: "He woke to the sound of birds chirping." },
          { subject: "We", verb: "woke", example: "We woke our children for school." },
          { subject: "They", verb: "woke", example: "They woke before sunrise to go fishing." }
        ]
      },
      { 
        name: "Hate", 
        conjugations: [
          { subject: "I", verb: "hated", example: "I hated waiting in long lines." },
          { subject: "You", verb: "hated", example: "You hated spicy food." },
          { subject: "He/She", verb: "hated", example: "She hated being interrupted when speaking." },
          { subject: "We", verb: "hated", example: "We hated to disappoint our customers." },
          { subject: "They", verb: "hated", example: "They hated missing deadlines." }
        ]
      },
      { 
        name: "Fear", 
        conjugations: [
          { subject: "I", verb: "feared", example: "I feared heights since childhood." },
          { subject: "You", verb: "feared", example: "You feared rejection more than failure." },
          { subject: "He/She", verb: "feared", example: "He feared the consequences of his actions." },
          { subject: "We", verb: "feared", example: "We feared what we didn't understand." },
          { subject: "They", verb: "feared", example: "They feared losing their market position." }
        ]
      },
      { 
        name: "Possess", 
        conjugations: [
          { subject: "I", verb: "possessed", example: "I possessed the skills needed for this job." },
          { subject: "You", verb: "possessed", example: "You possessed remarkable patience with children." },
          { subject: "He/She", verb: "possessed", example: "She possessed extensive knowledge of art history." },
          { subject: "We", verb: "possessed", example: "We possessed the determination to succeed." },
          { subject: "They", verb: "possessed", example: "They possessed valuable antiques in their collection." }
        ]
      },
      { 
        name: "Recognize", 
        conjugations: [
          { subject: "I", verb: "recognized", example: "I recognized your voice immediately." },
          { subject: "You", verb: "recognized", example: "You recognized patterns quickly." },
          { subject: "He/She", verb: "recognized", example: "He recognized the importance of teamwork." },
          { subject: "We", verb: "recognized", example: "We recognized outstanding achievements annually." },
          { subject: "They", verb: "recognized", example: "They recognized each other after many years." }
        ]
      },
      { 
        name: "Stretch", 
        conjugations: [
          { subject: "I", verb: "stretched", example: "I stretched before and after exercising." },
          { subject: "You", verb: "stretched", example: "You stretched the truth sometimes." },
          { subject: "He/She", verb: "stretched", example: "She stretched her budget to cover expenses." },
          { subject: "We", verb: "stretched", example: "We stretched our resources during busy periods." },
          { subject: "They", verb: "stretched", example: "They stretched their legs during the break." }
        ]
      },
      { 
        name: "Light", 
        conjugations: [
          { subject: "I", verb: "lit", example: "I lit candles during power outages." },
          { subject: "You", verb: "lit", example: "You lit up the room with your smile." },
          { subject: "He/She", verb: "lit", example: "He lit the fireplace on cold evenings." },
          { subject: "We", verb: "lit", example: "We lit lanterns for the garden party." },
          { subject: "They", verb: "lit", example: "They lit the path with solar lamps." }
        ]
      },
      { 
        name: "Interview", 
        conjugations: [
          { subject: "I", verb: "interviewed", example: "I interviewed candidates for the position." },
          { subject: "You", verb: "interviewed", example: "You interviewed celebrities for your podcast." },
          { subject: "He/She", verb: "interviewed", example: "She interviewed experts in various fields." },
          { subject: "We", verb: "interviewed", example: "We interviewed multiple vendors before deciding." },
          { subject: "They", verb: "interviewed", example: "They interviewed witnesses at the scene." }
        ]
      },
      { 
        name: "Commit", 
        conjugations: [
          { subject: "I", verb: "committed", example: "I committed to regular exercise." },
          { subject: "You", verb: "committed", example: "You committed valuable time to volunteer work." },
          { subject: "He/She", verb: "committed", example: "He committed his thoughts to paper." },
          { subject: "We", verb: "committed", example: "We committed resources to research and development." },
          { subject: "They", verb: "committed", example: "They committed to sustainable practices." }
        ]
      },
      { 
        name: "Reveal", 
        conjugations: [
          { subject: "I", verb: "revealed", example: "I revealed personal information cautiously." },
          { subject: "You", verb: "revealed", example: "You revealed your intentions through actions." },
          { subject: "He/She", verb: "revealed", example: "She revealed the secret ingredient in her recipe." },
          { subject: "We", verb: "revealed", example: "We revealed our findings at the conference." },
          { subject: "They", verb: "revealed", example: "They revealed new products at annual events." }
        ]
      },
      { 
        name: "Load", 
        conjugations: [
          { subject: "I", verb: "loaded", example: "I loaded the dishwasher after dinner." },
          { subject: "You", verb: "loaded", example: "You loaded too much work onto yourself." },
          { subject: "He/She", verb: "loaded", example: "He loaded the truck with furniture." },
          { subject: "We", verb: "loaded", example: "We loaded our shopping into the car." },
          { subject: "They", verb: "loaded", example: "They loaded the software onto new computers." }
        ]
      },
      { 
        name: "Highlight", 
        conjugations: [
          { subject: "I", verb: "highlighted", example: "I highlighted important passages in my textbooks." },
          { subject: "You", verb: "highlighted", example: "You highlighted your strengths in interviews." },
          { subject: "He/She", verb: "highlighted", example: "She highlighted accomplishments in her resume." },
          { subject: "We", verb: "highlighted", example: "We highlighted key points during presentations." },
          { subject: "They", verb: "highlighted", example: "They highlighted areas for improvement in the report." }
        ]
      },
      { 
        name: "Guide", 
        conjugations: [
          { subject: "I", verb: "guided", example: "I guided visitors through the museum." },
          { subject: "You", verb: "guided", example: "You guided students toward understanding." },
          { subject: "He/She", verb: "guided", example: "He guided the discussion with thoughtful questions." },
          { subject: "We", verb: "guided", example: "We guided our decisions by ethical principles." },
          { subject: "They", verb: "guided", example: "They guided climbers up the mountain." }
        ]
      },
      { 
        name: "Quote", 
        conjugations: [
          { subject: "I", verb: "quoted", example: "I quoted Shakespeare in my essays." },
          { subject: "You", verb: "quoted", example: "You quoted statistics to support your argument." },
          { subject: "He/She", verb: "quoted", example: "She quoted prices for various services." },
          { subject: "We", verb: "quoted", example: "We quoted directly from the original text." },
          { subject: "They", verb: "quoted", example: "They quoted each other frequently in meetings." }
        ]
      },
      { 
        name: "Charge", 
        conjugations: [
          { subject: "I", verb: "charged", example: "I charged my devices overnight." },
          { subject: "You", verb: "charged", example: "You charged reasonable prices for your work." },
          { subject: "He/She", verb: "charged", example: "He charged forward despite obstacles." },
          { subject: "We", verb: "charged", example: "We charged admission to cover expenses." },
          { subject: "They", verb: "charged", example: "They charged their customers for extra services." }
        ]
      },
    ],
    "future": [
        { 
            name: "Be", 
            conjugations: [
              { subject: "I", verb: "will be", example: "I will be there at 5 PM." },
              { subject: "You", verb: "will be", example: "You will be successful." },
              { subject: "He/She", verb: "will be", example: "She will be a doctor someday." },
              { subject: "We", verb: "will be", example: "We will be ready when you arrive." },
              { subject: "They", verb: "will be", example: "They will be married next month." }
            ]
          },
          { 
            name: "Have", 
            conjugations: [
              { subject: "I", verb: "will have", example: "I will have finished the report by tomorrow." },
              { subject: "You", verb: "will have", example: "You will have plenty of time to prepare." },
              { subject: "He/She", verb: "will have", example: "He will have a new car next year." },
              { subject: "We", verb: "will have", example: "We will have dinner at eight." },
              { subject: "They", verb: "will have", example: "They will have their meeting in the conference room." }
            ]
          },
          { 
            name: "Do", 
            conjugations: [
              { subject: "I", verb: "will do", example: "I will do my homework after dinner." },
              { subject: "You", verb: "will do", example: "You will do great on your test." },
              { subject: "He/She", verb: "will do", example: "She will do the presentation tomorrow." },
              { subject: "We", verb: "will do", example: "We will do our best to help you." },
              { subject: "They", verb: "will do", example: "They will do the cleaning this weekend." }
            ]
          },
          { 
            name: "Go", 
            conjugations: [
              { subject: "I", verb: "will go", example: "I will go to the store later." },
              { subject: "You", verb: "will go", example: "You will go far in your career." },
              { subject: "He/She", verb: "will go", example: "He will go to Paris next summer." },
              { subject: "We", verb: "will go", example: "We will go to the movies tonight." },
              { subject: "They", verb: "will go", example: "They will go on vacation in July." }
            ]
          },
          { 
            name: "Like", 
            conjugations: [
              { subject: "I", verb: "will like", example: "I will like the new restaurant, I'm sure." },
              { subject: "You", verb: "will like", example: "You will like this book I'm recommending." },
              { subject: "He/She", verb: "will like", example: "She will like the surprise party we're planning." },
              { subject: "We", verb: "will like", example: "We will like living in our new neighborhood." },
              { subject: "They", verb: "will like", example: "They will like the changes to the office layout." }
            ]
          },
          { 
            name: "Work", 
            conjugations: [
              { subject: "I", verb: "will work", example: "I will work on the project this weekend." },
              { subject: "You", verb: "will work", example: "You will work from home tomorrow." },
              { subject: "He/She", verb: "will work", example: "He will work late to finish the report." },
              { subject: "We", verb: "will work", example: "We will work together to solve this problem." },
              { subject: "They", verb: "will work", example: "They will work in different departments." }
            ]
          },
          { 
            name: "Eat", 
            conjugations: [
              { subject: "I", verb: "will eat", example: "I will eat lunch at noon." },
              { subject: "You", verb: "will eat", example: "You will eat healthier foods next year." },
              { subject: "He/She", verb: "will eat", example: "She will eat at the new Italian restaurant." },
              { subject: "We", verb: "will eat", example: "We will eat dinner after the show." },
              { subject: "They", verb: "will eat", example: "They will eat breakfast before leaving." }
            ]
          },
          { 
            name: "Study", 
            conjugations: [
              { subject: "I", verb: "will study", example: "I will study for my exam all weekend." },
              { subject: "You", verb: "will study", example: "You will study engineering in college." },
              { subject: "He/She", verb: "will study", example: "He will study English in London." },
              { subject: "We", verb: "will study", example: "We will study the data before making a decision." },
              { subject: "They", verb: "will study", example: "They will study marine biology next semester." }
            ]
          },
          { 
            name: "Live", 
            conjugations: [
              { subject: "I", verb: "will live", example: "I will live in New York next year." },
              { subject: "You", verb: "will live", example: "You will live to be over 100." },
              { subject: "He/She", verb: "will live", example: "She will live with her parents until graduation." },
              { subject: "We", verb: "will live", example: "We will live in the countryside someday." },
              { subject: "They", verb: "will live", example: "They will live abroad for two years." }
            ]
          },
          { 
            name: "Speak", 
            conjugations: [
              { subject: "I", verb: "will speak", example: "I will speak to the manager about your complaint." },
              { subject: "You", verb: "will speak", example: "You will speak fluent Spanish after this course." },
              { subject: "He/She", verb: "will speak", example: "He will speak at the conference tomorrow." },
              { subject: "We", verb: "will speak", example: "We will speak with our lawyer before signing." },
              { subject: "They", verb: "will speak", example: "They will speak to the press after the meeting." }
            ]
          },
          { 
            name: "Make", 
            conjugations: [
              { subject: "I", verb: "will make", example: "I will make dinner tonight." },
              { subject: "You", verb: "will make", example: "You will make a great impression at the interview." },
              { subject: "He/She", verb: "will make", example: "She will make a decision by Friday." },
              { subject: "We", verb: "will make", example: "We will make changes to the proposal." },
              { subject: "They", verb: "will make", example: "They will make more movies in this series." }
            ]
          },
          { 
            name: "Get", 
            conjugations: [
              { subject: "I", verb: "will get", example: "I will get a new phone next month." },
              { subject: "You", verb: "will get", example: "You will get better with practice." },
              { subject: "He/She", verb: "will get", example: "He will get the promotion he deserves." },
              { subject: "We", verb: "will get", example: "We will get tickets for the concert." },
              { subject: "They", verb: "will get", example: "They will get married in June." }
            ]
          },
          { 
            name: "Take", 
            conjugations: [
              { subject: "I", verb: "will take", example: "I will take the train to work tomorrow." },
              { subject: "You", verb: "will take", example: "You will take over the project next week." },
              { subject: "He/She", verb: "will take", example: "She will take care of the arrangements." },
              { subject: "We", verb: "will take", example: "We will take a vacation in August." },
              { subject: "They", verb: "will take", example: "They will take notes during the meeting." }
            ]
          },
          { 
            name: "Come", 
            conjugations: [
              { subject: "I", verb: "will come", example: "I will come to your party on Saturday." },
              { subject: "You", verb: "will come", example: "You will come to understand this concept." },
              { subject: "He/She", verb: "will come", example: "He will come home for Christmas." },
              { subject: "We", verb: "will come", example: "We will come to visit you soon." },
              { subject: "They", verb: "will come", example: "They will come to the ceremony together." }
            ]
          },
          { 
            name: "See", 
            conjugations: [
              { subject: "I", verb: "will see", example: "I will see you tomorrow at the meeting." },
              { subject: "You", verb: "will see", example: "You will see the results of your hard work." },
              { subject: "He/She", verb: "will see", example: "She will see her family this weekend." },
              { subject: "We", verb: "will see", example: "We will see what happens next." },
              { subject: "They", verb: "will see", example: "They will see the movie premiere tonight." }
            ]
          },
          { 
            name: "Know", 
            conjugations: [
              { subject: "I", verb: "will know", example: "I will know the answer after I check the book." },
              { subject: "You", verb: "will know", example: "You will know what to do when the time comes." },
              { subject: "He/She", verb: "will know", example: "He will know the results of the test tomorrow." },
              { subject: "We", verb: "will know", example: "We will know more after the meeting." },
              { subject: "They", verb: "will know", example: "They will know how to handle the situation." }
            ]
          },
          { 
            name: "Think", 
            conjugations: [
              { subject: "I", verb: "will think", example: "I will think about your proposal carefully." },
              { subject: "You", verb: "will think", example: "You will think differently once you have all the facts." },
              { subject: "He/She", verb: "will think", example: "She will think of a solution, I'm sure." },
              { subject: "We", verb: "will think", example: "We will think through all the options." },
              { subject: "They", verb: "will think", example: "They will think about our offer over the weekend." }
            ]
          },
          { 
            name: "Give", 
            conjugations: [
              { subject: "I", verb: "will give", example: "I will give you my answer tomorrow." },
              { subject: "You", verb: "will give", example: "You will give a great presentation." },
              { subject: "He/She", verb: "will give", example: "He will give his sister a birthday present." },
              { subject: "We", verb: "will give", example: "We will give you all the information you need." },
              { subject: "They", verb: "will give", example: "They will give a donation to the charity." }
            ]
          },
          { 
            name: "Find", 
            conjugations: [
              { subject: "I", verb: "will find", example: "I will find a solution to this problem." },
              { subject: "You", verb: "will find", example: "You will find your keys eventually." },
              { subject: "He/She", verb: "will find", example: "She will find the perfect job soon." },
              { subject: "We", verb: "will find", example: "We will find out the truth." },
              { subject: "They", verb: "will find", example: "They will find the missing documents." }
            ]
          },
          { 
            name: "Tell", 
            conjugations: [
              { subject: "I", verb: "will tell", example: "I will tell you the whole story later." },
              { subject: "You", verb: "will tell", example: "You will tell us when you're ready to leave." },
              { subject: "He/She", verb: "will tell", example: "He will tell his parents about his decision." },
              { subject: "We", verb: "will tell", example: "We will tell everyone the good news." },
              { subject: "They", verb: "will tell", example: "They will tell their side of the story tomorrow." }
            ]
          },
          { 
            name: "Ask", 
            conjugations: [
              { subject: "I", verb: "will ask", example: "I will ask for directions if we get lost." },
              { subject: "You", verb: "will ask", example: "You will ask better questions with experience." },
              { subject: "He/She", verb: "will ask", example: "She will ask her boss for a raise." },
              { subject: "We", verb: "will ask", example: "We will ask everyone to bring something to the potluck." },
              { subject: "They", verb: "will ask", example: "They will ask for your opinion during the meeting." }
            ]
          },
          { 
            name: "Feel", 
            conjugations: [
              { subject: "I", verb: "will feel", example: "I will feel better after I rest." },
              { subject: "You", verb: "will feel", example: "You will feel proud when you finish the marathon." },
              { subject: "He/She", verb: "will feel", example: "He will feel more confident with practice." },
              { subject: "We", verb: "will feel", example: "We will feel relieved when the project is complete." },
              { subject: "They", verb: "will feel", example: "They will feel excited about the trip." }
            ]
          },
          { 
            name: "Become", 
            conjugations: [
              { subject: "I", verb: "will become", example: "I will become fluent in Spanish with daily practice." },
              { subject: "You", verb: "will become", example: "You will become an expert in your field." },
              { subject: "He/She", verb: "will become", example: "She will become the manager next month." },
              { subject: "We", verb: "will become", example: "We will become more efficient with the new system." },
              { subject: "They", verb: "will become", example: "They will become partners in the business." }
            ]
          },
          { 
            name: "Leave", 
            conjugations: [
              { subject: "I", verb: "will leave", example: "I will leave for the airport at 6 AM." },
              { subject: "You", verb: "will leave", example: "You will leave a lasting impression." },
              { subject: "He/She", verb: "will leave", example: "He will leave the company at the end of the month." },
              { subject: "We", verb: "will leave", example: "We will leave as soon as the movie ends." },
              { subject: "They", verb: "will leave", example: "They will leave their luggage at the hotel." }
            ]
          },
          { 
            name: "Put", 
            conjugations: [
              { subject: "I", verb: "will put", example: "I will put the books back on the shelf." },
              { subject: "You", verb: "will put", example: "You will put your skills to good use in this job." },
              { subject: "He/She", verb: "will put", example: "She will put the finishing touches on the project." },
              { subject: "We", verb: "will put", example: "We will put our plan into action tomorrow." },
              { subject: "They", verb: "will put", example: "They will put the furniture in storage while traveling." }
            ]
          },
          { 
            name: "Mean", 
            conjugations: [
              { subject: "I", verb: "will mean", example: "I will mean what I say when I make the announcement." },
              { subject: "You", verb: "will mean", example: "You will mean a lot to the team in this new role." },
              { subject: "He/She", verb: "will mean", example: "His speech will mean different things to different people." },
              { subject: "We", verb: "will mean", example: "We will mean business when we start the negotiations." },
              { subject: "They", verb: "will mean", example: "They will mean well, even if their approach seems harsh." }
            ]
          },
          { 
            name: "Keep", 
            conjugations: [
              { subject: "I", verb: "will keep", example: "I will keep you updated on the progress." },
              { subject: "You", verb: "will keep", example: "You will keep improving with practice." },
              { subject: "He/She", verb: "will keep", example: "She will keep the secret confidential." },
              { subject: "We", verb: "will keep", example: "We will keep our promises to the customers." },
              { subject: "They", verb: "will keep", example: "They will keep working until the job is done." }
            ]
          },
          { 
            name: "Let", 
            conjugations: [
              { subject: "I", verb: "will let", example: "I will let you know my decision tomorrow." },
              { subject: "You", verb: "will let", example: "You will let them borrow your car, won't you?" },
              { subject: "He/She", verb: "will let", example: "He will let the children stay up late on weekends." },
              { subject: "We", verb: "will let", example: "We will let everyone participate in the discussion." },
              { subject: "They", verb: "will let", example: "They will let us know when they arrive." }
            ]
          },
          { 
            name: "Help", 
            conjugations: [
              { subject: "I", verb: "will help", example: "I will help you move this weekend." },
              { subject: "You", verb: "will help", example: "You will help many people in your medical career." },
              { subject: "He/She", verb: "will help", example: "She will help organize the charity event." },
              { subject: "We", verb: "will help", example: "We will help clean up after the party." },
              { subject: "They", verb: "will help", example: "They will help implement the new system." }
            ]
          },
          { 
            name: "Talk", 
            conjugations: [
              { subject: "I", verb: "will talk", example: "I will talk to the manager about your concerns." },
              { subject: "You", verb: "will talk", example: "You will talk about this experience for years to come." },
              { subject: "He/She", verb: "will talk", example: "He will talk about his research at the conference." },
              { subject: "We", verb: "will talk", example: "We will talk more about this tomorrow." },
              { subject: "They", verb: "will talk", example: "They will talk through their differences." }
            ]
          },
          { 
            name: "Turn", 
            conjugations: [
              { subject: "I", verb: "will turn", example: "I will turn in my assignment before the deadline." },
              { subject: "You", verb: "will turn", example: "You will turn 30 next month." },
              { subject: "He/She", verb: "will turn", example: "She will turn the page to a new chapter in her life." },
              { subject: "We", verb: "will turn", example: "We will turn left at the next intersection." },
              { subject: "They", verb: "will turn", example: "They will turn the proposal in their favor." }
            ]
          },
          { 
            name: "Show", 
            conjugations: [
              { subject: "I", verb: "will show", example: "I will show you how to use the new software." },
              { subject: "You", verb: "will show", example: "You will show everyone your talent at the recital." },
              { subject: "He/She", verb: "will show", example: "He will show his paintings at the gallery next month." },
              { subject: "We", verb: "will show", example: "We will show our appreciation with a gift." },
              { subject: "They", verb: "will show", example: "They will show the new collection at fashion week." }
            ]
          },
          { 
            name: "Hear", 
            conjugations: [
              { subject: "I", verb: "will hear", example: "I will hear the results of my application next week." },
              { subject: "You", verb: "will hear", example: "You will hear from us as soon as we make a decision." },
              { subject: "He/She", verb: "will hear", example: "She will hear back from the university soon." },
              { subject: "We", verb: "will hear", example: "We will hear the announcement at the meeting." },
              { subject: "They", verb: "will hear", example: "They will hear about our success eventually." }
            ]
          },
          { 
            name: "Play", 
            conjugations: [
              { subject: "I", verb: "will play", example: "I will play the piano at the wedding." },
              { subject: "You", verb: "will play", example: "You will play an important role in this project." },
              { subject: "He/She", verb: "will play", example: "He will play soccer with his friends this weekend." },
              { subject: "We", verb: "will play", example: "We will play the new board game tonight." },
              { subject: "They", verb: "will play", example: "They will play against the champions next Saturday." }
            ]
          },
          { 
            name: "Run", 
            conjugations: [
              { subject: "I", verb: "will run", example: "I will run a marathon next spring." },
              { subject: "You", verb: "will run", example: "You will run the department while I'm away." },
              { subject: "He/She", verb: "will run", example: "She will run for president of the student council." },
              { subject: "We", verb: "will run", example: "We will run the tests again to verify the results." },
              { subject: "They", verb: "will run", example: "They will run the business together after the merger." }
            ]
          },
          { 
            name: "Move", 
            conjugations: [
              { subject: "I", verb: "will move", example: "I will move to Chicago next month." },
              { subject: "You", verb: "will move", example: "You will move into your new office on Monday." },
              { subject: "He/She", verb: "will move", example: "He will move the furniture to make space." },
              { subject: "We", verb: "will move", example: "We will move forward with the plan." },
              { subject: "They", verb: "will move", example: "They will move out of their apartment in June." }
            ]
          },
          { 
            name: "Want", 
            conjugations: [
              { subject: "I", verb: "will want", example: "I will want to review the contract before signing." },
              { subject: "You", verb: "will want", example: "You will want to save some energy for later." },
              { subject: "He/She", verb: "will want", example: "She will want to see the final design." },
              { subject: "We", verb: "will want", example: "We will want to celebrate after we complete the project." },
              { subject: "They", verb: "will want", example: "They will want more information before deciding." }
            ]
          },
          { 
            name: "Need", 
            conjugations: [
              { subject: "I", verb: "will need", example: "I will need your help with this task." },
              { subject: "You", verb: "will need", example: "You will need warm clothes for the trip." },
              { subject: "He/She", verb: "will need", example: "He will need additional time to finish." },
              { subject: "We", verb: "will need", example: "We will need to reschedule the meeting." },
              { subject: "They", verb: "will need", example: "They will need permission from their parents." }
            ]
          },
          { 
            name: "Start", 
            conjugations: [
              { subject: "I", verb: "will start", example: "I will start my new job next week." },
              { subject: "You", verb: "will start", example: "You will start to understand as you practice." },
              { subject: "He/She", verb: "will start", example: "She will start the presentation at 2 PM." },
              { subject: "We", verb: "will start", example: "We will start our journey at dawn." },
              { subject: "They", verb: "will start", example: "They will start construction in the spring." }
            ]
          },
          { 
            name: "Seem", 
            conjugations: [
              { subject: "I", verb: "will seem", example: "I will seem more confident after practicing my speech." },
              { subject: "You", verb: "will seem", example: "You will seem like an expert after the training." },
              { subject: "He/She", verb: "will seem", example: "He will seem different after his vacation." },
              { subject: "We", verb: "will seem", example: "We will seem prepared if we review the materials." },
              { subject: "They", verb: "will seem", example: "They will seem pleased with the results." }
            ]
          },
          { 
            name: "Look", 
            conjugations: [
              { subject: "I", verb: "will look", example: "I will look into that matter for you." },
              { subject: "You", verb: "will look", example: "You will look great in that suit." },
              { subject: "He/She", verb: "will look", example: "She will look for her lost earring tomorrow." },
              { subject: "We", verb: "will look", example: "We will look at all the options before deciding." },
              { subject: "They", verb: "will look", example: "They will look after your pets while you're away." }
            ]
          },
          { 
            name: "Call", 
            conjugations: [
              { subject: "I", verb: "will call", example: "I will call you when I arrive." },
              { subject: "You", verb: "will call", example: "You will call the restaurant to make reservations." },
              { subject: "He/She", verb: "will call", example: "He will call back later this afternoon." },
              { subject: "We", verb: "will call", example: "We will call a meeting to discuss the issue." },
              { subject: "They", verb: "will call", example: "They will call their parents with the good news." }
            ]
          },
          { 
            name: "Try", 
            conjugations: [
              { subject: "I", verb: "will try", example: "I will try to finish the report by tomorrow." },
              { subject: "You", verb: "will try", example: "You will try the new restaurant on Friday." },
              { subject: "He/She", verb: "will try", example: "She will try her best to be there on time." },
              { subject: "We", verb: "will try", example: "We will try a different approach next time." },
              { subject: "They", verb: "will try", example: "They will try out for the team next season." }
            ]
          },
          { 
            name: "Use", 
            conjugations: [
              { subject: "I", verb: "will use", example: "I will use the new software for the project." },
              { subject: "You", verb: "will use", example: "You will use these skills throughout your career." },
              { subject: "He/She", verb: "will use", example: "He will use his experience to guide the team." },
              { subject: "We", verb: "will use", example: "We will use recycled materials whenever possible." },
              { subject: "They", verb: "will use", example: "They will use the conference room for their meeting." }
            ]
          },
          { 
            name: "Bring", 
            conjugations: [
              { subject: "I", verb: "will bring", example: "I will bring dessert to the dinner party." },
              { subject: "You", verb: "will bring", example: "You will bring your laptop to the workshop." },
              { subject: "He/She", verb: "will bring", example: "She will bring her expertise to the project." },
              { subject: "We", verb: "will bring", example: "We will bring our concerns to management." },
              { subject: "They", verb: "will bring", example: "They will bring gifts for everyone at the celebration." }
            ]
          },
          { 
            name: "Begin", 
            conjugations: [
              { subject: "I", verb: "will begin", example: "I will begin my new exercise routine tomorrow." },
              { subject: "You", verb: "will begin", example: "You will begin to see results in a few weeks." },
              { subject: "He/She", verb: "will begin", example: "He will begin the presentation with an introduction." },
              { subject: "We", verb: "will begin", example: "We will begin construction next month." },
              { subject: "They", verb: "will begin", example: "They will begin auditions for the play on Monday." }
            ]
          },
          { 
            name: "Write", 
            conjugations: [
              { subject: "I", verb: "will write", example: "I will write a detailed report after the meeting." },
              { subject: "You", verb: "will write", example: "You will write a great essay for your application." },
              { subject: "He/She", verb: "will write", example: "She will write a book about her experiences." },
              { subject: "We", verb: "will write", example: "We will write thank-you notes to all attendees." },
              { subject: "They", verb: "will write", example: "They will write a proposal for the new project." }
            ]
          },
          { 
            name: "Read", 
            conjugations: [
              { subject: "I", verb: "will read", example: "I will read the contract carefully before signing." },
              { subject: "You", verb: "will read", example: "You will read about it in tomorrow's newspaper." },
              { subject: "He/She", verb: "will read", example: "He will read a story to the children at bedtime." },
              { subject: "We", verb: "will read", example: "We will read all submissions before making a decision." },
              { subject: "They", verb: "will read", example: "They will read the instructions before assembling the furniture." }
            ]
          },
          { 
            name: "Say", 
            conjugations: [
              { subject: "I", verb: "will say", example: "I will say a few words at the ceremony." },
              { subject: "You", verb: "will say", example: "You will say goodbye to your colleagues before leaving." },
              { subject: "He/She", verb: "will say", example: "She will say what's on her mind at the meeting." },
              { subject: "We", verb: "will say", example: "We will say nothing until we speak with our lawyer." },
              { subject: "They", verb: "will say", example: "They will say yes to your proposal, I'm sure." }
            ]
          },
          { 
            name: "Stop", 
            conjugations: [
              { subject: "I", verb: "will stop", example: "I will stop smoking next month." },
              { subject: "You", verb: "will stop", example: "You will stop at the grocery store on your way home." },
              { subject: "He/She", verb: "will stop", example: "He will stop the car at the next gas station." },
              { subject: "We", verb: "will stop", example: "We will stop working on this project until we get more funding." },
              { subject: "They", verb: "will stop", example: "They will stop taking new clients after December." }
            ]
          },
          { 
            name: "Learn", 
            conjugations: [
              { subject: "I", verb: "will learn", example: "I will learn to play the guitar this year." },
              { subject: "You", verb: "will learn", example: "You will learn from this experience." },
              { subject: "He/She", verb: "will learn", example: "She will learn the new system quickly." },
              { subject: "We", verb: "will learn", example: "We will learn more about it during the training." },
              { subject: "They", verb: "will learn", example: "They will learn from their mistakes." }
            ]
          },
          { 
            name: "Understand", 
            conjugations: [
              { subject: "I", verb: "will understand", example: "I will understand it better after some practice." },
              { subject: "You", verb: "will understand", example: "You will understand the concept once we explain it." },
              { subject: "He/She", verb: "will understand", example: "He will understand your decision, don't worry." },
              { subject: "We", verb: "will understand", example: "We will understand the data after analyzing it." },
              { subject: "They", verb: "will understand", example: "They will understand the importance of this step." }
            ]
          },
          { 
            name: "Watch", 
            conjugations: [
              { subject: "I", verb: "will watch", example: "I will watch the new movie this weekend." },
              { subject: "You", verb: "will watch", example: "You will watch your team win the championship." },
              { subject: "He/She", verb: "will watch", example: "She will watch the children while we're out." },
              { subject: "We", verb: "will watch", example: "We will watch the presentation attentively." },
              { subject: "They", verb: "will watch", example: "They will watch the market trends carefully." }
            ]
          },
          { 
            name: "Follow", 
            conjugations: [
              { subject: "I", verb: "will follow", example: "I will follow up with you next week." },
              { subject: "You", verb: "will follow", example: "You will follow the instructions carefully." },
              { subject: "He/She", verb: "will follow", example: "He will follow in his father's footsteps." },
              { subject: "We", verb: "will follow", example: "We will follow the new regulations strictly." },
              { subject: "They", verb: "will follow", example: "They will follow our progress with interest." }
            ]
          },
          { 
            name: "Walk", 
            conjugations: [
              { subject: "I", verb: "will walk", example: "I will walk to work if the weather is nice." },
              { subject: "You", verb: "will walk", example: "You will walk the dog before dinner, won't you?" },
              { subject: "He/She", verb: "will walk", example: "She will walk down the aisle in September." },
              { subject: "We", verb: "will walk", example: "We will walk along the beach at sunset." },
              { subject: "They", verb: "will walk", example: "They will walk in the charity marathon next month." }
            ]
          },
          { 
            name: "Meet", 
            conjugations: [
              { subject: "I", verb: "will meet", example: "I will meet you at the restaurant at 7 PM." },
              { subject: "You", verb: "will meet", example: "You will meet many interesting people at the conference." },
              { subject: "He/She", verb: "will meet", example: "He will meet with his advisor tomorrow." },
              { subject: "We", verb: "will meet", example: "We will meet all our deadlines this quarter." },
              { subject: "They", verb: "will meet", example: "They will meet the new team members on Monday." }
            ]
          },
          { 
            name: "Consider", 
            conjugations: [
              { subject: "I", verb: "will consider", example: "I will consider your proposal carefully." },
              { subject: "You", verb: "will consider", example: "You will consider all options before deciding." },
              { subject: "He/She", verb: "will consider", example: "She will consider the offer over the weekend." },
              { subject: "We", verb: "will consider", example: "We will consider your application along with the others." },
              { subject: "They", verb: "will consider", example: "They will consider our feedback in the next revision." }
            ]
          },
          { 
            name: "Change", 
            conjugations: [
              { subject: "I", verb: "will change", example: "I will change my schedule to accommodate the meeting." },
              { subject: "You", verb: "will change", example: "You will change your mind when you see the data." },
              { subject: "He/She", verb: "will change", example: "He will change jobs in the new year." },
              { subject: "We", verb: "will change", example: "We will change our approach based on user feedback." },
              { subject: "They", verb: "will change", example: "They will change the policy after reviewing the complaints." }
            ]
          },
          { 
            name: "Appear", 
            conjugations: [
              { subject: "I", verb: "will appear", example: "I will appear in court next Tuesday." },
              { subject: "You", verb: "will appear", example: "You will appear on the panel of experts." },
              { subject: "He/She", verb: "will appear", example: "She will appear in the upcoming play." },
              { subject: "We", verb: "will appear", example: "We will appear in the promotional video." },
              { subject: "They", verb: "will appear", example: "They will appear on the morning news show." }
            ]
          },
          { 
            name: "Happen", 
            conjugations: [
              { subject: "I", verb: "will happen", example: "I will happen to be in town that weekend." },
              { subject: "You", verb: "will happen", example: "You will happen upon the solution unexpectedly." },
              { subject: "He/She", verb: "will happen", example: "It will happen when you least expect it." },
              { subject: "We", verb: "will happen", example: "We will happen to need that information later." },
              { subject: "They", verb: "will happen", example: "They will happen to be at the same conference." }
            ]
          },
          { 
            name: "Drive", 
            conjugations: [
              { subject: "I", verb: "will drive", example: "I will drive you to the airport tomorrow." },
              { subject: "You", verb: "will drive", example: "You will drive more carefully after the safety course." },
              { subject: "He/She", verb: "will drive", example: "She will drive across the country this summer." },
              { subject: "We", verb: "will drive", example: "We will drive to the beach this weekend." },
              { subject: "They", verb: "will drive", example: "They will drive the new electric car model." }
            ]
          },
          { 
            name: "Send", 
            conjugations: [
              { subject: "I", verb: "will send", example: "I will send you the documents by email." },
              { subject: "You", verb: "will send", example: "You will send invitations to all your friends." },
              { subject: "He/She", verb: "will send", example: "He will send the package by express mail." },
              { subject: "We", verb: "will send", example: "We will send our condolences to the family." },
              { subject: "They", verb: "will send", example: "They will send a representative to the meeting." }
            ]
          },
          { 
            name: "Stay", 
            conjugations: [
              { subject: "I", verb: "will stay", example: "I will stay at the hotel for three nights." },
              { subject: "You", verb: "will stay", example: "You will stay in touch after you move, won't you?" },
              { subject: "He/She", verb: "will stay", example: "She will stay with her parents until she finds an apartment." },
              { subject: "We", verb: "will stay", example: "We will stay late to finish the project." },
              { subject: "They", verb: "will stay", example: "They will stay in the countryside for the weekend." }
            ]
          },
          { 
            name: "Receive", 
            conjugations: [
              { subject: "I", verb: "will receive", example: "I will receive the award at the ceremony." },
              { subject: "You", verb: "will receive", example: "You will receive feedback on your performance next week." },
              { subject: "He/She", verb: "will receive", example: "He will receive the test results on Friday." },
              { subject: "We", verb: "will receive", example: "We will receive our new uniforms before the season starts." },
              { subject: "They", verb: "will receive", example: "They will receive the shipment in two days." }
            ]
          },
          { 
            name: "Remember", 
            conjugations: [
              { subject: "I", verb: "will remember", example: "I will remember to call my mother on her birthday." },
              { subject: "You", verb: "will remember", example: "You will remember this day for the rest of your life." },
              { subject: "He/She", verb: "will remember", example: "She will remember to bring the files to the meeting." },
              { subject: "We", verb: "will remember", example: "We will remember those who served our country." },
              { subject: "They", verb: "will remember", example: "They will remember your kindness during difficult times." }
            ]
          },
          { 
            name: "Expect", 
            conjugations: [
              { subject: "I", verb: "will expect", example: "I will expect your report by Monday." },
              { subject: "You", verb: "will expect", example: "You will expect better results after the training." },
              { subject: "He/She", verb: "will expect", example: "She will expect everyone to be punctual." },
              { subject: "We", verb: "will expect", example: "We will expect full cooperation from all departments." },
              { subject: "They", verb: "will expect", example: "They will expect a detailed explanation for the delay." }
            ]
          },
          { 
            name: "Buy", 
            conjugations: [
              { subject: "I", verb: "will buy", example: "I will buy a new car next year." },
              { subject: "You", verb: "will buy", example: "You will buy that house when the price drops." },
              { subject: "He/She", verb: "will buy", example: "He will buy tickets for the concert tomorrow." },
              { subject: "We", verb: "will buy", example: "We will buy new furniture after we move." },
              { subject: "They", verb: "will buy", example: "They will buy the company if negotiations succeed." }
            ]
          },
          { 
            name: "Build", 
            conjugations: [
              { subject: "I", verb: "will build", example: "I will build my own website this summer." },
              { subject: "You", verb: "will build", example: "You will build a strong reputation in this industry." },
              { subject: "He/She", verb: "will build", example: "She will build a treehouse for her children." },
              { subject: "We", verb: "will build", example: "We will build a new headquarters next year." },
              { subject: "They", verb: "will build", example: "They will build bridges between the communities." }
            ]
          },
          { 
            name: "Fall", 
            conjugations: [
              { subject: "I", verb: "will fall", example: "I will fall behind if I don't study regularly." },
              { subject: "You", verb: "will fall", example: "You will fall in love with the scenery there." },
              { subject: "He/She", verb: "will fall", example: "The temperature will fall below freezing tonight." },
              { subject: "We", verb: "will fall", example: "We will fall back on our savings if necessary." },
              { subject: "They", verb: "will fall", example: "They will fall asleep during the boring lecture." }
            ]
          },
          { 
            name: "Reach", 
            conjugations: [
              { subject: "I", verb: "will reach", example: "I will reach my destination before dark." },
              { subject: "You", verb: "will reach", example: "You will reach your goals with persistence." },
              { subject: "He/She", verb: "will reach", example: "He will reach out to former colleagues for opportunities." },
              { subject: "We", verb: "will reach", example: "We will reach a decision after reviewing all the facts." },
              { subject: "They", verb: "will reach", example: "They will reach the summit by noon if they start early." }
            ]
          },
          { 
            name: "Remain", 
            conjugations: [
              { subject: "I", verb: "will remain", example: "I will remain in this position until next year." },
              { subject: "You", verb: "will remain", example: "You will remain our top priority throughout this process." },
              { subject: "He/She", verb: "will remain", example: "She will remain calm during the crisis." },
              { subject: "We", verb: "will remain", example: "We will remain committed to our core values." },
              { subject: "They", verb: "will remain", example: "They will remain silent about the negotiations." }
            ]
          },
          { 
            name: "Believe", 
            conjugations: [
              { subject: "I", verb: "will believe", example: "I will believe it when I see it." },
              { subject: "You", verb: "will believe", example: "You will believe the story once you hear all the details." },
              { subject: "He/She", verb: "will believe", example: "He will believe in himself after he succeeds." },
              { subject: "We", verb: "will believe", example: "We will believe your account of the events." },
              { subject: "They", verb: "will believe", example: "They will believe our proposal is viable after the presentation." }
            ]
          },
          { 
            name: "Hold", 
            conjugations: [
              { subject: "I", verb: "will hold", example: "I will hold the door open for you." },
              { subject: "You", verb: "will hold", example: "You will hold the record for many years to come." },
              { subject: "He/She", verb: "will hold", example: "She will hold a press conference tomorrow." },
              { subject: "We", verb: "will hold", example: "We will hold our annual meeting in December." },
              { subject: "They", verb: "will hold", example: "They will hold discussions with union representatives." }
            ]
          },
          { 
            name: "Sell", 
            conjugations: [
              { subject: "I", verb: "will sell", example: "I will sell my old car before buying a new one." },
              { subject: "You", verb: "will sell", example: "You will sell more products with this marketing strategy." },
              { subject: "He/She", verb: "will sell", example: "He will sell his paintings at the art fair." },
              { subject: "We", verb: "will sell", example: "We will sell our house in the spring." },
              { subject: "They", verb: "will sell", example: "They will sell their business when they retire." }
            ]
          },
          { 
            name: "Pay", 
            conjugations: [
              { subject: "I", verb: "will pay", example: "I will pay for dinner tonight." },
              { subject: "You", verb: "will pay", example: "You will pay attention to these details in the future." },
              { subject: "He/She", verb: "will pay", example: "She will pay the bills at the end of the month." },
              { subject: "We", verb: "will pay", example: "We will pay for the damages caused." },
              { subject: "They", verb: "will pay", example: "They will pay a premium for quality service." }
            ]
          },
          { 
            name: "Open", 
            conjugations: [
              { subject: "I", verb: "will open", example: "I will open a savings account tomorrow." },
              { subject: "You", verb: "will open", example: "You will open the presentation with an introduction." },
              { subject: "He/She", verb: "will open", example: "He will open his restaurant in the spring." },
              { subject: "We", verb: "will open", example: "We will open the conference with a keynote speech." },
              { subject: "They", verb: "will open", example: "They will open their home to guests during the holidays." }
            ]
          },
          { 
            name: "Lose", 
            conjugations: [
              { subject: "I", verb: "will lose", example: "I will lose weight by exercising regularly." },
              { subject: "You", verb: "will lose", example: "You will lose interest if it takes too long." },
              { subject: "He/She", verb: "will lose", example: "She will lose the opportunity if she hesitates." },
              { subject: "We", verb: "will lose", example: "We will lose momentum if we stop now." },
              { subject: "They", verb: "will lose", example: "They will lose the game unless they improve their defense." }
            ]
          },
          { 
            name: "Wait", 
            conjugations: [
              { subject: "I", verb: "will wait", example: "I will wait for you at the entrance." },
              { subject: "You", verb: "will wait", example: "You will wait until everyone is seated before starting." },
              { subject: "He/She", verb: "will wait", example: "He will wait patiently for the results." },
              { subject: "We", verb: "will wait", example: "We will wait until the price drops before buying." },
              { subject: "They", verb: "will wait", example: "They will wait in line for tickets to the concert." }
            ]
          },
          { 
            name: "Serve", 
            conjugations: [
              { subject: "I", verb: "will serve", example: "I will serve on the committee next year." },
              { subject: "You", verb: "will serve", example: "You will serve as chairperson for the event." },
              { subject: "He/She", verb: "will serve", example: "She will serve refreshments after the presentation." },
              { subject: "We", verb: "will serve", example: "We will serve our community through volunteer work." },
              { subject: "They", verb: "will serve", example: "They will serve a traditional meal at the celebration." }
            ]
          },
          { 
            name: "Die", 
            conjugations: [
              { subject: "I", verb: "will die", example: "I will die happy knowing I made a difference." },
              { subject: "You", verb: "will die", example: "You will die laughing when you hear this story." },
              { subject: "He/She", verb: "will die", example: "The tradition will die out unless preserved." },
              { subject: "We", verb: "will die", example: "We will die trying rather than give up." },
              { subject: "They", verb: "will die", example: "The batteries will die if you leave them on." }
            ]
          },
          { 
            name: "Lead", 
            conjugations: [
              { subject: "I", verb: "will lead", example: "I will lead the team in the new project." },
              { subject: "You", verb: "will lead", example: "You will lead the discussion at tomorrow's meeting." },
              { subject: "He/She", verb: "will lead", example: "He will lead the expedition to Mount Everest." },
              { subject: "We", verb: "will lead", example: "We will lead by example in environmental practices." },
              { subject: "They", verb: "will lead", example: "They will lead the company in a new direction." }
            ]
          },
          { 
            name: "Break", 
            conjugations: [
              { subject: "I", verb: "will break", example: "I will break the news to them gently." },
              { subject: "You", verb: "will break", example: "You will break the record with more practice." },
              { subject: "He/She", verb: "will break", example: "She will break ground on the new building next month." },
              { subject: "We", verb: "will break", example: "We will break for lunch at noon." },
              { subject: "They", verb: "will break", example: "They will break the code if they work together." }
            ]
          },
          { 
            name: "Create", 
            conjugations: [
              { subject: "I", verb: "will create", example: "I will create a detailed plan for the project." },
              { subject: "You", verb: "will create", example: "You will create beautiful artwork with these tools." },
              { subject: "He/She", verb: "will create", example: "She will create a new menu for the restaurant." },
              { subject: "We", verb: "will create", example: "We will create opportunities for community involvement." },
              { subject: "They", verb: "will create", example: "They will create a website for their business." }
            ]
          },
          { 
            name: "Sleep", 
            conjugations: [
              { subject: "I", verb: "will sleep", example: "I will sleep early tonight to be fresh tomorrow." },
              { subject: "You", verb: "will sleep", example: "You will sleep better after exercising regularly." },
              { subject: "He/She", verb: "will sleep", example: "He will sleep through the night once he adjusts to the time zone." },
              { subject: "We", verb: "will sleep", example: "We will sleep in tents during our camping trip." },
              { subject: "They", verb: "will sleep", example: "They will sleep at the hotel near the airport." }
            ]
          },
          { 
            name: "Win", 
            conjugations: [
              { subject: "I", verb: "will win", example: "I will win the chess tournament with enough practice." },
              { subject: "You", verb: "will win", example: "You will win her over with your sincerity." },
              { subject: "He/She", verb: "will win", example: "She will win the scholarship if she applies." },
              { subject: "We", verb: "will win", example: "We will win this match if we play our best." },
              { subject: "They", verb: "will win", example: "They will win the contract based on their proposal." }
            ]
          },
          { 
            name: "Offer", 
            conjugations: [
              { subject: "I", verb: "will offer", example: "I will offer my assistance with the project." },
              { subject: "You", verb: "will offer", example: "You will offer a competitive price for the house." },
              { subject: "He/She", verb: "will offer", example: "He will offer suggestions during the brainstorming session." },
              { subject: "We", verb: "will offer", example: "We will offer a discount to returning customers." },
              { subject: "They", verb: "will offer", example: "They will offer free shipping for orders over $50." }
            ]
          },
          { 
            name: "Grow", 
            conjugations: [
              { subject: "I", verb: "will grow", example: "I will grow tomatoes in my garden this summer." },
              { subject: "You", verb: "will grow", example: "You will grow more confident with experience." },
              { subject: "He/She", verb: "will grow", example: "She will grow her hair long for the wedding." },
              { subject: "We", verb: "will grow", example: "We will grow our business by expanding online." },
              { subject: "They", verb: "will grow", example: "They will grow distant if they don't keep in touch." }
            ]
          },
          { 
            name: "Teach", 
            conjugations: [
              { subject: "I", verb: "will teach", example: "I will teach you how to play the guitar." },
              { subject: "You", verb: "will teach", example: "You will teach the new employee how to use the system." },
              { subject: "He/She", verb: "will teach", example: "He will teach English at the university next semester." },
              { subject: "We", verb: "will teach", example: "We will teach children about environmental conservation." },
              { subject: "They", verb: "will teach", example: "They will teach a workshop on creative writing." }
            ]
          },
          { 
            name: "Cook", 
            conjugations: [
              { subject: "I", verb: "will cook", example: "I will cook dinner for everyone tonight." },
              { subject: "You", verb: "will cook", example: "You will cook something special for the celebration." },
              { subject: "He/She", verb: "will cook", example: "She will cook traditional recipes for the cultural festival." },
              { subject: "We", verb: "will cook", example: "We will cook together for the fundraising event." },
              { subject: "They", verb: "will cook", example: "They will cook a feast for the holiday gathering." }
            ]
          },
          { 
            name: "Spend", 
            conjugations: [
              { subject: "I", verb: "will spend", example: "I will spend the weekend at the beach." },
              { subject: "You", verb: "will spend", example: "You will spend less on utilities with these energy-saving tips." },
              { subject: "He/She", verb: "will spend", example: "He will spend time researching before making a decision." },
              { subject: "We", verb: "will spend", example: "We will spend our vacation in the mountains this year." },
              { subject: "They", verb: "will spend", example: "They will spend millions upgrading their facilities." }
            ]
          },
          { 
            name: "Draw", 
            conjugations: [
              { subject: "I", verb: "will draw", example: "I will draw a map to help you find our house." },
              { subject: "You", verb: "will draw", example: "You will draw inspiration from your travels." },
              { subject: "He/She", verb: "will draw", example: "She will draw the illustrations for the children's book." },
              { subject: "We", verb: "will draw", example: "We will draw up a contract for the partnership." },
              { subject: "They", verb: "will draw", example: "They will draw attention with their innovative design." }
            ]
          },
          { 
            name: "Continue", 
            conjugations: [
              { subject: "I", verb: "will continue", example: "I will continue my education next year." },
              { subject: "You", verb: "will continue", example: "You will continue to improve with practice." },
              { subject: "He/She", verb: "will continue", example: "He will continue working despite the challenges." },
              { subject: "We", verb: "will continue", example: "We will continue our discussion tomorrow." },
              { subject: "They", verb: "will continue", example: "They will continue the tradition for generations." }
            ]
          },
          { 
            name: "Sit", 
            conjugations: [
              { subject: "I", verb: "will sit", example: "I will sit in the front row at the concert." },
              { subject: "You", verb: "will sit", example: "You will sit next to the guest of honor at dinner." },
              { subject: "He/She", verb: "will sit", example: "She will sit on the panel of experts." },
              { subject: "We", verb: "will sit", example: "We will sit down and discuss this matter calmly." },
              { subject: "They", verb: "will sit", example: "They will sit for the exam in June." }
            ]
          },
          { 
            name: "Rise", 
            conjugations: [
              { subject: "I", verb: "will rise", example: "I will rise early to catch the first train." },
              { subject: "You", verb: "will rise", example: "You will rise to the occasion when challenged." },
              { subject: "He/She", verb: "will rise", example: "He will rise through the ranks with his talent." },
              { subject: "We", verb: "will rise", example: "We will rise above these petty disagreements." },
              { subject: "They", verb: "will rise", example: "They will rise to prominence in their field." }
            ]
          },
          { 
            name: "Drink", 
            conjugations: [
              { subject: "I", verb: "will drink", example: "I will drink more water to stay hydrated." },
              { subject: "You", verb: "will drink", example: "You will drink a toast to the newlyweds." },
              { subject: "He/She", verb: "will drink", example: "She will drink herbal tea instead of coffee." },
              { subject: "We", verb: "will drink", example: "We will drink responsibly at the company party." },
              { subject: "They", verb: "will drink", example: "They will drink fresh juice with their breakfast." }
            ]
          },
          { 
            name: "Wear", 
            conjugations: [
              { subject: "I", verb: "will wear", example: "I will wear my new suit to the interview." },
              { subject: "You", verb: "will wear", example: "You will wear comfortable shoes for the walking tour." },
              { subject: "He/She", verb: "will wear", example: "He will wear a costume to the Halloween party." },
              { subject: "We", verb: "will wear", example: "We will wear matching t-shirts for the team event." },
              { subject: "They", verb: "will wear", example: "They will wear traditional clothing for the ceremony." }
            ]
          },
          { 
            name: "Choose", 
            conjugations: [
              { subject: "I", verb: "will choose", example: "I will choose the best candidate for the position." },
              { subject: "You", verb: "will choose", example: "You will choose wisely based on experience." },
              { subject: "He/She", verb: "will choose", example: "She will choose between the two job offers this week." },
              { subject: "We", verb: "will choose", example: "We will choose a name for the baby after birth." },
              { subject: "They", verb: "will choose", example: "They will choose the venue for the conference." }
            ]
          },
          { 
            name: "Travel", 
            conjugations: [
              { subject: "I", verb: "will travel", example: "I will travel to Japan next summer." },
              { subject: "You", verb: "will travel", example: "You will travel more comfortably in business class." },
              { subject: "He/She", verb: "will travel", example: "He will travel across Europe by train." },
              { subject: "We", verb: "will travel", example: "We will travel light with just carry-on luggage." },
              { subject: "They", verb: "will travel", example: "They will travel to remote villages for their research." }
            ]
          },
          { 
            name: "Forget", 
            conjugations: [
              { subject: "I", verb: "will forget", example: "I will forget the incident and move forward." },
              { subject: "You", verb: "will forget", example: "You will forget these struggles once you succeed." },
              { subject: "He/She", verb: "will forget", example: "She will forget to call unless you remind her." },
              { subject: "We", verb: "will forget", example: "We will forget our differences and work together." },
              { subject: "They", verb: "will forget", example: "They will forget about the delay once they see the results." }
            ]
          },
          { 
            name: "Smile", 
            conjugations: [
              { subject: "I", verb: "will smile", example: "I will smile through the challenges." },
              { subject: "You", verb: "will smile", example: "You will smile when you see the surprise." },
              { subject: "He/She", verb: "will smile", example: "She will smile at the memories for years to come." },
              { subject: "We", verb: "will smile", example: "We will smile for the group photo." },
              { subject: "They", verb: "will smile", example: "They will smile politely at the guests." }
            ]
          },
          { 
            name: "Finish", 
            conjugations: [
              { subject: "I", verb: "will finish", example: "I will finish the report by Friday." },
              { subject: "You", verb: "will finish", example: "You will finish your degree this year." },
              { subject: "He/She", verb: "will finish", example: "She will finish the marathon in record time." },
              { subject: "We", verb: "will finish", example: "We will finish the project before the deadline." },
              { subject: "They", verb: "will finish", example: "They will finish building the house next month." }
            ]
          },
          { 
            name: "Decide", 
            conjugations: [
              { subject: "I", verb: "will decide", example: "I will decide on a career path after graduation." },
              { subject: "You", verb: "will decide", example: "You will decide what's best for your family." },
              { subject: "He/She", verb: "will decide", example: "He will decide between the two job offers this week." },
              { subject: "We", verb: "will decide", example: "We will decide on a venue for the event soon." },
              { subject: "They", verb: "will decide", example: "They will decide the winner after reviewing all entries." }
            ]
          },
          { 
            name: "Explain", 
            conjugations: [
              { subject: "I", verb: "will explain", example: "I will explain the procedure step by step." },
              { subject: "You", verb: "will explain", example: "You will explain your research at the conference." },
              { subject: "He/She", verb: "will explain", example: "She will explain the policy changes to the team." },
              { subject: "We", verb: "will explain", example: "We will explain our decision in tomorrow's meeting." },
              { subject: "They", verb: "will explain", example: "They will explain the delay to the customers." }
            ]
          },
          { 
            name: "Develop", 
            conjugations: [
              { subject: "I", verb: "will develop", example: "I will develop a new strategy for the campaign." },
              { subject: "You", verb: "will develop", example: "You will develop strong leadership skills in this role." },
              { subject: "He/She", verb: "will develop", example: "He will develop the software for our new product." },
              { subject: "We", verb: "will develop", example: "We will develop better communication methods." },
              { subject: "They", verb: "will develop", example: "They will develop a prototype by next quarter." }
            ]
          },
          { 
            name: "Accept", 
            conjugations: [
              { subject: "I", verb: "will accept", example: "I will accept the job offer if the terms are right." },
              { subject: "You", verb: "will accept", example: "You will accept the reality of the situation eventually." },
              { subject: "He/She", verb: "will accept", example: "She will accept the award on behalf of the team." },
              { subject: "We", verb: "will accept", example: "We will accept applications until the end of the month." },
              { subject: "They", verb: "will accept", example: "They will accept credit cards for payment." }
            ]
          },
          { 
            name: "Drop", 
            conjugations: [
              { subject: "I", verb: "will drop", example: "I will drop by your office tomorrow." },
              { subject: "You", verb: "will drop", example: "You will drop the class if it's too challenging." },
              { subject: "He/She", verb: "will drop", example: "He will drop the price to attract more customers." },
              { subject: "We", verb: "will drop", example: "We will drop everything to help you in an emergency." },
              { subject: "They", verb: "will drop", example: "They will drop hints about the surprise party." }
            ]
          },
          { 
            name: "Present", 
            conjugations: [
              { subject: "I", verb: "will present", example: "I will present my findings at the conference." },
              { subject: "You", verb: "will present", example: "You will present your business plan to potential investors." },
              { subject: "He/She", verb: "will present", example: "She will present the award to the winner." },
              { subject: "We", verb: "will present", example: "We will present our proposal next week." },
              { subject: "They", verb: "will present", example: "They will present a united front at the negotiations." }
            ]
          },
          { 
            name: "Plan", 
            conjugations: [
              { subject: "I", verb: "will plan", example: "I will plan our vacation carefully." },
              { subject: "You", verb: "will plan", example: "You will plan the event down to the last detail." },
              { subject: "He/She", verb: "will plan", example: "He will plan a surprise for her birthday." },
              { subject: "We", verb: "will plan", example: "We will plan for various scenarios in our strategy." },
              { subject: "They", verb: "will plan", example: "They will plan the curriculum for next year." }
            ]
          },
          { 
            name: "Argue", 
            conjugations: [
              { subject: "I", verb: "will argue", example: "I will argue for better working conditions." },
              { subject: "You", verb: "will argue", example: "You will argue your case convincingly in court." },
              { subject: "He/She", verb: "will argue", example: "She will argue her point in the debate." },
              { subject: "We", verb: "will argue", example: "We will argue against the proposed changes." },
              { subject: "They", verb: "will argue", example: "They will argue that the policy is unfair." }
            ]
          },
          { 
            name: "Support", 
            conjugations: [
              { subject: "I", verb: "will support", example: "I will support your decision whatever you choose." },
              { subject: "You", verb: "will support", example: "You will support the team through the transition." },
              { subject: "He/She", verb: "will support", example: "He will support the campaign financially." },
              { subject: "We", verb: "will support", example: "We will support local businesses with our purchases." },
              { subject: "They", verb: "will support", example: "They will support the charity with volunteer hours." }
            ]
          },
          { 
            name: "Jump", 
            conjugations: [
              { subject: "I", verb: "will jump", example: "I will jump at the opportunity to study abroad." },
              { subject: "You", verb: "will jump", example: "You will jump to conclusions if you don't hear the full story." },
              { subject: "He/She", verb: "will jump", example: "She will jump into the pool to cool off." },
              { subject: "We", verb: "will jump", example: "We will jump on the trampoline at the party." },
              { subject: "They", verb: "will jump", example: "They will jump for joy when they hear the news." }
            ]
          },
          { 
            name: "Share", 
            conjugations: [
              { subject: "I", verb: "will share", example: "I will share my notes with you after class." },
              { subject: "You", verb: "will share", example: "You will share your experiences at the conference." },
              { subject: "He/She", verb: "will share", example: "He will share the responsibility with the team." },
              { subject: "We", verb: "will share", example: "We will share the cost of the gift equally." },
              { subject: "They", verb: "will share", example: "They will share their research findings at the symposium." }
            ]
          },
          { 
            name: "Pass", 
            conjugations: [
              { subject: "I", verb: "will pass", example: "I will pass my driving test on the first attempt." },
              { subject: "You", verb: "will pass", example: "You will pass the entrance exam with preparation." },
              { subject: "He/She", verb: "will pass", example: "She will pass the message to the manager." },
              { subject: "We", verb: "will pass", example: "We will pass through the town on our road trip." },
              { subject: "They", verb: "will pass", example: "They will pass the legislation after debate." }
            ]
          },
          { 
            name: "Save", 
            conjugations: [
              { subject: "I", verb: "will save", example: "I will save money for a down payment." },
              { subject: "You", verb: "will save", example: "You will save time by taking this shortcut." },
              { subject: "He/She", verb: "will save", example: "He will save the document before closing the program." },
              { subject: "We", verb: "will save", example: "We will save seats for you at the concert." },
              { subject: "They", verb: "will save", example: "They will save endangered species through conservation." }
            ]
          },
          { 
            name: "Control", 
            conjugations: [
              { subject: "I", verb: "will control", example: "I will control the budget for this project." },
              { subject: "You", verb: "will control", example: "You will control the presentation with this remote." },
              { subject: "He/She", verb: "will control", example: "She will control access to the restricted area." },
              { subject: "We", verb: "will control", example: "We will control the temperature in the laboratory." },
              { subject: "They", verb: "will control", example: "They will control traffic during the parade." }
            ]
          },
          { 
            name: "Wonder", 
            conjugations: [
              { subject: "I", verb: "will wonder", example: "I will wonder what might have been." },
              { subject: "You", verb: "will wonder", example: "You will wonder why you waited so long." },
              { subject: "He/She", verb: "will wonder", example: "He will wonder about the meaning of the poem." },
              { subject: "We", verb: "will wonder", example: "We will wonder how they managed to achieve so much." },
              { subject: "They", verb: "will wonder", example: "They will wonder where to go for their anniversary." }
            ]
          },
          { 
            name: "Include", 
            conjugations: [
              { subject: "I", verb: "will include", example: "I will include your suggestions in the final report." },
              { subject: "You", verb: "will include", example: "You will include everyone in the celebration." },
              { subject: "He/She", verb: "will include", example: "She will include detailed instructions with the product." },
              { subject: "We", verb: "will include", example: "We will include a free gift with each purchase." },
              { subject: "They", verb: "will include", example: "They will include diverse perspectives in the discussion." }
            ]
          },
          { 
            name: "Agree", 
            conjugations: [
              { subject: "I", verb: "will agree", example: "I will agree to the terms if they're reasonable." },
              { subject: "You", verb: "will agree", example: "You will agree that this was the best solution." },
              { subject: "He/She", verb: "will agree", example: "He will agree to participate in the study." },
              { subject: "We", verb: "will agree", example: "We will agree on a time that works for everyone." },
              { subject: "They", verb: "will agree", example: "They will agree to the compromise after negotiation." }
            ]
          },
          { 
            name: "Return", 
            conjugations: [
              { subject: "I", verb: "will return", example: "I will return your book tomorrow." },
              { subject: "You", verb: "will return", example: "You will return from your vacation next week." },
              { subject: "He/She", verb: "will return", example: "She will return to work after maternity leave." },
              { subject: "We", verb: "will return", example: "We will return to this issue at our next meeting." },
              { subject: "They", verb: "will return", example: "They will return the car before the rental period ends." }
            ]
          },
          { 
            name: "Describe", 
            conjugations: [
              { subject: "I", verb: "will describe", example: "I will describe the situation in detail in my report." },
              { subject: "You", verb: "will describe", example: "You will describe your symptoms to the doctor." },
              { subject: "He/She", verb: "will describe", example: "She will describe the suspect to the police officer." },
              { subject: "We", verb: "will describe", example: "We will describe our product features in the brochure." },
              { subject: "They", verb: "will describe", example: "They will describe their adventure in their blog." }
            ]
          },
          { 
            name: "Hope", 
            conjugations: [
              { subject: "I", verb: "will hope", example: "I will hope for better weather tomorrow." },
              { subject: "You", verb: "will hope", example: "You will hope to hear good news soon." },
              { subject: "He/She", verb: "will hope", example: "She will hope for a quick recovery." },
              { subject: "We", verb: "will hope", example: "We will hope for the best outcome." },
              { subject: "They", verb: "will hope", example: "They will hope their application is successful." }
            ]
          },
          { 
            name: "Allow", 
            conjugations: [
              { subject: "I", verb: "will allow", example: "I will allow extra time for questions." },
              { subject: "You", verb: "will allow", example: "You will allow guests to bring their pets." },
              { subject: "He/She", verb: "will allow", example: "He will allow students to resubmit their work." },
              { subject: "We", verb: "will allow", example: "We will allow remote working two days a week." },
              { subject: "They", verb: "will allow", example: "They will allow photography during the tour." }
            ]
          },
          { 
            name: "Visit", 
            conjugations: [
              { subject: "I", verb: "will visit", example: "I will visit my grandparents this weekend." },
              { subject: "You", verb: "will visit", example: "You will visit the museum on your trip." },
              { subject: "He/She", verb: "will visit", example: "She will visit several countries on her sabbatical." },
              { subject: "We", verb: "will visit", example: "We will visit the new office next month." },
              { subject: "They", verb: "will visit", example: "They will visit potential suppliers in Asia." }
            ]
          },
          { 
            name: "Complete", 
            conjugations: [
              { subject: "I", verb: "will complete", example: "I will complete the assignment before the deadline." },
              { subject: "You", verb: "will complete", example: "You will complete your training by December." },
              { subject: "He/She", verb: "will complete", example: "He will complete the marathon despite his injury." },
              { subject: "We", verb: "will complete", example: "We will complete the renovation on schedule." },
              { subject: "They", verb: "will complete", example: "They will complete the audit by next week." }
            ]
          },
          { 
            name: "Love", 
            conjugations: [
              { subject: "I", verb: "will love", example: "I will love seeing you perform on stage." },
              { subject: "You", verb: "will love", example: "You will love the view from the mountaintop." },
              { subject: "He/She", verb: "will love", example: "She will love the surprise party we're planning." },
              { subject: "We", verb: "will love", example: "We will love having you stay with us." },
              { subject: "They", verb: "will love", example: "They will love the gift you've chosen." }
            ]
          },
          { 
            name: "Join", 
            conjugations: [
              { subject: "I", verb: "will join", example: "I will join the team meeting remotely." },
              { subject: "You", verb: "will join", example: "You will join the club after the orientation." },
              { subject: "He/She", verb: "will join", example: "He will join us for dinner later." },
              { subject: "We", verb: "will join", example: "We will join forces with another organization." },
              { subject: "They", verb: "will join", example: "They will join the protest against climate change." }
            ]
          },
          { 
            name: "Carry", 
            conjugations: [
              { subject: "I", verb: "will carry", example: "I will carry your luggage to the car." },
              { subject: "You", verb: "will carry", example: "You will carry the responsibility well." },
              { subject: "He/She", verb: "will carry", example: "She will carry the torch in the relay." },
              { subject: "We", verb: "will carry", example: "We will carry on the family tradition." },
              { subject: "They", verb: "will carry", example: "They will carry supplies to the campsite." }
            ]
          },
          { 
            name: "Realize", 
            conjugations: [
              { subject: "I", verb: "will realize", example: "I will realize my dream of becoming a doctor." },
              { subject: "You", verb: "will realize", example: "You will realize the importance of this decision later." },
              { subject: "He/She", verb: "will realize", example: "He will realize his mistake eventually." },
              { subject: "We", verb: "will realize", example: "We will realize significant savings with this new system." },
              { subject: "They", verb: "will realize", example: "They will realize how valuable your contribution was." }
            ]
          },
          { 
            name: "Dance", 
            conjugations: [
              { subject: "I", verb: "will dance", example: "I will dance at your wedding celebration." },
              { subject: "You", verb: "will dance", example: "You will dance better after taking lessons." },
              { subject: "He/She", verb: "will dance", example: "She will dance in the recital next month." },
              { subject: "We", verb: "will dance", example: "We will dance until midnight at the party." },
              { subject: "They", verb: "will dance", example: "They will dance traditional dances at the cultural festival." }
            ]
          },
          { 
            name: "Wish", 
            conjugations: [
              { subject: "I", verb: "will wish", example: "I will wish upon a star tonight." },
              { subject: "You", verb: "will wish", example: "You will wish you had brought a jacket." },
              { subject: "He/She", verb: "will wish", example: "He will wish his sister a happy birthday." },
              { subject: "We", verb: "will wish", example: "We will wish you all the best in your new role." },
              { subject: "They", verb: "will wish", example: "They will wish they had saved more for retirement." }
            ]
          },
          { 
            name: "Admit", 
            conjugations: [
              { subject: "I", verb: "will admit", example: "I will admit my mistake and apologize." },
              { subject: "You", verb: "will admit", example: "You will admit that this approach works better." },
              { subject: "He/She", verb: "will admit", example: "She will admit students to the program based on merit." },
              { subject: "We", verb: "will admit", example: "We will admit our role in the miscommunication." },
              { subject: "They", verb: "will admit", example: "They will admit defeat gracefully." }
            ]
          },
          { 
            name: "Fix", 
            conjugations: [
              { subject: "I", verb: "will fix", example: "I will fix the leaky faucet this weekend." },
              { subject: "You", verb: "will fix", example: "You will fix the problem if you focus on it." },
              { subject: "He/She", verb: "will fix", example: "He will fix the car before the road trip." },
              { subject: "We", verb: "will fix", example: "We will fix dinner for everyone tonight." },
              { subject: "They", verb: "will fix", example: "They will fix the date for the conference soon." }
            ]
          },
          { 
            name: "Succeed", 
            conjugations: [
              { subject: "I", verb: "will succeed", example: "I will succeed with hard work and determination." },
              { subject: "You", verb: "will succeed", example: "You will succeed where others have failed." },
              { subject: "He/She", verb: "will succeed", example: "She will succeed the current CEO next year." },
              { subject: "We", verb: "will succeed", example: "We will succeed if we work together." },
              { subject: "They", verb: "will succeed", example: "They will succeed despite the challenges." }
            ]
          },
          { 
            name: "Enjoy", 
            conjugations: [
              { subject: "I", verb: "will enjoy", example: "I will enjoy the concert tonight." },
              { subject: "You", verb: "will enjoy", example: "You will enjoy reading this book." },
              { subject: "He/She", verb: "will enjoy", example: "She will enjoy her vacation in Italy." },
              { subject: "We", verb: "will enjoy", example: "We will enjoy spending time with family during the holidays." },
              { subject: "They", verb: "will enjoy", example: "They will enjoy the benefits of their hard work." }
            ]
          },
          { 
            name: "Clean", 
            conjugations: [
              { subject: "I", verb: "will clean", example: "I will clean the house before guests arrive." },
              { subject: "You", verb: "will clean", example: "You will clean your room after the party." },
              { subject: "He/She", verb: "will clean", example: "He will clean the car this weekend." },
              { subject: "We", verb: "will clean", example: "We will clean the beach as volunteers." },
              { subject: "They", verb: "will clean", example: "They will clean the data before analysis." }
            ]
          },
          { 
            name: "Achieve", 
            conjugations: [
              { subject: "I", verb: "will achieve", example: "I will achieve my goals with consistent effort." },
              { subject: "You", verb: "will achieve", example: "You will achieve great things in your career." },
              { subject: "He/She", verb: "will achieve", example: "She will achieve her dream of becoming an author." },
              { subject: "We", verb: "will achieve", example: "We will achieve better results with this approach." },
              { subject: "They", verb: "will achieve", example: "They will achieve carbon neutrality by 2030." }
            ]
          },
          { 
            name: "Cover", 
            conjugations: [
              { subject: "I", verb: "will cover", example: "I will cover all the topics in the syllabus." },
              { subject: "You", verb: "will cover", example: "You will cover more ground if you follow this route." },
              { subject: "He/She", verb: "will cover", example: "She will cover the event for the newspaper." },
              { subject: "We", verb: "will cover", example: "We will cover the expenses for your trip." },
              { subject: "They", verb: "will cover", example: "They will cover the furniture during the renovation." }
            ]
          },
          { 
            name: "Avoid", 
            conjugations: [
              { subject: "I", verb: "will avoid", example: "I will avoid rush hour traffic by leaving early." },
              { subject: "You", verb: "will avoid", example: "You will avoid many problems if you plan ahead." },
              { subject: "He/She", verb: "will avoid", example: "He will avoid making the same mistake twice." },
              { subject: "We", verb: "will avoid", example: "We will avoid unnecessary expenses during the recession." },
              { subject: "They", verb: "will avoid", example: "They will avoid the topic at the meeting." }
            ]
          },
          { 
            name: "Raise", 
            conjugations: [
              { subject: "I", verb: "will raise", example: "I will raise the issue at the next meeting." },
              { subject: "You", verb: "will raise", example: "You will raise funds for the charity event." },
              { subject: "He/She", verb: "will raise", example: "She will raise her children to be independent." },
              { subject: "We", verb: "will raise", example: "We will raise awareness about this important cause." },
              { subject: "They", verb: "will raise", example: "They will raise their prices due to inflation." }
            ]
          },
          { 
            name: "Experience", 
            conjugations: [
              { subject: "I", verb: "will experience", example: "I will experience many new cultures during my travels." },
              { subject: "You", verb: "will experience", example: "You will experience some discomfort after the procedure." },
              { subject: "He/She", verb: "will experience", example: "He will experience the benefits of regular exercise." },
              { subject: "We", verb: "will experience", example: "We will experience delays due to the weather." },
              { subject: "They", verb: "will experience", example: "They will experience virtual reality for the first time." }
            ]
          },
          { 
            name: "Identify", 
            conjugations: [
              { subject: "I", verb: "will identify", example: "I will identify the problem areas in the report." },
              { subject: "You", verb: "will identify", example: "You will identify with the main character in the novel." },
              { subject: "He/She", verb: "will identify", example: "She will identify potential candidates for the position." },
              { subject: "We", verb: "will identify", example: "We will identify goals for the next quarter." },
              { subject: "They", verb: "will identify", example: "They will identify the species of bird from its markings." }
            ]
          },
          { 
            name: "Prepare", 
            conjugations: [
              { subject: "I", verb: "will prepare", example: "I will prepare a detailed proposal for the project." },
              { subject: "You", verb: "will prepare", example: "You will prepare for the exam over the weekend." },
              { subject: "He/She", verb: "will prepare", example: "He will prepare dinner for the guests." },
              { subject: "We", verb: "will prepare", example: "We will prepare a strategy for market expansion." },
              { subject: "They", verb: "will prepare", example: "They will prepare the venue for the conference." }
            ]
          },
          { 
            name: "Laugh", 
            conjugations: [
              { subject: "I", verb: "will laugh", example: "I will laugh at your jokes, even the bad ones." },
              { subject: "You", verb: "will laugh", example: "You will laugh when you see the comedy show." },
              { subject: "He/She", verb: "will laugh", example: "She will laugh at the funny story." },
              { subject: "We", verb: "will laugh", example: "We will laugh about this someday." },
              { subject: "They", verb: "will laugh", example: "They will laugh at the absurdity of the situation." }
            ]
          },
          { 
            name: "Manage", 
            conjugations: [
              { subject: "I", verb: "will manage", example: "I will manage the project from start to finish." },
              { subject: "You", verb: "will manage", example: "You will manage your time better with a schedule." },
              { subject: "He/She", verb: "will manage", example: "He will manage the department during her absence." },
              { subject: "We", verb: "will manage", example: "We will manage to complete the work on time." },
              { subject: "They", verb: "will manage", example: "They will manage the crisis effectively." }
            ]
          },
          { 
            name: "Enter", 
            conjugations: [
              { subject: "I", verb: "will enter", example: "I will enter the competition next year." },
              { subject: "You", verb: "will enter", example: "You will enter the building through the main entrance." },
              { subject: "He/She", verb: "will enter", example: "She will enter medical school in the fall." },
              { subject: "We", verb: "will enter", example: "We will enter the market with a new product." },
              { subject: "They", verb: "will enter", example: "They will enter into negotiations next week." }
            ]
          },
          { 
            name: "Care", 
            conjugations: [
              { subject: "I", verb: "will care", example: "I will care for your plants while you're away." },
              { subject: "You", verb: "will care", example: "You will care about this issue once you understand it." },
              { subject: "He/She", verb: "will care", example: "He will care for his elderly parents." },
              { subject: "We", verb: "will care", example: "We will care about the environment by recycling." },
              { subject: "They", verb: "will care", example: "They will care for the animals at the shelter." }
            ]
          },
          { 
            name: "Solve", 
            conjugations: [
              { subject: "I", verb: "will solve", example: "I will solve this puzzle before bedtime." },
              { subject: "You", verb: "will solve", example: "You will solve the equation if you apply the formula." },
              { subject: "He/She", verb: "will solve", example: "She will solve the case with the new evidence." },
              { subject: "We", verb: "will solve", example: "We will solve the problem together." },
              { subject: "They", verb: "will solve", example: "They will solve the mystery in the final chapter." }
            ]
          },
          { 
            name: "Produce", 
            conjugations: [
              { subject: "I", verb: "will produce", example: "I will produce a documentary about climate change." },
              { subject: "You", verb: "will produce", example: "You will produce excellent results with this method." },
              { subject: "He/She", verb: "will produce", example: "He will produce the next album for the band." },
              { subject: "We", verb: "will produce", example: "We will produce enough food for everyone." },
              { subject: "They", verb: "will produce", example: "They will produce electric cars in their new factory." }
            ]
          },
          { 
            name: "Close", 
            conjugations: [
              { subject: "I", verb: "will close", example: "I will close the account at the end of the month." },
              { subject: "You", verb: "will close", example: "You will close the deal if you persevere." },
              { subject: "He/She", verb: "will close", example: "She will close the store at 9 PM." },
              { subject: "We", verb: "will close", example: "We will close for renovations next week." },
              { subject: "They", verb: "will close", example: "They will close the investigation when they find evidence." }
            ]
          },
          { 
            name: "Notice", 
            conjugations: [
              { subject: "I", verb: "will notice", example: "I will notice any changes in the document." },
              { subject: "You", verb: "will notice", example: "You will notice the difference after the upgrade." },
              { subject: "He/She", verb: "will notice", example: "He will notice your new haircut immediately." },
              { subject: "We", verb: "will notice", example: "We will notice improvements in performance." },
              { subject: "They", verb: "will notice", example: "They will notice the error if they look carefully." }
            ]
          },
          { 
            name: "Imagine", 
            conjugations: [
              { subject: "I", verb: "will imagine", example: "I will imagine a better future for our community." },
              { subject: "You", verb: "will imagine", example: "You will imagine many uses for this versatile tool." },
              { subject: "He/She", verb: "will imagine", example: "She will imagine the finished project before starting." },
              { subject: "We", verb: "will imagine", example: "We will imagine various scenarios during planning." },
              { subject: "They", verb: "will imagine", example: "They will imagine new worlds in their science fiction novel." }
            ]
          },
          { 
            name: "Replace", 
            conjugations: [
              { subject: "I", verb: "will replace", example: "I will replace the broken window tomorrow." },
              { subject: "You", verb: "will replace", example: "You will replace the battery in your smoke detector." },
              { subject: "He/She", verb: "will replace", example: "He will replace the retiring employee next month." },
              { subject: "We", verb: "will replace", example: "We will replace outdated equipment with newer models." },
              { subject: "They", verb: "will replace", example: "They will replace animal testing with alternative methods." }
            ]
          },
          { 
            name: "Improve", 
            conjugations: [
              { subject: "I", verb: "will improve", example: "I will improve my language skills during my stay abroad." },
              { subject: "You", verb: "will improve", example: "You will improve with practice and feedback." },
              { subject: "He/She", verb: "will improve", example: "She will improve the design based on user testing." },
              { subject: "We", verb: "will improve", example: "We will improve our services based on customer feedback." },
              { subject: "They", verb: "will improve", example: "They will improve working conditions for employees." }
            ]
          },
          { 
            name: "Apply", 
            conjugations: [
              { subject: "I", verb: "will apply", example: "I will apply for the scholarship next semester." },
              { subject: "You", verb: "will apply", example: "You will apply these principles in your work." },
              { subject: "He/She", verb: "will apply", example: "He will apply a fresh coat of paint to the walls." },
              { subject: "We", verb: "will apply", example: "We will apply new methods to solve old problems." },
              { subject: "They", verb: "will apply", example: "They will apply for funding for their research project." }
            ]
          },
          { 
            name: "Report", 
            conjugations: [
              { subject: "I", verb: "will report", example: "I will report the incident to management." },
              { subject: "You", verb: "will report", example: "You will report directly to the vice president." },
              { subject: "He/She", verb: "will report", example: "She will report on the conference for the newspaper." },
              { subject: "We", verb: "will report", example: "We will report our findings at the next meeting." },
              { subject: "They", verb: "will report", example: "They will report any suspicious activity to security." }
            ]
          },
          { 
            name: "Listen", 
            conjugations: [
              { subject: "I", verb: "will listen", example: "I will listen to your concerns carefully." },
              { subject: "You", verb: "will listen", example: "You will listen to the audiobook during your commute." },
              { subject: "He/She", verb: "will listen", example: "He will listen to expert advice before deciding." },
              { subject: "We", verb: "will listen", example: "We will listen to feedback from all stakeholders." },
              { subject: "They", verb: "will listen", example: "They will listen to the lecture attentively." }
            ]
          },
          { 
            name: "Discover", 
            conjugations: [
              { subject: "I", verb: "will discover", example: "I will discover new talents through this experience." },
              { subject: "You", verb: "will discover", example: "You will discover hidden gems in the old neighborhood." },
              { subject: "He/She", verb: "will discover", example: "She will discover the answer through research." },
              { subject: "We", verb: "will discover", example: "We will discover innovative solutions through collaboration." },
              { subject: "They", verb: "will discover", example: "They will discover ancient artifacts during the excavation." }
            ]
          },
          { 
            name: "Protect", 
            conjugations: [
              { subject: "I", verb: "will protect", example: "I will protect your privacy when handling your data." },
              { subject: "You", verb: "will protect", example: "You will protect your skin from the sun with sunscreen." },
              { subject: "He/She", verb: "will protect", example: "He will protect the endangered species in the reserve." },
              { subject: "We", verb: "will protect", example: "We will protect our environment for future generations." },
              { subject: "They", verb: "will protect", example: "They will protect their intellectual property rights." }
            ]
          },
          { 
            name: "Occur", 
            conjugations: [
              { subject: "I", verb: "will occur", example: "It will occur to me later, I'm sure." },
              { subject: "You", verb: "will occur", example: "It will occur to you when you least expect it." },
              { subject: "He/She", verb: "will occur", example: "It will occur to her that she forgot something." },
              { subject: "We", verb: "will occur", example: "It will occur to us during the brainstorming session." },
              { subject: "They", verb: "will occur", example: "Changes will occur gradually over time." }
            ]
          },
          { 
            name: "Fight", 
            conjugations: [
              { subject: "I", verb: "will fight", example: "I will fight for what I believe is right." },
              { subject: "You", verb: "will fight", example: "You will fight against injustice wherever you see it." },
              { subject: "He/She", verb: "will fight", example: "She will fight to protect the rights of minorities." },
              { subject: "We", verb: "will fight", example: "We will fight to keep the community center open." },
              { subject: "They", verb: "will fight", example: "They will fight the new regulation in court." }
            ]
          },
          { 
            name: "Remove", 
            conjugations: [
              { subject: "I", verb: "will remove", example: "I will remove the stain from your shirt." },
              { subject: "You", verb: "will remove", example: "You will remove all obstacles in your path." },
              { subject: "He/She", verb: "will remove", example: "She will remove the old wallpaper before painting." },
              { subject: "We", verb: "will remove", example: "We will remove unnecessary steps from the process." },
              { subject: "They", verb: "will remove", example: "They will remove the damaged furniture from the room." }
            ]
          },
          { 
            name: "Discuss", 
            conjugations: [
              { subject: "I", verb: "will discuss", example: "I will discuss your performance in our meeting tomorrow." },
              { subject: "You", verb: "will discuss", example: "You will discuss the proposal with the team." },
              { subject: "He/She", verb: "will discuss", example: "He will discuss the terms of the agreement with his lawyer." },
              { subject: "We", verb: "will discuss", example: "We will discuss all options before making a decision." },
              { subject: "They", verb: "will discuss", example: "They will discuss budget allocations at the next meeting." }
            ]
          },
          { 
            name: "Face", 
            conjugations: [
              { subject: "I", verb: "will face", example: "I will face my fears and try skydiving." },
              { subject: "You", verb: "will face", example: "You will face some challenges during the transition." },
              { subject: "He/She", verb: "will face", example: "She will face the consequences of her actions." },
              { subject: "We", verb: "will face", example: "We will face the competition with confidence." },
              { subject: "They", verb: "will face", example: "They will face each other in the championship game." }
            ]
          },
          { 
            name: "Cut", 
            conjugations: [
              { subject: "I", verb: "will cut", example: "I will cut my hair short for the summer." },
              { subject: "You", verb: "will cut", example: "You will cut expenses to stay within budget." },
              { subject: "He/She", verb: "will cut", example: "He will cut the ribbon at the grand opening ceremony." },
              { subject: "We", verb: "will cut", example: "We will cut through the park to save time." },
              { subject: "They", verb: "will cut", example: "They will cut back on staff during the slow season." }
            ]
          },
          { 
            name: "Miss", 
            conjugations: [
              { subject: "I", verb: "will miss", example: "I will miss you while you're away." },
              { subject: "You", verb: "will miss", example: "You will miss the deadline if you don't hurry." },
              { subject: "He/She", verb: "will miss", example: "She will miss her train if she doesn't leave now." },
              { subject: "We", verb: "will miss", example: "We will miss having you on the team." },
              { subject: "They", verb: "will miss", example: "They will miss the opportunity if they hesitate." }
            ]
          },
          { 
            name: "Reduce", 
            conjugations: [
              { subject: "I", verb: "will reduce", example: "I will reduce my sugar intake for better health." },
              { subject: "You", verb: "will reduce", example: "You will reduce errors with this new system." },
              { subject: "He/She", verb: "will reduce", example: "He will reduce the price to attract more customers." },
              { subject: "We", verb: "will reduce", example: "We will reduce our carbon footprint with these changes." },
              { subject: "They", verb: "will reduce", example: "They will reduce production costs by automating processes." }
            ]
          },
          { 
            name: "Sing", 
            conjugations: [
              { subject: "I", verb: "will sing", example: "I will sing at my sister's wedding reception." },
              { subject: "You", verb: "will sing", example: "You will sing better after taking voice lessons." },
              { subject: "He/She", verb: "will sing", example: "She will sing the national anthem at the game." },
              { subject: "We", verb: "will sing", example: "We will sing carols during the holiday season." },
              { subject: "They", verb: "will sing", example: "They will sing together in the choir." }
            ]
          },
          { 
            name: "Deliver", 
            conjugations: [
              { subject: "I", verb: "will deliver", example: "I will deliver the package to your office tomorrow." },
              { subject: "You", verb: "will deliver", example: "You will deliver the keynote speech at the conference." },
              { subject: "He/She", verb: "will deliver", example: "She will deliver the baby in early June." },
              { subject: "We", verb: "will deliver", example: "We will deliver results ahead of schedule." },
              { subject: "They", verb: "will deliver", example: "They will deliver food to elderly residents." }
            ]
          },
          { 
            name: "Collect", 
            conjugations: [
              { subject: "I", verb: "will collect", example: "I will collect your mail while you're on vacation." },
              { subject: "You", verb: "will collect", example: "You will collect signatures for the petition." },
              { subject: "He/She", verb: "will collect", example: "He will collect data for his research project." },
              { subject: "We", verb: "will collect", example: "We will collect donations for the charity event." },
              { subject: "They", verb: "will collect", example: "They will collect feedback from customers." }
            ]
          },
          { 
            name: "Throw", 
            conjugations: [
              { subject: "I", verb: "will throw", example: "I will throw a surprise party for her birthday." },
              { subject: "You", verb: "will throw", example: "You will throw the ball to the first baseman." },
              { subject: "He/She", verb: "will throw", example: "She will throw away old magazines during spring cleaning." },
              { subject: "We", verb: "will throw", example: "We will throw caution to the wind and try something new." },
              { subject: "They", verb: "will throw", example: "They will throw a farewell party for the retiring employee." }
            ]
          },
          { 
            name: "Treat", 
            conjugations: [
              { subject: "I", verb: "will treat", example: "I will treat you to dinner for your birthday." },
              { subject: "You", verb: "will treat", example: "You will treat the fabric with care when washing." },
              { subject: "He/She", verb: "will treat", example: "He will treat patients with compassion." },
              { subject: "We", verb: "will treat", example: "We will treat everyone with respect regardless of rank." },
              { subject: "They", verb: "will treat", example: "They will treat the water before releasing it back into the river." }
            ]
          },
          { 
            name: "Introduce", 
            conjugations: [
              { subject: "I", verb: "will introduce", example: "I will introduce you to my colleagues at the reception." },
              { subject: "You", verb: "will introduce", example: "You will introduce the new policy next week." },
              { subject: "He/She", verb: "will introduce", example: "She will introduce the keynote speaker at the event." },
              { subject: "We", verb: "will introduce", example: "We will introduce a new product line in the spring." },
              { subject: "They", verb: "will introduce", example: "They will introduce legislation to address climate change." }
            ]
          },
          { 
            name: "Answer", 
            conjugations: [
              { subject: "I", verb: "will answer", example: "I will answer all your questions at the end of the presentation." },
              { subject: "You", verb: "will answer", example: "You will answer for your actions eventually." },
              { subject: "He/She", verb: "will answer", example: "He will answer the phone when he's available." },
              { subject: "We", verb: "will answer", example: "We will answer emails within 24 hours." },
              { subject: "They", verb: "will answer", example: "They will answer concerns raised by the community." }
            ]
          },
          { 
            name: "Exist", 
            conjugations: [
              { subject: "I", verb: "will exist", example: "I will exist in your memories long after I'm gone." },
              { subject: "You", verb: "will exist", example: "You will exist in a different reality through virtual worlds." },
              { subject: "He/She", verb: "will exist", example: "The legacy will exist for generations to come." },
              { subject: "We", verb: "will exist", example: "We will exist as a company for many more years." },
              { subject: "They", verb: "will exist", example: "These problems will exist until we address the root causes." }
            ]
          },
          { 
            name: "Pull", 
            conjugations: [
              { subject: "I", verb: "will pull", example: "I will pull together all the necessary information for the report." },
              { subject: "You", verb: "will pull", example: "You will pull through this difficult time." },
              { subject: "He/She", verb: "will pull", example: "She will pull the cart to the market." },
              { subject: "We", verb: "will pull", example: "We will pull our resources to fund the project." },
              { subject: "They", verb: "will pull", example: "They will pull off an impressive feat with this performance." }
            ]
          },
          { 
            name: "Maintain", 
            conjugations: [
              { subject: "I", verb: "will maintain", example: "I will maintain regular contact with clients." },
              { subject: "You", verb: "will maintain", example: "You will maintain your fitness routine during vacation." },
              { subject: "He/She", verb: "will maintain", example: "He will maintain the garden while you're away." },
              { subject: "We", verb: "will maintain", example: "We will maintain high standards in all our work." },
              { subject: "They", verb: "will maintain", example: "They will maintain the historic building's original features." }
            ]
          },
          { 
            name: "Type", 
            conjugations: [
              { subject: "I", verb: "will type", example: "I will type up the meeting notes this afternoon." },
              { subject: "You", verb: "will type", example: "You will type faster with regular practice." },
              { subject: "He/She", verb: "will type", example: "She will type the manuscript for the author." },
              { subject: "We", verb: "will type", example: "We will type code for the new application." },
              { subject: "They", verb: "will type", example: "They will type their responses directly into the form." }
            ]
          },
          { 
            name: "Suggest", 
            conjugations: [
              { subject: "I", verb: "will suggest", example: "I will suggest some improvements to the design." },
              { subject: "You", verb: "will suggest", example: "You will suggest a good restaurant for our dinner." },
              { subject: "He/She", verb: "will suggest", example: "He will suggest alternative approaches to the problem." },
              { subject: "We", verb: "will suggest", example: "We will suggest changes to the proposal." },
              { subject: "They", verb: "will suggest", example: "They will suggest books based on your reading preferences." }
            ]
          },
          { 
            name: "Connect", 
            conjugations: [
              { subject: "I", verb: "will connect", example: "I will connect you with experts in the field." },
              { subject: "You", verb: "will connect", example: "You will connect the dots when you have more information." },
              { subject: "He/She", verb: "will connect", example: "She will connect the devices to the network." },
              { subject: "We", verb: "will connect", example: "We will connect with the audience through storytelling." },
              { subject: "They", verb: "will connect", example: "They will connect the new subway line to existing stations." }
            ]
          },
          { 
            name: "Compare", 
            conjugations: [
              { subject: "I", verb: "will compare", example: "I will compare prices before making a purchase." },
              { subject: "You", verb: "will compare", example: "You will compare the results of both experiments." },
              { subject: "He/She", verb: "will compare", example: "He will compare different investment options." },
              { subject: "We", verb: "will compare", example: "We will compare our performance to industry standards." },
              { subject: "They", verb: "will compare", example: "They will compare candidates based on qualifications." }
            ]
          },
          { 
            name: "Handle", 
            conjugations: [
              { subject: "I", verb: "will handle", example: "I will handle the customer complaints professionally." },
              { subject: "You", verb: "will handle", example: "You will handle the situation differently next time." },
              { subject: "He/She", verb: "will handle", example: "She will handle the negotiations with the supplier." },
              { subject: "We", verb: "will handle", example: "We will handle all the logistics for the event." },
              { subject: "They", verb: "will handle", example: "They will handle the fragile items with care." }
            ]
          },
          { 
            name: "Fill", 
            conjugations: [
              { subject: "I", verb: "will fill", example: "I will fill the car with gas before our trip." },
              { subject: "You", verb: "will fill", example: "You will fill out the application form online." },
              { subject: "He/She", verb: "will fill", example: "He will fill the position of sales manager next month." },
              { subject: "We", verb: "will fill", example: "We will fill the room with balloons for the party." },
              { subject: "They", verb: "will fill", example: "They will fill their shopping carts with groceries." }
            ]
          },
          { 
            name: "Ignore", 
            conjugations: [
              { subject: "I", verb: "will ignore", example: "I will ignore the negative comments and focus on improvement." },
              { subject: "You", verb: "will ignore", example: "You will ignore the noise and concentrate on your work." },
              { subject: "He/She", verb: "will ignore", example: "She will ignore the rumors about the company merger." },
              { subject: "We", verb: "will ignore", example: "We will ignore minor issues to focus on major concerns." },
              { subject: "They", verb: "will ignore", example: "They will ignore the warning signs at their own risk." }
            ]
          },
          { 
            name: "Survive", 
            conjugations: [
              { subject: "I", verb: "will survive", example: "I will survive this difficult period and come out stronger." },
              { subject: "You", verb: "will survive", example: "You will survive the wilderness training with your skills." },
              { subject: "He/She", verb: "will survive", example: "The plant will survive the winter if kept indoors." },
              { subject: "We", verb: "will survive", example: "We will survive the economic downturn by cutting costs." },
              { subject: "They", verb: "will survive", example: "They will survive the competition with innovation." }
            ]
          },
          { 
            name: "Attempt", 
            conjugations: [
              { subject: "I", verb: "will attempt", example: "I will attempt to climb Mount Everest next year." },
              { subject: "You", verb: "will attempt", example: "You will attempt the challenge when you're ready." },
              { subject: "He/She", verb: "will attempt", example: "He will attempt to break the world record." },
              { subject: "We", verb: "will attempt", example: "We will attempt to solve this puzzle together." },
              { subject: "They", verb: "will attempt", example: "They will attempt to launch the product by December." }
            ]
          },
          { 
            name: "Divide", 
            conjugations: [
              { subject: "I", verb: "will divide", example: "I will divide my time between work and family." },
              { subject: "You", verb: "will divide", example: "You will divide the cake equally among the guests." },
              { subject: "He/She", verb: "will divide", example: "She will divide the class into small groups." },
              { subject: "We", verb: "will divide", example: "We will divide the profits according to investment." },
              { subject: "They", verb: "will divide", example: "They will divide the responsibilities among team members." }
            ]
          },
          { 
            name: "Claim", 
            conjugations: [
              { subject: "I", verb: "will claim", example: "I will claim my luggage at the airport." },
              { subject: "You", verb: "will claim", example: "You will claim your prize at the award ceremony." },
              { subject: "He/She", verb: "will claim", example: "He will claim expenses for the business trip." },
              { subject: "We", verb: "will claim", example: "We will claim our rightful place in the industry." },
              { subject: "They", verb: "will claim", example: "They will claim compensation for the delay." }
            ]
          },
          { 
            name: "Practice", 
            conjugations: [
              { subject: "I", verb: "will practice", example: "I will practice my presentation before the meeting." },
              { subject: "You", verb: "will practice", example: "You will practice the piano for an hour each day." },
              { subject: "He/She", verb: "will practice", example: "She will practice medicine in rural areas." },
              { subject: "We", verb: "will practice", example: "We will practice fire drills regularly for safety." },
              { subject: "They", verb: "will practice", example: "They will practice their lines before the performance." }
            ]
          },
          { 
            name: "Mention", 
            conjugations: [
              { subject: "I", verb: "will mention", example: "I will mention your contribution in my speech." },
              { subject: "You", verb: "will mention", example: "You will mention the deadline during the meeting." },
              { subject: "He/She", verb: "will mention", example: "He will mention your name to the hiring manager." },
              { subject: "We", verb: "will mention", example: "We will mention the issue in our next newsletter." },
              { subject: "They", verb: "will mention", example: "They will mention the changes in policy to all employees." }
            ]
          },
          { 
            name: "Encourage", 
            conjugations: [
              { subject: "I", verb: "will encourage", example: "I will encourage you to pursue your dreams." },
              { subject: "You", verb: "will encourage", example: "You will encourage creativity in your classroom." },
              { subject: "He/She", verb: "will encourage", example: "She will encourage team members to share ideas." },
              { subject: "We", verb: "will encourage", example: "We will encourage sustainable practices in our business." },
              { subject: "They", verb: "will encourage", example: "They will encourage participation from all departments." }
            ]
          },
          { 
            name: "Request", 
            conjugations: [
              { subject: "I", verb: "will request", example: "I will request additional resources for the project." },
              { subject: "You", verb: "will request", example: "You will request feedback on your performance." },
              { subject: "He/She", verb: "will request", example: "He will request a transfer to another department." },
              { subject: "We", verb: "will request", example: "We will request an extension for the deadline." },
              { subject: "They", verb: "will request", example: "They will request permission to access the restricted area." }
            ]
          },
          { 
            name: "Test", 
            conjugations: [
              { subject: "I", verb: "will test", example: "I will test the new software before deployment." },
              { subject: "You", verb: "will test", example: "You will test your limits in this challenging course." },
              { subject: "He/She", verb: "will test", example: "She will test the water quality monthly." },
              { subject: "We", verb: "will test", example: "We will test different strategies to improve sales." },
              { subject: "They", verb: "will test", example: "They will test candidates for technical skills." }
            ]
          },
          { 
            name: "Fly", 
            conjugations: [
              { subject: "I", verb: "will fly", example: "I will fly to Paris for the conference next month." },
              { subject: "You", verb: "will fly", example: "You will fly business class on long journeys." },
              { subject: "He/She", verb: "will fly", example: "He will fly a drone to capture aerial footage." },
              { subject: "We", verb: "will fly", example: "We will fly our national flag during the ceremony." },
              { subject: "They", verb: "will fly", example: "They will fly home for the holidays." }
            ]
          },
          { 
            name: "Push", 
            conjugations: [
              { subject: "I", verb: "will push", example: "I will push for changes in the current policy." },
              { subject: "You", verb: "will push", example: "You will push yourself to achieve your fitness goals." },
              { subject: "He/She", verb: "will push", example: "She will push the cart to the checkout counter." },
              { subject: "We", verb: "will push", example: "We will push back the meeting to next week." },
              { subject: "They", verb: "will push", example: "They will push forward with the plan despite objections." }
            ]
          },
          { 
            name: "Disappear", 
            conjugations: [
              { subject: "I", verb: "will disappear", example: "I will disappear from social media during exams." },
              { subject: "You", verb: "will disappear", example: "You will disappear into the crowd if you don't wear the red hat." },
              { subject: "He/She", verb: "will disappear", example: "The stain will disappear after washing." },
              { subject: "We", verb: "will disappear", example: "We will disappear for a week-long retreat in the mountains." },
              { subject: "They", verb: "will disappear", example: "They will disappear from the market if they don't innovate." }
            ]
          },
          { 
            name: "Examine", 
            conjugations: [
              { subject: "I", verb: "will examine", example: "I will examine the evidence carefully before making a judgment." },
              { subject: "You", verb: "will examine", example: "You will examine the contract with your lawyer." },
              { subject: "He/She", verb: "will examine", example: "The doctor will examine the patient in the morning." },
              { subject: "We", verb: "will examine", example: "We will examine all options before deciding." },
              { subject: "They", verb: "will examine", example: "They will examine the market conditions before investing." }
            ]
          },
          { 
            name: "Count", 
            conjugations: [
              { subject: "I", verb: "will count", example: "I will count the inventory at the end of the month." },
              { subject: "You", verb: "will count", example: "You will count on my support throughout the process." },
              { subject: "He/She", verb: "will count", example: "She will count the votes after the election." },
              { subject: "We", verb: "will count", example: "We will count down to the New Year together." },
              { subject: "They", verb: "will count", example: "They will count their blessings during difficult times." }
            ]
          },
          { 
            name: "Reflect", 
            conjugations: [
              { subject: "I", verb: "will reflect", example: "I will reflect on the feedback to improve my performance." },
              { subject: "You", verb: "will reflect", example: "You will reflect the company's values in your work." },
              { subject: "He/She", verb: "will reflect", example: "The mirror will reflect your image clearly." },
              { subject: "We", verb: "will reflect", example: "We will reflect on our past achievements at the annual review." },
              { subject: "They", verb: "will reflect", example: "They will reflect on their journey together on their anniversary." }
            ]
          },
          { 
            name: "Rely", 
            conjugations: [
              { subject: "I", verb: "will rely", example: "I will rely on your expertise for this project." },
              { subject: "You", verb: "will rely", example: "You will rely less on others as you develop your skills." },
              { subject: "He/She", verb: "will rely", example: "She will rely on her training during the competition." },
              { subject: "We", verb: "will rely", example: "We will rely on renewable energy sources in the future." },
              { subject: "They", verb: "will rely", example: "They will rely on data to make decisions." }
            ]
          },
          { 
            name: "Influence", 
            conjugations: [
              { subject: "I", verb: "will influence", example: "I will influence the decision with my presentation." },
              { subject: "You", verb: "will influence", example: "You will influence others through your leadership." },
              { subject: "He/She", verb: "will influence", example: "He will influence the design of the new building." },
              { subject: "We", verb: "will influence", example: "We will influence industry standards with our innovation." },
              { subject: "They", verb: "will influence", example: "They will influence young minds through their teaching." }
            ]
          },
          { 
            name: "Hide", 
            conjugations: [
              { subject: "I", verb: "will hide", example: "I will hide the presents until the birthday party." },
              { subject: "You", verb: "will hide", example: "You will hide your feelings behind a smile." },
              { subject: "He/She", verb: "will hide", example: "She will hide the evidence before anyone notices." },
              { subject: "We", verb: "will hide", example: "We will hide our surprise until the right moment." },
              { subject: "They", verb: "will hide", example: "They will hide in the attic during the game." }
            ]
          },
          { 
            name: "Address", 
            conjugations: [
              { subject: "I", verb: "will address", example: "I will address the issues you've raised in my next email." },
              { subject: "You", verb: "will address", example: "You will address the audience at tomorrow's conference." },
              { subject: "He/She", verb: "will address", example: "He will address the envelope before mailing it." },
              { subject: "We", verb: "will address", example: "We will address the concerns of all stakeholders." },
              { subject: "They", verb: "will address", example: "They will address the letter to the board of directors." }
            ]
          },
          { 
            name: "Record", 
            conjugations: [
              { subject: "I", verb: "will record", example: "I will record the meeting for those who can't attend." },
              { subject: "You", verb: "will record", example: "You will record your podcast episode tomorrow." },
              { subject: "He/She", verb: "will record", example: "She will record her observations in a journal." },
              { subject: "We", verb: "will record", example: "We will record the transaction in our ledger." },
              { subject: "They", verb: "will record", example: "They will record their new album next month." }
            ]
          },
          { 
            name: "Fail", 
            conjugations: [
              { subject: "I", verb: "will fail", example: "I will fail if I don't prepare adequately." },
              { subject: "You", verb: "will fail", example: "You will fail to notice the changes without careful attention." },
              { subject: "He/She", verb: "will fail", example: "The system will fail if we don't maintain it properly." },
              { subject: "We", verb: "will fail", example: "We will fail to meet expectations unless we work harder." },
              { subject: "They", verb: "will fail", example: "They will fail the test without studying." }
            ]
          },
          { 
            name: "Indicate", 
            conjugations: [
              { subject: "I", verb: "will indicate", example: "I will indicate my preferences on the survey." },
              { subject: "You", verb: "will indicate", example: "You will indicate which option you prefer." },
              { subject: "He/She", verb: "will indicate", example: "She will indicate the route on the map." },
              { subject: "We", verb: "will indicate", example: "We will indicate our attendance by checking the box." },
              { subject: "They", verb: "will indicate", example: "They will indicate their agreement by signing the document." }
            ]
          },
          { 
            name: "Represent", 
            conjugations: [
              { subject: "I", verb: "will represent", example: "I will represent our company at the trade show." },
              { subject: "You", verb: "will represent", example: "You will represent your district in the competition." },
              { subject: "He/She", verb: "will represent", example: "He will represent the client in court." },
              { subject: "We", verb: "will represent", example: "We will represent diverse perspectives in our report." },
              { subject: "They", verb: "will represent", example: "They will represent our country at the Olympic Games." }
            ]
          },
          { 
            name: "Print", 
            conjugations: [
              { subject: "I", verb: "will print", example: "I will print the documents for tomorrow's meeting." },
              { subject: "You", verb: "will print", example: "You will print your boarding pass before going to the airport." },
              { subject: "He/She", verb: "will print", example: "She will print photographs for the exhibition." },
              { subject: "We", verb: "will print", example: "We will print invitations for the wedding." },
              { subject: "They", verb: "will print", example: "They will print the newspaper early tomorrow morning." }
            ]
          },
          { 
            name: "Release", 
            conjugations: [
              { subject: "I", verb: "will release", example: "I will release the report after final review." },
              { subject: "You", verb: "will release", example: "You will release tension through meditation." },
              { subject: "He/She", verb: "will release", example: "He will release his new book in June." },
              { subject: "We", verb: "will release", example: "We will release the product to the market next quarter." },
              { subject: "They", verb: "will release", example: "They will release the rehabilitated animals back to the wild." }
            ]
          },
          { 
            name: "Protect", 
            conjugations: [
              { subject: "I", verb: "will protect", example: "I will protect your confidential information." },
              { subject: "You", verb: "will protect", example: "You will protect your skin from the sun with sunscreen." },
              { subject: "He/She", verb: "will protect", example: "She will protect the children during the storm." },
              { subject: "We", verb: "will protect", example: "We will protect the environment for future generations." },
              { subject: "They", verb: "will protect", example: "They will protect their intellectual property rights." }
            ]
          },
          { 
            name: "Suffer", 
            conjugations: [
              { subject: "I", verb: "will suffer", example: "I will suffer the consequences if I break the rules." },
              { subject: "You", verb: "will suffer", example: "You will suffer from jet lag after the long flight." },
              { subject: "He/She", verb: "will suffer", example: "He will suffer from anxiety without proper support." },
              { subject: "We", verb: "will suffer", example: "We will suffer losses during the economic downturn." },
              { subject: "They", verb: "will suffer", example: "They will suffer delays due to the weather conditions." }
            ]
          },
          { 
            name: "Intend", 
            conjugations: [
              { subject: "I", verb: "will intend", example: "I will intend to complete the project on time." },
              { subject: "You", verb: "will intend", example: "You will intend to improve your skills through practice." },
              { subject: "He/She", verb: "will intend", example: "She will intend to visit her family next month." },
              { subject: "We", verb: "will intend", example: "We will intend to reach our targets by year-end." },
              { subject: "They", verb: "will intend", example: "They will intend to expand their business overseas." }
            ]
          },
          { 
            name: "Confirm", 
            conjugations: [
              { subject: "I", verb: "will confirm", example: "I will confirm your reservation by email." },
              { subject: "You", verb: "will confirm", example: "You will confirm your attendance at the event." },
              { subject: "He/She", verb: "will confirm", example: "He will confirm the details with the client." },
              { subject: "We", verb: "will confirm", example: "We will confirm the date for the interview soon." },
              { subject: "They", verb: "will confirm", example: "They will confirm the test results before making a diagnosis." }
            ]
          },
          { 
            name: "Kiss", 
            conjugations: [
              { subject: "I", verb: "will kiss", example: "I will kiss my children goodnight before bed." },
              { subject: "You", verb: "will kiss", example: "You will kiss the bride at the end of the ceremony." },
              { subject: "He/She", verb: "will kiss", example: "She will kiss her grandmother on the cheek." },
              { subject: "We", verb: "will kiss", example: "We will kiss goodbye at the airport." },
              { subject: "They", verb: "will kiss", example: "They will kiss the ground when they return to their homeland." }
            ]
          },
          { 
            name: "Seek", 
            conjugations: [
              { subject: "I", verb: "will seek", example: "I will seek advice from a financial advisor." },
              { subject: "You", verb: "will seek", example: "You will seek new opportunities in your career." },
              { subject: "He/She", verb: "will seek", example: "He will seek medical attention for his injury." },
              { subject: "We", verb: "will seek", example: "We will seek approval from the board before proceeding." },
              { subject: "They", verb: "will seek", example: "They will seek shelter during the storm." }
            ]
          },
          { 
            name: "Review", 
            conjugations: [
              { subject: "I", verb: "will review", example: "I will review your essay and provide feedback." },
              { subject: "You", verb: "will review", example: "You will review the contract before signing it." },
              { subject: "He/She", verb: "will review", example: "She will review the company's performance quarterly." },
              { subject: "We", verb: "will review", example: "We will review all applications carefully." },
              { subject: "They", verb: "will review", example: "They will review the film for the magazine." }
            ]
          },
          { 
            name: "Acquire", 
            conjugations: [
              { subject: "I", verb: "will acquire", example: "I will acquire new skills through this training program." },
              { subject: "You", verb: "will acquire", example: "You will acquire valuable experience in this position." },
              { subject: "He/She", verb: "will acquire", example: "He will acquire the necessary permits before construction." },
              { subject: "We", verb: "will acquire", example: "We will acquire the competitor's business next year." },
              { subject: "They", verb: "will acquire", example: "They will acquire property in developing markets." }
            ]
          },
          { 
            name: "Benefit", 
            conjugations: [
              { subject: "I", verb: "will benefit", example: "I will benefit from your expertise on this project." },
              { subject: "You", verb: "will benefit", example: "You will benefit from regular exercise and a healthy diet." },
              { subject: "He/She", verb: "will benefit", example: "She will benefit from attending the conference." },
              { subject: "We", verb: "will benefit", example: "We will benefit from implementing the new system." },
              { subject: "They", verb: "will benefit", example: "They will benefit from the tax incentives." }
            ]
          },
          { 
            name: "Hang", 
            conjugations: [
              { subject: "I", verb: "will hang", example: "I will hang the painting on the living room wall." },
              { subject: "You", verb: "will hang", example: "You will hang out with friends after work." },
              { subject: "He/She", verb: "will hang", example: "He will hang the holiday decorations tomorrow." },
              { subject: "We", verb: "will hang", example: "We will hang a 'Grand Opening' sign outside the store." },
              { subject: "They", verb: "will hang", example: "They will hang their coats in the closet." }
            ]
          },
          { 
            name: "Relate", 
            conjugations: [
              { subject: "I", verb: "will relate", example: "I will relate my experience to help others understand." },
              { subject: "You", verb: "will relate", example: "You will relate better to your audience if you share personal stories." },
              { subject: "He/She", verb: "will relate", example: "She will relate the incident to the authorities." },
              { subject: "We", verb: "will relate", example: "We will relate our findings in the final report." },
              { subject: "They", verb: "will relate", example: "They will relate to each other's experiences during the workshop." }
            ]
          },
          { 
            name: "Mix", 
            conjugations: [
              { subject: "I", verb: "will mix", example: "I will mix the ingredients for the cake." },
              { subject: "You", verb: "will mix", example: "You will mix the paint to get the right color." },
              { subject: "He/She", verb: "will mix", example: "He will mix tracks for the upcoming album." },
              { subject: "We", verb: "will mix", example: "We will mix business with pleasure on our trip." },
              { subject: "They", verb: "will mix", example: "They will mix concrete for the foundation tomorrow." }
            ]
          },
          { 
            name: "Function", 
            conjugations: [
              { subject: "I", verb: "will function", example: "I will function as the team leader for this project." },
              { subject: "You", verb: "will function", example: "You will function better after getting some rest." },
              { subject: "He/She", verb: "will function", example: "She will function as the interim manager during John's absence." },
              { subject: "We", verb: "will function", example: "We will function more efficiently with the new software." },
              { subject: "They", verb: "will function", example: "They will function as liaisons between departments." }
            ]
          },
          { 
            name: "Establish", 
            conjugations: [
              { subject: "I", verb: "will establish", example: "I will establish clear guidelines for the team." },
              { subject: "You", verb: "will establish", example: "You will establish yourself as an expert in this field." },
              { subject: "He/She", verb: "will establish", example: "He will establish a new branch office in Berlin." },
              { subject: "We", verb: "will establish", example: "We will establish a foundation to support education." },
              { subject: "They", verb: "will establish", example: "They will establish a connection between the two networks." }
            ]
          },
          { 
            name: "Engage", 
            conjugations: [
              { subject: "I", verb: "will engage", example: "I will engage with the audience during my presentation." },
              { subject: "You", verb: "will engage", example: "You will engage in meaningful conversations at the conference." },
              { subject: "He/She", verb: "will engage", example: "She will engage a consultant to help with the project." },
              { subject: "We", verb: "will engage", example: "We will engage with the community to address their concerns." },
              { subject: "They", verb: "will engage", example: "They will engage in negotiations next week." }
            ]
          },
          { 
            name: "Contain", 
            conjugations: [
              { subject: "I", verb: "will contain", example: "I will contain my excitement until the announcement is official." },
              { subject: "You", verb: "will contain", example: "You will contain the spill with these absorbent materials." },
              { subject: "He/She", verb: "will contain", example: "This package will contain all the necessary documents." },
              { subject: "We", verb: "will contain", example: "We will contain costs by implementing these efficiency measures." },
              { subject: "They", verb: "will contain", example: "They will contain the fire before it spreads to nearby buildings." }
            ]
          },
          { 
            name: "Arrange", 
            conjugations: [
              { subject: "I", verb: "will arrange", example: "I will arrange transportation for the guests." },
              { subject: "You", verb: "will arrange", example: "You will arrange the furniture to create more space." },
              { subject: "He/She", verb: "will arrange", example: "She will arrange flowers for the wedding ceremony." },
              { subject: "We", verb: "will arrange", example: "We will arrange a meeting with all stakeholders." },
              { subject: "They", verb: "will arrange", example: "They will arrange the books alphabetically on the shelves." }
            ]
          },
          { 
            name: "Thank", 
            conjugations: [
              { subject: "I", verb: "will thank", example: "I will thank everyone who contributed to the project." },
              { subject: "You", verb: "will thank", example: "You will thank yourself later for making this decision." },
              { subject: "He/She", verb: "will thank", example: "He will thank the donors at the charity event." },
              { subject: "We", verb: "will thank", example: "We will thank our customers with a special discount." },
              { subject: "They", verb: "will thank", example: "They will thank the volunteers with a recognition ceremony." }
            ]
          },
          { 
            name: "Shake", 
            conjugations: [
              { subject: "I", verb: "will shake", example: "I will shake hands with the guests as they arrive." },
              { subject: "You", verb: "will shake", example: "You will shake the bottle before using the medicine." },
              { subject: "He/She", verb: "will shake", example: "She will shake up the department with new ideas." },
              { subject: "We", verb: "will shake", example: "We will shake off the disappointment and try again." },
              { subject: "They", verb: "will shake", example: "They will shake the tree to collect the ripe fruit." }
            ]
          },
          { 
            name: "Adopt", 
            conjugations: [
              { subject: "I", verb: "will adopt", example: "I will adopt a more positive attitude this year." },
              { subject: "You", verb: "will adopt", example: "You will adopt new strategies to improve efficiency." },
              { subject: "He/She", verb: "will adopt", example: "She will adopt a child from the orphanage." },
              { subject: "We", verb: "will adopt", example: "We will adopt the latest technology in our operations." },
              { subject: "They", verb: "will adopt", example: "They will adopt a rescue dog from the shelter." }
            ]
          },
          { 
            name: "Access", 
            conjugations: [
              { subject: "I", verb: "will access", example: "I will access the database remotely while traveling." },
              { subject: "You", verb: "will access", example: "You will access the online platform using this password." },
              { subject: "He/She", verb: "will access", example: "He will access the restricted area with a security card." },
              { subject: "We", verb: "will access", example: "We will access the archives for research purposes." },
              { subject: "They", verb: "will access", example: "They will access funding through the new grant program." }
            ]
          },
          { 
            name: "Intend", 
            conjugations: [
              { subject: "I", verb: "will intend", example: "I will intend to complete the assignment before the deadline." },
              { subject: "You", verb: "will intend", example: "You will intend to visit your parents this weekend." },
              { subject: "He/She", verb: "will intend", example: "She will intend to apply for the scholarship." },
              { subject: "We", verb: "will intend", example: "We will intend to launch the product by next quarter." },
              { subject: "They", verb: "will intend", example: "They will intend to renovate the building this summer." }
            ]
          },
          { 
            name: "Hire", 
            conjugations: [
              { subject: "I", verb: "will hire", example: "I will hire an assistant to help manage my schedule." },
              { subject: "You", verb: "will hire", example: "You will hire a professional photographer for the event." },
              { subject: "He/She", verb: "will hire", example: "She will hire experienced staff for the new restaurant." },
              { subject: "We", verb: "will hire", example: "We will hire additional personnel during the busy season." },
              { subject: "They", verb: "will hire", example: "They will hire consultants to advise on the restructuring." }
            ]
          },
          { 
            name: "Define", 
            conjugations: [
              { subject: "I", verb: "will define", example: "I will define the project scope in the next meeting." },
              { subject: "You", verb: "will define", example: "You will define your career goals more clearly after the workshop." },
              { subject: "He/She", verb: "will define", example: "He will define the terms in the glossary section." },
              { subject: "We", verb: "will define", example: "We will define our brand values in the marketing strategy." },
              { subject: "They", verb: "will define", example: "They will define success metrics for the campaign." }
            ]
          },
          { 
            name: "Contribute", 
            conjugations: [
              { subject: "I", verb: "will contribute", example: "I will contribute an article to the company newsletter." },
              { subject: "You", verb: "will contribute", example: "You will contribute ideas during the brainstorming session." },
              { subject: "He/She", verb: "will contribute", example: "She will contribute to the charity fundraiser." },
              { subject: "We", verb: "will contribute", example: "We will contribute time and resources to the community project." },
              { subject: "They", verb: "will contribute", example: "They will contribute their expertise to solve the problem." }
            ]
          },
          { 
            name: "Swim", 
            conjugations: [
              { subject: "I", verb: "will swim", example: "I will swim in the ocean during our vacation." },
              { subject: "You", verb: "will swim", example: "You will swim faster after completing this training program." },
              { subject: "He/She", verb: "will swim", example: "He will swim across the lake for the charity event." },
              { subject: "We", verb: "will swim", example: "We will swim in the new pool when it opens next month." },
              { subject: "They", verb: "will swim", example: "They will swim with dolphins during their trip." }
            ]
          },
          { 
            name: "Launch", 
            conjugations: [
              { subject: "I", verb: "will launch", example: "I will launch my own business next year." },
              { subject: "You", verb: "will launch", example: "You will launch the marketing campaign after approval." },
              { subject: "He/She", verb: "will launch", example: "She will launch her new book at the literary festival." },
              { subject: "We", verb: "will launch", example: "We will launch the website by the end of the month." },
              { subject: "They", verb: "will launch", example: "They will launch the rocket from the space center." }
            ]
          },
          { 
            name: "Cross", 
            conjugations: [
              { subject: "I", verb: "will cross", example: "I will cross the bridge when I come to it." },
              { subject: "You", verb: "will cross", example: "You will cross the finish line in record time." },
              { subject: "He/She", verb: "will cross", example: "He will cross the street at the pedestrian crossing." },
              { subject: "We", verb: "will cross", example: "We will cross the border early in the morning." },
              { subject: "They", verb: "will cross", example: "They will cross paths at the conference next week." }
            ]
          },
          { 
            name: "Express", 
            conjugations: [
              { subject: "I", verb: "will express", example: "I will express my gratitude in a thank-you note." },
              { subject: "You", verb: "will express", example: "You will express your concerns at the town hall meeting." },
              { subject: "He/She", verb: "will express", example: "She will express her creativity through painting." },
              { subject: "We", verb: "will express", example: "We will express our condolences to the family." },
              { subject: "They", verb: "will express", example: "They will express their opinions during the debate." }
            ]
          },
          { 
            name: "Transfer", 
            conjugations: [
              { subject: "I", verb: "will transfer", example: "I will transfer the funds to your account tomorrow." },
              { subject: "You", verb: "will transfer", example: "You will transfer to another department next month." },
              { subject: "He/She", verb: "will transfer", example: "He will transfer the call to the appropriate person." },
              { subject: "We", verb: "will transfer", example: "We will transfer our headquarters to a new location." },
              { subject: "They", verb: "will transfer", example: "They will transfer knowledge to the new team members." }
            ]
          },
          { 
            name: "Detect", 
            conjugations: [
              { subject: "I", verb: "will detect", example: "I will detect any errors in the code during testing." },
              { subject: "You", verb: "will detect", example: "You will detect a pattern if you analyze the data carefully." },
              { subject: "He/She", verb: "will detect", example: "She will detect problems early with the new monitoring system." },
              { subject: "We", verb: "will detect", example: "We will detect fraud through our advanced security measures." },
              { subject: "They", verb: "will detect", example: "They will detect radiation levels with specialized equipment." }
            ]
          },
          { 
            name: "Evaluate", 
            conjugations: [
              { subject: "I", verb: "will evaluate", example: "I will evaluate your proposal carefully." },
              { subject: "You", verb: "will evaluate", example: "You will evaluate the candidates based on their qualifications." },
              { subject: "He/She", verb: "will evaluate", example: "She will evaluate the results of the experiment." },
              { subject: "We", verb: "will evaluate", example: "We will evaluate our options before making a decision." },
              { subject: "They", verb: "will evaluate", example: "They will evaluate the performance of the new system." }
            ]
          },
          { 
            name: "Place", 
            conjugations: [
              { subject: "I", verb: "will place", example: "I will place the order by the end of the day." },
              { subject: "You", verb: "will place", example: "You will place the furniture according to the floor plan." },
              { subject: "He/She", verb: "will place", example: "He will place a bet on the championship game." },
              { subject: "We", verb: "will place", example: "We will place flowers on the graves of our ancestors." },
              { subject: "They", verb: "will place", example: "They will place their trust in the new leadership." }
            ]
          },
          { 
            name: "Mark", 
            conjugations: [
              { subject: "I", verb: "will mark", example: "I will mark the important dates on my calendar." },
              { subject: "You", verb: "will mark", example: "You will mark the essays over the weekend." },
              { subject: "He/She", verb: "will mark", example: "She will mark her territory like a true leader." },
              { subject: "We", verb: "will mark", example: "We will mark the trail so others can follow." },
              { subject: "They", verb: "will mark", example: "They will mark the anniversary with a special celebration." }
            ]
          },
          { 
            name: "Secure", 
            conjugations: [
              { subject: "I", verb: "will secure", example: "I will secure the necessary funding for the project." },
              { subject: "You", verb: "will secure", example: "You will secure the building before leaving." },
              { subject: "He/She", verb: "will secure", example: "He will secure a position in the top company." },
              { subject: "We", verb: "will secure", example: "We will secure our network against cyber threats." },
              { subject: "They", verb: "will secure", example: "They will secure the borders with additional personnel." }
            ]
          },
          { 
            name: "Qualify", 
            conjugations: [
              { subject: "I", verb: "will qualify", example: "I will qualify for the competition if I train hard." },
              { subject: "You", verb: "will qualify", example: "You will qualify as an expert after completing this course." },
              { subject: "He/She", verb: "will qualify", example: "She will qualify her statement with supporting evidence." },
              { subject: "We", verb: "will qualify", example: "We will qualify for tax exemptions under the new law." },
              { subject: "They", verb: "will qualify", example: "They will qualify for the finals if they win tomorrow." }
            ]
          },
          { 
            name: "Settle", 
            conjugations: [
              { subject: "I", verb: "will settle", example: "I will settle into my new apartment next week." },
              { subject: "You", verb: "will settle", example: "You will settle the dispute through mediation." },
              { subject: "He/She", verb: "will settle", example: "He will settle his debts before moving abroad." },
              { subject: "We", verb: "will settle", example: "We will settle for nothing less than excellence." },
              { subject: "They", verb: "will settle", example: "They will settle in the countryside after retiring." }
            ]
          },
          { 
            name: "Fold", 
            conjugations: [
              { subject: "I", verb: "will fold", example: "I will fold the laundry after it dries." },
              { subject: "You", verb: "will fold", example: "You will fold the paper in half to make a card." },
              { subject: "He/She", verb: "will fold", example: "She will fold her cards if the bet is too high." },
              { subject: "We", verb: "will fold", example: "We will fold the tent before leaving the campsite." },
              { subject: "They", verb: "will fold", example: "They will fold their business if sales don't improve." }
            ]
          },
          { 
            name: "Design", 
            conjugations: [
              { subject: "I", verb: "will design", example: "I will design a logo for your new business." },
              { subject: "You", verb: "will design", example: "You will design the layout for the new office." },
              { subject: "He/She", verb: "will design", example: "He will design a custom wedding dress for the bride." },
              { subject: "We", verb: "will design", example: "We will design a curriculum that meets all requirements." },
              { subject: "They", verb: "will design", example: "They will design a more fuel-efficient car model." }
            ]
          },
          { 
            name: "Hurt", 
            conjugations: [
              { subject: "I", verb: "will hurt", example: "I will hurt my chances if I don't prepare properly." },
              { subject: "You", verb: "will hurt", example: "You will hurt yourself if you lift with improper form." },
              { subject: "He/She", verb: "will hurt", example: "He will hurt the team's morale with such criticism." },
              { subject: "We", verb: "will hurt", example: "We will hurt our reputation if we don't deliver on time." },
              { subject: "They", verb: "will hurt", example: "They will hurt their knees running on concrete." }
            ]
          },
          { 
            name: "Operate", 
            conjugations: [
              { subject: "I", verb: "will operate", example: "I will operate the new machinery after training." },
              { subject: "You", verb: "will operate", example: "You will operate within the budget constraints." },
              { subject: "He/She", verb: "will operate", example: "She will operate on the patient tomorrow morning." },
              { subject: "We", verb: "will operate", example: "We will operate the business according to ethical principles." },
              { subject: "They", verb: "will operate", example: "They will operate in multiple countries after expansion." }
            ]
          },
          { 
            name: "Recover", 
            conjugations: [
              { subject: "I", verb: "will recover", example: "I will recover from surgery in about two weeks." },
              { subject: "You", verb: "will recover", example: "You will recover the deleted files from the backup." },
              { subject: "He/She", verb: "will recover", example: "She will recover her strength through physical therapy." },
              { subject: "We", verb: "will recover", example: "We will recover our investment within five years." },
              { subject: "They", verb: "will recover", example: "They will recover the sunken treasure from the shipwreck." }
            ]
          },
          { 
            name: "Tie", 
            conjugations: [
              { subject: "I", verb: "will tie", example: "I will tie my shoelaces before running." },
              { subject: "You", verb: "will tie", example: "You will tie the ribbon around the gift." },
              { subject: "He/She", verb: "will tie", example: "He will tie the knot with his longtime girlfriend." },
              { subject: "We", verb: "will tie", example: "We will tie for first place if we maintain this pace." },
              { subject: "They", verb: "will tie", example: "They will tie the rope securely to the dock." }
            ]
          },
          { 
            name: "Roll", 
            conjugations: [
              { subject: "I", verb: "will roll", example: "I will roll out the dough for the pie crust." },
              { subject: "You", verb: "will roll", example: "You will roll down the hill if you're not careful." },
              { subject: "He/She", verb: "will roll", example: "She will roll her eyes at the corny joke." },
              { subject: "We", verb: "will roll", example: "We will roll out the new program next month." },
              { subject: "They", verb: "will roll", example: "They will roll the barrels into the warehouse." }
            ]
          },
          { 
            name: "Differ", 
            conjugations: [
              { subject: "I", verb: "will differ", example: "I will differ with you on this political issue." },
              { subject: "You", verb: "will differ", example: "You will differ from the standard approach in your thesis." },
              { subject: "He/She", verb: "will differ", example: "His opinion will differ from the majority view." },
              { subject: "We", verb: "will differ", example: "We will differ in our interpretations of the data." },
              { subject: "They", verb: "will differ", example: "They will differ in their approaches to problem-solving." }
            ]
          },
          { 
            name: "Promote", 
            conjugations: [
              { subject: "I", verb: "will promote", example: "I will promote your services to my network." },
              { subject: "You", verb: "will promote", example: "You will promote the new product at the trade show." },
              { subject: "He/She", verb: "will promote", example: "She will promote diversity in the workplace." },
              { subject: "We", verb: "will promote", example: "We will promote employees based on merit." },
              { subject: "They", verb: "will promote", example: "They will promote healthy eating through their campaign." }
            ]
          },
          { 
            name: "Attack", 
            conjugations: [
              { subject: "I", verb: "will attack", example: "I will attack this problem from a different angle." },
              { subject: "You", verb: "will attack", example: "You will attack the opponent's weaknesses in the debate." },
              { subject: "He/She", verb: "will attack", example: "He will attack the project with enthusiasm." },
              { subject: "We", verb: "will attack", example: "We will attack the market with our innovative product." },
              { subject: "They", verb: "will attack", example: "They will attack at dawn to gain the element of surprise." }
            ]
          },
          { 
            name: "Sign", 
            conjugations: [
              { subject: "I", verb: "will sign", example: "I will sign the contract after reviewing it." },
              { subject: "You", verb: "will sign", example: "You will sign up for the newsletter to receive updates." },
              { subject: "He/She", verb: "will sign", example: "She will sign her book for fans after the reading." },
              { subject: "We", verb: "will sign", example: "We will sign a lease for the new office space." },
              { subject: "They", verb: "will sign", example: "They will sign the peace treaty next week." }
            ]
          },
          { 
            name: "Inform", 
            conjugations: [
              { subject: "I", verb: "will inform", example: "I will inform you as soon as I hear the news." },
              { subject: "You", verb: "will inform", example: "You will inform the team about the schedule change." },
              { subject: "He/She", verb: "will inform", example: "He will inform his supervisor about the issue." },
              { subject: "We", verb: "will inform", example: "We will inform all stakeholders of our decision." },
              { subject: "They", verb: "will inform", example: "They will inform passengers of any flight delays." }
            ]
          },
          { 
            name: "Note", 
            conjugations: [
              { subject: "I", verb: "will note", example: "I will note your suggestions in my report." },
              { subject: "You", verb: "will note", example: "You will note the changes in the updated version." },
              { subject: "He/She", verb: "will note", example: "She will note the time of each observation." },
              { subject: "We", verb: "will note", example: "We will note all expenses for reimbursement." },
              { subject: "They", verb: "will note", example: "They will note the discrepancies in the financial records." }
            ]
          },
          { 
            name: "Spread", 
            conjugations: [
              { subject: "I", verb: "will spread", example: "I will spread the news about your achievement." },
              { subject: "You", verb: "will spread", example: "You will spread the peanut butter on the bread." },
              { subject: "He/She", verb: "will spread", example: "He will spread mulch in the garden this weekend." },
              { subject: "We", verb: "will spread", example: "We will spread our resources across multiple projects." },
              { subject: "They", verb: "will spread", example: "They will spread awareness about environmental issues." }
            ]
          },
          { 
            name: "Form", 
            conjugations: [
              { subject: "I", verb: "will form", example: "I will form a study group for the upcoming exam." },
              { subject: "You", verb: "will form", example: "You will form a strong bond with your new teammates." },
              { subject: "He/She", verb: "will form", example: "She will form her own opinion after reading the book." },
              { subject: "We", verb: "will form", example: "We will form a committee to address the issue." },
              { subject: "They", verb: "will form", example: "They will form a new political party before the election." }
            ]
          },
          { 
            name: "Worry", 
            conjugations: [
              { subject: "I", verb: "will worry", example: "I will worry about you until you call me." },
              { subject: "You", verb: "will worry", example: "You will worry less once you know all the facts." },
              { subject: "He/She", verb: "will worry", example: "She will worry about her exam results until they're posted." },
              { subject: "We", verb: "will worry", example: "We will worry about the details later." },
              { subject: "They", verb: "will worry", example: "They will worry about their children traveling alone." }
            ]
          },
          { 
            name: "Concentrate", 
            conjugations: [
              { subject: "I", verb: "will concentrate", example: "I will concentrate on finishing this report today." },
              { subject: "You", verb: "will concentrate", example: "You will concentrate better in a quiet environment." },
              { subject: "He/She", verb: "will concentrate", example: "He will concentrate on improving his weaknesses." },
              { subject: "We", verb: "will concentrate", example: "We will concentrate our efforts on the most promising markets." },
              { subject: "They", verb: "will concentrate", example: "They will concentrate resources in the areas of greatest need." }
            ]
          },
          { 
            name: "Vote", 
            conjugations: [
              { subject: "I", verb: "will vote", example: "I will vote in the upcoming election." },
              { subject: "You", verb: "will vote", example: "You will vote for the candidate who best represents your interests." },
              { subject: "He/She", verb: "will vote", example: "She will vote early by mail." },
              { subject: "We", verb: "will vote", example: "We will vote on the proposal at tomorrow's meeting." },
              { subject: "They", verb: "will vote", example: "They will vote according to their conscience." }
            ]
          },
          { 
            name: "Extend", 
            conjugations: [
              { subject: "I", verb: "will extend", example: "I will extend my stay for another week." },
              { subject: "You", verb: "will extend", example: "You will extend an invitation to the new neighbors." },
              { subject: "He/She", verb: "will extend", example: "He will extend the deadline until next Friday." },
              { subject: "We", verb: "will extend", example: "We will extend our product line next year." },
              { subject: "They", verb: "will extend", example: "They will extend their hours during the holiday season." }
            ]
          },
          { 
            name: "Lift", 
            conjugations: [
              { subject: "I", verb: "will lift", example: "I will lift the heavy box for you." },
              { subject: "You", verb: "will lift", example: "You will lift your spirits by focusing on positive things." },
              { subject: "He/She", verb: "will lift", example: "She will lift weights at the gym tomorrow." },
              { subject: "We", verb: "will lift", example: "We will lift the travel restrictions next month." },
              { subject: "They", verb: "will lift", example: "They will lift the car to change the flat tire." }
            ]
          },
          { 
            name: "Catch", 
            conjugations: [
              { subject: "I", verb: "will catch", example: "I will catch the early train tomorrow." },
              { subject: "You", verb: "will catch", example: "You will catch on quickly to the new system." },
              { subject: "He/She", verb: "will catch", example: "He will catch the ball if you throw it to him." },
              { subject: "We", verb: "will catch", example: "We will catch up on old times when we meet." },
              { subject: "They", verb: "will catch", example: "They will catch fish for dinner while camping." }
            ]
          },
          { 
            name: "Combine", 
            conjugations: [
              { subject: "I", verb: "will combine", example: "I will combine these ingredients to make a sauce." },
              { subject: "You", verb: "will combine", example: "You will combine your skills in a new creative project." },
              { subject: "He/She", verb: "will combine", example: "She will combine traditional and modern techniques in her artwork." },
              { subject: "We", verb: "will combine", example: "We will combine our resources to achieve better results." },
              { subject: "They", verb: "will combine", example: "They will combine their companies after the merger." }
            ]
          },
          { 
            name: "Propose", 
            conjugations: [
              { subject: "I", verb: "will propose", example: "I will propose a new solution at the meeting." },
              { subject: "You", verb: "will propose", example: "You will propose changes to the current system." },
              { subject: "He/She", verb: "will propose", example: "He will propose to his girlfriend on her birthday." },
              { subject: "We", verb: "will propose", example: "We will propose a compromise that works for everyone." },
              { subject: "They", verb: "will propose", example: "They will propose a joint venture to expand market reach." }
            ]
          },
          { 
            name: "Celebrate", 
            conjugations: [
              { subject: "I", verb: "will celebrate", example: "I will celebrate my promotion with friends this weekend." },
              { subject: "You", verb: "will celebrate", example: "You will celebrate your anniversary in Paris." },
              { subject: "He/She", verb: "will celebrate", example: "She will celebrate her graduation with a party." },
              { subject: "We", verb: "will celebrate", example: "We will celebrate the team's success at the annual dinner." },
              { subject: "They", verb: "will celebrate", example: "They will celebrate the new year with fireworks." }
            ]
          },
          { 
            name: "Supply", 
            conjugations: [
              { subject: "I", verb: "will supply", example: "I will supply all the materials for the project." },
              { subject: "You", verb: "will supply", example: "You will supply the food for the potluck." },
              { subject: "He/She", verb: "will supply", example: "He will supply evidence to support his claim." },
              { subject: "We", verb: "will supply", example: "We will supply water and snacks for the hike." },
              { subject: "They", verb: "will supply", example: "They will supply electricity to the remote village." }
            ]
          },
          { 
            name: "Link", 
            conjugations: [
              { subject: "I", verb: "will link", example: "I will link all related documents in my report." },
              { subject: "You", verb: "will link", example: "You will link your social media accounts for easier management." },
              { subject: "He/She", verb: "will link", example: "She will link the two concepts in her presentation." },
              { subject: "We", verb: "will link", example: "We will link our website to trusted partners." },
              { subject: "They", verb: "will link", example: "They will link arms in solidarity during the protest." }
            ]
          },
          { 
            name: "Demand", 
            conjugations: [
              { subject: "I", verb: "will demand", example: "I will demand a refund if the product doesn't work." },
              { subject: "You", verb: "will demand", example: "You will demand better service after this experience." },
              { subject: "He/She", verb: "will demand", example: "He will demand an explanation for the delay." },
              { subject: "We", verb: "will demand", example: "We will demand higher safety standards in the facility." },
              { subject: "They", verb: "will demand", example: "They will demand immediate action from the authorities." }
            ]
          },
          { 
            name: "Destroy", 
            conjugations: [
              { subject: "I", verb: "will destroy", example: "I will destroy the confidential documents after reading them." },
              { subject: "You", verb: "will destroy", example: "You will destroy your chances if you don't prepare properly." },
              { subject: "He/She", verb: "will destroy", example: "She will destroy the old shed to make room for a garden." },
              { subject: "We", verb: "will destroy", example: "We will destroy the old records after digitizing them." },
              { subject: "They", verb: "will destroy", example: "They will destroy the bridge to prevent enemy advancement." }
            ]
          },
          { 
            name: "Preserve", 
            conjugations: [
              { subject: "I", verb: "will preserve", example: "I will preserve these memories in a photo album." },
              { subject: "You", verb: "will preserve", example: "You will preserve the historic features of the building." },
              { subject: "He/She", verb: "will preserve", example: "He will preserve the specimen in formaldehyde." },
              { subject: "We", verb: "will preserve", example: "We will preserve our cultural heritage for future generations." },
              { subject: "They", verb: "will preserve", example: "They will preserve the forest as a wildlife sanctuary." }
            ]
          },
          { 
            name: "Blame", 
            conjugations: [
              { subject: "I", verb: "will blame", example: "I will blame myself if the project fails." },
              { subject: "You", verb: "will blame", example: "You will blame the weather for the cancellation." },
              { subject: "He/She", verb: "will blame", example: "She will blame her late arrival on traffic." },
              { subject: "We", verb: "will blame", example: "We will blame the system failure on outdated equipment." },
              { subject: "They", verb: "will blame", example: "They will blame each other for the misunderstanding." }
            ]
          },
          { 
            name: "Invest", 
            conjugations: [
              { subject: "I", verb: "will invest", example: "I will invest in renewable energy stocks." },
              { subject: "You", verb: "will invest", example: "You will invest time in learning new skills." },
              { subject: "He/She", verb: "will invest", example: "He will invest his savings in a startup company." },
              { subject: "We", verb: "will invest", example: "We will invest in employee development programs." },
              { subject: "They", verb: "will invest", example: "They will invest millions in the new factory." }
            ]
          },
          { 
            name: "Prefer", 
            conjugations: [
              { subject: "I", verb: "will prefer", example: "I will prefer to work from home whenever possible." },
              { subject: "You", verb: "will prefer", example: "You will prefer the new model once you try it." },
              { subject: "He/She", verb: "will prefer", example: "She will prefer tea to coffee in the morning." },
              { subject: "We", verb: "will prefer", example: "We will prefer to travel during the off-season." },
              { subject: "They", verb: "will prefer", example: "They will prefer digital copies to printed materials." }
            ]
          },
          { 
            name: "Demonstrate", 
            conjugations: [
              { subject: "I", verb: "will demonstrate", example: "I will demonstrate how to use the new equipment." },
              { subject: "You", verb: "will demonstrate", example: "You will demonstrate your skills during the interview." },
              { subject: "He/She", verb: "will demonstrate", example: "He will demonstrate the software features to clients." },
              { subject: "We", verb: "will demonstrate", example: "We will demonstrate our commitment through consistent actions." },
              { subject: "They", verb: "will demonstrate", example: "They will demonstrate against the new policy tomorrow." }
            ]
          },
          { 
            name: "Generate", 
            conjugations: [
              { subject: "I", verb: "will generate", example: "I will generate a report based on the survey results." },
              { subject: "You", verb: "will generate", example: "You will generate more leads with this marketing strategy." },
              { subject: "He/She", verb: "will generate", example: "She will generate new ideas during the brainstorming session." },
              { subject: "We", verb: "will generate", example: "We will generate enough revenue to cover our expenses." },
              { subject: "They", verb: "will generate", example: "They will generate electricity using solar panels." }
            ]
          },
          { 
            name: "Lock", 
            conjugations: [
              { subject: "I", verb: "will lock", example: "I will lock the door when I leave." },
              { subject: "You", verb: "will lock", example: "You will lock your computer screen during breaks." },
              { subject: "He/She", verb: "will lock", example: "He will lock the gates at closing time." },
              { subject: "We", verb: "will lock", example: "We will lock in the mortgage rate before it increases." },
              { subject: "They", verb: "will lock", example: "They will lock valuables in the hotel safe." }
            ]
          },
          { 
            name: "Adapt", 
            conjugations: [
              { subject: "I", verb: "will adapt", example: "I will adapt to the new working conditions." },
              { subject: "You", verb: "will adapt", example: "You will adapt your teaching style to suit different learners." },
              { subject: "He/She", verb: "will adapt", example: "She will adapt the novel for a screenplay." },
              { subject: "We", verb: "will adapt", example: "We will adapt our strategy based on market feedback." },
              { subject: "They", verb: "will adapt", example: "They will adapt to life in a foreign country." }
            ]
          },
          { 
            name: "Grab", 
            conjugations: [
              { subject: "I", verb: "will grab", example: "I will grab lunch before the meeting." },
              { subject: "You", verb: "will grab", example: "You will grab everyone's attention with your presentation." },
              { subject: "He/She", verb: "will grab", example: "He will grab his coat on the way out." },
              { subject: "We", verb: "will grab", example: "We will grab the last available tickets." },
              { subject: "They", verb: "will grab", example: "They will grab the opportunity to expand their business." }
            ]
          },
          { 
            name: "Calculate", 
            conjugations: [
              { subject: "I", verb: "will calculate", example: "I will calculate the total cost before ordering." },
              { subject: "You", verb: "will calculate", example: "You will calculate your expenses for tax purposes." },
              { subject: "He/She", verb: "will calculate", example: "She will calculate the dimensions of the room." },
              { subject: "We", verb: "will calculate", example: "We will calculate the project timeline this afternoon." },
              { subject: "They", verb: "will calculate", example: "They will calculate the environmental impact of the development." }
            ]
          },
          { 
            name: "Proceed", 
            conjugations: [
              { subject: "I", verb: "will proceed", example: "I will proceed with caution in this negotiation." },
              { subject: "You", verb: "will proceed", example: "You will proceed to the next phase after approval." },
              { subject: "He/She", verb: "will proceed", example: "He will proceed with the surgery as planned." },
              { subject: "We", verb: "will proceed", example: "We will proceed down the hallway to the conference room." },
              { subject: "They", verb: "will proceed", example: "They will proceed with construction despite the challenges." }
            ]
          },
          { 
            name: "Trust", 
            conjugations: [
              { subject: "I", verb: "will trust", example: "I will trust your judgment on this matter." },
              { subject: "You", verb: "will trust", example: "You will trust me once you see the results." },
              { subject: "He/She", verb: "will trust", example: "She will trust her team to complete the project." },
              { subject: "We", verb: "will trust", example: "We will trust the process despite the setbacks." },
              { subject: "They", verb: "will trust", example: "They will trust each other more after this team-building exercise." }
            ]
          },
          { 
            name: "Wake", 
            conjugations: [
              { subject: "I", verb: "will wake", example: "I will wake up early to catch the first train." },
              { subject: "You", verb: "will wake", example: "You will wake the baby if you make too much noise." },
              { subject: "He/She", verb: "will wake", example: "He will wake up refreshed after a good night's sleep." },
              { subject: "We", verb: "will wake", example: "We will wake everyone at 6 AM for the hike." },
              { subject: "They", verb: "will wake", example: "They will wake to the sound of birds every morning." }
            ]
          },
          { 
            name: "Hate", 
            conjugations: [
              { subject: "I", verb: "will hate", example: "I will hate leaving this beautiful place tomorrow." },
              { subject: "You", verb: "will hate", example: "You will hate yourself if you miss this opportunity." },
              { subject: "He/She", verb: "will hate", example: "She will hate the long commute to her new job." },
              { subject: "We", verb: "will hate", example: "We will hate to see you go after all these years." },
              { subject: "They", verb: "will hate", example: "They will hate waiting in line for hours." }
            ]
          },
          { 
            name: "Fear", 
            conjugations: [
              { subject: "I", verb: "will fear", example: "I will fear the consequences if we don't act now." },
              { subject: "You", verb: "will fear", example: "You will fear the unknown until you face it." },
              { subject: "He/She", verb: "will fear", example: "He will fear rejection if he continues to doubt himself." },
              { subject: "We", verb: "will fear", example: "We will fear nothing if we stand together." },
              { subject: "They", verb: "will fear", example: "They will fear the power of public opinion." }
            ]
          },
          { 
            name: "Possess", 
            conjugations: [
              { subject: "I", verb: "will possess", example: "I will possess all the necessary qualifications after completing this course." },
              { subject: "You", verb: "will possess", example: "You will possess greater confidence with experience." },
              { subject: "He/She", verb: "will possess", example: "She will possess the authority to make final decisions." },
              { subject: "We", verb: "will possess", example: "We will possess a competitive advantage with this innovation." },
              { subject: "They", verb: "will possess", example: "They will possess valuable skills in tomorrow's job market." }
            ]
          },
          { 
            name: "Recognize", 
            conjugations: [
              { subject: "I", verb: "will recognize", example: "I will recognize your contribution at the annual meeting." },
              { subject: "You", verb: "will recognize", example: "You will recognize the symptoms if they occur again." },
              { subject: "He/She", verb: "will recognize", example: "He will recognize the benefits of regular exercise." },
              { subject: "We", verb: "will recognize", example: "We will recognize outstanding performance with awards." },
              { subject: "They", verb: "will recognize", example: "They will recognize your efforts eventually." }
            ]
          },
          { 
            name: "Stretch", 
            conjugations: [
              { subject: "I", verb: "will stretch", example: "I will stretch before and after my workout." },
              { subject: "You", verb: "will stretch", example: "You will stretch your muscles to prevent injury." },
              { subject: "He/She", verb: "will stretch", example: "She will stretch the truth to avoid punishment." },
              { subject: "We", verb: "will stretch", example: "We will stretch our budget to afford the renovation." },
              { subject: "They", verb: "will stretch", example: "They will stretch out on the beach to sunbathe." }
            ]
          },
          { 
            name: "Light", 
            conjugations: [
              { subject: "I", verb: "will light", example: "I will light candles for a romantic dinner." },
              { subject: "You", verb: "will light", example: "You will light the way with your flashlight." },
              { subject: "He/She", verb: "will light", example: "He will light the campfire at dusk." },
              { subject: "We", verb: "will light", example: "We will light up the stage with special effects." },
              { subject: "They", verb: "will light", example: "They will light fireworks to celebrate the holiday." }
            ]
          },
          { 
            name: "Interview", 
            conjugations: [
              { subject: "I", verb: "will interview", example: "I will interview the candidates next week." },
              { subject: "You", verb: "will interview", example: "You will interview with the hiring manager on Friday." },
              { subject: "He/She", verb: "will interview", example: "She will interview the celebrity for her podcast." },
              { subject: "We", verb: "will interview", example: "We will interview potential suppliers before deciding." },
              { subject: "They", verb: "will interview", example: "They will interview witnesses to the accident." }
            ]
          },
          { 
            name: "Commit", 
            conjugations: [
              { subject: "I", verb: "will commit", example: "I will commit to regular exercise this year." },
              { subject: "You", verb: "will commit", example: "You will commit these facts to memory for the test." },
              { subject: "He/She", verb: "will commit", example: "She will commit resources to the new initiative." },
              { subject: "We", verb: "will commit", example: "We will commit to reducing our carbon footprint." },
              { subject: "They", verb: "will commit", example: "They will commit to the project for the next three years." }
            ]
          },
          { 
            name: "Reveal", 
            conjugations: [
              { subject: "I", verb: "will reveal", example: "I will reveal the secret when the time is right." },
              { subject: "You", verb: "will reveal", example: "You will reveal your true feelings eventually." },
              { subject: "He/She", verb: "will reveal", example: "He will reveal the winner at the ceremony." },
              { subject: "We", verb: "will reveal", example: "We will reveal our new product line at the trade show." },
              { subject: "They", verb: "will reveal", example: "They will reveal the results of the investigation tomorrow." }
            ]
          },
          { 
            name: "Load", 
            conjugations: [
              { subject: "I", verb: "will load", example: "I will load the dishwasher after dinner." },
              { subject: "You", verb: "will load", example: "You will load the software onto the new computers." },
              { subject: "He/She", verb: "will load", example: "He will load the truck with supplies for the event." },
              { subject: "We", verb: "will load", example: "We will load our luggage into the car before breakfast." },
              { subject: "They", verb: "will load", example: "They will load the cargo onto the ship tomorrow." }
            ]
          },
          { 
            name: "Highlight", 
            conjugations: [
              { subject: "I", verb: "will highlight", example: "I will highlight the key points in my presentation." },
              { subject: "You", verb: "will highlight", example: "You will highlight important passages in the textbook." },
              { subject: "He/She", verb: "will highlight", example: "She will highlight the team's achievements in her report." },
              { subject: "We", verb: "will highlight", example: "We will highlight the benefits of our service to potential clients." },
              { subject: "They", verb: "will highlight", example: "They will highlight areas for improvement in the review." }
            ]
          },
          { 
            name: "Guide", 
            conjugations: [
              { subject: "I", verb: "will guide", example: "I will guide you through the registration process." },
              { subject: "You", verb: "will guide", example: "You will guide the tour group through the museum." },
              { subject: "He/She", verb: "will guide", example: "He will guide the discussion to keep it on topic." },
              { subject: "We", verb: "will guide", example: "We will guide our decisions based on research." },
              { subject: "They", verb: "will guide", example: "They will guide visitors along the nature trail." }
            ]
          },
          { 
            name: "Quote", 
            conjugations: [
              { subject: "I", verb: "will quote", example: "I will quote you a price after inspecting the property." },
              { subject: "You", verb: "will quote", example: "You will quote Shakespeare in your speech." },
              { subject: "He/She", verb: "will quote", example: "She will quote experts to support her argument." },
              { subject: "We", verb: "will quote", example: "We will quote directly from the source in our paper." },
              { subject: "They", verb: "will quote", example: "They will quote multiple suppliers before making a decision." }
            ]
          },
          { 
            name: "Charge", 
            conjugations: [
              { subject: "I", verb: "will charge", example: "I will charge my phone before the trip." },
              { subject: "You", verb: "will charge", example: "You will charge a reasonable fee for your services." },
              { subject: "He/She", verb: "will charge", example: "She will charge ahead despite the obstacles." },
              { subject: "We", verb: "will charge", example: "We will charge admission to cover our costs." },
              { subject: "They", verb: "will charge", example: "They will charge the batteries for the emergency lights." }
            ]
          },
    ],
    "present Perfect": [
        {
            name: "Be",
            conjugations: [
                { subject: "I", verb: "have been", example: "I have been here for two hours." },
                { subject: "You", verb: "have been", example: "You have been working too hard." },
                { subject: "He/She", verb: "has been", example: "She has been studying French." },
                { subject: "We", verb: "have been", example: "We have been friends for years." },
                { subject: "They", verb: "have been", example: "They have been waiting since noon." }
            ]
        },
        {
            name: "Have",
            conjugations: [
                { subject: "I", verb: "have had", example: "I have had this car for five years." },
                { subject: "You", verb: "have had", example: "You have had many opportunities to succeed." },
                { subject: "He/She", verb: "has had", example: "She has had three job interviews this week." },
                { subject: "We", verb: "have had", example: "We have had many adventures together." },
                { subject: "They", verb: "have had", example: "They have had problems with their internet service." }
            ]
        },
        {
            name: "Do",
            conjugations: [
                { subject: "I", verb: "have done", example: "I have done all my homework." },
                { subject: "You", verb: "have done", example: "You have done an excellent job." },
                { subject: "He/She", verb: "has done", example: "He has done everything he can to help." },
                { subject: "We", verb: "have done", example: "We have done business with them before." },
                { subject: "They", verb: "have done", example: "They have done several projects together." }
            ]
        },
        {
            name: "Go",
            conjugations: [
                { subject: "I", verb: "have gone", example: "I have gone to Paris twice." },
                { subject: "You", verb: "have gone", example: "You have gone through a lot lately." },
                { subject: "He/She", verb: "has gone", example: "She has gone to the store." },
                { subject: "We", verb: "have gone", example: "We have gone camping every summer." },
                { subject: "They", verb: "have gone", example: "They have gone home for the holidays." }
            ]
        },
        {
            name: "Like",
            conjugations: [
                { subject: "I", verb: "have liked", example: "I have liked her cooking since we first met." },
                { subject: "You", verb: "have liked", example: "You have liked that band for years." },
                { subject: "He/She", verb: "has liked", example: "He has liked playing chess since childhood." },
                { subject: "We", verb: "have liked", example: "We have liked living in this neighborhood." },
                { subject: "They", verb: "have liked", example: "They have liked working together on projects." }
            ]
        },
        {
            name: "Work",
            conjugations: [
                { subject: "I", verb: "have worked", example: "I have worked here for five years." },
                { subject: "You", verb: "have worked", example: "You have worked on many interesting projects." },
                { subject: "He/She", verb: "has worked", example: "She has worked overtime all week." },
                { subject: "We", verb: "have worked", example: "We have worked together successfully in the past." },
                { subject: "They", verb: "have worked", example: "They have worked in several different countries." }
            ]
        },
        {
            name: "Eat",
            conjugations: [
                { subject: "I", verb: "have eaten", example: "I have eaten at that restaurant before." },
                { subject: "You", verb: "have eaten", example: "You have eaten all the cookies!" },
                { subject: "He/She", verb: "has eaten", example: "He has eaten sushi for the first time." },
                { subject: "We", verb: "have eaten", example: "We have eaten dinner already." },
                { subject: "They", verb: "have eaten", example: "They have eaten everything in the fridge." }
            ]
        },
        {
            name: "Study",
            conjugations: [
                { subject: "I", verb: "have studied", example: "I have studied Spanish for three years." },
                { subject: "You", verb: "have studied", example: "You have studied this topic thoroughly." },
                { subject: "He/She", verb: "has studied", example: "She has studied medicine at Harvard." },
                { subject: "We", verb: "have studied", example: "We have studied together since freshman year." },
                { subject: "They", verb: "have studied", example: "They have studied the problem from every angle." }
            ]
        },
        {
            name: "Live",
            conjugations: [
                { subject: "I", verb: "have lived", example: "I have lived in Chicago all my life." },
                { subject: "You", verb: "have lived", example: "You have lived in many interesting places." },
                { subject: "He/She", verb: "has lived", example: "He has lived abroad for several years." },
                { subject: "We", verb: "have lived", example: "We have lived next door to each other for a decade." },
                { subject: "They", verb: "have lived", example: "They have lived through difficult times together." }
            ]
        },
        {
            name: "Speak",
            conjugations: [
                { subject: "I", verb: "have spoken", example: "I have spoken to the manager about this issue." },
                { subject: "You", verb: "have spoken", example: "You have spoken very eloquently today." },
                { subject: "He/She", verb: "has spoken", example: "She has spoken three languages since childhood." },
                { subject: "We", verb: "have spoken", example: "We have spoken about this matter before." },
                { subject: "They", verb: "have spoken", example: "They have spoken to each other daily for years." }
            ]
        },
        {
            name: "Make",
            conjugations: [
                { subject: "I", verb: "have made", example: "I have made dinner for everyone." },
                { subject: "You", verb: "have made", example: "You have made significant progress." },
                { subject: "He/She", verb: "has made", example: "He has made several mistakes in his calculations." },
                { subject: "We", verb: "have made", example: "We have made plans for the weekend." },
                { subject: "They", verb: "have made", example: "They have made many sacrifices for their children." }
            ]
        },
        {
            name: "Get",
            conjugations: [
                { subject: "I", verb: "have got", example: "I have got a new job recently." },
                { subject: "You", verb: "have got", example: "You have got plenty of time to finish." },
                { subject: "He/She", verb: "has got", example: "She has got three promotions in two years." },
                { subject: "We", verb: "have got", example: "We have got tickets for the concert." },
                { subject: "They", verb: "have got", example: "They have got permission to extend the deadline." }
            ]
        },
        {
            name: "Take",
            conjugations: [
                { subject: "I", verb: "have taken", example: "I have taken your advice into consideration." },
                { subject: "You", verb: "have taken", example: "You have taken a lot of photos on this trip." },
                { subject: "He/She", verb: "has taken", example: "He has taken several days off work." },
                { subject: "We", verb: "have taken", example: "We have taken the train to work every day this week." },
                { subject: "They", verb: "have taken", example: "They have taken many courses to improve their skills." }
            ]
        },
        {
            name: "Come",
            conjugations: [
                { subject: "I", verb: "have come", example: "I have come to a decision finally." },
                { subject: "You", verb: "have come", example: "You have come a long way since you started." },
                { subject: "He/She", verb: "has come", example: "She has come to visit us twice this year." },
                { subject: "We", verb: "have come", example: "We have come to the same conclusion." },
                { subject: "They", verb: "have come", example: "They have come from all over the world for the conference." }
            ]
        },
        {
            name: "See",
            conjugations: [
                { subject: "I", verb: "have seen", example: "I have seen that movie three times." },
                { subject: "You", verb: "have seen", example: "You have seen all the evidence now." },
                { subject: "He/She", verb: "has seen", example: "He has seen major improvements in his health." },
                { subject: "We", verb: "have seen", example: "We have seen similar problems in the past." },
                { subject: "They", verb: "have seen", example: "They have seen many changes in the neighborhood." }
            ]
        },
        {
            name: "Know",
            conjugations: [
                { subject: "I", verb: "have known", example: "I have known him since we were children." },
                { subject: "You", verb: "have known", example: "You have known about this for weeks." },
                { subject: "He/She", verb: "has known", example: "She has known the truth all along." },
                { subject: "We", verb: "have known", example: "We have known each other for twenty years." },
                { subject: "They", verb: "have known", example: "They have known the risks from the beginning." }
            ]
        },
        {
            name: "Think",
            conjugations: [
                { subject: "I", verb: "have thought", example: "I have thought about your offer carefully." },
                { subject: "You", verb: "have thought", example: "You have thought of everything." },
                { subject: "He/She", verb: "has thought", example: "He has thought about changing careers." },
                { subject: "We", verb: "have thought", example: "We have thought about moving to the countryside." },
                { subject: "They", verb: "have thought", example: "They have thought about the consequences of their actions." }
            ]
        },
        {
            name: "Give",
            conjugations: [
                { subject: "I", verb: "have given", example: "I have given you multiple chances." },
                { subject: "You", verb: "have given", example: "You have given me so much support." },
                { subject: "He/She", verb: "has given", example: "She has given a lot of money to charity." },
                { subject: "We", verb: "have given", example: "We have given our best effort on this project." },
                { subject: "They", verb: "have given", example: "They have given up smoking recently." }
            ]
        },
        {
            name: "Find",
            conjugations: [
                { subject: "I", verb: "have found", example: "I have found my lost keys at last." },
                { subject: "You", verb: "have found", example: "You have found a solution to the problem." },
                { subject: "He/She", verb: "has found", example: "He has found a new apartment closer to work." },
                { subject: "We", verb: "have found", example: "We have found several errors in the report." },
                { subject: "They", verb: "have found", example: "They have found evidence to support their theory." }
            ]
        },
        {
            name: "Tell",
            conjugations: [
                { subject: "I", verb: "have told", example: "I have told you the truth about what happened." },
                { subject: "You", verb: "have told", example: "You have told this story many times before." },
                { subject: "He/She", verb: "has told", example: "She has told her parents about the engagement." },
                { subject: "We", verb: "have told", example: "We have told everyone about our plans to move." },
                { subject: "They", verb: "have told", example: "They have told the police everything they know." }
            ]
        },
        {
            name: "Ask",
            conjugations: [
                { subject: "I", verb: "have asked", example: "I have asked many questions during the lecture." },
                { subject: "You", verb: "have asked", example: "You have asked for help several times." },
                { subject: "He/She", verb: "has asked", example: "She has asked about your health." },
                { subject: "We", verb: "have asked", example: "We have asked for directions to the museum." },
                { subject: "They", verb: "have asked", example: "They have asked to reschedule the meeting." }
            ]
        },
        {
            name: "Feel",
            conjugations: [
                { subject: "I", verb: "have felt", example: "I have felt much better since taking the medicine." },
                { subject: "You", verb: "have felt", example: "You have felt this way before, haven't you?" },
                { subject: "He/She", verb: "has felt", example: "He has felt overwhelmed with his new responsibilities." },
                { subject: "We", verb: "have felt", example: "We have felt the community's support during this difficult time." },
                { subject: "They", verb: "have felt", example: "They have felt disappointed with the results." }
            ]
        },
        {
            name: "Become",
            conjugations: [
                { subject: "I", verb: "have become", example: "I have become more patient with age." },
                { subject: "You", verb: "have become", example: "You have become an excellent chef." },
                { subject: "He/She", verb: "has become", example: "She has become the team's most valuable player." },
                { subject: "We", verb: "have become", example: "We have become close friends over the years." },
                { subject: "They", verb: "have become", example: "They have become experts in their field." }
            ]
        },
        {
            name: "Leave",
            conjugations: [
                { subject: "I", verb: "have left", example: "I have left my keys at home." },
                { subject: "You", verb: "have left", example: "You have left a lasting impression on everyone." },
                { subject: "He/She", verb: "has left", example: "He has left the company after twenty years." },
                { subject: "We", verb: "have left", example: "We have left some food for you in the fridge." },
                { subject: "They", verb: "have left", example: "They have left the country for good." }
            ]
        },
        {
            name: "Put",
            conjugations: [
                { subject: "I", verb: "have put", example: "I have put all my savings into this investment." },
                { subject: "You", verb: "have put", example: "You have put too much salt in the soup." },
                { subject: "He/She", verb: "has put", example: "She has put her career on hold to raise her children." },
                { subject: "We", verb: "have put", example: "We have put a lot of effort into this project." },
                { subject: "They", verb: "have put", example: "They have put their house on the market." }
            ]
        },
        {
            name: "Mean",
            conjugations: [
                { subject: "I", verb: "have meant", example: "I have meant to call you for ages." },
                { subject: "You", verb: "have meant", example: "You have meant well, but your comments hurt her feelings." },
                { subject: "He/She", verb: "has meant", example: "He has meant every word he said." },
                { subject: "We", verb: "have meant", example: "We have meant to visit that restaurant for months." },
                { subject: "They", verb: "have meant", example: "They have meant to organize this event for years." }
            ]
        },
        {
            name: "Keep",
            conjugations: [
                { subject: "I", verb: "have kept", example: "I have kept all your letters." },
                { subject: "You", verb: "have kept", example: "You have kept this secret for too long." },
                { subject: "He/She", verb: "has kept", example: "She has kept in touch with her childhood friends." },
                { subject: "We", verb: "have kept", example: "We have kept this tradition alive for generations." },
                { subject: "They", verb: "have kept", example: "They have kept the business running despite difficulties." }
            ]
        },
        {
            name: "Let",
            conjugations: [
                { subject: "I", verb: "have let", example: "I have let my guard down too often." },
                { subject: "You", verb: "have let", example: "You have let him borrow your car several times." },
                { subject: "He/She", verb: "has let", example: "He has let his beard grow during the lockdown." },
                { subject: "We", verb: "have let", example: "We have let too many opportunities slip away." },
                { subject: "They", verb: "have let", example: "They have let their children make their own decisions." }
            ]
        },
        {
            name: "Help",
            conjugations: [
                { subject: "I", verb: "have helped", example: "I have helped many students improve their grades." },
                { subject: "You", verb: "have helped", example: "You have helped us through difficult times." },
                { subject: "He/She", verb: "has helped", example: "She has helped with the fundraising event." },
                { subject: "We", verb: "have helped", example: "We have helped build several houses for charity." },
                { subject: "They", verb: "have helped", example: "They have helped organize the conference." }
            ]
        },
        {
            name: "Talk",
            conjugations: [
                { subject: "I", verb: "have talked", example: "I have talked about this issue many times before." },
                { subject: "You", verb: "have talked", example: "You have talked to the manager about your concerns." },
                { subject: "He/She", verb: "has talked", example: "He has talked his way out of trouble again." },
                { subject: "We", verb: "have talked", example: "We have talked for hours about our future plans." },
                { subject: "They", verb: "have talked", example: "They have talked about moving to another city." }
            ]
        },
        {
            name: "Turn",
            conjugations: [
                { subject: "I", verb: "have turned", example: "I have turned down several job offers recently." },
                { subject: "You", verb: "have turned", example: "You have turned the situation around completely." },
                { subject: "He/She", verb: "has turned", example: "She has turned thirty this year." },
                { subject: "We", verb: "have turned", example: "We have turned our attention to more pressing matters." },
                { subject: "They", verb: "have turned", example: "They have turned the old factory into luxury apartments." }
            ]
        },
        {
            name: "Show",
            conjugations: [
                { subject: "I", verb: "have shown", example: "I have shown you how to solve this problem before." },
                { subject: "You", verb: "have shown", example: "You have shown great improvement this semester." },
                { subject: "He/She", verb: "has shown", example: "He has shown his artwork in galleries around the world." },
                { subject: "We", verb: "have shown", example: "We have shown our support for the cause." },
                { subject: "They", verb: "have shown", example: "They have shown interest in buying our house." }
            ]
        },
        {
            name: "Hear",
            conjugations: [
                { subject: "I", verb: "have heard", example: "I have heard that song many times." },
                { subject: "You", verb: "have heard", example: "You have heard this story before, I'm sure." },
                { subject: "He/She", verb: "has heard", example: "She has heard from her brother who lives abroad." },
                { subject: "We", verb: "have heard", example: "We have heard good things about your work." },
                { subject: "They", verb: "have heard", example: "They have heard rumors about the company closing." }
            ]
        },
        {
            name: "Play",
            conjugations: [
                { subject: "I", verb: "have played", example: "I have played tennis since I was a child." },
                { subject: "You", verb: "have played", example: "You have played an important role in this project." },
                { subject: "He/She", verb: "has played", example: "He has played the piano for twenty years." },
                { subject: "We", verb: "have played", example: "We have played against this team several times." },
                { subject: "They", verb: "have played", example: "They have played together in the school band." }
            ]
        },
        {
            name: "Run",
            conjugations: [
                { subject: "I", verb: "have run", example: "I have run three marathons this year." },
                { subject: "You", verb: "have run", example: "You have run your business successfully for a decade." },
                { subject: "He/She", verb: "has run", example: "She has run for office twice." },
                { subject: "We", verb: "have run", example: "We have run out of supplies." },
                { subject: "They", verb: "have run", example: "They have run into some unexpected problems." }
            ]
        },
        {
            name: "Move",
            conjugations: [
                { subject: "I", verb: "have moved", example: "I have moved house three times in the last year." },
                { subject: "You", verb: "have moved", example: "You have moved up quickly in the company." },
                { subject: "He/She", verb: "has moved", example: "He has moved to a bigger office." },
                { subject: "We", verb: "have moved", example: "We have moved on from that difficult period." },
                { subject: "They", verb: "have moved", example: "They have moved their headquarters to London." }
            ]
        },
        {
            name: "Want",
            conjugations: [
                { subject: "I", verb: "have wanted", example: "I have wanted to visit Japan for years." },
                { subject: "You", verb: "have wanted", example: "You have wanted a new car for a long time." },
                { subject: "He/She", verb: "has wanted", example: "She has wanted to change careers for some time." },
                { subject: "We", verb: "have wanted", example: "We have wanted to meet you in person." },
                { subject: "They", verb: "have wanted", example: "They have wanted to expand their business internationally." }
            ]
        },
        {
            name: "Need",
            conjugations: [
                { subject: "I", verb: "have needed", example: "I have needed your help many times in the past." },
                { subject: "You", verb: "have needed", example: "You have needed more resources to complete this project." },
                { subject: "He/She", verb: "has needed", example: "He has needed extra time to finish his assignments." },
                { subject: "We", verb: "have needed", example: "We have needed to make these changes for a long time." },
                { subject: "They", verb: "have needed", example: "They have needed support from the community." }
            ]
        },
        {
            name: "Start",
            conjugations: [
                { subject: "I", verb: "have started", example: "I have started learning Chinese." },
                { subject: "You", verb: "have started", example: "You have started many projects but finished few." },
                { subject: "He/She", verb: "has started", example: "She has started her own business." },
                { subject: "We", verb: "have started", example: "We have started planning our summer vacation." },
                { subject: "They", verb: "have started", example: "They have started renovating their house." }
            ]
        },
        {
            name: "Seem",
            conjugations: [
                { subject: "I", verb: "have seemed", example: "I have seemed distracted lately because of work stress." },
                { subject: "You", verb: "have seemed", example: "You have seemed happier since changing jobs." },
                { subject: "He/She", verb: "has seemed", example: "He has seemed more confident after taking that course." },
                { subject: "We", verb: "have seemed", example: "We have seemed to be making progress on this issue." },
                { subject: "They", verb: "have seemed", example: "They have seemed uncertain about their future plans." }
            ]
        },
        {
            name: "Look",
            conjugations: [
                { subject: "I", verb: "have looked", example: "I have looked everywhere for my keys." },
                { subject: "You", verb: "have looked", example: "You have looked tired lately." },
                { subject: "He/She", verb: "has looked", example: "She has looked into several universities for her studies." },
                { subject: "We", verb: "have looked", example: "We have looked at all the options available." },
                { subject: "They", verb: "have looked", example: "They have looked after our dog while we were away." }
            ]
        },
        {
            name: "Call",
            conjugations: [
                { subject: "I", verb: "have called", example: "I have called this meeting to discuss our strategy." },
                { subject: "You", verb: "have called", example: "You have called me three times today." },
                { subject: "He/She", verb: "has called", example: "He has called his mother every Sunday for years." },
                { subject: "We", verb: "have called", example: "We have called for immediate action on climate change." },
                { subject: "They", verb: "have called", example: "They have called off the wedding due to family circumstances." }
            ]
        },
        {
            name: "Try",
            conjugations: [
                { subject: "I", verb: "have tried", example: "I have tried to contact him several times." },
                { subject: "You", verb: "have tried", example: "You have tried your best, and that's what matters." },
                { subject: "He/She", verb: "has tried", example: "She has tried many different diets without success." },
                { subject: "We", verb: "have tried", example: "We have tried to resolve this issue for months." },
                { subject: "They", verb: "have tried", example: "They have tried various approaches to solve the problem." }
            ]
        },
        {
            name: "Use",
            conjugations: [
                { subject: "I", verb: "have used", example: "I have used this software for years." },
                { subject: "You", verb: "have used", example: "You have used all the available resources." },
                { subject: "He/She", verb: "has used", example: "He has used his influence to help the community." },
                { subject: "We", verb: "have used", example: "We have used this method successfully in the past." },
                { subject: "They", verb: "have used", example: "They have used public transportation since moving downtown." }
            ]
        },
        {
            name: "Bring",
            conjugations: [
                { subject: "I", verb: "have brought", example: "I have brought lunch for everyone in the office." },
                { subject: "You", verb: "have brought", example: "You have brought up a good point in the discussion." },
                { subject: "He/She", verb: "has brought", example: "She has brought her children to work today." },
                { subject: "We", verb: "have brought", example: "We have brought gifts from our travels abroad." },
                { subject: "They", verb: "have brought", example: "They have brought their expertise to the project." }
            ]
        },
        {
            name: "Begin",
            conjugations: [
                { subject: "I", verb: "have begun", example: "I have begun learning a new language." },
                { subject: "You", verb: "have begun", example: "You have begun to show real progress." },
                { subject: "He/She", verb: "has begun", example: "He has begun writing his first novel." },
                { subject: "We", verb: "have begun", example: "We have begun preparations for the annual conference." },
                { subject: "They", verb: "have begun", example: "They have begun to implement the new policies." }
            ]
        },
        {
            name: "Write",
            conjugations: [
                { subject: "I", verb: "have written", example: "I have written three books on this subject." },
                { subject: "You", verb: "have written", example: "You have written an excellent report." },
                { subject: "He/She", verb: "has written", example: "She has written to the company to complain." },
                { subject: "We", verb: "have written", example: "We have written the script for the school play." },
                { subject: "They", verb: "have written", example: "They have written several songs together." }
            ]
        },
        {
            name: "Read",
            conjugations: [
                { subject: "I", verb: "have read", example: "I have read all of Shakespeare's plays." },
                { subject: "You", verb: "have read", example: "You have read this book twice already." },
                { subject: "He/She", verb: "has read", example: "He has read about the incident in the newspaper." },
                { subject: "We", verb: "have read", example: "We have read through all the applications." },
                { subject: "They", verb: "have read", example: "They have read widely on this topic." }
            ]
        },
        {
            name: "Say",
            conjugations: [
                { subject: "I", verb: "have said", example: "I have said all I wanted to say on this matter." },
                { subject: "You", verb: "have said", example: "You have said enough for today." },
                { subject: "He/She", verb: "has said", example: "She has said she'll help with the project." },
                { subject: "We", verb: "have said", example: "We have said goodbye to our old colleagues." },
                { subject: "They", verb: "have said", example: "They have said they're moving to Canada." }
            ]
        },
        {
            name: "Stop",
            conjugations: [
                { subject: "I", verb: "have stopped", example: "I have stopped eating sugar completely." },
                { subject: "You", verb: "have stopped", example: "You have stopped making those mistakes now." },
                { subject: "He/She", verb: "has stopped", example: "He has stopped smoking recently." },
                { subject: "We", verb: "have stopped", example: "We have stopped for lunch at this restaurant before." },
                { subject: "They", verb: "have stopped", example: "They have stopped accepting credit cards." }
            ]
        },
        {
            name: "Learn",
            conjugations: [
                { subject: "I", verb: "have learned", example: "I have learned a lot from this experience." },
                { subject: "You", verb: "have learned", example: "You have learned to play the guitar very quickly." },
                { subject: "He/She", verb: "has learned", example: "She has learned three languages fluently." },
                { subject: "We", verb: "have learned", example: "We have learned from our past mistakes." },
                { subject: "They", verb: "have learned", example: "They have learned the importance of teamwork." }
            ]
        },
        {
            name: "Understand",
            conjugations: [
                { subject: "I", verb: "have understood", example: "I have understood the concept after your explanation." },
                { subject: "You", verb: "have understood", example: "You have understood the requirements correctly." },
                { subject: "He/She", verb: "has understood", example: "He has understood the implications of his decision." },
                { subject: "We", verb: "have understood", example: "We have understood your concerns and will address them." },
                { subject: "They", verb: "have understood", example: "They have understood the risks involved in this venture." }
            ]
        },
        {
            name: "Watch",
            conjugations: [
                { subject: "I", verb: "have watched", example: "I have watched this movie at least ten times." },
                { subject: "You", verb: "have watched", example: "You have watched too much television lately." },
                { subject: "He/She", verb: "has watched", example: "She has watched all episodes of that series." },
                { subject: "We", verb: "have watched", example: "We have watched the company grow over the years." },
                { subject: "They", verb: "have watched", example: "They have watched their children succeed with pride." }
            ]
        },
        {
            name: "Follow",
            conjugations: [
                { subject: "I", verb: "have followed", example: "I have followed your career with interest." },
                { subject: "You", verb: "have followed", example: "You have followed all the safety protocols." },
                { subject: "He/She", verb: "has followed", example: "He has followed in his father's footsteps." },
                { subject: "We", verb: "have followed", example: "We have followed your advice and it worked well." },
                { subject: "They", verb: "have followed", example: "They have followed the same routine for years." }
            ]
        },
        {
            name: "Walk",
            conjugations: [
                { subject: "I", verb: "have walked", example: "I have walked five miles every day this week." },
                { subject: "You", verb: "have walked", example: "You have walked the dog already, right?" },
                { subject: "He/She", verb: "has walked", example: "She has walked across the entire country for charity." },
                { subject: "We", verb: "have walked", example: "We have walked this path many times before." },
                { subject: "They", verb: "have walked", example: "They have walked away from several good opportunities." }
            ]
        },
        {
            name: "Meet",
            conjugations: [
                { subject: "I", verb: "have met", example: "I have met all the requirements for graduation." },
                { subject: "You", verb: "have met", example: "You have met her before, at the conference last year." },
                { subject: "He/She", verb: "has met", example: "He has met with the client twice this week." },
                { subject: "We", verb: "have met", example: "We have met our sales targets for the quarter." },
                { subject: "They", verb: "have met", example: "They have met with some resistance to their proposals." }
            ]
        },
        {
            name: "Consider",
            conjugations: [
                { subject: "I", verb: "have considered", example: "I have considered all the alternatives carefully." },
                { subject: "You", verb: "have considered", example: "You have considered my feelings in this matter." },
                { subject: "He/She", verb: "has considered", example: "She has considered applying for that position." },
                { subject: "We", verb: "have considered", example: "We have considered your application thoroughly." },
                { subject: "They", verb: "have considered", example: "They have considered moving to another country." }
            ]
        },
        {
            name: "Change",
            conjugations: [
                { subject: "I", verb: "have changed", example: "I have changed my mind about going to the party." },
                { subject: "You", verb: "have changed", example: "You have changed a lot since high school." },
                { subject: "He/She", verb: "has changed", example: "He has changed his approach to the problem." },
                { subject: "We", verb: "have changed", example: "We have changed our policies to be more inclusive." },
                { subject: "They", verb: "have changed", example: "They have changed the date of the wedding twice." }
            ]
        },
        {
            name: "Appear",
            conjugations: [
                { subject: "I", verb: "have appeared", example: "I have appeared on television several times." },
                { subject: "You", verb: "have appeared", example: "You have appeared to be very confident in your interviews." },
                { subject: "He/She", verb: "has appeared", example: "She has appeared in three major films this year." },
                { subject: "We", verb: "have appeared", example: "We have appeared before this judge in previous cases." },
                { subject: "They", verb: "have appeared", example: "They have appeared at numerous international conferences." }
            ]
        },
        {
            name: "Happen",
            conjugations: [
                { subject: "I", verb: "have happened", example: "I have happened to be in the right place at the right time." },
                { subject: "You", verb: "have happened", example: "You have happened upon an interesting discovery." },
                { subject: "He/She", verb: "has happened", example: "He has happened to mention your name several times." },
                { subject: "We", verb: "have happened", example: "We have happened to meet in unusual circumstances." },
                { subject: "They", verb: "have happened", example: "They have happened to come across some valuable information." }
            ]
        },
        {
            name: "Drive",
            conjugations: [
                { subject: "I", verb: "have driven", example: "I have driven across the country twice." },
                { subject: "You", verb: "have driven", example: "You have driven this car for many years." },
                { subject: "He/She", verb: "has driven", example: "She has driven us to the airport several times." },
                { subject: "We", verb: "have driven", example: "We have driven on this highway before." },
                { subject: "They", verb: "have driven", example: "They have driven for hours without a break." }
            ]
        },
        {
            name: "Send",
            conjugations: [
                { subject: "I", verb: "have sent", example: "I have sent the package to your address." },
                { subject: "You", verb: "have sent", example: "You have sent too many emails about this issue." },
                { subject: "He/She", verb: "has sent", example: "He has sent his application to multiple universities." },
                { subject: "We", verb: "have sent", example: "We have sent our condolences to the family." },
                { subject: "They", verb: "have sent", example: "They have sent representatives to the conference." }
            ]
        },
        {
            name: "Stay",
            conjugations: [
                { subject: "I", verb: "have stayed", example: "I have stayed at this hotel many times." },
                { subject: "You", verb: "have stayed", example: "You have stayed in touch with old friends." },
                { subject: "He/She", verb: "has stayed", example: "She has stayed up late studying for exams." },
                { subject: "We", verb: "have stayed", example: "We have stayed with my parents during the holidays." },
                { subject: "They", verb: "have stayed", example: "They have stayed together through difficult times." }
            ]
        },
        {
            name: "Receive",
            conjugations: [
                { subject: "I", verb: "have received", example: "I have received your letter of complaint." },
                { subject: "You", verb: "have received", example: "You have received several awards for your work." },
                { subject: "He/She", verb: "has received", example: "He has received confirmation of his booking." },
                { subject: "We", verb: "have received", example: "We have received many applications for this position." },
                { subject: "They", verb: "have received", example: "They have received funding for their research project." }
            ]
        },
        {
            name: "Remember",
            conjugations: [
                { subject: "I", verb: "have remembered", example: "I have remembered to lock the door." },
                { subject: "You", verb: "have remembered", example: "You have remembered my birthday every year." },
                { subject: "He/She", verb: "has remembered", example: "She has remembered everyone's names at the party." },
                { subject: "We", verb: "have remembered", example: "We have remembered to bring gifts for everyone." },
                { subject: "They", verb: "have remembered", example: "They have remembered our anniversary with a card." }
            ]
        },
        {
            name: "Expect",
            conjugations: [
                { subject: "I", verb: "have expected", example: "I have expected this outcome for some time." },
                { subject: "You", verb: "have expected", example: "You have expected too much from a beginner." },
                { subject: "He/She", verb: "has expected", example: "He has expected a reply to his email for days." },
                { subject: "We", verb: "have expected", example: "We have expected better results from this campaign." },
                { subject: "They", verb: "have expected", example: "They have expected us to finish the project by now." }
            ]
        },
        {
            name: "Buy",
            conjugations: [
                { subject: "I", verb: "have bought", example: "I have bought a new car recently." },
                { subject: "You", verb: "have bought", example: "You have bought the same brand for years." },
                { subject: "He/She", verb: "has bought", example: "She has bought a house in the countryside." },
                { subject: "We", verb: "have bought", example: "We have bought tickets for the concert next month." },
                { subject: "They", verb: "have bought", example: "They have bought several properties as investments." }
            ]
        },
        {
            name: "Build",
            conjugations: [
                { subject: "I", verb: "have built", example: "I have built my own furniture from scratch." },
                { subject: "You", verb: "have built", example: "You have built an impressive career in such a short time." },
                { subject: "He/She", verb: "has built", example: "He has built a reputation as a reliable contractor." },
                { subject: "We", verb: "have built", example: "We have built our business from nothing." },
                { subject: "They", verb: "have built", example: "They have built several schools in developing countries." }
            ]
        },
        {
            name: "Fall",
            conjugations: [
                { subject: "I", verb: "have fallen", example: "I have fallen behind on my reading schedule." },
                { subject: "You", verb: "have fallen", example: "You have fallen asleep during the movie." },
                { subject: "He/She", verb: "has fallen", example: "She has fallen in love with the city of Paris." },
                { subject: "We", verb: "have fallen", example: "We have fallen into a comfortable routine." },
                { subject: "They", verb: "have fallen", example: "They have fallen out of touch since college." }
            ]
        },
        {
            name: "Reach",
            conjugations: [
                { subject: "I", verb: "have reached", example: "I have reached my fitness goals for the month." },
                { subject: "You", verb: "have reached", example: "You have reached a new level of understanding." },
                { subject: "He/She", verb: "has reached", example: "He has reached out to old colleagues for advice." },
                { subject: "We", verb: "have reached", example: "We have reached an agreement with the union." },
                { subject: "They", verb: "have reached", example: "They have reached the summit of Mount Everest." }
            ]
        },
        {
            name: "Remain",
            conjugations: [
                { subject: "I", verb: "have remained", example: "I have remained loyal to this brand for decades." },
                { subject: "You", verb: "have remained", example: "You have remained calm throughout this crisis." },
                { subject: "He/She", verb: "has remained", example: "She has remained in the same position for five years." },
                { subject: "We", verb: "have remained", example: "We have remained friends despite living in different countries." },
                { subject: "They", verb: "have remained", example: "They have remained silent on the controversial issue." }
            ]
        },
        {
            name: "Believe",
            conjugations: [
                { subject: "I", verb: "have believed", example: "I have believed in your potential from the beginning." },
                { subject: "You", verb: "have believed", example: "You have believed every word he said." },
                { subject: "He/She", verb: "has believed", example: "He has believed in this cause for many years." },
                { subject: "We", verb: "have believed", example: "We have believed that change is possible." },
                { subject: "They", verb: "have believed", example: "They have believed the rumors without questioning them." }
            ]
        },
        {
            name: "Hold",
            conjugations: [
                { subject: "I", verb: "have held", example: "I have held this position for three years." },
                { subject: "You", verb: "have held", example: "You have held your ground impressively in that debate." },
                { subject: "He/She", verb: "has held", example: "She has held several records in swimming." },
                { subject: "We", verb: "have held", example: "We have held meetings every Monday for a year." },
                { subject: "They", verb: "have held", example: "They have held power in this region for decades." }
            ]
        },
        {
            name: "Sell",
            conjugations: [
                { subject: "I", verb: "have sold", example: "I have sold my old car to a neighbor." },
                { subject: "You", verb: "have sold", example: "You have sold more properties than anyone else in the company." },
                { subject: "He/She", verb: "has sold", example: "He has sold all his paintings at the exhibition." },
                { subject: "We", verb: "have sold", example: "We have sold our house and moved to an apartment." },
                { subject: "They", verb: "have sold", example: "They have sold thousands of copies of their new book." }
            ]
        },
        {
            name: "Pay",
            conjugations: [
                { subject: "I", verb: "have paid", example: "I have paid all my bills for this month." },
                { subject: "You", verb: "have paid", example: "You have paid too much for that laptop." },
                { subject: "He/She", verb: "has paid", example: "She has paid attention to every detail." },
                { subject: "We", verb: "have paid", example: "We have paid for our vacation in advance." },
                { subject: "They", verb: "have paid", example: "They have paid off their mortgage early." }
            ]
        },
        {
            name: "Open",
            conjugations: [
                { subject: "I", verb: "have opened", example: "I have opened a new bank account." },
                { subject: "You", verb: "have opened", example: "You have opened my eyes to new possibilities." },
                { subject: "He/She", verb: "has opened", example: "He has opened his own restaurant in the city center." },
                { subject: "We", verb: "have opened", example: "We have opened branches in three new countries." },
                { subject: "They", verb: "have opened", example: "They have opened the museum to the public." }
            ]
        },
        {
            name: "Lose",
            conjugations: [
                { subject: "I", verb: "have lost", example: "I have lost my keys somewhere in the house." },
                { subject: "You", verb: "have lost", example: "You have lost weight since you started exercising." },
                { subject: "He/She", verb: "has lost", example: "She has lost interest in playing the piano." },
                { subject: "We", verb: "have lost", example: "We have lost touch with many old friends." },
                { subject: "They", verb: "have lost", example: "They have lost three matches in a row." }
            ]
        },
        {
            name: "Wait",
            conjugations: [
                { subject: "I", verb: "have waited", example: "I have waited for this opportunity for years." },
                { subject: "You", verb: "have waited", example: "You have waited patiently for your turn." },
                { subject: "He/She", verb: "has waited", example: "He has waited in line for three hours." },
                { subject: "We", verb: "have waited", example: "We have waited too long to address this issue." },
                { subject: "They", verb: "have waited", example: "They have waited for the bus in the rain." }
            ]
        },
        {
            name: "Serve",
            conjugations: [
                { subject: "I", verb: "have served", example: "I have served in the military for ten years." },
                { subject: "You", verb: "have served", example: "You have served on the committee since its formation." },
                { subject: "He/She", verb: "has served", example: "She has served as director for two terms." },
                { subject: "We", verb: "have served", example: "We have served this community for generations." },
                { subject: "They", verb: "have served", example: "They have served excellent food at their restaurant." }
            ]
        },
        {
            name: "Die",
            conjugations: [
                { subject: "I", verb: "have died", example: "I have died a thousand deaths waiting for your call." },
                { subject: "You", verb: "have died", example: "You have died many times in this video game." },
                { subject: "He/She", verb: "has died", example: "She has died her hair blonde for the summer." },
                { subject: "We", verb: "have died", example: "We have died laughing at his jokes." },
                { subject: "They", verb: "have died", example: "They have died out in many regions due to climate change." }
            ]
        },
        {
            name: "Lead",
            conjugations: [
                { subject: "I", verb: "have led", example: "I have led the team for three years now." },
                { subject: "You", verb: "have led", example: "You have led several successful projects." },
                { subject: "He/She", verb: "has led", example: "She has led the company through difficult times." },
                { subject: "We", verb: "have led", example: "We have led the industry in innovation." },
                { subject: "They", verb: "have led", example: "They have led expeditions to remote areas of the world." }
            ]
        },
        {
            name: "Break",
            conjugations: [
                { subject: "I", verb: "have broken", example: "I have broken my personal record in the marathon." },
                { subject: "You", verb: "have broken", example: "You have broken your promise to be on time." },
                { subject: "He/She", verb: "has broken", example: "He has broken his arm while skiing." },
                { subject: "We", verb: "have broken", example: "We have broken through barriers in medical research." },
                { subject: "They", verb: "have broken", example: "They have broken off negotiations with the supplier." }
            ]
        },
        {
            name: "Create",
            conjugations: [
                { subject: "I", verb: "have created", example: "I have created a website for my business." },
                { subject: "You", verb: "have created", example: "You have created beautiful artwork for the exhibition." },
                { subject: "He/She", verb: "has created", example: "She has created a new recipe that everyone loves." },
                { subject: "We", verb: "have created", example: "We have created opportunities for young people in our community." },
                { subject: "They", verb: "have created", example: "They have created a successful startup from scratch." }
            ]
        },
        {
            name: "Sleep",
            conjugations: [
                { subject: "I", verb: "have slept", example: "I have slept poorly for the past week." },
                { subject: "You", verb: "have slept", example: "You have slept through your alarm again." },
                { subject: "He/She", verb: "has slept", example: "He has slept in this hotel many times before." },
                { subject: "We", verb: "have slept", example: "We have slept under the stars during our camping trip." },
                { subject: "They", verb: "have slept", example: "They have slept through the entire presentation." }
            ]
        },
        {
            name: "Win",
            conjugations: [
                { subject: "I", verb: "have won", example: "I have won several prizes in photography competitions." },
                { subject: "You", verb: "have won", example: "You have won the respect of your colleagues." },
                { subject: "He/She", verb: "has won", example: "She has won three gold medals in the Olympics." },
                { subject: "We", verb: "have won", example: "We have won against stronger teams in the past." },
                { subject: "They", verb: "have won", example: "They have won four matches in a row." }
            ]
        },
        {
            name: "Offer",
            conjugations: [
                { subject: "I", verb: "have offered", example: "I have offered to help them move house." },
                { subject: "You", verb: "have offered", example: "You have offered your services free of charge." },
                { subject: "He/She", verb: "has offered", example: "He has offered a good price for the antique furniture." },
                { subject: "We", verb: "have offered", example: "We have offered support to families in need." },
                { subject: "They", verb: "have offered", example: "They have offered to host the next conference." }
            ]
        },
        {
            name: "Grow",
            conjugations: [
                { subject: "I", verb: "have grown", example: "I have grown tomatoes in my garden for years." },
                { subject: "You", verb: "have grown", example: "You have grown much taller since I last saw you." },
                { subject: "He/She", verb: "has grown", example: "She has grown her business from a small shop to a chain." },
                { subject: "We", verb: "have grown", example: "We have grown accustomed to working remotely." },
                { subject: "They", verb: "have grown", example: "They have grown tired of the constant noise." }
            ]
        },
        {
            name: "Teach",
            conjugations: [
                { subject: "I", verb: "have taught", example: "I have taught English in several countries." },
                { subject: "You", verb: "have taught", example: "You have taught me so much about patience." },
                { subject: "He/She", verb: "has taught", example: "He has taught at this university for twenty years." },
                { subject: "We", verb: "have taught", example: "We have taught this method to hundreds of students." },
                { subject: "They", verb: "have taught", example: "They have taught themselves how to code." }
            ]
        },
        {
            name: "Cook",
            conjugations: [
                { subject: "I", verb: "have cooked", example: "I have cooked dinner for the whole family." },
                { subject: "You", verb: "have cooked", example: "You have cooked this recipe many times before." },
                { subject: "He/She", verb: "has cooked", example: "She has cooked professionally for five years." },
                { subject: "We", verb: "have cooked", example: "We have cooked traditional dishes from many cultures." },
                { subject: "They", verb: "have cooked", example: "They have cooked all the meals for the event." }
            ]
        },
        {
            name: "Spend",
            conjugations: [
                { subject: "I", verb: "have spent", example: "I have spent too much money on clothes this month." },
                { subject: "You", verb: "have spent", example: "You have spent hours working on this project." },
                { subject: "He/She", verb: "has spent", example: "He has spent his life studying marine biology." },
                { subject: "We", verb: "have spent", example: "We have spent our vacation in the mountains." },
                { subject: "They", verb: "have spent", example: "They have spent a fortune renovating their house." }
            ]
        },
        {
            name: "Draw",
            conjugations: [
                { subject: "I", verb: "have drawn", example: "I have drawn a map to help you find the location." },
                { subject: "You", verb: "have drawn", example: "You have drawn some interesting conclusions from the data." },
                { subject: "He/She", verb: "has drawn", example: "She has drawn inspiration from nature for her designs." },
                { subject: "We", verb: "have drawn", example: "We have drawn up a new contract for you to review." },
                { subject: "They", verb: "have drawn", example: "They have drawn attention to this important issue." }
            ]
        },
        {
            name: "Continue",
            conjugations: [
                { subject: "I", verb: "have continued", example: "I have continued to practice daily despite the challenges." },
                { subject: "You", verb: "have continued", example: "You have continued working under difficult circumstances." },
                { subject: "He/She", verb: "has continued", example: "He has continued his studies abroad." },
                { subject: "We", verb: "have continued", example: "We have continued our family traditions for generations." },
                { subject: "They", verb: "have continued", example: "They have continued to support the charity for many years." }
            ]
        },
        {
            name: "Sit",
            conjugations: [
                { subject: "I", verb: "have sat", example: "I have sat through many boring meetings." },
                { subject: "You", verb: "have sat", example: "You have sat in that chair for hours without a break." },
                { subject: "He/She", verb: "has sat", example: "She has sat on the board of directors for five years." },
                { subject: "We", verb: "have sat", example: "We have sat together at many family dinners." },
                { subject: "They", verb: "have sat", example: "They have sat exams in various subjects." }
            ]
        },
        {
            name: "Rise",
            conjugations: [
                { subject: "I", verb: "have risen", example: "I have risen to the challenge despite my fears." },
                { subject: "You", verb: "have risen", example: "You have risen above the criticism and continued your work." },
                { subject: "He/She", verb: "has risen", example: "He has risen through the ranks quickly." },
                { subject: "We", verb: "have risen", example: "We have risen early every day this week." },
                { subject: "They", verb: "have risen", example: "They have risen in popularity since their last album." }
            ]
        },
        {
            name: "Drink",
            conjugations: [
                { subject: "I", verb: "have drunk", example: "I have drunk three cups of coffee today." },
                { subject: "You", verb: "have drunk", example: "You have drunk all the milk in the fridge." },
                { subject: "He/She", verb: "has drunk", example: "She has drunk water from that fountain for years." },
                { subject: "We", verb: "have drunk", example: "We have drunk this brand of tea for generations." },
                { subject: "They", verb: "have drunk", example: "They have drunk too much and shouldn't drive." }
            ]
        },
        {
            name: "Wear",
            conjugations: [
                { subject: "I", verb: "have worn", example: "I have worn this watch every day for ten years." },
                { subject: "You", verb: "have worn", example: "You have worn that shirt three times this week." },
                { subject: "He/She", verb: "has worn", example: "He has worn glasses since childhood." },
                { subject: "We", verb: "have worn", example: "We have worn traditional costumes for the celebration." },
                { subject: "They", verb: "have worn", example: "They have worn matching outfits to the party." }
            ]
        },
        {
            name: "Choose",
            conjugations: [
                { subject: "I", verb: "have chosen", example: "I have chosen a career in medicine." },
                { subject: "You", verb: "have chosen", example: "You have chosen wisely in this matter." },
                { subject: "He/She", verb: "has chosen", example: "She has chosen to study abroad next semester." },
                { subject: "We", verb: "have chosen", example: "We have chosen the perfect location for our wedding." },
                { subject: "They", verb: "have chosen", example: "They have chosen different paths after graduation." }
            ]
        },
        {
            name: "Travel",
            conjugations: [
                { subject: "I", verb: "have travelled", example: "I have travelled to more than twenty countries." },
                { subject: "You", verb: "have travelled", example: "You have travelled extensively in South America." },
                { subject: "He/She", verb: "has travelled", example: "He has travelled by train across Europe." },
                { subject: "We", verb: "have travelled", example: "We have travelled together for many years." },
                { subject: "They", verb: "have travelled", example: "They have travelled to remote corners of the world." }
            ]
        },
        {
            name: "Forget",
            conjugations: [
                { subject: "I", verb: "have forgotten", example: "I have forgotten my password again." },
                { subject: "You", verb: "have forgotten", example: "You have forgotten to turn off the lights." },
                { subject: "He/She", verb: "has forgotten", example: "She has forgotten her anniversary for the first time." },
                { subject: "We", verb: "have forgotten", example: "We have forgotten how challenging this can be." },
                { subject: "They", verb: "have forgotten", example: "They have forgotten to respond to our invitation." }
            ]
        },
        {
            name: "Smile",
            conjugations: [
                { subject: "I", verb: "have smiled", example: "I have smiled more today than I have in weeks." },
                { subject: "You", verb: "have smiled", example: "You have smiled through difficult times." },
                { subject: "He/She", verb: "has smiled", example: "He has smiled at every customer who has entered the store." },
                { subject: "We", verb: "have smiled", example: "We have smiled for numerous photos today." },
                { subject: "They", verb: "have smiled", example: "They have smiled politely throughout the boring presentation." }
            ]
        },
        {
            name: "Finish",
            conjugations: [
                { subject: "I", verb: "have finished", example: "I have finished reading that book you recommended." },
                { subject: "You", verb: "have finished", example: "You have finished the assignment ahead of schedule." },
                { subject: "He/She", verb: "has finished", example: "She has finished her degree with honors." },
                { subject: "We", verb: "have finished", example: "We have finished renovating the kitchen." },
                { subject: "They", verb: "have finished", example: "They have finished their training program." }
            ]
        },
        {
            name: "Decide",
            conjugations: [
                { subject: "I", verb: "have decided", example: "I have decided to accept the job offer." },
                { subject: "You", verb: "have decided", example: "You have decided wisely in this matter." },
                { subject: "He/She", verb: "has decided", example: "He has decided to study abroad next year." },
                { subject: "We", verb: "have decided", example: "We have decided on a destination for our vacation." },
                { subject: "They", verb: "have decided", example: "They have decided against selling their company." }
            ]
        },
        {
            name: "Explain",
            conjugations: [
                { subject: "I", verb: "have explained", example: "I have explained this concept many times." },
                { subject: "You", verb: "have explained", example: "You have explained your position clearly." },
                { subject: "He/She", verb: "has explained", example: "She has explained the procedure to the new employees." },
                { subject: "We", verb: "have explained", example: "We have explained our policies to all customers." },
                { subject: "They", verb: "have explained", example: "They have explained the reasons for their decision." }
            ]
        },
        {
            name: "Develop",
            conjugations: [
                { subject: "I", verb: "have developed", example: "I have developed a new approach to solving this problem." },
                { subject: "You", verb: "have developed", example: "You have developed impressive skills in such a short time." },
                { subject: "He/She", verb: "has developed", example: "He has developed a mobile app for language learning." },
                { subject: "We", verb: "have developed", example: "We have developed strong partnerships with local businesses." },
                { subject: "They", verb: "have developed", example: "They have developed a reputation for excellence." }
            ]
        },
        {
            name: "Accept",
            conjugations: [
                { subject: "I", verb: "have accepted", example: "I have accepted your apology." },
                { subject: "You", verb: "have accepted", example: "You have accepted too many responsibilities lately." },
                { subject: "He/She", verb: "has accepted", example: "She has accepted a position at another company." },
                { subject: "We", verb: "have accepted", example: "We have accepted all the terms of the agreement." },
                { subject: "They", verb: "have accepted", example: "They have accepted our invitation to the conference." }
            ]
        },
        {
            name: "Drop",
            conjugations: [
                { subject: "I", verb: "have dropped", example: "I have dropped my phone several times but it still works." },
                { subject: "You", verb: "have dropped", example: "You have dropped hints about wanting a promotion." },
                { subject: "He/She", verb: "has dropped", example: "He has dropped out of the race due to injury." },
                { subject: "We", verb: "have dropped", example: "We have dropped the price to attract more customers." },
                { subject: "They", verb: "have dropped", example: "They have dropped by unexpectedly a few times." }
            ]
        },
        {
            name: "Present",
            conjugations: [
                { subject: "I", verb: "have presented", example: "I have presented at numerous conferences this year." },
                { subject: "You", verb: "have presented", example: "You have presented your ideas clearly to management." },
                { subject: "He/She", verb: "has presented", example: "She has presented her research findings to the board." },
                { subject: "We", verb: "have presented", example: "We have presented our proposal to several potential investors." },
                { subject: "They", verb: "have presented", example: "They have presented a united front during the negotiations." }
            ]
        },
        {
            name: "Plan",
            conjugations: [
                { subject: "I", verb: "have planned", example: "I have planned our itinerary for the entire trip." },
                { subject: "You", verb: "have planned", example: "You have planned this event perfectly." },
                { subject: "He/She", verb: "has planned", example: "He has planned his retirement carefully." },
                { subject: "We", verb: "have planned", example: "We have planned to meet at the restaurant at seven." },
                { subject: "They", verb: "have planned", example: "They have planned their wedding for next spring." }
            ]
        },
        {
            name: "Argue",
            conjugations: [
                { subject: "I", verb: "have argued", example: "I have argued for this policy change for years." },
                { subject: "You", verb: "have argued", example: "You have argued convincingly in defense of your thesis." },
                { subject: "He/She", verb: "has argued", example: "She has argued with her brother about politics many times." },
                { subject: "We", verb: "have argued", example: "We have argued our case before the committee." },
                { subject: "They", verb: "have argued", example: "They have argued about this issue without resolution." }
            ]
        },
        {
            name: "Support",
            conjugations: [
                { subject: "I", verb: "have supported", example: "I have supported this charity for many years." },
                { subject: "You", verb: "have supported", example: "You have supported me through difficult times." },
                { subject: "He/She", verb: "has supported", example: "He has supported his family since he was eighteen." },
                { subject: "We", verb: "have supported", example: "We have supported local businesses during the crisis." },
                { subject: "They", verb: "have supported", example: "They have supported the campaign with generous donations." }
            ]
        },
        {
            name: "Jump",
            conjugations: [
                { subject: "I", verb: "have jumped", example: "I have jumped at the opportunity to work abroad." },
                { subject: "You", verb: "have jumped", example: "You have jumped to conclusions without hearing all the facts." },
                { subject: "He/She", verb: "has jumped", example: "She has jumped rope every morning for exercise." },
                { subject: "We", verb: "have jumped", example: "We have jumped through many hoops to get this approval." },
                { subject: "They", verb: "have jumped", example: "They have jumped from one project to another this year." }
            ]
        },
        {
            name: "Share",
            conjugations: [
                { subject: "I", verb: "have shared", example: "I have shared my concerns with the manager." },
                { subject: "You", verb: "have shared", example: "You have shared your expertise generously with colleagues." },
                { subject: "He/She", verb: "has shared", example: "He has shared his apartment with roommates for years." },
                { subject: "We", verb: "have shared", example: "We have shared many happy moments together." },
                { subject: "They", verb: "have shared", example: "They have shared responsibility for the project." }
            ]
        },
        {
            name: "Pass",
            conjugations: [
                { subject: "I", verb: "have passed", example: "I have passed all my exams this semester." },
                { subject: "You", verb: "have passed", example: "You have passed the ball to the wrong player." },
                { subject: "He/She", verb: "has passed", example: "She has passed by this store many times without noticing it." },
                { subject: "We", verb: "have passed", example: "We have passed through several small towns on our journey." },
                { subject: "They", verb: "have passed", example: "They have passed a new law regulating this industry." }
            ]
        },
        {
            name: "Save",
            conjugations: [
                { subject: "I", verb: "have saved", example: "I have saved money for a down payment on a house." },
                { subject: "You", verb: "have saved", example: "You have saved the day with your quick thinking." },
                { subject: "He/She", verb: "has saved", example: "He has saved many lives as a doctor." },
                { subject: "We", verb: "have saved", example: "We have saved enough to travel to Europe next year." },
                { subject: "They", verb: "have saved", example: "They have saved their company from bankruptcy." }
            ]
        },
        {
            name: "Control",
            conjugations: [
                { subject: "I", verb: "have controlled", example: "I have controlled my temper in difficult situations." },
                { subject: "You", verb: "have controlled", example: "You have controlled the meeting effectively." },
                { subject: "He/She", verb: "has controlled", example: "She has controlled the department budget for five years." },
                { subject: "We", verb: "have controlled", example: "We have controlled the spread of the disease." },
                { subject: "They", verb: "have controlled", example: "They have controlled access to the building since the incident." }
            ]
        },
        {
            name: "Wonder",
            conjugations: [
                { subject: "I", verb: "have wondered", example: "I have wondered about the meaning of life." },
                { subject: "You", verb: "have wondered", example: "You have wondered if you made the right choice." },
                { subject: "He/She", verb: "has wondered", example: "He has wondered about moving to another country." },
                { subject: "We", verb: "have wondered", example: "We have wondered how different our lives might have been." },
                { subject: "They", verb: "have wondered", example: "They have wondered about the future of their company." }
            ]
        },
        {
            name: "Include",
            conjugations: [
                { subject: "I", verb: "have included", example: "I have included everyone's suggestions in the report." },
                { subject: "You", verb: "have included", example: "You have included too many details in your presentation." },
                { subject: "He/She", verb: "has included", example: "She has included references to her previous work." },
                { subject: "We", verb: "have included", example: "We have included extra features at no additional cost." },
                { subject: "They", verb: "have included", example: "They have included diverse perspectives in their research." }
            ]
        },
        {
            name: "Agree",
            conjugations: [
                { subject: "I", verb: "have agreed", example: "I have agreed to take on more responsibilities." },
                { subject: "You", verb: "have agreed", example: "You have agreed to all the terms in the contract." },
                { subject: "He/She", verb: "has agreed", example: "He has agreed to speak at our conference." },
                { subject: "We", verb: "have agreed", example: "We have agreed on a compromise solution." },
                { subject: "They", verb: "have agreed", example: "They have agreed to meet with us next week." }
            ]
        },
        {
            name: "Return",
            conjugations: [
                { subject: "I", verb: "have returned", example: "I have returned to my hometown after twenty years." },
                { subject: "You", verb: "have returned", example: "You have returned the book late to the library." },
                { subject: "He/She", verb: "has returned", example: "She has returned from her business trip early." },
                { subject: "We", verb: "have returned", example: "We have returned to this restaurant many times." },
                { subject: "They", verb: "have returned", example: "They have returned all the borrowed equipment." }
            ]
        },
        {
            name: "Describe",
            conjugations: [
                { subject: "I", verb: "have described", example: "I have described the symptoms to my doctor." },
                { subject: "You", verb: "have described", example: "You have described the situation accurately." },
                { subject: "He/She", verb: "has described", example: "He has described his experience in great detail." },
                { subject: "We", verb: "have described", example: "We have described our requirements clearly." },
                { subject: "They", verb: "have described", example: "They have described the suspect to the police." }
            ]
        },
        {
            name: "Hope",
            conjugations: [
                { subject: "I", verb: "have hoped", example: "I have hoped for better weather during our vacation." },
                { subject: "You", verb: "have hoped", example: "You have hoped for a promotion for a long time." },
                { subject: "He/She", verb: "has hoped", example: "She has hoped to visit Paris since childhood." },
                { subject: "We", verb: "have hoped", example: "We have hoped for a peaceful resolution to the conflict." },
                { subject: "They", verb: "have hoped", example: "They have hoped to expand their business internationally." }
            ]
        },
        {
            name: "Allow",
            conjugations: [
                { subject: "I", verb: "have allowed", example: "I have allowed extra time for traffic delays." },
                { subject: "You", verb: "have allowed", example: "You have allowed your children more freedom lately." },
                { subject: "He/She", verb: "has allowed", example: "He has allowed employees to work from home one day a week." },
                { subject: "We", verb: "have allowed", example: "We have allowed visitors to take photographs in the museum." },
                { subject: "They", verb: "have allowed", example: "They have allowed us to use their facilities for the event." }
            ]
        },
        {
            name: "Visit",
            conjugations: [
                { subject: "I", verb: "have visited", example: "I have visited Japan three times." },
                { subject: "You", verb: "have visited", example: "You have visited your grandmother regularly." },
                { subject: "He/She", verb: "has visited", example: "She has visited many historic sites in Europe." },
                { subject: "We", verb: "have visited", example: "We have visited this restaurant on special occasions." },
                { subject: "They", verb: "have visited", example: "They have visited all seven continents." }
            ]
        },
        {
            name: "Complete",
            conjugations: [
                { subject: "I", verb: "have completed", example: "I have completed all the required coursework." },
                { subject: "You", verb: "have completed", example: "You have completed the marathon in record time." },
                { subject: "He/She", verb: "has completed", example: "He has completed his community service hours." },
                { subject: "We", verb: "have completed", example: "We have completed the first phase of the project." },
                { subject: "They", verb: "have completed", example: "They have completed the renovation ahead of schedule." }
            ]
        },
        {
            name: "Love",
            conjugations: [
                { subject: "I", verb: "have loved", example: "I have loved watching this team play for years." },
                { subject: "You", verb: "have loved", example: "You have loved this music since you were a teenager." },
                { subject: "He/She", verb: "has loved", example: "She has loved painting since she was a child." },
                { subject: "We", verb: "have loved", example: "We have loved living in this neighborhood." },
                { subject: "They", verb: "have loved", example: "They have loved each other for fifty years." }
            ]
        },
        {
            name: "Join",
            conjugations: [
                { subject: "I", verb: "have joined", example: "I have joined three different clubs this semester." },
                { subject: "You", verb: "have joined", example: "You have joined the conversation at just the right moment." },
                { subject: "He/She", verb: "has joined", example: "He has joined the company as a senior developer." },
                { subject: "We", verb: "have joined", example: "We have joined forces with another organization." },
                { subject: "They", verb: "have joined", example: "They have joined our team recently." }
            ]
        },
        {
            name: "Carry",
            conjugations: [
                { subject: "I", verb: "have carried", example: "I have carried this backpack across many countries." },
                { subject: "You", verb: "have carried", example: "You have carried this burden for too long." },
                { subject: "He/She", verb: "has carried", example: "She has carried the team through difficult times." },
                { subject: "We", verb: "have carried", example: "We have carried on this tradition for generations." },
                { subject: "They", verb: "have carried", example: "They have carried out extensive research on the subject." }
            ]
        },
        {
            name: "Realize",
            conjugations: [
                { subject: "I", verb: "have realized", example: "I have realized my mistake and apologized." },
                { subject: "You", verb: "have realized", example: "You have realized the importance of saving for retirement." },
                { subject: "He/She", verb: "has realized", example: "He has realized his potential as an artist." },
                { subject: "We", verb: "have realized", example: "We have realized significant gains from our investments." },
                { subject: "They", verb: "have realized", example: "They have realized that change is necessary." }
            ]
        },
        {
            name: "Dance",
            conjugations: [
                { subject: "I", verb: "have danced", example: "I have danced ballet since I was five years old." },
                { subject: "You", verb: "have danced", example: "You have danced at every wedding we've attended." },
                { subject: "He/She", verb: "has danced", example: "She has danced professionally for a decade." },
                { subject: "We", verb: "have danced", example: "We have danced together since our first date." },
                { subject: "They", verb: "have danced", example: "They have danced in competitions around the world." }
            ]
        },
        {
            name: "Wish",
            conjugations: [
                { subject: "I", verb: "have wished", example: "I have wished for this opportunity for a long time." },
                { subject: "You", verb: "have wished", example: "You have wished me happy birthday every year." },
                { subject: "He/She", verb: "has wished", example: "He has wished for a solution to this problem." },
                { subject: "We", verb: "have wished", example: "We have wished for better weather during our vacation." },
                { subject: "They", verb: "have wished", example: "They have wished they could change their decision." }
            ]
        },
        {
            name: "Admit",
            conjugations: [
                { subject: "I", verb: "have admitted", example: "I have admitted my mistakes and learned from them." },
                { subject: "You", verb: "have admitted", example: "You have admitted students from diverse backgrounds." },
                { subject: "He/She", verb: "has admitted", example: "She has admitted feeling overwhelmed by her responsibilities." },
                { subject: "We", verb: "have admitted", example: "We have admitted the need for policy changes." },
                { subject: "They", verb: "have admitted", example: "They have admitted defeat in the negotiations." }
            ]
        },
        {
            name: "Fix",
            conjugations: [
                { subject: "I", verb: "have fixed", example: "I have fixed the leaking faucet in the kitchen." },
                { subject: "You", verb: "have fixed", example: "You have fixed many problems with the software." },
                { subject: "He/She", verb: "has fixed", example: "He has fixed the date for the meeting next month." },
                { subject: "We", verb: "have fixed", example: "We have fixed our attention on achieving this goal." },
                { subject: "They", verb: "have fixed", example: "They have fixed the broken equipment several times." }
            ]
        },
        {
            name: "Succeed",
            conjugations: [
                { subject: "I", verb: "have succeeded", example: "I have succeeded in completing the project on time." },
                { subject: "You", verb: "have succeeded", example: "You have succeeded where many others have failed." },
                { subject: "He/She", verb: "has succeeded", example: "She has succeeded in persuading the committee." },
                { subject: "We", verb: "have succeeded", example: "We have succeeded in reaching our fundraising target." },
                { subject: "They", verb: "have succeeded", example: "They have succeeded beyond our expectations." }
            ]
        },
        {
            name: "Enjoy",
            conjugations: [
                { subject: "I", verb: "have enjoyed", example: "I have enjoyed working with this team." },
                { subject: "You", verb: "have enjoyed", example: "You have enjoyed the benefits of regular exercise." },
                { subject: "He/She", verb: "has enjoyed", example: "He has enjoyed reading since childhood." },
                { subject: "We", verb: "have enjoyed", example: "We have enjoyed our stay at this hotel." },
                { subject: "They", verb: "have enjoyed", example: "They have enjoyed great success in their business." }
            ]
        },
        {
            name: "Clean",
            conjugations: [
                { subject: "I", verb: "have cleaned", example: "I have cleaned the entire house today." },
                { subject: "You", verb: "have cleaned", example: "You have cleaned your room very thoroughly." },
                { subject: "He/She", verb: "has cleaned", example: "She has cleaned out her closet and donated many items." },
                { subject: "We", verb: "have cleaned", example: "We have cleaned up the beach during our volunteer day." },
                { subject: "They", verb: "have cleaned", example: "They have cleaned their data to ensure accuracy." }
            ]
        },
        {
            name: "Achieve",
            conjugations: [
                { subject: "I", verb: "have achieved", example: "I have achieved all my goals for this year." },
                { subject: "You", verb: "have achieved", example: "You have achieved remarkable results in a short time." },
                { subject: "He/She", verb: "has achieved", example: "He has achieved recognition in his field." },
                { subject: "We", verb: "have achieved", example: "We have achieved a significant reduction in costs." },
                { subject: "They", verb: "have achieved", example: "They have achieved what many thought was impossible." }
            ]
        },
        {
            name: "Cover",
            conjugations: [
                { subject: "I", verb: "have covered", example: "I have covered thousands of miles on my bicycle." },
                { subject: "You", verb: "have covered", example: "You have covered all the important topics in your presentation." },
                { subject: "He/She", verb: "has covered", example: "She has covered major events as a journalist." },
                { subject: "We", verb: "have covered", example: "We have covered the furniture to protect it during painting." },
                { subject: "They", verb: "have covered", example: "They have covered their tracks well." }
            ]
        },
        {
            name: "Avoid",
            conjugations: [
                { subject: "I", verb: "have avoided", example: "I have avoided making the same mistake twice." },
                { subject: "You", verb: "have avoided", example: "You have avoided conflict whenever possible." },
                { subject: "He/She", verb: "has avoided", example: "He has avoided eating dairy products since his diagnosis." },
                { subject: "We", verb: "have avoided", example: "We have avoided unnecessary expenses this month." },
                { subject: "They", verb: "have avoided", example: "They have avoided discussing the sensitive issue." }
            ]
        },
        {
            name: "Raise",
            conjugations: [
                { subject: "I", verb: "have raised", example: "I have raised three children on my own." },
                { subject: "You", verb: "have raised", example: "You have raised valid concerns about the proposal." },
                { subject: "He/She", verb: "has raised", example: "She has raised thousands of dollars for charity." },
                { subject: "We", verb: "have raised", example: "We have raised our standards for quality control." },
                { subject: "They", verb: "have raised", example: "They have raised awareness about environmental issues." }
            ]
        },
        {
            name: "Experience",
            conjugations: [
                { subject: "I", verb: "have experienced", example: "I have experienced many different cultures through travel." },
                { subject: "You", verb: "have experienced", example: "You have experienced significant growth as an artist." },
                { subject: "He/She", verb: "has experienced", example: "He has experienced both success and failure in business." },
                { subject: "We", verb: "have experienced", example: "We have experienced technical difficulties during the presentation." },
                { subject: "They", verb: "have experienced", example: "They have experienced life in several different countries." }
            ]
        },
        {
            name: "Identify",
            conjugations: [
                { subject: "I", verb: "have identified", example: "I have identified several areas for improvement." },
                { subject: "You", verb: "have identified", example: "You have identified the main problem correctly." },
                { subject: "He/She", verb: "has identified", example: "She has identified a new species of butterfly." },
                { subject: "We", verb: "have identified", example: "We have identified potential risks in the project." },
                { subject: "They", verb: "have identified", example: "They have identified all the witnesses in the case." }
            ]
        },
        {
            name: "Prepare",
            conjugations: [
                { subject: "I", verb: "have prepared", example: "I have prepared a detailed report for the meeting." },
                { subject: "You", verb: "have prepared", example: "You have prepared well for the interview." },
                { subject: "He/She", verb: "has prepared", example: "He has prepared dinner for the whole family." },
                { subject: "We", verb: "have prepared", example: "We have prepared for all possible scenarios." },
                { subject: "They", verb: "have prepared", example: "They have prepared their presentation thoroughly." }
            ]
        },
        {
            name: "Laugh",
            conjugations: [
                { subject: "I", verb: "have laughed", example: "I have laughed more today than I have all week." },
                { subject: "You", verb: "have laughed", example: "You have laughed at all my jokes, even the bad ones." },
                { subject: "He/She", verb: "has laughed", example: "She has laughed off all criticism of her work." },
                { subject: "We", verb: "have laughed", example: "We have laughed together through good times and bad." },
                { subject: "They", verb: "have laughed", example: "They have laughed about that incident for years." }
            ]
        },
        {
            name: "Manage",
            conjugations: [
                { subject: "I", verb: "have managed", example: "I have managed to complete the project on time." },
                { subject: "You", verb: "have managed", example: "You have managed the team effectively during this crisis." },
                { subject: "He/She", verb: "has managed", example: "He has managed several departments over his career." },
                { subject: "We", verb: "have managed", example: "We have managed to save enough for a down payment." },
                { subject: "They", verb: "have managed", example: "They have managed the company for twenty years." }
            ]
        },
        {
            name: "Enter",
            conjugations: [
                { subject: "I", verb: "have entered", example: "I have entered the competition three times." },
                { subject: "You", verb: "have entered", example: "You have entered the data correctly into the system." },
                { subject: "He/She", verb: "has entered", example: "She has entered a new phase in her career." },
                { subject: "We", verb: "have entered", example: "We have entered into a partnership with several local businesses." },
                { subject: "They", verb: "have entered", example: "They have entered the building through the back door." }
            ]
        },
        {
            name: "Care",
            conjugations: [
                { subject: "I", verb: "have cared", example: "I have cared for my elderly parents for several years." },
                { subject: "You", verb: "have cared", example: "You have cared too much about what others think." },
                { subject: "He/She", verb: "has cared", example: "He has cared deeply about environmental issues." },
                { subject: "We", verb: "have cared", example: "We have cared for this garden for generations." },
                { subject: "They", verb: "have cared", example: "They have cared for many sick animals at the shelter." }
            ]
        },
        {
            name: "Solve",
            conjugations: [
                { subject: "I", verb: "have solved", example: "I have solved the puzzle that stumped everyone else." },
                { subject: "You", verb: "have solved", example: "You have solved a complex technical problem today." },
                { subject: "He/She", verb: "has solved", example: "She has solved many cases during her detective career." },
                { subject: "We", verb: "have solved", example: "We have solved the issue with the database." },
                { subject: "They", verb: "have solved", example: "They have solved similar problems in the past." }
            ]
        },
        {
            name: "Produce",
            conjugations: [
                { subject: "I", verb: "have produced", example: "I have produced several films in my career." },
                { subject: "You", verb: "have produced", example: "You have produced impressive results with limited resources." },
                { subject: "He/She", verb: "has produced", example: "He has produced evidence to support his claims." },
                { subject: "We", verb: "have produced", example: "We have produced high-quality goods for decades." },
                { subject: "They", verb: "have produced", example: "They have produced a comprehensive report on the findings." }
            ]
        },
        {
            name: "Close",
            conjugations: [
                { subject: "I", verb: "have closed", example: "I have closed my account with that bank." },
                { subject: "You", verb: "have closed", example: "You have closed the door on that opportunity." },
                { subject: "He/She", verb: "has closed", example: "She has closed many successful business deals." },
                { subject: "We", verb: "have closed", example: "We have closed the office early today due to the storm." },
                { subject: "They", verb: "have closed", example: "They have closed three branches in the past year." }
            ]
        },
        {
            name: "Notice",
            conjugations: [
                { subject: "I", verb: "have noticed", example: "I have noticed significant improvements in your work." },
                { subject: "You", verb: "have noticed", example: "You have noticed details that everyone else missed." },
                { subject: "He/She", verb: "has noticed", example: "He has noticed a pattern in the data." },
                { subject: "We", verb: "have noticed", example: "We have noticed several discrepancies in the report." },
                { subject: "They", verb: "have noticed", example: "They have noticed changes in customer behavior recently." }
            ]
        },
        {
            name: "Imagine",
            conjugations: [
                { subject: "I", verb: "have imagined", example: "I have imagined this moment for years." },
                { subject: "You", verb: "have imagined", example: "You have imagined a brilliant solution to the problem." },
                { subject: "He/She", verb: "has imagined", example: "She has imagined various scenarios for the company's future." },
                { subject: "We", verb: "have imagined", example: "We have imagined a world without poverty." },
                { subject: "They", verb: "have imagined", example: "They have imagined themselves winning the championship." }
            ]
        },
        {
            name: "Replace",
            conjugations: [
                { subject: "I", verb: "have replaced", example: "I have replaced the broken window." },
                { subject: "You", verb: "have replaced", example: "You have replaced all the outdated equipment." },
                { subject: "He/She", verb: "has replaced", example: "He has replaced his old car with an electric model." },
                { subject: "We", verb: "have replaced", example: "We have replaced our manual processes with automated systems." },
                { subject: "They", verb: "have replaced", example: "They have replaced several key staff members recently." }
            ]
        },
        {
            name: "Improve",
            conjugations: [
                { subject: "I", verb: "have improved", example: "I have improved my language skills significantly." },
                { subject: "You", verb: "have improved", example: "You have improved your performance in every game." },
                { subject: "He/She", verb: "has improved", example: "She has improved the efficiency of the department." },
                { subject: "We", verb: "have improved", example: "We have improved our product based on customer feedback." },
                { subject: "They", verb: "have improved", example: "They have improved their relationship over time." }
            ]
        },
        {
            name: "Apply",
            conjugations: [
                { subject: "I", verb: "have applied", example: "I have applied for ten jobs this month." },
                { subject: "You", verb: "have applied", example: "You have applied the principles correctly in your analysis." },
                { subject: "He/She", verb: "has applied", example: "He has applied for a visa to study abroad." },
                { subject: "We", verb: "have applied", example: "We have applied for funding from several sources." },
                { subject: "They", verb: "have applied", example: "They have applied pressure on the government to change the policy." }
            ]
        },
        {
            name: "Report",
            conjugations: [
                { subject: "I", verb: "have reported", example: "I have reported the incident to the police." },
                { subject: "You", verb: "have reported", example: "You have reported on many international conflicts." },
                { subject: "He/She", verb: "has reported", example: "She has reported significant progress on the project." },
                { subject: "We", verb: "have reported", example: "We have reported all suspicious activities to management." },
                { subject: "They", verb: "have reported", example: "They have reported record profits this quarter." }
            ]
        },
        {
            name: "Listen",
            conjugations: [
                { subject: "I", verb: "have listened", example: "I have listened to your suggestions carefully." },
                { subject: "You", verb: "have listened", example: "You have listened to that album hundreds of times." },
                { subject: "He/She", verb: "has listened", example: "He has listened to podcasts on his commute every day." },
                { subject: "We", verb: "have listened", example: "We have listened to customer feedback and made changes." },
                { subject: "They", verb: "have listened", example: "They have listened to expert advice throughout the process." }
            ]
        },
        {
            name: "Discover",
            conjugations: [
                { subject: "I", verb: "have discovered", example: "I have discovered a new favorite author." },
                { subject: "You", verb: "have discovered", example: "You have discovered an effective solution to the problem." },
                { subject: "He/She", verb: "has discovered", example: "She has discovered previously unknown species in the rainforest." },
                { subject: "We", verb: "have discovered", example: "We have discovered errors in the financial statements." },
                { subject: "They", verb: "have discovered", example: "They have discovered archaeological treasures at the site." }
            ]
        },
        {
            name: "Protect",
            conjugations: [
                { subject: "I", verb: "have protected", example: "I have protected my personal information online." },
                { subject: "You", verb: "have protected", example: "You have protected the company's interests in negotiations." },
                { subject: "He/She", verb: "has protected", example: "He has protected endangered species throughout his career." },
                { subject: "We", verb: "have protected", example: "We have protected our intellectual property with patents." },
                { subject: "They", verb: "have protected", example: "They have protected their community from flooding." }
            ]
        },
        {
            name: "Occur",
            conjugations: [
                { subject: "I", verb: "have occurred", example: "It has occurred to me that we might be approaching this incorrectly." },
                { subject: "You", verb: "have occurred", example: "Has it occurred to you that there might be a simpler solution?" },
                { subject: "He/She", verb: "has occurred", example: "It has occurred to her that she forgot an important detail." },
                { subject: "We", verb: "have occurred", example: "It has occurred to us that we need to change our strategy." },
                { subject: "They", verb: "have occurred", example: "Similar thoughts have occurred to them as well." }
            ]
        },
        {
            name: "Fight",
            conjugations: [
                { subject: "I", verb: "have fought", example: "I have fought for equal rights throughout my career." },
                { subject: "You", verb: "have fought", example: "You have fought bravely against this disease." },
                { subject: "He/She", verb: "has fought", example: "He has fought in several boxing championships." },
                { subject: "We", verb: "have fought", example: "We have fought many legal battles to protect our patents." },
                { subject: "They", verb: "have fought", example: "They have fought over this property for years." }
            ]
        },
        {
            name: "Remove",
            conjugations: [
                { subject: "I", verb: "have removed", example: "I have removed all the old files from the system." },
                { subject: "You", verb: "have removed", example: "You have removed the stains from the carpet successfully." },
                { subject: "He/She", verb: "has removed", example: "She has removed herself from the project due to a conflict of interest." },
                { subject: "We", verb: "have removed", example: "We have removed several obstacles to progress." },
                { subject: "They", verb: "have removed", example: "They have removed all traces of their presence." }
            ]
        },
        {
            name: "Discuss",
            conjugations: [
                { subject: "I", verb: "have discussed", example: "I have discussed this issue with the manager." },
                { subject: "You", verb: "have discussed", example: "You have discussed your concerns with the team." },
                { subject: "He/She", verb: "has discussed", example: "He has discussed the proposal with several investors." },
                { subject: "We", verb: "have discussed", example: "We have discussed various options for the new office location." },
                { subject: "They", verb: "have discussed", example: "They have discussed the terms of the agreement in detail." }
            ]
        },
        {
            name: "Face",
            conjugations: [
                { subject: "I", verb: "have faced", example: "I have faced many challenges in my career." },
                { subject: "You", verb: "have faced", example: "You have faced adversity with remarkable courage." },
                { subject: "He/She", verb: "has faced", example: "She has faced criticism for her controversial decision." },
                { subject: "We", verb: "have faced", example: "We have faced significant setbacks in the project." },
                { subject: "They", verb: "have faced", example: "They have faced similar problems in the past." }
            ]
        },
        {
            name: "Cut",
            conjugations: [
                { subject: "I", verb: "have cut", example: "I have cut expenses to increase our profit margin." },
                { subject: "You", verb: "have cut", example: "You have cut your hair since I last saw you." },
                { subject: "He/She", verb: "has cut", example: "He has cut ties with his former business partners." },
                { subject: "We", verb: "have cut", example: "We have cut the ribbon to officially open the new building." },
                { subject: "They", verb: "have cut", example: "They have cut production by 20% due to decreased demand." }
            ]
        },
        {
            name: "Miss",
            conjugations: [
                { subject: "I", verb: "have missed", example: "I have missed several opportunities due to poor timing." },
                { subject: "You", verb: "have missed", example: "You have missed the point of my argument." },
                { subject: "He/She", verb: "has missed", example: "She has missed three important meetings this month." },
                { subject: "We", verb: "have missed", example: "We have missed you since you moved away." },
                { subject: "They", verb: "have missed", example: "They have missed the deadline for submission." }
            ]
        },
        {
            name: "Reduce",
            conjugations: [
                { subject: "I", verb: "have reduced", example: "I have reduced my sugar intake for health reasons." },
                { subject: "You", verb: "have reduced", example: "You have reduced the risk of errors with your new system." },
                { subject: "He/She", verb: "has reduced", example: "He has reduced his working hours to achieve better work-life balance." },
                { subject: "We", verb: "have reduced", example: "We have reduced our carbon footprint by 30% this year." },
                { subject: "They", verb: "have reduced", example: "They have reduced prices to attract more customers." }
            ]
        },
        {
            name: "Sing",
            conjugations: [
                { subject: "I", verb: "have sung", example: "I have sung in this choir for ten years." },
                { subject: "You", verb: "have sung", example: "You have sung that song at every karaoke night." },
                { subject: "He/She", verb: "has sung", example: "She has sung professionally since she was a teenager." },
                { subject: "We", verb: "have sung", example: "We have sung the national anthem at many sporting events." },
                { subject: "They", verb: "have sung", example: "They have sung together in perfect harmony." }
            ]
        },
        {
            name: "Deliver",
            conjugations: [
                { subject: "I", verb: "have delivered", example: "I have delivered presentations to international audiences." },
                { subject: "You", verb: "have delivered", example: "You have delivered excellent results consistently." },
                { subject: "He/She", verb: "has delivered", example: "He has delivered packages in this neighborhood for years." },
                { subject: "We", verb: "have delivered", example: "We have delivered on all our promises to clients." },
                { subject: "They", verb: "have delivered", example: "They have delivered supplies to remote villages." }
            ]
        },
        {
            name: "Collect",
            conjugations: [
                { subject: "I", verb: "have collected", example: "I have collected stamps since I was a child." },
                { subject: "You", verb: "have collected", example: "You have collected valuable data for the research." },
                { subject: "He/She", verb: "has collected", example: "She has collected donations for the charity event." },
                { subject: "We", verb: "have collected", example: "We have collected feedback from all participants." },
                { subject: "They", verb: "have collected", example: "They have collected evidence to support their case." }
            ]
        },
        {
            name: "Throw",
            conjugations: [
                { subject: "I", verb: "have thrown", example: "I have thrown away many opportunities in the past." },
                { subject: "You", verb: "have thrown", example: "You have thrown the best parties in the neighborhood." },
                { subject: "He/She", verb: "has thrown", example: "He has thrown himself into his work since the promotion." },
                { subject: "We", verb: "have thrown", example: "We have thrown our support behind this candidate." },
                { subject: "They", verb: "have thrown", example: "They have thrown caution to the wind with this risky investment." }
            ]
        },
        {
            name: "Treat",
            conjugations: [
                { subject: "I", verb: "have treated", example: "I have treated patients with this condition for decades." },
                { subject: "You", verb: "have treated", example: "You have treated everyone with respect and kindness." },
                { subject: "He/She", verb: "has treated", example: "She has treated herself to a spa day after completing the project." },
                { subject: "We", verb: "have treated", example: "We have treated this matter with the utmost confidentiality." },
                { subject: "They", verb: "have treated", example: "They have treated the symptoms but not the underlying cause." }
            ]
        },
        {
            name: "Introduce",
            conjugations: [
                { subject: "I", verb: "have introduced", example: "I have introduced several innovative features to the product." },
                { subject: "You", verb: "have introduced", example: "You have introduced me to many interesting people." },
                { subject: "He/She", verb: "has introduced", example: "He has introduced a new teaching method in his classes." },
                { subject: "We", verb: "have introduced", example: "We have introduced stricter security measures." },
                { subject: "They", verb: "have introduced", example: "They have introduced themselves to all the neighbors." }
            ]
        },
        {
            name: "Answer",
            conjugations: [
                { subject: "I", verb: "have answered", example: "I have answered all your questions honestly." },
                { subject: "You", verb: "have answered", example: "You have answered the phone on the first ring every time." },
                { subject: "He/She", verb: "has answered", example: "She has answered many difficult questions during the interview." },
                { subject: "We", verb: "have answered", example: "We have answered concerns about the new policy." },
                { subject: "They", verb: "have answered", example: "They have answered the call for volunteers enthusiastically." }
            ]
        },
        {
            name: "Exist",
            conjugations: [
                { subject: "I", verb: "have existed", example: "I have existed in this role for five years now." },
                { subject: "You", verb: "have existed", example: "You have existed in a state of denial about the problem." },
                { subject: "He/She", verb: "has existed", example: "This legend has existed in their culture for centuries." },
                { subject: "We", verb: "have existed", example: "We have existed as an organization since 1950." },
                { subject: "They", verb: "have existed", example: "They have existed peacefully alongside each other for generations." }
            ]
        },
        {
            name: "Pull",
            conjugations: [
                { subject: "I", verb: "have pulled", example: "I have pulled together all the necessary resources for the project." },
                { subject: "You", verb: "have pulled", example: "You have pulled off an impressive achievement." },
                { subject: "He/She", verb: "has pulled", example: "She has pulled strings to get us tickets to the sold-out show." },
                { subject: "We", verb: "have pulled", example: "We have pulled through difficult times together." },
                { subject: "They", verb: "have pulled", example: "They have pulled out of the agreement unexpectedly." }
            ]
        },
        {
            name: "Maintain",
            conjugations: [
                { subject: "I", verb: "have maintained", example: "I have maintained a healthy diet for years." },
                { subject: "You", verb: "have maintained", example: "You have maintained high standards throughout your career." },
                { subject: "He/She", verb: "has maintained", example: "He has maintained contact with his childhood friends." },
                { subject: "We", verb: "have maintained", example: "We have maintained our equipment regularly." },
                { subject: "They", verb: "have maintained", example: "They have maintained the garden beautifully." }
            ]
        },
        {
            name: "Type",
            conjugations: [
                { subject: "I", verb: "have typed", example: "I have typed hundreds of pages for this manuscript." },
                { subject: "You", verb: "have typed", example: "You have typed too quickly and made several errors." },
                { subject: "He/She", verb: "has typed", example: "She has typed all the meeting notes accurately." },
                { subject: "We", verb: "have typed", example: "We have typed up the interview transcripts." },
                { subject: "They", verb: "have typed", example: "They have typed the entire document in one night." }
            ]
        },
        {
            name: "Suggest",
            conjugations: [
                { subject: "I", verb: "have suggested", example: "I have suggested several solutions to this problem." },
                { subject: "You", verb: "have suggested", example: "You have suggested this restaurant many times." },
                { subject: "He/She", verb: "has suggested", example: "He has suggested a meeting to discuss the issue." },
                { subject: "We", verb: "have suggested", example: "We have suggested improvements to the current system." },
                { subject: "They", verb: "have suggested", example: "They have suggested alternative approaches worth considering." }
            ]
        },
        {
            name: "Connect",
            conjugations: [
                { subject: "I", verb: "have connected", example: "I have connected with professionals in various industries." },
                { subject: "You", verb: "have connected", example: "You have connected the dots brilliantly in your analysis." },
                { subject: "He/She", verb: "has connected", example: "She has connected all the devices to the new network." },
                { subject: "We", verb: "have connected", example: "We have connected our business with partners worldwide." },
                { subject: "They", verb: "have connected", example: "They have connected the new printer to the office computers." }
            ]
        },
        {
            name: "Compare",
            conjugations: [
                { subject: "I", verb: "have compared", example: "I have compared different options before making my decision." },
                { subject: "You", verb: "have compared", example: "You have compared prices across several vendors." },
                { subject: "He/She", verb: "has compared", example: "He has compared the performance of various investments." },
                { subject: "We", verb: "have compared", example: "We have compared our results with industry standards." },
                { subject: "They", verb: "have compared", example: "They have compared the two manuscripts for similarities." }
            ]
        },
        {
            name: "Handle",
            conjugations: [
                { subject: "I", verb: "have handled", example: "I have handled difficult clients with patience and professionalism." },
                { subject: "You", verb: "have handled", example: "You have handled the situation remarkably well." },
                { subject: "He/She", verb: "has handled", example: "She has handled many complex cases throughout her career." },
                { subject: "We", verb: "have handled", example: "We have handled similar problems in the past." },
                { subject: "They", verb: "have handled", example: "They have handled the negotiations skillfully." }
            ]
        },
        {
            name: "Fill",
            conjugations: [
                { subject: "I", verb: "have filled", example: "I have filled the tank with gas." },
                { subject: "You", verb: "have filled", example: "You have filled all the necessary forms for the application." },
                { subject: "He/She", verb: "has filled", example: "He has filled the position of director for three years." },
                { subject: "We", verb: "have filled", example: "We have filled our quota for the month." },
                { subject: "They", verb: "have filled", example: "They have filled the stadium to capacity." }
            ]
        },
        {
            name: "Ignore",
            conjugations: [
                { subject: "I", verb: "have ignored", example: "I have ignored the warning signs for too long." },
                { subject: "You", verb: "have ignored", example: "You have ignored my advice repeatedly." },
                { subject: "He/She", verb: "has ignored", example: "She has ignored the doctor's recommendations." },
                { subject: "We", verb: "have ignored", example: "We have ignored minor issues to focus on priorities." },
                { subject: "They", verb: "have ignored", example: "They have ignored our emails for weeks." }
            ]
        },
        {
            name: "Survive",
            conjugations: [
                { subject: "I", verb: "have survived", example: "I have survived many challenges in my life." },
                { subject: "You", verb: "have survived", example: "You have survived worse situations than this." },
                { subject: "He/She", verb: "has survived", example: "He has survived a serious illness and fully recovered." },
                { subject: "We", verb: "have survived", example: "We have survived economic downturns before." },
                { subject: "They", verb: "have survived", example: "They have survived in the wilderness for a week." }
            ]
        },
        {
            name: "Attempt",
            conjugations: [
                { subject: "I", verb: "have attempted", example: "I have attempted to contact him several times." },
                { subject: "You", verb: "have attempted", example: "You have attempted this climb twice before." },
                { subject: "He/She", verb: "has attempted", example: "She has attempted to solve the problem in various ways." },
                { subject: "We", verb: "have attempted", example: "We have attempted to negotiate better terms." },
                { subject: "They", verb: "have attempted", example: "They have attempted to break the record three times." }
            ]
        },
        {
            name: "Divide",
            conjugations: [
                { subject: "I", verb: "have divided", example: "I have divided the work evenly among team members." },
                { subject: "You", verb: "have divided", example: "You have divided your time well between projects." },
                { subject: "He/She", verb: "has divided", example: "He has divided the property equally among his children." },
                { subject: "We", verb: "have divided", example: "We have divided the class into smaller groups." },
                { subject: "They", verb: "have divided", example: "They have divided the responsibilities between departments." }
            ]
        },
        {
            name: "Claim",
            conjugations: [
                { subject: "I", verb: "have claimed", example: "I have claimed my insurance benefits." },
                { subject: "You", verb: "have claimed", example: "You have claimed to be an expert in this field." },
                { subject: "He/She", verb: "has claimed", example: "She has claimed credit for the team's success." },
                { subject: "We", verb: "have claimed", example: "We have claimed our luggage at the airport." },
                { subject: "They", verb: "have claimed", example: "They have claimed that these methods are effective." }
            ]
        },
        {
            name: "Practice",
            conjugations: [
                { subject: "I", verb: "have practiced", example: "I have practiced piano every day for ten years." },
                { subject: "You", verb: "have practiced", example: "You have practiced your presentation thoroughly." },
                { subject: "He/She", verb: "has practiced", example: "He has practiced law in this state since 2010." },
                { subject: "We", verb: "have practiced", example: "We have practiced these emergency procedures regularly." },
                { subject: "They", verb: "have practiced", example: "They have practiced together as a team for months." }
            ]
        },
        {
            name: "Mention",
            conjugations: [
                { subject: "I", verb: "have mentioned", example: "I have mentioned this issue in previous emails." },
                { subject: "You", verb: "have mentioned", example: "You have mentioned your concerns to the manager." },
                { subject: "He/She", verb: "has mentioned", example: "She has mentioned her interest in the position." },
                { subject: "We", verb: "have mentioned", example: "We have mentioned the possibility of relocating the office." },
                { subject: "They", verb: "have mentioned", example: "They have mentioned several improvements for the project." }
            ]
        },
        {
            name: "Encourage",
            conjugations: [
                { subject: "I", verb: "have encouraged", example: "I have encouraged my children to pursue their interests." },
                { subject: "You", verb: "have encouraged", example: "You have encouraged many students throughout your teaching career." },
                { subject: "He/She", verb: "has encouraged", example: "He has encouraged innovation within the company." },
                { subject: "We", verb: "have encouraged", example: "We have encouraged participation from all members." },
                { subject: "They", verb: "have encouraged", example: "They have encouraged sustainable practices in their community." }
            ]
        },
        {
            name: "Request",
            conjugations: [
                { subject: "I", verb: "have requested", example: "I have requested additional information about the program." },
                { subject: "You", verb: "have requested", example: "You have requested time off for next month." },
                { subject: "He/She", verb: "has requested", example: "She has requested a meeting with the director." },
                { subject: "We", verb: "have requested", example: "We have requested feedback from all participants." },
                { subject: "They", verb: "have requested", example: "They have requested permission to use the facilities." }
            ]
        },
        {
            name: "Test",
            conjugations: [
                { subject: "I", verb: "have tested", example: "I have tested the new software thoroughly." },
                { subject: "You", verb: "have tested", example: "You have tested negative for all allergies." },
                { subject: "He/She", verb: "has tested", example: "He has tested the limits of what's possible." },
                { subject: "We", verb: "have tested", example: "We have tested all the equipment before the expedition." },
                { subject: "They", verb: "have tested", example: "They have tested various marketing strategies." }
            ]
        },
        {
            name: "Fly",
            conjugations: [
                { subject: "I", verb: "have flown", example: "I have flown to Asia several times for business." },
                { subject: "You", verb: "have flown", example: "You have flown with this airline before, haven't you?" },
                { subject: "He/She", verb: "has flown", example: "She has flown solo since getting her pilot's license." },
                { subject: "We", verb: "have flown", example: "We have flown over a million miles collectively." },
                { subject: "They", verb: "have flown", example: "They have flown their company flag at events worldwide." }
            ]
        },
        {
            name: "Push",
            conjugations: [
                { subject: "I", verb: "have pushed", example: "I have pushed myself to excel in my field." },
                { subject: "You", verb: "have pushed", example: "You have pushed the boundaries of conventional thinking." },
                { subject: "He/She", verb: "has pushed", example: "He has pushed for reforms in the organization." },
                { subject: "We", verb: "have pushed", example: "We have pushed back the deadline several times." },
                { subject: "They", verb: "have pushed", example: "They have pushed their products aggressively in new markets." }
            ]
        },
        {
            name: "Disappear",
            conjugations: [
                { subject: "I", verb: "have disappeared", example: "I have disappeared from social media for months at a time." },
                { subject: "You", verb: "have disappeared", example: "You have disappeared without explanation before." },
                { subject: "He/She", verb: "has disappeared", example: "She has disappeared from the public eye since the controversy." },
                { subject: "We", verb: "have disappeared", example: "We have disappeared into our work during busy periods." },
                { subject: "They", verb: "have disappeared", example: "They have disappeared from the rankings after a poor season." }
            ]
        },
        {
            name: "Examine",
            conjugations: [
                { subject: "I", verb: "have examined", example: "I have examined all aspects of the proposal." },
                { subject: "You", verb: "have examined", example: "You have examined the evidence thoroughly." },
                { subject: "He/She", verb: "has examined", example: "He has examined thousands of patients during his career." },
                { subject: "We", verb: "have examined", example: "We have examined various options before making our decision." },
                { subject: "They", verb: "have examined", example: "They have examined the ancient artifacts with great care." }
            ]
        },
        {
            name: "Count",
            conjugations: [
                { subject: "I", verb: "have counted", example: "I have counted my blessings during difficult times." },
                { subject: "You", verb: "have counted", example: "You have counted on me too many times." },
                { subject: "He/She", verb: "has counted", example: "She has counted the inventory twice to ensure accuracy." },
                { subject: "We", verb: "have counted", example: "We have counted over a thousand signatures for the petition." },
                { subject: "They", verb: "have counted", example: "They have counted the votes and announced the winner." }
            ]
        },
        {
            name: "Reflect",
            conjugations: [
                { subject: "I", verb: "have reflected", example: "I have reflected on my choices and learned from them." },
                { subject: "You", verb: "have reflected", example: "You have reflected credit on your family with your achievements." },
                { subject: "He/She", verb: "has reflected", example: "He has reflected deeply on the philosophical questions." },
                { subject: "We", verb: "have reflected", example: "We have reflected these changes in our updated policy." },
                { subject: "They", verb: "have reflected", example: "They have reflected the community's values in their decisions." }
            ]
        },
        {
            name: "Rely",
            conjugations: [
                { subject: "I", verb: "have relied", example: "I have relied on your expertise many times." },
                { subject: "You", verb: "have relied", example: "You have relied too heavily on this one source of income." },
                { subject: "He/She", verb: "has relied", example: "She has relied on her instincts to guide her career choices." },
                { subject: "We", verb: "have relied", example: "We have relied on this technology for years without problems." },
                { subject: "They", verb: "have relied", example: "They have relied on volunteers to staff the event." }
            ]
        },
        {
            name: "Influence",
            conjugations: [
                { subject: "I", verb: "have influenced", example: "I have influenced many students throughout my teaching career." },
                { subject: "You", verb: "have influenced", example: "You have influenced my decision to pursue this path." },
                { subject: "He/She", verb: "has influenced", example: "She has influenced public opinion through her writing." },
                { subject: "We", verb: "have influenced", example: "We have influenced policy changes in our community." },
                { subject: "They", verb: "have influenced", example: "They have influenced an entire generation with their work." }
            ]
        },
        {
            name: "Hide",
            conjugations: [
                { subject: "I", verb: "have hidden", example: "I have hidden my feelings for too long." },
                { subject: "You", verb: "have hidden", example: "You have hidden the gifts where the children can't find them." },
                { subject: "He/She", verb: "has hidden", example: "She has hidden her talent for years." },
                { subject: "We", verb: "have hidden", example: "We have hidden the treasure for the scavenger hunt." },
                { subject: "They", verb: "have hidden", example: "They have hidden important documents from authorities." }
            ]
        },
        {
            name: "Address",
            conjugations: [
                { subject: "I", verb: "have addressed", example: "I have addressed this issue in my previous email." },
                { subject: "You", verb: "have addressed", example: "You have addressed all the concerns raised by the committee." },
                { subject: "He/She", verb: "has addressed", example: "He has addressed large audiences around the world." },
                { subject: "We", verb: "have addressed", example: "We have addressed the security vulnerabilities in our system." },
                { subject: "They", verb: "have addressed", example: "They have addressed each point in the complaint." }
            ]
        },
        {
            name: "Record",
            conjugations: [
                { subject: "I", verb: "have recorded", example: "I have recorded all the transactions in the ledger." },
                { subject: "You", verb: "have recorded", example: "You have recorded your best time in the marathon." },
                { subject: "He/She", verb: "has recorded", example: "She has recorded several albums throughout her career." },
                { subject: "We", verb: "have recorded", example: "We have recorded all the meetings for future reference." },
                { subject: "They", verb: "have recorded", example: "They have recorded wildlife behavior for their documentary." }
            ]
        },
        {
            name: "Fail",
            conjugations: [
                { subject: "I", verb: "have failed", example: "I have failed at this task several times before succeeding." },
                { subject: "You", verb: "have failed", example: "You have failed to meet the deadline twice now." },
                { subject: "He/She", verb: "has failed", example: "He has failed to recognize the seriousness of the situation." },
                { subject: "We", verb: "have failed", example: "We have failed to consider all possible outcomes." },
                { subject: "They", verb: "have failed", example: "They have failed in their attempts to resolve the conflict." }
            ]
        },
        {
            name: "Indicate",
            conjugations: [
                { subject: "I", verb: "have indicated", example: "I have indicated my preferences on the form." },
                { subject: "You", verb: "have indicated", example: "You have indicated interest in our services." },
                { subject: "He/She", verb: "has indicated", example: "She has indicated her willingness to compromise." },
                { subject: "We", verb: "have indicated", example: "We have indicated the potential risks in our report." },
                { subject: "They", verb: "have indicated", example: "They have indicated which direction we should take." }
            ]
        },
        {
            name: "Represent",
            conjugations: [
                { subject: "I", verb: "have represented", example: "I have represented our company at international conferences." },
                { subject: "You", verb: "have represented", example: "You have represented your country in the Olympics." },
                { subject: "He/She", verb: "has represented", example: "He has represented clients in high-profile cases." },
                { subject: "We", verb: "have represented", example: "We have represented diverse perspectives in our publication." },
                { subject: "They", verb: "have represented", example: "They have represented the interests of minority groups." }
            ]
        },
        {
            name: "Print",
            conjugations: [
                { subject: "I", verb: "have printed", example: "I have printed all the documents for the meeting." },
                { subject: "You", verb: "have printed", example: "You have printed too many copies of the report." },
                { subject: "He/She", verb: "has printed", example: "She has printed her artwork on various materials." },
                { subject: "We", verb: "have printed", example: "We have printed brochures for the marketing campaign." },
                { subject: "They", verb: "have printed", example: "They have printed thousands of books in multiple languages." }
            ]
        },
        {
            name: "Release",
            conjugations: [
                { subject: "I", verb: "have released", example: "I have released my debut novel after years of writing." },
                { subject: "You", verb: "have released", example: "You have released the tension in your shoulders through yoga." },
                { subject: "He/She", verb: "has released", example: "He has released several hit singles this year." },
                { subject: "We", verb: "have released", example: "We have released the updated version of our software." },
                { subject: "They", verb: "have released", example: "They have released the hostages unharmed." }
            ]
        },
        {
            name: "Protect",
            conjugations: [
                { subject: "I", verb: "have protected", example: "I have protected my skin from the sun with sunscreen." },
                { subject: "You", verb: "have protected", example: "You have protected your password with additional security measures." },
                { subject: "He/She", verb: "has protected", example: "She has protected her intellectual property through patents." },
                { subject: "We", verb: "have protected", example: "We have protected endangered species in our conservation area." },
                { subject: "They", verb: "have protected", example: "They have protected their investment through diversification." }
            ]
        },
        {
            name: "Suffer",
            conjugations: [
                { subject: "I", verb: "have suffered", example: "I have suffered from chronic pain for years." },
                { subject: "You", verb: "have suffered", example: "You have suffered enough because of this mistake." },
                { subject: "He/She", verb: "has suffered", example: "He has suffered multiple setbacks in his career." },
                { subject: "We", verb: "have suffered", example: "We have suffered losses due to the economic downturn." },
                { subject: "They", verb: "have suffered", example: "They have suffered through many hardships together." }
            ]
        },
        {
            name: "Intend",
            conjugations: [
                { subject: "I", verb: "have intended", example: "I have intended to call you for weeks." },
                { subject: "You", verb: "have intended", example: "You have intended well, but your actions had unintended consequences." },
                { subject: "He/She", verb: "has intended", example: "She has intended to start her own business for years." },
                { subject: "We", verb: "have intended", example: "We have intended this policy to benefit all employees." },
                { subject: "They", verb: "have intended", example: "They have intended to renovate the building for some time." }
            ]
        },
        {
            name: "Confirm",
            conjugations: [
                { subject: "I", verb: "have confirmed", example: "I have confirmed my attendance at the conference." },
                { subject: "You", verb: "have confirmed", example: "You have confirmed the reservation for dinner." },
                { subject: "He/She", verb: "has confirmed", example: "He has confirmed the accuracy of the information." },
                { subject: "We", verb: "have confirmed", example: "We have confirmed all the details of the agreement." },
                { subject: "They", verb: "have confirmed", example: "They have confirmed our suspicions with their report." }
            ]
        },
        {
            name: "Kiss",
            conjugations: [
                { subject: "I", verb: "have kissed", example: "I have kissed my children goodnight every evening." },
                { subject: "You", verb: "have kissed", example: "You have kissed goodbye to your old lifestyle." },
                { subject: "He/She", verb: "has kissed", example: "She has kissed many frogs before finding her prince." },
                { subject: "We", verb: "have kissed", example: "We have kissed and made up after our argument." },
                { subject: "They", verb: "have kissed", example: "They have kissed on stage in several performances." }
            ]
        },
        {
            name: "Seek",
            conjugations: [
                { subject: "I", verb: "have sought", example: "I have sought advice from experts in the field." },
                { subject: "You", verb: "have sought", example: "You have sought answers to difficult questions." },
                { subject: "He/She", verb: "has sought", example: "He has sought treatment for his condition." },
                { subject: "We", verb: "have sought", example: "We have sought to improve our services based on feedback." },
                { subject: "They", verb: "have sought", example: "They have sought refuge in neighboring countries." }
            ]
        },
        {
            name: "Review",
            conjugations: [
                { subject: "I", verb: "have reviewed", example: "I have reviewed all the candidates' applications." },
                { subject: "You", verb: "have reviewed", example: "You have reviewed the contract thoroughly." },
                { subject: "He/She", verb: "has reviewed", example: "She has reviewed hundreds of books for the literary magazine." },
                { subject: "We", verb: "have reviewed", example: "We have reviewed our security procedures after the breach." },
                { subject: "They", verb: "have reviewed", example: "They have reviewed the financial statements for errors." }
            ]
        },
        {
            name: "Acquire",
            conjugations: [
                { subject: "I", verb: "have acquired", example: "I have acquired new skills through this training program." },
                { subject: "You", verb: "have acquired", example: "You have acquired valuable experience in your field." },
                { subject: "He/She", verb: "has acquired", example: "He has acquired several properties as investments." },
                { subject: "We", verb: "have acquired", example: "We have acquired a smaller company to expand our business." },
                { subject: "They", verb: "have acquired", example: "They have acquired the rights to publish the book internationally." }
            ]
        },
        {
            name: "Benefit",
            conjugations: [
                { subject: "I", verb: "have benefited", example: "I have benefited greatly from your mentorship." },
                { subject: "You", verb: "have benefited", example: "You have benefited from the new healthcare policy." },
                { subject: "He/She", verb: "has benefited", example: "She has benefited from regular exercise and a healthy diet." },
                { subject: "We", verb: "have benefited", example: "We have benefited from increased tourism in our region." },
                { subject: "They", verb: "have benefited", example: "They have benefited from the tax incentives for small businesses." }
            ]
        },
        {
            name: "Hang",
            conjugations: [
                { subject: "I", verb: "have hung", example: "I have hung the paintings in the living room." },
                { subject: "You", verb: "have hung", example: "You have hung out with the wrong crowd too long." },
                { subject: "He/She", verb: "has hung", example: "He has hung the clothes to dry on the line." },
                { subject: "We", verb: "have hung", example: "We have hung decorations for the party." },
                { subject: "They", verb: "have hung", example: "They have hung their hopes on winning this contract." }
            ]
        },
        {
            name: "Relate",
            conjugations: [
                { subject: "I", verb: "have related", example: "I have related my experiences to inspire others." },
                { subject: "You", verb: "have related", example: "You have related well to people from different backgrounds." },
                { subject: "He/She", verb: "has related", example: "She has related this problem to issues we faced last year." },
                { subject: "We", verb: "have related", example: "We have related our concerns to management." },
                { subject: "They", verb: "have related", example: "They have related several incidents of misconduct." }
            ]
        },
        {
            name: "Mix",
            conjugations: [
                { subject: "I", verb: "have mixed", example: "I have mixed different styles in my artwork." },
                { subject: "You", verb: "have mixed", example: "You have mixed the ingredients in the wrong order." },
                { subject: "He/She", verb: "has mixed", example: "He has mixed business with pleasure on several occasions." },
                { subject: "We", verb: "have mixed", example: "We have mixed our resources to achieve better results." },
                { subject: "They", verb: "have mixed", example: "They have mixed traditional and modern elements in their design." }
            ]
        },
        {
            name: "Function",
            conjugations: [
                { subject: "I", verb: "have functioned", example: "I have functioned well under pressure." },
                { subject: "You", verb: "have functioned", example: "You have functioned as the team leader in my absence." },
                { subject: "He/She", verb: "has functioned", example: "She has functioned in various roles within the organization." },
                { subject: "We", verb: "have functioned", example: "We have functioned as a cohesive unit despite our differences." },
                { subject: "They", verb: "have functioned", example: "They have functioned without proper resources for months." }
            ]
        },
        {
            name: "Establish",
            conjugations: [
                { subject: "I", verb: "have established", example: "I have established a good rapport with my clients." },
                { subject: "You", verb: "have established", example: "You have established clear boundaries in your relationships." },
                { subject: "He/She", verb: "has established", example: "He has established himself as an expert in the field." },
                { subject: "We", verb: "have established", example: "We have established a new branch office in Tokyo." },
                { subject: "They", verb: "have established", example: "They have established several successful businesses." }
            ]
        },
        {
            name: "Engage",
            conjugations: [
                { subject: "I", verb: "have engaged", example: "I have engaged in many debates on this topic." },
                { subject: "You", verb: "have engaged", example: "You have engaged with the community through volunteer work." },
                { subject: "He/She", verb: "has engaged", example: "She has engaged several consultants to help with the project." },
                { subject: "We", verb: "have engaged", example: "We have engaged in meaningful dialogue with opposing parties." },
                { subject: "They", verb: "have engaged", example: "They have engaged the services of a renowned architect." }
            ]
        },
        {
            name: "Contain",
            conjugations: [
                { subject: "I", verb: "have contained", example: "I have contained my excitement about the surprise party." },
                { subject: "You", verb: "have contained", example: "You have contained the spread of misinformation effectively." },
                { subject: "He/She", verb: "has contained", example: "He has contained the fire before it spread to other buildings." },
                { subject: "We", verb: "have contained", example: "We have contained costs while maintaining quality." },
                { subject: "They", verb: "have contained", example: "They have contained the outbreak through swift action." }
            ]
        },
        {
            name: "Arrange",
            conjugations: [
                { subject: "I", verb: "have arranged", example: "I have arranged for a car to pick you up at the airport." },
                { subject: "You", verb: "have arranged", example: "You have arranged the furniture beautifully in your new home." },
                { subject: "He/She", verb: "has arranged", example: "She has arranged meetings with all department heads." },
                { subject: "We", verb: "have arranged", example: "We have arranged a special celebration for your anniversary." },
                { subject: "They", verb: "have arranged", example: "They have arranged transportation for all conference attendees." }
            ]
        },
        {
            name: "Thank",
            conjugations: [
                { subject: "I", verb: "have thanked", example: "I have thanked everyone who contributed to the project." },
                { subject: "You", verb: "have thanked", example: "You have thanked the staff for their hard work." },
                { subject: "He/She", verb: "has thanked", example: "He has thanked his supporters in a heartfelt speech." },
                { subject: "We", verb: "have thanked", example: "We have thanked our customers with a special discount." },
                { subject: "They", verb: "have thanked", example: "They have thanked the volunteers with a recognition ceremony." }
            ]
        },
        {
            name: "Shake",
            conjugations: [
                { subject: "I", verb: "have shaken", example: "I have shaken hands with many world leaders." },
                { subject: "You", verb: "have shaken", example: "You have shaken up the industry with your innovative approach." },
                { subject: "He/She", verb: "has shaken", example: "She has shaken off her nervousness before presentations." },
                { subject: "We", verb: "have shaken", example: "We have shaken up our routine by trying new activities." },
                { subject: "They", verb: "have shaken", example: "They have shaken the foundations of traditional thinking." }
            ]
        },
        {
            name: "Adopt",
            conjugations: [
                { subject: "I", verb: "have adopted", example: "I have adopted a healthier lifestyle this year." },
                { subject: "You", verb: "have adopted", example: "You have adopted several rescue animals from the shelter." },
                { subject: "He/She", verb: "has adopted", example: "He has adopted new techniques in his teaching." },
                { subject: "We", verb: "have adopted", example: "We have adopted a more flexible work policy." },
                { subject: "They", verb: "have adopted", example: "They have adopted three children from different countries." }
            ]
        },
        {
            name: "Access",
            conjugations: [
                { subject: "I", verb: "have accessed", example: "I have accessed the database from remote locations." },
                { subject: "You", verb: "have accessed", example: "You have accessed restricted information without authorization." },
                { subject: "He/She", verb: "has accessed", example: "She has accessed resources that helped her succeed." },
                { subject: "We", verb: "have accessed", example: "We have accessed funding for our community project." },
                { subject: "They", verb: "have accessed", example: "They have accessed the building using the new security system." }
            ]
        },
        {
            name: "Intend",
            conjugations: [
                { subject: "I", verb: "have intended", example: "I have intended to renovate the kitchen for years." },
                { subject: "You", verb: "have intended", example: "You have intended no harm with your comments." },
                { subject: "He/She", verb: "has intended", example: "He has intended to contact you about the opportunity." },
                { subject: "We", verb: "have intended", example: "We have intended this policy to benefit all employees." },
                { subject: "They", verb: "have intended", example: "They have intended to launch the product earlier." }
            ]
        },
        {
            name: "Hire",
            conjugations: [
                { subject: "I", verb: "have hired", example: "I have hired a professional to handle my taxes." },
                { subject: "You", verb: "have hired", example: "You have hired the perfect candidate for the position." },
                { subject: "He/She", verb: "has hired", example: "She has hired additional staff to meet increasing demand." },
                { subject: "We", verb: "have hired", example: "We have hired consultants to improve our processes." },
                { subject: "They", verb: "have hired", example: "They have hired a famous chef for their new restaurant." }
            ]
        },
        {
            name: "Define",
            conjugations: [
                { subject: "I", verb: "have defined", example: "I have defined my career goals more clearly now." },
                { subject: "You", verb: "have defined", example: "You have defined the problem precisely in your analysis." },
                { subject: "He/She", verb: "has defined", example: "He has defined the terms of the agreement." },
                { subject: "We", verb: "have defined", example: "We have defined our brand values in the mission statement." },
                { subject: "They", verb: "have defined", example: "They have defined new standards in the industry." }
            ]
        },
        {
            name: "Contribute",
            conjugations: [
                { subject: "I", verb: "have contributed", example: "I have contributed to many charitable causes." },
                { subject: "You", verb: "have contributed", example: "You have contributed valuable ideas to the discussion." },
                { subject: "He/She", verb: "has contributed", example: "She has contributed articles to scientific journals." },
                { subject: "We", verb: "have contributed", example: "We have contributed significantly to the project's success." },
                { subject: "They", verb: "have contributed", example: "They have contributed time and resources to community development." }
            ]
        },
        {
            name: "Swim",
            conjugations: [
                { subject: "I", verb: "have swum", example: "I have swum in lakes and oceans around the world." },
                { subject: "You", verb: "have swum", example: "You have swum across the English Channel, an impressive achievement." },
                { subject: "He/She", verb: "has swum", example: "He has swum competitively since childhood." },
                { subject: "We", verb: "have swum", example: "We have swum with dolphins on our vacation." },
                { subject: "They", verb: "have swum", example: "They have swum in dangerous waters without proper safety measures." }
            ]
        },
        {
            name: "Launch",
            conjugations: [
                { subject: "I", verb: "have launched", example: "I have launched several successful marketing campaigns." },
                { subject: "You", verb: "have launched", example: "You have launched your career in a competitive industry." },
                { subject: "He/She", verb: "has launched", example: "She has launched her own line of organic skincare products." },
                { subject: "We", verb: "have launched", example: "We have launched our website with a new design." },
                { subject: "They", verb: "have launched", example: "They have launched satellites into orbit for research purposes." }
            ]
        },
        {
            name: "Cross",
            conjugations: [
                { subject: "I", verb: "have crossed", example: "I have crossed many international borders during my travels." },
                { subject: "You", verb: "have crossed", example: "You have crossed the line with that inappropriate comment." },
                { subject: "He/She", verb: "has crossed", example: "He has crossed the Atlantic Ocean several times by ship." },
                { subject: "We", verb: "have crossed", example: "We have crossed paths with many interesting people." },
                { subject: "They", verb: "have crossed", example: "They have crossed off all items on their bucket list." }
            ]
        },
        {
            name: "Express",
            conjugations: [
                { subject: "I", verb: "have expressed", example: "I have expressed my concerns about the new policy." },
                { subject: "You", verb: "have expressed", example: "You have expressed yourself clearly in your writing." },
                { subject: "He/She", verb: "has expressed", example: "She has expressed interest in joining the committee." },
                { subject: "We", verb: "have expressed", example: "We have expressed our gratitude to all supporters." },
                { subject: "They", verb: "have expressed", example: "They have expressed their opinions through peaceful protests." }
            ]
        },
        {
            name: "Transfer",
            conjugations: [
                { subject: "I", verb: "have transferred", example: "I have transferred money to your account." },
                { subject: "You", verb: "have transferred", example: "You have transferred to the marketing department." },
                { subject: "He/She", verb: "has transferred", example: "He has transferred his skills from one field to another." },
                { subject: "We", verb: "have transferred", example: "We have transferred all our files to the new system." },
                { subject: "They", verb: "have transferred", example: "They have transferred ownership of the business to their children." }
            ]
        },
        {
            name: "Detect",
            conjugations: [
                { subject: "I", verb: "have detected", example: "I have detected several errors in the report." },
                { subject: "You", verb: "have detected", example: "You have detected a problem with the engine." },
                { subject: "He/She", verb: "has detected", example: "She has detected patterns in the data that others missed." },
                { subject: "We", verb: "have detected", example: "We have detected unusual activity on your account." },
                { subject: "They", verb: "have detected", example: "They have detected radiation levels above normal." }
            ]
        },
        {
            name: "Evaluate",
            conjugations: [
                { subject: "I", verb: "have evaluated", example: "I have evaluated all the proposals carefully." },
                { subject: "You", verb: "have evaluated", example: "You have evaluated the risks accurately." },
                { subject: "He/She", verb: "has evaluated", example: "He has evaluated hundreds of candidates for this position." },
                { subject: "We", verb: "have evaluated", example: "We have evaluated the impact of our environmental policies." },
                { subject: "They", verb: "have evaluated", example: "They have evaluated the property's market value." }
            ]
        },
        {
            name: "Place",
            conjugations: [
                { subject: "I", verb: "have placed", example: "I have placed the order for new equipment." },
                { subject: "You", verb: "have placed", example: "You have placed your trust in the right person." },
                { subject: "He/She", verb: "has placed", example: "She has placed first in the competition three years in a row." },
                { subject: "We", verb: "have placed", example: "We have placed advertisements in several magazines." },
                { subject: "They", verb: "have placed", example: "They have placed their belongings in storage while traveling." }
            ]
        },
        {
            name: "Mark",
            conjugations: [
                { subject: "I", verb: "have marked", example: "I have marked all the exams from yesterday's test." },
                { subject: "You", verb: "have marked", example: "You have marked the trail so we won't get lost." },
                { subject: "He/She", verb: "has marked", example: "He has marked his territory in the business world." },
                { subject: "We", verb: "have marked", example: "We have marked our anniversary every year with a special dinner." },
                { subject: "They", verb: "have marked", example: "They have marked important dates on the calendar." }
            ]
        },
        {
            name: "Secure",
            conjugations: [
                { subject: "I", verb: "have secured", example: "I have secured funding for our startup." },
                { subject: "You", verb: "have secured", example: "You have secured a great position in a prestigious company." },
                { subject: "He/She", verb: "has secured", example: "She has secured the venue for the conference." },
                { subject: "We", verb: "have secured", example: "We have secured our data with advanced encryption." },
                { subject: "They", verb: "have secured", example: "They have secured the area before the president's visit." }
            ]
        },
        {
            name: "Qualify",
            conjugations: [
                { subject: "I", verb: "have qualified", example: "I have qualified for the national championships." },
                { subject: "You", verb: "have qualified", example: "You have qualified as a certified professional in your field." },
                { subject: "He/She", verb: "has qualified", example: "He has qualified for a mortgage with favorable terms." },
                { subject: "We", verb: "have qualified", example: "We have qualified for tax exemptions due to our non-profit status." },
                { subject: "They", verb: "have qualified", example: "They have qualified to compete in the international tournament." }
            ]
        },
        {
            name: "Settle",
            conjugations: [
                { subject: "I", verb: "have settled", example: "I have settled into my new apartment." },
                { subject: "You", verb: "have settled", example: "You have settled the dispute amicably." },
                { subject: "He/She", verb: "has settled", example: "She has settled her debts with the bank." },
                { subject: "We", verb: "have settled", example: "We have settled on a compromise that works for everyone." },
                { subject: "They", verb: "have settled", example: "They have settled in a small coastal town after retirement." }
            ]
        },
        {
            name: "Fold",
            conjugations: [
                { subject: "I", verb: "have folded", example: "I have folded all the laundry." },
                { subject: "You", verb: "have folded", example: "You have folded under pressure too many times." },
                { subject: "He/She", verb: "has folded", example: "He has folded his business after twenty years." },
                { subject: "We", verb: "have folded", example: "We have folded a thousand paper cranes for good luck." },
                { subject: "They", verb: "have folded", example: "They have folded their cards and left the tournament." }
            ]
        },
        {
            name: "Design",
            conjugations: [
                { subject: "I", verb: "have designed", example: "I have designed logos for several major brands." },
                { subject: "You", verb: "have designed", example: "You have designed an innovative solution to this problem." },
                { subject: "He/She", verb: "has designed", example: "She has designed her own clothing line." },
                { subject: "We", verb: "have designed", example: "We have designed a new curriculum for the program." },
                { subject: "They", verb: "have designed", example: "They have designed award-winning buildings around the world." }
            ]
        },
        {
            name: "Hurt",
            conjugations: [
                { subject: "I", verb: "have hurt", example: "I have hurt my back lifting heavy boxes." },
                { subject: "You", verb: "have hurt", example: "You have hurt people's feelings with your careless comments." },
                { subject: "He/She", verb: "has hurt", example: "He has hurt his chances of promotion with his recent behavior." },
                { subject: "We", verb: "have hurt", example: "We have hurt our reputation with this mistake." },
                { subject: "They", verb: "have hurt", example: "They have hurt themselves trying to complete the obstacle course." }
            ]
        },
        {
            name: "Operate",
            conjugations: [
                { subject: "I", verb: "have operated", example: "I have operated this machinery for ten years." },
                { subject: "You", verb: "have operated", example: "You have operated under false assumptions." },
                { subject: "He/She", verb: "has operated", example: "She has operated on hundreds of patients throughout her career." },
                { subject: "We", verb: "have operated", example: "We have operated this business since 1985." },
                { subject: "They", verb: "have operated", example: "They have operated within the guidelines provided." }
            ]
        },
        {
            name: "Recover",
            conjugations: [
                { subject: "I", verb: "have recovered", example: "I have recovered from my illness and feel much better now." },
                { subject: "You", verb: "have recovered", example: "You have recovered your stolen bicycle." },
                { subject: "He/She", verb: "has recovered", example: "He has recovered most of the data from the crashed hard drive." },
                { subject: "We", verb: "have recovered", example: "We have recovered our investment despite the market downturn." },
                { subject: "They", verb: "have recovered", example: "They have recovered from their financial losses remarkably quickly." }
            ]
        },
        {
            name: "Tie",
            conjugations: [
                { subject: "I", verb: "have tied", example: "I have tied my shoes tightly for the marathon." },
                { subject: "You", verb: "have tied", example: "You have tied yourself to this commitment for years." },
                { subject: "He/She", verb: "has tied", example: "She has tied the company's success to customer satisfaction." },
                { subject: "We", verb: "have tied", example: "We have tied the record for most wins in a season." },
                { subject: "They", verb: "have tied", example: "They have tied ribbons around the trees to mark the trail." }
            ]
        },
        {
            name: "Roll",
            conjugations: [
                { subject: "I", verb: "have rolled", example: "I have rolled out a new strategy for market expansion." },
                { subject: "You", verb: "have rolled", example: "You have rolled your eyes at my suggestions too often." },
                { subject: "He/She", verb: "has rolled", example: "He has rolled up his sleeves and tackled the problem head-on." },
                { subject: "We", verb: "have rolled", example: "We have rolled out the welcome mat for our international guests." },
                { subject: "They", verb: "have rolled", example: "They have rolled the dice on this risky investment." }
            ]
        },
        {
            name: "Differ",
            conjugations: [
                { subject: "I", verb: "have differed", example: "I have differed with my colleagues on many policy issues." },
                { subject: "You", verb: "have differed", example: "You have differed from the standard approach in your research." },
                { subject: "He/She", verb: "has differed", example: "She has differed with her boss about the project direction." },
                { subject: "We", verb: "have differed", example: "We have differed in our opinions but respected each other's views." },
                { subject: "They", verb: "have differed", example: "They have differed significantly in their teaching methods." }
            ]
        },
        {
            name: "Promote",
            conjugations: [
                { subject: "I", verb: "have promoted", example: "I have promoted many talented employees during my career." },
                { subject: "You", verb: "have promoted", example: "You have promoted your business effectively on social media." },
                { subject: "He/She", verb: "has promoted", example: "He has promoted awareness of environmental issues." },
                { subject: "We", verb: "have promoted", example: "We have promoted diversity and inclusion in our organization." },
                { subject: "They", verb: "have promoted", example: "They have promoted the festival throughout the region." }
            ]
        },
        {
            name: "Attack",
            conjugations: [
                { subject: "I", verb: "have attacked", example: "I have attacked this problem from multiple angles." },
                { subject: "You", verb: "have attacked", example: "You have attacked your opponents' arguments effectively in the debate." },
                { subject: "He/She", verb: "has attacked", example: "She has attacked the challenge with determination." },
                { subject: "We", verb: "have attacked", example: "We have attacked the project with enthusiasm." },
                { subject: "They", verb: "have attacked", example: "They have attacked our position in their recent publication." }
            ]
        },
        {
            name: "Sign",
            conjugations: [
                { subject: "I", verb: "have signed", example: "I have signed all the necessary documents for the purchase." },
                { subject: "You", verb: "have signed", example: "You have signed up for too many commitments this semester." },
                { subject: "He/She", verb: "has signed", example: "He has signed a three-year contract with the team." },
                { subject: "We", verb: "have signed", example: "We have signed an agreement with our main supplier." },
                { subject: "They", verb: "have signed", example: "They have signed several new players for next season." }
            ]
        },
        {
            name: "Inform",
            conjugations: [
                { subject: "I", verb: "have informed", example: "I have informed all stakeholders about the changes." },
                { subject: "You", verb: "have informed", example: "You have informed yourself well on this complex topic." },
                { subject: "He/She", verb: "has informed", example: "She has informed the police about the suspicious activity." },
                { subject: "We", verb: "have informed", example: "We have informed our clients about the new pricing structure." },
                { subject: "They", verb: "have informed", example: "They have informed the committee of their decision to withdraw." }
            ]
        },
        {
            name: "Note",
            conjugations: [
                { subject: "I", verb: "have noted", example: "I have noted your concerns in the meeting minutes." },
                { subject: "You", verb: "have noted", example: "You have noted several inconsistencies in the report." },
                { subject: "He/She", verb: "has noted", example: "He has noted a significant improvement in team morale." },
                { subject: "We", verb: "have noted", example: "We have noted all the feedback from the customer survey." },
                { subject: "They", verb: "have noted", example: "They have noted the rising costs of materials in their forecast." }
            ]
        },
        {
            name: "Spread",
            conjugations: [
                { subject: "I", verb: "have spread", example: "I have spread the news about your promotion." },
                { subject: "You", verb: "have spread", example: "You have spread yourself too thin with all these projects." },
                { subject: "He/She", verb: "has spread", example: "She has spread awareness about this important cause." },
                { subject: "We", verb: "have spread", example: "We have spread our investments across different sectors." },
                { subject: "They", verb: "have spread", example: "They have spread rumors about the company merger." }
            ]
        },
        {
            name: "Form",
            conjugations: [
                { subject: "I", verb: "have formed", example: "I have formed strong relationships with my colleagues." },
                { subject: "You", verb: "have formed", example: "You have formed good habits through consistent practice." },
                { subject: "He/She", verb: "has formed", example: "He has formed a band with his college friends." },
                { subject: "We", verb: "have formed", example: "We have formed a committee to address these issues." },
                { subject: "They", verb: "have formed", example: "They have formed an alliance with neighboring countries." }
            ]
        },
        {
            name: "Worry",
            conjugations: [
                { subject: "I", verb: "have worried", example: "I have worried about your safety during your travels." },
                { subject: "You", verb: "have worried", example: "You have worried too much about things you can't control." },
                { subject: "He/She", verb: "has worried", example: "She has worried about her exam results for days." },
                { subject: "We", verb: "have worried", example: "We have worried about the economic impact of this decision." },
                { subject: "They", verb: "have worried", example: "They have worried their parents with their late-night adventures." }
            ]
        },
        {
            name: "Concentrate",
            conjugations: [
                { subject: "I", verb: "have concentrated", example: "I have concentrated on improving my technical skills." },
                { subject: "You", verb: "have concentrated", example: "You have concentrated too much on minor details." },
                { subject: "He/She", verb: "has concentrated", example: "He has concentrated all his efforts on this project." },
                { subject: "We", verb: "have concentrated", example: "We have concentrated our resources in key markets." },
                { subject: "They", verb: "have concentrated", example: "They have concentrated mainly on customer acquisition." }
            ]
        },
        {
            name: "Vote",
            conjugations: [
                { subject: "I", verb: "have voted", example: "I have voted in every election since I turned eighteen." },
                { subject: "You", verb: "have voted", example: "You have voted against the proposal twice now." },
                { subject: "He/She", verb: "has voted", example: "She has voted for progressive candidates consistently." },
                { subject: "We", verb: "have voted", example: "We have voted to accept the new contract terms." },
                { subject: "They", verb: "have voted", example: "They have voted on the issue unanimously." }
            ]
        },
        {
            name: "Extend",
            conjugations: [
                { subject: "I", verb: "have extended", example: "I have extended my stay for another week." },
                { subject: "You", verb: "have extended", example: "You have extended a generous offer to help." },
                { subject: "He/She", verb: "has extended", example: "He has extended his contract with the team for two years." },
                { subject: "We", verb: "have extended", example: "We have extended our product line to include organic options." },
                { subject: "They", verb: "have extended", example: "They have extended the deadline for applications." }
            ]
        },
        {
            name: "Lift",
            conjugations: [
                { subject: "I", verb: "have lifted", example: "I have lifted weights three times a week for years." },
                { subject: "You", verb: "have lifted", example: "You have lifted my spirits with your encouragement." },
                { subject: "He/She", verb: "has lifted", example: "She has lifted herself out of difficult circumstances." },
                { subject: "We", verb: "have lifted", example: "We have lifted many restrictions on travel." },
                { subject: "They", verb: "have lifted", example: "They have lifted the ban on public gatherings." }
            ]
        },
        {
            name: "Catch",
            conjugations: [
                { subject: "I", verb: "have caught", example: "I have caught several fish this morning." },
                { subject: "You", verb: "have caught", example: "You have caught me by surprise with this news." },
                { subject: "He/She", verb: "has caught", example: "He has caught a cold after getting soaked in the rain." },
                { subject: "We", verb: "have caught", example: "We have caught up on all our pending work." },
                { subject: "They", verb: "have caught", example: "They have caught the attention of major investors." }
            ]
        },
        {
            name: "Combine",
            conjugations: [
                { subject: "I", verb: "have combined", example: "I have combined traditional and modern techniques in my work." },
                { subject: "You", verb: "have combined", example: "You have combined various datasets for a comprehensive analysis." },
                { subject: "He/She", verb: "has combined", example: "She has combined her passion for art with her business skills." },
                { subject: "We", verb: "have combined", example: "We have combined our resources to increase efficiency." },
                { subject: "They", verb: "have combined", example: "They have combined forces to tackle the project." }
            ]
        },
        {
            name: "Propose",
            conjugations: [
                { subject: "I", verb: "have proposed", example: "I have proposed several solutions to this recurring problem." },
                { subject: "You", verb: "have proposed", example: "You have proposed an interesting theory worth exploring." },
                { subject: "He/She", verb: "has proposed", example: "He has proposed marriage during their vacation in Paris." },
                { subject: "We", verb: "have proposed", example: "We have proposed changes to the existing system." },
                { subject: "They", verb: "have proposed", example: "They have proposed a merger between the two companies." }
            ]
        },
        {
            name: "Celebrate",
            conjugations: [
                { subject: "I", verb: "have celebrated", example: "I have celebrated many milestones in my career." },
                { subject: "You", verb: "have celebrated", example: "You have celebrated your success too early." },
                { subject: "He/She", verb: "has celebrated", example: "She has celebrated her birthday in a different country each year." },
                { subject: "We", verb: "have celebrated", example: "We have celebrated our anniversary at this restaurant for twenty years." },
                { subject: "They", verb: "have celebrated", example: "They have celebrated the team's accomplishments with a special event." }
            ]
        },
        {
            name: "Supply",
            conjugations: [
                { subject: "I", verb: "have supplied", example: "I have supplied all the necessary documents for my application." },
                { subject: "You", verb: "have supplied", example: "You have supplied valuable information to the investigation." },
                { subject: "He/She", verb: "has supplied", example: "He has supplied the team with state-of-the-art equipment." },
                { subject: "We", verb: "have supplied", example: "We have supplied aid to disaster-affected regions." },
                { subject: "They", verb: "have supplied", example: "They have supplied materials for the construction project." }
            ]
        },
        {
            name: "Link",
            conjugations: [
                { subject: "I", verb: "have linked", example: "I have linked my social media accounts for easier management." },
                { subject: "You", verb: "have linked", example: "You have linked these events together correctly in your analysis." },
                { subject: "He/She", verb: "has linked", example: "She has linked her success to her early mentorship experiences." },
                { subject: "We", verb: "have linked", example: "We have linked our website to various payment platforms." },
                { subject: "They", verb: "have linked", example: "They have linked arms in solidarity during the protest." }
            ]
        },
        {
            name: "Demand",
            conjugations: [
                { subject: "I", verb: "have demanded", example: "I have demanded a refund for the defective product." },
                { subject: "You", verb: "have demanded", example: "You have demanded too much from your team without proper support." },
                { subject: "He/She", verb: "has demanded", example: "He has demanded excellence from himself and others." },
                { subject: "We", verb: "have demanded", example: "We have demanded transparency from the management." },
                { subject: "They", verb: "have demanded", example: "They have demanded immediate action on climate change." }
            ]
        },
        {
            name: "Destroy",
            conjugations: [
                { subject: "I", verb: "have destroyed", example: "I have destroyed old documents containing sensitive information." },
                { subject: "You", verb: "have destroyed", example: "You have destroyed your chances with your impulsive behavior." },
                { subject: "He/She", verb: "has destroyed", example: "She has destroyed the competition with her superior skills." },
                { subject: "We", verb: "have destroyed", example: "We have destroyed barriers to entry in this market." },
                { subject: "They", verb: "have destroyed", example: "They have destroyed evidence related to the case." }
            ]
        },
        {
            name: "Preserve",
            conjugations: [
                { subject: "I", verb: "have preserved", example: "I have preserved family traditions for generations." },
                { subject: "You", verb: "have preserved", example: "You have preserved these historical artifacts remarkably well." },
                { subject: "He/She", verb: "has preserved", example: "He has preserved his youthful energy despite his age." },
                { subject: "We", verb: "have preserved", example: "We have preserved the natural habitat for endangered species." },
                { subject: "They", verb: "have preserved", example: "They have preserved ancient texts through careful digitization." }
            ]
        },
        {
            name: "Blame",
            conjugations: [
                { subject: "I", verb: "have blamed", example: "I have blamed myself for the miscommunication." },
                { subject: "You", verb: "have blamed", example: "You have blamed others for your own mistakes too often." },
                { subject: "He/She", verb: "has blamed", example: "She has blamed the system for her setbacks." },
                { subject: "We", verb: "have blamed", example: "We have blamed the delay on technical difficulties." },
                { subject: "They", verb: "have blamed", example: "They have blamed the weather for poor attendance." }
            ]
        },
        {
            name: "Invest",
            conjugations: [
                { subject: "I", verb: "have invested", example: "I have invested in several startup companies." },
                { subject: "You", verb: "have invested", example: "You have invested too much time in this failing project." },
                { subject: "He/She", verb: "has invested", example: "He has invested wisely in his education and career." },
                { subject: "We", verb: "have invested", example: "We have invested heavily in research and development." },
                { subject: "They", verb: "have invested", example: "They have invested millions in renewable energy." }
            ]
        },
        {
            name: "Prefer",
            conjugations: [
                { subject: "I", verb: "have preferred", example: "I have preferred working alone on creative projects." },
                { subject: "You", verb: "have preferred", example: "You have preferred tea over coffee since your health scare." },
                { subject: "He/She", verb: "has preferred", example: "She has preferred classical music to contemporary genres." },
                { subject: "We", verb: "have preferred", example: "We have preferred to meet in person rather than virtually." },
                { subject: "They", verb: "have preferred", example: "They have preferred to remain anonymous in their donations." }
            ]
        },
        {
            name: "Demonstrate",
            conjugations: [
                { subject: "I", verb: "have demonstrated", example: "I have demonstrated the software's capabilities to many clients." },
                { subject: "You", verb: "have demonstrated", example: "You have demonstrated remarkable patience in difficult situations." },
                { subject: "He/She", verb: "has demonstrated", example: "He has demonstrated his commitment through consistent effort." },
                { subject: "We", verb: "have demonstrated", example: "We have demonstrated our value to the organization repeatedly." },
                { subject: "They", verb: "have demonstrated", example: "They have demonstrated against unfair policies." }
            ]
        },
        {
            name: "Generate",
            conjugations: [
                { subject: "I", verb: "have generated", example: "I have generated several ideas for the campaign." },
                { subject: "You", verb: "have generated", example: "You have generated impressive results with limited resources." },
                { subject: "He/She", verb: "has generated", example: "She has generated significant revenue through her innovations." },
                { subject: "We", verb: "have generated", example: "We have generated enough electricity from solar panels to power the building." },
                { subject: "They", verb: "have generated", example: "They have generated interest in their new product line." }
            ]
        },
        {
            name: "Lock",
            conjugations: [
                { subject: "I", verb: "have locked", example: "I have locked myself out of the apartment twice this month." },
                { subject: "You", verb: "have locked", example: "You have locked in a good interest rate on your mortgage." },
                { subject: "He/She", verb: "has locked", example: "He has locked horns with the management over this issue." },
                { subject: "We", verb: "have locked", example: "We have locked all the doors and windows before leaving." },
                { subject: "They", verb: "have locked", example: "They have locked away sensitive documents in the safe." }
            ]
        },
        {
            name: "Adapt",
            conjugations: [
                { subject: "I", verb: "have adapted", example: "I have adapted to the new working environment quickly." },
                { subject: "You", verb: "have adapted", example: "You have adapted your teaching style to suit different learners." },
                { subject: "He/She", verb: "has adapted", example: "She has adapted the novel for the big screen." },
                { subject: "We", verb: "have adapted", example: "We have adapted our strategy based on market feedback." },
                { subject: "They", verb: "have adapted", example: "They have adapted well to life in a foreign country." }
            ]
        },
        {
            name: "Grab",
            conjugations: [
                { subject: "I", verb: "have grabbed", example: "I have grabbed every opportunity that came my way." },
                { subject: "You", verb: "have grabbed", example: "You have grabbed the last available ticket for the concert." },
                { subject: "He/She", verb: "has grabbed", example: "He has grabbed headlines with his controversial statements." },
                { subject: "We", verb: "have grabbed", example: "We have grabbed a substantial market share from our competitors." },
                { subject: "They", verb: "have grabbed", example: "They have grabbed their coats and left in a hurry." }
            ]
        },
        {
            name: "Calculate",
            conjugations: [
                { subject: "I", verb: "have calculated", example: "I have calculated all the expenses for our trip." },
                { subject: "You", verb: "have calculated", example: "You have calculated the risks accurately in your analysis." },
                { subject: "He/She", verb: "has calculated", example: "She has calculated her retirement needs carefully." },
                { subject: "We", verb: "have calculated", example: "We have calculated the return on investment for each project." },
                { subject: "They", verb: "have calculated", example: "They have calculated the odds of success before placing their bets." }
            ]
        },
        {
            name: "Proceed",
            conjugations: [
                { subject: "I", verb: "have proceeded", example: "I have proceeded with caution in this sensitive matter." },
                { subject: "You", verb: "have proceeded", example: "You have proceeded without proper authorization." },
                { subject: "He/She", verb: "has proceeded", example: "He has proceeded to the next stage of the competition." },
                { subject: "We", verb: "have proceeded", example: "We have proceeded according to the established protocol." },
                { subject: "They", verb: "have proceeded", example: "They have proceeded with the construction despite local opposition." }
            ]
        },
        {
            name: "Trust",
            conjugations: [
                { subject: "I", verb: "have trusted", example: "I have trusted your judgment in difficult situations." },
                { subject: "You", verb: "have trusted", example: "You have trusted the wrong people with sensitive information." },
                { subject: "He/She", verb: "has trusted", example: "She has trusted her instincts throughout her career." },
                { subject: "We", verb: "have trusted", example: "We have trusted this company with our investments for years." },
                { subject: "They", verb: "have trusted", example: "They have trusted each other implicitly since childhood." }
            ]
        },
        {
            name: "Wake",
            conjugations: [
                { subject: "I", verb: "have woken", example: "I have woken up before sunrise every day this week." },
                { subject: "You", verb: "have woken", example: "You have woken the baby with your loud voice." },
                { subject: "He/She", verb: "has woken", example: "He has woken from a coma after three weeks." },
                { subject: "We", verb: "have woken", example: "We have woken to the sound of birds singing each morning." },
                { subject: "They", verb: "have woken", example: "They have woken the entire neighborhood with their party." }
            ]
        },
        {
            name: "Hate",
            conjugations: [
                { subject: "I", verb: "have hated", example: "I have hated confrontations all my life." },
                { subject: "You", verb: "have hated", example: "You have hated this movie since you first watched it." },
                { subject: "He/She", verb: "has hated", example: "She has hated public speaking since her embarrassing experience." },
                { subject: "We", verb: "have hated", example: "We have hated the direction the company has taken recently." },
                { subject: "They", verb: "have hated", example: "They have hated each other since their business partnership dissolved." }
            ]
        },
        {
            name: "Fear",
            conjugations: [
                { subject: "I", verb: "have feared", example: "I have feared the consequences of this decision." },
                { subject: "You", verb: "have feared", example: "You have feared failure more than necessary." },
                { subject: "He/She", verb: "has feared", example: "He has feared flying since his turbulent flight experience." },
                { subject: "We", verb: "have feared", example: "We have feared this outcome from the beginning." },
                { subject: "They", verb: "have feared", example: "They have feared the worst since losing contact with the team." }
            ]
        },
        {
            name: "Possess",
            conjugations: [
                { subject: "I", verb: "have possessed", example: "I have possessed this antique watch for twenty years." },
                { subject: "You", verb: "have possessed", example: "You have possessed remarkable talent in music since childhood." },
                { subject: "He/She", verb: "has possessed", example: "She has possessed strong leadership qualities throughout her career." },
                { subject: "We", verb: "have possessed", example: "We have possessed the legal rights to this property since 2005." },
                { subject: "They", verb: "have possessed", example: "They have possessed knowledge of the secret formula for generations." }
            ]
        },
        {
            name: "Recognize",
            conjugations: [
                { subject: "I", verb: "have recognized", example: "I have recognized your contributions in my report." },
                { subject: "You", verb: "have recognized", example: "You have recognized the pattern in these occurrences." },
                { subject: "He/She", verb: "has recognized", example: "He has recognized many famous actors in the documentary." },
                { subject: "We", verb: "have recognized", example: "We have recognized the need for change in our organization." },
                { subject: "They", verb: "have recognized", example: "They have recognized his expertise with multiple awards." }
            ]
        },
        {
            name: "Stretch",
            conjugations: [
                { subject: "I", verb: "have stretched", example: "I have stretched my muscles before and after every workout." },
                { subject: "You", verb: "have stretched", example: "You have stretched yourself too thin with so many commitments." },
                { subject: "He/She", verb: "has stretched", example: "She has stretched the truth in her resume." },
                { subject: "We", verb: "have stretched", example: "We have stretched our budget to accommodate these expenses." },
                { subject: "They", verb: "have stretched", example: "They have stretched this investigation for months." }
            ]
        },
        {
            name: "Light",
            conjugations: [
                { subject: "I", verb: "have lit", example: "I have lit candles during power outages." },
                { subject: "You", verb: "have lit", example: "You have lit up the room with your smile." },
                { subject: "He/She", verb: "has lit", example: "He has lit the path with torches for the evening ceremony." },
                { subject: "We", verb: "have lit", example: "We have lit fireworks to celebrate the New Year." },
                { subject: "They", verb: "have lit", example: "They have lit a fire to keep warm during the camping trip." }
            ]
        },
        {
            name: "Interview",
            conjugations: [
                { subject: "I", verb: "have interviewed", example: "I have interviewed dozens of candidates for this position." },
                { subject: "You", verb: "have interviewed", example: "You have interviewed several experts for your research." },
                { subject: "He/She", verb: "has interviewed", example: "She has interviewed many celebrities throughout her journalism career." },
                { subject: "We", verb: "have interviewed", example: "We have interviewed all the witnesses to the incident." },
                { subject: "They", verb: "have interviewed", example: "They have interviewed the entire team about the project failure." }
            ]
        },
        {
            name: "Commit",
            conjugations: [
                { subject: "I", verb: "have committed", example: "I have committed myself to completing this project by Friday." },
                { subject: "You", verb: "have committed", example: "You have committed to memory an impressive number of poems." },
                { subject: "He/She", verb: "has committed", example: "He has committed significant resources to this initiative." },
                { subject: "We", verb: "have committed", example: "We have committed to reducing our carbon footprint." },
                { subject: "They", verb: "have committed", example: "They have committed themselves to supporting the community." }
            ]
        },
        {
            name: "Reveal",
            conjugations: [
                { subject: "I", verb: "have revealed", example: "I have revealed my intentions to the board of directors." },
                { subject: "You", verb: "have revealed", example: "You have revealed too much personal information online." },
                { subject: "He/She", verb: "has revealed", example: "She has revealed her artistic talents in her recent exhibition." },
                { subject: "We", verb: "have revealed", example: "We have revealed the new product design at the conference." },
                { subject: "They", verb: "have revealed", example: "They have revealed the details of the merger to shareholders." }
            ]
        },
        {
            name: "Load",
            conjugations: [
                { subject: "I", verb: "have loaded", example: "I have loaded all the supplies into the truck." },
                { subject: "You", verb: "have loaded", example: "You have loaded the dishwasher incorrectly again." },
                { subject: "He/She", verb: "has loaded", example: "He has loaded his presentation with too much data." },
                { subject: "We", verb: "have loaded", example: "We have loaded the software onto all company computers." },
                { subject: "They", verb: "have loaded", example: "They have loaded their plates with more food than they can eat." }
            ]
        },
        {
            name: "Highlight",
            conjugations: [
                { subject: "I", verb: "have highlighted", example: "I have highlighted the key points in the document." },
                { subject: "You", verb: "have highlighted", example: "You have highlighted your achievements effectively in your resume." },
                { subject: "He/She", verb: "has highlighted", example: "She has highlighted the importance of teamwork in her speech." },
                { subject: "We", verb: "have highlighted", example: "We have highlighted areas for improvement in our report." },
                { subject: "They", verb: "have highlighted", example: "They have highlighted the text that needs revision." }
            ]
        },
        {
            name: "Guide",
            conjugations: [
                { subject: "I", verb: "have guided", example: "I have guided many tourists through this historic district." },
                { subject: "You", verb: "have guided", example: "You have guided the team through difficult transitions." },
                { subject: "He/She", verb: "has guided", example: "He has guided his students to academic success." },
                { subject: "We", verb: "have guided", example: "We have guided our business decisions by careful market analysis." },
                { subject: "They", verb: "have guided", example: "They have guided the organization through periods of uncertainty." }
            ]
        },
        {
            name: "Quote",
            conjugations: [
                { subject: "I", verb: "have quoted", example: "I have quoted several experts in my thesis." },
                { subject: "You", verb: "have quoted", example: "You have quoted Shakespeare in your speech." },
                { subject: "He/She", verb: "has quoted", example: "She has quoted accurate figures in her presentation." },
                { subject: "We", verb: "have quoted", example: "We have quoted competitive prices for the project." },
                { subject: "They", verb: "have quoted", example: "They have quoted from ancient texts to support their argument." }
            ]
        },
        {
            name: "Charge",
            conjugations: [
                { subject: "I", verb: "have charged", example: "I have charged my phone before leaving the house." },
                { subject: "You", verb: "have charged", example: "You have charged too much for these basic services." },
                { subject: "He/She", verb: "has charged", example: "He has charged ahead with the project despite obstacles." },
                { subject: "We", verb: "have charged", example: "We have charged all expenses to the company account." },
                { subject: "They", verb: "have charged", example: "They have charged the suspect with multiple offenses." }
            ]
        },        
    ],
    "Present Continuous": [
        {
            name: "Be",
            conjugations: [
                { subject: "I", verb: "am being", example: "I am being attentive in class." },
                { subject: "You", verb: "are being", example: "You are being very helpful today." },
                { subject: "He/She", verb: "is being", example: "She is being careful with the fragile items." },
                { subject: "We", verb: "are being", example: "We are being considerate of others' feelings." },
                { subject: "They", verb: "are being", example: "They are being quiet in the library." }
            ]
        },
        {
            name: "Have",
            conjugations: [
                { subject: "I", verb: "am having", example: "I am having coffee with friends." },
                { subject: "You", verb: "are having", example: "You are having a productive day." },
                { subject: "He/She", verb: "is having", example: "He is having lunch at the new café." },
                { subject: "We", verb: "are having", example: "We are having a discussion about the project." },
                { subject: "They", verb: "are having", example: "They are having trouble with the internet connection." }
            ]
        },
        {
            name: "Do",
            conjugations: [
                { subject: "I", verb: "am doing", example: "I am doing research for my assignment." },
                { subject: "You", verb: "are doing", example: "You are doing great work on this task." },
                { subject: "He/She", verb: "is doing", example: "She is doing exercises in the park." },
                { subject: "We", verb: "are doing", example: "We are doing everything we can to help." },
                { subject: "They", verb: "are doing", example: "They are doing renovations on their house." }
            ]
        },
        {
            name: "Go",
            conjugations: [
                { subject: "I", verb: "am going", example: "I am going to the supermarket now." },
                { subject: "You", verb: "are going", example: "You are going home early today." },
                { subject: "He/She", verb: "is going", example: "He is going to the doctor this afternoon." },
                { subject: "We", verb: "are going", example: "We are going hiking this weekend." },
                { subject: "They", verb: "are going", example: "They are going through some difficult times." }
            ]
        },
        {
            name: "Like",
            conjugations: [
                { subject: "I", verb: "am liking", example: "I am liking the new updates to the app." },
                { subject: "You", verb: "are liking", example: "You are liking your new job, aren't you?" },
                { subject: "He/She", verb: "is liking", example: "She is liking the course more than expected." },
                { subject: "We", verb: "are liking", example: "We are liking the changes to the office layout." },
                { subject: "They", verb: "are liking", example: "They are liking the new neighborhood a lot." }
            ]
        },
        {
            name: "Work",
            conjugations: [
                { subject: "I", verb: "am working", example: "I am working on a challenging problem." },
                { subject: "You", verb: "are working", example: "You are working from home this week." },
                { subject: "He/She", verb: "is working", example: "He is working overtime to finish the project." },
                { subject: "We", verb: "are working", example: "We are working as a team to reach our goals." },
                { subject: "They", verb: "are working", example: "They are working closely with the client." }
            ]
        },
        {
            name: "Eat",
            conjugations: [
                { subject: "I", verb: "am eating", example: "I am eating lunch at my desk." },
                { subject: "You", verb: "are eating", example: "You are eating more vegetables lately." },
                { subject: "He/She", verb: "is eating", example: "She is eating at the new Italian restaurant." },
                { subject: "We", verb: "are eating", example: "We are eating healthier food these days." },
                { subject: "They", verb: "are eating", example: "They are eating outside on the patio." }
            ]
        },
        {
            name: "Study",
            conjugations: [
                { subject: "I", verb: "am studying", example: "I am studying for my final exams." },
                { subject: "You", verb: "are studying", example: "You are studying Japanese, right?" },
                { subject: "He/She", verb: "is studying", example: "He is studying medicine at the university." },
                { subject: "We", verb: "are studying", example: "We are studying the effects of climate change." },
                { subject: "They", verb: "are studying", example: "They are studying online this semester." }
            ]
        },
        {
            name: "Live",
            conjugations: [
                { subject: "I", verb: "am living", example: "I am living in a temporary apartment." },
                { subject: "You", verb: "are living", example: "You are living your best life right now." },
                { subject: "He/She", verb: "is living", example: "She is living with roommates this year." },
                { subject: "We", verb: "are living", example: "We are living near the city center." },
                { subject: "They", verb: "are living", example: "They are living abroad for six months." }
            ]
        },
        {
            name: "Speak",
            conjugations: [
                { subject: "I", verb: "am speaking", example: "I am speaking with the manager about it." },
                { subject: "You", verb: "are speaking", example: "You are speaking too fast for me to understand." },
                { subject: "He/She", verb: "is speaking", example: "He is speaking French with the tourists." },
                { subject: "We", verb: "are speaking", example: "We are speaking about future plans." },
                { subject: "They", verb: "are speaking", example: "They are speaking in whispers." }
            ]
        },
        {
            name: "Make",
            conjugations: [
                { subject: "I", verb: "am making", example: "I am making pasta for dinner tonight." },
                { subject: "You", verb: "are making", example: "You are making progress with your project." },
                { subject: "He/She", verb: "is making", example: "He is making a birthday cake for his sister." },
                { subject: "We", verb: "are making", example: "We are making arrangements for the conference." },
                { subject: "They", verb: "are making", example: "They are making a documentary about wildlife." }
            ]
        },
        {
            name: "Get",
            conjugations: [
                { subject: "I", verb: "am getting", example: "I am getting ready for the party." },
                { subject: "You", verb: "are getting", example: "You are getting better at playing the piano." },
                { subject: "He/She", verb: "is getting", example: "She is getting familiar with the new system." },
                { subject: "We", verb: "are getting", example: "We are getting prepared for the presentation." },
                { subject: "They", verb: "are getting", example: "They are getting their house renovated." }
            ]
        },
        {
            name: "Take",
            conjugations: [
                { subject: "I", verb: "am taking", example: "I am taking notes during the lecture." },
                { subject: "You", verb: "are taking", example: "You are taking too many risks." },
                { subject: "He/She", verb: "is taking", example: "He is taking care of his grandmother." },
                { subject: "We", verb: "are taking", example: "We are taking turns to watch the children." },
                { subject: "They", verb: "are taking", example: "They are taking photos of the scenery." }
            ]
        },
        {
            name: "Come",
            conjugations: [
                { subject: "I", verb: "am coming", example: "I am coming to help you now." },
                { subject: "You", verb: "are coming", example: "You are coming to the meeting later, right?" },
                { subject: "He/She", verb: "is coming", example: "She is coming over for dinner tonight." },
                { subject: "We", verb: "are coming", example: "We are coming to terms with the situation." },
                { subject: "They", verb: "are coming", example: "They are coming by train this afternoon." }
            ]
        },
        {
            name: "See",
            conjugations: [
                { subject: "I", verb: "am seeing", example: "I am seeing improvements in my health." },
                { subject: "You", verb: "are seeing", example: "You are seeing the bigger picture now." },
                { subject: "He/She", verb: "is seeing", example: "He is seeing a therapist for anxiety." },
                { subject: "We", verb: "are seeing", example: "We are seeing positive results from our efforts." },
                { subject: "They", verb: "are seeing", example: "They are seeing the city for the first time." }
            ]
        },
        {
            name: "Know",
            conjugations: [
                { subject: "I", verb: "am knowing", example: "I am knowing more people in the industry each day." },
                { subject: "You", verb: "are knowing", example: "You are knowing your way around the city better now." },
                { subject: "He/She", verb: "is knowing", example: "She is knowing the consequences of her actions." },
                { subject: "We", verb: "are knowing", example: "We are knowing our strengths better after this exercise." },
                { subject: "They", verb: "are knowing", example: "They are knowing how important this project is." }
            ]
        },
        {
            name: "Think",
            conjugations: [
                { subject: "I", verb: "am thinking", example: "I am thinking about changing jobs." },
                { subject: "You", verb: "are thinking", example: "You are thinking too much about the past." },
                { subject: "He/She", verb: "is thinking", example: "He is thinking of buying a new car." },
                { subject: "We", verb: "are thinking", example: "We are thinking of moving to the countryside." },
                { subject: "They", verb: "are thinking", example: "They are thinking about our proposal." }
            ]
        },
        {
            name: "Give",
            conjugations: [
                { subject: "I", verb: "am giving", example: "I am giving a presentation tomorrow." },
                { subject: "You", verb: "are giving", example: "You are giving too much importance to small details." },
                { subject: "He/She", verb: "is giving", example: "She is giving a piano recital this weekend." },
                { subject: "We", verb: "are giving", example: "We are giving away free samples at the event." },
                { subject: "They", verb: "are giving", example: "They are giving their time to help at the shelter." }
            ]
        },
        {
            name: "Find",
            conjugations: [
                { subject: "I", verb: "am finding", example: "I am finding it difficult to concentrate today." },
                { subject: "You", verb: "are finding", example: "You are finding lots of interesting information." },
                { subject: "He/She", verb: "is finding", example: "He is finding new ways to solve the problem." },
                { subject: "We", verb: "are finding", example: "We are finding evidence to support our theory." },
                { subject: "They", verb: "are finding", example: "They are finding their way in a new country." }
            ]
        },
        {
            name: "Tell",
            conjugations: [
                { subject: "I", verb: "am telling", example: "I am telling you the truth about what happened." },
                { subject: "You", verb: "are telling", example: "You are telling stories that inspire everyone." },
                { subject: "He/She", verb: "is telling", example: "He is telling his colleagues about the new policy." },
                { subject: "We", verb: "are telling", example: "We are telling our children about our family history." },
                { subject: "They", verb: "are telling", example: "They are telling jokes to lighten the mood." }
            ]
        },
        {
          name: "Ask",
          conjugations: [
              { subject: "I", verb: "am asking", example: "I am asking for your opinion on this matter." },
              { subject: "You", verb: "are asking", example: "You are asking too many questions at once." },
              { subject: "He/She", verb: "is asking", example: "She is asking her teacher for help." },
              { subject: "We", verb: "are asking", example: "We are asking all employees to complete the survey." },
              { subject: "They", verb: "are asking", example: "They are asking about our new services." }
          ]
        },
          {
              name: "Feel",
              conjugations: [
                  { subject: "I", verb: "am feeling", example: "I am feeling much better today." },
                  { subject: "You", verb: "are feeling", example: "You are feeling nervous about the interview." },
                  { subject: "He/She", verb: "is feeling", example: "He is feeling confident about the test." },
                  { subject: "We", verb: "are feeling", example: "We are feeling optimistic about our chances." },
                  { subject: "They", verb: "are feeling", example: "They are feeling disappointed with the results." }
              ]
          },
          {
              name: "Become",
              conjugations: [
                  { subject: "I", verb: "am becoming", example: "I am becoming more patient with practice." },
                  { subject: "You", verb: "are becoming", example: "You are becoming an expert in this field." },
                  { subject: "He/She", verb: "is becoming", example: "She is becoming famous for her artwork." },
                  { subject: "We", verb: "are becoming", example: "We are becoming more environmentally conscious." },
                  { subject: "They", verb: "are becoming", example: "They are becoming close friends over time." }
              ]
          },
          {
              name: "Leave",
              conjugations: [
                  { subject: "I", verb: "am leaving", example: "I am leaving for the airport in an hour." },
                  { subject: "You", verb: "are leaving", example: "You are leaving your keys behind again." },
                  { subject: "He/She", verb: "is leaving", example: "He is leaving the company at the end of the month." },
                  { subject: "We", verb: "are leaving", example: "We are leaving early to avoid traffic." },
                  { subject: "They", verb: "are leaving", example: "They are leaving footprints in the sand." }
              ]
          },
          {
              name: "Put",
              conjugations: [
                  { subject: "I", verb: "am putting", example: "I am putting the books back on the shelf." },
                  { subject: "You", verb: "are putting", example: "You are putting too much sugar in your coffee." },
                  { subject: "He/She", verb: "is putting", example: "She is putting her ideas into practice." },
                  { subject: "We", verb: "are putting", example: "We are putting our house on the market." },
                  { subject: "They", verb: "are putting", example: "They are putting together furniture from IKEA." }
              ]
          },
          {
              name: "Mean",
              conjugations: [
                  { subject: "I", verb: "am meaning", example: "I am meaning to call you back all day." },
                  { subject: "You", verb: "are meaning", example: "You are meaning well, but your approach is wrong." },
                  { subject: "He/She", verb: "is meaning", example: "He is meaning to say something important." },
                  { subject: "We", verb: "are meaning", example: "We are meaning to address these issues soon." },
                  { subject: "They", verb: "are meaning", example: "They are meaning to visit us this summer." }
              ]
          },
          {
              name: "Keep",
              conjugations: [
                  { subject: "I", verb: "am keeping", example: "I am keeping track of all expenses." },
                  { subject: "You", verb: "are keeping", example: "You are keeping everyone waiting." },
                  { subject: "He/She", verb: "is keeping", example: "She is keeping a journal of her travels." },
                  { subject: "We", verb: "are keeping", example: "We are keeping the tradition alive." },
                  { subject: "They", verb: "are keeping", example: "They are keeping pets in their apartment." }
              ]
          },
          {
              name: "Let",
              conjugations: [
                  { subject: "I", verb: "am letting", example: "I am letting you borrow my car for the weekend." },
                  { subject: "You", verb: "are letting", example: "You are letting your imagination run wild." },
                  { subject: "He/She", verb: "is letting", example: "He is letting his beard grow for Movember." },
                  { subject: "We", verb: "are letting", example: "We are letting students decide on the project topics." },
                  { subject: "They", verb: "are letting", example: "They are letting their children stay up late tonight." }
              ]
          },
          {
              name: "Help",
              conjugations: [
                  { subject: "I", verb: "am helping", example: "I am helping my sister move to her new apartment." },
                  { subject: "You", verb: "are helping", example: "You are helping the team achieve great results." },
                  { subject: "He/She", verb: "is helping", example: "She is helping elderly neighbors with groceries." },
                  { subject: "We", verb: "are helping", example: "We are helping to organize the charity event." },
                  { subject: "They", verb: "are helping", example: "They are helping build homes for those in need." }
              ]
          },
          {
              name: "Talk",
              conjugations: [
                  { subject: "I", verb: "am talking", example: "I am talking to the manager about the issue." },
                  { subject: "You", verb: "are talking", example: "You are talking too loudly in the library." },
                  { subject: "He/She", verb: "is talking", example: "He is talking to his colleagues about the project." },
                  { subject: "We", verb: "are talking", example: "We are talking about moving to another city." },
                  { subject: "They", verb: "are talking", example: "They are talking in the conference room." }
              ]
          },
          {
              name: "Turn",
              conjugations: [
                  { subject: "I", verb: "am turning", example: "I am turning my life around with these new habits." },
                  { subject: "You", verb: "are turning", example: "You are turning the situation into an opportunity." },
                  { subject: "He/She", verb: "is turning", example: "She is turning thirty next month." },
                  { subject: "We", verb: "are turning", example: "We are turning our attention to the next challenge." },
                  { subject: "They", verb: "are turning", example: "They are turning off all the lights before leaving." }
              ]
          },
          {
              name: "Show",
              conjugations: [
                  { subject: "I", verb: "am showing", example: "I am showing the new employee around the office." },
                  { subject: "You", verb: "are showing", example: "You are showing signs of improvement in your work." },
                  { subject: "He/She", verb: "is showing", example: "He is showing his artwork at the local gallery." },
                  { subject: "We", verb: "are showing", example: "We are showing our support for the cause." },
                  { subject: "They", verb: "are showing", example: "They are showing the documentary at the film festival." }
              ]
          },
          {
              name: "Hear",
              conjugations: [
                  { subject: "I", verb: "am hearing", example: "I am hearing strange noises from the attic." },
                  { subject: "You", verb: "are hearing", example: "You are hearing the news from a reliable source." },
                  { subject: "He/She", verb: "is hearing", example: "She is hearing music that inspires her creativity." },
                  { subject: "We", verb: "are hearing", example: "We are hearing positive feedback from customers." },
                  { subject: "They", verb: "are hearing", example: "They are hearing rumors about the company merger." }
              ]
          },
          {
              name: "Play",
              conjugations: [
                  { subject: "I", verb: "am playing", example: "I am playing tennis with my friends this afternoon." },
                  { subject: "You", verb: "are playing", example: "You are playing an important role in this project." },
                  { subject: "He/She", verb: "is playing", example: "He is playing the piano beautifully." },
                  { subject: "We", verb: "are playing", example: "We are playing a new board game tonight." },
                  { subject: "They", verb: "are playing", example: "They are playing against the champions tomorrow." }
              ]
          },
          {
              name: "Run",
              conjugations: [
                  { subject: "I", verb: "am running", example: "I am running late for the meeting." },
                  { subject: "You", verb: "are running", example: "You are running a successful business." },
                  { subject: "He/She", verb: "is running", example: "She is running for president of the student council." },
                  { subject: "We", verb: "are running", example: "We are running out of time to finish the project." },
                  { subject: "They", verb: "are running", example: "They are running a marathon for charity." }
              ]
          },
          {
              name: "Move",
              conjugations: [
                  { subject: "I", verb: "am moving", example: "I am moving to a new apartment next month." },
                  { subject: "You", verb: "are moving", example: "You are moving too quickly through the material." },
                  { subject: "He/She", verb: "is moving", example: "He is moving his office to another building." },
                  { subject: "We", verb: "are moving", example: "We are moving forward with the expansion plans." },
                  { subject: "They", verb: "are moving", example: "They are moving their business online." }
              ]
          },
          {
              name: "Want",
              conjugations: [
                  { subject: "I", verb: "am wanting", example: "I am wanting to make some changes in my life." },
                  { subject: "You", verb: "are wanting", example: "You are wanting too many things at once." },
                  { subject: "He/She", verb: "is wanting", example: "She is wanting to speak with you urgently." },
                  { subject: "We", verb: "are wanting", example: "We are wanting to improve our services." },
                  { subject: "They", verb: "are wanting", example: "They are wanting to expand their business globally." }
              ]
          },
          {
              name: "Need",
              conjugations: [
                  { subject: "I", verb: "am needing", example: "I am needing your assistance with this project." },
                  { subject: "You", verb: "are needing", example: "You are needing more practice before the competition." },
                  { subject: "He/She", verb: "is needing", example: "He is needing extra support during this difficult time." },
                  { subject: "We", verb: "are needing", example: "We are needing to reconsider our approach." },
                  { subject: "They", verb: "are needing", example: "They are needing more information before deciding." }
              ]
          },
          {
              name: "Start",
              conjugations: [
                  { subject: "I", verb: "am starting", example: "I am starting a new exercise routine today." },
                  { subject: "You", verb: "are starting", example: "You are starting to understand the concept now." },
                  { subject: "He/She", verb: "is starting", example: "She is starting her own business next year." },
                  { subject: "We", verb: "are starting", example: "We are starting to see results from our efforts." },
                  { subject: "They", verb: "are starting", example: "They are starting construction on the new building." }
              ]
          },
          {
              name: "Seem",
              conjugations: [
                  { subject: "I", verb: "am seeming", example: "I am seeming confident despite my nervousness." },
                  { subject: "You", verb: "are seeming", example: "You are seeming upset about something." },
                  { subject: "He/She", verb: "is seeming", example: "He is seeming happier since the promotion." },
                  { subject: "We", verb: "are seeming", example: "We are seeming disorganized to our clients." },
                  { subject: "They", verb: "are seeming", example: "They are seeming reluctant to commit to the project." }
              ]
          },
          {
            name: "Look",
            conjugations: [
                { subject: "I", verb: "am looking", example: "I am looking for my lost keys." },
                { subject: "You", verb: "are looking", example: "You are looking very tired today." },
                { subject: "He/She", verb: "is looking", example: "She is looking at the paintings in the gallery." },
                { subject: "We", verb: "are looking", example: "We are looking forward to the weekend." },
                { subject: "They", verb: "are looking", example: "They are looking for a new apartment." }
            ]
        },
        {
            name: "Call",
            conjugations: [
                { subject: "I", verb: "am calling", example: "I am calling to confirm our appointment." },
                { subject: "You", verb: "are calling", example: "You are calling from an unknown number." },
                { subject: "He/She", verb: "is calling", example: "He is calling his parents every Sunday." },
                { subject: "We", verb: "are calling", example: "We are calling all participants to inform them." },
                { subject: "They", verb: "are calling", example: "They are calling for immediate action." }
            ]
        },
        {
            name: "Try",
            conjugations: [
                { subject: "I", verb: "am trying", example: "I am trying to solve this math problem." },
                { subject: "You", verb: "are trying", example: "You are trying too hard to please everyone." },
                { subject: "He/She", verb: "is trying", example: "She is trying on different outfits for the party." },
                { subject: "We", verb: "are trying", example: "We are trying to reach a compromise." },
                { subject: "They", verb: "are trying", example: "They are trying new recipes this week." }
            ]
        },
        {
            name: "Use",
            conjugations: [
                { subject: "I", verb: "am using", example: "I am using my new laptop for the first time." },
                { subject: "You", verb: "are using", example: "You are using too much water." },
                { subject: "He/She", verb: "is using", example: "He is using the company car this week." },
                { subject: "We", verb: "are using", example: "We are using environmentally friendly products." },
                { subject: "They", verb: "are using", example: "They are using our conference room for the meeting." }
            ]
        },
        {
            name: "Bring",
            conjugations: [
                { subject: "I", verb: "am bringing", example: "I am bringing dessert to the dinner party." },
                { subject: "You", verb: "are bringing", example: "You are bringing joy to everyone around you." },
                { subject: "He/She", verb: "is bringing", example: "She is bringing her laptop to the meeting." },
                { subject: "We", verb: "are bringing", example: "We are bringing extra chairs for the guests." },
                { subject: "They", verb: "are bringing", example: "They are bringing their children to the event." }
            ]
        },
        {
            name: "Begin",
            conjugations: [
                { subject: "I", verb: "am beginning", example: "I am beginning to understand the concept." },
                { subject: "You", verb: "are beginning", example: "You are beginning to show improvement." },
                { subject: "He/She", verb: "is beginning", example: "He is beginning a new chapter in his life." },
                { subject: "We", verb: "are beginning", example: "We are beginning our journey early tomorrow." },
                { subject: "They", verb: "are beginning", example: "They are beginning to doubt the plan." }
            ]
        },
        {
            name: "Write",
            conjugations: [
                { subject: "I", verb: "am writing", example: "I am writing a novel about my experiences." },
                { subject: "You", verb: "are writing", example: "You are writing an impressive research paper." },
                { subject: "He/She", verb: "is writing", example: "She is writing emails to clients." },
                { subject: "We", verb: "are writing", example: "We are writing the proposal together." },
                { subject: "They", verb: "are writing", example: "They are writing articles for the newspaper." }
            ]
        },
        {
            name: "Read",
            conjugations: [
                { subject: "I", verb: "am reading", example: "I am reading an interesting book about history." },
                { subject: "You", verb: "are reading", example: "You are reading too quickly to absorb the information." },
                { subject: "He/She", verb: "is reading", example: "He is reading a story to his children." },
                { subject: "We", verb: "are reading", example: "We are reading the same book for our club." },
                { subject: "They", verb: "are reading", example: "They are reading the instructions carefully." }
            ]
        },
        {
            name: "Say",
            conjugations: [
                { subject: "I", verb: "am saying", example: "I am saying this for your own good." },
                { subject: "You", verb: "are saying", example: "You are saying things you might regret later." },
                { subject: "He/She", verb: "is saying", example: "She is saying goodbye to her colleagues." },
                { subject: "We", verb: "are saying", example: "We are saying our prayers before dinner." },
                { subject: "They", verb: "are saying", example: "They are saying nice things about your work." }
            ]
        },
        {
            name: "Stop",
            conjugations: [
                { subject: "I", verb: "am stopping", example: "I am stopping at the store on my way home." },
                { subject: "You", verb: "are stopping", example: "You are stopping the project too early." },
                { subject: "He/She", verb: "is stopping", example: "He is stopping smoking for health reasons." },
                { subject: "We", verb: "are stopping", example: "We are stopping for lunch at the next exit." },
                { subject: "They", verb: "are stopping", example: "They are stopping at nothing to achieve their goals." }
            ]
        },
        {
            name: "Learn",
            conjugations: [
                { subject: "I", verb: "am learning", example: "I am learning Spanish for my trip to Mexico." },
                { subject: "You", verb: "are learning", example: "You are learning quickly in your new position." },
                { subject: "He/She", verb: "is learning", example: "She is learning to play the guitar." },
                { subject: "We", verb: "are learning", example: "We are learning from our mistakes." },
                { subject: "They", verb: "are learning", example: "They are learning new skills for their careers." }
            ]
        },
        {
            name: "Understand",
            conjugations: [
                { subject: "I", verb: "am understanding", example: "I am understanding the situation better now." },
                { subject: "You", verb: "are understanding", example: "You are understanding the concept more clearly." },
                { subject: "He/She", verb: "is understanding", example: "He is understanding the implications of his decision." },
                { subject: "We", verb: "are understanding", example: "We are understanding each other's perspectives." },
                { subject: "They", verb: "are understanding", example: "They are understanding the challenges we face." }
            ]
        },
        {
            name: "Watch",
            conjugations: [
                { subject: "I", verb: "am watching", example: "I am watching a documentary about marine life." },
                { subject: "You", verb: "are watching", example: "You are watching too much television lately." },
                { subject: "He/She", verb: "is watching", example: "She is watching the children play in the garden." },
                { subject: "We", verb: "are watching", example: "We are watching the developments closely." },
                { subject: "They", verb: "are watching", example: "They are watching a movie at the cinema." }
            ]
        },
        {
            name: "Follow",
            conjugations: [
                { subject: "I", verb: "am following", example: "I am following your instructions carefully." },
                { subject: "You", verb: "are following", example: "You are following in your father's footsteps." },
                { subject: "He/She", verb: "is following", example: "He is following a strict diet for health reasons." },
                { subject: "We", verb: "are following", example: "We are following the guide on our tour." },
                { subject: "They", verb: "are following", example: "They are following the latest fashion trends." }
            ]
        },
        {
            name: "Walk",
            conjugations: [
                { subject: "I", verb: "am walking", example: "I am walking to work to get some exercise." },
                { subject: "You", verb: "are walking", example: "You are walking too fast for me to keep up." },
                { subject: "He/She", verb: "is walking", example: "She is walking her dog in the park." },
                { subject: "We", verb: "are walking", example: "We are walking along the beach at sunset." },
                { subject: "They", verb: "are walking", example: "They are walking through the old town district." }
            ]
        },
        {
            name: "Meet",
            conjugations: [
                { subject: "I", verb: "am meeting", example: "I am meeting with the client this afternoon." },
                { subject: "You", verb: "are meeting", example: "You are meeting your new teammates today." },
                { subject: "He/She", verb: "is meeting", example: "He is meeting his girlfriend's parents for the first time." },
                { subject: "We", verb: "are meeting", example: "We are meeting to discuss the budget proposal." },
                { subject: "They", verb: "are meeting", example: "They are meeting at the conference in Dallas." }
            ]
        },
        {
            name: "Consider",
            conjugations: [
                { subject: "I", verb: "am considering", example: "I am considering a career change." },
                { subject: "You", verb: "are considering", example: "You are considering too many options at once." },
                { subject: "He/She", verb: "is considering", example: "She is considering our offer carefully." },
                { subject: "We", verb: "are considering", example: "We are considering moving to another city." },
                { subject: "They", verb: "are considering", example: "They are considering various investment opportunities." }
            ]
        },
        {
            name: "Change",
            conjugations: [
                { subject: "I", verb: "am changing", example: "I am changing my diet to be healthier." },
                { subject: "You", verb: "are changing", example: "You are changing your mind too often." },
                { subject: "He/She", verb: "is changing", example: "He is changing jobs next month." },
                { subject: "We", verb: "are changing", example: "We are changing our approach to this problem." },
                { subject: "They", verb: "are changing", example: "They are changing the company's policies." }
            ]
        },
        {
            name: "Appear",
            conjugations: [
                { subject: "I", verb: "am appearing", example: "I am appearing in a local theater production." },
                { subject: "You", verb: "are appearing", example: "You are appearing to be more confident now." },
                { subject: "He/She", verb: "is appearing", example: "She is appearing on a talk show tomorrow." },
                { subject: "We", verb: "are appearing", example: "We are appearing in court next week." },
                { subject: "They", verb: "are appearing", example: "They are appearing at various events this month." }
            ]
        },
        {
            name: "Happen",
            conjugations: [
                { subject: "I", verb: "am happening", example: "I am happening to be in the right place at the right time." },
                { subject: "You", verb: "are happening", example: "You are happening to make a difference in people's lives." },
                { subject: "He/She", verb: "is happening", example: "He is happening to meet more challenges than expected." },
                { subject: "We", verb: "are happening", example: "We are happening to discover new opportunities." },
                { subject: "They", verb: "are happening", example: "They are happening to experience technical difficulties." }
            ]
        },
        {
          name: "Drive",
          conjugations: [
              { subject: "I", verb: "am driving", example: "I am driving to the office this morning." },
              { subject: "You", verb: "are driving", example: "You are driving too fast on this road." },
              { subject: "He/She", verb: "is driving", example: "She is driving her new car to the beach." },
              { subject: "We", verb: "are driving", example: "We are driving across the country next week." },
              { subject: "They", verb: "are driving", example: "They are driving to the mountains for their vacation." }
          ]
        },
        {
            name: "Send",
            conjugations: [
                { subject: "I", verb: "am sending", example: "I am sending you the files right now." },
                { subject: "You", verb: "are sending", example: "You are sending mixed signals about the project." },
                { subject: "He/She", verb: "is sending", example: "He is sending a package to his brother overseas." },
                { subject: "We", verb: "are sending", example: "We are sending invitations to all our clients." },
                { subject: "They", verb: "are sending", example: "They are sending their children to summer camp." }
            ]
        },
        {
            name: "Stay",
            conjugations: [
                { subject: "I", verb: "am staying", example: "I am staying at a hotel near the conference center." },
                { subject: "You", verb: "are staying", example: "You are staying up too late these days." },
                { subject: "He/She", verb: "is staying", example: "She is staying with her parents until she finds an apartment." },
                { subject: "We", verb: "are staying", example: "We are staying focused on our goals despite challenges." },
                { subject: "They", verb: "are staying", example: "They are staying in the countryside for the weekend." }
            ]
        },
        {
            name: "Receive",
            conjugations: [
                { subject: "I", verb: "am receiving", example: "I am receiving numerous emails about the event." },
                { subject: "You", verb: "are receiving", example: "You are receiving a special award at the ceremony." },
                { subject: "He/She", verb: "is receiving", example: "He is receiving treatment for his condition." },
                { subject: "We", verb: "are receiving", example: "We are receiving guests from abroad next month." },
                { subject: "They", verb: "are receiving", example: "They are receiving more applications than expected." }
            ]
        },
        {
            name: "Remember",
            conjugations: [
                { subject: "I", verb: "am remembering", example: "I am remembering details from my childhood more clearly now." },
                { subject: "You", verb: "are remembering", example: "You are remembering the sequence of events correctly." },
                { subject: "He/She", verb: "is remembering", example: "She is remembering to take her medication regularly." },
                { subject: "We", verb: "are remembering", example: "We are remembering our anniversary with a special dinner." },
                { subject: "They", verb: "are remembering", example: "They are remembering to include everyone in the celebration." }
            ]
        },
        {
            name: "Expect",
            conjugations: [
                { subject: "I", verb: "am expecting", example: "I am expecting a package delivery today." },
                { subject: "You", verb: "are expecting", example: "You are expecting too much from a beginner." },
                { subject: "He/She", verb: "is expecting", example: "She is expecting a baby in September." },
                { subject: "We", verb: "are expecting", example: "We are expecting around fifty guests at the reception." },
                { subject: "They", verb: "are expecting", example: "They are expecting the results of the test soon." }
            ]
        },
        {
            name: "Buy",
            conjugations: [
                { subject: "I", verb: "am buying", example: "I am buying a new computer this weekend." },
                { subject: "You", verb: "are buying", example: "You are buying groceries for the dinner party." },
                { subject: "He/She", verb: "is buying", example: "He is buying his first house next month." },
                { subject: "We", verb: "are buying", example: "We are buying tickets for the concert in advance." },
                { subject: "They", verb: "are buying", example: "They are buying supplies for the office renovation." }
            ]
        },
        {
            name: "Build",
            conjugations: [
                { subject: "I", verb: "am building", example: "I am building a model airplane in my spare time." },
                { subject: "You", verb: "are building", example: "You are building a strong reputation in the industry." },
                { subject: "He/She", verb: "is building", example: "She is building her own business from scratch." },
                { subject: "We", verb: "are building", example: "We are building a new website for our organization." },
                { subject: "They", verb: "are building", example: "They are building a sustainable home outside the city." }
            ]
        },
        {
            name: "Fall",
            conjugations: [
                { subject: "I", verb: "am falling", example: "I am falling behind on my reading assignments." },
                { subject: "You", verb: "are falling", example: "You are falling asleep during the lecture." },
                { subject: "He/She", verb: "is falling", example: "He is falling in love with the city's culture." },
                { subject: "We", verb: "are falling", example: "We are falling into our old habits again." },
                { subject: "They", verb: "are falling", example: "They are falling leaves from the autumn trees." }
            ]
        },
        {
            name: "Reach",
            conjugations: [
                { subject: "I", verb: "am reaching", example: "I am reaching out to former colleagues for advice." },
                { subject: "You", verb: "are reaching", example: "You are reaching your fitness goals steadily." },
                { subject: "He/She", verb: "is reaching", example: "She is reaching for the top shelf to get the book." },
                { subject: "We", verb: "are reaching", example: "We are reaching a critical point in our research." },
                { subject: "They", verb: "are reaching", example: "They are reaching millions of viewers with their campaign." }
            ]
        },
        {
            name: "Remain",
            conjugations: [
                { subject: "I", verb: "am remaining", example: "I am remaining calm despite the challenging situation." },
                { subject: "You", verb: "are remaining", example: "You are remaining at your post until relief arrives." },
                { subject: "He/She", verb: "is remaining", example: "He is remaining silent about the allegations." },
                { subject: "We", verb: "are remaining", example: "We are remaining hopeful about finding a solution." },
                { subject: "They", verb: "are remaining", example: "They are remaining in the competition despite setbacks." }
            ]
        },
        {
            name: "Believe",
            conjugations: [
                { subject: "I", verb: "am believing", example: "I am believing in myself more each day." },
                { subject: "You", verb: "are believing", example: "You are believing in the team's potential." },
                { subject: "He/She", verb: "is believing", example: "She is believing the witness's account of events." },
                { subject: "We", verb: "are believing", example: "We are believing that positive change is possible." },
                { subject: "They", verb: "are believing", example: "They are believing the latest scientific findings." }
            ]
        },
        {
            name: "Hold",
            conjugations: [
                { subject: "I", verb: "am holding", example: "I am holding a meeting with the department heads." },
                { subject: "You", verb: "are holding", example: "You are holding too many responsibilities at once." },
                { subject: "He/She", verb: "is holding", example: "He is holding the door open for the elderly woman." },
                { subject: "We", verb: "are holding", example: "We are holding a fundraiser for the local charity." },
                { subject: "They", verb: "are holding", example: "They are holding talks to resolve the conflict." }
            ]
        },
        {
            name: "Sell",
            conjugations: [
                { subject: "I", verb: "am selling", example: "I am selling my old furniture before moving." },
                { subject: "You", verb: "are selling", example: "You are selling the benefits of the product effectively." },
                { subject: "He/She", verb: "is selling", example: "She is selling handmade jewelry at the craft fair." },
                { subject: "We", verb: "are selling", example: "We are selling tickets for the charity concert." },
                { subject: "They", verb: "are selling", example: "They are selling their house to move closer to family." }
            ]
        },
        {
            name: "Pay",
            conjugations: [
                { subject: "I", verb: "am paying", example: "I am paying attention to the details of the contract." },
                { subject: "You", verb: "are paying", example: "You are paying too much for that subscription service." },
                { subject: "He/She", verb: "is paying", example: "He is paying for everyone's dinner tonight." },
                { subject: "We", verb: "are paying", example: "We are paying our employees competitive salaries." },
                { subject: "They", verb: "are paying", example: "They are paying respect to the veterans at the ceremony." }
            ]
        },
        {
            name: "Open",
            conjugations: [
                { subject: "I", verb: "am opening", example: "I am opening a new bank account tomorrow." },
                { subject: "You", verb: "are opening", example: "You are opening the door to new opportunities." },
                { subject: "He/She", verb: "is opening", example: "She is opening her first art exhibition next week." },
                { subject: "We", verb: "are opening", example: "We are opening a branch office in the downtown area." },
                { subject: "They", verb: "are opening", example: "They are opening the conference with a keynote speech." }
            ]
        },
        {
            name: "Lose",
            conjugations: [
                { subject: "I", verb: "am losing", example: "I am losing weight with my new exercise routine." },
                { subject: "You", verb: "are losing", example: "You are losing track of time while working." },
                { subject: "He/She", verb: "is losing", example: "He is losing interest in the project." },
                { subject: "We", verb: "are losing", example: "We are losing valuable data due to the system crash." },
                { subject: "They", verb: "are losing", example: "They are losing the match despite playing well." }
            ]
        },
        {
            name: "Wait",
            conjugations: [
                { subject: "I", verb: "am waiting", example: "I am waiting for the bus at the corner." },
                { subject: "You", verb: "are waiting", example: "You are waiting in the wrong terminal." },
                { subject: "He/She", verb: "is waiting", example: "She is waiting patiently for her appointment." },
                { subject: "We", verb: "are waiting", example: "We are waiting for the right moment to announce the news." },
                { subject: "They", verb: "are waiting", example: "They are waiting in line to get concert tickets." }
            ]
        },
        {
            name: "Serve",
            conjugations: [
                { subject: "I", verb: "am serving", example: "I am serving on the committee for education reform." },
                { subject: "You", verb: "are serving", example: "You are serving as a great example for younger team members." },
                { subject: "He/She", verb: "is serving", example: "He is serving food at the homeless shelter." },
                { subject: "We", verb: "are serving", example: "We are serving refreshments after the presentation." },
                { subject: "They", verb: "are serving", example: "They are serving customers with a smile." }
            ]
        },
        {
            name: "Die",
            conjugations: [
                { subject: "I", verb: "am dying", example: "I am dying to know what happened at the meeting." },
                { subject: "You", verb: "are dying", example: "You are dying your hair a different color." },
                { subject: "He/She", verb: "is dying", example: "She is dying to try the new restaurant in town." },
                { subject: "We", verb: "are dying", example: "We are dying of curiosity about the surprise." },
                { subject: "They", verb: "are dying", example: "They are dying their fabrics using natural materials." }
            ]
        },
        {
          name: "Lead",
          conjugations: [
              { subject: "I", verb: "am leading", example: "I am leading the team project this quarter." },
              { subject: "You", verb: "are leading", example: "You are leading the discussion very effectively." },
              { subject: "He/She", verb: "is leading", example: "She is leading the company through difficult times." },
              { subject: "We", verb: "are leading", example: "We are leading the industry in innovation." },
              { subject: "They", verb: "are leading", example: "They are leading a campaign for environmental awareness." }
          ]
        },
        {
            name: "Break",
            conjugations: [
                { subject: "I", verb: "am breaking", example: "I am breaking my personal record in the marathon." },
                { subject: "You", verb: "are breaking", example: "You are breaking the rules of the competition." },
                { subject: "He/She", verb: "is breaking", example: "He is breaking down the complex problem into smaller parts." },
                { subject: "We", verb: "are breaking", example: "We are breaking for lunch at 12:30 today." },
                { subject: "They", verb: "are breaking", example: "They are breaking new ground with their research." }
            ]
        },
        {
            name: "Create",
            conjugations: [
                { subject: "I", verb: "am creating", example: "I am creating a digital portfolio for my work." },
                { subject: "You", verb: "are creating", example: "You are creating beautiful music with that instrument." },
                { subject: "He/She", verb: "is creating", example: "She is creating a new recipe for the competition." },
                { subject: "We", verb: "are creating", example: "We are creating opportunities for young artists." },
                { subject: "They", verb: "are creating", example: "They are creating a website for their business." }
            ]
        },
        {
            name: "Sleep",
            conjugations: [
                { subject: "I", verb: "am sleeping", example: "I am sleeping better since I started exercising regularly." },
                { subject: "You", verb: "are sleeping", example: "You are sleeping through your alarm every morning." },
                { subject: "He/She", verb: "is sleeping", example: "He is sleeping in the guest room tonight." },
                { subject: "We", verb: "are sleeping", example: "We are sleeping under the stars on our camping trip." },
                { subject: "They", verb: "are sleeping", example: "They are sleeping at a hotel during the renovation." }
            ]
        },
        {
            name: "Win",
            conjugations: [
                { subject: "I", verb: "am winning", example: "I am winning more matches since I started training harder." },
                { subject: "You", verb: "are winning", example: "You are winning the hearts of the audience with your performance." },
                { subject: "He/She", verb: "is winning", example: "She is winning the race by a large margin." },
                { subject: "We", verb: "are winning", example: "We are winning the battle against pollution in our city." },
                { subject: "They", verb: "are winning", example: "They are winning awards for their documentary film." }
            ]
        },
        {
            name: "Offer",
            conjugations: [
                { subject: "I", verb: "am offering", example: "I am offering my assistance with the project." },
                { subject: "You", verb: "are offering", example: "You are offering too little for such a valuable item." },
                { subject: "He/She", verb: "is offering", example: "He is offering free consultations this month." },
                { subject: "We", verb: "are offering", example: "We are offering special discounts to first-time customers." },
                { subject: "They", verb: "are offering", example: "They are offering scholarships to talented students." }
            ]
        },
        {
            name: "Grow",
            conjugations: [
                { subject: "I", verb: "am growing", example: "I am growing vegetables in my backyard garden." },
                { subject: "You", verb: "are growing", example: "You are growing more confident with each presentation." },
                { subject: "He/She", verb: "is growing", example: "She is growing her business steadily each year." },
                { subject: "We", verb: "are growing", example: "We are growing our team to meet increasing demand." },
                { subject: "They", verb: "are growing", example: "They are growing organic herbs for local restaurants." }
            ]
        },
        {
            name: "Teach",
            conjugations: [
                { subject: "I", verb: "am teaching", example: "I am teaching English to international students." },
                { subject: "You", verb: "are teaching", example: "You are teaching the new employees our protocols." },
                { subject: "He/She", verb: "is teaching", example: "He is teaching a course on digital marketing." },
                { subject: "We", verb: "are teaching", example: "We are teaching children about environmental conservation." },
                { subject: "They", verb: "are teaching", example: "They are teaching special workshops this semester." }
            ]
        },
        {
            name: "Cook",
            conjugations: [
                { subject: "I", verb: "am cooking", example: "I am cooking dinner for my family tonight." },
                { subject: "You", verb: "are cooking", example: "You are cooking with too much salt." },
                { subject: "He/She", verb: "is cooking", example: "She is cooking a traditional recipe from her hometown." },
                { subject: "We", verb: "are cooking", example: "We are cooking meals for the community shelter." },
                { subject: "They", verb: "are cooking", example: "They are cooking various international dishes for the festival." }
            ]
        },
        {
            name: "Spend",
            conjugations: [
                { subject: "I", verb: "am spending", example: "I am spending the weekend at my grandparents' house." },
                { subject: "You", verb: "are spending", example: "You are spending too much time on social media." },
                { subject: "He/She", verb: "is spending", example: "He is spending his vacation in the mountains." },
                { subject: "We", verb: "are spending", example: "We are spending our resources wisely on this project." },
                { subject: "They", verb: "are spending", example: "They are spending the holidays with relatives abroad." }
            ]
        },
        {
            name: "Draw",
            conjugations: [
                { subject: "I", verb: "am drawing", example: "I am drawing a portrait of my friend." },
                { subject: "You", verb: "are drawing", example: "You are drawing attention with your bright outfit." },
                { subject: "He/She", verb: "is drawing", example: "She is drawing up plans for the new building." },
                { subject: "We", verb: "are drawing", example: "We are drawing inspiration from nature for our designs." },
                { subject: "They", verb: "are drawing", example: "They are drawing lots to decide who goes first." }
            ]
        },
        {
            name: "Continue",
            conjugations: [
                { subject: "I", verb: "am continuing", example: "I am continuing my education with online courses." },
                { subject: "You", verb: "are continuing", example: "You are continuing to make progress despite challenges." },
                { subject: "He/She", verb: "is continuing", example: "He is continuing the family business tradition." },
                { subject: "We", verb: "are continuing", example: "We are continuing our efforts to improve customer service." },
                { subject: "They", verb: "are continuing", example: "They are continuing to support the charity's mission." }
            ]
        },
        {
            name: "Sit",
            conjugations: [
                { subject: "I", verb: "am sitting", example: "I am sitting by the window watching the rain." },
                { subject: "You", verb: "are sitting", example: "You are sitting in my assigned seat." },
                { subject: "He/She", verb: "is sitting", example: "She is sitting on the board of directors." },
                { subject: "We", verb: "are sitting", example: "We are sitting in the front row at the concert." },
                { subject: "They", verb: "are sitting", example: "They are sitting around the campfire telling stories." }
            ]
        },
        {
            name: "Rise",
            conjugations: [
                { subject: "I", verb: "am rising", example: "I am rising early to catch the first train." },
                { subject: "You", verb: "are rising", example: "You are rising to the challenge admirably." },
                { subject: "He/She", verb: "is rising", example: "He is rising quickly through the ranks of the company." },
                { subject: "We", verb: "are rising", example: "We are rising above the difficulties we've faced." },
                { subject: "They", verb: "are rising", example: "They are rising in popularity with their new album." }
            ]
        },
        {
            name: "Drink",
            conjugations: [
                { subject: "I", verb: "am drinking", example: "I am drinking herbal tea instead of coffee." },
                { subject: "You", verb: "are drinking", example: "You are drinking enough water throughout the day." },
                { subject: "He/She", verb: "is drinking", example: "She is drinking a smoothie for breakfast." },
                { subject: "We", verb: "are drinking", example: "We are drinking a toast to the newlyweds." },
                { subject: "They", verb: "are drinking", example: "They are drinking lemonade on the porch." }
            ]
        },
        {
            name: "Wear",
            conjugations: [
                { subject: "I", verb: "am wearing", example: "I am wearing my new suit to the interview." },
                { subject: "You", verb: "are wearing", example: "You are wearing the same colors as me today." },
                { subject: "He/She", verb: "is wearing", example: "He is wearing glasses since his vision changed." },
                { subject: "We", verb: "are wearing", example: "We are wearing matching t-shirts for the team event." },
                { subject: "They", verb: "are wearing", example: "They are wearing traditional costumes for the celebration." }
            ]
        },
        {
            name: "Choose",
            conjugations: [
                { subject: "I", verb: "am choosing", example: "I am choosing between two job offers at the moment." },
                { subject: "You", verb: "are choosing", example: "You are choosing wisely by saving for retirement early." },
                { subject: "He/She", verb: "is choosing", example: "She is choosing which college to attend next year." },
                { subject: "We", verb: "are choosing", example: "We are choosing a location for the annual retreat." },
                { subject: "They", verb: "are choosing", example: "They are choosing candidates for the scholarship program." }
            ]
        },
        {
            name: "Travel",
            conjugations: [
                { subject: "I", verb: "am traveling", example: "I am traveling to Japan for a business conference." },
                { subject: "You", verb: "are traveling", example: "You are traveling too much for work these days." },
                { subject: "He/She", verb: "is traveling", example: "He is traveling across Europe by train this summer." },
                { subject: "We", verb: "are traveling", example: "We are traveling light for our weekend getaway." },
                { subject: "They", verb: "are traveling", example: "They are traveling to different countries for their research." }
            ]
        },
        {
            name: "Forget",
            conjugations: [
                { subject: "I", verb: "am forgetting", example: "I am forgetting things more often lately." },
                { subject: "You", verb: "are forgetting", example: "You are forgetting your keys almost every day." },
                { subject: "He/She", verb: "is forgetting", example: "She is forgetting to water the plants while I'm away." },
                { subject: "We", verb: "are forgetting", example: "We are forgetting the real purpose of this meeting." },
                { subject: "They", verb: "are forgetting", example: "They are forgetting important details in their reports." }
            ]
        },
        {
            name: "Smile",
            conjugations: [
                { subject: "I", verb: "am smiling", example: "I am smiling at the thought of our upcoming vacation." },
                { subject: "You", verb: "are smiling", example: "You are smiling more often since you started the new job." },
                { subject: "He/She", verb: "is smiling", example: "He is smiling in all the wedding photos." },
                { subject: "We", verb: "are smiling", example: "We are smiling because we won the championship." },
                { subject: "They", verb: "are smiling", example: "They are smiling despite the challenging circumstances." }
            ]
        },
        {
            name: "Finish",
            conjugations: [
                { subject: "I", verb: "am finishing", example: "I am finishing my homework before dinner." },
                { subject: "You", verb: "are finishing", example: "You are finishing the race in record time." },
                { subject: "He/She", verb: "is finishing", example: "She is finishing her degree this semester." },
                { subject: "We", verb: "are finishing", example: "We are finishing the project ahead of schedule." },
                { subject: "They", verb: "are finishing", example: "They are finishing the renovations on their house." }
      ]
        },
        {
            name: "Decide",
            conjugations: [
                { subject: "I", verb: "am deciding", example: "I am deciding between two career paths." },
                { subject: "You", verb: "are deciding", example: "You are deciding too hastily without all the facts." },
                { subject: "He/She", verb: "is deciding", example: "He is deciding which university to attend." },
                { subject: "We", verb: "are deciding", example: "We are deciding on the venue for our wedding." },
                { subject: "They", verb: "are deciding", example: "They are deciding how to allocate the budget." }
            ]
        },
        {
            name: "Explain",
            conjugations: [
                { subject: "I", verb: "am explaining", example: "I am explaining the concept to the new students." },
                { subject: "You", verb: "are explaining", example: "You are explaining the procedure very clearly." },
                { subject: "He/She", verb: "is explaining", example: "She is explaining her research findings at the conference." },
                { subject: "We", verb: "are explaining", example: "We are explaining our policy changes to the clients." },
                { subject: "They", verb: "are explaining", example: "They are explaining the reasons for the delay." }
            ]
        },
        {
            name: "Develop",
            conjugations: [
                { subject: "I", verb: "am developing", example: "I am developing a new app for language learning." },
                { subject: "You", verb: "are developing", example: "You are developing your skills impressively." },
                { subject: "He/She", verb: "is developing", example: "He is developing a strategy for market expansion." },
                { subject: "We", verb: "are developing", example: "We are developing sustainable practices in our company." },
                { subject: "They", verb: "are developing", example: "They are developing a new vaccine in the laboratory." }
            ]
        },
        {
            name: "Accept",
            conjugations: [
                { subject: "I", verb: "am accepting", example: "I am accepting applications for the position." },
                { subject: "You", verb: "are accepting", example: "You are accepting the changes more easily than expected." },
                { subject: "He/She", verb: "is accepting", example: "She is accepting the award on behalf of the team." },
                { subject: "We", verb: "are accepting", example: "We are accepting donations for the disaster relief fund." },
                { subject: "They", verb: "are accepting", example: "They are accepting new members into the organization." }
            ]
        },
        {
            name: "Drop",
            conjugations: [
                { subject: "I", verb: "am dropping", example: "I am dropping off the package at the post office." },
                { subject: "You", verb: "are dropping", example: "You are dropping hints about your birthday wishes." },
                { subject: "He/She", verb: "is dropping", example: "He is dropping by for a quick visit this afternoon." },
                { subject: "We", verb: "are dropping", example: "We are dropping prices for the holiday sale." },
                { subject: "They", verb: "are dropping", example: "They are dropping unnecessary features from the product." }
            ]
        },
        {
            name: "Present",
            conjugations: [
                { subject: "I", verb: "am presenting", example: "I am presenting my research at the symposium." },
                { subject: "You", verb: "are presenting", example: "You are presenting yourself professionally in meetings." },
                { subject: "He/She", verb: "is presenting", example: "She is presenting the annual report to the board." },
                { subject: "We", verb: "are presenting", example: "We are presenting a united front to the competitors." },
                { subject: "They", verb: "are presenting", example: "They are presenting their new product line at the trade show." }
            ]
        },
        {
            name: "Plan",
            conjugations: [
                { subject: "I", verb: "am planning", example: "I am planning a surprise party for my friend." },
                { subject: "You", verb: "are planning", example: "You are planning too many activities for one weekend." },
                { subject: "He/She", verb: "is planning", example: "He is planning to retire next year." },
                { subject: "We", verb: "are planning", example: "We are planning our strategy for the upcoming negotiations." },
                { subject: "They", verb: "are planning", example: "They are planning a trip around the world." }
            ]
        },
        {
            name: "Argue",
            conjugations: [
                { subject: "I", verb: "am arguing", example: "I am arguing for better environmental protections." },
                { subject: "You", verb: "are arguing", example: "You are arguing about trivial matters again." },
                { subject: "He/She", verb: "is arguing", example: "She is arguing her case before the committee." },
                { subject: "We", verb: "are arguing", example: "We are arguing that the data supports our theory." },
                { subject: "They", verb: "are arguing", example: "They are arguing over who should take responsibility." }
            ]
        },
        {
            name: "Support",
            conjugations: [
                { subject: "I", verb: "am supporting", example: "I am supporting my family while studying full-time." },
                { subject: "You", verb: "are supporting", example: "You are supporting a worthy cause with your donations." },
                { subject: "He/She", verb: "is supporting", example: "He is supporting his teammate through a difficult time." },
                { subject: "We", verb: "are supporting", example: "We are supporting local businesses in our community." },
                { subject: "They", verb: "are supporting", example: "They are supporting the candidate's campaign." }
            ]
        },
        {
            name: "Jump",
            conjugations: [
                { subject: "I", verb: "am jumping", example: "I am jumping rope for my cardio workout." },
                { subject: "You", verb: "are jumping", example: "You are jumping to conclusions without evidence." },
                { subject: "He/She", verb: "is jumping", example: "She is jumping with joy at the good news." },
                { subject: "We", verb: "are jumping", example: "We are jumping into the lake to cool off." },
                { subject: "They", verb: "are jumping", example: "They are jumping over hurdles in the track competition." }
            ]
        },
        {
            name: "Share",
            conjugations: [
                { subject: "I", verb: "am sharing", example: "I am sharing my notes with classmates who missed the lecture." },
                { subject: "You", verb: "are sharing", example: "You are sharing too much personal information online." },
                { subject: "He/She", verb: "is sharing", example: "He is sharing his expertise with the junior staff." },
                { subject: "We", verb: "are sharing", example: "We are sharing the cost of the rental car." },
                { subject: "They", verb: "are sharing", example: "They are sharing an apartment to save money." }
            ]
        },
        {
            name: "Pass",
            conjugations: [
                { subject: "I", verb: "am passing", example: "I am passing through Denver on my way to Salt Lake City." },
                { subject: "You", verb: "are passing", example: "You are passing all your exams with flying colors." },
                { subject: "He/She", verb: "is passing", example: "She is passing the ball to her teammate." },
                { subject: "We", verb: "are passing", example: "We are passing out flyers for the community event." },
                { subject: "They", verb: "are passing", example: "They are passing legislation to protect the environment." }
            ]
        },
        {
            name: "Save",
            conjugations: [
                { subject: "I", verb: "am saving", example: "I am saving money for a down payment on a house." },
                { subject: "You", verb: "are saving", example: "You are saving a lot of time with this new approach." },
                { subject: "He/She", verb: "is saving", example: "He is saving endangered species through conservation work." },
                { subject: "We", verb: "are saving", example: "We are saving energy by using LED lights." },
                { subject: "They", verb: "are saving", example: "They are saving seats for us at the theater." }
            ]
        },
        {
            name: "Control",
            conjugations: [
                { subject: "I", verb: "am controlling", example: "I am controlling my spending habits better now." },
                { subject: "You", verb: "are controlling", example: "You are controlling the situation effectively." },
                { subject: "He/She", verb: "is controlling", example: "She is controlling the remote drone from her laptop." },
                { subject: "We", verb: "are controlling", example: "We are controlling access to sensitive information." },
                { subject: "They", verb: "are controlling", example: "They are controlling the temperature in the greenhouse." }
            ]
        },
        {
            name: "Wonder",
            conjugations: [
                { subject: "I", verb: "am wondering", example: "I am wondering about the meaning of this poem." },
                { subject: "You", verb: "are wondering", example: "You are wondering why no one called you back." },
                { subject: "He/She", verb: "is wondering", example: "He is wondering whether to accept the job offer." },
                { subject: "We", verb: "are wondering", example: "We are wondering about your plans for the weekend." },
                { subject: "They", verb: "are wondering", example: "They are wondering how to solve this challenging problem." }
            ]
        },
        {
            name: "Include",
            conjugations: [
                { subject: "I", verb: "am including", example: "I am including everyone in the discussion." },
                { subject: "You", verb: "are including", example: "You are including too many details in your report." },
                { subject: "He/She", verb: "is including", example: "She is including references to recent research." },
                { subject: "We", verb: "are including", example: "We are including a bonus with every purchase." },
                { subject: "They", verb: "are including", example: "They are including new features in the software update." }
            ]
        },
        {
            name: "Agree",
            conjugations: [
                { subject: "I", verb: "am agreeing", example: "I am agreeing to the terms and conditions." },
                { subject: "You", verb: "are agreeing", example: "You are agreeing with everything they say without question." },
                { subject: "He/She", verb: "is agreeing", example: "He is agreeing to meet us later tonight." },
                { subject: "We", verb: "are agreeing", example: "We are agreeing on the basic principles." },
                { subject: "They", verb: "are agreeing", example: "They are agreeing to collaborate on the project." }
            ]
        },
        {
            name: "Return",
            conjugations: [
                { subject: "I", verb: "am returning", example: "I am returning to my hometown after many years." },
                { subject: "You", verb: "are returning", example: "You are returning the book to the library today." },
                { subject: "He/She", verb: "is returning", example: "She is returning from her business trip on Friday." },
                { subject: "We", verb: "are returning", example: "We are returning to the issue we discussed earlier." },
                { subject: "They", verb: "are returning", example: "They are returning items that didn't sell well." }
            ]
        },
        {
            name: "Describe",
            conjugations: [
                { subject: "I", verb: "am describing", example: "I am describing the suspect to the police officer." },
                { subject: "You", verb: "are describing", example: "You are describing your experience vividly." },
                { subject: "He/She", verb: "is describing", example: "He is describing the symptoms to the doctor." },
                { subject: "We", verb: "are describing", example: "We are describing our vision for the new project." },
                { subject: "They", verb: "are describing", example: "They are describing the process in their research paper." }
            ]
        },
        {
          name: "Hope",
          conjugations: [
              { subject: "I", verb: "am hoping", example: "I am hoping to hear back about the job application soon." },
              { subject: "You", verb: "are hoping", example: "You are hoping for better weather this weekend." },
              { subject: "He/She", verb: "is hoping", example: "She is hoping to finish her degree by next year." },
              { subject: "We", verb: "are hoping", example: "We are hoping for a positive outcome from the negotiations." },
              { subject: "They", verb: "are hoping", example: "They are hoping to move into their new house next month." }
          ]
        },
        {
            name: "Allow",
            conjugations: [
                { subject: "I", verb: "am allowing", example: "I am allowing myself more time for creative projects." },
                { subject: "You", verb: "are allowing", example: "You are allowing the children to stay up too late." },
                { subject: "He/She", verb: "is allowing", example: "He is allowing visitors to tour the historic building." },
                { subject: "We", verb: "are allowing", example: "We are allowing flexible work hours for our employees." },
                { subject: "They", verb: "are allowing", example: "They are allowing pets in the apartment complex now." }
            ]
        },
        {
            name: "Visit",
            conjugations: [
                { subject: "I", verb: "am visiting", example: "I am visiting my grandparents this weekend." },
                { subject: "You", verb: "are visiting", example: "You are visiting five countries during your European tour." },
                { subject: "He/She", verb: "is visiting", example: "She is visiting colleges before deciding where to apply." },
                { subject: "We", verb: "are visiting", example: "We are visiting the museum exhibition tomorrow." },
                { subject: "They", verb: "are visiting", example: "They are visiting potential wedding venues today." }
            ]
        },
        {
            name: "Complete",
            conjugations: [
                { subject: "I", verb: "am completing", example: "I am completing the final chapter of my thesis." },
                { subject: "You", verb: "are completing", example: "You are completing all your assignments ahead of schedule." },
                { subject: "He/She", verb: "is completing", example: "He is completing a marathon for the first time." },
                { subject: "We", verb: "are completing", example: "We are completing the renovation of our kitchen." },
                { subject: "They", verb: "are completing", example: "They are completing the audit of company finances." }
            ]
        },
        {
            name: "Love",
            conjugations: [
                { subject: "I", verb: "am loving", example: "I am loving this new exercise routine." },
                { subject: "You", verb: "are loving", example: "You are loving your new job, aren't you?" },
                { subject: "He/She", verb: "is loving", example: "She is loving the attention her artwork is receiving." },
                { subject: "We", verb: "are loving", example: "We are loving the beautiful weather on our vacation." },
                { subject: "They", verb: "are loving", example: "They are loving their experience living abroad." }
            ]
        },
        {
            name: "Join",
            conjugations: [
                { subject: "I", verb: "am joining", example: "I am joining a book club to meet new people." },
                { subject: "You", verb: "are joining", example: "You are joining the team at an exciting time." },
                { subject: "He/She", verb: "is joining", example: "He is joining us for dinner this evening." },
                { subject: "We", verb: "are joining", example: "We are joining forces with another company on this project." },
                { subject: "They", verb: "are joining", example: "They are joining the protest against climate change." }
            ]
        },
        {
            name: "Carry",
            conjugations: [
                { subject: "I", verb: "am carrying", example: "I am carrying too many bags and need help." },
                { subject: "You", verb: "are carrying", example: "You are carrying the team with your excellent work." },
                { subject: "He/She", verb: "is carrying", example: "She is carrying a heavy responsibility as team leader." },
                { subject: "We", verb: "are carrying", example: "We are carrying on the family tradition." },
                { subject: "They", verb: "are carrying", example: "They are carrying supplies to the disaster area." }
            ]
        },
        {
            name: "Realize",
            conjugations: [
                { subject: "I", verb: "am realizing", example: "I am realizing how much work this project requires." },
                { subject: "You", verb: "are realizing", example: "You are realizing the importance of regular exercise." },
                { subject: "He/She", verb: "is realizing", example: "He is realizing his potential as an artist." },
                { subject: "We", verb: "are realizing", example: "We are realizing the impact of our decisions." },
                { subject: "They", verb: "are realizing", example: "They are realizing that change is necessary." }
            ]
        },
        {
            name: "Dance",
            conjugations: [
                { subject: "I", verb: "am dancing", example: "I am dancing in a show next weekend." },
                { subject: "You", verb: "are dancing", example: "You are dancing beautifully in your new shoes." },
                { subject: "He/She", verb: "is dancing", example: "She is dancing professionally with the ballet company." },
                { subject: "We", verb: "are dancing", example: "We are dancing at my cousin's wedding reception." },
                { subject: "They", verb: "are dancing", example: "They are dancing to celebrate their anniversary." }
            ]
        },
        {
            name: "Wish",
            conjugations: [
                { subject: "I", verb: "am wishing", example: "I am wishing for better luck in the coming year." },
                { subject: "You", verb: "are wishing", example: "You are wishing upon stars instead of taking action." },
                { subject: "He/She", verb: "is wishing", example: "He is wishing he had studied harder for the exam." },
                { subject: "We", verb: "are wishing", example: "We are wishing you all the best on your birthday." },
                { subject: "They", verb: "are wishing", example: "They are wishing for snow this Christmas." }
            ]
        },
        {
            name: "Admit",
            conjugations: [
                { subject: "I", verb: "am admitting", example: "I am admitting my mistakes and learning from them." },
                { subject: "You", verb: "are admitting", example: "You are admitting patients to the hospital today." },
                { subject: "He/She", verb: "is admitting", example: "She is admitting her role in the miscommunication." },
                { subject: "We", verb: "are admitting", example: "We are admitting more students this year than ever before." },
                { subject: "They", verb: "are admitting", example: "They are admitting the challenges they face in the market." }
            ]
        },
        {
            name: "Fix",
            conjugations: [
                { subject: "I", verb: "am fixing", example: "I am fixing the broken shelf in the kitchen." },
                { subject: "You", verb: "are fixing", example: "You are fixing your attention on irrelevant details." },
                { subject: "He/She", verb: "is fixing", example: "He is fixing his car this weekend." },
                { subject: "We", verb: "are fixing", example: "We are fixing the plumbing issues in the old building." },
                { subject: "They", verb: "are fixing", example: "They are fixing dates for the upcoming conference." }
            ]
        },
        {
            name: "Succeed",
            conjugations: [
                { subject: "I", verb: "am succeeding", example: "I am succeeding in my efforts to learn a new language." },
                { subject: "You", verb: "are succeeding", example: "You are succeeding against all odds." },
                { subject: "He/She", verb: "is succeeding", example: "She is succeeding in her role as project manager." },
                { subject: "We", verb: "are succeeding", example: "We are succeeding in building a strong community." },
                { subject: "They", verb: "are succeeding", example: "They are succeeding with their innovative approach." }
            ]
        },
        {
            name: "Enjoy",
            conjugations: [
                { subject: "I", verb: "am enjoying", example: "I am enjoying this peaceful morning." },
                { subject: "You", verb: "are enjoying", example: "You are enjoying the benefits of your hard work." },
                { subject: "He/She", verb: "is enjoying", example: "He is enjoying his retirement traveling the world." },
                { subject: "We", verb: "are enjoying", example: "We are enjoying the concert tremendously." },
                { subject: "They", verb: "are enjoying", example: "They are enjoying their time at the beach house." }
            ]
        },
        {
            name: "Clean",
            conjugations: [
                { subject: "I", verb: "am cleaning", example: "I am cleaning out my closet to donate clothes." },
                { subject: "You", verb: "are cleaning", example: "You are cleaning the house for the guests arriving tomorrow." },
                { subject: "He/She", verb: "is cleaning", example: "She is cleaning her painting brushes after the art class." },
                { subject: "We", verb: "are cleaning", example: "We are cleaning up the park as community volunteers." },
                { subject: "They", verb: "are cleaning", example: "They are cleaning the data before analysis." }
            ]
        },
        {
            name: "Achieve",
            conjugations: [
                { subject: "I", verb: "am achieving", example: "I am achieving my fitness goals step by step." },
                { subject: "You", verb: "are achieving", example: "You are achieving remarkable results with your new method." },
                { subject: "He/She", verb: "is achieving", example: "He is achieving recognition for his research." },
                { subject: "We", verb: "are achieving", example: "We are achieving our targets ahead of schedule." },
                { subject: "They", verb: "are achieving", example: "They are achieving success in their new business venture." }
            ]
        },
        {
            name: "Cover",
            conjugations: [
                { subject: "I", verb: "am covering", example: "I am covering the night shift for my colleague." },
                { subject: "You", verb: "are covering", example: "You are covering too many topics in one session." },
                { subject: "He/She", verb: "is covering", example: "She is covering the sports event for the local newspaper." },
                { subject: "We", verb: "are covering", example: "We are covering all expenses for the business trip." },
                { subject: "They", verb: "are covering", example: "They are covering the walls with colorful murals." }
            ]
        },
        {
            name: "Avoid",
            conjugations: [
                { subject: "I", verb: "am avoiding", example: "I am avoiding sugar in my diet this month." },
                { subject: "You", verb: "are avoiding", example: "You are avoiding the main issue in this discussion." },
                { subject: "He/She", verb: "is avoiding", example: "He is avoiding making a decision until he has more information." },
                { subject: "We", verb: "are avoiding", example: "We are avoiding unnecessary expenses during the recession." },
                { subject: "They", verb: "are avoiding", example: "They are avoiding the busy tourist areas during their trip." }
            ]
        },
        {
            name: "Raise",
            conjugations: [
                { subject: "I", verb: "am raising", example: "I am raising funds for the local animal shelter." },
                { subject: "You", verb: "are raising", example: "You are raising an important point in the meeting." },
                { subject: "He/She", verb: "is raising", example: "She is raising awareness about environmental issues." },
                { subject: "We", verb: "are raising", example: "We are raising our children to be responsible citizens." },
                { subject: "They", verb: "are raising", example: "They are raising the bar with their exceptional performance." }
            ]
        },
        {
            name: "Experience",
            conjugations: [
                { subject: "I", verb: "am experiencing", example: "I am experiencing some technical difficulties with my computer." },
                { subject: "You", verb: "are experiencing", example: "You are experiencing the benefits of regular meditation." },
                { subject: "He/She", verb: "is experiencing", example: "He is experiencing culture shock in his new country." },
                { subject: "We", verb: "are experiencing", example: "We are experiencing unprecedented growth in our business." },
                { subject: "They", verb: "are experiencing", example: "They are experiencing delays due to the weather conditions." }
            ]
        },
        {
          name: "Identify",
          conjugations: [
              { subject: "I", verb: "am identifying", example: "I am identifying the key issues in this case." },
              { subject: "You", verb: "are identifying", example: "You are identifying potential problems before they occur." },
              { subject: "He/She", verb: "is identifying", example: "She is identifying different bird species in the park." },
              { subject: "We", verb: "are identifying", example: "We are identifying candidates for the new position." },
              { subject: "They", verb: "are identifying", example: "They are identifying areas for improvement in the process." }
          ]
        },
        {
            name: "Prepare",
            conjugations: [
                { subject: "I", verb: "am preparing", example: "I am preparing dinner for the whole family." },
                { subject: "You", verb: "are preparing", example: "You are preparing well for your presentation." },
                { subject: "He/She", verb: "is preparing", example: "He is preparing for the upcoming marathon." },
                { subject: "We", verb: "are preparing", example: "We are preparing our response to the proposal." },
                { subject: "They", verb: "are preparing", example: "They are preparing the venue for the conference." }
            ]
        },
        {
            name: "Laugh",
            conjugations: [
                { subject: "I", verb: "am laughing", example: "I am laughing at the comedy show." },
                { subject: "You", verb: "are laughing", example: "You are laughing too loudly in the library." },
                { subject: "He/She", verb: "is laughing", example: "She is laughing at all his jokes." },
                { subject: "We", verb: "are laughing", example: "We are laughing at the funny memories from our trip." },
                { subject: "They", verb: "are laughing", example: "They are laughing throughout the entire movie." }
            ]
        },
        {
            name: "Manage",
            conjugations: [
                { subject: "I", verb: "am managing", example: "I am managing a team of fifteen people." },
                { subject: "You", verb: "are managing", example: "You are managing the project effectively." },
                { subject: "He/She", verb: "is managing", example: "He is managing the family business now." },
                { subject: "We", verb: "are managing", example: "We are managing our resources carefully." },
                { subject: "They", verb: "are managing", example: "They are managing to balance work and study." }
            ]
        },
        {
            name: "Enter",
            conjugations: [
                { subject: "I", verb: "am entering", example: "I am entering the data into the system." },
                { subject: "You", verb: "are entering", example: "You are entering a new phase in your career." },
                { subject: "He/She", verb: "is entering", example: "She is entering the building through the side door." },
                { subject: "We", verb: "are entering", example: "We are entering the competition this year." },
                { subject: "They", verb: "are entering", example: "They are entering the market with an innovative product." }
            ]
        },
        {
            name: "Care",
            conjugations: [
                { subject: "I", verb: "am caring", example: "I am caring for my elderly grandmother." },
                { subject: "You", verb: "are caring", example: "You are caring too much about what others think." },
                { subject: "He/She", verb: "is caring", example: "He is caring for the plants while I'm away." },
                { subject: "We", verb: "are caring", example: "We are caring for the environment by recycling." },
                { subject: "They", verb: "are caring", example: "They are caring for abandoned animals at the shelter." }
            ]
        },
        {
            name: "Solve",
            conjugations: [
                { subject: "I", verb: "am solving", example: "I am solving complex math problems for my homework." },
                { subject: "You", verb: "are solving", example: "You are solving the puzzle faster than anyone else." },
                { subject: "He/She", verb: "is solving", example: "She is solving the conflict between team members." },
                { subject: "We", verb: "are solving", example: "We are solving technical issues in the software." },
                { subject: "They", verb: "are solving", example: "They are solving crimes as part of their police work." }
            ]
        },
        {
            name: "Produce",
            conjugations: [
                { subject: "I", verb: "am producing", example: "I am producing a documentary about wildlife." },
                { subject: "You", verb: "are producing", example: "You are producing excellent results with your method." },
                { subject: "He/She", verb: "is producing", example: "He is producing organic vegetables on his farm." },
                { subject: "We", verb: "are producing", example: "We are producing twice as many units this year." },
                { subject: "They", verb: "are producing", example: "They are producing a new line of eco-friendly products." }
            ]
        },
        {
            name: "Close",
            conjugations: [
                { subject: "I", verb: "am closing", example: "I am closing my account at that bank." },
                { subject: "You", verb: "are closing", example: "You are closing the door on future opportunities." },
                { subject: "He/She", verb: "is closing", example: "She is closing the store at midnight." },
                { subject: "We", verb: "are closing", example: "We are closing our office for the holidays." },
                { subject: "They", verb: "are closing", example: "They are closing the deal with the international client." }
            ]
        },
        {
            name: "Notice",
            conjugations: [
                { subject: "I", verb: "am noticing", example: "I am noticing improvements in my health since exercising." },
                { subject: "You", verb: "are noticing", example: "You are noticing details that others miss." },
                { subject: "He/She", verb: "is noticing", example: "He is noticing changes in the company culture." },
                { subject: "We", verb: "are noticing", example: "We are noticing a trend in customer preferences." },
                { subject: "They", verb: "are noticing", example: "They are noticing the positive effects of the new policy." }
            ]
        },
        {
            name: "Imagine",
            conjugations: [
                { subject: "I", verb: "am imagining", example: "I am imagining my life in five years." },
                { subject: "You", verb: "are imagining", example: "You are imagining things that aren't really there." },
                { subject: "He/She", verb: "is imagining", example: "She is imagining her perfect wedding day." },
                { subject: "We", verb: "are imagining", example: "We are imagining new possibilities for our business." },
                { subject: "They", verb: "are imagining", example: "They are imagining a world without poverty." }
            ]
        },
        {
            name: "Replace",
            conjugations: [
                { subject: "I", verb: "am replacing", example: "I am replacing my old computer with a new model." },
                { subject: "You", verb: "are replacing", example: "You are replacing the broken window tomorrow." },
                { subject: "He/She", verb: "is replacing", example: "He is replacing the CEO who retired last month." },
                { subject: "We", verb: "are replacing", example: "We are replacing our paper-based system with digital tools." },
                { subject: "They", verb: "are replacing", example: "They are replacing all the furniture in the office." }
            ]
        },
        {
            name: "Improve",
            conjugations: [
                { subject: "I", verb: "am improving", example: "I am improving my language skills with daily practice." },
                { subject: "You", verb: "are improving", example: "You are improving rapidly since you started training." },
                { subject: "He/She", verb: "is improving", example: "She is improving the company's customer service." },
                { subject: "We", verb: "are improving", example: "We are improving our processes to increase efficiency." },
                { subject: "They", verb: "are improving", example: "They are improving the facilities at the community center." }
            ]
        },
        {
            name: "Apply",
            conjugations: [
                { subject: "I", verb: "am applying", example: "I am applying for graduate programs this semester." },
                { subject: "You", verb: "are applying", example: "You are applying too much pressure to the wound." },
                { subject: "He/She", verb: "is applying", example: "He is applying for a loan to buy a house." },
                { subject: "We", verb: "are applying", example: "We are applying new techniques in our research." },
                { subject: "They", verb: "are applying", example: "They are applying for citizenship in Canada." }
            ]
        },
        {
            name: "Report",
            conjugations: [
                { subject: "I", verb: "am reporting", example: "I am reporting live from the scene of the accident." },
                { subject: "You", verb: "are reporting", example: "You are reporting directly to the new manager." },
                { subject: "He/She", verb: "is reporting", example: "She is reporting suspicious activity to the police." },
                { subject: "We", verb: "are reporting", example: "We are reporting a significant increase in sales this quarter." },
                { subject: "They", verb: "are reporting", example: "They are reporting on environmental issues in the region." }
            ]
        },
        {
            name: "Listen",
            conjugations: [
                { subject: "I", verb: "am listening", example: "I am listening to a podcast about history." },
                { subject: "You", verb: "are listening", example: "You are listening carefully to the instructions." },
                { subject: "He/She", verb: "is listening", example: "He is listening to classical music while working." },
                { subject: "We", verb: "are listening", example: "We are listening to customer feedback to improve our service." },
                { subject: "They", verb: "are listening", example: "They are listening to the radio in the car." }
            ]
        },
        {
            name: "Discover",
            conjugations: [
                { subject: "I", verb: "am discovering", example: "I am discovering new ways to save energy at home." },
                { subject: "You", verb: "are discovering", example: "You are discovering hidden talents you never knew you had." },
                { subject: "He/She", verb: "is discovering", example: "She is discovering ancient artifacts on the archaeological dig." },
                { subject: "We", verb: "are discovering", example: "We are discovering the benefits of meditation." },
                { subject: "They", verb: "are discovering", example: "They are discovering new species in the rainforest." }
            ]
        },
        {
            name: "Protect",
            conjugations: [
                { subject: "I", verb: "am protecting", example: "I am protecting my skin from the sun with sunscreen." },
                { subject: "You", verb: "are protecting", example: "You are protecting your privacy by using secure passwords." },
                { subject: "He/She", verb: "is protecting", example: "He is protecting endangered wildlife in the sanctuary." },
                { subject: "We", verb: "are protecting", example: "We are protecting our investment with insurance." },
                { subject: "They", verb: "are protecting", example: "They are protecting the building during the storm." }
            ]
        },
        {
            name: "Occur",
            conjugations: [
                { subject: "I", verb: "am occurring", example: "I am occurring in your thoughts more often than you realize." },
                { subject: "You", verb: "are occurring", example: "You are occurring to me as the perfect candidate for this role." },
                { subject: "He/She", verb: "is occurring", example: "It is occurring at the same time as the other event." },
                { subject: "We", verb: "are occurring", example: "We are occurring in sequence rather than simultaneously." },
                { subject: "They", verb: "are occurring", example: "They are occurring more frequently than expected." }
            ]
        },
        {
            name: "Fight",
            conjugations: [
                { subject: "I", verb: "am fighting", example: "I am fighting to overcome my fear of public speaking." },
                { subject: "You", verb: "are fighting", example: "You are fighting against injustice in your community." },
                { subject: "He/She", verb: "is fighting", example: "She is fighting for equal opportunities in education." },
                { subject: "We", verb: "are fighting", example: "We are fighting to save the historic building from demolition." },
                { subject: "They", verb: "are fighting", example: "They are fighting against climate change through activism." }
            ]
        },           
        {
          name: "Remove",
          conjugations: [
              { subject: "I", verb: "am removing", example: "I am removing the old wallpaper before painting." },
              { subject: "You", verb: "are removing", example: "You are removing your belongings from the locker." },
              { subject: "He/She", verb: "is removing", example: "She is removing obstacles from her path to success." },
              { subject: "We", verb: "are removing", example: "We are removing unnecessary steps from the process." },
              { subject: "They", verb: "are removing", example: "They are removing the fallen trees after the storm." }
          ]
        },
        {
            name: "Discuss",
            conjugations: [
                { subject: "I", verb: "am discussing", example: "I am discussing career options with my advisor." },
                { subject: "You", verb: "are discussing", example: "You are discussing sensitive matters in public." },
                { subject: "He/She", verb: "is discussing", example: "He is discussing the contract terms with the client." },
                { subject: "We", verb: "are discussing", example: "We are discussing our vacation plans for next summer." },
                { subject: "They", verb: "are discussing", example: "They are discussing ways to improve team communication." }
            ]
        },
        {
            name: "Face",
            conjugations: [
                { subject: "I", verb: "am facing", example: "I am facing challenges in my new role." },
                { subject: "You", verb: "are facing", example: "You are facing north if the sun is setting on your left." },
                { subject: "He/She", verb: "is facing", example: "She is facing tough competition in the tournament." },
                { subject: "We", verb: "are facing", example: "We are facing budget constraints this quarter." },
                { subject: "They", verb: "are facing", example: "They are facing each other across the negotiation table." }
            ]
        },
        {
            name: "Cut",
            conjugations: [
                { subject: "I", verb: "am cutting", example: "I am cutting expenses to save for a house." },
                { subject: "You", verb: "are cutting", example: "You are cutting through the park to save time." },
                { subject: "He/She", verb: "is cutting", example: "He is cutting his hair shorter for summer." },
                { subject: "We", verb: "are cutting", example: "We are cutting the cake for the celebration." },
                { subject: "They", verb: "are cutting", example: "They are cutting a path through the dense forest." }
            ]
        },
        {
            name: "Miss",
            conjugations: [
                { subject: "I", verb: "am missing", example: "I am missing my family while studying abroad." },
                { subject: "You", verb: "are missing", example: "You are missing the point of this discussion." },
                { subject: "He/She", verb: "is missing", example: "She is missing too many classes this semester." },
                { subject: "We", verb: "are missing", example: "We are missing our connecting flight due to the delay." },
                { subject: "They", verb: "are missing", example: "They are missing crucial information for the report." }
            ]
        },
        {
            name: "Reduce",
            conjugations: [
                { subject: "I", verb: "am reducing", example: "I am reducing my sugar intake for health reasons." },
                { subject: "You", verb: "are reducing", example: "You are reducing waste by using reusable containers." },
                { subject: "He/She", verb: "is reducing", example: "He is reducing his working hours to spend more time with family." },
                { subject: "We", verb: "are reducing", example: "We are reducing our carbon footprint by using public transportation." },
                { subject: "They", verb: "are reducing", example: "They are reducing prices for the clearance sale." }
            ]
        },
        {
            name: "Sing",
            conjugations: [
                { subject: "I", verb: "am singing", example: "I am singing in the church choir every Sunday." },
                { subject: "You", verb: "are singing", example: "You are singing beautifully at the karaoke party." },
                { subject: "He/She", verb: "is singing", example: "She is singing the national anthem at the game." },
                { subject: "We", verb: "are singing", example: "We are singing holiday songs around the neighborhood." },
                { subject: "They", verb: "are singing", example: "They are singing together in perfect harmony." }
            ]
        },
        {
            name: "Deliver",
            conjugations: [
                { subject: "I", verb: "am delivering", example: "I am delivering packages in this neighborhood." },
                { subject: "You", verb: "are delivering", example: "You are delivering your presentation with confidence." },
                { subject: "He/She", verb: "is delivering", example: "He is delivering a keynote speech at the conference." },
                { subject: "We", verb: "are delivering", example: "We are delivering results ahead of schedule." },
                { subject: "They", verb: "are delivering", example: "They are delivering fresh produce to local restaurants." }
            ]
        },
        {
            name: "Collect",
            conjugations: [
                { subject: "I", verb: "am collecting", example: "I am collecting donations for the charity drive." },
                { subject: "You", verb: "are collecting", example: "You are collecting too many things you don't need." },
                { subject: "He/She", verb: "is collecting", example: "She is collecting vintage postcards as a hobby." },
                { subject: "We", verb: "are collecting", example: "We are collecting data for our research project." },
                { subject: "They", verb: "are collecting", example: "They are collecting signatures for the petition." }
            ]
        },
        {
            name: "Throw",
            conjugations: [
                { subject: "I", verb: "am throwing", example: "I am throwing a surprise party for my friend." },
                { subject: "You", verb: "are throwing", example: "You are throwing the ball too hard for the children." },
                { subject: "He/She", verb: "is throwing", example: "He is throwing away old newspapers for recycling." },
                { subject: "We", verb: "are throwing", example: "We are throwing our support behind the new candidate." },
                { subject: "They", verb: "are throwing", example: "They are throwing caution to the wind with this investment." }
            ]
        },
        {
            name: "Treat",
            conjugations: [
                { subject: "I", verb: "am treating", example: "I am treating my friend to dinner for her birthday." },
                { subject: "You", verb: "are treating", example: "You are treating this serious matter too lightly." },
                { subject: "He/She", verb: "is treating", example: "She is treating patients at the emergency room." },
                { subject: "We", verb: "are treating", example: "We are treating the wood to prevent termite damage." },
                { subject: "They", verb: "are treating", example: "They are treating everyone with respect and dignity." }
            ]
        },
        {
            name: "Introduce",
            conjugations: [
                { subject: "I", verb: "am introducing", example: "I am introducing a new policy at work next week." },
                { subject: "You", verb: "are introducing", example: "You are introducing your fiancé to your parents tonight." },
                { subject: "He/She", verb: "is introducing", example: "He is introducing innovative teaching methods in his classroom." },
                { subject: "We", verb: "are introducing", example: "We are introducing our latest product at the trade show." },
                { subject: "They", verb: "are introducing", example: "They are introducing foreign species into the ecosystem." }
            ]
        },
        {
            name: "Answer",
            conjugations: [
                { subject: "I", verb: "am answering", example: "I am answering emails from clients all morning." },
                { subject: "You", verb: "are answering", example: "You are answering the questions thoughtfully." },
                { subject: "He/She", verb: "is answering", example: "She is answering phone calls at the reception desk." },
                { subject: "We", verb: "are answering", example: "We are answering concerns about the proposed changes." },
                { subject: "They", verb: "are answering", example: "They are answering to the board of directors for the mistake." }
            ]
        },
        {
            name: "Exist",
            conjugations: [
                { subject: "I", verb: "am existing", example: "I am existing on very little sleep this week." },
                { subject: "You", verb: "are existing", example: "You are existing in a world of your own imagination." },
                { subject: "He/She", verb: "is existing", example: "He is existing peacefully alongside his neighbors." },
                { subject: "We", verb: "are existing", example: "We are existing in a time of unprecedented technological change." },
                { subject: "They", verb: "are existing", example: "They are existing under difficult conditions in the refugee camp." }
            ]
        },
        {
            name: "Pull",
            conjugations: [
                { subject: "I", verb: "am pulling", example: "I am pulling my weight in this group project." },
                { subject: "You", verb: "are pulling", example: "You are pulling the cart instead of pushing it." },
                { subject: "He/She", verb: "is pulling", example: "She is pulling an all-nighter to finish the assignment." },
                { subject: "We", verb: "are pulling", example: "We are pulling together resources for the community event." },
                { subject: "They", verb: "are pulling", example: "They are pulling up weeds in the garden." }
            ]
        },
        {
            name: "Maintain",
            conjugations: [
                { subject: "I", verb: "am maintaining", example: "I am maintaining a healthy diet and exercise routine." },
                { subject: "You", verb: "are maintaining", example: "You are maintaining good relationships with your colleagues." },
                { subject: "He/She", verb: "is maintaining", example: "He is maintaining the company website and social media." },
                { subject: "We", verb: "are maintaining", example: "We are maintaining our position as industry leaders." },
                { subject: "They", verb: "are maintaining", example: "They are maintaining the historic building's original features." }
            ]
        },
        {
            name: "Type",
            conjugations: [
                { subject: "I", verb: "am typing", example: "I am typing up my research paper for submission." },
                { subject: "You", verb: "are typing", example: "You are typing too quickly and making errors." },
                { subject: "He/She", verb: "is typing", example: "She is typing meeting notes as we speak." },
                { subject: "We", verb: "are typing", example: "We are typing up the interview transcripts." },
                { subject: "They", verb: "are typing", example: "They are typing code for the new application." }
            ]
        },
        {
            name: "Suggest",
            conjugations: [
                { subject: "I", verb: "am suggesting", example: "I am suggesting alternatives to your proposal." },
                { subject: "You", verb: "are suggesting", example: "You are suggesting we take a different approach." },
                { subject: "He/She", verb: "is suggesting", example: "He is suggesting restaurants for the team dinner." },
                { subject: "We", verb: "are suggesting", example: "We are suggesting changes to the draft agreement." },
                { subject: "They", verb: "are suggesting", example: "They are suggesting that we postpone the meeting." }
            ]
        },
        {
            name: "Connect",
            conjugations: [
                { subject: "I", verb: "am connecting", example: "I am connecting the dots in this mysterious case." },
                { subject: "You", verb: "are connecting", example: "You are connecting with people from all walks of life." },
                { subject: "He/She", verb: "is connecting", example: "She is connecting the printer to the network." },
                { subject: "We", verb: "are connecting", example: "We are connecting our business with social causes." },
                { subject: "They", verb: "are connecting", example: "They are connecting flights in Chicago on their journey." }
            ]
        },
        {
            name: "Compare",
            conjugations: [
                { subject: "I", verb: "am comparing", example: "I am comparing prices before making a purchase." },
                { subject: "You", verb: "are comparing", example: "You are comparing your progress with others too much." },
                { subject: "He/She", verb: "is comparing", example: "He is comparing different investment options." },
                { subject: "We", verb: "are comparing", example: "We are comparing this year's results with last year's." },
                { subject: "They", verb: "are comparing", example: "They are comparing notes after the seminar." }
            ]
        },  
        {
          name: "Handle",
          conjugations: [
                { subject: "I", verb: "am handling", example: "I am handling several projects simultaneously." },
                { subject: "You", verb: "are handling", example: "You are handling the situation very professionally." },
                { subject: "He/She", verb: "is handling", example: "She is handling customer complaints at the service desk." },
                { subject: "We", verb: "are handling", example: "We are handling the logistics for the conference." },
                { subject: "They", verb: "are handling", example: "They are handling sensitive information with care." }
            ]
        },
        {
            name: "Fill",
            conjugations: [
                { subject: "I", verb: "am filling", example: "I am filling out an application for the position." },
                { subject: "You", verb: "are filling", example: "You are filling the tank with gas." },
                { subject: "He/She", verb: "is filling", example: "He is filling the prescriptions at the pharmacy." },
                { subject: "We", verb: "are filling", example: "We are filling our calendar with exciting events." },
                { subject: "They", verb: "are filling", example: "They are filling the auditorium for the concert." }
            ]
        },
        {
            name: "Ignore",
            conjugations: [
                { subject: "I", verb: "am ignoring", example: "I am ignoring the distractions to focus on my work." },
                { subject: "You", verb: "are ignoring", example: "You are ignoring important warning signs." },
                { subject: "He/She", verb: "is ignoring", example: "She is ignoring his text messages after their argument." },
                { subject: "We", verb: "are ignoring", example: "We are ignoring the rumors about the company merger." },
                { subject: "They", verb: "are ignoring", example: "They are ignoring the new dress code policy." }
            ]
        },
        {
            name: "Survive",
            conjugations: [
                { subject: "I", verb: "am surviving", example: "I am surviving on very little sleep this week." },
                { subject: "You", verb: "are surviving", example: "You are surviving the intense training program well." },
                { subject: "He/She", verb: "is surviving", example: "He is surviving cancer against all odds." },
                { subject: "We", verb: "are surviving", example: "We are surviving the economic downturn by cutting costs." },
                { subject: "They", verb: "are surviving", example: "They are surviving in extremely harsh conditions." }
            ]
        },
        {
            name: "Attempt",
            conjugations: [
                { subject: "I", verb: "am attempting", example: "I am attempting to solve this complex puzzle." },
                { subject: "You", verb: "are attempting", example: "You are attempting something beyond your current skills." },
                { subject: "He/She", verb: "is attempting", example: "She is attempting to break the world record." },
                { subject: "We", verb: "are attempting", example: "We are attempting to reach an agreement with the union." },
                { subject: "They", verb: "are attempting", example: "They are attempting to climb Mount Everest this season." }
            ]
        },
        {
            name: "Divide",
            conjugations: [
                { subject: "I", verb: "am dividing", example: "I am dividing my time between work and family." },
                { subject: "You", verb: "are dividing", example: "You are dividing the cake into equal portions." },
                { subject: "He/She", verb: "is dividing", example: "He is dividing the class into small groups for the project." },
                { subject: "We", verb: "are dividing", example: "We are dividing the profits among all team members." },
                { subject: "They", verb: "are dividing", example: "They are dividing responsibilities for the event." }
            ]
        },
        {
            name: "Claim",
            conjugations: [
                { subject: "I", verb: "am claiming", example: "I am claiming my baggage at the airport." },
                { subject: "You", verb: "are claiming", example: "You are claiming expenses for your business trip." },
                { subject: "He/She", verb: "is claiming", example: "She is claiming credit for the team's success." },
                { subject: "We", verb: "are claiming", example: "We are claiming our tax refunds this week." },
                { subject: "They", verb: "are claiming", example: "They are claiming territory in the disputed region." }
            ]
        },
        {
            name: "Practice",
            conjugations: [
                { subject: "I", verb: "am practicing", example: "I am practicing the piano for two hours every day." },
                { subject: "You", verb: "are practicing", example: "You are practicing your presentation for tomorrow." },
                { subject: "He/She", verb: "is practicing", example: "He is practicing medicine at the local hospital." },
                { subject: "We", verb: "are practicing", example: "We are practicing our lines for the school play." },
                { subject: "They", verb: "are practicing", example: "They are practicing new techniques in sustainable farming." }
            ]
        },
        {
            name: "Mention",
            conjugations: [
                { subject: "I", verb: "am mentioning", example: "I am mentioning your name as a reference." },
                { subject: "You", verb: "are mentioning", example: "You are mentioning the incident too often." },
                { subject: "He/She", verb: "is mentioning", example: "She is mentioning the changes in her next email." },
                { subject: "We", verb: "are mentioning", example: "We are mentioning this offer to select customers only." },
                { subject: "They", verb: "are mentioning", example: "They are mentioning our company in their report." }
            ]
        },
        {
            name: "Encourage",
            conjugations: [
                { subject: "I", verb: "am encouraging", example: "I am encouraging my daughter to pursue her dreams." },
                { subject: "You", verb: "are encouraging", example: "You are encouraging bad behavior by rewarding it." },
                { subject: "He/She", verb: "is encouraging", example: "He is encouraging his team before the big game." },
                { subject: "We", verb: "are encouraging", example: "We are encouraging participation from all departments." },
                { subject: "They", verb: "are encouraging", example: "They are encouraging sustainable practices in the community." }
            ]
        },
        {
            name: "Request",
            conjugations: [
                { subject: "I", verb: "am requesting", example: "I am requesting additional time to complete the project." },
                { subject: "You", verb: "are requesting", example: "You are requesting too many changes to the original plan." },
                { subject: "He/She", verb: "is requesting", example: "She is requesting a meeting with the director." },
                { subject: "We", verb: "are requesting", example: "We are requesting feedback on our new website design." },
                { subject: "They", verb: "are requesting", example: "They are requesting donations for the hurricane victims." }
            ]
        },
        {
            name: "Test",
            conjugations: [
                { subject: "I", verb: "am testing", example: "I am testing the new software for bugs." },
                { subject: "You", verb: "are testing", example: "You are testing my patience with these delays." },
                { subject: "He/She", verb: "is testing", example: "He is testing the water quality in the lake." },
                { subject: "We", verb: "are testing", example: "We are testing different strategies to increase sales." },
                { subject: "They", verb: "are testing", example: "They are testing candidates for the position today." }
            ]
        },
        {
            name: "Fly",
            conjugations: [
                { subject: "I", verb: "am flying", example: "I am flying to Paris next weekend." },
                { subject: "You", verb: "are flying", example: "You are flying the drone too close to the airport." },
                { subject: "He/She", verb: "is flying", example: "She is flying home for the holidays." },
                { subject: "We", verb: "are flying", example: "We are flying our national flag with pride." },
                { subject: "They", verb: "are flying", example: "They are flying business class on their trip to Tokyo." }
            ]
        },
        {
            name: "Push",
            conjugations: [
                { subject: "I", verb: "am pushing", example: "I am pushing myself to run an extra mile today." },
                { subject: "You", verb: "are pushing", example: "You are pushing too hard against the door." },
                { subject: "He/She", verb: "is pushing", example: "He is pushing for changes in company policy." },
                { subject: "We", verb: "are pushing", example: "We are pushing the deadline back by one week." },
                { subject: "They", verb: "are pushing", example: "They are pushing the cart up the steep hill." }
            ]
        },
        {
            name: "Disappear",
            conjugations: [
                { subject: "I", verb: "am disappearing", example: "I am disappearing from social media for a month." },
                { subject: "You", verb: "are disappearing", example: "You are disappearing too often during work hours." },
                { subject: "He/She", verb: "is disappearing", example: "She is disappearing into the crowd." },
                { subject: "We", verb: "are disappearing", example: "We are disappearing from the public eye during this controversy." },
                { subject: "They", verb: "are disappearing", example: "They are disappearing one by one from the meeting." }
            ]
        },
        {
            name: "Examine",
            conjugations: [
                { subject: "I", verb: "am examining", example: "I am examining the evidence carefully." },
                { subject: "You", verb: "are examining", example: "You are examining every detail of the contract." },
                { subject: "He/She", verb: "is examining", example: "He is examining patients at the clinic today." },
                { subject: "We", verb: "are examining", example: "We are examining options for expanding our business." },
                { subject: "They", verb: "are examining", example: "They are examining the ancient artifacts in the laboratory." }
            ]
        },
        {
            name: "Count",
            conjugations: [
                { subject: "I", verb: "am counting", example: "I am counting the days until my vacation." },
                { subject: "You", verb: "are counting", example: "You are counting your calories too obsessively." },
                { subject: "He/She", verb: "is counting", example: "She is counting inventory in the stockroom." },
                { subject: "We", verb: "are counting", example: "We are counting on your support for this initiative." },
                { subject: "They", verb: "are counting", example: "They are counting votes in the election." }
            ]
        },
        {
            name: "Reflect",
            conjugations: [
                { subject: "I", verb: "am reflecting", example: "I am reflecting on my achievements this year." },
                { subject: "You", verb: "are reflecting", example: "You are reflecting the values of your generation." },
                { subject: "He/She", verb: "is reflecting", example: "He is reflecting on his mistakes and learning from them." },
                { subject: "We", verb: "are reflecting", example: "We are reflecting our commitment to quality in our work." },
                { subject: "They", verb: "are reflecting", example: "They are reflecting sunlight with the mirror." }
            ]
        },
        {
            name: "Rely",
            conjugations: [
                { subject: "I", verb: "am relying", example: "I am relying on your expertise for this project." },
                { subject: "You", verb: "are relying", example: "You are relying too much on others for help." },
                { subject: "He/She", verb: "is relying", example: "She is relying on public transportation during car repairs." },
                { subject: "We", verb: "are relying", example: "We are relying on accurate data for our research." },
                { subject: "They", verb: "are relying", example: "They are relying on donations to fund the program." }
            ]
        },
        {
            name: "Influence",
            conjugations: [
                { subject: "I", verb: "am influencing", example: "I am influencing the direction of the project." },
                { subject: "You", verb: "are influencing", example: "You are influencing younger colleagues with your work ethic." },
                { subject: "He/She", verb: "is influencing", example: "He is influencing public opinion through his articles." },
                { subject: "We", verb: "are influencing", example: "We are influencing policy decisions through our advocacy." },
                { subject: "They", verb: "are influencing", example: "They are influencing market trends with their innovations." }
            ]
        },
        {
            name: "Hide",
            conjugations: [
                { subject: "I", verb: "am hiding", example: "I am hiding the birthday presents until the party." },
                { subject: "You", verb: "are hiding", example: "You are hiding your true feelings about the situation." },
                { subject: "He/She", verb: "is hiding", example: "She is hiding behind a mask of confidence." },
                { subject: "We", verb: "are hiding", example: "We are hiding our disappointment about the results." },
                { subject: "They", verb: "are hiding", example: "They are hiding the truth from the public." }
            ]
        },
        {
            name: "Address",
            conjugations: [
                { subject: "I", verb: "am addressing", example: "I am addressing the envelope for the invitation." },
                { subject: "You", verb: "are addressing", example: "You are addressing the concerns of the community." },
                { subject: "He/She", verb: "is addressing", example: "He is addressing the audience at the conference." },
                { subject: "We", verb: "are addressing", example: "We are addressing the issues raised in the feedback." },
                { subject: "They", verb: "are addressing", example: "They are addressing letters to supporters." }
            ]
        },
        {
            name: "Record",
            conjugations: [
                { subject: "I", verb: "am recording", example: "I am recording a podcast episode today." },
                { subject: "You", verb: "are recording", example: "You are recording the meeting for those who couldn't attend." },
                { subject: "He/She", verb: "is recording", example: "She is recording her first album in the studio." },
                { subject: "We", verb: "are recording", example: "We are recording all customer service calls for quality purposes." },
                { subject: "They", verb: "are recording", example: "They are recording wildlife behavior in the national park." }
            ]
        },
        {
            name: "Fail",
            conjugations: [
                { subject: "I", verb: "am failing", example: "I am failing to see the point of this exercise." },
                { subject: "You", verb: "are failing", example: "You are failing to meet the basic requirements." },
                { subject: "He/She", verb: "is failing", example: "He is failing several subjects this semester." },
                { subject: "We", verb: "are failing", example: "We are failing to reach our sales targets." },
                { subject: "They", verb: "are failing", example: "They are failing to address the root cause of the problem." }
            ]
        },
        {
            name: "Indicate",
            conjugations: [
                { subject: "I", verb: "am indicating", example: "I am indicating my preferences on the form." },
                { subject: "You", verb: "are indicating", example: "You are indicating left but turning right." },
                { subject: "He/She", verb: "is indicating", example: "She is indicating the location on the map." },
                { subject: "We", verb: "are indicating", example: "We are indicating our willingness to compromise." },
                { subject: "They", verb: "are indicating", example: "They are indicating their support for the proposal." }
            ]
        },
        {
            name: "Represent",
            conjugations: [
                { subject: "I", verb: "am representing", example: "I am representing my company at the international fair." },
                { subject: "You", verb: "are representing", example: "You are representing all students on the school board." },
                { subject: "He/She", verb: "is representing", example: "He is representing the client in court." },
                { subject: "We", verb: "are representing", example: "We are representing our country in the Olympics." },
                { subject: "They", verb: "are representing", example: "They are representing diverse perspectives in the discussion." }
            ]
        },
        {
            name: "Print",
            conjugations: [
                { subject: "I", verb: "am printing", example: "I am printing the documents for tomorrow's meeting." },
                { subject: "You", verb: "are printing", example: "You are printing too many copies unnecessarily." },
                { subject: "He/She", verb: "is printing", example: "She is printing wedding invitations on special paper." },
                { subject: "We", verb: "are printing", example: "We are printing our newsletter quarterly." },
                { subject: "They", verb: "are printing", example: "They are printing the newspaper at the new facility." }
            ]
        },
        {
            name: "Release",
            conjugations: [
                { subject: "I", verb: "am releasing", example: "I am releasing my first novel next month." },
                { subject: "You", verb: "are releasing", example: "You are releasing tension through meditation." },
                { subject: "He/She", verb: "is releasing", example: "He is releasing the fish back into the lake." },
                { subject: "We", verb: "are releasing", example: "We are releasing the new version of our app today." },
                { subject: "They", verb: "are releasing", example: "They are releasing the hostages after negotiations." }
            ]
        },
        {
            name: "Protect",
            conjugations: [
                { subject: "I", verb: "am protecting", example: "I am protecting my personal data online." },
                { subject: "You", verb: "are protecting", example: "You are protecting the environment by recycling." },
                { subject: "He/She", verb: "is protecting", example: "She is protecting her children from harmful content." },
                { subject: "We", verb: "are protecting", example: "We are protecting our intellectual property rights." },
                { subject: "They", verb: "are protecting", example: "They are protecting endangered species in the reserve." }
            ]
        },
        {
            name: "Suffer",
            conjugations: [
                { subject: "I", verb: "am suffering", example: "I am suffering from a migraine today." },
                { subject: "You", verb: "are suffering", example: "You are suffering the consequences of your actions." },
                { subject: "He/She", verb: "is suffering", example: "He is suffering from severe anxiety." },
                { subject: "We", verb: "are suffering", example: "We are suffering through a heat wave this summer." },
                { subject: "They", verb: "are suffering", example: "They are suffering financial losses due to the pandemic." }
            ]
        },
        {
            name: "Intend",
            conjugations: [
                { subject: "I", verb: "am intending", example: "I am intending to submit my application by Friday." },
                { subject: "You", verb: "are intending", example: "You are intending to visit your parents this weekend." },
                { subject: "He/She", verb: "is intending", example: "She is intending to study abroad next semester." },
                { subject: "We", verb: "are intending", example: "We are intending to renovate the kitchen next month." },
                { subject: "They", verb: "are intending", example: "They are intending to launch the product in new markets." }
            ]
        },
        {
            name: "Confirm",
            conjugations: [
                { subject: "I", verb: "am confirming", example: "I am confirming your reservation for tomorrow." },
                { subject: "You", verb: "are confirming", example: "You are confirming attendance for how many people?" },
                { subject: "He/She", verb: "is confirming", example: "He is confirming the details of the agreement." },
                { subject: "We", verb: "are confirming", example: "We are confirming all bookings for the holiday season." },
                { subject: "They", verb: "are confirming", example: "They are confirming their participation in the event." }
            ]
        },
        {
            name: "Kiss",
            conjugations: [
                { subject: "I", verb: "am kissing", example: "I am kissing my children goodnight." },
                { subject: "You", verb: "are kissing", example: "You are kissing goodbye to your old lifestyle." },
                { subject: "He/She", verb: "is kissing", example: "She is kissing her boyfriend at the airport." },
                { subject: "We", verb: "are kissing", example: "We are kissing the bride on the cheek to congratulate her." },
                { subject: "They", verb: "are kissing", example: "They are kissing under the mistletoe at the Christmas party." }
            ]
        },
        {
            name: "Seek",
            conjugations: [
                { subject: "I", verb: "am seeking", example: "I am seeking advice on my career options." },
                { subject: "You", verb: "are seeking", example: "You are seeking answers in the wrong places." },
                { subject: "He/She", verb: "is seeking", example: "He is seeking a second opinion from another doctor." },
                { subject: "We", verb: "are seeking", example: "We are seeking new investment opportunities." },
                { subject: "They", verb: "are seeking", example: "They are seeking shelter from the storm." }
            ]
        },
        {
            name: "Review",
            conjugations: [
                { subject: "I", verb: "am reviewing", example: "I am reviewing my notes before the exam." },
                { subject: "You", verb: "are reviewing", example: "You are reviewing the contract with your lawyer." },
                { subject: "He/She", verb: "is reviewing", example: "She is reviewing applications for the position." },
                { subject: "We", verb: "are reviewing", example: "We are reviewing our security procedures." },
                { subject: "They", verb: "are reviewing", example: "They are reviewing the performance of each department." }
            ]
        },
        {
            name: "Acquire",
            conjugations: [
                { subject: "I", verb: "am acquiring", example: "I am acquiring new skills through online courses." },
                { subject: "You", verb: "are acquiring", example: "You are acquiring a reputation as an expert." },
                { subject: "He/She", verb: "is acquiring", example: "He is acquiring rare books for his collection." },
                { subject: "We", verb: "are acquiring", example: "We are acquiring a smaller company to expand our reach." },
                { subject: "They", verb: "are acquiring", example: "They are acquiring property in developing neighborhoods." }
            ]
        },
        {
            name: "Benefit",
            conjugations: [
                { subject: "I", verb: "am benefiting", example: "I am benefiting from the new health program." },
                { subject: "You", verb: "are benefiting", example: "You are benefiting from your hard work and dedication." },
                { subject: "He/She", verb: "is benefiting", example: "She is benefiting from the mentorship program." },
                { subject: "We", verb: "are benefiting", example: "We are benefiting from reduced operating costs." },
                { subject: "They", verb: "are benefiting", example: "They are benefiting from the economic recovery." }
            ]
        },
        {
            name: "Hang",
            conjugations: [
                { subject: "I", verb: "am hanging", example: "I am hanging pictures on the wall." },
                { subject: "You", verb: "are hanging", example: "You are hanging the clothes out to dry." },
                { subject: "He/She", verb: "is hanging", example: "He is hanging out with friends after school." },
                { subject: "We", verb: "are hanging", example: "We are hanging decorations for the party." },
                { subject: "They", verb: "are hanging", example: "They are hanging the new sign outside the store." }
            ]
        },
        {
            name: "Relate",
            conjugations: [
                { subject: "I", verb: "am relating", example: "I am relating my experience to help others." },
                { subject: "You", verb: "are relating", example: "You are relating well to the new team members." },
                { subject: "He/She", verb: "is relating", example: "She is relating the story of her journey." },
                { subject: "We", verb: "are relating", example: "We are relating our findings to previous research." },
                { subject: "They", verb: "are relating", example: "They are relating the current crisis to historical events." }
            ]
        },
        {
            name: "Mix",
            conjugations: [
                { subject: "I", verb: "am mixing", example: "I am mixing ingredients for the cake." },
                { subject: "You", verb: "are mixing", example: "You are mixing different patterns in your outfit." },
                { subject: "He/She", verb: "is mixing", example: "He is mixing music for the dance party." },
                { subject: "We", verb: "are mixing", example: "We are mixing business with pleasure on this trip." },
                { subject: "They", verb: "are mixing", example: "They are mixing concrete for the new driveway." }
            ]
        },
        {
          name: "Function",
          conjugations: [
              { subject: "I", verb: "am functioning", example: "I am functioning well despite the lack of sleep." },
              { subject: "You", verb: "are functioning", example: "You are functioning as the team leader during her absence." },
              { subject: "He/She", verb: "is functioning", example: "He is functioning in multiple roles at the company." },
              { subject: "We", verb: "are functioning", example: "We are functioning at full capacity after the upgrade." },
              { subject: "They", verb: "are functioning", example: "They are functioning independently without supervision." }
          ]
        },
        {
            name: "Establish",
            conjugations: [
                { subject: "I", verb: "am establishing", example: "I am establishing a new routine for better productivity." },
                { subject: "You", verb: "are establishing", example: "You are establishing your reputation in the industry." },
                { subject: "He/She", verb: "is establishing", example: "She is establishing a non-profit organization." },
                { subject: "We", verb: "are establishing", example: "We are establishing connections with international partners." },
                { subject: "They", verb: "are establishing", example: "They are establishing new protocols for safety." }
            ]
        },
        {
            name: "Engage",
            conjugations: [
                { subject: "I", verb: "am engaging", example: "I am engaging with customers on social media." },
                { subject: "You", verb: "are engaging", example: "You are engaging in risky behavior." },
                { subject: "He/She", verb: "is engaging", example: "He is engaging the audience with his storytelling." },
                { subject: "We", verb: "are engaging", example: "We are engaging local businesses in our community project." },
                { subject: "They", verb: "are engaging", example: "They are engaging experts to solve the technical issues." }
            ]
        },
        {
            name: "Contain",
            conjugations: [
                { subject: "I", verb: "am containing", example: "I am containing my excitement about the surprise." },
                { subject: "You", verb: "are containing", example: "You are containing the spread of misinformation." },
                { subject: "He/She", verb: "is containing", example: "She is containing the fire within the designated area." },
                { subject: "We", verb: "are containing", example: "We are containing costs by implementing new measures." },
                { subject: "They", verb: "are containing", example: "They are containing the oil spill to prevent environmental damage." }
            ]
        },
        {
            name: "Arrange",
            conjugations: [
                { subject: "I", verb: "am arranging", example: "I am arranging flowers for the wedding centerpieces." },
                { subject: "You", verb: "are arranging", example: "You are arranging a meeting with the executive team." },
                { subject: "He/She", verb: "is arranging", example: "He is arranging transportation for the guests." },
                { subject: "We", verb: "are arranging", example: "We are arranging our schedule to accommodate the new project." },
                { subject: "They", verb: "are arranging", example: "They are arranging furniture in the new office space." }
            ]
        },
        {
            name: "Thank",
            conjugations: [
                { subject: "I", verb: "am thanking", example: "I am thanking everyone who supported our fundraiser." },
                { subject: "You", verb: "are thanking", example: "You are thanking the volunteers for their hard work." },
                { subject: "He/She", verb: "is thanking", example: "She is thanking her mentor for the guidance." },
                { subject: "We", verb: "are thanking", example: "We are thanking our customers with a special discount." },
                { subject: "They", verb: "are thanking", example: "They are thanking the community for the donations." }
            ]
        },
        {
            name: "Shake",
            conjugations: [
                { subject: "I", verb: "am shaking", example: "I am shaking hands with the new clients." },
                { subject: "You", verb: "are shaking", example: "You are shaking from the cold weather." },
                { subject: "He/She", verb: "is shaking", example: "He is shaking his head in disagreement." },
                { subject: "We", verb: "are shaking", example: "We are shaking up the traditional approach." },
                { subject: "They", verb: "are shaking", example: "They are shaking the tree to collect the ripe fruits." }
            ]
        },
        {
            name: "Adopt",
            conjugations: [
                { subject: "I", verb: "am adopting", example: "I am adopting a healthier lifestyle." },
                { subject: "You", verb: "are adopting", example: "You are adopting a puppy from the shelter." },
                { subject: "He/She", verb: "is adopting", example: "She is adopting a child from overseas." },
                { subject: "We", verb: "are adopting", example: "We are adopting new technologies in our business." },
                { subject: "They", verb: "are adopting", example: "They are adopting sustainable practices in manufacturing." }
            ]
        },
        {
            name: "Access",
            conjugations: [
                { subject: "I", verb: "am accessing", example: "I am accessing the database remotely." },
                { subject: "You", verb: "are accessing", example: "You are accessing restricted information without permission." },
                { subject: "He/She", verb: "is accessing", example: "He is accessing his accounts through the mobile app." },
                { subject: "We", verb: "are accessing", example: "We are accessing the archives for historical research." },
                { subject: "They", verb: "are accessing", example: "They are accessing the building through the side entrance." }
            ]
        },
        {
            name: "Intend",
            conjugations: [
                { subject: "I", verb: "am intending", example: "I am intending to finish the project by next week." },
                { subject: "You", verb: "are intending", example: "You are intending to apply for the scholarship." },
                { subject: "He/She", verb: "is intending", example: "She is intending to travel during the summer break." },
                { subject: "We", verb: "are intending", example: "We are intending to expand into new markets." },
                { subject: "They", verb: "are intending", example: "They are intending to build a new facility next year." }
            ]
        },
        {
            name: "Hire",
            conjugations: [
                { subject: "I", verb: "am hiring", example: "I am hiring a personal trainer to help me get fit." },
                { subject: "You", verb: "are hiring", example: "You are hiring additional staff for the holiday season." },
                { subject: "He/She", verb: "is hiring", example: "He is hiring experienced developers for the project." },
                { subject: "We", verb: "are hiring", example: "We are hiring across all departments due to expansion." },
                { subject: "They", verb: "are hiring", example: "They are hiring consultants to improve their processes." }
            ]
        },
        {
            name: "Define",
            conjugations: [
                { subject: "I", verb: "am defining", example: "I am defining my career goals for the next five years." },
                { subject: "You", verb: "are defining", example: "You are defining the scope of the research project." },
                { subject: "He/She", verb: "is defining", example: "She is defining the terms of the agreement." },
                { subject: "We", verb: "are defining", example: "We are defining our company values in the mission statement." },
                { subject: "They", verb: "are defining", example: "They are defining new standards for the industry." }
            ]
        },
        {
            name: "Contribute",
            conjugations: [
                { subject: "I", verb: "am contributing", example: "I am contributing articles to the local newspaper." },
                { subject: "You", verb: "are contributing", example: "You are contributing valuable ideas to the discussion." },
                { subject: "He/She", verb: "is contributing", example: "He is contributing to several charitable causes." },
                { subject: "We", verb: "are contributing", example: "We are contributing time and resources to the community project." },
                { subject: "They", verb: "are contributing", example: "They are contributing to the development of new medications." }
            ]
        },
        {
            name: "Swim",
            conjugations: [
                { subject: "I", verb: "am swimming", example: "I am swimming laps every morning for exercise." },
                { subject: "You", verb: "are swimming", example: "You are swimming against the current." },
                { subject: "He/She", verb: "is swimming", example: "She is swimming in the championship next week." },
                { subject: "We", verb: "are swimming", example: "We are swimming in the lake during our vacation." },
                { subject: "They", verb: "are swimming", example: "They are swimming with dolphins on their cruise." }
            ]
        },
        {
            name: "Launch",
            conjugations: [
                { subject: "I", verb: "am launching", example: "I am launching my own business next month." },
                { subject: "You", verb: "are launching", example: "You are launching a new product line this quarter." },
                { subject: "He/She", verb: "is launching", example: "He is launching his career as a motivational speaker." },
                { subject: "We", verb: "are launching", example: "We are launching the app after months of development." },
                { subject: "They", verb: "are launching", example: "They are launching a satellite into orbit." }
            ]
        },
        {
            name: "Cross",
            conjugations: [
                { subject: "I", verb: "am crossing", example: "I am crossing the bridge to get to the other side." },
                { subject: "You", verb: "are crossing", example: "You are crossing the street without looking both ways." },
                { subject: "He/She", verb: "is crossing", example: "She is crossing items off her to-do list." },
                { subject: "We", verb: "are crossing", example: "We are crossing the border early tomorrow morning." },
                { subject: "They", verb: "are crossing", example: "They are crossing cultural barriers through music." }
            ]
        },
        {
            name: "Express",
            conjugations: [
                { subject: "I", verb: "am expressing", example: "I am expressing my concerns about the proposal." },
                { subject: "You", verb: "are expressing", example: "You are expressing yourself through your artwork." },
                { subject: "He/She", verb: "is expressing", example: "He is expressing gratitude to his supporters." },
                { subject: "We", verb: "are expressing", example: "We are expressing our condolences to the family." },
                { subject: "They", verb: "are expressing", example: "They are expressing interest in collaborating with us." }
            ]
        },
        {
            name: "Transfer",
            conjugations: [
                { subject: "I", verb: "am transferring", example: "I am transferring money to my savings account." },
                { subject: "You", verb: "are transferring", example: "You are transferring to the London office next month." },
                { subject: "He/She", verb: "is transferring", example: "She is transferring files to the new server." },
                { subject: "We", verb: "are transferring", example: "We are transferring ownership of the property." },
                { subject: "They", verb: "are transferring", example: "They are transferring students to different classrooms." }
            ]
        },
        {
            name: "Detect",
            conjugations: [
                { subject: "I", verb: "am detecting", example: "I am detecting a pattern in the data." },
                { subject: "You", verb: "are detecting", example: "You are detecting problems before they become serious." },
                { subject: "He/She", verb: "is detecting", example: "He is detecting signs of fraud in the transaction." },
                { subject: "We", verb: "are detecting", example: "We are detecting unusual activity on the network." },
                { subject: "They", verb: "are detecting", example: "They are detecting radiation levels in the area." }
            ]
        },
        {
            name: "Evaluate",
            conjugations: [
                { subject: "I", verb: "am evaluating", example: "I am evaluating the performance of my team members." },
                { subject: "You", verb: "are evaluating", example: "You are evaluating your options carefully." },
                { subject: "He/She", verb: "is evaluating", example: "She is evaluating the effectiveness of the new system." },
                { subject: "We", verb: "are evaluating", example: "We are evaluating several bids for the contract." },
                { subject: "They", verb: "are evaluating", example: "They are evaluating the impact of the policy change." }
            ]
        },
        {
            name: "Place",
            conjugations: [
                { subject: "I", verb: "am placing", example: "I am placing an order for new equipment." },
                { subject: "You", verb: "are placing", example: "You are placing too much emphasis on minor details." },
                { subject: "He/She", verb: "is placing", example: "He is placing the books back on the shelves." },
                { subject: "We", verb: "are placing", example: "We are placing advertisements in local newspapers." },
                { subject: "They", verb: "are placing", example: "They are placing bets on the outcome of the race." }
            ]
        },
        {
            name: "Mark",
            conjugations: [
                { subject: "I", verb: "am marking", example: "I am marking student essays over the weekend." },
                { subject: "You", verb: "are marking", example: "You are marking the trail for other hikers." },
                { subject: "He/She", verb: "is marking", example: "She is marking important passages in the textbook." },
                { subject: "We", verb: "are marking", example: "We are marking our ten-year anniversary with a celebration." },
                { subject: "They", verb: "are marking", example: "They are marking the boundaries of the property." }
            ]
        },
        {
            name: "Secure",
            conjugations: [
                { subject: "I", verb: "am securing", example: "I am securing funding for the new initiative." },
                { subject: "You", verb: "are securing", example: "You are securing the doors and windows before leaving." },
                { subject: "He/She", verb: "is securing", example: "He is securing his position as team leader." },
                { subject: "We", verb: "are securing", example: "We are securing permits for the construction project." },
                { subject: "They", verb: "are securing", example: "They are securing the site against potential threats." }
            ]
        },
        {
            name: "Qualify",
            conjugations: [
                { subject: "I", verb: "am qualifying", example: "I am qualifying for the finals based on my score." },
                { subject: "You", verb: "are qualifying", example: "You are qualifying your statements with too many exceptions." },
                { subject: "He/She", verb: "is qualifying", example: "She is qualifying for a mortgage with her new job." },
                { subject: "We", verb: "are qualifying", example: "We are qualifying candidates for the scholarship program." },
                { subject: "They", verb: "are qualifying", example: "They are qualifying for tax exemptions under the new law." }
            ]
        },
        {
            name: "Settle",
            conjugations: [
                { subject: "I", verb: "am settling", example: "I am settling into my new apartment." },
                { subject: "You", verb: "are settling", example: "You are settling for less than you deserve." },
                { subject: "He/She", verb: "is settling", example: "He is settling the dispute through mediation." },
                { subject: "We", verb: "are settling", example: "We are settling our accounts before the end of the month." },
                { subject: "They", verb: "are settling", example: "They are settling in a small town after years in the city." }
            ]
        },
        {
            name: "Fold",
            conjugations: [
                { subject: "I", verb: "am folding", example: "I am folding laundry while watching television." },
                { subject: "You", verb: "are folding", example: "You are folding the map incorrectly." },
                { subject: "He/She", verb: "is folding", example: "She is folding paper cranes for the art installation." },
                { subject: "We", verb: "are folding", example: "We are folding our business due to economic challenges." },
                { subject: "They", verb: "are folding", example: "They are folding the chairs after the event." }
            ]
        },
        {
            name: "Design",
            conjugations: [
                { subject: "I", verb: "am designing", example: "I am designing a website for my portfolio." },
                { subject: "You", verb: "are designing", example: "You are designing an innovative solution to the problem." },
                { subject: "He/She", verb: "is designing", example: "He is designing costumes for the theater production." },
                { subject: "We", verb: "are designing", example: "We are designing a more efficient workflow process." },
                { subject: "They", verb: "are designing", example: "They are designing the new city park layout." }
            ]
        },
        {
            name: "Hurt",
            conjugations: [
                { subject: "I", verb: "am hurting", example: "I am hurting from yesterday's intense workout." },
                { subject: "You", verb: "are hurting", example: "You are hurting yourself by refusing help." },
                { subject: "He/She", verb: "is hurting", example: "She is hurting deeply after the betrayal." },
                { subject: "We", verb: "are hurting", example: "We are hurting financially due to the recession." },
                { subject: "They", verb: "are hurting", example: "They are hurting their chances by missing deadlines." }
            ]
        },
        {
            name: "Operate",
            conjugations: [
                { subject: "I", verb: "am operating", example: "I am operating the new machinery today." },
                { subject: "You", verb: "are operating", example: "You are operating under a misunderstanding." },
                { subject: "He/She", verb: "is operating", example: "He is operating on a patient with a rare condition." },
                { subject: "We", verb: "are operating", example: "We are operating at reduced capacity during renovations." },
                { subject: "They", verb: "are operating", example: "They are operating several locations across the country." }
            ]
        },
        {
            name: "Recover",
            conjugations: [
                { subject: "I", verb: "am recovering", example: "I am recovering from surgery at home." },
                { subject: "You", verb: "are recovering", example: "You are recovering your lost data from the backup." },
                { subject: "He/She", verb: "is recovering", example: "She is recovering from a long illness." },
                { subject: "We", verb: "are recovering", example: "We are recovering costs through improved efficiency." },
                { subject: "They", verb: "are recovering", example: "They are recovering artifacts from the ancient site." }
            ]
        },
        {
            name: "Tie",
            conjugations: [
                { subject: "I", verb: "am tying", example: "I am tying my shoelaces before the race." },
                { subject: "You", verb: "are tying", example: "You are tying the ribbon around the gift package." },
                { subject: "He/She", verb: "is tying", example: "He is tying the boat to the dock." },
                { subject: "We", verb: "are tying", example: "We are tying up loose ends before the project deadline." },
                { subject: "They", verb: "are tying", example: "They are tying the score in the final minutes of the game." }
            ]
        },
        {
            name: "Roll",
            conjugations: [
                { subject: "I", verb: "am rolling", example: "I am rolling out the dough for the pie crust." },
                { subject: "You", verb: "are rolling", example: "You are rolling down the hill too fast." },
                { subject: "He/She", verb: "is rolling", example: "She is rolling her suitcase through the airport." },
                { subject: "We", verb: "are rolling", example: "We are rolling out the new software update gradually." },
                { subject: "They", verb: "are rolling", example: "They are rolling the credits at the end of the movie." }
            ]
        },
        {
            name: "Differ",
            conjugations: [
                { subject: "I", verb: "am differing", example: "I am differing from the majority in my opinion." },
                { subject: "You", verb: "are differing", example: "You are differing with your colleague on this approach." },
                { subject: "He/She", verb: "is differing", example: "He is differing from the standard procedure in this case." },
                { subject: "We", verb: "are differing", example: "We are differing in our interpretation of the results." },
                { subject: "They", verb: "are differing", example: "They are differing on key policy issues." }
            ]
        },
        {
            name: "Promote",
            conjugations: [
                { subject: "I", verb: "am promoting", example: "I am promoting healthy habits among my students." },
                { subject: "You", verb: "are promoting", example: "You are promoting the event on social media." },
                { subject: "He/She", verb: "is promoting", example: "She is promoting her new book through a national tour." },
                { subject: "We", verb: "are promoting", example: "We are promoting awareness of environmental issues." },
                { subject: "They", verb: "are promoting", example: "They are promoting employees based on performance." }
            ]
        },
        {
            name: "Attack",
            conjugations: [
                { subject: "I", verb: "am attacking", example: "I am attacking the problem from a different angle." },
                { subject: "You", verb: "are attacking", example: "You are attacking instead of listening to the criticism." },
                { subject: "He/She", verb: "is attacking", example: "He is attacking the opposing team's weakness." },
                { subject: "We", verb: "are attacking", example: "We are attacking the project with renewed energy." },
                { subject: "They", verb: "are attacking", example: "They are attacking our reputation with false claims." }
            ]
        },
        {
            name: "Sign",
            conjugations: [
                { subject: "I", verb: "am signing", example: "I am signing the contract this afternoon." },
                { subject: "You", verb: "are signing", example: "You are signing autographs for your fans." },
                { subject: "He/She", verb: "is signing", example: "She is signing with a major record label." },
                { subject: "We", verb: "are signing", example: "We are signing up new members for the club." },
                { subject: "They", verb: "are signing", example: "They are signing a peace treaty between nations." }
            ]
        },
        {
            name: "Inform",
            conjugations: [
                { subject: "I", verb: "am informing", example: "I am informing all participants about the schedule change." },
                { subject: "You", verb: "are informing", example: "You are informing the police about the incident." },
                { subject: "He/She", verb: "is informing", example: "He is informing his manager about the progress." },
                { subject: "We", verb: "are informing", example: "We are informing our customers of the new policy." },
                { subject: "They", verb: "are informing", example: "They are informing the public through press releases." }
            ]
        },
        {
            name: "Note",
            conjugations: [
                { subject: "I", verb: "am noting", example: "I am noting down important points from the lecture." },
                { subject: "You", verb: "are noting", example: "You are noting the changes in the patient's condition." },
                { subject: "He/She", verb: "is noting", example: "She is noting the time of each occurrence." },
                { subject: "We", verb: "are noting", example: "We are noting a significant improvement in sales." },
                { subject: "They", verb: "are noting", example: "They are noting discrepancies in the financial records." }
            ]
        },
        {
            name: "Spread",
            conjugations: [
                { subject: "I", verb: "am spreading", example: "I am spreading butter on my toast." },
                { subject: "You", verb: "are spreading", example: "You are spreading yourself too thin with all these commitments." },
                { subject: "He/She", verb: "is spreading", example: "He is spreading mulch in the garden." },
                { subject: "We", verb: "are spreading", example: "We are spreading awareness about climate change." },
                { subject: "They", verb: "are spreading", example: "They are spreading rumors about the company merger." }
            ]
        },
        {
            name: "Form",
            conjugations: [
                { subject: "I", verb: "am forming", example: "I am forming a study group for the upcoming exam." },
                { subject: "You", verb: "are forming", example: "You are forming new habits that will improve your health." },
                { subject: "He/She", verb: "is forming", example: "She is forming connections with industry leaders." },
                { subject: "We", verb: "are forming", example: "We are forming a committee to address these concerns." },
                { subject: "They", verb: "are forming", example: "They are forming a new political party." }
            ]
        },
        {
          name: "Worry",
          conjugations: [
              { subject: "I", verb: "am worrying", example: "I am worrying about my upcoming presentation." },
              { subject: "You", verb: "are worrying", example: "You are worrying too much about things you can't control." },
              { subject: "He/She", verb: "is worrying", example: "She is worrying about her sick mother." },
              { subject: "We", verb: "are worrying", example: "We are worrying about the consequences of this decision." },
              { subject: "They", verb: "are worrying", example: "They are worrying about meeting the deadline." }
          ]
        },
        {
            name: "Concentrate",
            conjugations: [
                { subject: "I", verb: "am concentrating", example: "I am concentrating on finishing this report." },
                { subject: "You", verb: "are concentrating", example: "You are concentrating too hard on minor details." },
                { subject: "He/She", verb: "is concentrating", example: "He is concentrating on improving his skills." },
                { subject: "We", verb: "are concentrating", example: "We are concentrating our efforts on customer satisfaction." },
                { subject: "They", verb: "are concentrating", example: "They are concentrating on their studies for final exams." }
            ]
        },
        {
            name: "Vote",
            conjugations: [
                { subject: "I", verb: "am voting", example: "I am voting in the local elections today." },
                { subject: "You", verb: "are voting", example: "You are voting for the opposition candidate." },
                { subject: "He/She", verb: "is voting", example: "She is voting by mail this year." },
                { subject: "We", verb: "are voting", example: "We are voting on the new proposal at the meeting." },
                { subject: "They", verb: "are voting", example: "They are voting for their favorite contestant on the show." }
            ]
        },
        {
            name: "Extend",
            conjugations: [
                { subject: "I", verb: "am extending", example: "I am extending my stay for another week." },
                { subject: "You", verb: "are extending", example: "You are extending your hand in friendship." },
                { subject: "He/She", verb: "is extending", example: "He is extending the deadline for submissions." },
                { subject: "We", verb: "are extending", example: "We are extending our business hours during the holidays." },
                { subject: "They", verb: "are extending", example: "They are extending their house with a new addition." }
            ]
        },
        {
            name: "Lift",
            conjugations: [
                { subject: "I", verb: "am lifting", example: "I am lifting weights at the gym." },
                { subject: "You", verb: "are lifting", example: "You are lifting the box incorrectly – bend your knees." },
                { subject: "He/She", verb: "is lifting", example: "She is lifting her spirits with positive affirmations." },
                { subject: "We", verb: "are lifting", example: "We are lifting the travel restrictions next month." },
                { subject: "They", verb: "are lifting", example: "They are lifting the heavy furniture into the moving truck." }
            ]
        },
        {
            name: "Catch",
            conjugations: [
                { subject: "I", verb: "am catching", example: "I am catching the early train to London." },
                { subject: "You", verb: "are catching", example: "You are catching on to the new system quickly." },
                { subject: "He/She", verb: "is catching", example: "He is catching fish at the lake this weekend." },
                { subject: "We", verb: "are catching", example: "We are catching up on paperwork after the busy season." },
                { subject: "They", verb: "are catching", example: "They are catching butterflies for their science project." }
            ]
        },
        {
            name: "Combine",
            conjugations: [
                { subject: "I", verb: "am combining", example: "I am combining different ingredients to create a new recipe." },
                { subject: "You", verb: "are combining", example: "You are combining work and study effectively." },
                { subject: "He/She", verb: "is combining", example: "She is combining traditional and modern techniques in her art." },
                { subject: "We", verb: "are combining", example: "We are combining our resources for this joint venture." },
                { subject: "They", verb: "are combining", example: "They are combining their talents to produce the show." }
            ]
        },
        {
            name: "Propose",
            conjugations: [
                { subject: "I", verb: "am proposing", example: "I am proposing a new solution to the problem." },
                { subject: "You", verb: "are proposing", example: "You are proposing significant changes to the system." },
                { subject: "He/She", verb: "is proposing", example: "He is proposing to his girlfriend this weekend." },
                { subject: "We", verb: "are proposing", example: "We are proposing a partnership between our organizations." },
                { subject: "They", verb: "are proposing", example: "They are proposing legislation to protect the environment." }
            ]
        },
        {
            name: "Celebrate",
            conjugations: [
                { subject: "I", verb: "am celebrating", example: "I am celebrating my promotion with friends tonight." },
                { subject: "You", verb: "are celebrating", example: "You are celebrating your anniversary in Paris." },
                { subject: "He/She", verb: "is celebrating", example: "She is celebrating her graduation with family." },
                { subject: "We", verb: "are celebrating", example: "We are celebrating the company's 50th anniversary." },
                { subject: "They", verb: "are celebrating", example: "They are celebrating their team's victory with a party." }
            ]
        },
        {
            name: "Supply",
            conjugations: [
                { subject: "I", verb: "am supplying", example: "I am supplying the materials for the craft project." },
                { subject: "You", verb: "are supplying", example: "You are supplying valuable information to the investigation." },
                { subject: "He/She", verb: "is supplying", example: "He is supplying the catering for the event." },
                { subject: "We", verb: "are supplying", example: "We are supplying medical equipment to developing countries." },
                { subject: "They", verb: "are supplying", example: "They are supplying electricity to the whole region." }
            ]
        },
        {
            name: "Link",
            conjugations: [
                { subject: "I", verb: "am linking", example: "I am linking my social media accounts for convenience." },
                { subject: "You", verb: "are linking", example: "You are linking too many external sites in your report." },
                { subject: "He/She", verb: "is linking", example: "She is linking her success to her daily habits." },
                { subject: "We", verb: "are linking", example: "We are linking our business with community initiatives." },
                { subject: "They", verb: "are linking", example: "They are linking arms in solidarity during the protest." }
            ]
        },
        {
            name: "Demand",
            conjugations: [
                { subject: "I", verb: "am demanding", example: "I am demanding an explanation for the delay." },
                { subject: "You", verb: "are demanding", example: "You are demanding too much from your employees." },
                { subject: "He/She", verb: "is demanding", example: "He is demanding a refund for the defective product." },
                { subject: "We", verb: "are demanding", example: "We are demanding better working conditions." },
                { subject: "They", verb: "are demanding", example: "They are demanding changes to the current policy." }
            ]
        },
        {
            name: "Destroy",
            conjugations: [
                { subject: "I", verb: "am destroying", example: "I am destroying old documents with sensitive information." },
                { subject: "You", verb: "are destroying", example: "You are destroying your chances with this behavior." },
                { subject: "He/She", verb: "is destroying", example: "She is destroying the competition with her performance." },
                { subject: "We", verb: "are destroying", example: "We are destroying outdated inventory to make space." },
                { subject: "They", verb: "are destroying", example: "They are destroying habitat by clearing the forest." }
            ]
        },
        {
            name: "Preserve",
            conjugations: [
                { subject: "I", verb: "am preserving", example: "I am preserving these flowers by pressing them in a book." },
                { subject: "You", verb: "are preserving", example: "You are preserving family traditions through these gatherings." },
                { subject: "He/She", verb: "is preserving", example: "He is preserving the historical building's original features." },
                { subject: "We", verb: "are preserving", example: "We are preserving wildlife through conservation efforts." },
                { subject: "They", verb: "are preserving", example: "They are preserving fruits and vegetables for winter." }
            ]
        },
        {
            name: "Blame",
            conjugations: [
                { subject: "I", verb: "am blaming", example: "I am blaming myself for the misunderstanding." },
                { subject: "You", verb: "are blaming", example: "You are blaming others for your own mistakes." },
                { subject: "He/She", verb: "is blaming", example: "She is blaming the weather for the cancellation." },
                { subject: "We", verb: "are blaming", example: "We are blaming the system for these failures." },
                { subject: "They", verb: "are blaming", example: "They are blaming the referee for their loss." }
            ]
        },
        {
            name: "Invest",
            conjugations: [
                { subject: "I", verb: "am investing", example: "I am investing in my education by taking courses." },
                { subject: "You", verb: "are investing", example: "You are investing in real estate for your retirement." },
                { subject: "He/She", verb: "is investing", example: "He is investing in startup companies with potential." },
                { subject: "We", verb: "are investing", example: "We are investing time in developing our relationships." },
                { subject: "They", verb: "are investing", example: "They are investing millions in renewable energy." }
            ]
        },
        {
            name: "Prefer",
            conjugations: [
                { subject: "I", verb: "am preferring", example: "I am preferring quieter restaurants these days." },
                { subject: "You", verb: "are preferring", example: "You are preferring to work from home after the pandemic." },
                { subject: "He/She", verb: "is preferring", example: "She is preferring digital books to physical ones." },
                { subject: "We", verb: "are preferring", example: "We are preferring locally sourced ingredients for our menu." },
                { subject: "They", verb: "are preferring", example: "They are preferring to travel by train rather than flying." }
            ]
        },
        {
            name: "Demonstrate",
            conjugations: [
                { subject: "I", verb: "am demonstrating", example: "I am demonstrating how to use the new software." },
                { subject: "You", verb: "are demonstrating", example: "You are demonstrating great leadership skills." },
                { subject: "He/She", verb: "is demonstrating", example: "He is demonstrating the proper technique for the exercise." },
                { subject: "We", verb: "are demonstrating", example: "We are demonstrating our commitment to sustainability." },
                { subject: "They", verb: "are demonstrating", example: "They are demonstrating against the new tax laws." }
            ]
        },
        {
            name: "Generate",
            conjugations: [
                { subject: "I", verb: "am generating", example: "I am generating ideas for the marketing campaign." },
                { subject: "You", verb: "are generating", example: "You are generating a lot of interest with your research." },
                { subject: "He/She", verb: "is generating", example: "She is generating revenue through her online business." },
                { subject: "We", verb: "are generating", example: "We are generating electricity from solar panels." },
                { subject: "They", verb: "are generating", example: "They are generating reports on customer behavior." }
            ]
        },
        {
            name: "Lock",
            conjugations: [
                { subject: "I", verb: "am locking", example: "I am locking the door before going to bed." },
                { subject: "You", verb: "are locking", example: "You are locking yourself away to study for exams." },
                { subject: "He/She", verb: "is locking", example: "He is locking his bike to the rack." },
                { subject: "We", verb: "are locking", example: "We are locking in the current interest rate." },
                { subject: "They", verb: "are locking", example: "They are locking up the office for the weekend." }
            ]
        },
        {
            name: "Adapt",
            conjugations: [
                { subject: "I", verb: "am adapting", example: "I am adapting to the new work environment." },
                { subject: "You", verb: "are adapting", example: "You are adapting the novel for a film screenplay." },
                { subject: "He/She", verb: "is adapting", example: "She is adapting her teaching style to online classes." },
                { subject: "We", verb: "are adapting", example: "We are adapting our business model to changing markets." },
                { subject: "They", verb: "are adapting", example: "They are adapting to life in a new country." }
            ]
        },
        {
            name: "Grab",
            conjugations: [
                { subject: "I", verb: "am grabbing", example: "I am grabbing lunch before the meeting." },
                { subject: "You", verb: "are grabbing", example: "You are grabbing too many items at once." },
                { subject: "He/She", verb: "is grabbing", example: "He is grabbing his coat on the way out." },
                { subject: "We", verb: "are grabbing", example: "We are grabbing the opportunity to expand our business." },
                { subject: "They", verb: "are grabbing", example: "They are grabbing tickets for the concert before they sell out." }
            ]
        },
        {
            name: "Calculate",
            conjugations: [
                { subject: "I", verb: "am calculating", example: "I am calculating the total expenses for the project." },
                { subject: "You", verb: "are calculating", example: "You are calculating your retirement savings correctly." },
                { subject: "He/She", verb: "is calculating", example: "She is calculating the distance between two points." },
                { subject: "We", verb: "are calculating", example: "We are calculating the return on investment." },
                { subject: "They", verb: "are calculating", example: "They are calculating the risks involved in the venture." }
            ]
        },
        {
            name: "Proceed",
            conjugations: [
                { subject: "I", verb: "am proceeding", example: "I am proceeding with caution in this negotiation." },
                { subject: "You", verb: "are proceeding", example: "You are proceeding without proper authorization." },
                { subject: "He/She", verb: "is proceeding", example: "He is proceeding to the next stage of the competition." },
                { subject: "We", verb: "are proceeding", example: "We are proceeding with the renovation as planned." },
                { subject: "They", verb: "are proceeding", example: "They are proceeding down the aisle during the ceremony." }
            ]
        },
        {
            name: "Trust",
            conjugations: [
                { subject: "I", verb: "am trusting", example: "I am trusting you with this sensitive information." },
                { subject: "You", verb: "are trusting", example: "You are trusting too easily without verification." },
                { subject: "He/She", verb: "is trusting", example: "She is trusting her instincts on this decision." },
                { subject: "We", verb: "are trusting", example: "We are trusting the experts to guide us through this process." },
                { subject: "They", verb: "are trusting", example: "They are trusting each other to complete their parts of the project." }
            ]
        },
        {
            name: "Wake",
            conjugations: [
                { subject: "I", verb: "am waking", example: "I am waking up earlier to exercise before work." },
                { subject: "You", verb: "are waking", example: "You are waking the baby with your loud voice." },
                { subject: "He/She", verb: "is waking", example: "He is waking from a long nap." },
                { subject: "We", verb: "are waking", example: "We are waking to the reality of climate change." },
                { subject: "They", verb: "are waking", example: "They are waking the household at dawn for the trip." }
            ]
        },
        {
            name: "Hate",
            conjugations: [
                { subject: "I", verb: "am hating", example: "I am hating this long commute to work." },
                { subject: "You", verb: "are hating", example: "You are hating the idea of moving again." },
                { subject: "He/She", verb: "is hating", example: "She is hating every minute of this boring meeting." },
                { subject: "We", verb: "are hating", example: "We are hating the delay, but there's nothing we can do." },
                { subject: "They", verb: "are hating", example: "They are hating the new rules implemented at school." }
            ]
        },
        {
            name: "Fear",
            conjugations: [
                { subject: "I", verb: "am fearing", example: "I am fearing the worst about the test results." },
                { subject: "You", verb: "are fearing", example: "You are fearing change unnecessarily." },
                { subject: "He/She", verb: "is fearing", example: "He is fearing rejection after applying for the job." },
                { subject: "We", verb: "are fearing", example: "We are fearing that the project might be cancelled." },
                { subject: "They", verb: "are fearing", example: "They are fearing repercussions from their actions." }
            ]
        },
        {
            name: "Possess",
            conjugations: [
                { subject: "I", verb: "am possessing", example: "I am possessing all the necessary qualifications for this position." },
                { subject: "You", verb: "are possessing", example: "You are possessing a remarkable talent for music." },
                { subject: "He/She", verb: "is possessing", example: "She is possessing the rare skill of perfect pitch." },
                { subject: "We", verb: "are possessing", example: "We are possessing the determination to succeed." },
                { subject: "They", verb: "are possessing", example: "They are possessing valuable artifacts from ancient civilizations." }
            ]
        },
        {
            name: "Recognize",
            conjugations: [
                { subject: "I", verb: "am recognizing", example: "I am recognizing the importance of regular exercise." },
                { subject: "You", verb: "are recognizing", example: "You are recognizing familiar faces in the crowd." },
                { subject: "He/She", verb: "is recognizing", example: "He is recognizing the symptoms of burnout in himself." },
                { subject: "We", verb: "are recognizing", example: "We are recognizing employees for their outstanding contributions." },
                { subject: "They", verb: "are recognizing", example: "They are recognizing the need for policy reform." }
            ]
        },
        {
            name: "Stretch",
            conjugations: [
                { subject: "I", verb: "am stretching", example: "I am stretching before my morning run." },
                { subject: "You", verb: "are stretching", example: "You are stretching the fabric too much." },
                { subject: "He/She", verb: "is stretching", example: "She is stretching her muscles after sitting all day." },
                { subject: "We", verb: "are stretching", example: "We are stretching our budget to afford the renovation." },
                { subject: "They", verb: "are stretching", example: "They are stretching the truth in their advertising claims." }
            ]
        },
        {
            name: "Light",
            conjugations: [
                { subject: "I", verb: "am lighting", example: "I am lighting candles for the dinner table." },
                { subject: "You", verb: "are lighting", example: "You are lighting the path with your flashlight." },
                { subject: "He/She", verb: "is lighting", example: "He is lighting the fireworks for the display." },
                { subject: "We", verb: "are lighting", example: "We are lighting the stage for the performance." },
                { subject: "They", verb: "are lighting", example: "They are lighting the Olympic torch in the ceremony." }
            ]
        },
        {
            name: "Interview",
            conjugations: [
                { subject: "I", verb: "am interviewing", example: "I am interviewing candidates for the position." },
                { subject: "You", verb: "are interviewing", example: "You are interviewing the famous author tomorrow." },
                { subject: "He/She", verb: "is interviewing", example: "She is interviewing for a job at the hospital." },
                { subject: "We", verb: "are interviewing", example: "We are interviewing witnesses to the accident." },
                { subject: "They", verb: "are interviewing", example: "They are interviewing students for the research project." }
            ]
        },
        {
            name: "Commit",
            conjugations: [
                { subject: "I", verb: "am committing", example: "I am committing myself to learning a new language." },
                { subject: "You", verb: "are committing", example: "You are committing too much time to this one project." },
                { subject: "He/She", verb: "is committing", example: "He is committing to regular workout sessions." },
                { subject: "We", verb: "are committing", example: "We are committing resources to environmental initiatives." },
                { subject: "They", verb: "are committing", example: "They are committing to reducing plastic waste." }
            ]
        },
        {
            name: "Reveal",
            conjugations: [
                { subject: "I", verb: "am revealing", example: "I am revealing my plans for the new project." },
                { subject: "You", verb: "are revealing", example: "You are revealing too much personal information online." },
                { subject: "He/She", verb: "is revealing", example: "She is revealing the truth about what happened." },
                { subject: "We", verb: "are revealing", example: "We are revealing our new logo at the conference." },
                { subject: "They", verb: "are revealing", example: "They are revealing the winner at the end of the show." }
            ]
        },
        {
            name: "Load",
            conjugations: [
                { subject: "I", verb: "am loading", example: "I am loading the dishwasher after dinner." },
                { subject: "You", verb: "are loading", example: "You are loading too much weight onto the shelf." },
                { subject: "He/She", verb: "is loading", example: "He is loading the moving truck with furniture." },
                { subject: "We", verb: "are loading", example: "We are loading the software onto the new computers." },
                { subject: "They", verb: "are loading", example: "They are loading cargo onto the ship." }
            ]
        },
        {
            name: "Highlight",
            conjugations: [
                { subject: "I", verb: "am highlighting", example: "I am highlighting key points in the document." },
                { subject: "You", verb: "are highlighting", example: "You are highlighting your hair for summer." },
                { subject: "He/She", verb: "is highlighting", example: "She is highlighting the benefits of the new system." },
                { subject: "We", verb: "are highlighting", example: "We are highlighting employee achievements in our newsletter." },
                { subject: "They", verb: "are highlighting", example: "They are highlighting areas for improvement in the report." }
            ]
        },
        {
            name: "Guide",
            conjugations: [
                { subject: "I", verb: "am guiding", example: "I am guiding tourists through the museum." },
                { subject: "You", verb: "are guiding", example: "You are guiding the team in the right direction." },
                { subject: "He/She", verb: "is guiding", example: "He is guiding the blind person across the street." },
                { subject: "We", verb: "are guiding", example: "We are guiding students through the college application process." },
                { subject: "They", verb: "are guiding", example: "They are guiding hikers through the mountain trail." }
            ]
        },
        {
            name: "Quote",
            conjugations: [
                { subject: "I", verb: "am quoting", example: "I am quoting Shakespeare in my essay." },
                { subject: "You", verb: "are quoting", example: "You are quoting the exact figures from the report." },
                { subject: "He/She", verb: "is quoting", example: "She is quoting the law to support her argument." },
                { subject: "We", verb: "are quoting", example: "We are quoting a higher price due to increased costs." },
                { subject: "They", verb: "are quoting", example: "They are quoting famous researchers in their paper." }
            ]
        },
        {
            name: "Charge",
            conjugations: [
                { subject: "I", verb: "am charging", example: "I am charging my phone before leaving." },
                { subject: "You", verb: "are charging", example: "You are charging too much for this service." },
                { subject: "He/She", verb: "is charging", example: "He is charging ahead with the project despite concerns." },
                { subject: "We", verb: "are charging", example: "We are charging admission to cover our costs." },
                { subject: "They", verb: "are charging", example: "They are charging the battery of the electric vehicle." }
            ]
        }
    ]
};

// Speech synthesis variables
let speechSynthesis = window.speechSynthesis;
let isSpeaking = false;
let currentUtterance = null;
let voicesLoaded = false;
let currentlyReadingCard = null;

// Load voices when they become available
function loadVoices() {
    return new Promise((resolve) => {
        let voices = speechSynthesis.getVoices();
        if (voices.length !== 0) {
            voicesLoaded = true;
            resolve(voices);
        } else {
            speechSynthesis.onvoiceschanged = () => {
                voices = speechSynthesis.getVoices();
                voicesLoaded = true;
                resolve(voices);
            };
        }
    });
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load voices for speech synthesis
    loadVoices().then(voices => {
        console.log(`Loaded ${voices.length} voices for speech synthesis`);
        
        // Log available voices for debugging
        voices.forEach(voice => {
            console.log(`Voice: ${voice.name}, Lang: ${voice.lang}, Default: ${voice.default}`);
        });
    });
    
    // Set up navigation links
    setupNavigation();
    
    // Load default tense (present)
    loadTense('present');
    
    // Add search functionality
    setupSearch();
    
    // Add event listener for window resize
    window.addEventListener('resize', adjustLayout);
});

// Set up navigation event listeners
function setupNavigation() {
    const links = document.querySelectorAll('.navigation a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the tense from the href attribute
            const hrefValue = this.getAttribute('href');
            if (!hrefValue || hrefValue === '#') return;
            
            const tenseId = hrefValue.replace('#', '').split('-')[0];
            
            // Highlight active link
            links.forEach(l => l.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            
            // Load the selected tense
            loadTense(tenseId);
        });
    });
}

// Load verbs for the selected tense
function loadTense(tense) {
    // Get the container for the verbs
    const container = document.getElementById(`${tense}-tense-main`);
    if (!container) {
        // Create the section if it doesn't exist
        const main = document.querySelector('main');
        const section = document.createElement('section');
        section.id = `${tense}-tense-main`;
        
        const verbContainer = document.createElement('div');
        verbContainer.className = `${tense}-tense-verb verb-container`;
        
        section.appendChild(verbContainer);
        main.innerHTML = ''; // Clear main content
        main.appendChild(section);
    }
    
    // Get the verb data for the selected tense
    const verbs = verbData[tense] || [];
    
    // Get or create the verb container
    const verbContainer = document.querySelector(`.${tense}-tense-verb`) || 
                          document.createElement('div');
    verbContainer.className = `${tense}-tense-verb verb-container`;
    verbContainer.innerHTML = ''; // Clear previous content
    
    // Add title to the section
    const title = document.createElement('h2');
    title.className = 'tense-title';
    title.textContent = formatTenseTitle(tense);
    
    const section = document.getElementById(`${tense}-tense-main`) || document.createElement('section');
    section.id = `${tense}-tense-main`;
    section.innerHTML = '';
    section.appendChild(title);
    section.appendChild(verbContainer);
    
    document.querySelector('main').innerHTML = '';
    document.querySelector('main').appendChild(section);
    
    // Create verb cards
    verbs.forEach(verb => {
        createVerbCard(verb, verbContainer);
    });
    
    // Add a message if no verbs for this tense
    if (verbs.length === 0) {
        const message = document.createElement('p');
        message.className = 'no-verbs-message';
        message.textContent = `No verbs available for ${formatTenseTitle(tense)} tense yet.`;
        verbContainer.appendChild(message);
    }
    
    // Adjust layout based on screen size
    adjustLayout();
}

// Create a card for a verb
function createVerbCard(verb, container) {
    const verbCard = createVerbCardElement(verb);
    container.appendChild(verbCard);
}

// Adjust layout based on screen size
function adjustLayout() {
    const verbCards = document.querySelectorAll('.verb-card');
    const screenWidth = window.innerWidth;
    
    verbCards.forEach(card => {
        // Check if card is in search results
        const isInSearchResults = card.closest('.search-results-container') !== null;
        
        // Responsive styling based on screen width
        if (screenWidth < 600) {
            card.style.width = '100%';
            card.style.margin = '10px 0';
        } else if (screenWidth < 900) {
            card.style.width = isInSearchResults ? 'calc(90% - 20px)' : 'calc(50% - 20px)';
            card.style.margin = '10px';
        } else {
            card.style.width = isInSearchResults ? 'calc(90% - 20px)' : 'calc(33.33% - 20px)';
            card.style.margin = '10px';
        }
        
        // Make search result cards wider
        if (isInSearchResults) {
            card.style.minWidth = '700px';
        }
        
        // Add transition for smooth resizing
        card.style.transition = 'all 0.3s ease';
    });
}

// Text-to-speech function
function speakText(text) {
    // If already speaking, stop current speech
    if (isSpeaking) {
        stopSpeaking();
    }
    
    // Make sure voices are loaded before proceeding
    if (!voicesLoaded) {
        loadVoices().then(() => speakText(text));
        return;
    }
    
    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set base properties
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    // Get available voices
    const voices = speechSynthesis.getVoices();
    
    // Check browser type to select appropriate voice
    const isEdge = navigator.userAgent.indexOf("Edg") !== -1;
    const isChrome = navigator.userAgent.indexOf("Chrome") !== -1 && !isEdge;
    
    // Set the voice based on browser
    if (voices.length > 0) {
        let selectedVoice = null;
        
        if (isEdge) {
            // First try to find exact match for "Ryan Online (natural)"
            selectedVoice = voices.find(voice => voice.name === "Ryan Online (natural)");
            
            // If not found, try partial match
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => 
                    voice.name.includes('Ryan') && voice.name.toLowerCase().includes('natural')
                );
            }
            
            // If still not found, try any Ryan voice
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => voice.name.includes('Ryan'));
            }
            
            if (selectedVoice) {
                utterance.voice = selectedVoice;
                console.log(`Using Edge voice: ${selectedVoice.name}`);
            }
        } else if (isChrome) {
            // First try to find exact match for "Google US English"
            selectedVoice = voices.find(voice => voice.name === "Google US English");
            
            // If not found, try partial match
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => 
                    voice.name.includes('Google') && 
                    voice.name.includes('English') && 
                    voice.name.includes('US')
                );
            }
            
            // If still not found, try any US English voice
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => 
                    voice.lang === 'en-US' || voice.lang.startsWith('en-US')
                );
            }
            
            if (selectedVoice) {
                utterance.voice = selectedVoice;
                console.log(`Using Chrome voice: ${selectedVoice.name}`);
            }
        }
        
        // If no browser-specific voice was found, use any available English voice
        if (!utterance.voice) {
            const defaultVoice = voices.find(voice => 
                voice.lang === 'en-US' || voice.lang.startsWith('en')
            );
            if (defaultVoice) {
                utterance.voice = defaultVoice;
                console.log(`Using default voice: ${defaultVoice.name}`);
            }
        }
    }
    
    // Store the current utterance
    currentUtterance = utterance;
    
    // Set speaking flag
    isSpeaking = true;
    
    // Add event listeners
    utterance.onend = function() {
        isSpeaking = false;
        currentUtterance = null;
        
        // Update button status for all cards
        updateReadButtonStatus();
    };
    
    utterance.onerror = function(event) {
        console.error('Speech synthesis error:', event);
        isSpeaking = false;
        currentUtterance = null;
        
        // Update button status for all cards
        updateReadButtonStatus();
    };
    
    // Speak the text
    speechSynthesis.speak(utterance);
    
    // Update button status
    updateReadButtonStatus();
}

// Stop speaking
function stopSpeaking() {
    if (isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
        currentUtterance = null;
        
        // Update button status
        updateReadButtonStatus();
    }
}

// Update read button status for all cards
function updateReadButtonStatus() {
    const readButtons = document.querySelectorAll('.read-aloud-button');
    
    readButtons.forEach(button => {
        if (isSpeaking && button.parentElement === currentlyReadingCard) {
            button.textContent = 'Stop Reading';
            button.classList.add('reading');
        } else {
            button.textContent = 'Read Aloud';
            button.classList.remove('reading');
        }
    });
}

// Set up search functionality
function setupSearch() {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    // Create search input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'verb-search';
    searchInput.placeholder = 'Search verb...';
    
    // Create search button
    const searchButton = document.createElement('button');
    searchButton.id = 'search-button';
    searchButton.textContent = 'Search';
    
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
    
    // Add search container to header
    const header = document.querySelector('header');
    header.appendChild(searchContainer);
    
    // Function to handle search
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // If search is empty, restore normal view
            resetView();
            return;
        }
        
        // Create a search results container if it doesn't exist
        let searchResults = document.getElementById('search-results');
        if (!searchResults) {
            searchResults = document.createElement('section');
            searchResults.id = 'search-results';
            
            const resultsTitle = document.createElement('h2');
            resultsTitle.className = 'tense-title';
            resultsTitle.textContent = 'Search Results';
            
            const resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results-container';
            
            searchResults.appendChild(resultsTitle);
            searchResults.appendChild(resultsContainer);
        } else {
            // Clear previous results
            const resultsContainer = searchResults.querySelector('.search-results-container');
            resultsContainer.innerHTML = '';
        }
        
        // Find all matching verbs across all tenses
        let resultsFound = false;
        
        // Iterate through all tenses
        for (const tense in verbData) {
            const matchingVerbs = verbData[tense].filter(verb => 
                verb.name.toLowerCase().includes(searchTerm)
            );
            
            if (matchingVerbs.length > 0) {
                resultsFound = true;
                
                // Create a tense section for this tense
                const tenseSection = document.createElement('div');
                tenseSection.className = 'tense-section';
                
                const tenseTitle = document.createElement('h3');
                tenseTitle.className = 'tense-section-title';
                tenseTitle.textContent = formatTenseTitle(tense);
                tenseSection.appendChild(tenseTitle);
                
                // Add each matching verb card
                matchingVerbs.forEach(verb => {
                    const verbCard = createVerbCardElement(verb);
                    tenseSection.appendChild(verbCard);
                });
                
                // Add the tense section to results
                searchResults.querySelector('.search-results-container').appendChild(tenseSection);
            }
        }
        
        // Replace main content with search results
        const mainElement = document.querySelector('main');
        mainElement.innerHTML = '';
        
        if (resultsFound) {
            mainElement.appendChild(searchResults);
        } else {
            // No results found
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `<h2>No verbs found for "${searchTerm}"</h2>
                                  <button id="reset-search">Return to Tenses</button>`;
            mainElement.appendChild(noResults);
            
            // Add event listener to reset button
            document.getElementById('reset-search').addEventListener('click', resetView);
        }
        
        // Add a reset button
        if (!document.getElementById('reset-search') && resultsFound) {
            const resetButton = document.createElement('button');
            resetButton.id = 'reset-search';
            resetButton.className = 'reset-button';
            resetButton.textContent = 'Return to Tenses';
            searchResults.appendChild(resetButton);
            
            resetButton.addEventListener('click', resetView);
        }
        
        // Adjust layout for search results
        adjustLayout();
    }
    
    // Function to reset view to normal
    function resetView() {
        searchInput.value = '';
        // Stop any ongoing speech
        stopSpeaking();
        
        // Get the active tab and load that tense
        const activeTab = document.querySelector('.navigation p.active a');
        if (activeTab) {
            const tenseId = activeTab.getAttribute('href').replace('#', '').split('-')[0];
            loadTense(tenseId);
        } else {
            // Default to present tense if no active tab
            loadTense('present');
        }
    }
    
    // Add event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Helper function to create a verb card element
function createVerbCardElement(verb) {
    const verbCard = document.createElement('div');
    verbCard.className = 'verb-card';
    verbCard.dataset.verb = verb.name.toLowerCase();
    
    const verbTitle = document.createElement('h3');
    verbTitle.textContent = verb.name;
    
    const conjugationContainer = document.createElement('div');
    conjugationContainer.className = 'flex-verb-content';
    
    // Add each conjugation
    verb.conjugations.forEach(conj => {
        const conjugationItem = document.createElement('div');
        conjugationItem.className = 'conjugation-item';
        
        const conjugationContent = document.createElement('div');
        conjugationContent.className = 'conjugation-content';
        
        const subject = document.createElement('span');
        subject.className = 'subject';
        subject.textContent = conj.subject;
        
        const verbForm = document.createElement('span');
        verbForm.className = 'verb';
        verbForm.textContent = conj.verb;
        
        const example = document.createElement('span');
        example.className = 'example';
        example.textContent = conj.example || '';
        
        conjugationContent.appendChild(subject);
        conjugationContent.appendChild(verbForm);
        conjugationContent.appendChild(example);
        
        conjugationItem.appendChild(conjugationContent);
        conjugationContainer.appendChild(conjugationItem);
    });
    
    // Create text-to-speech button
    const readAloudButton = document.createElement('button');
    readAloudButton.className = 'read-aloud-button';
    readAloudButton.textContent = 'Read Aloud';
    
    // Add event listener for the read aloud button
    readAloudButton.addEventListener('click', function() {
        // If currently speaking for this card, stop
        if (isSpeaking && currentlyReadingCard === verbCard) {
            stopSpeaking();
            return;
        }
        
        // Generate text to speak
        let textToSpeak = `Verb: ${verb.name}. `;
        
        // Add all conjugations to the speech text
        verb.conjugations.forEach(conj => {
            textToSpeak += `${conj.subject} ${conj.verb}. ${conj.example} `;
        });
        
        // Set the current reading card
        currentlyReadingCard = verbCard;
        
        // Speak the text
        speakText(textToSpeak);
    });
    
    verbCard.appendChild(verbTitle);
    verbCard.appendChild(conjugationContainer);
    verbCard.appendChild(readAloudButton);
    
    // Add animation effect on hover
    verbCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    verbCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
    });
    
    return verbCard;
}

// Format tense ID to display title
function formatTenseTitle(tense) {
    switch(tense) {
        case 'present':
            return 'Present Tense';
        case 'past':
            return 'Past Tense';
        case 'future':
            return 'Future Tense';
        case 'present Perfect':
            return 'Present Perfect Tense';
        case 'present Continuous':
            return 'Present Continuous Tense';
        default:
            return tense.charAt(0).toUpperCase() + tense.slice(1) + ' Tense';
    }
}

// Fonction pour initialiser le menu hamburger
function setupHamburgerMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeMenuButton = document.querySelector('.close-menu');
  const navigation = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation a');
  
  // Ouvrir le menu quand on clique sur l'icône hamburger
  hamburgerIcon.addEventListener('click', function(e) {
    e.stopPropagation();
    navigation.classList.add('active');
    hamburgerIcon.classList.add('active');
    closeMenuButton.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le défilement du fond
  });
  
  // Fermer le menu quand on clique sur le bouton X
  closeMenuButton.addEventListener('click', function() {
    closeMenu();
  });
  
  // Fermer le menu quand on clique sur un lien
  navigationLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Fermer le menu quand on clique en dehors
  document.addEventListener('click', function(event) {
    if (navigation.classList.contains('active') && 
        !navigation.contains(event.target) && 
        !hamburgerIcon.contains(event.target)) {
      closeMenu();
    }
  });
  
  // Fonction pour fermer le menu
  function closeMenu() {
    navigation.classList.remove('active');
    hamburgerIcon.classList.remove('active');
    closeMenuButton.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver le défilement
  }
}

// Ajouter cette ligne à la fin de votre fonction DOMContentLoaded existante
document.addEventListener('DOMContentLoaded', function() {
    // Votre code existant...
    
    // Ajouter l'initialisation du menu hamburger
    setupHamburgerMenu();
});

/*

# 300 Most Commonly Used Verbs in English

1. BE (am, is, are)
2. HAVE (have, has)
3. DO (do, does)
4. GO (go, goes)
5. LIKE (like, likes)
6. WORK (work, works)
7. EAT (eat, eats)
8. STUDY (study, studies)
9. LIVE (live, lives)
10. SPEAK (speak, speaks)
11. MAKE (make, makes)
12. GET (get, gets)
13. TAKE (take, takes)
14. COME (come, comes)
15. SEE (see, sees)
16. KNOW (know, knows)
17. THINK (think, thinks)
18. GIVE (give, gives)
19. FIND (find, finds)
20. TELL (tell, tells)
21. ASK (ask, asks)
22. FEEL (feel, feels)
23. BECOME (become, becomes)
24. LEAVE (leave, leaves)
25. PUT (put, puts)
26. MEAN (mean, means)
27. KEEP (keep, keeps)
28. LET (let, lets)
29. HELP (help, helps)
30. TALK (talk, talks)
31. TURN (turn, turns)
32. SHOW (show, shows)
33. HEAR (hear, hears)
34. PLAY (play, plays)
35. RUN (run, runs)
36. MOVE (move, moves)
37. WANT (want, wants)
38. NEED (need, needs)
39. START (start, starts)
40. SEEM (seem, seems)
41. LOOK (look, looks)
42. CALL (call, calls)
43. TRY (try, tries)
44. USE (use, uses)
45. BRING (bring, brings)
46. BEGIN (begin, begins)
47. WRITE (write, writes)
48. READ (read, reads)
49. SAY (say, says)
50. STOP (stop, stops)
51. LEARN (learn, learns)
52. UNDERSTAND (understand, understands)
53. WATCH (watch, watches)
54. FOLLOW (follow, follows)
55. WALK (walk, walks)
56. MEET (meet, meets)
57. CONSIDER (consider, considers)
58. CHANGE (change, changes)
59. APPEAR (appear, appears)
60. HAPPEN (happen, happens)
61. DRIVE (drive, drives)
62. SEND (send, sends)
63. STAY (stay, stays)
64. RECEIVE (receive, receives)
65. REMEMBER (remember, remembers)
66. EXPECT (expect, expects)
67. BUY (buy, buys)
68. BUILD (build, builds)
69. FALL (fall, falls)
70. REACH (reach, reaches)
71. REMAIN (remain, remains)
72. BELIEVE (believe, believes)
73. HOLD (hold, holds)
74. SELL (sell, sells)
75. PAY (pay, pays)
76. OPEN (open, opens)
77. LOSE (lose, loses)
78. WAIT (wait, waits)
79. SERVE (serve, serves)
80. DIE (die, dies)
81. LEAD (lead, leads)
82. BREAK (break, breaks)
83. CREATE (create, creates)
84. SLEEP (sleep, sleeps)
85. WIN (win, wins)
86. OFFER (offer, offers)
87. GROW (grow, grows)
88. TEACH (teach, teaches)
89. COOK (cook, cooks)
90. SPEND (spend, spends)
91. DRAW (draw, draws)
92. CONTINUE (continue, continues)
93. SIT (sit, sits)
94. RISE (rise, rises)
95. DRINK (drink, drinks)
96. WEAR (wear, wears)
97. CHOOSE (choose, chooses)
98. TRAVEL (travel, travels)
99. FORGET (forget, forgets)
100. SMILE (smile, smiles)
101. FINISH (finish, finishes)
102. DECIDE (decide, decides)
103. EXPLAIN (explain, explains)
104. DEVELOP (develop, develops)
105. ACCEPT (accept, accepts)
106. DROP (drop, drops)
107. PRESENT (present, presents)
108. PLAN (plan, plans)
109. ARGUE (argue, argues)
110. SUPPORT (support, supports)
111. JUMP (jump, jumps)
112. SHARE (share, shares)
113. PASS (pass, passes)
114. SAVE (save, saves)
115. CONTROL (control, controls)
116. WONDER (wonder, wonders)
117. INCLUDE (include, includes)
118. AGREE (agree, agrees)
119. RETURN (return, returns)
120. DESCRIBE (describe, describes)
121. HOPE (hope, hopes)
122. ALLOW (allow, allows)
123. VISIT (visit, visits)
124. COMPLETE (complete, completes)
125. LOVE (love, loves)
126. JOIN (join, joins)
127. CARRY (carry, carries)
128. REALIZE (realize, realizes)
129. DANCE (dance, dances)
130. WISH (wish, wishes)
131. ADMIT (admit, admits)
132. FIX (fix, fixes)
133. SUCCEED (succeed, succeeds)
134. ENJOY (enjoy, enjoys)
135. CLEAN (clean, cleans)
136. ACHIEVE (achieve, achieves)
137. COVER (cover, covers)
138. AVOID (avoid, avoids)
139. RAISE (raise, raises)
140. EXPERIENCE (experience, experiences)
141. IDENTIFY (identify, identifies)
142. PREPARE (prepare, prepares)
143. LAUGH (laugh, laughs)
144. MANAGE (manage, manages)
145. ENTER (enter, enters)
146. CARE (care, cares)
147. SOLVE (solve, solves)
148. PRODUCE (produce, produces)
149. CLOSE (close, closes)
150. NOTICE (notice, notices)
151. IMAGINE (imagine, imagines)
152. REPLACE (replace, replaces)
153. IMPROVE (improve, improves)
154. APPLY (apply, applies)
155. REPORT (report, reports)
156. LISTEN (listen, listens)
157. DISCOVER (discover, discovers)
158. PROTECT (protect, protects)
159. OCCUR (occur, occurs)
160. FIGHT (fight, fights)
161. REMOVE (remove, removes)
162. DISCUSS (discuss, discusses)
163. FACE (face, faces)
164. CUT (cut, cuts)
165. MISS (miss, misses)
166. REDUCE (reduce, reduces)
167. SING (sing, sings)
168. DELIVER (deliver, delivers)
169. COLLECT (collect, collects)
170. THROW (throw, throws)
171. TREAT (treat, treats)
172. INTRODUCE (introduce, introduces)
173. ANSWER (answer, answers)
174. EXIST (exist, exists)
175. PULL (pull, pulls)
176. MAINTAIN (maintain, maintains)
177. TYPE (type, types)
178. SUGGEST (suggest, suggests)
179. CONNECT (connect, connects)
180. COMPARE (compare, compares)
181. HANDLE (handle, handles)
182. FILL (fill, fills)
183. IGNORE (ignore, ignores)
184. SURVIVE (survive, survives)
185. ATTEMPT (attempt, attempts)
186. DIVIDE (divide, divides)
187. CLAIM (claim, claims)
188. PRACTICE (practice, practices)
189. MENTION (mention, mentions)
190. ENCOURAGE (encourage, encourages)
191. REQUEST (request, requests)
192. TEST (test, tests)
193. FLY (fly, flies)
194. PUSH (push, pushes)
195. DISAPPEAR (disappear, disappears)
196. EXAMINE (examine, examines)
197. COUNT (count, counts)
198. REFLECT (reflect, reflects)
199. RELY (rely, relies)
200. INFLUENCE (influence, influences)
201. HIDE (hide, hides)
202. ADDRESS (address, addresses)
203. RECORD (record, records)
204. FAIL (fail, fails)
205. INDICATE (indicate, indicates)
206. REPRESENT (represent, represents)
207. PRINT (print, prints)
208. RELEASE (release, releases)
209. PROTECT (protect, protects)
210. SUFFER (suffer, suffers)
211. INTEND (intend, intends)
212. CONFIRM (confirm, confirms)
213. KISS (kiss, kisses)
214. SEEK (seek, seeks)
215. REVIEW (review, reviews)
216. ACQUIRE (acquire, acquires)
217. BENEFIT (benefit, benefits)
218. HANG (hang, hangs)
219. RELATE (relate, relates)
220. MIX (mix, mixes)
221. FUNCTION (function, functions)
222. ESTABLISH (establish, establishes)
223. ENGAGE (engage, engages)
224. CONTAIN (contain, contains)
225. ARRANGE (arrange, arranges)
226. THANK (thank, thanks)
227. SHAKE (shake, shakes)
228. ADOPT (adopt, adopts)
229. ACCESS (access, accesses)
230. INTEND (intend, intends)
231. HIRE (hire, hires)
232. DEFINE (define, defines)
233. CONTRIBUTE (contribute, contributes)
234. SWIM (swim, swims)
235. LAUNCH (launch, launches)
236. CROSS (cross, crosses)
237. EXPRESS (express, expresses)
238. TRANSFER (transfer, transfers)
239. DETECT (detect, detects)
240. EVALUATE (evaluate, evaluates)
241. PLACE (place, places)
242. MARK (mark, marks)
243. SECURE (secure, secures)
244. QUALIFY (qualify, qualifies)
245. SETTLE (settle, settles)
246. FOLD (fold, folds)
247. DESIGN (design, designs)
248. HURT (hurt, hurts)
249. OPERATE (operate, operates)
250. RECOVER (recover, recovers)
251. TIE (tie, ties)
252. ROLL (roll, rolls)
253. DIFFER (differ, differs)
254. PROMOTE (promote, promotes)
255. ATTACK (attack, attacks)
256. SIGN (sign, signs)
257. INFORM (inform, informs)
258. NOTE (note, notes)
259. SPREAD (spread, spreads)
260. FORM (form, forms)
261. WORRY (worry, worries)
262. CONCENTRATE (concentrate, concentrates)
263. VOTE (vote, votes)
264. EXTEND (extend, extends)
265. LIFT (lift, lifts)
266. CATCH (catch, catches)
267. COMBINE (combine, combines)
268. PROPOSE (propose, proposes)
269. CELEBRATE (celebrate, celebrates)
270. SUPPLY (supply, supplies)
271. LINK (link, links)
272. DEMAND (demand, demands)
273. DESTROY (destroy, destroys)
274. PRESERVE (preserve, preserves)
275. BLAME (blame, blames)
276. INVEST (invest, invests)
277. PREFER (prefer, prefers)
278. DEMONSTRATE (demonstrate, demonstrates)
279. GENERATE (generate, generates)
280. LOCK (lock, locks)
281. ADAPT (adapt, adapts)
282. GRAB (grab, grabs)
283. CALCULATE (calculate, calculates)
284. PROCEED (proceed, proceeds)
285. TRUST (trust, trusts)
286. WAKE (wake, wakes)
287. HATE (hate, hates)
288. FEAR (fear, fears)
289. POSSESS (possess, possesses)
290. RECOGNIZE (recognize, recognizes)
291. STRETCH (stretch, stretches)
292. LIGHT (light, lights)
293. INTERVIEW (interview, interviews)
294. COMMIT (commit, commits)
295. REVEAL (reveal, reveals)
296. LOAD (load, loads)
297. HIGHLIGHT (highlight, highlights)
298. GUIDE (guide, guides)
299. QUOTE (quote, quotes)
300. CHARGE (charge, charges)

*/