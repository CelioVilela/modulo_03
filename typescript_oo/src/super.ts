export class User {
  protected name: string
  protected email: string
  private active: boolean = false
  

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
  }

  public changeName(newName: string): void {
    if (newName.length < 3){
      throw new Error('invalid name')
    }
    this.name = newName
  }

  public getName(): string {
    return this.name
  }

  public getNumber(): number {
    return 123
  }
}

class Manager extends User {
  public getName(): string {
    return `Manager: ${this.name}`
  }

  public getNumber(): number {
    return super.getNumber() + 10
  }

}
class Admin extends User {
  public getEmail(): string {
    return `Adm: ${this.email}`
  }

  public getNumber(): number {
    return 55342
  }
}

const manager1 = new Manager('Manager1', 'manager1@gmail.com', true)
console.log(manager1.getNumber())
