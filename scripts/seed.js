import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //

    // const bounceHouses = [
    //   {itemType: 'BOUNCE_HOUSE', name: 'Slide Jumper'},
    //   {itemType: 'BOUNCE_HOUSE', name: 'Pink Jumper'},
    //   {itemType: 'BOUNCE_HOUSE', name: 'Blue Jumper'},
    // ];
    // const canopies = [
    //   {itemType: 'CANOPY', name: '10x20 Canopy'},
    //   {itemType: 'CANOPY', name: '20x20 Canopy'},
    //   {itemType: 'CANOPY', name: '20x20 Canopy'},
    // ];
    // const heaters = [
    //   {itemType: 'HEATER', name: 'Outdoor Heater'},
    //   {itemType: 'HEATER', name: 'Outdoor Heater'},
    //   {itemType: 'HEATER', name: 'Outdoor Heater'},
    // ];

    // const inventoryItems = [
    //   {itemType: 'CHAIR', chairs: 1000},
    //   {itemType: 'TABLE', tables: 100},
    //   // ...bounceHouses.map((bounceHouse) => {
    //   //   return {itemType: 'BOUNCE_HOUSE', bounceHouse }
    //   // }),
    //   // ...canopies.map((canopy) => {
    //   //   return {itemType: 'CANOPY', canopy }
    //   // }),
    //   // ...heaters.map((heater) => {
    //   //   return {itemType: 'HEATER', heater }
    //   // })
    // ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    console.log(await db.heater.findFirst())
    const bounceHouses = await db.bounceHouses.findMany();
    Promise.all(
      [
        bounceHouses.forEach(bounceHouse => {
          db.inventoryItem.create({
            where: {id: element.id},
            data: {itemType: 'BOUNCE_HOUSE', bounceHouse, bounceHouseId: bounceHouse.id }
          })
        }),
        // db.inventoryItem.createMany({data: inventoryItems}),
        // db.bounceHouse.createMany({data: bounceHouses}),
        // db.canopy.createMany({data: canopies}),
        // db.heater.createMany({data: heaters}),
      ]

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

list = await db.bounceHouse.findMany()
bh = list[2]
await db.inventoryItem.create({data: {itemType: "CANOPY", canopyId: c.id }})

list = await db.canopy.findMany()
await db.inventoryItem.create({data: {itemType: "CANOPY", canopyId: list[0].id }})
await db.inventoryItem.create({data: {itemType: "CANOPY", canopyId: list[1].id }})
await db.inventoryItem.create({data: {itemType: "CANOPY", canopyId: list[2].id }})

list = await db.heater.findMany()
await db.inventoryItem.create({data: {itemType: "HEATER", heaterId: list[0].id }})
await db.inventoryItem.create({data: {itemType: "HEATER", heaterId: list[1].id }})
await db.inventoryItem.create({data: {itemType: "HEATER", heaterId: list[2].id }})


await db.user.create({data: {email: "reyesregalado@gmail.com", name: "Abel", phoneNumber: "5103434956", role: "ADMIN" }})
await db.user.create({data: {email: "anareyeszamora0401@gmail.com", name: "Ana", phoneNumber: "5104262626", role: "ADMIN" }})
await db.user.create({data: {email: "carlos@funmail.com", name: "Carlos", phoneNumber: "5101234567", role: "DRIVER" }})