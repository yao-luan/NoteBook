const 文字栏 = document.querySelector(".文字栏");
const 清单 = document.querySelector(".清单");
const 按钮 = document.querySelector(".按钮");

function 新任务() {
  if (文字栏.value === "") {
    return;
  }
  const 任务 = document.createElement("li");
  任务.innerHTML = `
        <input type="checkbox" class="打钩方块">
        <label>${文字栏.value}</label>
        <button class="垃圾桶">🗑️</button>
    `;

  const 垃圾桶 = 任务.querySelector(".垃圾桶");
  const 打钩方块 = 任务.querySelector(".打钩方块");

  垃圾桶.addEventListener("click", function () {
    任务.remove();
  });

  打钩方块.addEventListener("change", function () {
    if (打钩方块.checked) {
      任务.style.textDecoration = "line-through";
      任务.style.color = "#999";
      清单.append(任务);
    } else {
      任务.style.textDecoration = "none";
      任务.style.color = "";
      清单.prepend(任务);
    }
  });

  清单.append(任务);
  文字栏.value = "";
}

按钮.addEventListener("click", 新任务);

文字栏.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    新任务();
  }
});
