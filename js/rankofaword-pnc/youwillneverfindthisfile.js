function fn1()
{
    var str = document.getElementById('input').value.toLowerCase();

    // factorial of a number.
function fac(n)
{
    if (n == 0 || n == 1)
            return 1;
        return n * fac(n - 1);
}
 
 // Function to calculate
    // rank of the String.
function lexRank(s)
{
    n = s.length;
  
        // Initialize total count to 1.
        let t_count = 1;
  
        // loop to calculate
        // number of smaller Strings.
        for (let i = 0; i < n; i++)
        {
            // Count smaller
            // characters than s[i].
            let less_than = 0;
            for (let j = i + 1; j < n; j++)
            {
                if (s[i]
                    > s[j])
                {
                    less_than += 1;
                }
            }
  
            // Count frequency of
            // duplicate characters.
            let d_count = new Array(52);
            for(let i=0;i<52;i++)
                d_count[i]=0;
  
            for (let j = i; j < n; j++)
            {
                // Check whether the
                // character is upper
                // or lower case and
                // then increase the
                // specific element of
                // the array.
                if ((s[j] >= 'A')
                    && s[j] <= 'Z')
                    d_count[s[j].charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
                else
                    d_count[s[j].charCodeAt(0) - 'a'.charCodeAt(0) + 26] += 1;
            }
  
            // Compute the product of the factorials
            // of frequency of characters.
            let d_fac = 1;
            for (let ele=0;ele< d_count.length;ele++)
                d_fac *= fac(d_count[ele]);
  
            // add the number of smaller String
            // possible from index i to total count.
            t_count += (fac(n - i - 1)
                        * less_than) / d_fac;
        }
        return t_count

    }
    

    alert("Rank of "+str +" is "+lexRank(str));
}