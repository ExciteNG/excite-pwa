const electronics = [
  {
    name: "Televisions",
    sub: []
  },
  {
    name: "DVD Players and Recorders",
    sub: []
  },
  {
    name: "Cameras",
    sub: []
  },
  {
    name: "Accessories",
    sub: []
  },
  {
    name: "Home Theatre and Audio systems",
    sub: []
  },
  {
    name: "Games and Consoles",
    sub: []
  },
  {
    name: "Generators and Portable Powers",
    sub: []
  },
  {
    name: "Games and Consoles",
    sub: []
  },
]


const electronicsName = electronics.map(arr =>arr.name)

const returnElectronisSub = category => {
  const obj = electronics.filter(item=>item.name===category);
  if(obj.length>0){
    return obj[0].sub.sort()
  } else {
      return []
  }
}


