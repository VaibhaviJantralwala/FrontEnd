class Marks{
    result(marks){
        console.log("Marks : ");
    }
}
class Result extends Marks{
    result(marks){
        super.result(marks);
        let total = 0;
        let max = 0;
        for(let i=0 ; i<marks.length ; i++){
            total += marks[i];
            if( max < marks[i]){
                max = marks[i];
            }
        }
        console.log("Total : "+total);
        console.log("Average : "+total/marks.length);
        console.log("Max : ",max)
    }
}

let marks = [90,65,89,99];
const m = new Result();
m.result(marks);
