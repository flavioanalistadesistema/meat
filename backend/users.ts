export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) { }

  match(user: User): boolean {
    return  user !== undefined &&
            user.email === this.email &&
            user.password === this.password
  }
}

export const users: {[key: string]: User} = {
  "flavio@gmail.com": new User("flavio@gmail.com", "flavio", "flavio123"),
  "luciana@gmail.com": new User("luciana@gmail.com", "luciana", "luciana123"),
  "gabriel@gmail.com": new User("gabriel@gmail.com", "gabriel", "gabriel123"),
  "anna@gmail.com": new User("anna@gmail.com", "anna", "anna123")
}
