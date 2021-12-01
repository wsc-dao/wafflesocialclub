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

npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./assets -e devnet -k /home/devobeast/.config/solana/devnet.json -n 10

Beginning the upload for 10 (png+json) pairs
started at: 1638373582362
wallet public key: 2L5DqBrc63qeUB5qeCEsAHsUDoY2c9nKppyyEwMnkgdz
Processing file: 0, 0.png
initializing config
initialized config for a candy machine with publickey: 2qs1WLGUVYUddXy4tkXLqpKNg4XY2QQFVBoDotHhJWoJ
Processing file: 1, 1.png
Processing file: 2, 2.png
Processing file: 3, 3.png
Processing file: 4, 4.png
Processing file: 5, 5.png
Processing file: 6, 6.png
Processing file: 7, 7.png
Processing file: 8, 8.png
Processing file: 9, 9.png
Writing indices 0-9
Done. Successful = true.
ended at: 2021-12-01T15:47:31.056Z. time taken: 00:01:08

8tSu23wvg7viRTYfAkkQQ1iczqxHWVk7WuJEgfEQ8AsB

initialized config for a candy machine with publickey: 2qs1WLGUVYUddXy4tkXLqpKNg4XY2QQFVBoDotHhJWoJ

$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine -h

$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine -e devnet -k /home/devobeast/.config/solana/devnet.json -s 8tSu23wvg7viRTYfAkkQQ1iczqxHWVk7WuJEgfEQ8AsB -p 2

create_candy_machine finished. candy machine pubkey: 7wrD1e2ApEdhVjkgFH2pGZg5m3S1gQUyjuYCNVaCK9Mp

$ npx ts-node ~/belgaverse/waffleclub/metaplex/js/packages/cli/src/candy-machine-cli.ts update_candy_machine -e devnet -k /home/devobeast/.config/solana/devnet.json -p 1 -d "13 Dec 2021 00:00:00 CET"



initialized config for a candy machine with publickey: 8tSu23wvg7viRTYfAkkQQ1iczqxHWVk7WuJEgfEQ8AsB

wallet public key: 2L5DqBrc63qeUB5qeCEsAHsUDoY2c9nKppyyEwMnkgdz
create_candy_machine finished. candy machine pubkey: 7wrD1e2ApEdhVjkgFH2pGZg5m3S1gQUyjuYCNVaCK9Mp
startDate timestamp: 1639353600
wallet public key: 2L5DqBrc63qeUB5qeCEsAHsUDoY2c9nKppyyEwMnkgdz
 - updated startDate timestamp: 1639353600 (13 Dec 2021 00:00:00 GMT)
 - updated price: 1000000000 lamports (1 SOL)
update_candy_machine finished 5rZCS4KqaF9r1VfhLWNTqYquAdRyvdpKP84Q6D9m4ngi7igg4zzcj5HDGTb6Mto6DKoQGEp9NnzQHvsqU96iJHT7

```
