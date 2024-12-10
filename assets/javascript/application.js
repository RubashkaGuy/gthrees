console.log('ok');

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
