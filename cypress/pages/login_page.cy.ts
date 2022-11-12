export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton= '[type="submit"]'
    navigate(url: string){
        cy.visit(url)
    }

    enterUsername(username: string){
        // cy.get('#uname').type(username)
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password: string){
        // cy.get('#pwd').type(password)
        cy.get(this.loginPage_password).type(password)
    
    }
    clickLogin(){
        // cy.get('[type="submit"]').click()
        cy.get(this.loginPage_loginButton).click()
    }


}