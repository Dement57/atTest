module.exports = class CommonAdmSel {
    
    waiterCond (browserType, link) {
        const linkUrl = link;
        browserType.waitUntil( () => {
            console.log('________________________________'+ browserType.getUrl(),'___' + linkUrl)
            return browserType.getUrl() !== linkUrl
    },
                {
                    timeout:20000,
                    timeoutMsg: 'NOT FOUND!!! -----WAIT CONDITION-----',
                    interval:500
                }
            )
    }

    waiter (browserType, sel) {
        const selector = sel;
        browserType.waitUntil( () => {
        // console.log(JSON.stringify(selector) + 'SELECTOR HERE **************************************************')
            return selector.isDisplayed() && selector.isClickable()
    },
                {
                    timeout:20000,
                    timeoutMsg: 'NOT FOUND!!! -----WAIT CONDITION-----',
                    interval:500
                }
            )
    }

    XOExist (browserType, sel) {
        const selector = sel;
        browserType.waitUntil( () => {
        // console.log(JSON.stringify(selector) + 'SELECTOR HERE **************************************************')
            return selector.getText().includes('x') || selector.getText().includes('o')
    },
                {
                    timeout:20000,
                    timeoutMsg: 'NOT FOUND!!! -----WAIT CONDITION-----',
                    interval:500
                }
            )
    }

    
    //COMMON SELECTORS

    //REGISTRATION FORM
    get emailInput () {return $('#user_email')}
    get passwordInput () {return $('#user_password')}
    get passwordConfirmInput () {return $('#user_password_confirmation')}
    get regBtn () {return $('input[value= "Зарегистрироваться"]')}
    get loginBtn () {return $('input[value= "Войти"]')}
    
    //LOGIN FORM
    get rememberBtn () {return $('#user_remember_me')}

    //GAME
    get Xsign () {return $('span*=x')}
    get Osign () {return $('span*=o')}
    get startGameBtn () {return $('.new-game')}
    get warnText () {return $('div*=Чтобы начать игру')}
    get yourStepText () {return $('span*=Ваш ход')}
    get opponentStepText () {return $('span*=Ход соперника')}
    get Cell1 () {return $$('.tablecell')[0]}
    get Cell12 () {return $$('.tablecell')[11]}
    get Cell23 () {return $$('.tablecell')[22]}
    get Cell34 () {return $$('.tablecell')[33]}
    get Cell45 () {return $$('.tablecell')[44]}
    get Cell11 () {return $$('.tablecell')[10]}
    get Cell21 () {return $$('.tablecell')[20]}
    get Cell31 () {return $$('.tablecell')[30]}
    get Cell41 () {return $$('.tablecell')[40]}

    //GAME IS FINISHED
    get youWonText () {return $('div*=Вы выиграли')}
    get youLoseText () {return $('div*=Вы проиграли')}
    get newGameBtn () {return $('a*=Новая игра')}
    


    

}
// module.exports = new SelfRegFlow();
