const hre= require("hardhat");

async function main(){
    const Library = await hre.ethers.getContractFactory("Library");
    const library = await Library.deploy();
    await library.deployed();
    console.log("Library deployed to:",library.address);
    await library.deployTransaction.wait(6);
    console.log("Verifying..................................................................");
    try{
        await hre.run("verify:verify",{
            address:library.address,
            constructorArguments:[]
        }
        )
      }
        catch (e) {
          if (e.message.toLowerCase().includes("already verified")) {
              console.log("Already verified!");
          } else {
              console.log(e);
          }
        }

}
main().then(()=>process.exit(0)).catch((error)=>{
    console.error(error);
    process.exit(1);
})