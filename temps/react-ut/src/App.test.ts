import { describe, it, expect } from 'vitest';
import { NWD } from './models/Nwd'; // Zakładam, że klasa NWD jest w pliku NWD.ts w tym samym katalogu


describe('Application Tests', () => {
    it('hello world!', () => {
        expect(1 + 1).toBe(2);
    });
});

describe('NWD', () => {
    it('should calculate NWD of 12 and 8', () => {
        const nwd = new NWD(12, 8);
        expect(nwd.getNWD()).toBe(4);
    });

    it('should calculate NWD of 8 and 12', () => {
        const nwd = new NWD(8, 12);
        expect(nwd.getNWD()).toBe(4);
    });

    it('should calculate NWD of 45 and 0', () => {
        const nwd = new NWD(45, 0);
        expect(nwd.getNWD()).toBe(45);
    });
});
