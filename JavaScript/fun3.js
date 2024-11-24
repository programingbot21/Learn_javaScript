 // Invoke call()

 const per = {
    name: 'Ram',
    age: '14',
    stu: function(hometown, country){
        return "My name  " + this.name + " and age " +this.age + " " + hometown + " " + country
    }
 };

 const per1 = {
    name: 'Raju',
    age: 24
 }

 const pe = per.stu.call(per1, 'Delhi', 'India')
 console.log(pe);
 const pe1 = per.stu.apply(per1, ['Delhi', 'India'])
 console.log(pe);
 const res = per.stu.bind(per1, 'Delhi', 'India')
 console.log(res);




