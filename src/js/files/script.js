// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLock, bodyUnlock, isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {
        const targetElement = e.target


        if (targetElement.closest('.menu__item_arrow') && htmlTag.closest('.touch') && !targetElement.closest('.menu__link')) {
            targetElement.closest('.menu__item').classList.add('open')
        } else if (!targetElement.closest('.menu__item_arrow') && document.querySelector('.menu__item.open')) {
            document.querySelector('.menu__item.open').classList.remove('open')
        }

        ////////////////////////

        if (targetElement.closest('[data-search-btn]')) {
            if (htmlTag.closest(".menu-open")) {
                menuClose()
            }
            htmlTag.classList.add('search-active')
        }else if (!targetElement.closest('[data-search]') && htmlTag.closest('.search-active') || targetElement.closest('[data-search-close]')) {
            htmlTag.classList.remove('search-active')
        }

        //////////////////////

        if (targetElement.closest('[data-filter-btn]')) {
            htmlTag.classList.add('filter-open')
            bodyLock()
        }
        if (targetElement.closest('[data-filter-close]')) {
            htmlTag.classList.remove('filter-open')
            bodyUnlock()
        }


    })
}