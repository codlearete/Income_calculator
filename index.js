function CalAmt(v)
{
    var index = $(v).parent().parent().index();

    var rate = document.getElementsByName("rate")[index].value;
    var amt = rate;
    document.getElementsByName("amt")[index].value = amt;

    GetTotal();

}
function BtnAdd()
{
    var v = $("#TRow").clone().appendTo("#TBody");
    $(v).find("input").val('');

}
function GetTotal()
{
    var amount = document.getElementsByName("amt");
    var sum = 0;

    for(let index = 0;index<amount.length;index++)
    {
        var amtin = amount[index].value;
        sum = +(sum) + +(amtin);
    }

    document.getElementById("Ftotal").value = sum;
}      