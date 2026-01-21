export const globalConfig = {
    accountant: {
        mainnet: "0x1234567890123456789012345678901234567890", // Replace with the actual mainnet accountant address
        testnet: "0xD5eB1118CcA1e55023411Fd05Ece98CF5704f4ad"  // Replace with the actual testnet accountant address
    }
};

export function getAccountantAddress(isTestnet: boolean): string {
    return isTestnet ? globalConfig.accountant.testnet : globalConfig.accountant.mainnet;
}
