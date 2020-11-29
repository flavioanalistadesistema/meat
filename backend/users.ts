
export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) { }

  match(another: User): boolean{
    return another.email !== undefined &&
           another.email === this.email &&
           another.password === this.password
  }
}

export const users = {
  "flavio@gmail.com": new User('flavio@gmail.com', 'flavio', '123456'),
  "luciana@gmail.com": new User('luciana@gmail.com', 'luciana', '123456')
}
