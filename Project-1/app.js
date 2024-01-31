
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let newQuote = document.querySelector('#new-quote');

const quotes = [
    {
        quote : "My Previous name was Ahamd. consectetur adipisicing elit. Mollitia nemo delectus ducimus saepe esse, cum exercitationem vel deserunt accusamus odit eos incidunt dolorem earum.",
        person : "Ahmad Bin Waris"
    },
    {
        quote : "Current name is Bazeel. Mollitia nemo delectus ducimus saepe esse, cum exercitationem vel deserunt accusamus odit eos incidunt dolorem earum.",
        person : "Bazeel Bin Waris"
    },
    {
        quote : "imus saepe esse, cum exercitationem vel deserunt accusamus odit eos incidunt dolorem earum.",
        person : "Ubaid ur Rehman"
    },
    {
        quote : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nemo delectus ducimus saepe esse, cum exercitationem vel deserunt accusamus odit eos incidunt dolorem earum.",
        person : "Umair Sakhawat"
    },
    {
        quote : "Lorem ipsum dolor, cum exercitationem vel deserunt accusamus odit eos incidunt dolorem earum.",
        person : "Yasir Khan"
    },
    {
        quote : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nemo delectus ducimus saepe esse, cum exercitat",
        person : "Abdur Rehman"
    },
    {
        quote : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nemo delectus ducimus saepe esse, cum exercitationem vel deserunt accusamus odit eos incidunt dolorem earum.",
        person : "Arif Bhai"
    },
    {
        quote : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nemo delectus ducimus saepe esse, cum exercitationem vel deserunt accusamus odit ",
        person : "irfan Sb"
    }
];

newQuote.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})