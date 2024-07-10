const questions = [
    "Have you played Valorant?",
    "Did you get the Valorant Beta key?",
    "Have you played 5 Dualists in Competitive?",
    "Have you ever instalocked Reyna or Jett?",
    "Do you own a skin?",
    "Did you buy a battle pass?",
    "Do you an Agent’s progression maxed out?",
    "Do you have the Riot gun buddy?",
    "Do you own the Kingdom Knife?",
    "Have you hit Ascendant in Valorant?",
    "Have you hit Immortal in Valorant?",
    "Have you hit Radiant in Valorant?",
    "Have you ever been stuck in a rank for more than 6 months?",
    "Have you ever been stuck in a rank for more than a year?",
    "Check this box if that rank was Gold or Plat",
    "Are you over level 400?",
    "Have you spent over $800 on Valorant?",
    "Have you ever disrespected the knife 1v1?",
    "Have you ever played Valorant every single day for a month?",
    "Have you ever played Valorant for more than 6 hours straight?",
    "Have you ever rage-quit a game?",
    "Have you ever screamed at your monitor while playing Valorant?",
    "Have you ever sent a toxic message to a teammate?",
    "Have you ever yelled at a teammate in voice chat?",
    "Have you ever been muted by your teammates?",
    "Have you ever been chat-banned?",
    "Have you ever lost a friendship because of Valorant?",
    "Have you met someone on Valorant who you would consider a legitimate threat to society?",
    "Have you ever broken something out of rage while playing Valorant?",
    "Have you ever publicly shamed someone for their gameplay?",
    "Have you ever cyberbullied someone in Valorant?",
    "Have you ever sent or received a death threat to someone over a game?",
    "Have you ever added someone to your party just to flame them after a game?",
    "Have you ever neglected personal hygiene to play Valorant?",
    "Have you ever skipped school or work to play Valorant?",
    "Have you ever missed a major life event (wedding, funeral, etc.) to play Valorant?",
    "Have you ever played while drunk?",
    "Have you ever played while high?",
    "Have you ever played while on a drug harder than marijuana?,",
    "Have you ever let Valorant negatively affect your mental or physical health?,",
    "Do you play Valorant to relieve stress only to get more stressed?,",
    "Have you ever got into physical conflict because of Valorant?,",
    "Have you ever flirted with someone in-game?,",
    "Have you ever had a sexual fantasy about a Valorant character?,",
    "Have you ever role-played as a Valorant character in a sexual context?,",
    "Have you ever created/seen inappropriate fan art?,",
    "Have you ever got on Reddit for the sole purpose of viewing such fan art?",
    "Have you ever got on Twitter for the sole purpose of viewing such fan art?",
    "Have you ever…you know…to a Valorant character?",
    "Have you ever…you know… to a Valorant streamer?",
    "Have you ever…you know… to a Valorant Character more than 10 times?",
    "Have you ever walked into the op when your teammate died in the same place?",
    "Is PROD still NA’s last hope?",
    "Do you know who the humble king is",
    "Have you ever played Valorant naked?",
    "Are you the king of A-short?",
    "Have you ever sent nudes to someone you met in Valorant?",
    "Have you ever received nudes from someone you met in Valorant?",
    "Have you ever cosplayed as a Valorant character?",
    "Do you have the Valorant accent?",
    "Pissed yourself mid game cause no pp time?",
    "Have you ever thrown a game on purpose?",
    "Have you ever smurfed (used a lower-ranked account)?",
    "Have you ever seen an e-couple?",
    "Have you ever seen an “i miss her”?",
    "Have you ever hacked in Valorant?",
    "Have you ever created or distributed hacks for Valorant?",
    "Have you ever collaborated with others to rig matches?",
    "Have you ever boosted someone’s account?",
    "Have you ever had your account boosted?",
    "Have you ever sold an account or in-game items?",
    "Have you ever bought an account?",
    "Have you ever faked your gender in Valorant?",
    "Got turned on by someone faking an e-girl voice?",
    "Have you ever faked being a different age in Valorant?",
    "Have you ever lied about your Valorant achievements?",
    "Have you ever created a fake Valorant account to spy on someone?",
    "Have you ever stream-sniped a Valorant streamer?",
    "Have you ever targeted a specific player repeatedly?",
    "Are you a shotgun, odin, or operator user?",
    "Have you used any of the weapons above for the sole purpose of angering the enemy team?",
    "Have you ever t-bagged an enemy player solely because they used one of those weapons?",
    "Have you ever thought about Brimstone ulting a crowded area?",
    "Have you ever barked at Sage for a heal?",
    "Have you ever asked Jett for a revive?",
    "Have you ever acted disabled in agent select just to get someone else to dodge?",
    "Have you ever called Valorant a shit game but then play nonstop?",
    "Have you ever manipulated or lied to a moderator/admin/developer to get someone banned?",
    "Have you ever been banned from an Valorant forum or community?",
    "Have you ever been involved in a scandal in the Valorant community?",
    "Have you ever edited screenshots to inflate your performance?",
    "Have you ever watched David Goggins clips before queueing up?",
    "Have you ever bet on a Valorant game?",
    "Are you more freaky than the Dasnerth leaked messages?",
    "Do you listen to Keshi and Joji while playing?",
    "Are you a Kevin Nguyen from Socal??",
    "Have you ever duo-queued with a Tiffany Tran?",
    "Do you want to steal Kyedae from Tenz?",
    "If you are stuck in Iron do you have a disability?",
   "Was Sinatraa innocent (yes save my boy Jay Won!)",
];

function createQuestions() {
    const form = document.getElementById('purityTest');
    questions.forEach((question, index) => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'q' + (index + 1);
        checkbox.value = 'yes';
        label.appendChild(document.createTextNode(`${index + 1}. `));
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + question));
        form.appendChild(label);
    });
}

function calculateScore() {
    const form = document.getElementById('purityTest');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    const score = 100 - checkboxes.length;
    
    // Hide the questions page
    document.getElementById('questionsPage').style.display = 'none';
    
    // Show the results page
    const resultsPage = document.getElementById('resultsPage');
    resultsPage.style.display = 'block';
    
    // Display the score
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = score;
}

createQuestions();