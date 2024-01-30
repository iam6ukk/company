function toggleNav() {
  const navBtn = document.querySelector(".mobile_logo");
  const gnb = document.querySelector("#gnb");

  gnb.classList.toggle("active");
  navBtn.classList.toggle("active");
}
