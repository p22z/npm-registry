const chainConfig = {
  "name": "avalanche-testnet",
  "network": "testnet",
  "type": "evm",
  "chainId": 43113,
  "message": "0x19E5941DAB908c557eD68d12043acD4e93e640D5",
  "feeToken": "0x5425890298aed601595a70ab815c96711a31bc65",
  "weth": "0xD59A1806BAa7f46d1e07A07649784fA682708794",
  "usdc": "0x5425890298aed601595a70ab815c96711a31bc65",
  "explorer": "https://testnet.snowtrace.io/",
  "featureGateway": "0x70B806CBE98953befd43c558E70AeD133f98A44B",
  "featureCCTP": "0x5EdA91d22B31A0eD5717295fCBA0C5E990Fdf1B9",
  "circleTokenMessenger": "0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0",
  "circleMessageTransmitter": "0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",
  "circleTokenMinter": "0x4ed8867f9947a5fe140c9dc1c6f207f3489f501e",
  "protoCCTPGateway": "0x3Fc48b81ddd09af30b8957CC445e449e832ECCF8",
  "isCCTPEnabled": true,
  // This is a root chain for CCTP
  "cctpLeafChains": [
    {
      "chainId": 785,
      "rootManager": "0x010bE5dc5396D0C2f03BE7055a54F895B8D5D3d2",
      "leafManager": "0x89D9e95286EE06e2a506A0b70E613207c479e0DB"
    }
  ]
};

module.exports = chainConfig;
