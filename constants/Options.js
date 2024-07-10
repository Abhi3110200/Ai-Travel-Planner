export const SelectTravelesList =[
    {
        id: 1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1',
    },
    {
        id: 2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2',
    },
    {
        id: 3,
        title:'Family',
        desc:'A group of traveles in exploration',
        icon:'🏡',
        people:'3 to 5 People',
    }
]

export const SelectBudgetOptions=[
    {
        id: 1,
        title:'Cheap',
        desc:'A sole traveles in exploration',
        icon:'💰',
    },
    {
        id: 2,
        title:'Moderate',
        desc:'Two traveles in tandem',
        icon:'💰',
    },
    {
        id: 3,
        title:'Expensive',
        desc:'A group of traveles in exploration',
        icon:'💰',
    },
]

export const AI_PROMPT='Generate Travel Plan for Location : {location} , for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket pricing, Time t travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON format.'