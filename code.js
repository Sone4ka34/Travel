// при нажатии на кнопку у нас пропадает панель с куками
let cookie_wrapper = document.querySelector(".cookie_wrapper");
let cookie_wrapper__button = document.querySelector(".cookie_wrapper__button");
let wrapper_grid__main_btn = document.querySelector(".wrapper_grid__main_btn");
let wrapper_form = document.querySelector(".wrapper_form");
// let form = document.querySelector("form")
let cross = document.querySelector("i");
cookie_wrapper__button.onclick = () => {
  cookie_wrapper.style.display = "none";
};
wrapper_grid__main_btn.onclick = () => {
  wrapper_form.style.display = "block";
};
cross.onclick = () => {
  wrapper_form.classList.add("anim_gone");
  setTimeout(() => {
    wrapper_form.style.display = "none";
    wrapper_form.classList.remove("anim_gone");
  }, 900);
};
// у на есть faq quest на них клик, разворачивается ответ
// желательна плавная анимация
// нужно создать стрелочку при закрытом вопросе, при нажатии поворачивается
// let faq_quest = document.querySelector(".faq_quest") querySelector - получает только первый элемент на странице, а нам нужны все три, поэтому см ниже
let faq_quest = document.querySelectorAll(".faq_quest");
let faq_answer = document.querySelectorAll(".faq_answer");
for (let i = 0; i < faq_quest.length; i++) {
  let icon = document.createElement("i");
  // создаем элемнент
  icon.className = "fa fa-arrow-up";
  // даем класс элементу из библиотеки фонт эверсом
  faq_quest[i].append(icon);
  // добавляем иконку в раздел вопросов
}
let icons = document.querySelectorAll(".fa-arrow-up");

for (let i = 0; i < faq_quest.length; i++) {
  faq_quest[i].onclick = () => {
    faq_answer[i].classList.toggle("visible_helper");
    icons[i].classList.toggle("transform_helper");
  };
}
// toggle - если класс есть убирает, нет - добавлят
let line = document.querySelectorAll(".line");
for (let i = 0; i < line.length; i++) {
  line[i].onclick = () => {
    line[i].classList.toggle("transform_line");
  };
}
// делаем часы
let whatch = document.createElement("div");
whatch.classList.add("whatch");
document.querySelector(".header").append(whatch);
// let time = new Date();
// whatch.innerHTML = `${time.getSeconds()}`
setInterval(() => {
  let today = new Date();
  whatch.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
}, 1000);
