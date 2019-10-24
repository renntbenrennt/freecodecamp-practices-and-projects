/**
 * 
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 * 
 * Test Case:
 * convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
 * convertHTML("Schindler's List") should return Schindler&apos;s List.
 * convertHTML("<>") should return &lt;&gt;.
 * convertHTML("abc") should return abc.
 *  
 */

function convertHTML(str) {
    let res = '';

    const regs = [
        /\&/g,
        /\"/g,
        /\'/g,
        /\</g,
        /\>/g
    ];

    const entities = [
        '&amp;',
        '&quot;',
        '&apos;',
        '&lt;',
        '&gt;'
    ]

    /// I need further research on why the following is not working...
    // switch (str) {
    //     case regs[0].test(str):
    //         res = str.replace(regs[0], entities[0]);
    //         break;
    //     case regs[1].test(str):
    //         res = str.replace(regs[1], entities[1]);
    //         break;
    //     case regs[2].test(str):
    //         res = str.replace(regs[2], entities[2]);
    //         break;
    //     case regs[3].test(str):
    //         res = str.replace(regs[3], entities[3]);
    //         break;
    //     case regs[4].test(str):
    //         res = str.replace(regs[4], entities[4]);
    //         break;
    //     default:
    //         break;
    // }

    /// I know, the code below is so not elegant... will refactor later....
    if (regs[0].test(str)) {
        res = str.replace(regs[0], entities[0]);
        console.log('res 1 = ', res);
    }
    if (regs[1].test(str)) {
        res = str.replace(regs[1], entities[1]);
        console.log('res 2 = ', res);
    }
    if (regs[2].test(str)) {
        res = str.replace(regs[2], entities[2]);
        console.log('res 3 = ', res);
    }
    if (regs[3].test(str)) {
        res = str.replace(regs[3], entities[3]);
        console.log('res 4 = ', res);
    }

    if (res === '') {
        if (regs[4].test(str)) {
            res = str.replace(regs[4], entities[4]);
            console.log('res 5 = ', res);
        }
    } else {
        if (regs[4].test(str)) {
            res = res.replace(regs[4], entities[4]);
            console.log('res 5 = ', res);
        }        
    }



    // &colon;&rpar;
    return res === '' ? str : res;
}