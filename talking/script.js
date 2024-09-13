const dialogueTree = {
    start: [
        { message: "Я вас категорический приветствую!", next: 'intro' },
    ],
    intro: [
        { message: "Надеюсь, что я застал вас в добром здравии.", next: 'story1' },
    ],
    story1: [
        { message: "Я безусловно рад тому, что мое предыдущее сообщение вас растрогало.", style: "bgGreen", duration: 9},
        { message: "Я старался сказать все прямо и так, как я сам искренне считаю." },
        { message: "Я хотел бы попросить вас на все, что будет сказано мной тут, ответить в мне телеграм или в живую." },
        { message: "Думаю, что так будет намного проще." },
        { message: "А теперь отбросив все формальности, хочу сказать." },
        { message: "Я тоже бы очень хотел узнать тебя намного лучше и узнавать в дальнейшем." },
        { message: "Ты мне кажешься действительно особенным человеком." },
        { message: "Говорю от лица того, кто повидал людей самых разнообразных сортов." },
        { message: "Ты очень выделяешься среди них и я это не только осознаю, но и чувствую." },
        { message: "Очень такое нестандартное чувство, от которого я давно отвык." },
        { message: "Знаешь, я до тебя виделся и гулял с очень большим количеством людей." },
        { message: "С некоторыми я ещё просто иногда болтаю." },
        { message: "Некоторых я кинул в игнор." },
        { message: "Некоторых я заблокировал." },
        { message: "Зачастую причина была одна." },
        { message: "В жизни они были не такими, как могло показаться по переписке." },
        { message: "И дело касается не только внешности, ха-ха-ха." },
        { message: "Они могли быть не интересующимися." },
        { message: "Будто им было совершенно наплевать." },
        { message: "Они могли быть более замкнутыми." },
        { message: "А могли быть в целом очень неправильными людьми." },
        { message: "Некоторые из них могли быть особенны разве что в плане своих проблем и своей ужасной личности." },
        { message: "Были просто грязью." },
        { message: "Я раньше, уделял больше сочувствия таким людям." },
        { message: "Я старался всегда поддерживать тех, у кого были проблемы." },
        { message: "Поддерживал тем, чем мог." },
        { message: "Но я не получал ничего взамен." },
        { message: "Я правда испытывал сочувствие к ним и мне было жаль." },
        { message: "Но потом я понял, что эти проблемы - это личное дело каждого." },
        { message: "И если человек для меня никто - то мне нет смысла тратить на него свои ресурсы." },
        { message: "силу и время." },
        { message: "После я уже перестал как либо стараться помочь человеку или поддержать, если он этого мне не стоил." },
        { message: "Невозможно всем помочь, всех выслушать и поддержать." },
        { message: "И те, кто лишний раз плачет мне, то это тоже сказывается на самочувствии." },
        { message: "Из-за эмпатичности мне самому может стать грустно." },
        { message: "Ну, и я постарался особо не придавать внимания таким людям." },
        { message: "Некоторым просто, чтобы их пожалели и выслушали." },
        { message: "Но не всегда другой может быть в достатке ресурсов для такого." },
        { message: "Я понимаю от части их, я и сам был таким в определенные моменты." },
        { message: "Я что-то отошёл." },
        { message: "Я все это к тому, что совершенно иначе и сильнее отразился на моем эмоциональном восприятии.",  style: "heat", duration: 5 },
        { message: "То, что мы похожи и ты очень внимательный человек, любопытный и мыслишь намного разносторонне." },
        { message: "Этим я вижу еще больше сходств ха-ха." },
        { message: "В любом случае ты очень выделяешься среди этой массы полного дерьма." },
        { message: "В котором люди просто пустышки какие-то." },
        { message: "…", next: 'nuances' }
    ],
    nuances: [
        { message: "Помнится ты упомянул про свои 'нюансы'.", style: "bgBlue", duration: 10 },
        { message: "Мне безумно было бы интересно узнать о них." },
        { message: "У каждого есть свои скелеты в шкафу." },
        { message: "Я понимаю тебя." },
        { message: "У меня тоже есть самого разного рода 'нюансы' ха-ха." },
        { message: "Но я к счастью стараюсь со временем избавляться от все больших недостатков в себе." },
        { message: "Я стараюсь мыслить максимально разумно и рационально." },
        { message: "Я помню, как я раньше мог часто обижаться на все и как либо держать пассивную агрессию." },
        { message: "Которую сам просто ненавижу." },
        { message: "Но я наверное просто хотел привлечь внимание или чтобы другой тоже пострадал.", next: 'choice1' }
    ],
    choice1: [
        { message: "Это было давно и я тогда и сейчас совершенно разные люди хах", 
          choices: [
                { text: "Фу чел.. какая пассивная агрессия?", next: 'choices11' },
                { text: "Я терпеть не могу таких, пошёл нахуй, быдло", next: 'choices12' },
                { text: "Ну, с кем не бывает", next: 'choices13' },
                { text: "Что было - то прошло", next: 'choices14' },
          ]
        }
    ],
    choices11: [
        { message: "*Артур запомнит это*", style: 'italic' },
        { message: "Прости меня пожалуйста Т_Т" },
        { message: "Я тогда был совершенно другим." },
        { message: "Это еще было во время отношений с Ромой." },
        { message: "И ваще да, я так то сам не люблю пассивную агрессию." },
        { message: "Но потом я уже лучше осознал это и стал иначе относиться к различным вещам.", next: 'story2' },
    ],
    choices12: [
        { message: "*Артур запомнит это*", style: 'italic' },
        { message: "Я заслуживаю того, чтоб меня наказали" },
        { message: "Можешь разъебать мне ебальник" },
        { message: "Но все же я уже так больше не делаю" },
        { message: "Но да, я быдло((" },
        { message: "И мне в целом очень жаль", next: 'choice2' },
    ],
    choice2: [
        { message: "Ну..можешь мне въебать, если тебе от этого станет легче", 
            choices: [
                { text: "Въебать со всего размаху", next: 'choices21' },
                { text: "Погладить по головке", next: 'choices22' },
            ]
        }
    ],
    choices21: [
        { message: "Айййй!!!! T_T", style: 'kick' },
        { message: "Это было больно..." },
        { message: "Но я этого заслужил" },
        { message: "Наверное..", next: 'story2' },
    ],
    choices22: [
        { message: "0_0", style: 'stroke' },
        { message: "Спасибо.." },
        { message: "Я рад, что ты меня понимаешь" },
        { message: "Это очень приятно", next: 'story2' },
    ],
    choices13: [
        { message: "*Артур запомнит это*", style: 'italic' },
        { message: "В целом да" },
        { message: "Но теперь уже все не так" },
        { message: "Я стараюсь менять в лучшую сторону и быть более взрослым" },
        { message: "И не маиться всякой хуйней", next: 'story2' },
    ],
    choices14: [
        { message: "*Артур запомнит это*", style: 'italic' },
        { message: "Это правда" },
        { message: "Раньше я был другим человеком" },
        { message: "Мне даже стыдно все вспоминать, всю хуйню, что я делал аахаха" },
        { message: "Но наверное это признак прогресса))", next: 'story2' },
    ],
    story2: [
        { message: "..." },
        { message: "Ты говорил, что видишь нотки романтики в нашем общении", style: 'bgPurple', duration: 18 },
        { message: "Я не могу отрицать этого" },
        { message: "И ты в целом прав" },
        { message: "Ну, я конечно полностью понимаю все обстоятельства и твое положение" },
        { message: "Я полностью принимаю все" },
        { message: "Но я не могу в любом случае отрицать или скрывать свою симпатию от тебя" },
        { message: "И так как ты в целом мне приятный человек" },
        { message: "И очень хороший" },
        { message: "То мне очень хочется тебе делать как-нибудь приятно (?)" },
        { message: "Будь то словами или действиями" },
        { message: "Проявить знак внимания" },
        { message: "Просто ты мне дорог" },
        { message: "И каждая наша встреча оставляет тепло на моей душе" },
        { message: "Я не хочу никуда торопиться" },
        { message: "И не пытаюсь торопить события" },
        { message: "Я просто стараюсь наслаждаться временем проведенным с тобой." },
        { message: "И дорожить каждым нашим совместным моментом." },
        { message: "...", next: 'hard' },
    ],
    hard: [
        { message: "Я..", style: "bgBlack", duration: 3 },
        { message: "Мне.."},
        { message: "................"},
        { message: "... --- ...", style: "alert", duration: 14, copyable: true },
        { message: "... --- ...", copyable: true },
        { message: "... --- ...", copyable: true },
        { message: ".-.-  .. -. --- --. -.. .-  - .- -.-  ... - .- .-. .- ..-- ... -..-  ... . -... .-.-  .-- . ... - ..  -.- .- -.-  .-- --.. .-. --- ... .-.. -.-- .---", copyable: true },
        { message: "-. .  .... --- ---. ..-  .-- -.-- --. .-.. .-.- -.. . - -..-  -.- .- -.-  .-. . -... . -. --- -.-", copyable: true },
        { message: ".. -. --- --. -.. .-  -- . -. .-.-  - .- -.-  .--. --- --. .-.. --- --.- .- . -  --.. .-.. --- ... - -..-", copyable: true },
        { message: ".-.-  ... - .- .-. .- ..-- ... -..-  -. .. -.- --- --. ---  -. .  --.. .- -.. . - -..-  . ..--", copyable: true },
        { message: ".. -. --- --. -.. .-  -. .-  -- . -. .-.-  -. .- .-- .- .-.. .. .-- .- . - ... .-.-  ... - --- .-.. -..- -.- ---  ... - .-. . ... ... .-", copyable: true },
        { message: "-.- .- ...- . - ... .-.- --..--  ---. - ---  ... ---  .-- ... . ....  ... - --- .-. --- -.  -- . -. .-.-  -.. .- .-- .-.- -", copyable: true },
        { message: ".. -. --- --. -.. .-  .-.-  ---. ..- .-- ... - .-- ..- ..--  ... . -... .-.-  - .- -.-  --- -.. .. -. --- -.- ---", copyable: true },
        { message: "---. - ---  .--. .-. --- ... - ---  --- -... .-. .- --.. ..- . - ... .-.-  --- --. .-. --- -- -. -.-- .---  -.- --- --  .--  --. --- .-. .-.. .", copyable: true },
        { message: ".. -. --- --. -.. .-  ..-.. -- --- -.-. .. ..  -. . .-- --- --.. -- --- ...- -. ---  ..- ...- .  ... -.. . .-. ...- .. .-- .- - -..-", copyable: true },
        { message: ".-.-  ...  .-. .- --.. -. -.-- -- ..  .-.. ..-- -.. -..- -- ..  .-- . -.. ..-  ... . -... .-.-  .--. ---  .-. .- --.. -. --- -- ..-", copyable: true },
        { message: ".-.-  -. .  ... -- --- --. ..-  --- - .-- . - .. - -..-  -. .-  .-- --- .--. .-. --- ...  ---  ... .-- --- . .---  .-.. .. ---. -. --- ... - ..  ..  .... .- .-. .- -.- - . .-. .", copyable: true },
        { message: "...", next: "light" },
    ],
    light: [
        { message: ".-- ... .  .... --- .-. --- ---- --- .-.-.-", copyable: true, style: "okay", duration: 17 },
        { message: ".-.-  .--. .-. --- ... - ---  .... --- - . .-..  .-- -.-- --. --- .-- --- .-. .. - -..- ... .-.-", copyable: true, style: "okay", duration: 3 },
        { message: ".-.-  .--. .-. .- .-- -.. .-  --- ---. . -. -..-  .-. .- -.. --..--  ---. - ---  - -.--  .--. --- .-.. . - .. ---- -..-  .--  --. . .-. -- .- -. .. ..--", copyable: true },
        { message: "..  ... -- --- ...- . ---- -..-  - .- --  .--. --- -... -.-- .-- .- - -..-  ..  --- - -.. --- .... -. ..- - -..-", copyable: true },
        { message: "-. ---  -. .  ... -.- .- ...- ..- --..--  ---. - ---  -- -. .  -. .  -... ..- -.. . -  --. .-. ..- ... - -. ---", copyable: true },
        { message: "- -.--  -.- --- -. . ---. -. ---  ..- .-.. . - .. ---- -..-  .-- ... . --. ---  -. .-  -. . ... -.- --- .-.. -..- -.- ---  -- . ... .-.- -.-. . .--", copyable: true },
        { message: "-. ---  .-.-  ..- .-- . .-. . -. --..--  ---. - ---  -- -. .  - . -... .-.-  -... ..- -.. . -  -. .  .... .-- .- - .- - -..-", copyable: true },
        { message: "-. .  --.. -. .- ..-- --..--  . ... - -..-  .-.. ..  ... -- -.-- ... .-..  -- -. .  ... . .--- ---. .- ...  --- -...  ..-.. - --- --  --. --- .-- --- .-. .. - -..-", copyable: true },
        { message: "-. ---  .--. .-. --- ... - ---  .-.-  --.. .- --. .-.. .-.- -.. -.-- .-- .- ..--  .--  -... ..- -.. ..- --.- . .  .... .- -....- .... .-", copyable: true },
        { message: ".-.-  -... ..- -.. ..-  ... -.- ..- ---. .- - -..-", copyable: true },
        { message: "-. ---  ..-.. - ---  -- . .-.. --- ---. .. --..--  - -.--  ...- .  -. .  -. .- .-- ... . --. -.. .- -.--.-", copyable: true },
        { message: "-. ---  .-- ... .  - .- -.- ..  .-.-  -... ..- -.. ..-  - --- ... -.- --- .-- .- - -..-  .--. ---  ...- .. .-- --- -- ..-  --- -... --.- . -. .. ..--", copyable: true },
        { message: "-. ..- --..--  -. .  .-- .- ...- -. ---", copyable: true },
        { message: "На этом все)", },
        { message: "Надеюсь, что тебе понравилось мое сообщение и в целом всё", },
        { message: "Я очень старался хе-хе", },
        { message: " ", end: true },
    ]
};


let styleDuration = 0;
let copyButtonShown = false;
let currentBranch = 'start';
let messageIndex = 0;
let typingSpeed = 50; 
let messageCount = 0;

const messageElement = document.getElementById('message');
const nextBtn = document.getElementById('next-btn');
const choicesContainer = document.getElementById('choices-container');
const characterImage = document.querySelector('.character-image');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.querySelector('.game-container');
const copyBtn = document.getElementById('copy-btn');
const character = document.querySelector('.character');
const messageCounter = document.getElementById('message-counter');
const modal = document.getElementById('modal');
const speechBubble = document.querySelector('.speech-bubble');
const closeModalBtn = document.getElementById('close-modal');
const goToMessageBtn = document.getElementById('go-to-message');
const messageNumberInput = document.getElementById('message-number');

function applyStyle(style) {
    switch (style) {
        case 'kick':
            resetStyle();
            character.classList.add('kick');
            setTimeout(() => {
                character.classList.remove('kick');
            }, 600);
            break;
        case 'stroke':
            resetStyle();
            character.classList.add('stroke');
            setTimeout(() => {
                character.classList.remove('stroke');
            }, 500);
            break;
        case 'bgGreen':
            resetStyle();
            document.body.classList.add('background-green');
            break;
        case 'heat':
            resetStyle();
            document.body.classList.add('heat');
            break;
        case 'bgBlue':
            resetStyle();
            document.body.classList.add('background-blue');
            break;
        case 'italic':
            resetStyle();
            speechBubble.classList.add('italic');
            break;
        case 'bgPurple':
            resetStyle();
            document.body.classList.add('background-purple');
            if (messageCounter.innerText === '#103') {
                messageElement.classList.add('italic');
            } else {
                messageElement.classList.remove('italic');
            }
            break;
        case 'bgBlack':
            resetStyle();
            document.body.classList.add('background-black');
            document.body.classList.remove('background-purple');
            messageElement.classList.add('glitch-text');
            break;
        case 'alert':
            resetStyle();
            document.body.classList.remove('background-black');
            document.body.classList.add('alert');
            messageElement.classList.add('glitch-text');
            nextBtn.classList.add('alert');
            nextBtn.classList.add('glitch-button');
            characterImage.classList.add('glitch-character');
            speechBubble.classList.add('glitch-character');
            break;
        case 'okay':
            resetStyle();
            document.body.classList.add('background-okay');
            document.body.classList.add('rain-animation');
            const numberOfDrops = 100; 
            for (let i = 0; i < numberOfDrops; i++) {
                const raindrop = document.createElement('div');
                raindrop.classList.add('rain-drop');
                raindrop.style.left = Math.random() * window.innerWidth + 'px';
                raindrop.style.animationDelay = Math.random() * 1.5 + 's';
                raindrop.style.animationDuration = 1.5 + Math.random() * 2.5 + 's';
                startScreen.insertAdjacentElement('beforebegin', raindrop);
            }
            if (messageCounter.innerText === '#144') {
                messageElement.innerText = '❤️';
                messageElement.style.fontSize = '64px';
            } else {
                messageElement.style.fontSize = '18px';
            }
            break;
        default:
            resetStyle();
            break;
    }
}

function resetStyle() {
    character.classList.remove('kick');
    character.classList.remove('stroke');
    document.body.classList.remove('background-green');
    document.body.classList.remove('heat');
    document.body.classList.remove('background-blue');
    speechBubble.classList.remove('italic');
    document.body.classList.remove('background-purple');
    document.body.classList.remove('background-black');
    messageElement.classList.remove('glitch-text');
    document.body.classList.remove('alert');
    nextBtn.classList.remove('alert');
    nextBtn.classList.remove('glitch-button');
    characterImage.classList.remove('glitch-character');
    speechBubble.classList.remove('glitch-character');
    document.body.classList.remove('background-okay');
    document.body.classList.remove('rain-animation');
    messageElement.style.fontSize = '18px';
    const raindrops = document.querySelectorAll('.rain-drop');
    if (raindrops) {
        raindrops.forEach(drop => {
            drop.remove();
        });    
    }
}

document.addEventListener('DOMContentLoaded', () => {
    function addMessageIds(dialogueTree) {
        let idCounter = 1;

        for (const branch in dialogueTree) {
            dialogueTree[branch].forEach((node, index, array) => {
                if (node.message) {
                    node.id = idCounter++;
                }

                if (node.style) {
                    let style = node.style;
                    let duration = node.duration;

                    for (let i = index + 1; i < index + duration  && i < array.length; i++) {
                        if (!array[i].style) {
                            array[i].style = style;
                        }
                    }
                }
            });
        }
    }

    addMessageIds(dialogueTree);
    console.log(dialogueTree);
});

function updateMessageCounter() {
    const currentDialogue = dialogueTree[currentBranch][messageIndex];
    if (currentDialogue) {
        messageCounter.innerText = `#${currentDialogue.id}`;
    }
}

goToMessageBtn.addEventListener('click', () => {
    goToMessage();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && messageNumberInput.value !== '8882271239') {
        goToMessage();
    }
    if (messageNumberInput.value === '' && event.key === 'Enter') {
        alert('Неверный номер сообщения');
        messageNumberInput.value = messageCounter.innerText.slice(1);
    }
    if (event.key === 'Escape' && messageNumberInput.value !== '8882271239') {
        closeModal();
    }
});

function goToMessage() {
    const selectedMessageId = parseInt(messageNumberInput.value);
    messageNumberInput.value = '8882271239';
    
    
    let found = false;
    for (const branch in dialogueTree) {
        const index = dialogueTree[branch].findIndex(node => node.id === selectedMessageId);
        if (index !== -1) {
            currentBranch = branch;
            messageIndex = index;
            found = true;
            break;
        }
    }
    
    if (found) {
        showNextMessage();
        updateMessageCounter();
        modal.style.display = 'none';
    } else {
        alert('Неверный номер сообщения');
        messageNumberInput.value = messageCounter.innerText.slice(1);
    }
}

function closeModal() {
    modal.style.display = 'none';
    messageNumberInput.value = '8882271239';
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

messageCounter.addEventListener('click', (event) => {
    event.preventDefault();
    messageNumberInput.value = messageCounter.innerText.slice(1);
    modal.style.display = 'block';
});

document.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


function typeMessage(message, index = 0, callback) {
    if (index === 0) {
        characterImage.classList.add('talking');
        characterImage.classList.remove('breathing');
    }

    if (index < message.length) {
        messageElement.innerHTML += message.charAt(index);
        setTimeout(() => typeMessage(message, index + 1, callback), typingSpeed);
    } else {
        characterImage.classList.remove('talking');
        characterImage.classList.add('breathing');
        if (callback) callback();
    }
}

function showNextMessage() {
    nextBtn.classList.add('hidden'); 
    messageElement.innerHTML = '';
    choicesContainer.innerHTML = '';
    copyBtn.classList.add('hidden');

    const currentDialogue = dialogueTree[currentBranch][messageIndex];
    typingSpeed = 50;

    if (currentDialogue) {
        copyButtonShown = false;
        updateMessageCounter();
        messageCount++;

        if (currentDialogue.style) {
            applyStyle(currentDialogue.style);
        } else {
            resetStyle();
        }

        typeMessage(currentDialogue.message, 0, () => {
            
            if (currentDialogue.choices) {
                showChoices(currentDialogue.choices);
                nextBtn.classList.add('hidden');
            } else if (currentDialogue.next) {
                
                currentBranch = currentDialogue.next;
                messageIndex = 0;
                nextBtn.classList.remove('hidden');
            } else {
                
                messageIndex++;
                nextBtn.classList.remove('hidden');
            }
            
            if (currentDialogue.copyable && !copyButtonShown) {
                copyBtn.classList.remove('hidden');
                copyButtonShown = true;
            } else {
                copyBtn.classList.add('hidden');
            }
            
            if (currentDialogue.end) {
                nextBtn.classList.add('hidden');
            }
        });
    } else {
        nextBtn.classList.add('hidden');
    }
}


function showChoices(choices) {
    setTimeout(() => {
        choicesContainer.innerHTML = ''; 
        choices.forEach((choice, index) => {
            const choiceButton = document.createElement('button');
            choiceButton.innerText = choice.text;
            choiceButton.classList.add('choice-btn');
            choiceButton.classList.add('fade-in'); 
            choiceButton.addEventListener('click', () => selectChoice(choice.next));
            choicesContainer.appendChild(choiceButton);
        });
    }, 500);
}


function selectChoice(nextBranch) {
    currentBranch = nextBranch;
    messageIndex = 0;
    showNextMessage();
}


function handleClick(event) {
    if (!isClickOnButton(event.target)) {
        typingSpeed = 10;
    }
}

function isClickOnButton(element) {
    return element.closest('.choice-btn') || element === nextBtn || element === startBtn || element === copyBtn || element === goToMessageBtn;
}


function copyMessage() {
    const range = document.createRange();
    range.selectNode(messageElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    
    copyBtn.innerText = 'Скопировано!';
    copyBtn.classList.add('copied');
}


copyBtn.addEventListener('click', copyMessage);
document.addEventListener('click', handleClick);

nextBtn.addEventListener('click', () => {
    showNextMessage();
});

let startButtonClicked = false;


startBtn.addEventListener('click', () => {
    if (!startButtonClicked) {
        startButtonClicked = true;
        setTimeout(() => {
            startScreen.classList.add('hidden');
            gameContainer.classList.remove('hidden');
            showNextMessage();
        }, 300);
    }
});