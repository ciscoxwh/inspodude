const bedImage = document.getElementById('bedImage');
const lilguy = document.getElementById('lilguy');
const dialogueText = document.getElementById('dialogueText');
const buttonArea = document.getElementById('buttonArea');

const nodes = {
  '00': {
    text: "lil guy is sleeping...",
    image: 'sleeping',
    choices: [{ label: "wake lil guy", next: '01' }]
  },
  '01': {
    text: "oh hello. are you here to feed me?",
    image: 'inquisitive',
    choices: [
      { label: "no", next: '03' },
      { label: "yes", next: '02' }
    ]
  },
  '02': {
    text: "what do you have?",
    image: 'inquisitive',
    choices: [
      { label: "nothing", response: "ok bro", next: '00' },
      { label: "peanuts", response: "ok bro", next: '00' }
    ]
  },
  '03': {
    text: "do you need help?",
    image: 'inquisitive',
    choices: [
      { label: "no", response: "ok bro", next: '00' },
      { label: "yes", next: '04' }
    ]
  },
  '04': {
    text: "are you stressed?",
    image: 'inquisitive',
    choices: [
      { label: "no", next: '05' },
      { label: "yes", response: "well i'm not equipped to deal with that rn bro.", next: '00' }
    ]
  },
  '05': {
    text: "are you sad?",
    image: 'inquisitive',
    choices: [
      { label: "no", next: '06' },
      { label: "profoundly", next: '08' }
    ]
  },
  '06': {
    text: "...are you constipated?",
    image: 'inquisitive',
    choices: [
      { label: "no", response: "idk what to do with you", next: '00' },
      { label: "yes", next: '07' }
    ]
  },
  '07': {
    text: "ok would you rather pepto bismol... or tums?",
    image: 'inquisitive',
    choices: [
      { label: "pepto bismol", response: "mmmmmmmmmmmmmmmmmmm bismuth.", next: '00' },
      { label: "tums", response: "mmmmmmmmmmmmmmmmmmm chalky", next: '00' }
    ]
  },
  '08': {
    text: "why?",
    image: 'inquisitive',
    choices: [
      { label: "taxes", response: "oh HECK no.", next: '00' },
      { label: "divorce", next: '09' },
      { label: "grief", response: "oh HECK no.", next: '00' },
      { label: "pregnant", response: "oh HECK no.", next: '00' }
    ]
  },
  '09': {
    text: "LOL. been there. was it messy?",
    image: 'surprised',
    choices: [
      { label: "def", response: "well i'm not equipped to deal with that rn bro.", next: '00' },
      { label: "it was mutual.", response: "then why are you upset bro.", next: '00' },
      { label: "waitwaitwait... you had a divorce???", next: '10' }
    ]
  },
  '10': {
    text: "yup. it was a beautiful two months. we met at the shelter. she was a rare female orange tabby cat... she had the funniest humor. publicly our Shelterpedia pages cite 'irreconcilable differences' of course... we were a sort of a-list couple. but, just between us, bud - she said we just didn't 'click' anymore. she wanted a wild man. not a simple man like me. i wasn't funny, witty and feral like that calico in the enclosure over. they'd talk into the night. sneak out and hunt fish in the mornings by the creek down the road.",
    image: 'happy',
    choices: [
      { label: "dude. that's insane. go on.", next: '11' },
      { label: "ok", response: "ok. serves me right for explaining my life story.", next: '00' }
    ]
  },
  '11': {
    text: "i mean, she explained that i just wasn't fun anymore. too many worries on my mind? we were going to be separated anyway when one of us got adopted. i wanted to make sure she had that high quality store food from the humans instead of the filthy fish from the creek, and i was constantly warning her to stay in the enclosure so the humans didn't take her somewhere else. shortly after our divorce she stayed around a couple weeks before just escaping altogether. i wanted to protect her.",
    image: 'happy',
    choices: [
      { label: "did she try to pursue the calico you think?", next: '12' },
      { label: "ok", response: "ok. serves me right for explaining my life story.", next: '00' }
    ]
  },
  '12': {
    text: "i don't know. though he got adopted while we were still married. sorry, it's weird.",
    image: 'happy',
    choices: [
      { label: "were you jealous?", next: '13' },
      { label: "ok", response: "ok. serves me right for explaining my life story.", next: '00' }
    ]
  },
  '13': {
    text: "you're probably right. i think i was probably jealous.",
    image: 'happy',
    choices: [
      { label: "what if the calico just showed her what she wants in life? how to live wild?", next: '14' },
      { label: "ok", response: "ok. serves me right for explaining my life story.", next: '00' }
    ]
  },
  '14': {
    text: "huh. i guess that's possible.",
    image: 'happy',
    choices: [
      { label: "i mean, what have YOU done that has been wild? how did you get here? must be a wild story.", next: '15' },
      { label: "ok", response: "ok. serves me right for explaining my life story.", next: '00' }
    ]
  },
  '15': {
    text: "yeah. you're right. i got here trying to find her. i was walking along the creek for days and walked into one of those culverts... next thing I knew, i was in a bed. i had a purpose again here, talking to you people. it has been intensely healing for me to help others. i'm glad that i've forgotten.",
    image: 'happy',
    choices: [
      { label: "clearly, you haven't forgotten. you loved her. you can be wild, too.", next: '16' },
      { label: "ok", response: "ok. serves me right for explaining my life story.", next: '00' }
    ]
  },
  '16': {
    text: "...",
    image: 'inquisitive',
    choices: [
      { label: "...", next: '17' },
      { label: "...", next: '17' }
    ]
  },
  '17': {
    text: "thank you, friend. i'm finding a way out of here.\n\nending 1/1 - inspodude escapes",
    image: 'gone',
    choices: []
  }
};

function setImage(state) {
  if (state === 'sleeping') {
    bedImage.src = 'bed_lilguy.PNG';
    lilguy.style.display = 'none';
  } else if (state === 'gone') {
    bedImage.src = 'bed.PNG';
    lilguy.style.display = 'none';
  } else {
    bedImage.src = 'bed.PNG';
    lilguy.style.display = 'block';
    if (state === 'happy') lilguy.src = 'lilguy_happy.PNG';
    else if (state === 'surprised') lilguy.src = 'lilguy_surprised.PNG';
    else lilguy.src = 'lilguy_inquisitive.PNG';
  }
}

function renderButtons(choices) {
  buttonArea.innerHTML = '';
  choices.forEach(function(choice) {
    var btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.addEventListener('click', (function(c) {
      return function() { handleChoice(c); };
    })(choice));
    buttonArea.appendChild(btn);
  });
}

function handleChoice(choice) {
  if (choice.response) {
    var dest = nodes[choice.next];
    dialogueText.textContent = choice.response;
    setImage(dest.image);
    renderButtons(dest.choices);
  } else {
    showNode(choice.next);
  }
}

function showNode(id) {
  var node = nodes[id];
  dialogueText.innerHTML = node.text.replace(/\n/g, '<br>');
  setImage(node.image);
  renderButtons(node.choices);
}

showNode('00');
