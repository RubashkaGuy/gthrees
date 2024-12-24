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
// Селектор футера
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
            optionsContainer.classList.remove(".open");
            selectTrigger.classList.remove(".open");
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


// Меню
document.querySelectorAll('.nav__burger').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.burger').classList.toggle('bractive');
    });
});

document.querySelectorAll('.brcont__cross').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.burger').classList.toggle('bractive');
    });
});


// Селектор формы
// document.addEventListener("DOMContentLoaded", () => {
//     const selectTrigger = document.querySelector(".fdrop__up");
//     const dropdown = document.querySelector(".fdrop__bottom");
//     const options = document.querySelectorAll(".fdrop__bottom-link");
//     const selectTitle = document.querySelector(".fdrop__up-text");

//     // Открытие/закрытие селектора
//     selectTrigger.addEventListener("click", () => {
//         dropdown.classList.toggle("open");
//         selectTrigger.classList.toggle("open");
//     });

//     // Выбор опции
//     options.forEach(option => {
//         option.addEventListener("click", () => {
//             const value = option.getAttribute("data-value");
//             selectTitle.textContent = option.textContent;
//             dropdown.classList.remove("open");
//             selectTrigger.classList.remove("open");
//         });
//     });

//     // Закрытие селектора при клике вне
//     document.addEventListener("click", (e) => {
//         if (!e.target.closest(".selector")) {
//             dropdown.classList.remove("open");
//             selectTrigger.classList.remove("open");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы dropdown
    const dropdowns = document.querySelectorAll(".fdrop");
  
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".fdrop__up");
      const dropdownMenu = dropdown.querySelector(".fdrop__bottom");
      const dropdownText = dropdown.querySelector(".fdrop__up-text");
  
      // Обработчик клика на заголовок дропдауна
      trigger.addEventListener("click", () => {
        const isOpen = dropdownMenu.classList.contains("open");
        // Закрываем все открытые дропдауны
        document.querySelectorAll(".fdrop__bottom.open").forEach((menu) => {
          menu.classList.remove("open");
        });
        // Открываем/закрываем текущий дропдаун
        if (!isOpen) {
          dropdownMenu.classList.add("open");
        }
      });
  
      // Обработчик клика на элементы меню
      dropdownMenu.querySelectorAll(".fdrop__bottom-link").forEach((item) => {
        item.addEventListener("click", (e) => {
          const value = e.target.dataset.value;
          const text = e.target.textContent;
  
          // Обновляем текст заголовка дропдауна
          dropdownText.textContent = text;
  
          // Закрываем меню
          dropdownMenu.classList.remove("open");
        });
      });
    });
  
    // Закрытие дропдаунов при клике вне их
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".fdrop")) {
        document.querySelectorAll(".fdrop__bottom.open").forEach((menu) => {
          menu.classList.remove("open");
        });
      }
    });
  });
  
//2 

//no-scroll

// let scrollPosition = 0;

// function disableScroll() {
//   scrollPosition = window.scrollY;
//   document.body.style.position = "fixed";
//   document.body.style.top = `-${scrollPosition}px`;
//   document.body.style.width = "100%";
// }

// function enableScroll() {
//   document.body.style.position = "";
//   document.body.style.top = "";
//   document.body.style.width = "";
//   window.scrollTo(0, scrollPosition);
// }

// // Пример использования
// document.addEventListener("DOMContentLoaded", () => {
//   const elementWithNoScroll = document.querySelector(".no-scroll");

//   // Проверяем наличие класса и блокируем скролл
//   if (elementWithNoScroll) {
//     disableScroll();
//   }

//   // Пример динамического изменения
//   document.body.addEventListener("click", () => {
//     if (document.querySelector(".no-scroll")) {
//       disableScroll();
//     } else {
//       enableScroll();
//     }
//   });
// });


// показ краткой формы

// Получаем все элементы с классом "forbot__link"
const links = document.querySelectorAll('.forbot__link');

// Добавляем обработчик событий для каждого из них
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    // Убираем любые переходы по ссылке
    link.setAttribute('href', 'javascript:void(0);');

    // Находим элемент с классом "shortlyform"
    const shortlyform = document.querySelector('.shortlyform');

    if (shortlyform) {
      // Добавляем классы "no-scroll" и "active"
      shortlyform.classList.add('no-scroll', 'active');
    }
  });
});


// Получаем все элементы с классом "shortcont__close"
const closeButtons = document.querySelectorAll('.shortcont__close');

// Добавляем обработчик событий для каждого из них
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Находим элемент с классом "shortlyform"
    const shortlyform = document.querySelector('.shortlyform');

    if (shortlyform) {
      // Убираем классы "no-scroll" и "active"
      shortlyform.classList.remove('no-scroll', 'active');
    }
  });
});
