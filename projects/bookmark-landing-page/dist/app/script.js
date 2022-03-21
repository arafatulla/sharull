const hamMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navbar');
const menuOne = document.querySelector('.mobile-menu div:nth-child(1)');
const menuTwo = document.querySelector('.mobile-menu div:nth-child(2)');
const menuLast = document.querySelector('.mobile-menu div:nth-child(3)');
const circle = document.querySelector('#circle')
const text = document.querySelector('#text')
const bM = document.querySelector('#bookmark')
let menuDuration = "500ms";
let logoDuration = "300ms";

hamMenu.addEventListener('click', function (){
    // console.log(menuOne)
    if(nav.classList.contains('active')){ // menu close
        nav.classList.remove('active');
        aniM(menuOne,'r-open-menu-one', menuDuration)
        aniM(menuTwo,'r-open-menu-two', menuDuration)
        aniM(menuLast,'r-open-menu-three', menuDuration)
        aniM(circle,'r-circle-mobile-menu', logoDuration)
        aniM(text,'r-text-mobile-menu', "200ms")
        aniM(bM,'r-bm-mobile-menu', logoDuration)
    }else{ // menu open
        nav.classList.add('active');
        aniM(menuOne,'open-menu-one', menuDuration)
        aniM(menuTwo,'open-menu-two', menuDuration)
        aniM(menuLast,'open-menu-three', menuDuration)
        aniM(circle,'circle-mobile-menu', logoDuration)
        aniM(text,'text-mobile-menu', "200ms")
        aniM(bM,'bm-mobile-menu', logoDuration)
    }
})

function aniM(x, y, z){
    x.style.animationName = y;
    x.style.animationDuration = z;
}


const featureHead = document.querySelector('.features__description h3')
const featureDesc = document.querySelector('.features__description p')
const featureImg = document.querySelector('.features__img img')
const featureBtn = document.querySelector('.contain')

featureBtn.addEventListener('click', (e)=>{
    const items = featureBtn.children;
    const item = e.target;
    if(!item.classList.contains('active')){
        // item.previousElementSibling.classList.remove('active')
        // item.nextElementSibling.classList.remove('active')
        for(let i = 0; i < items.length; i++){
            if(items[i].classList.contains('active')){
                items[i].classList.remove('active')
            }
            item.classList.add('active')
        }
        if(item.dataset.name == 'simple'){
            featureHead.innerText = `Bookmark in one click`
            featureDesc.innerText = `Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.`
            featureImg.src = `./images/illustration-features-tab-1.svg`
        }
        if(item.dataset.name == 'speedy'){
            featureHead.innerText = `Intelligent search`
            featureDesc.innerText = `Our powerful search feature will help you find
            saved sites in no time at all. No need to trawl through all of your
            bookmarks.`
            featureImg.src = `./images/illustration-features-tab-2.svg`
        }
        if(item.dataset.name == 'easy'){
            featureHead.innerText = `Share your bookmarks`
            featureDesc.innerText = `Easily share your bookmarks and
            collections with others. Create a shareable link that you can send at the
            click of a button.`
            featureImg.src = `./images/illustration-features-tab-3.svg`
        }
    }
})



const question = document.querySelector('.faq__body');
const singleQ = document.querySelector('.faq__body').children;
const arrow = document.querySelector('.question img');

question.addEventListener('click', (e)=>{
    let Q = e.target;
    
    if(Q.classList.contains('active')){
        Q.classList.remove('active')        
    }else{
        for(let i = 0; i < singleQ.length; i++){
            if(singleQ[i].classList.contains('active')){
                singleQ[i].classList.remove('active');
            }
        }
        Q.classList.add('active')
    }
})

