export function factorial(n: number) :number {
    if (n < 0) {
        throw new Error('Número negativo')
    } else if (parseInt(String(n)) !== parseFloat(String(n)) )  {
        throw new Error('Número no entero')
    }
    if(n <= 1) {
        return 1
    }
    return n * factorial (n-1)
}