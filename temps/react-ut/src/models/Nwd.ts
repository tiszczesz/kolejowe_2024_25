export class NWD {
    private readonly a: number;
    private readonly b: number;
    
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    
    public getNWD(): number {
        let x = this.a;
        let y = this.b;
    
        while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
        }
    
        return x;
    }
}