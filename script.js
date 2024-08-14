const button = document.getElementById("button");
const quote = document.getElementById("quote");

const situations = [
    "stuck in a time loop",
    "on a desert island",
    "accidentally cloned",
    "lost in a haunted house",
    "mistaken for a celebrity",
    "trapped in a elevator",
    "shrunk to the size of an ant",
    "in the middle of a spontaneous dance-off",
    "accidentially teleported to Mars",
    "as the only human at an alien party"
];

const actions = [
    "to dance",
    "to sing",
    "to juggle",
    "to moonwalk",
    "to speak in a noisy voice",
    "to whistle a tune",
    "to perform a magic trick",
    "to do a backflip",
    "to tell a joke",
    "to strike a pose"
];

const objects = [
    "a rubber chicken",
    "a banana peel",
    "a disco ball",
    "a spoon",
    "a sock puppets",
    "a kazoo",
    "a hula hoop",
    "a pirate hat",
    "a toy dinosaur",
    "a bubble machine"
];

button.addEventListener = ("click", () => {
    const randomSituation = situations[Math.floor(Math.random() * situations.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    const quoteText = `If you ever find yourself ${situations[randomSituation]}, just remember ${situations[randomSituation]} ${actions[randomAction]} with ${objects[randomObject]}`;
    quote.textContent = quoteText;
})

// The above code sets up a event listener on the button and when it is clicked, it randomly selects a situation, action, and object from the arrays using the Math.floor() function  and MAth.random() function, which selects a whole number between 0 and the length of the array and sets the text content of the quote element to a new quote suing the template literal.