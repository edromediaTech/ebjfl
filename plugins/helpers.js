function displayFile(nomfile){
    const nf = nomfile.split('/')[(nomfile.split('/')).length -1]
     const ext = '.'+nf.split('.')[1]          
    const nfl = nf.split('_')[ nf.split('_').length -1].length
    const nfr = nf.substr(0, nf.length - nfl-1)+ext
    return nfr
  }
  
  export default{
    displayFile
  }