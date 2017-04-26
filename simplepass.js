//type checkString below
function checkString(str)
{
    if(str.length > 8 && str.length < 20)
    {
        return str;
    }
    else
    {
        if(str.length < 8)
        {
            throw new RangeError("not enough characters");
        }
        if (str.length > 20)
        {
            throw new RangeError("too many characters");
        }
    }
}


//type getString below
function getString(str)
{
    try {
        checkString(str);
    } catch (e) {
        console.log(e.message);
    }

}

getString('this string is way too long'); 
