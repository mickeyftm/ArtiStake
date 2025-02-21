export const rpc =
  process.env.NODE_ENV == "development"
    ? "http://localhost:8545"
    : "https://polygon-mainnet.infura.io/v3/7495501b681645b0b80f955d4139add9";
export const networkId = process.env.NODE_ENV == "development" ? 4 : 137;
export const subgraphUrl =
  process.env.NODE_ENV == "development"
    ? "https://api.thegraph.com/subgraphs/name/aave/aave-v2-polygon-mumbai"
    : "https://api.thegraph.com/subgraphs/name/aave/aave-v2-matic";
