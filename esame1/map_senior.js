function map_senior(db){
    for (let i = 0; i < db.length; i++)
        db[i]['maggiorenne'] = (db[i].eta >= 18)
        return db;
}

console.log(map_senior([
    {'nome': 'Carla', 'eta': 18},
    {'nome': 'Giuseppe', 'eta': 3},
    {'nome': 'Ozzy Osbourne', 'eta': 73}, 
]))