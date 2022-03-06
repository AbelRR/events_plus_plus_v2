import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

    const bounceHouses = [
      {itemtype: 'BOUNCE_HOUSE', name: 'Slide Jumper'},
      {itemtype: 'BOUNCE_HOUSE', name: 'Pink Jumper'},
      {itemtype: 'BOUNCE_HOUSE', name: 'Blue Jumper'},
    ];
    const canopies = [
      {itemtype: 'CANOPY', name: '10x20 Canopy'},
      {itemtype: 'CANOPY', name: '20x20 Canopy'},
      {itemtype: 'CANOPY', name: '20x20 Canopy'},
    ];
    const heaters = [
      {itemtype: 'HEATER', name: 'Outdoor Heater'},
      {itemtype: 'HEATER', name: 'Outdoor Heater'},
      {itemtype: 'HEATER', name: 'Outdoor Heater'},
    ];

    const inventoryItems = [
      {itemType: 'CHAIR', chairs: 1000},
      {itemType: 'TABLE', chairs: 100},
      ...bounceHouses.map((bounceHouse) => {
        return {itemType: 'BOUNCE_HOUSE', bounceHouse }
      }),
      ...canopies.map((canopy) => {
        return {itemType: 'CANOPY', canopy }
      }),
      ...heaters.map((heater) => {
        return {itemType: 'HEATER', heater }
      })
    ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      [db.inventoryItem.createMany({data: inventoryItems}),]

    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}


// data.map(async (data) => {
//   const bounceHouseRecords = await db.bounceHouses.create({ data: bounceHouses })
//   const canopyRecords = await db.canopies.create({ data: canopies })
//   const heaterRecords = await db.heaters.create({ data: heaters })
//   const inventoryItemRecords = await db.inventoryItems.create({ data: inventoryItems })
//   console.log(record)
// })