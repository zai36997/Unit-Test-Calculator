var expect = require('chai').expect;
var sum = require('../cal');

describe('#Sum()',function(){
    context('Plus', function(){
        it('should throw an error',function(){//0
            expect(function(){ sum.add()}).to.throw(TypeError,"no data")
        })
        it('calculates the sum of 2 and 3',function(){//1
            expect(sum.add(2, 3)).to.equal(5)
        })
        it('should throw an error (sum of int and string ) ',function(){//2
            expect(function(){ sum.add(1,"2")}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of int and float) ',function(){//3
            expect(function(){sum.add(1,5.5)}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of string and int ) ',function(){//4
            expect(function(){ sum.add("2",1)}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of string and string ) ',function(){//5
            expect(function(){ sum.add("2","1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of string and float) ',function(){//6
            expect(function(){sum.add("5.5",1.5) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of float and int) ',function(){//7
            expect(function(){sum.add(5.5,1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of float and string) ',function(){//8
            expect(function(){sum.add(5.5,"1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (sum of float and float) ',function(){//9
            expect(function(){sum.add(5.5,2.5)}).to.throw(TypeError,"data must be a integer")
        })
     })
     
///////////////////////////////////////////////////////////////////////////////

     context('Minus', function(){
        it('should throw an error',function(){//0
            expect(function(){sum.minus() }).to.throw(TypeError,"no data")
        })
        it('calculates difference of 3 and 2',function(){//1
            expect(sum.minus(3, 2)).to.equal(1)
        })
        it('should throw an error (difference of int and string ) ',function(){//2
            expect(function(){sum.minus(1,"2") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (differenceof int and float) ',function(){//3
            expect(function(){sum.minus(1,5.5)}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (difference of string and int ) ',function(){//4
            expect(function(){sum.minus("2",1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (difference of string and string ) ',function(){//5
            expect(function(){sum.minus("2","1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (difference of string and float) ',function(){//6
            expect(function(){sum.minus("5.5",1.5)}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (difference of float and int) ',function(){//7
            expect(function(){sum.minus(5.5,1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (difference of float and string) ',function(){//8
            expect(function(){sum.minus(5.5,"1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (difference of float and float) ',function(){//9
            expect(function(){sum.minus(5.5,2.5) }).to.throw(TypeError,"data must be a integer")
        })
    
     })

     ///////////////////////////////////////////////////////////////////////////////

     context('Multiplies', function(){
        it('should throw an error',function(){//0
            expect(function(){sum.multiplies() }).to.throw(TypeError,"no data")
        })
        it('calculates multiplies of 3 and 2',function(){//1
            expect(sum.multiplies(3, 2)).to.equal(6)
        })
        it('should throw an error (Multiplies of int and string ) ',function(){//2
            expect(function(){sum.multiplies(1,"2") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of int and float) ',function(){//3
            expect(function(){ sum.multiplies(1,5.5) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of string and int ) ',function(){//4
            expect(function(){ sum.multiplies("2",1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of string and string ) ',function(){//5
            expect(function(){ sum.multiplies("2","1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of string and float) ',function(){//6
            expect(function(){ sum.multiplies("5.5",1.5)}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of float and int) ',function(){//7
            expect(function(){ sum.multiplies(5.5,1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of float and string) ',function(){//8
            expect(function(){  sum.multiplies(5.5,"1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Multiplies of float and float) ',function(){//9
            expect(function(){ sum.multiplies(5.5,2.5) }).to.throw(TypeError,"data must be a integer")
        })
     })

       ///////////////////////////////////////////////////////////////////////////////

       context('Divided by', function(){
        it('should throw an error ',function(){//2
            expect(function(){sum.dividedBy() }).to.throw(TypeError,"no data")
        })
        it('calculates divided by of 3 and 2',function(){//1
            expect(sum.dividedBy(6, 4)).to.equal(1.5)
        })
        it('should throw an error (y must be a non-zero integer) ',function(){//2
            expect(function(){sum.dividedBy(1,0) }).to.throw(TypeError,"y must be a non-zero integer")
        })
        it('should throw an error (Divided by of int and string ) ',function(){//2
            expect(function(){sum.dividedBy(1,"2") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of int and float) ',function(){//3
            expect(function(){ sum.dividedBy(1,5.5) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of string and int ) ',function(){//4
            expect(function(){ sum.dividedBy("2",1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of string and string ) ',function(){//5
            expect(function(){ sum.dividedBy("2","1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of string and float) ',function(){//6
            expect(function(){ sum.dividedBy("5.5",1.5)}).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of float and int) ',function(){//7
            expect(function(){ sum.dividedBy(5.5,1) }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of float and string) ',function(){//8
            expect(function(){  sum.dividedBy(5.5,"1") }).to.throw(TypeError,"data must be a integer")
        })
        it('should throw an error (Divided by of float and float) ',function(){//9
            expect(function(){ sum.dividedBy(5.5,2.5) }).to.throw(TypeError,"data must be a integer")
        })
     })
 })


