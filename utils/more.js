

function generateLicense(license) {
    return url+license;
}

function test(data){
    return`# ${data.title}
# 
    ${generateLicense(data.license)}
    `

}


module.exports = function(data){
    return`# ${data.title}

    ${generateLicense(data.license)}
    `

}
