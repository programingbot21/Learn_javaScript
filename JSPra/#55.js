

function vaction(des, lar){
    this.des = des,
    this.lar = lar
}
vaction.prototype.print = function(){
    console.log(this.des + " | " + this.lar  + "|" + "jhgdh");
}

var marr = new vaction("Maui", 7)

marr.print();