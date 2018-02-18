var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period',
    dinosaur= 'triceratops', 
    dinosaurUpperCase = dinosaur.toUpperCase(),
    newText= text.replace('Velociraptor', dinosaurUpperCase),
    halfText = newText.substr(0, 72);

console.log(halfText);