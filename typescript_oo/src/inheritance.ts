class Address {
  constructor (
    public address: string,
    public zipCode: string,
    public number?: number
  ){}
}

export class User {
  protected name: string
  protected email: string
  private address: Address[] = []
  private active: boolean = false
  

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
  }

  public addAddress(newAddress: Address): void {
    this.address.push(newAddress)
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
    return 321
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
const admin = new Admin('Admin1', 'admin1@gmail.com')
console.log(manager1.getName())
console.log(admin.getName())

