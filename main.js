var name_array=[];

function submit(){

    var n1=document.getElementById("name_1").value;
    var n2=document.getElementById("name_2").value;
    var n3=document.getElementById("name_3").value;
    var n4=document.getElementById("name_4").value;

    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);

    console.log(name_array);

    document.getElementById("display_name").innerHTML=name_array;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
};
function sort(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;

    document.getElementById("submit").style.display="inline-block";
    document.getElementById("sort").style.display="none";
}