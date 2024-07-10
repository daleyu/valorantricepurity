const questions = [
    "Called Elon Musk your favorite entrepreneur?",
    "Read \"Zero to One\"?",
    "Referred to yourself as a contrarian?",
    "Named your pet after a programming language or tech figure?",
    "Wrote a Medium post about your startup journey?",
    "Attended a tech conference and posted about it on LinkedIn with emojis on each new line?",
    "Used Clubhouse?",
    "Called the All In Pod your favorite podcast?",
    "Used jargon like \"pivot\" and \"MVP\" in everyday conversation?",
    "Used the phrase, \"but how can we 10x it\"?",
    "Read more than 5 Paul Graham essays before building a startup?",
    "Launched a product on Product Hunt?",
    "Bought a standing desk to appear more productive?",
    "Unironically wear tech company merch?",
    "Ironically wear tech company merch?",
    "Wrote a blog post about the future of AI?",
    "Featured in Forbes \"30 under 30\"?",
    "Had a NFT as your twitter profile photo?",
    "Invested in cryptocurrency and gave investment advice to friends?",
    "Created a Slack/Discord channel for your friends that you stopped using after a day?",
    "Claimed to be \"intermittent fasting\" when you just wake up late and skip breakfast?",
    "Own an Oura ring but think it's actually cool?",
    "You run weekly retros on your own life?",
    "Installed Linux on your laptop just to seem more technical?",
    "Started using Notion for your personal to-do lists and journal?",
    "Go to a bouldering gym?",
    "Go to a bouldering gym and only talk to other tech people?",
    "Done over 100 Leetcode problems but say Leetcode says nothing about your ability?",
    "Flirted with someone using tech terms?",
    "Crushed on a micro tech celebrity or influencer?",
    "Crushed on someone you only knew through remote work?",
    "Flirted with someone in a GitHub Commit/PR message?",
    "Went to a tech meetup hoping to meet new dating prospects?",
    "Made out with someone at a tech conference after-party?",
    "Brought a date to your company office?",
    "Hooked up with someone who was into crypto?",
    "Got with a coworker after a company onsite?",
    "Sent a risky DM on Slack, Teams, LinkedIn, Zoom (work-related messaging app)?",
    "One night stand with someone you met at a Hackathon?",
    "Used a dating app to get a referral from someone?",
    "Slept with an investor on your cap table?",
    "Slept with a founder in your portfolio?",
    "Hooked up with another intern during your internship?",
    "Built an entire dating app instead of talking to someone in real life?",
    "Built something just to impress someone you're interested in?",
    "Coded an app or algorithm to optimize your dating prospects?",
    "Used your coding skills to write a flirty message in code?",
    "Unironically used the phrase \"disruptive innovation\" in a serious conversation?",
    "Pitched a startup calling it the blank for blank?",
    "Tweeted at a tech billionaire hoping for a reply?",
    "Tried to be a \"thought leader\" in tech but never got more than 10 likes on a tweet?",
    "Gave a TEDx talk in high school?",
    "Told everyone you're a \"serial entrepreneur\" after one failed venture?",
    "Lived in a hacker house and had tension over dishes?",
    "Part of a failed startup and blamed it on \"market conditions\"?",
    "Claimed that you only need to capture 0.1% of the market in a pitch deck.",
    "Read Atomic Habits but have less than Atomic Habits?",
    "Quoted Naval Ravikant more than 5 times in your life",
    "You've said you're making the world a better place but work at Meta?",
    "Called yourself a strategist when you're literally 22 years old?",
    "Claimed Harvard on your LinkedIn when you were in their extension school?",
    "SaFE agile methodology? That's it, it's not even a question.",
    "Tried bragging about your startup to impress someone at a party?",
    "Wrote a LinkedIn article about your \"thoughts on the future of tech\" and it got zero likes?",
    "Claimed you were \"early to Bitcoin\" when you actually bought in during the last bull run?",
    "Named your startup something with \"tech\" or \"labs\" to sound innovative?",
    "Used an \"AI\" or \"machine learning\" angle to attract investors, but you don't know what GPT stands for?",
    "Pitched a \"subscription box service\" for something completely unnecessary?",
    "Asked someone for advice instead of just asking them out?",
    "Created a relationship CRM to track all your social connections?",
    "Leader in an entrepreneurship org but not an actual entrepreneur?",
    "Claimed to be \"bullish\" on a technology you barely understand?",
    "Attended a \"Singles in Tech\" mixer event?",
    "Called yourself an entrepreneur in your dating app profile when you haven't sold anything to one customer/have one user?",
    "Asked your first date the same questions you'd ask a user interview?",
    "Rejected from Interact but you went to the Contrary retreat?",
    "Made a pros and cons spreadsheet for potential partners?",
    "Hating on big tech for being evil but literally working in big tech?",
    "Mentioned your total comp on a first date to impress them?",
    "Wear AllBirds shoes?",
    "Wear Uniqlo Oversized Airism T?",
    "Gave advice on how to build a product when you're literally a Product Manager who has never built something before?",
    "Love to give feedback on other people's products but can't take feedback on your own?",
    "Spent $10k on a coding bootcamp just to quit after one week and never code again?",
    "Had an Overwatch/League of Legends/Valorant phase?",
    "Have said \"I love the work ethic because you can go whenever you want or whenever your work is done\" but you leave the office at 8pm?",
    "Glorified sleeping on the floor for a company that didn't give a shit whether you lived or died?",
    "Claimed you were grinding but you were just watching Y Combinator YouTube videos?",
    "Said you were an ops generalist but you're mostly just maintaining spreadsheets?",
    "Created a slack poll to avoid making decisions?",
    "Claimed to be \"disrupting dating\" but just made another Tinder clone?",
    "Wore a Patagonia vest to a first date?",
    "Called yourself a \"digital nomad\" but just work remotely from your parents' basement?",
    "You read Thinking Fast and Slow in college but you still watch TikTok?",
    "Insisted on using Figma to plan your birthday party?",
    "You haven't actually completed a book in 2 years but have a bookshelf section on your personal site?",
    "Bought a $700 ergonomic chair but still have terrible posture?",
    "Your personal site has work, play, and about in the navbar?",
    "Can't do anything socially without making a post about how you're thinking differently and asking your friends to participate?",
    "No bedframe???"
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