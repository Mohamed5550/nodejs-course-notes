function great(name)
{
    console.log(`Hello ${name}`);
}

function greatMohamed(greatFn)
{
    greatFn("Mohamed");
}

greatMohamed(great);

export default great;