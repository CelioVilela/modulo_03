class Address {
  constructor (
    public address: string,
    public readonly zipCode: string,
    public number?: number
  ){}

changeZipCode(newZipCode: string): void{
  // this.zipCode = newZipCode (Não vai permitir, pois é somente leitura.)
}
}

const address1 = new Address('Rua X', '75705-050', 157)
console.log(address1.zipCode)
