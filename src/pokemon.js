//basis for the pokemon objects
function Pokemon(name, imageURL, weight, hp, att, def, specAtt, specDef, speed) {
  this.name = name;
  this.imageURL = imageURL;
  this.weight = weight;
  this.hp = hp;
  this.att = att;
  this.def = def;
  this.specAtt = specAtt;
  this.specDef = specDef;
  this.speed = speed;
}

export default Pokemon;
