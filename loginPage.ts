import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';

  async login(username: string, password: string): Promise<void> {
    await this.navigateTo('https://www.saucedemo.com/');
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}