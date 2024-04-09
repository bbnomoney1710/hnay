function FtToMt(Ft)
{
    let mt=0.305*Ft;
    return mt;
}
function MtToFt(Mt)
{
    let ft=3.279*Mt;
    return ft;
}
function changee()
{
    let num=document.getElementById("num").value;
    let chk=document.getElementById("FandM").value;
    let res;
    if(chk=="FtoM")
        res=num+" feet = "+FtToMt(num)+" meter";
    else
        res=num+" meter = "+MtToFt(num)+" feet";
    document.getElementById("result").innerHTML=res;
}