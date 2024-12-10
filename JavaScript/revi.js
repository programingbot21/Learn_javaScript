const vid = {
    title: 'aa',
    tags: ['a','b','c','d'],
    showtag(){
      this.tags.forEach(function(tag){
        console.log(this ,tag)
      },this.title)  
    }
}
vid.showtag()