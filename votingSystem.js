const barUp = document.getElementById("barUp");
const barNone = document.getElementById("barNone");
const barDown = document.getElementById("barDown");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const barNumDown = document.getElementById("barNumDown");
const barNumNone = document.getElementById("barNumNone");
const barNumUp = document.getElementById("barNumUp");
var votes = 30;
var upVotes = 10;
var downVotes = 10;

const initalBarValues = () => {
  barUp.style.height = getVotesPercentage(upVotes) + "%";
  barNumUp.textContent = getVotesPercentage(upVotes) + "%";
  barNone.style.height =
    Math.floor(((votes - (upVotes + downVotes)) / votes) * 100) + "%";
  barNumNone.textContent = barNone.style.height;
  barDown.style.height = getVotesPercentage(downVotes) + "%";
  barNumDown.textContent = getVotesPercentage(upVotes) + "%";
};

const disableBtn = () => {};

const decreaseNoneBar = () => {
  barNone.style.height =
    Math.floor(votes - ((upVotes + downVotes) / votes) * 100) + "%";
};

const getVotesPercentage = (v) => Math.floor((v / votes) * 100);

btnUp.addEventListener("click", () => {
  upVotes += 1;
  let upVotePercent = getVotesPercentage(upVotes) + "%";
  barUp.style.height = upVotePercent;
  barNumUp.textContent = upVotePercent;
  btnUp.setAttribute("disabled", true);
  btnDown.removeAttribute("disabled");

  decreaseNoneBar();
});

btnDown.addEventListener("click", () => {
  downVotes += 1;
  let downVotePercent = getVotesPercentage(downVotes) + "%";
  barDown.style.height = downVotePercent;
  barNumDown.textContent = downVotePercent;
  btnDown.setAttribute("disabled", true);
  btnUp.removeAttribute("disabled");
  decreaseNoneBar();
});

initalBarValues();
