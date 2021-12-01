Waffle Club is an exclusive NFT platform, marketplace and DAO, built on Solana. Waffle Club aims to bridge the gap between artists and their limited exclusive NFTs, events and gifts and many more ! and YOU are invited to be part of our amazing community.

## Customized by D3vobeast
## LOCAL RUN :
```
$ git clone https://github.com/metaplex-foundation/metaplex.git
$ cd metaplex/js
$ yarn install && yarn bootstrap && yarn build
$ yarn start
```
## DEPLOY :

```
$ Packages.json
$ "deploy:gh": "yarn export && gh-pages -d ../../build/web --repo https://github.com/Dvob3east/waffleclub -t true",
$ "deploy": "cross-env ASSET_PREFIX=/waffleclub/ yarn build && yarn deploy:gh", #

$ cd packages/web && yarn deploy
```

## CLI Candy MACHINE :
```
$ cd metaplex/js/packages/cli
$npm i ts-node@latest
$ yarn install
$ npx ts-node ~/Waffle Club/Waffle Club/metaplex/js/packages/cli/src/candy-machine-cli.ts -h
$ npx ts-node ~/Waffle Club/beverse/metaplex/js/packages/cli/src/candy-machine-cli.ts generate_art_configurations ./traits
$ (optional) find ./traits -name .DS_Store -exec rm {} \;

note that this line : "seller_fee_basis_points": 0, //500= 5% royalties
in the trait configuration , the order is important for the layering
https://docs.metaplex.com/nft-standard

$ npx ts-node ~/Waffle Club/beverse/metaplex/js/packages/cli/src/candy-machine-cli.ts create_generative_art -h
$ (test) npx ts-node ~/Waffle Club/beverse/metaplex/js/packages/cli/src/candy-machine-cli.ts create_generative_art -n 10
```

## +++
```
npx browserslist@latest --update-db
```

## MINT SITE
```
solana config set --url https://api.devnet.solana.com

solana airdrop
solana balance

$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts -h
$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts upload -h
$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine
$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine

```