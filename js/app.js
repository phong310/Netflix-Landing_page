const tabItem = document.querySelectorAll(".tab-item");
const tabContentItem = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
    removeTabBorder();
    removeShow();
    // Thêm border
    this.classList.add("tab-border");
    
    // lấy các tab trong DOM
    const contentItem = document.querySelector(`#${this.id}-content`);
    contentItem.classList.add("show");
}
function removeTabBorder() {
    tabItem.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove("show"));
}

// lắng nghe event click
tabItem.forEach(item => {
    item.addEventListener("click", selectItem)
})