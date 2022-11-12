function tunnel(convoy, max_height){
    if (!convoy || convoy.length == 0)
        return [];
    for (let i = 0; i < convoy.length; i++)
        if (convoy[i].altezza >= max_height)
            convoy.splice(i, 1);
    return convoy;
}