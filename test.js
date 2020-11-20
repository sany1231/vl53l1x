const VL53L1X = require('vl53l1x')

const driver = 'i2c-bus'
const busNumber = 1
 
VL53L1X(busNumber, 0x29, {driver:driver}).then(async (device) => {
 
  device.on('data', (data) => {
        if(data['distance']<1000){
           console.log('in range',data['distance']);
        }
  })

  await device.timing(20,100)
 
  await device.start()
 
  process.on('exit', async (code) => {
    await device.stop()
  })
})
