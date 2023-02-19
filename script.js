/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btnEl = document.querySelector("#btn__element");
const clickCountEl = document.querySelector("#btn__state");

let btnClicked = Number(clickCountEl.textContent);

btnEl.addEventListener("click", () => {
  btnClicked++;
  clickCountEl.textContent = btnClicked;
});
