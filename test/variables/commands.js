// const mainSelectors = require('../pageobjects/main_selectors')
// const URL = require('../pageobjects/registration_page')
// const mainSel = new mainSelectors;

module.exports = {
    // requestVars: mainSel,
cons: () => console.log('222***********************************'),

waiter: (sel) => {
    const selector = sel;
    browser.waitUntil( () => {
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
}
// loginAPI (){
//     const reqHost= mainSel.host;
//     const reqBody = mainSel.bodyObj;
//     console.log('HOST_______' + reqHost  + '  BODY________' + JSON.stringify(reqBody))
//     chai.request(reqHost)
//     .post('/web_api/auth/sign_in')
//     .send(reqBody)
//     .then(resp => {
//         // browser.setLocalStorage("accessToken",resp.header['access-token'])
//         // browser.setLocalStorage("client",resp.header.client)
//         // browser.setLocalStorage("uid",resp.header.uid)
//         // browser.setLocalStorage("expiry",resp.header.expiry)
//         // browser.execute('localStorage.setItem("client", resp.header.client)');
//         // browser.execute('localStorage.setItem("uid", resp.header.uid)');
//         // browser.execute('localStorage.setItem("expiry", resp.header.expiry)');
//         // browser.execute('localStorage.setItem("access-token", resp.header["access-token"])');
//         // browser.execute('localStorage.setItem("tokenType", "Bearer")');

//         browser.execute((key, value) => {
//             return this.localStorage.setItem(key, value);
//             }, 'client', resp.header.client)
//         browser.execute((key, value)=>{
//             return this.localStorage.setItem(key,value)
//         },'uid',resp.header.uid)
//         browser.execute((key, value)=>{
//             return this.localStorage.setItem(key,value)
//         },'expiry',resp.header.expiry)
//         browser.execute((key, value)=>{
//             return this.localStorage.setItem(key,value)
//         },'accessToken',resp.header['access-token'])
//         browser.execute((key, value)=>{
//             return this.localStorage.setItem(key,value)
//         },'tokenType',"Bearer")
//         browser.execute((key, value)=>{
//             console.log('ACCESS_______' + browser.localStorage.getItem(key))
//         },'access-token',"Bearer")

//         // headers.forEach((elem) => {
//         //     setItemLocalStorage(elem)
//         // })
        
//         // console.log('___________________' + resp.header['access-token'])
//         // console.log('___________________' + resp.header.uid)
//         // console.log('___________________' + resp.header.expiry)
//         // console.log('___________________' + JSON.stringify(resp.header.client))
//         // URL.open('')
//     })
// }

// module.exports = class Commands {
//     loginViaAPI() {
//         const reqHost= mainSel.host;
//         const reqBody = mainSel.bodyObj;
//         console.log('HOST_______' + reqHost  + '  BODY________' + JSON.stringify(reqBody))
//         chai.request(reqHost)
//         .post('/web_api/auth/sign_in')
//         .send(reqBody)
//         .then(resp => {
//             // browser.setLocalStorage("accessToken",resp.header['access-token'])
//             // browser.setLocalStorage("client",resp.header.client)
//             // browser.setLocalStorage("uid",resp.header.uid)
//             // browser.setLocalStorage("expiry",resp.header.expiry)
//             // browser.execute('localStorage.setItem("client", resp.header.client)');
//             // browser.execute('localStorage.setItem("uid", resp.header.uid)');
//             // browser.execute('localStorage.setItem("expiry", resp.header.expiry)');
//             // browser.execute('localStorage.setItem("access-token", resp.header["access-token"])');
//             // browser.execute('localStorage.setItem("tokenType", "Bearer")');
    
//             browser.execute((key, value) => {
//                 return this.localStorage.setItem(key, value);
//                 }, 'client', resp.header.client)
//             browser.execute((key, value)=>{
//                 return this.localStorage.setItem(key,value)
//             }, 'uid',resp.header.uid)
//             browser.execute((key, value)=>{
//                 return this.localStorage.setItem(key,value)
//             }, 'expiry',resp.header.expiry)
//             browser.execute((key, value)=>{
//                 return this.localStorage.setItem(key,value)
//             }, 'accessToken',resp.header['access-token'])
//             browser.execute((key, value)=>{
//                 return this.localStorage.setItem(key,value)
//             }, 'tokenType',"Bearer")
//             browser.execute((key, value)=>{
//                 console.log('ACCESS_______' + browser.localStorage.getItem(key))
//             }, 'access-token',"Bearer")
// })
// }}

// function test (element){
//     // const elem = element;
//     console.log(element)
//     function test2(element1) {

//     }
// }