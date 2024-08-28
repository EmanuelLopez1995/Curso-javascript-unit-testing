import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "../data";

describe('GenerateReporData()',()=>{
    it('should execute logFn if provided', ()=>{
        const logger = vi.fn(); // fn crea una funcion vacia
        generateReportData(logger); // aca le mandamos la funcion 

        expect(logger).toBeCalled(); // aca preguntamos si el logger fue llamado
    })
});