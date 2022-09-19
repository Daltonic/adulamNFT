const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { faker } = require('@faker-js/faker')

const dir = './artworks'
let img_counter = 1
const img_size = { width: 500, height: 500 }
const desired_ext = '.webp'
const base_uri = 'https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/'
const attributes = {
  weapon: [
    'Stick',
    'Knife',
    'Blade',
    'Club',
    'Ax',
    'Sword',
    'Spear',
    'Halberd',
  ],
  environment: [
    'Space',
    'Sky',
    'Deserts',
    'Forests',
    'Grasslands',
    'Mountains',
    'Oceans',
    'Rainforests',
  ],
  rarity: Array.from(Array(6).keys()),
}

fs.readdirSync(dir).forEach((file) => {
  const original_ext = path.extname(file)
  const original_file_name = path.basename(file).split('.')[0]

  if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(original_ext)) {
    const id = img_counter

    const metadata = {
      id,
      name: `#${id} A.I Arts`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      price: 0.01,
      image: base_uri + img_counter + desired_ext,
      demand: faker.random.numeric({min: 10, max: 100}),
      attributes: [
        {
          "trait_type": "Environment",
          "value": attributes.environment.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Weapon",
          "value": attributes.weapon.sort(() => 0.5 - Math.random())[0]
        },
        {
          "trait_type": "Rarity",
          "value": attributes.rarity.sort(() => 0.5 - Math.random())[0]
        },
        {
          "display_type": "date", 
          "trait_type": "Created", 
          "value": Date.now()
        },
        {
          "display_type" : "number",
          "trait_type" : "generation",
          "value" : 1
       }
      ],
    }

    if (fs.existsSync(`${dir}/${original_file_name + original_ext}`)) {
      // sharp(`${dir}/${original_file_name + original_ext}`)
      //   .resize(img_size.height, img_size.width)
      //   .toFile(`${dir}/${img_counter + desired_ext}`, (err, info) =>
      //     console.log(err)
      //   )

      fs.writeFileSync(
        `${dir}/${img_counter}.json`,
        JSON.stringify(metadata),
        {
          encoding: 'utf8',
          flag: 'w',
        }
      )
      img_counter += 1
    }
  }
})
console.log('Completed!')
