console.log('ok');

//FAQ
document.addEventListener("DOMContentLoaded", () => {
    const accordTitles = document.querySelectorAll(".accord__title"); // Находим все заголовки аккордеонов

    accordTitles.forEach((title) => {
        title.addEventListener("click", (event) => {
            event.preventDefault(); // Отменяем переход по ссылке

            const accordItem = title.nextElementSibling; // Находим следующий блок информации
            const isActive = accordItem.style.display === "block";

            // Закрываем все открытые аккордеоны
            document.querySelectorAll(".accord__info").forEach((item) => {
                item.style.display = "none";
            });

            // Переключаем состояние текущего блока
            if (!isActive) {
                accordItem.style.display = "block";
            }
        });
    });
});


// Hire
document.addEventListener("DOMContentLoaded", () => {
    const accordTitles = document.querySelectorAll(".hicord__title"); // Находим все заголовки аккордеонов
    accordTitles.forEach((title) => {
        title.addEventListener("click", (event) => {
            event.preventDefault(); // Отменяем переход по ссылке

            const accordItem = title.nextElementSibling; // Находим следующий блок информации
            const isActive = accordItem.style.display === "block";

            // Закрываем все открытые аккордеоны
            document.querySelectorAll(".hicord__info").forEach((item) => {
                item.style.display = "none";
            });
            // Переключаем состояние текущего блока
            if (!isActive) {
                accordItem.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const selectTrigger = document.querySelector(".selector__select");
    const optionsContainer = document.querySelector(".selector__options");
    const options = document.querySelectorAll(".selector__select-option");
    const selectTitle = document.querySelector(".selector__select-title");

    // Открытие/закрытие селектора
    selectTrigger.addEventListener("click", () => {
        optionsContainer.classList.toggle("open");
        selectTrigger.classList.toggle("open");
    });

    // Выбор опции
    options.forEach(option => {
        option.addEventListener("click", () => {
            const value = option.getAttribute("data-value");
            selectTitle.textContent = option.textContent;
            optionsContainer.classList.remove("open");
            selectTrigger.classList.remove("open");
        });
    });

    // Закрытие селектора при клике вне
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".selector")) {
            optionsContainer.classList.remove("open");
            selectTrigger.classList.remove("open");
        }
    });
});


