export class Address {  
  private address: string = '';
  private zipCode: string = '';
  private number?: number

  public setAddress(address: string): void {
    if (address.length < 3){
      throw new Error('invalid address')
    }
    this.address = address
  }

  public getAddress(): string {
    return this.address
  }
}

const address1 = new Address()
console.log(address1.getAddress())
address1.setAddress('Rua xx')
console.log(address1.getAddress())
