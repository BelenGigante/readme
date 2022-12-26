function generate(response){

}

function generateLicense(license) {
    return url+license;
}

function test(data){
    return`# ${data.title}
# 
    ${generateLicense(data.license)}
    `

}


module.exports={
    title,
    description,
    instalation,
    usage,
    contributing,
    tests,
    license,
    gitHub,
    eMail,
}











module.exports = function(data){
    return`# ${data.title}

    ${generateLicense(data.license)}
    `

}