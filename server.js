const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = { 
    'kirill kaprizov':{
        'age': 25,
        'goals': 74,
        'assists': 85,
        'homeTown': 'Novokuznetsk, RUS',
        'penaltyMinutes': 50 
},
    'kevin fiala':{
        'age': 25,
        'goals': 124,
        'assists': 159,
        'homeTown': 'St.Gallen, CHE',
        'penaltyMinutes': '217'
},
    'mats zuccarello':{
        'age': 34,
        'goals': 164,
        'assists': 342,
        'homeTown':'Oslo, NOR',
        'penaltyMinutes': 264
},
    'ryan hartman':{
        'age': 27,
        'goals': 92,
        'assists': 104,
        'homeTown':'Hilton Head Island, SC, USA',
        'penaltyMinutes': 415
},
    'joel erikkson ek':{
        'age': 25,
        'goals': 69,
        'assists': 76,
        'homeTown':'Karlstad, SWE',
        'penaltyMinutes': 116
},
    'frederick gaudreau':{
        'age': 29,
        'goals': 19,
        'assists': 43,
        'homeTown':'Bromont, QC, CAN',
        'penaltyMinutes': 14
},
    'marcus foligno':{
        'age': 30,
        'goals': 109,
        'assists': 142,
        'homeTown':'Buffalo, NY, USA',
        'penaltyMinutes': 652
 },
    'jared spurgeon':{
        'age': 32,
        'goals': 99,
        'assists': 246,
        'homeTown':'Edmonton, AB, CAN',
        'penaltyMinutes': 130
},
    'matt boldy':{
        'age': 21,
        'goals': 15,
        'assists': 24,
        'homeTown':'Milford, MA, USA',
        'penaltyMinutes': 10
},
    'jonas brodin':{
        'age': 28,
        'goals': 44,
        'assists': 155,
        'homeTown':'Karlstad, SWE',
        'penaltyMinutes': 200
},
    'alex goligoski':{
        'age': 36,
        'goals': 85,
        'assists': 374,
        'homeTown':'Grand Rapids, MN, USA',
        'penaltyMinutes': 342
},
    'jordan greenway':{
        'age': 25,
        'goals':36,
        'assists': 76,
        'homeTown':'Canton, NY, USA',
        'penaltyMinutes': 201
},
    'matt dumba':{
        'age': 27,
        'goals': 75,
        'assists': 147,
        'homeTown':'Regina, SK, CAN',
        'penaltyMinutes': 318
},
    'dmitry kulikov':{
        'age': 31,
        'goals': 42,
        'assists': 156,
        'homeTown':'Lipetsk, RUS',
        'penaltyMinutes': 494
},
    'jon merrill':{
        'age': 30,
        'goals': 16,
        'assists': 70,
        'homeTown':'Oklahoma City, OK, USA',
        'penaltyMinutes':233
},
    'brandon duhaime':{
        'age': 25,
        'goals': 6,
        'assists': 11,
        'homeTown':'Coral Springs, FL, USA',
        'penaltyMinutes': 122
},
    'nick bjugstad':{
        'age': 29,
        'goals': 110,
        'assists': 127,
        'homeTown':'Minneapolis, MN, USA',
        'penaltyMinutes': 235
},
    'jordie benn':{
        'age': 34,
        'goals': 25,
        'assists': 110,
        'homeTown':'Victoria, BC, CAN',
        'penaltyMinutes': 232
},
    'connor dewar':{
        'age': 22,
        'goals': 2,
        'assists': 4,
        'homeTown':'The Pas, MB, CAN',
        'penaltyMinutes': 25
},
    'tyson jost':{
        'age': 24,
        'goals': 47,
        'assists': 62,
        'homeTown':'St.Albert, AB, CAN',
        'penaltyMinutes': 120
},
    'jacob middleton':{
        'age': 26,
        'goals': 4,
        'assists': 13,
        'homeTown':'Wainwright, AB, CAN',
        'penaltyMinutes': 95
},
    'nicolas deslauriers':{
        'age': 31,
        'goals': 44,
        'assists': 41,
        'homeTown':'LaSalle, QC, CAN',
        'penaltyMinutes': 521
},    
    'unknown':{
        'age': 0,
        'goals': 'Unknown',
        'assists': 'Unknown',
        'homeTown': 'Unknown',
        'penaltyMinutes': 'Unknown'
}
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const playerName = request.params.name.toLowerCase()
    if (players[playerName]){
        response.json(players[playerName])
    }else{
        response.json(players['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})