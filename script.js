// Our Love Corner ♡ — interactive features

// =========================
// ROTATING LOVE NOTES
// =========================

const notes = [
  `Even when you miss me the most, just remember...<br>
   I'm thinking about you,<br>
   I love you, and I'll always be here.<br>
   You mean the world to me, Avishka ♡`,

  `If I could teleport anywhere right now,<br>
   I'd come straight to you,<br>
   pull you into my arms,<br>
   and stay there a little longer. ♡`,

  `On your happy days, I'll celebrate with you.<br>
   On your difficult days, I'll listen.<br>
   And on the days you simply miss me,<br>
   I'll remind you how loved you are. 💗`,

  `A little reminder from your Bhavya:<br>
   you're my favourite notification,<br>
   my safest thought,<br>
   and one of the best parts of my life. ♡`,

  `Distance can keep our hands apart for now,<br>
   but it can't make you less loved.<br>
   You're in my heart in all the little moments<br>
   that make up my day. 💌`
];


// =========================
// OPEN WHEN LETTERS
// =========================

const openWhenLetters = {
  miss: {
    title: "Open when you miss me ♡",
    message: "My Shona, I wish I could be right beside you and pull you into the longest hug. Until I can, take this little reminder with you: distance doesn't change how much you mean to me. Imagine my arms around you, a kiss on your forehead, and me telling you how much I love you. One moment at a time, baby. ♡"
  },

  sad: {
    title: "Open when you're sad 🌷",
    message: "You don't have to force a smile for me, my love. You can be quiet, cry, vent, or tell me what happened whenever you're ready. Your feelings matter, and you don't have to handle every difficult moment perfectly. I'm on your side, Shona. Sending you softness, patience, and the warmest hug. ♡"
  },

  overthink: {
    title: "Open when you overthink ☁️",
    message: "Baby, let's take one slow breath together. You don't need to solve every thought this very second. Take things one step at a time, and please be gentle with yourself. If something is bothering you, we can talk about it honestly and kindly. You matter to me, and I want us to understand each other. ♡"
  },

  sleep: {
    title: "Open when you can't sleep 🌙",
    message: "Get comfy, my sleepy girl. Relax your shoulders, loosen your jaw, and take a slow breath in... then out. Imagine I'm beside you, holding your hand and whispering that you can rest now. Nothing needs to be figured out tonight. Goodnight, Shona. Sending forehead kisses and the softest cuddles. ♡"
  },

  angry: {
    title: "Open when you're upset with me 🧸",
    message: "I care about your feelings, even when we're not seeing things the same way. You deserve to be heard, not rushed. When you're ready, let's talk honestly, listen to each other, and work through it with kindness. I'm not asking you to stop feeling what you feel. I want to understand you better. ♡"
  },

  happy: {
    title: "Open when you're happy 🎀",
    message: "AHHH, look at my happy girl! I hope you let yourself enjoy this moment fully. I want to hear every detail, every tiny thing that made you smile, and celebrate with you even from far away. Your happiness is precious to me. Keep that beautiful smile, Shona. I'm cheering for you always! 💗"
  }
};


// =========================
// 100 REASONS I LOVE YOU
// =========================

const reasons = [
  "I love the way you make ordinary moments feel special.",
  "I love your smile, especially when it's completely genuine.",
  "I love hearing your voice after a long day.",
  "I love how excited you get about things you care about.",
  "I love your silly jokes, even the ones that make no sense.",
  "I love that I can be myself around you.",
  "I love the little expressions you make.",
  "I love the way you say my name.",
  "I love sharing the tiniest details of my day with you.",
  "I love that you make distance feel a little less distant.",
  "I love your kindness.",
  "I love your determination when something matters to you.",
  "I love your softness and your strength.",
  "I love the way you remember little things.",
  "I love when we laugh at the same silly thing.",
  "I love our little inside jokes.",
  "I love how a message from you can change my mood.",
  "I love the comfort of simply talking to you.",
  "I love hearing about your day, even the boring bits.",
  "I love that we keep making memories together.",
  "I love your curious mind.",
  "I love how you can make me smile without trying.",
  "I love your thoughtful side.",
  "I love when you tell me what is really on your mind.",
  "I love being someone you can talk to.",
  "I love your adorable reactions.",
  "I love how you celebrate little wins.",
  "I love your unique way of looking at things.",
  "I love how much personality you have.",
  "I love the little things that make you unmistakably you.",
  "I love planning things we can do together.",
  "I love imagining our next hug.",
  "I love how a call with you can make time fly.",
  "I love saying goodnight to you.",
  "I love getting to know new parts of you.",
  "I love how you make me want to show up with care.",
  "I love the way we can learn from each other.",
  "I love when you share a song with me.",
  "I love when something reminds me of you.",
  "I love the memories we've already made.",
  "I love the memories we haven't made yet.",
  "I love that there is always something new to learn about you.",
  "I love your little habits.",
  "I love how you can be both cute and wonderfully stubborn.",
  "I love your enthusiasm when you're telling a story.",
  "I love the way you care about the people close to you.",
  "I love when you let me comfort you.",
  "I love that we can be playful together.",
  "I love that we can have meaningful conversations too.",
  "I love your honesty.",
  "I love your courage on difficult days.",
  "I love when you trust me with your thoughts.",
  "I love how you keep trying, even when things feel hard.",
  "I love your laugh.",
  "I love your voice notes and little updates.",
  "I love the way you make me look forward to tomorrow.",
  "I love that we can make our own traditions.",
  "I love talking about dreams and plans with you.",
  "I love when we count down to seeing each other.",
  "I love how sweet a simple good morning from you feels.",
  "I love the comfort of knowing we're thinking of each other.",
  "I love the way you can turn a normal day into a memory.",
  "I love your playful side.",
  "I love your thoughtful questions.",
  "I love your little celebrations.",
  "I love how you share the things that make you happy.",
  "I love that I can cheer you on.",
  "I love watching you grow into yourself.",
  "I love the way you care about what matters to you.",
  "I love when we make each other laugh at the worst timing.",
  "I love our conversations that go on longer than planned.",
  "I love the little goodbyes before we hang up.",
  "I love the excitement of hearing from you.",
  "I love that we can apologize and try to understand each other.",
  "I love the chance to make things right when I mess up.",
  "I love discovering your favourite things.",
  "I love when you tell me a story from your childhood.",
  "I love the way you get passionate about your interests.",
  "I love that your feelings deserve space and care.",
  "I love helping you feel appreciated.",
  "I love the small rituals we've created.",
  "I love the way we can be goofy together.",
  "I love that we can miss each other and still feel connected.",
  "I love the thought of holding your hand again.",
  "I love the idea of making more little adventures together.",
  "I love that there are so many places we can explore together.",
  "I love dreaming about future dates with you.",
  "I love that we can support each other's goals.",
  "I love when you remind me of something important.",
  "I love the way you bring colour into my days.",
  "I love your sweetness when you least expect it.",
  "I love your honesty even when a conversation is difficult.",
  "I love that you are your own person, with your own dreams.",
  "I love learning how to love you in the ways that feel good to you.",
  "I love that every memory with you is uniquely ours.",
  "I love the little things I notice about you over time.",
  "I love that I get to call you my favourite person.",
  "I love you for all the little reasons I haven't even found words for yet.",
  "I love that loving you gives me another reason to smile. ♡",
  "And the hundredth reason: simply because you're you. ♡"
];


// =========================
// TEDDY'S MOOD MESSAGES
// =========================

const teddyMessages = {
  miss: "Awww, Shona. Teddy says come here for the biggest imaginary cuddle. Imagine I'm holding you close and reminding you that you're loved, even from far away. ♡",

  sad: "It's okay to have a hard day, baby. You don't have to pretend to be cheerful. Take your time, be gentle with yourself, and tell me about it when you're ready. Teddy is sitting with you. 🌷",

  attention: "EXTRA ATTENTION DELIVERY! 🧸 One forehead kiss, three cuddles, a hundred heart emojis, and a reminder that you deserve affection without having to ask twice. Come here, my love! 💗",

  happy: "Look at my sunshine! 🌈 I hope you enjoy every second of this happy feeling. Save me all the details because I want to celebrate with you. Teddy is doing a tiny happy dance for you! ♡"
};


// =========================
// DAILY LOVE MESSAGES
// =========================

const dailyMessages = [
  "Today's reminder: you are loved on the easy days and the difficult ones, too. ♡",
  "If I could send you one thing today, it would be the warmest hug and a little extra peace. 💗",
  "You don't have to be perfect to be precious to me. Just be you, Shona. 🌷",
  "Somewhere in my day, a little thought of you always makes me smile. ♡",
  "Drink some water, relax your shoulders, and remember that someone is rooting for you. 🧸",
  "I hope something small makes you smile today. You deserve those little joys. ✨",
  "Distance is part of our story right now, not the whole story. One day at a time, my love. 💌"
];


// =========================
// SHARED ELEMENTS AND STATE
// =========================

const toast = document.querySelector("#toast");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title");
const modalMessage = document.querySelector("#modal-message");
const modalTeddy = document.querySelector(".modal-teddy");

let toastTimer;
let noteIndex = 0;
let reasonIndex = -1;


// =========================
// TOAST MESSAGE
// =========================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}


// =========================
// FLOATING HEARTS
// =========================

function burstHearts(count = 14) {
  const symbols = ["♡", "♥", "💗", "💕", "✦"];

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.className = "heart-burst";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${25 + Math.random() * 50}%`;
    heart.style.top = `${45 + Math.random() * 30}%`;

    heart.style.setProperty(
      "--dx",
      `${Math.random() * 180 - 90}px`
    );

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1250);
  }
}


// =========================
// VIRTUAL HUG POPUP
// =========================

function openHug(
  message,
  title = "A big hug, just for you!"
) {
  modalTitle.textContent = title;

  modalMessage.textContent =
    message ||
    "Imagine I'm wrapping my arms around you and holding you close. You are so loved, Shona. ♡";

  modalTeddy.textContent = "🧸💗";

  modal.classList.add("hugging");
  modal.hidden = false;

  document.querySelector("#close-modal").focus();

  burstHearts(18);
}

function closeHug() {
  modal.hidden = true;
  modal.classList.remove("hugging");

  document.querySelector("#hug-button").focus();
}


// Main hug button
document.querySelector("#hug-button").addEventListener("click", () => {
  openHug();
});


// Close popup button
document.querySelector("#close-modal").addEventListener("click", () => {
  closeHug();
});


// Another hug
document.querySelector("#hug-again").addEventListener("click", () => {
  burstHearts(24);

  modalTeddy.textContent = "🤗💖";

  modalTeddy.classList.remove("hugging");
  void modalTeddy.offsetWidth;
  modalTeddy.classList.add("hugging");

  showToast("One extra-long hug, just for you! 🧸💗");
});


// Close when clicking outside the popup
modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeHug();
  }
});


// Close with Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) {
    closeHug();
  }
});


// =========================
// ROTATING LOVE NOTE
// =========================

const noteText = document.querySelector("#love-note-text");

document.querySelector("#another-note").addEventListener("click", () => {
  noteIndex = (noteIndex + 1) % notes.length;

  // These messages are authored above and include intentional <br> tags.
  noteText.innerHTML = notes[noteIndex];

  if (noteText.animate) {
    noteText.animate(
      [
        { opacity: 0.2, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 300 }
    );
  }

  showToast("A fresh little love note, just for you 💌");
});


// =========================
// ORIGINAL COMFORT TILES
// =========================

document.querySelectorAll(".comfort-tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const label = tile.querySelector("strong").textContent;

    const title =
      label === "Hug Me"
        ? "Your very own cuddle corner ♡"
        : `${label}, my love ♡`;

    openHug(tile.dataset.message, title);
  });
});


// =========================
// OPEN WHEN LETTERS
// =========================

document.querySelectorAll("[data-letter]").forEach(button => {
  button.addEventListener("click", () => {
    const letter = openWhenLetters[button.dataset.letter];

    if (letter) {
      openHug(letter.message, letter.title);
    }
  });
});


// =========================
// 100 REASONS JAR
// =========================

const jarReason = document.querySelector("#jar-reason");
const jarCount = document.querySelector("#jar-count");
const jarArt = document.querySelector(".jar-art");

document.querySelector("#reason-button").addEventListener("click", () => {
  // Cycle through all 100 reasons in order.
  reasonIndex = (reasonIndex + 1) % reasons.length;

  // Restart the shake animation.
  jarArt.classList.remove("shake");
  void jarArt.offsetWidth;
  jarArt.classList.add("shake");

  jarReason.textContent = reasons[reasonIndex];

  jarCount.textContent =
    `Reason ${reasonIndex + 1} of ${reasons.length} — picked with love ♡`;

  burstHearts(7);
});


// =========================
// TEDDY MOOD RESPONSES
// =========================

const teddy = document.querySelector("#talking-teddy");
const teddyMessage = document.querySelector("#teddy-message");

document.querySelectorAll("[data-mood]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-mood]").forEach(item => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");

    teddyMessage.textContent = teddyMessages[button.dataset.mood];

    // Restart teddy's hug animation.
    teddy.classList.remove("hugging");
    void teddy.offsetWidth;
    teddy.classList.add("hugging");

    burstHearts(8);
  });
});


// =========================
// SECRET SURPRISE
// =========================

// This is a cute reveal, not a secure password lock.
const surpriseMessages = [
  "Surprise, my Shona! If I could choose one place to be right now, it would be right beside you. I would hold your hand, look at your smile, and make one more memory with you. Until then, here is a pocket-sized reminder: I love you. ♡",

  "Your surprise coupon is redeemable for: one long hug, one forehead kiss, unlimited listening, and a date where you choose what we do. No expiry date. 💗",

  "A tiny secret: even on the busiest days, you still cross my mind in the smallest moments. You are special to me in ways that are hard to fit into one webpage. 💌"
];

document.querySelector("#surprise-button").addEventListener("click", () => {
  const message =
    surpriseMessages[
      Math.floor(Math.random() * surpriseMessages.length)
    ];

  openHug(message, "A little surprise for my Shona 🎁");

  modalTeddy.textContent = "🎁💗🧸";

  burstHearts(24);
});


// =========================
// DAILY LOVE MESSAGE
// =========================

// The message stays the same for the current local calendar day.
// It is selected from the date, so no backend is required.
function showDailyMessage() {
  const now = new Date();

  const startOfYear = new Date(now.getFullYear(), 0, 0);

  const dayNumber = Math.floor(
    (now - startOfYear) / 86400000
  );

  const index = dayNumber % dailyMessages.length;

  document.querySelector("#daily-message").textContent =
    dailyMessages[index];

  document.querySelector("#daily-date").textContent =
    now.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
}

showDailyMessage();


// =========================
// FOREVER BUTTON
// =========================

document.querySelector("#forever-button").addEventListener("click", () => {
  burstHearts(24);

  showToast("Forever and always, Shona. It's you for me. ♡");
});


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    nav.querySelectorAll("a").forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});