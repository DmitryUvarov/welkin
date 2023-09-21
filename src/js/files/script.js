// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
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
            document.querySelector('[data-search]').classList.add('active')
        } else if (!targetElement.closest('[data-search]') && document.querySelector('[data-search].active') || targetElement.closest('[data-search-close]')) {
            document.querySelector('[data-search]').classList.remove('active')
        }

    })
}