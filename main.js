// deleted task form tasks list
taskList = document.querySelector(".page .wrapper .tasks");
function deletedTask() {
  deletedIcon = document.querySelectorAll(".task-rows i");
  deletedIcon.forEach((element) => {
    element.onclick = function (element) {
      element.target.parentElement.classList.toggle("deleted");
      window.localStorage.tasks = JSON.stringify(taskList.innerHTML);
    };
  });
}
window.onload = function () {
  if (localStorage.tasks) {
    taskList.innerHTML = JSON.parse(localStorage.tasks);
  }
  deletedTask();
};
// progress
let progress = document.querySelectorAll(".project .info .prog span");
progress.forEach((element) => {
  console.log(element.style.width);

  if (element.style.width == "100%") {
    element.style.background = "#22c55e";
  } else {
    if (element.style.width <= "50%") {
      element.style.background = "#f44336";
    } else {
      element.style.background = "#0075ff";
    }
  }
});

// remove friend
friendsPage = document.querySelector(".friends-page");
window.onload = function () {
  if (sessionStorage.friendList) {
    friendsPage.innerHTML = JSON.parse(sessionStorage.friendList);
  }
  friends = document.querySelectorAll(".friend .info div .remove");
  friends.forEach((element) => {
    element.onclick = function () {
      const div = element.parentElement;
      const info = div.parentElement;
      info.parentElement.classList.add("d-n");
      sessionStorage.friendList = JSON.stringify(friendsPage.innerHTML);
    };
  });
};
