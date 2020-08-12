interface PaytmSignatureParams {
    [key: string]: string;
}
declare class PaytmChecksum {
    static IV: string;
    static encrypt(input: string, key: string): string;
    static decrypt(encrypted: string, key: string): string;
    static generateSignature(params: string | PaytmSignatureParams, key: string): Promise<string>;
    static verifySignature(params: string | PaytmSignatureParams, key: string, checksum: string): Promise<boolean> | boolean;
    static generateSignatureByString(params: string, key: string): Promise<string>;
    static verifySignatureByString(params: string, key: string, checksum: string): boolean;
    static generateRandomString(length: number): Promise<string>;
    static getStringByParams(params: PaytmSignatureParams): string;
    static calculateHash(params: string, salt: string): string;
    static calculateChecksum(params: string, key: string, salt: string): string;
}
export default PaytmChecksum;
