import JSBI from 'jsbi'
import tokenDescriptions from './tokenDescriptions.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export const FTM_ZAPPER_ADDRESS = '0xE2379CB4c4627E5e9dF459Ce08c2342C696C4c1f'
export const AVAX_ZAPPER_ADDRESS = '0x1d0a9E2c445EB8f99767eF289832637921e6F6a5'
export const OG_MATIC_VAULT = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
export const OP_QI_ZAPPER = '0xB0aed7923f7fBEAf5bb2caa4A049A51d638Be2c9'
export const OP_THREE_STEP_ZAPPER = '0x1D864EDCA89b99580C46CEC4091103D7fb85aDCF'
export const ARBI_THREE_STEP_ZAPPER = '0x83D41737d086033A9c3acE2F1Ad9350d7d91cf02'
export const MATIC_THREE_STEP_ZAPPER = '0x652195e546A272c5112DF3c1b5fAA65591320C95'

export const ARBI_GAINS_ZAPPER = '0xeA97a391aD06a1F81C565CE29Fd4AD09c6FBE1B9'

export const MAINNET_ZAPPER = '0x5AA5079A8037f9D050D838AEFCe10bA7B8b8b001'

export const BASE_THREE_STEP_ZAPPER = '0x70dD6dEf31E7285EcA5d2341FD9136A786c29422'

export const XDAI_THREE_STEP_ZAPPER = '0xb9e1b02e3a3a58b2c48e5ea3d830007e9d6d2e0b'

export enum ChainId {
  MAINNET = 1,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 42161,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  MOONRIVER = 1285,
  CRONOS = 25,
  OPTIMISM = 10,
  SYSCOIN = 57,
  METIS = 1088,
  MOONBEAM = 1284,
  MILKOMEDA = 2001,
  KAVA = 2222,
  IOTEX = 4689,
  KLAYTN = 8217,
  CELO = 42220,
  AURORA = 1313161554,
  BOBA = 288,
  CUBE = 1818,
  CANTO = 7700,
  DOGECHAIN = 2000,
  ZKEVM = 1101,
  BASE = 8453,
  LINEA = 59144,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const INIT_CODE_HASH: string = '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.FANTOM]: '0x63B8310c5093ac917552931D8b15d5AB6945c0a6',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
  [ChainId.MATIC_TESTNET]: '0x9Fc8e50Eb08C1F463b45d1AFb9c261B0a1903006',
  [ChainId.XDAI]: '0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
  [ChainId.BSC]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.BSC_TESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.ARBITRUM]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.MOONBASE]: '0x9B7D5fa91b4747031d8E7807DaEC906F0f683E78',
  [ChainId.AVALANCHE]: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
  [ChainId.FUJI]: '0x0053957E18A0994D3526Cf879A4cA7Be88e8936A',
  [ChainId.HECO]: '0xc9a9F768ebD123A00B52e7A0E590df2e9E998707',
  [ChainId.HECO_TESTNET]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87',
  [ChainId.HARMONY]: '0xFE4980f62D708c2A84D3929859Ea226340759320',
  [ChainId.HARMONY_TESTNET]: '0xbcd3451992B923531615293Cb2b2c38ba8DE9529',
  [ChainId.MOONRIVER]: '0xe05349d6fE12602F6084550995B247a5C80C0E2C',
  [ChainId.CRONOS]: '0xA25da25BD11A26F1dd4ea195948305fb7C8cA102',
  [ChainId.OPTIMISM]: '0x142e2feac30d7fc3b61f9ee85fccad8e560154cc',
  [ChainId.SYSCOIN]: '',
  [ChainId.METIS]: '0xc39aBB6c4451089dE48Cffb013c39d3110530e5C',
  [ChainId.MOONBEAM]: '0x83e3b61886770de2F64AAcaD2724ED4f08F7f36B',
  [ChainId.MILKOMEDA]: '',
  [ChainId.KAVA]: '',
  [ChainId.IOTEX]: '0x9c8B105c94282CDB0F3ecF27e3cfA96A35c07be6',
  [ChainId.KLAYTN]: '0x5f5f0d1b9ff8b3dcace308e39b13b203354906e9',
  [ChainId.CELO]: '0xb8d0d2C1391eeB350d2Cd39EfABBaaEC297368D9',
  [ChainId.AURORA]: '0x32b50c286DEFd2932a0247b8bb940b78c063F16c',
  [ChainId.BOBA]: '0xfb91c019D9F12A0f9c23B4762fa64A34F8daDb4A',
  [ChainId.CUBE]: '',
  [ChainId.CANTO]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.DOGECHAIN]: '0xa51317d3365e8Ac0758bf3962A63892F612b942E',
  [ChainId.ZKEVM]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BASE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.LINEA]: '0xcA11bde05977b3631167028862bE2a173976CA11',
}

export const TOKEN_DESCRIPTIONS = tokenDescriptions

//Collateral Addresses
export const WFTM_ADDRESS = '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
export const STETH_ADDRESS = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'

export const METIS_WBTC_ADDRESS = '0xa5B55ab1dAF0F8e1EFc0eB1931a957fd89B918f4'

export const AAVE_ADDRESS = '0xD6DF932A45C0f255f85145f286eA0b292B21C90B'

export const ETH_CRV_ADDRESS = '0xD533a949740bb3306d119CC777fa900bA034cd52'

export const ARBI_ARB_ADDRESS = '0x912CE59144191C1204E64559FE8253a0e49E6548'

export const ETH_CBETH_ADDRESS = '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704'
export const ETH_STETH_ADDRESS = '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'
export const ETH_LDO_ADDRESS = '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32'

export const ZKEVM_WETH_ADDRESS = '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9'
export const ZKEVM_WMATIC_ADDRESS = '0xa2036f0538221a77A3937F1379699f44945018d0'

export const BASE_WETH_ADDRESS = '0x4200000000000000000000000000000000000006'
export const BASE_CBETH_ADDRESS = '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22'
export const XDAI_SDAI_ADDRESS = '0xaf204776c7245bF4147c2612BF6e5972Ee483701'

//CAM Vaults
export const CAMWMATIC_VAULT_ADDRESS = '0x88d84a85A87ED12B8f098e8953B322fF789fCD1a'
export const CAMWETH_VAULT_ADDRESS = '0x11A33631a5B5349AF3F165d2B7901A4d67e561ad'
export const CAMAAVE_VAULT_ADDRESS = '0x578375c3af7d61586c2C3A7BA87d2eEd640EFA40'
export const CAMWBTC_VAULT_ADDRESS = '0x7dDA5e1A389E0C1892CaF55940F5fcE6588a9ae0'
export const CAMDAI_VAULT_ADDRESS = '0xD2FE44055b5C874feE029119f70336447c8e8827'
//FTM Vaults
export const YVWFTM_VAULT_ADDRESS = '0x7efB260662a6FA95c1CE1092c53Ca23733202798'
export const YVWBTC_VAULT_ADDRESS = '0x571F42886C31f9b769ad243e81D06D0D144BE7B4'
export const YVYFI_VAULT_ADDRESS = '0x6d6029557a06961aCC5F81e1ffF5A474C54e32Fd'
export const YVWETH_VAULT_ADDRESS = '0x7aE52477783c4E3e5c1476Bbb29A8D029c920676'
export const YVDAI_VAULT_ADDRESS = '0x682E473FcA490B0adFA7EfE94083C1E63f28F034'
export const MOO_SCREAM_WBTC_VAULT_ADDRESS = '0x5563Cc1ee23c4b17C861418cFF16641D46E12436'
export const MOO_SCREAM_DAI_VAULT_ADDRESS = '0xBf0ff8ac03f3E0DD7d8faA9b571ebA999a854146'
export const MOO_SCREAM_ETH_VAULT_ADDRESS = '0xC1c7eF18ABC94013F6c58C6CdF9e829A48075b4e'
export const MOO_SCREAM_WFTM_VAULT_ADDRESS = '0x3609A304c6A41d87E895b9c1fd18c02ba989Ba90'
export const MOO_SCREAM_LINK_VAULT_ADDRESS = '0x8e5e4D08485673770Ab372c05f95081BE0636Fa2'
export const MOO_BIFI_FTM_VAULT_ADDRESS = '0x75D4aB6843593C111Eeb02Ff07055009c836A1EF'
//AVAX Vaults
export const MOO_WAVAX_VAULT_ADDRESS = '0xfA19c1d104F4AEfb8d5564f02B3AdCa1b515da58'
//ETH Vaults
export const YVETH_VAULT_ADDRESS = '0xEcbd32bD581e241739be1763DFE7a8fFcC844ae1'
export const YVLINK_VAULT_ADDRESS = '0x60d133c666919B54a3254E0d3F14332cB783B733'
export const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
export const LINK_ADDRESS = '0x514910771AF9Ca656af840dff83E8264EcF986CA'
export const WSTETH_VAULT_ADDRESS = '0x86f78d3cbCa0636817AD9e27a44996C738Ec4932'
export const MATIC_WSTETH_VAULT_ADDRESS = '0x3bcbAC61456c9C9582132D1493A00E318EA9C122'
export const YVWETH_OPTIMISM_VAULT_ADDRESS = '0x7198FF382b5798dAb7DC72a23C1fec9dc091893B'
export const MOO_ETH_STETH_CRV_VAULT_ADDRESS = '0xa478E708A27853848C6Bc979668fe6225FEe46Fa'
export const OP_KNC_VAULT_ADDRESS = '0xC88C8ADA95d92c149377AA660837460775Dcc6d9'
export const STMATIC_MAI_VAULT_ADDRESS = '0x9A05b116b56304F5f4B3F1D5DA4641bFfFfae6Ab'
export const GDAI_VAULT_ADDRESS = '0xF1104493eC315aF2cb52f0c19605443334928D38'
export const MATICX_MAI_VAULT_ADDRESS = '0xB1F28350539B06D5A35d016908EEf0424bd13c4b'
export const ARBI_GDAI_VAULT_ADDRESS = '0xd371281896f2F5f7A2C65F49d23A2B6ecfd594f3'
export const ARBI_KNC_VAULT_ADDRESS = '0xe47ca047Cb7E6A9AdE9405Ca68077d63424F34eC'
export const ARBI_WSTETH_VAULT_ADDRESS = '0xA864956fF961CE62C266a8563B46577d3573372E'
export const ARBI_ARB_VAULT_ADDRESS = '0x950eCEeE9E7D7366a24fC9D2Ed4C0c37d17a0Fa9'
export const ETH_YVCURVE_STETH_F_VAULT_ADDRESS = '0xD1a6F422ceFf5a39b764e340Fd1bCd46C0744F83'
export const ETH_SDSTECRV_VAULT_ADDRESS = '0x67411793C5Dcf9ABC5a8D113dDD0e596cD5ba3e7'
export const ETH_BEEFY_CONVEX_STETH_VAULT_ADDRESS = '0x86f78d3cbCa0636817AD9e27a44996C738Ec4932'
export const ETH_CRV_VAULT_ADDRESS = '0xCA3EB45FB186Ed4e75B9B22A514fF1d4abAdD123'
export const MATIC_WBTC_I_VAULT_ADDRESS = '0x169d47043CC0c94c39fa327941c56CB0344dc508'
export const MATIC_WETH_I_VAULT_ADDRESS = '0xB5B31E6A13aE856bc30b3C76B16eDaD9F432B54F'
export const ETH_CBETH_VAULT_ADDRESS = '0x4ce4C542D96Ce1872fEA4fa3fbB2E7aE31862Bad'
export const ETH_STETH_VAULT_ADDRESS = '0x5773e8953cF60F495eB3c2Db45DD753b5c4b7473'
export const ETH_LDO_VAULT_ADDRESS = '0x954ac12c339c60eafbb32213b15af3f7c7a0dec2'
export const ZKEVM_WETH_VAULT_ADDRESS = '0xdb1103a8F51823f5a2439c52C06921CDF929F6A7'
export const ZKEVM_WMATIC_VAULT_ADDRESS = '0x8AB01c5Ee3422099156ab151eecB83c095626599'

//BASE Vaults
export const BASE_WETH_VAULT_ADDRESS = '0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6'
export const BASE_CBETH_VAULT_ADDRESS = '0x7333fd58d8D73a8e5FC1a16C8037ADa4f580FA2B'

//XDAI Vaults
export const XDAI_SDAI_VAULT_ADDRESS = '0x79AFAD49e968E7bEA7a23933E294a94E33E60158'
