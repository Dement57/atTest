// const URL = require('../pageobjects/login.page');3
// const { multiremote } = require('../../packages/webdriverio/build')
const Selector = require('../pageobjects/selectors.js');
const Sel = new Selector;

const moment = require('moment');
const unixMs = moment().unix();
const host = 'https://xoxotsf.herokuapp.com/'
const path = '/users/sign_up'

describe('Create a game', () => {

    it('create game', () => {
        let gameLink = '';

        //FIRST BROWSER ACTIONS
        browserA.url(`${host}${path}`);
            Sel.waiter(browserA,Sel.emailInput)
        Sel.emailInput.browserA.setValue(`auto_test${unixMs}@gmail.com`)
        Sel.passwordInput.browserA.setValue('Qwe123')
        Sel.passwordConfirmInput.browserA.setValue('Qwe123')
        Sel.regBtn.browserA.click()
            Sel.waiter(browserA,Sel.startGameBtn)
        Sel.startGameBtn.browserA.click()
            Sel.waiter(browserA,Sel.warnText)
        expect(Sel.warnText.browserA.getText()).toContain('Чтобы начать игру - отправьте ссылку другому игроку')
        gameLink = browserA.getUrl();
        console.log('********************' + gameLink)    
        // browser.debug()
            browserA.pause(2000)
        
        //SECOND BROWSER ACTIONS
        browserB.url(`${host}`)
            Sel.waiter(browserB,Sel.emailInput)
        Sel.emailInput.browserB.setValue(`auto_test1604877862@gmail.com`)
        Sel.passwordInput.browserB.setValue('Qwe123')
        Sel.loginBtn.browserB.click()
            Sel.waiter(browserA,Sel.startGameBtn)
        browserB.url(`${gameLink}`)
        
        //GAME
            Sel.waiter(browserA,Sel.yourStepText)
        expect(Sel.yourStepText.browserA.getText()).toContain('Ваш ход')
            Sel.waiter(browserB,Sel.opponentStepText)
        expect(Sel.opponentStepText.browserB.getText()).toContain('Ход соперника')
        
        Sel.Cell1.browserA.click()
            Sel.waiter(browserB,Sel.Cell1)
            Sel.waiter(browserB,Sel.yourStepText)
            // browser.pause(3000);
            Sel.XOExist(browserA, browserA.$$('.tablecell')[0].$('span*=x'))   
        console.log('_____'+ browserA.$$('.tablecell')[0].$('span*=x').getText().includes('x'))
        Sel.Cell11.browserB.click()
            Sel.waiter(browserA,Sel.Cell11)
            Sel.waiter(browserA,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[10].$('span*=o')) 
        expect(Sel.Cell11.browserA.waitForDisplayed()).toBe(true)
        Sel.Cell12.browserA.click()
            Sel.waiter(browserB,Sel.Cell12)
            Sel.waiter(browserB,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[11].$('span*=x')) 
        expect(Sel.Cell12.browserB.waitForDisplayed()).toBe(true)
        Sel.Cell21.browserB.click()
            Sel.waiter(browserA,Sel.Cell21)
            Sel.waiter(browserA,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[20].$('span*=o')) 
        expect(Sel.Cell21.browserA.waitForDisplayed()).toBe(true)
        Sel.Cell23.browserA.click()
            Sel.waiter(browserB,Sel.Cell23)
            Sel.waiter(browserB,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[22].$('span*=x'))
        expect(Sel.Cell23.browserB.waitForDisplayed()).toBe(true)
        Sel.Cell31.browserB.click()
            Sel.waiter(browserA,Sel.Cell31)
            Sel.waiter(browserA,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[30].$('span*=o'))
        expect(Sel.Cell31.browserA.waitForDisplayed()).toBe(true)
        Sel.Cell34.browserA.click()
            Sel.waiter(browserB,Sel.Cell34)
            Sel.waiter(browserB,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[33].$('span*=x'))
        expect(Sel.Cell34.browserB.waitForDisplayed()).toBe(true)
        Sel.Cell41.browserB.click()
            Sel.waiter(browserA,Sel.Cell41)
            Sel.waiter(browserA,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[40].$('span*=o'))
        expect(Sel.Cell41.browserA.waitForDisplayed()).toBe(true)
        // browser.debug()
        Sel.Cell45.browserA.click()
            Sel.waiter(browserB,Sel.Cell45)
            Sel.waiter(browserB,Sel.yourStepText)
            Sel.XOExist(browserA, browserA.$$('.tablecell')[44].$('span*=x'))
        expect(Sel.Cell45.browserB.waitForDisplayed()).toBe(true)
        
        //GAME IS FINISHED
            Sel.waiter(browserA,Sel.youWonText);
        expect(Sel.youWonText.browserA.getText()).toContain('Вы выиграли');
        expect(Sel.newGameBtn.browserA.waitForDisplayed()).toBe(true)
            Sel.waiter(browserB,Sel.youLoseText);
        expect(Sel.youLoseText.browserB.getText()).toContain('Вы проиграли');
        expect(Sel.newGameBtn.browserB.waitForDisplayed()).toBe(true)
        
        //NEW GAME
        Sel.newGameBtn.browserB.click()
        console.log('________________________________'+ gameLink, browserB.getUrl())
            Sel.waiterCond(browserB, gameLink)
            expect(Sel.warnText.browserB.getText()).toContain('Чтобы начать игру - отправьте ссылку другому игроку')
        let newgameLink = function () { return browserB.getUrl()};
        console.log('_______________________________' + newgameLink())
        browserA.url(`${newgameLink()}`)
            Sel.waiter(browserB,Sel.yourStepText)
        expect(Sel.yourStepText.browserB.getText()).toContain('Ваш ход')
            Sel.waiter(browserA,Sel.opponentStepText)
        expect(Sel.opponentStepText.browserA.getText()).toContain('Ход соперника')
    });
});


