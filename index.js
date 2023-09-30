let header = document.createElement('header')

let delivery = document.createElement('div')
let info = document.createElement('div')
let last = document.createElement('div')

// let delivery = document.createElement('div')
let delivery_container = document.createElement('div')
let deliv = document.createElement('div')
let deliv_img = document.createElement('img')

// let info = document.createElement('div')
let info_container = document.createElement('div')
let info_box = document.createElement('div')



let info_left = document.createElement('div')
let btns = document.createElement('div')
for (let i=0; i<=2; i++){
    let btns_button = document.createElement('button')
    if(i ==0) {
        btns_button.classList.add('btn_white')
        btns_button.innerHTML = "0% РАСРОЧКА"
    } else if(i ==2) {
        btns_button.classList.add('btn_white')
        btns_button.innerHTML = "СКИДКИ"
    } 
    else{
        btns_button.classList.add('btn_red')
        btns_button.innerHTML = "РОЗЫГРЫШИ"
    }

    btns.append(btns_button)
}
let info_left_a = document.createElement('a')


let info_right = document.createElement('div')
let info_right_a = document.createElement('a')
let info_right_button = document.createElement('button')

let lang = document.createElement('div')
for (let i=0; i<=2; i++){
    let lang_p = document.createElement('p')
    if(i==0) {
        lang_p.innerHTML = "Ўзб"
    } else if(i==1) {
        lang_p.innerHTML = "O'z"
    } else{
        lang_p.innerHTML = "Рус"
    }
    lang.append(lang_p)
}


// let last = document.createElement('div')
let last_container = document.createElement('div')
let search = document.createElement('div')
let last_img = document.createElement('img')



let center = document.createElement('div')
let center_button = document.createElement('button')
let center_button_img = document.createElement('img')
let center_button_form = document.createElement('form')
let form_input = document.createElement('input')
let form_button = document.createElement('button')
let form_button_img = document.createElement('img')



let search_right = document.createElement('div')
search_right.classList.add('search_right')
for(let i=0; i<=3; i++){
    let search_box = document.createElement('div')
    let search_box_img = document.createElement('img')
    let search_box_p = document.createElement('p')

    search_box.classList.add('search_box')
    search_box_p.classList.add('search_box_p')
    search_box_img.alt = ""

    if(i==0){
        search_box_img.src = "./img/1491254488-chartflexibledatestatstatistics_82950.png"
        search_box_p.innerHTML = "статистика"
    } else if(i==1){
        search_box_img.src = "./img/like_favorite_heart_5759.png"
        search_box_p.innerHTML = "избранные"
    } else if(i==2) {
        search_box_img.src = "./img/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png"
        search_box_p.innerHTML = "корзина"
    } else if(i==3) {
        search_box_img.src = "./img/account_avatar_face_man_people_profile_user_icon_123197.png"
        search_box_p.innerHTML = "войти"
    }

    search_right.append(search_box)
    search_box.append(search_box_img,search_box_p)
}




delivery.classList.add('delivery')
delivery_container.classList.add('container')
deliv.classList.add('deliv')
deliv_img.src = "./img/i1HOOVuO0BF3bM0Y4XLKZviCCNiyg2OY5y6cOIMs.png"
deliv_img.alt = ""

info.classList.add('info')
info_container.classList.add('container')
info_box.classList.add('info_box')

info_left.classList.add('info_left')
btns.classList.add('btns')
info_left_a.href = "#"


info_right.classList.add('info_right')
info_left_a.href = "#"
info_left_a.innerHTML = "+998 (71) 202 202 1"
info_right_button.classList.add('btn_red')
info_right_button.innerHTML = "Продовайте на olcha"
lang.classList.add('lang')


last.classList.add('last')
last_container.classList.add('container')
search.classList.add('search')
last_img.src = "./img/logo-red.e48e0ab8.svg"
last_img.alt = ""
center.classList.add('center')
center_button.classList.add('catalog')
center_button_img.src = "./img/menuoptions_85724.png"
center_button_img.alt = ""
center_button.innerHTML = "КАТАЛОГ"
center_button_form.classList.add('form')
form_input.type = "text"
form_input.placeholder = "поиск по каталогу"
form_button_img.src = "./img/search.2a234c15.svg"
form_button_img.alt = ""



header.append(delivery, info, last)
delivery.append(delivery_container)
delivery_container.append(deliv)
deliv.append(deliv_img)

info.append(info_container)
info_container.append(info_box)
info_box.append(info_left, info_right)
info_left.append(btns, info_left_a)
info_right.append(info_right_a, info_right_button, lang)


last.append(last_container)
last_container.append(search)
search.append(last_img, center, search_right)
center.append(center_button, center_button_form)
center_button.append(center_button_img)
center_button_form.append(form_input, form_button)
form_button.append(form_button_img)





// js2

let section = document.createElement('section')
let section_container = document.createElement('div')
let goods = document.createElement('div')
let box = document.createElement('div')
let box_top = document.createElement('div')
let box_center = document.createElement('div')
let box_bottom = document.createElement('div')
let box_top_button = document.createElement('button')
let box_top_img = document.createElement('img')
let social = document.createElement('div')
let social_img_one = document.createElement('img')
let social_img_two = document.createElement('img')
let box_center_h4 = document.createElement('h4')
let box_center_p = document.createElement('p')
let box_center_h5 = document.createElement('h5')
let pay = document.createElement('div')
let pay_p = document.createElement('p')
let basket_btn = document.createElement('button')
let basket_btn_img = document.createElement('img')
let install_btn = document.createElement('button')

section.classList.add('four')
section_container.classList.add('container')
goods.classList.add('goods')
box.classList.add('box')
box_top.classList.add('box_top')
box_top_button.classList.add('sale')
box_top_button.innerHTML = "-12%"
box_top_img.src = "./img/noutbuk-lenovo-v15-igl-n4020-4256-gb-ssd-156-hd-185052-0 (1).jpeg"
box_top_img.alt = ""
social.classList.add('social')
social_img_one.classList.add('social_img_one')
social_img_one.src = "./img/like_favorite_heart_5759.png"
social_img_one.alt = ""
social_img_two.classList.add('social_img_two')
social_img_two.src = "./img/1491254488-chartflexibledatestatstatistics_82950.png"
social_img_two.alt = ""
box_center.classList.add('box_center')
box_center_h4.innerHTML = "Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15.6 HD from "
box_center_p.classList.add('old_price')
box_center_p.innerHTML = "2 957 000 сум"
box_center_h5.innerHTML = "2 581 040 сум"
pay.classList.add('pay')
pay_p.innerHTML = "337 000 сум x 12 мес"
box_bottom.classList.add('box_bottom')
basket_btn.classList.add('basket')
basket_btn_img.src = "./img/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png"
install_btn.classList.add('install')
install_btn.innerHTML = "В РАСРОЧКУ"

section.append(section_container)
section_container.append(goods)
goods.append(box)
box.append(box_top, box_center, box_bottom)
box_top.append(box_top_button, box_top_img, social)
social.append(social_img_one, social_img_two)
box_center.append(box_center_h4, box_center_p, box_center_h5, pay)
pay.append(pay_p)
box_bottom.append(basket_btn, install_btn)
basket_btn.append(basket_btn_img)

document.body.prepend(header)
document.body.appendChild(section)