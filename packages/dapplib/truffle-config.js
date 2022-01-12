require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain history heavy private fringe turkey'; 
let testAccounts = [
"0x31fc19b7bf5d443f198ae2e339880a66ef5b7f3f6fb90d8c0041bc0d8b994ec0",
"0x9db110d93a8c71be0f6b421ae999c3bf22008ca0a71b2cb7e866ebebed664ea1",
"0x3f775989e08ba89aa2e0ab5aa023732e2a4acaaeb63dc2d575f32ee0596eb871",
"0xf4d5e43028eb25a26909f7280db07f35f0ac661cf74836239bf9bb6042e3fd71",
"0x0e7c255b20a883b24cf1df7103f385da066ff12fce4460781909243fc5b2aa54",
"0xa3f90945f1b655a8a16696d7f70fdc44ffff8f26045bd6fff0158af299417cb6",
"0x2478c9e9880adb619a84941b0e003fe2639df639727c958994d1cebc15c33db5",
"0xe740ffeaaa2dcfdeaf0a508e532b9b0c6b60e91ec7022120a36835f1180d6507",
"0xd107bc1305bca1d9ae8b02544185cd253181953756e0702256d677e64dc9483a",
"0x961193c2e1859d983a4ca6a2baf4e6ed1e6a530393a3dd38df88baacbe9eb66a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

