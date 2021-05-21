require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rescue sad unique grace deputy equal giggle'; 
let testAccounts = [
"0x2927a0f7c9121e00b5479a376e642a4c00a436c98027a2883d39644e44ae3482",
"0x6f701bdc39ed239a8ac32d6c1e57538c2ad4a9f78c74fb7fec6a1eb1a3e981a0",
"0xb81d76d44e64d33e8809dffc6ff230e05f13792629afccc6f18cf1a4cd1d235c",
"0x656dfe8ad40d6dea9a869aa9a6f7d44930abdb721cea8265c9b203c18bf75fed",
"0xc4626744f9fd9fa222444c7943247283ff7ed5771839423e6ecc40cf7eb20cac",
"0xdc0ff51edfa6b696fbf031567938f7b1ba9f31d141dc69c55fe79b1722c141b0",
"0x54dd45e96a2774e74b9c81178c56198da381f2c6d3bad564c18427955fa197ca",
"0x20fae92e7fa9da26f5040c1ad712769fae9919cacf70762a54314775a3bfddc9",
"0xe00304dc6079454bce41e061f05ca86148627df3400153494d022643d3df3f51",
"0x1daa2776a6bdb0aea70d3e6a8493d12b268810d7c876304fceaa18023515fabb"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
