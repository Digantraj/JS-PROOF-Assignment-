/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let Number_Of_NFT = 0;
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (ID,Name,Day,Colour){
    const NFT ={
        "ID":ID,
        "Name":Name,
        "Day":Day,
        "Colour":Colour
    };
    Number_Of_NFT++;  //increment the number of nft
    return NFT;       // return the created nft
    
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (Array_NFT){
    Array_NFT.forEach(function(NFT){
        console.log("ID: " + NFT.ID);
        console.log("Name: " + NFT.Name);
        console.log("Day: " + NFT.Day);
        console.log("Colour: " + NFT.Colour);
        console.log("*-*-*-*-*-*-*-*-*-*-*-*-*");
    });
        
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return Number_Of_NFT;
}
// call your functions below this line
let NFTs1 =[];
NFTs1.push(mintNFT("NFT101","Raj","Wednesday","Yellow"));
NFTs1.push(mintNFT("NFT102","Umesh","Sunday","Green"));
NFTs1.push(mintNFT("NFT103","Anita","Saturday","White"));

listNFTs(NFTs1);
console.log("Total number of NFTs are : " + getTotalSupply() );


