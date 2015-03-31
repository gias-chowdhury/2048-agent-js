function NewTile(r, c, v, gridsize, d){
    this.row = r;
    this.col = c;
    this.value = v;
    this.n = gridsize;
    this.depth = d;
}

NewTile.prototype.WithinBorder = function(){
    return (row >= 0 && row < n) && (col >= 0 && col < n);
    
}
