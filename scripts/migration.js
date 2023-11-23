const fakeDB = {
  usersQuestions: [
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle: "Q: What is the Tax system like in Cyprus?",
      questionAnswer:
        "Answer: With one of the lowest corporate tax rates (12.5%) in the European Union, the tax system is attractive to foreign investors. Neither succession taxes nor gains from the disposal of securities are subject to tax.",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle: "How long does it take to buy a property in Cyprus?",
      questionAnswer:
        "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timescale may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle:
        "Q: How long does it take to become a permanent resident in Cyprus?",
      questionAnswer:
        "Answer: While a residency card can be obtained within two months through the fast-track process, a permanent resident of Cyprus can apply for Cyprus Citizenship after completing 5 years (1825 days) of legal stay in Cyprus, according to the naturalization scheme based on years of residence (M127). Once acquired, permanent residency in Cyprus is valid for life. ",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle: "How long does it take to buy a property in Cyprus?",
      questionAnswer:
        "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timescale may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle: "Q: What is the Tax system like in Cyprus?",
      questionAnswer:
        "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timescale may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle:
        "Q: How long does it take to become a permanent resident in Cyprus?",
      questionAnswer:
        "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timescale may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle: "Q: What is the Tax system like in Cyprus?",
      questionAnswer:
        "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timescale may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
    },
    {
      imgSource: "./files/imgs/migration_imgs/footer_texas.png",
      questionTitle: "Q: What is the Tax system like in Cyprus?",
      questionAnswer:
        "Answer: The whole procedure for pur-chasing property in Cyprus should only take about 1-3 months. Of course, each situation is different and this timescale may vary from one individual to another. Our relocation services aim to simplify this process by providing guidance and assistance from start to finish. ",
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
