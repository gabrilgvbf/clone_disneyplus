
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection=document.querySelector('.hero')
    const alturaHero=heroSection.clientHeight

    //cabeçario acompanha scroll e some
    window.addEventListener('scroll',function(){
            const posicaoAtual=window.scrollY

            if(posicaoAtual < alturaHero){
                ocultarElementosDoHeader()
            }else{
                exibeElementosDoHeader()
            }
    })

    //seção de atrações, programação das abas 
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function (botao) {

            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            removeButtonAtivo()
            aba.classList.add('shows__list--is-active')

            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }
    //seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);

    }
})

function ocultarElementosDoHeader(){
    const header=document.querySelector('.header');
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header=document.querySelector('.header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento){
    const classe= 'faq__questions__item--is-open';
    const elementoPai= elemento.target.parentNode;

    elementoPai.classList.toggle(classe)

}

function removeButtonAtivo() {
    const button = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < button.length; i++) {
        button[i].classList.add('shows__tabs__button--is-active')

    }

}

function escondeTodasAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabContainer.length; i++) {

        tabContainer[i].classList.remove('shows__list--is-active')

    }
}