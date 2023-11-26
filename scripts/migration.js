const fakeDB = {
  usersQuestions: [
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1280px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
      questionTitle: "What are the must-visit attractions in New York City?",
      questionAnswer:
        "In New York City, iconic attractions like Times Square, Central Park, the Statue of Liberty, and the Metropolitan Museum of Art are must-visit. Each offers a unique experience of the city.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Galleria_degli_Uffizi_Florence.jpg/1280px-Galleria_degli_Uffizi_Florence.jpg",
      questionTitle:
        "When is the best time to explore the historic sites in Rome, Italy?",
      questionAnswer:
        "The best time to explore the historic sites in Rome is during the spring (March to May) or fall (September to November) when the weather is pleasant, and the crowds are relatively smaller.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Seimon_Ishibashi.JPG/1280px-Seimon_Ishibashi.JPG",
      questionTitle: "What cultural events are popular in Tokyo, Japan?",
      questionAnswer:
        "Tokyo hosts various cultural events. Sumo wrestling tournaments, cherry blossom festivals in spring, and traditional tea ceremonies are popular among locals and tourists alike.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bangkok_Night_Wikimedia_Commons.jpg/1280px-Bangkok_Night_Wikimedia_Commons.jpg",
      questionTitle:
        "Where can one find the best street food in Bangkok, Thailand?",
      questionAnswer:
        "Bangkok is known for its vibrant street food scene. Areas like Chinatown (Yaowarat) and Khao San Road offer a variety of delicious Thai street food, from pad Thai to mango sticky rice.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
      questionTitle:
        "What are the top outdoor activities in Sydney, Australia?",
      questionAnswer:
        "Sydney offers fantastic outdoor activities. Bondi Beach is great for surfing, the Royal Botanic Garden is perfect for a leisurely stroll, and the Sydney Harbour Bridge climb provides breathtaking views of the city.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      questionTitle:
        "Which neighborhoods are known for art and culture in Paris, France?",
      questionAnswer:
        "Montmartre and Le Marais are known for their artistic and cultural vibes in Paris. You'll find art galleries, quaint cafes, and historic landmarks in these neighborhoods.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Aya_Sophia_%287144824757%29_%28cropped%29.jpg/159px-Aya_Sophia_%287144824757%29_%28cropped%29.jpg",
      questionTitle:
        "What are the traditional dishes to try in Istanbul, Turkey?",
      questionAnswer:
        "Istanbul offers delicious Turkish cuisine. Doner kebabs, Turkish delight, baklava, and mezes (appetizers) are among the traditional dishes to try in this city.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Crowded_tehran.jpg/1280px-Crowded_tehran.jpg",
      questionTitle:
        "What are the must-see landmarks and attractions in Tehran, Iran?",
      questionAnswer:
        "Tehran's Grand Bazaar, with its roots dating back over a century, stands as a cultural and commercial hub. Visitors can immerse themselves in the rich tapestry of Iranian daily life, encountering a vast array of goods from spices to Persian carpets. The labyrinthine alleys unveil traditional craftsmanship, offering an authentic glimpse into Tehran's heritage. Exploring the Grand Bazaar becomes a cultural journey, connecting visitors to the heart of Tehran's history and trade.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1280px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
      questionTitle: "What are the must-visit attractions in New York City?",
      questionAnswer:
        "In New York City, iconic attractions like Times Square, Central Park, the Statue of Liberty, and the Metropolitan Museum of Art are must-visit. Each offers a unique experience of the city.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Galleria_degli_Uffizi_Florence.jpg/1280px-Galleria_degli_Uffizi_Florence.jpg",
      questionTitle:
        "When is the best time to explore the historic sites in Rome, Italy?",
      questionAnswer:
        "The best time to explore the historic sites in Rome is during the spring (March to May) or fall (September to November) when the weather is pleasant, and the crowds are relatively smaller.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Seimon_Ishibashi.JPG/1280px-Seimon_Ishibashi.JPG",
      questionTitle: "What cultural events are popular in Tokyo, Japan?",
      questionAnswer:
        "Tokyo hosts various cultural events. Sumo wrestling tournaments, cherry blossom festivals in spring, and traditional tea ceremonies are popular among locals and tourists alike.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bangkok_Night_Wikimedia_Commons.jpg/1280px-Bangkok_Night_Wikimedia_Commons.jpg",
      questionTitle:
        "Where can one find the best street food in Bangkok, Thailand?",
      questionAnswer:
        "Bangkok is known for its vibrant street food scene. Areas like Chinatown (Yaowarat) and Khao San Road offer a variety of delicious Thai street food, from pad Thai to mango sticky rice.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/800px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
      questionTitle:
        "What are the top outdoor activities in Sydney, Australia?",
      questionAnswer:
        "Sydney offers fantastic outdoor activities. Bondi Beach is great for surfing, the Royal Botanic Garden is perfect for a leisurely stroll, and the Sydney Harbour Bridge climb provides breathtaking views of the city.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      questionTitle:
        "Which neighborhoods are known for art and culture in Paris, France?",
      questionAnswer:
        "Montmartre and Le Marais are known for their artistic and cultural vibes in Paris. You'll find art galleries, quaint cafes, and historic landmarks in these neighborhoods.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Aya_Sophia_%287144824757%29_%28cropped%29.jpg/159px-Aya_Sophia_%287144824757%29_%28cropped%29.jpg",
      questionTitle:
        "What are the traditional dishes to try in Istanbul, Turkey?",
      questionAnswer:
        "Istanbul offers delicious Turkish cuisine. Doner kebabs, Turkish delight, baklava, and mezes (appetizers) are among the traditional dishes to try in this city.",
    },
    {
      imgSource:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Crowded_tehran.jpg/1280px-Crowded_tehran.jpg",
      questionTitle:
        "What are the must-see landmarks and attractions in Tehran, Iran?",
      questionAnswer:
        "Tehran's Grand Bazaar, with its roots dating back over a century, stands as a cultural and commercial hub. Visitors can immerse themselves in the rich tapestry of Iranian daily life, encountering a vast array of goods from spices to Persian carpets. The labyrinthine alleys unveil traditional craftsmanship, offering an authentic glimpse into Tehran's heritage. Exploring the Grand Bazaar becomes a cultural journey, connecting visitors to the heart of Tehran's history and trade.",
    },
  ],
};

const $ = document;
const mobileNavbarSelector = $.querySelector(`.mobile-navbar`);
const mobileNavTogglersSelector = $.querySelectorAll(`.mobile-nav-toggler`);
const overlaySelector = $.getElementById(`overlay`);
const footerQuestionItemsWrapperSelector = $.querySelector(
  `.footer__question-items-wrapper`
);
const footerQuestionItemsPageWrapperSelector = $.querySelector(
  `.footer__question-items-page-wrapper`
);

mobileNavTogglersSelector.forEach((mobileNavToggler) => {
  mobileNavToggler.addEventListener(`click`, () => {
    if (mobileNavbarSelector.classList.contains(`mobile-nav-active`)) {
      mobileNavbarSelector.classList.remove(`mobile-nav-active`);
      overlaySelector.classList.remove(`block`);
      overlaySelector.classList.add(`hidden`);
    } else {
      mobileNavbarSelector.classList.add(`mobile-nav-active`);
      overlaySelector.classList.remove(`hidden`);
      overlaySelector.classList.add(`block`);
    }
  });
});

let numberOfShownQuestions = 3;
let currentQuestionsPage = 1;
function addQuestionsToDom(numberOfShownQuestions, currentQuestionsPage) {
  for (
    let i =
      numberOfShownQuestions * currentQuestionsPage - numberOfShownQuestions;
    i < numberOfShownQuestions * currentQuestionsPage;
    i++
  ) {
    if (!fakeDB.usersQuestions[i]) {
      break;
    }
    let userQuestion = $.createElement(`div`);
    userQuestion.innerHTML = `
    <div>
      <div>
        <img
          class="min-w-[380px] max-w-[380px] min-h-[200px] max-h-[200px] rounded-t-[20px]"
          src="${fakeDB.usersQuestions[i].imgSource}"
          alt="img"
        />
      </div>
      <div class="py-5 px-[30px]">
        <h3 class="text-purple-400 font-Montserrat-semi text-xl mb-5 line-clamp-2">
          <a href="#">Question: ${fakeDB.usersQuestions[i].questionTitle}</a>
        </h3>
        <p class="text-base text-[#434364] font-avenirNext line-clamp-6">
          Answer: ${fakeDB.usersQuestions[i].questionAnswer} 
        </p>
      </div>
    </div>
  `;

    footerQuestionItemsWrapperSelector.insertAdjacentElement(
      `beforeend`,
      userQuestion
    );
  }
}

addQuestionsToDom(numberOfShownQuestions, currentQuestionsPage);

for (let i = 0; i < Math.ceil(fakeDB.usersQuestions.length / 3); i++) {
  let pagesBtns = $.createElement(`span`);
  pagesBtns.dataset.pageControl = i + 1;
  pagesBtns.addEventListener(`click`, (e) => {
    footerQuestionItemsWrapperSelector.innerHTML = null;
    currentQuestionsPage = pagesBtns.dataset.pageControl;
    addQuestionsToDom(numberOfShownQuestions, currentQuestionsPage);
    let activePage = $.querySelectorAll(
      `.footer__question-items-page-wrapper span.bg-white`
    );
    activePage.forEach((btn) => {
      btn.classList.remove(`bg-white`);
    });
    e.target.classList.add(`bg-white`);
  });
  footerQuestionItemsPageWrapperSelector.insertAdjacentElement(
    `beforeend`,
    pagesBtns
  );
}

let defaultActivePage = $.querySelector(
  `.footer__question-items-page-wrapper span`
);

defaultActivePage.classList.add(`bg-white`);
