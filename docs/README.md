WaffleClub repo is an exclusive NFT platform, marketplace and DAO, built on Solana that allows:

- **Creating/Minting** Non-Fungible Tokens;
- **Starting** A variety of auctions for primary/secondary sales;
- and **Visualizing** NFTs in a standard way across wallets and applications.


Inspired by next candy machine & metaplex and customized by D3v0.

Waffle Club aims to bridge the gap between artists and their limited exclusive NFTs, events and gifts and many more ! and YOU are invited to be part of our amazing community.

## LOCAL RUN :
```
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
$ npx ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts -h
$ npx ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts generate_art_configurations ./traits
$ (optional) find ./traits -name .DS_Store -exec rm {} \;

note that this line : "seller_fee_basis_points": 0, //500= 5% royalties
in the trait configuration , the order is important for the layering
https://docs.metaplex.com/nft-standard

$ npx ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts create_generative_art -h
$ (test) npx ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts create_generative_art -n 10
```

## +++
```
npx browserslist@latest --update-db
```

## MINT SITE

```
$ cd next-candy-machine
$ yarn install
$ yarn dev

(yarn buid/start)

solana config set --url https://api.devnet.solana.com

solana airdrop
solana balance

$ npx ts-node ~/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts -h
$ npx ts-node ~/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts upload -h

npx ts-node ~/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./assets -e devnet -k /home/devobeast/.config/solana/devnet.json -n 10

$ npx ts-node ~/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine -h

$ npx ts-node ~/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine -e devnet -k /home/devobeast/.config/solana/devnet.json -s 8tSu23wvg7viRTYfAkkQQ1iczqxHWVk7WuJEgfEQ8AsB -p 2

$ npx ts-node ~/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine -e devnet -k .config/solana/devnet.json -p 1 -d "13 Dec 2021 00:00:00 CET"

```