class Post {
  constructor(id, username, title, images, rent, area, station, availableFrom, typeOfRoom, minimumStay, description) {
    this.id = id;
    this.username = username;
    this.title = title;
    this.images = images;
    this.rent = rent;
    this.area = area;
    this.station = station;
    this.availableFrom = availableFrom;
    this.typeOfRoom = typeOfRoom;
    this.minimumStay = minimumStay;
    this.description = description;
  }
}

const posts = [
  {
    id: 1,
    username: "user1",
    title: "Basement Suite West Point Grey near UBC",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413593/po9eoggflbaypj2posqy.jpg", "https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413592/kk7h9cb2jbjrdihf11zk.jpg"],
    rent: 950,
    area: "UBC",
    station: "Broadway-City Hall",
    availableFrom: "2024-06-01",
    typeOfRoom: "Private Room",
    minimumStay: 3,
    description: "530sqft one-bedroom, one-bathroom, one small kitchen, and one living room. Newly renovated basement in detached house with new fridge, new induction stove for rent. Located at a very convenient location in the heart of Vancouver near quiet West Point Grey area very close to UBC. Walking distance to bus stops, grocery, cafes, restaurants, beach and parks.Queen Mary Elementary & Lord Byng Secondary."
  },
  {
    id: 2,
    username: "user2",
    title: "Private Bright Bedroom in New House",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413588/dwk7hbjiyjkih53ljrcf.jpg"],
    rent: 1100,
    area: "Burnaby",
    station: "Metrotown",
    availableFrom: "2024-06-01",
    typeOfRoom: "Basement",
    minimumStay: 3,
    description: "Available June 1 2024 • Furnished room with TV Cable and Internet ,semi private bathroom + bedding and towels included • Kitchen - shared with married couple/ son • Rent $1100 includes utilities and internet Fibre Optic fast speed • Newer Front Loading Washer and dryer, and Dishwasher • House with new appliances,Hardwood flooring /Raidant floor heating /has private fenced yard Free parking on street Location: • Near 41st ave. and Fraser Street • ,Very quiet neighbourhood • 1 min walk to bus to Fraser #8 bus 35 min to Downtown • 22 min R4 Express bus+Canada line train (Oakridge station) to downtown • School and Parks close by • 5-10min walk to Grocery stores, banks, restaurants"
  },
  {
    id: 3,
    username: "user3",
    title: "A newly furnished, well located bedroom for rent",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413590/swcuflnw2d6wfa9xflxv.jpg", "https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413585/gdtlkyxcqadfyu9c1tux.jpg", "https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413592/kk7h9cb2jbjrdihf11zk.jpg"],
    rent: 1000,
    area: "Vancouver",
    station: "29th Avenue",
    availableFrom: "2024-06-01",
    typeOfRoom: "Private Room",
    minimumStay: 3,
    description: "A very nice apartment for rent in Vancouver"
  },
  {
    id: 4,
    username: "user4",
    title: "Room available in Vancouver",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413586/tlnpn1r5cz0qg8fepyln.jpg"],
    rent: 900,
    area: "Vancouver",
    station: "Langara-49th Ave",
    availableFrom: "2024-06-01",
    typeOfRoom: "Private Room",
    minimumStay: 3,
    description: "We have one furnished room with private bathroom for rent. No more sharing of bathroom with other roommates."
  },
  {
    id: 5,
    username: "user5",
    title: "Shared House for Rent near Langara, available immediately",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413588/awafj0vh2qumkholxxnw.jpg"],
    rent: 900,
    area: "Langara",
    station: "Langara-49th Ave",
    availableFrom: "2024-06-01",
    typeOfRoom: "Shared Room",
    minimumStay: 3,
    description: "Shared house near Langara College, Vancouver, available immediately. Clean, bright and quiet. Buses and Sky Train near by. Female only, shared accommodation. Private bedroom with study desk. Fast Wifi, Netflix avaiable. $900/month, utilities included."
  },
  {
    id: 6,
    username: "user1",
    title: "Room for Rent",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413585/haaprgmooyspo3oahj7o.jpg"],
    rent: 700,
    area: "Burnaby",
    station: "Sperling-Burnaby Lake",
    availableFrom: "2024-06-01",
    typeOfRoom: "Private Room",
    minimumStay: 4,
    description: "Priivate furnished room in a quiet community in North Burnaby. 7 mins walk to bus station. 3 mins walk distance to kensington mall. bus R 5 35 mins to downtown. bus 30 mins to metrotown. bus 10 mins to SFU. bus 134 144 to skytrain station. bathroom, kitchen shared with other two female occupants. with toast oven, mini microwave, and small fridge inside the room. Looking for female student , Wifi utilities laundry dryer all included. rent is 700/ monthly"
  },
  {
    id: 7,
    username: "user7",
    title: "Private Room for rent",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413585/gdtlkyxcqadfyu9c1tux.jpg"],
    rent: 800,
    area: "Vancouver",
    station: "Stadium-Chinatown",
    availableFrom: "2024-06-01",
    typeOfRoom: "Den",
    minimumStay: 3,
    description: "A very nice apartment for rent in Vancouver"
  },
  {
    id: 8,
    username: "user1",
    title: "Private Room for rent",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413587/kzsiktxcwnyu15ovzl9c.jpg"],
    rent: 850,
    area: "Burnaby",
    station: "Metrotown",
    availableFrom: "2024-06-01",
    typeOfRoom: "Private Room",
    minimumStay: 6,
    description: "A very nice house for rent in Burnaby"
  },
  {
    id: 9,
    username: "user9",
    title: "Private Solarium Room in Downtown Vancouver",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413592/ycaabu7carrg5j31xrex.jpg"],
    rent: 1200,
    area: "Vancouver",
    station: "Granville",
    availableFrom: "2024-06-01",
    typeOfRoom: "Solarium",
    minimumStay: 3,
    description: "A very nice apartment for rent in Vancouver"
  },
  {
    id: 10,
    username: "user10",
    title: "Shared Room within walking distance to Joyce-Collingwood Skytrain Station",
    images: ["https://res.cloudinary.com/dps4ff9j8/image/upload/v1715413587/kzsiktxcwnyu15ovzl9c.jpg"],
    rent: 500,
    area: "Vancouver",
    station: "Joyce-Collingwood",
    availableFrom: "2024-06-01",
    typeOfRoom: "Shared Room",
    minimumStay: 3,
    description: "A very nice house for rent in Vancouver"
  }
]

export default posts;
export { Post };