function printNos(n)
{
    if(n > 0)
    {
        console.log(n + " ");
        printNos(n - 1);
        
    }
    return;
}
 
    printNos(10);//10 9 8 7 6 5 4 3 2 1
